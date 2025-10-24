/**
 * Data Cleanup Example
 * Demonstrates how to use the data cleanup system
 */
import { dataCleanup, CleanupConfig } from '../utils/dataCleanup';
import { dataRecordManager } from '../utils/dataRecordManager';
import { scheduledCleanup, ScheduleConfig } from '../utils/scheduledCleanup';

/**
 * Example: Basic data cleanup usage
 */
export async function basicCleanupExample() {
  console.log('=== Basic Data Cleanup Example ===');

  // Create some test data records
  const record1 = dataRecordManager.createRecord(
    { userId: 123, name: 'John Doe' },
    'user-data',
    'profile',
    { ttl: 24 * 60 * 60 * 1000 } // 24 hours
  );

  const record2 = dataRecordManager.createRecord(
    { sessionId: 'abc123', loginTime: Date.now() },
    'session-data',
    'login',
    { ttl: 60 * 60 * 1000 } // 1 hour
  );

  const record3 = dataRecordManager.createRecord(
    { tempData: 'temporary' },
    'temp-data',
    'cache',
    { ttl: 5 * 60 * 1000 } // 5 minutes
  );

  console.log('Created test records:', [record1.id, record2.id, record3.id]);

  // Get storage statistics
  const stats = await dataCleanup.getStorageStats();
  console.log('Storage stats:', stats);

  // Identify old records (dry run)
  const oldRecords = await dataCleanup.identifyOldRecords({
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    dryRun: true
  });
  console.log('Old records found:', oldRecords.length);

  // Run cleanup
  const cleanupStats = await dataCleanup.cleanup({
    maxAge: 7 * 24 * 60 * 60 * 1000,
    storageTypes: ['localStorage', 'sessionStorage'],
    dryRun: false
  });

  console.log('Cleanup completed:', cleanupStats);
}

/**
 * Example: Scheduled cleanup setup
 */
export function scheduledCleanupExample() {
  console.log('=== Scheduled Cleanup Example ===');

  // Configure scheduled cleanup
  const scheduleConfig: ScheduleConfig = {
    interval: 24 * 60 * 60 * 1000, // Run every 24 hours
    enabled: true,
    maxExecutionTime: 5 * 60 * 1000, // 5 minutes max
    retryAttempts: 3,
    retryDelay: 30 * 1000, // 30 seconds between retries
    cleanupConfig: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // Clean records older than 7 days
      storageTypes: ['localStorage', 'sessionStorage'],
      batchSize: 100
    }
  };

  // Start scheduled cleanup
  scheduledCleanup.updateConfig(scheduleConfig);
  scheduledCleanup.start();

  console.log('Scheduled cleanup started');
  console.log('Next run:', new Date(scheduledCleanup.getStats().nextRun || 0));
}

/**
 * Example: Category-based cleanup
 */
export async function categoryCleanupExample() {
  console.log('=== Category-based Cleanup Example ===');

  // Create records in different categories
  dataRecordManager.createRecord(
    { data: 'user1' },
    'user-profiles',
    'profile',
    { ttl: 30 * 24 * 60 * 60 * 1000 } // 30 days
  );

  dataRecordManager.createRecord(
    { data: 'session1' },
    'user-sessions',
    'session',
    { ttl: 24 * 60 * 60 * 1000 } // 1 day
  );

  dataRecordManager.createRecord(
    { data: 'temp1' },
    'temporary-data',
    'cache',
    { ttl: 60 * 60 * 1000 } // 1 hour
  );

  // Clean up only temporary data
  const tempCleanupStats = await dataCleanup.cleanupByCategory('temporary-data', {
    maxAge: 60 * 60 * 1000 // 1 hour
  });

  console.log('Temporary data cleanup:', tempCleanupStats);

  // Clean up only user sessions
  const sessionCleanupStats = await dataCleanup.cleanupByCategory('user-sessions', {
    maxAge: 24 * 60 * 60 * 1000 // 1 day
  });

  console.log('Session data cleanup:', sessionCleanupStats);
}

