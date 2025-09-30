#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class RealTimeAnalytics {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 60000; // 1 minute default
    this.analyticsMode = process.env.ANALYTICS_MODE || 'comprehensive';
    this.dataRetention = process.env.DATA_RETENTION || '30d';
    this.analyticsData = [];
    this.metrics = {
      totalDataPoints: 0,
      systemMetrics: 0,
      performanceMetrics: 0,
      userMetrics: 0
    };
    
    console.log('📊 Real-time Analytics Collector Started');
    console.log(`📊 Collection Interval: ${this.interval / 1000}s`);
    console.log(`🔧 Analytics Mode: ${this.analyticsMode}`);
    console.log(`💾 Data Retention: ${this.dataRetention}`);
  }

  async start() {
    console.log('🚀 Starting real-time analytics collection...');
    
    // Initial data collection
    await this.collectAnalytics();
    
    // Set up continuous collection
    setInterval(async () => {
      await this.collectAnalytics();
    }, this.interval);
    
    // Keep process alive
    setInterval(() => {
      this.logStatus();
    }, 300000); // Log status every 5 minutes
  }

  async collectAnalytics() {
    try {
      console.log('📊 Collecting real-time analytics...');
      
      const startTime = Date.now();
      
      // Collect system metrics
      const systemMetrics = await this.collectSystemMetrics();
      
      // Collect performance metrics
      const performanceMetrics = await this.collectPerformanceMetrics();
      
      // Collect user metrics
      const userMetrics = await this.collectUserMetrics();
      
      // Store analytics data
      const analyticsEntry = {
        timestamp: new Date().toISOString(),
        systemMetrics: systemMetrics,
        performanceMetrics: performanceMetrics,
        userMetrics: userMetrics,
        collectionTime: Date.now() - startTime
      };
      
      this.analyticsData.push(analyticsEntry);
      
      // Keep only recent data based on retention
      this.cleanupOldData();
      
      // Update metrics
      this.updateMetrics();
      
      // Save data
      this.saveData();
      
      console.log(`✅ Analytics collection completed in ${analyticsEntry.collectionTime}ms`);
      
    } catch (error) {
      console.error('❌ Error during analytics collection:', error.message);
    }
  }

  async collectSystemMetrics() {
    const metrics = {
      memory: process.memoryUsage(),
      cpu: process.cpuUsage(),
      uptime: process.uptime(),
      platform: process.platform,
      nodeVersion: process.version
    };
    
    return metrics;
  }

  async collectPerformanceMetrics() {
    const metrics = {
      buildSize: this.getBuildSize(),
      fileCount: this.getFileCount(),
      lastBuildTime: this.getLastBuildTime()
    };
    
    return metrics;
  }

  async collectUserMetrics() {
    const metrics = {
      activeUsers: 0, // Placeholder
      pageViews: 0,   // Placeholder
      sessionDuration: 0 // Placeholder
    };
    
    return metrics;
  }

  getBuildSize() {
    if (fs.existsSync('dist')) {
      return this.getDirectorySize('dist');
    }
    return 0;
  }

  getFileCount() {
    let count = 0;
    if (fs.existsSync('src')) {
      count += this.countFiles('src');
    }
    return count;
  }

  getLastBuildTime() {
    if (fs.existsSync('dist')) {
      try {
        const stats = fs.statSync('dist');
        return stats.mtime;
      } catch (error) {
        return null;
      }
    }
    return null;
  }

  getDirectorySize(dirPath) {
    let size = 0;
    try {
      const files = fs.readdirSync(dirPath);
      files.forEach(file => {
        const fullPath = path.join(dirPath, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          size += this.getDirectorySize(fullPath);
        } else {
          size += stat.size;
        }
      });
    } catch (error) {
      console.error('❌ Error calculating directory size:', error.message);
    }
    return size;
  }

  countFiles(dirPath) {
    let count = 0;
    try {
      const files = fs.readdirSync(dirPath);
      files.forEach(file => {
        const fullPath = path.join(dirPath, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          count += this.countFiles(fullPath);
        } else {
          count++;
        }
      });
    } catch (error) {
      console.error('❌ Error counting files:', error.message);
    }
    return count;
  }

  cleanupOldData() {
    const retentionDays = parseInt(this.dataRetention);
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - retentionDays);
    
    this.analyticsData = this.analyticsData.filter(entry => 
      new Date(entry.timestamp) > cutoffDate
    );
  }

  updateMetrics() {
    this.metrics.totalDataPoints = this.analyticsData.length;
    this.metrics.systemMetrics = this.analyticsData.length;
    this.metrics.performanceMetrics = this.analyticsData.length;
    this.metrics.userMetrics = this.analyticsData.length;
  }

  logStatus() {
    const memoryUsage = process.memoryUsage();
    const uptime = process.uptime();
    
    console.log(`📊 Analytics Status - Uptime: ${Math.round(uptime)}s, Memory: ${Math.round(memoryUsage.heapUsed / 1024 / 1024)}MB`);
    console.log(`📈 Data Points: ${this.metrics.totalDataPoints}`);
  }

  saveData() {
    try {
      const dataPath = path.join(process.cwd(), 'logs', 'real-time-analytics-data.json');
      fs.writeFileSync(dataPath, JSON.stringify(this.analyticsData, null, 2));
    } catch (error) {
      console.error('❌ Failed to save analytics data:', error.message);
    }
  }
}

// Start the real-time analytics collector
const analytics = new RealTimeAnalytics();
analytics.start().catch(error => {
  console.error('❌ Failed to start real-time analytics collector:', error);
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down real-time analytics collector...');
  analytics.saveData();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down real-time analytics collector...');
  analytics.saveData();
  process.exit(0);
});