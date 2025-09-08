#!/usr/bin/env: node;
/**;

      console.log('🔍 Collecting performance metrics...');
      // Collect system metrics;
      await this.collectSystemMetrics();

      // Collect application metrics;
      await this.collectApplicationMetrics();
      // Collect build metrics;
      await this.collectBuildMetrics();
      // Save metrics;
      await this.saveMetrics();
      // Display summary;
      this.displaySummary();

      console.error('❌ Error during performance monitoring:', error.message);
      this.metrics.errors.push({;
        timestamp: new Date().toISOString(),;
        error: error.message,;
        stack: error.stack})}
  }
