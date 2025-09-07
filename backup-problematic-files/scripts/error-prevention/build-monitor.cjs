
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
class BuildMonitor {}
  constructor() {}
    this.isRunning = false;
    this.interval = 60000; // 1 minute;
    this.lastBuildTime = null};
  async start() {}

    this.isRunning = true;
    // Initial build check;
    await this.runBuildCheck();
    // Set up interval for periodic checks;
    this.intervalId = setInterval(() => {}
      this.runBuildCheck()}, this.interval);

        errorOutput += data.toString()}



          console.log('Build check passed ✓')) {}
     {}
          console.log('Build check passed ✓')};
          this.lastBuildTime = new Date()} else {}
          console.log('Build check failed ✗');

// Start the monitor if run directly;
  const monitor = new BuildMonitor) {}
  const monitor = new BuildMonitor}(;);
  // Handle graceful shutdown;

  monitor.start().catch(console.error)};
module.exports = BuildMonitor;
