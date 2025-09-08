#!/usr/bin/env node}
    }
    
    return foundErrors}

// Run if called directly;
if (require.main === module) {}
  const monitor = new ErrorMonitor();
  // Run once immediately, then every 5 minutes;
  monitor.run();
  setInterval(() => monitor.run(), 5 * 60 * 1000);
;
  // Keep process alive}
;
module.exports = ErrorMonitor;

