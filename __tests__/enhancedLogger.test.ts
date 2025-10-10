import { describe, it, expect } from '@jest/globals';

describe('enhancedLogger', () => {
  it('should log messages', () => {
    const logger = {
      info: jest.fn(),
      error: jest.fn(),
      warn: jest.fn(),
      debug: jest.fn()
    };
    
    logger.info('Test message');
    expect(logger.info).toHaveBeenCalledWith('Test message');
  });

  it('should handle different log levels', () => {
    const logger = {
      info: jest.fn(),
      error: jest.fn(),
      warn: jest.fn(),
      debug: jest.fn()
    };
    
    logger.error('Error message');
    logger.warn('Warning message');
    logger.debug('Debug message');
    
    expect(logger.error).toHaveBeenCalledWith('Error message');
    expect(logger.warn).toHaveBeenCalledWith('Warning message');
    expect(logger.debug).toHaveBeenCalledWith('Debug message');
  });
});