/**
 * Example: Advanced cleanup with custom configuration
 */
export async function advancedCleanupExample() {
  console.log('=== Advanced Cleanup Example ===');

  // Create records with different ages
  const now = Date.now();
  
  // Recent record (should be preserved)
  dataRecordManager.createRecord(
    { data: 'recent' },
    'test-category',
    'recent',
    { ttl: 24 * 60 * 60 * 1000 }
  );

  // Old record (should be deleted)
  const oldRecord = dataRecordManager.createRecord(
    { data: 'old' },
    'test-category',
    'old',
    { ttl: 24 * 60 * 60 * 1000 }
  );

  // Manually set old timestamp
  dataRecordManager.updateRecord(oldRecord.id, {
    metadata: { originalTimestamp: oldRecord.timestamp }
  });

  // Advanced cleanup configuration
  const config: CleanupConfig = {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    storageTypes: ['localStorage', 'sessionStorage'],
    dryRun: false,
    batchSize: 50,
    preservePatterns: [
      /^user_/, // Preserve user-related data
      /^auth_/, // Preserve authentication data
      /^settings_/ // Preserve settings
    ],
    categories: ['test-category'] // Only clean this category
  };

  // Run cleanup
  const stats = await dataCleanup.cleanup(config);
  console.log('Advanced cleanup stats:', stats);

  // Get final statistics
  const finalStats = dataRecordManager.getStats();
  console.log('Final record stats:', finalStats);
}

/**
 * Example: Data export and import
 */
export async function dataExportImportExample() {
  console.log('=== Data Export/Import Example ===');

  // Create some test records
  dataRecordManager.createRecord({ data: 'export1' }, 'export-test', 'type1');
  dataRecordManager.createRecord({ data: 'export2' }, 'export-test', 'type2');

  // Export records
  const exportedData = dataRecordManager.exportRecords({
    category: 'export-test'
  });

  console.log('Exported data:', exportedData);

  // Import records to sessionStorage
  const importedCount = dataRecordManager.importRecords(exportedData, 'sessionStorage');
  console.log('Imported records:', importedCount);

  // Verify import
  const sessionRecords = dataRecordManager.queryRecords({
    category: 'export-test'
  });
  console.log('Session storage records:', sessionRecords.length);
}

/**
 * Example: Monitoring and health checks
 */
export async function monitoringExample() {
  console.log('=== Monitoring Example ===');

  // Get current statistics
  const recordStats = dataRecordManager.getStats();
  const storageStats = await dataCleanup.getStorageStats();
  const scheduleStats = scheduledCleanup.getStats();

  console.log('Record statistics:', recordStats);
  console.log('Storage statistics:', storageStats);
  console.log('Schedule statistics:', scheduleStats);

  // Check if cleanup is due
  const isDue = scheduledCleanup.isCleanupDue();
  const timeUntilNext = scheduledCleanup.getTimeUntilNextCleanup();

  console.log('Cleanup due:', isDue);
  console.log('Time until next cleanup:', timeUntilNext, 'ms');

  // Run immediate cleanup if needed
  if (isDue) {
    console.log('Running immediate cleanup...');
    const stats = await scheduledCleanup.runNow();
    console.log('Immediate cleanup stats:', stats);
  }
}

/**
 * Run all examples
 */
export async function runAllExamples() {
  try {
    await basicCleanupExample();
    scheduledCleanupExample();
    await categoryCleanupExample();
    await advancedCleanupExample();
    await dataExportImportExample();
    await monitoringExample();
    
    console.log('=== All examples completed successfully ===');
  } catch (error) {
    console.error('Example failed:', error);
  }
}

// Export individual examples for testing
export {
  basicCleanupExample,
  scheduledCleanupExample,
  categoryCleanupExample,
  advancedCleanupExample,
  dataExportImportExample,
  monitoringExample
};