/**
 * Enhanced Logger Test Suite
 *
 * Comprehensive tests for the EnhancedLogger utility
 */


describe('EnhancedLogger', () => {
  let logger: EnhancedLogger;

  beforeEach(() => {
    // Reset instance and get fresh instance for each test
    EnhancedLogger.resetInstance();
    logger = EnhancedLogger.getInstance({
      enableConsole: false,
      enableRemote: false,
      minLevel: LogLevel.DEBUG,
    });
  });

  describe('Singleton Pattern', () => {
    it('should return the same instance', () => {
      const instance1 = EnhancedLogger.getInstance();
      const instance2 = EnhancedLogger.getInstance();
      expect(instance1).toBe(instance2);
    });
  });

  describe('Log Levels', () => {
    it('should log debug messages', () => {
      logger.debug('Debug message', { test: true }, 'TestSource');
      const logs = logger.getLogs();

      expect(logs).toHaveLength(1);
      expect(logs[0].level).toBe(LogLevel.DEBUG);
      expect(logs[0].message).toBe('Debug message');
      expect(logs[0].source).toBe('TestSource');
      expect(logs[0].data).toEqual({ test: true });
    });

    it('should log info messages', () => {
      logger.info('Info message', { info: 'data' });
      const logs = logger.getLogs();

      expect(logs).toHaveLength(1);
      expect(logs[0].level).toBe(LogLevel.INFO);
      expect(logs[0].message).toBe('Info message');
    });

    it('should log warning messages', () => {
      logger.warn('Warning message', { warning: true });
      const logs = logger.getLogs();

      expect(logs).toHaveLength(1);
      expect(logs[0].level).toBe(LogLevel.WARN);
      expect(logs[0].message).toBe('Warning message');
    });

    it('should log error messages with stack trace', () => {
      const error = new Error('Test error');
      logger.error('Error occurred', { code: 500 }, error, 'ErrorSource');
      const logs = logger.getLogs();

      expect(logs).toHaveLength(1);
      expect(logs[0].level).toBe(LogLevel.ERROR);
      expect(logs[0].message).toBe('Error occurred');
      expect(logs[0].source).toBe('ErrorSource');
      expect(logs[0].data?.error).toBeDefined();
      expect(logs[0].stack).toBeDefined();
    });

    it('should log fatal messages', () => {
      const error = new Error('Fatal error');
      logger.fatal('Fatal error occurred', { critical: true }, error);
      const logs = logger.getLogs();

      expect(logs).toHaveLength(1);
      expect(logs[0].level).toBe(LogLevel.FATAL);
      expect(logs[0].message).toBe('Fatal error occurred');
    });
  });

  describe('Log Filtering', () => {
    beforeEach(() => {
      logger.debug('Debug log');
      logger.info('Info log');
      logger.warn('Warn log');
      logger.error('Error log');
    });

    it('should filter logs by level', () => {
      const errorLogs = logger.getLogs(LogLevel.ERROR);
      expect(errorLogs).toHaveLength(1);
      expect(errorLogs[0].message).toBe('Error log');
    });

    it('should filter logs by source', () => {
      logger.info('Source test 1', {}, 'TestSource1');
      logger.info('Source test 2', {}, 'TestSource2');
      logger.info('Source test 3', {}, 'TestSource1');

      const sourceLogs = logger.getLogsBySource('TestSource1');
      expect(sourceLogs).toHaveLength(2);
      expect(sourceLogs.every(log => log.source === 'TestSource1')).toBe(true);
    });

    it('should respect minimum log level', () => {
      logger.configure({ minLevel: LogLevel.WARN });
      logger.clearLogs();

      logger.debug('Should not appear');
      logger.info('Should not appear');
      logger.warn('Should appear');
      logger.error('Should appear');

      const logs = logger.getLogs();
      expect(logs).toHaveLength(2);
      expect(logs[0].level).toBe(LogLevel.WARN);
      expect(logs[1].level).toBe(LogLevel.ERROR);
    });
  });

  describe('Performance Measurement', () => {
    it('should measure performance duration', () => {
      logger.startPerformance('test_operation');

      // Simulate some work
      const start = Date.now();
      while (Date.now() - start < 10) {
        // Wait for at least 10ms
      }

      const duration = logger.endPerformance('test_operation');

      expect(duration).toBeDefined();
      expect(duration!).toBeGreaterThan(0);
      // Allow for some timing imprecision (9ms instead of 10ms)
      expect(duration!).toBeGreaterThanOrEqual(9);
    });

    it('should log performance results', () => {
      logger.startPerformance('test_op');
      logger.endPerformance('test_op', { operation: 'test' });

      const logs = logger.getLogs();
      const perfLog = logs.find(log => log.message.includes('Performance:'));

      expect(perfLog).toBeDefined();
      expect(perfLog?.data?.duration).toBeDefined();
      expect(perfLog?.data?.operation).toBe('test');
    });

    it('should handle missing performance marks', () => {
      const duration = logger.endPerformance('nonexistent_mark');
      expect(duration).toBeUndefined();

      // Should log a warning
      const logs = logger.getLogs(LogLevel.WARN);
      expect(logs.length).toBeGreaterThan(0);
      expect(logs[0].message).toContain('Performance mark');
    });
  });

  describe('Log Management', () => {
    it('should maintain maximum log limit', () => {
      logger.configure({ maxLogs: 5 });

      for (let i = 0; i < 10; i++) {
        logger.info(`Log ${i}`);
      }

      const logs = logger.getLogs();
      expect(logs).toHaveLength(5);
      expect(logs[0].message).toBe('Log 5');
      expect(logs[4].message).toBe('Log 9');
    });

    it('should clear all logs', () => {
      logger.info('Test log 1');
      logger.info('Test log 2');
      logger.info('Test log 3');

      expect(logger.getLogs()).toHaveLength(3);

      logger.clearLogs();
      expect(logger.getLogs()).toHaveLength(0);
    });

    it('should generate unique log IDs', () => {
      logger.info('Log 1');
      logger.info('Log 2');
      logger.info('Log 3');

      const logs = logger.getLogs();
      const ids = logs.map(log => log.id);
      const uniqueIds = new Set(ids);

      expect(uniqueIds.size).toBe(ids.length);
    });
  });

  describe('Statistics', () => {
    beforeEach(() => {
      logger.debug('Debug 1', {}, 'Source1');
      logger.debug('Debug 2', {}, 'Source1');
      logger.info('Info 1', {}, 'Source2');
      logger.warn('Warn 1', {}, 'Source2');
      logger.error('Error 1', {}, undefined, 'Source3');
    });

    it('should provide accurate statistics', () => {
      const stats = logger.getStatistics();

      expect(stats.total).toBe(5);
      expect(stats.byLevel['DEBUG']).toBe(2);
      expect(stats.byLevel['INFO']).toBe(1);
      expect(stats.byLevel['WARN']).toBe(1);
      expect(stats.byLevel['ERROR']).toBe(1);
    });

    it('should track logs by source', () => {
      const stats = logger.getStatistics();

      expect(stats.bySource['Source1']).toBe(2);
      expect(stats.bySource['Source2']).toBe(2);
      expect(stats.bySource['Source3']).toBe(1);
    });
  });

  describe('Log Export', () => {
    it('should export logs as JSON', () => {
      logger.info('Test log 1', { data: 'value1' });
      logger.warn('Test log 2', { data: 'value2' });

      const exported = logger.exportLogs();
      const parsed = JSON.parse(exported);

      expect(Array.isArray(parsed)).toBe(true);
      expect(parsed).toHaveLength(2);
      expect(parsed[0].message).toBe('Test log 1');
      expect(parsed[1].message).toBe('Test log 2');
    });

    it('should format timestamps in ISO format', () => {
      logger.info('Test log');

      const exported = logger.exportLogs();
      const parsed = JSON.parse(exported);

      expect(parsed[0].timestamp).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    });
  });

  describe('Configuration', () => {
    it('should update configuration', () => {
      logger.configure({
        minLevel: LogLevel.ERROR,
        maxLogs: 100,
      });

      logger.clearLogs();

      logger.info('Should not appear');
      logger.error('Should appear');

      const logs = logger.getLogs();
      expect(logs).toHaveLength(1);
      expect(logs[0].level).toBe(LogLevel.ERROR);
    });
  });

  describe('Timestamp and Metadata', () => {
    it('should include timestamp in log entries', () => {
      const before = new Date();
      logger.info('Test log');
      const after = new Date();

      const logs = logger.getLogs();
      expect(logs[0].timestamp).toBeInstanceOf(Date);
      expect(logs[0].timestamp.getTime()).toBeGreaterThanOrEqual(before.getTime());
      expect(logs[0].timestamp.getTime()).toBeLessThanOrEqual(after.getTime());
    });

    it('should include environment in log entries', () => {
      logger.info('Test log');
      const logs = logger.getLogs();

      expect(logs[0].environment).toBeDefined();
    });
  });

  describe('Error Handling', () => {
    it('should handle error objects correctly', () => {
      const error = new Error('Test error message');
      error.stack = 'Error: Test error message\n    at Test.spec';

      logger.error('Operation failed', { context: 'test' }, error);

      const logs = logger.getLogs();
      expect(logs[0].data?.error).toBeDefined();
      const errorData = logs[0].data?.error as any;
      expect(errorData.name).toBe('Error');
      expect(errorData.message).toBe('Test error message');
      expect(errorData.stack).toContain('Test error message');
    });

    it('should handle errors without stack traces', () => {
      const error = new Error('Simple error');
      delete error.stack;

      logger.error('Error occurred', {}, error);

      const logs = logger.getLogs();
      expect(logs[0].data?.error).toBeDefined();
    });
  });

  describe('Data Integrity', () => {
    it('should preserve complex data structures', () => {
      const complexData = {
        nested: {
          array: [1, 2, 3],
          object: { key: 'value' },
        },
        boolean: true,
        number: 42,
        nullValue: null,
      };

      logger.info('Complex data', complexData);

      const logs = logger.getLogs();
      expect(logs[0].data).toEqual(complexData);
    });

    it('should handle undefined data gracefully', () => {
      logger.info('No data');

      const logs = logger.getLogs();
      expect(logs[0].data).toBeUndefined();
    });

    it('should handle empty data objects', () => {
      logger.info('Empty data', {});

      const logs = logger.getLogs();
      expect(logs[0].data).toEqual({});
    });
  });
});
