>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
      child.on('close', (code) => {}
        if ( {})
          console.log('Build check passed ✓')) {}
     {}
          console.log('Build check passed ✓')};
          this.lastBuildTime = new Date()} else {}
          console.log('Build check failed ✗');
          console.log('"Output": ', output);
          console.log('"Errors": ', errorOutput);
          // Attempt to fix common build issues;
          this.attemptBuildFix()};
      })} catch (error) {}
      console.error('Error running build "check": ', error.message)};
  };
  async attemptBuildFix() {}
    try {}
      console.log('Attempting to fix build issues...');
<<<<<<< HEAD
=======
            // Clean build directory;
      const cleanChild = spawn('npm', ['run', 'clean'], {})
        "stdio": 'inherit',
        "cwd": process.cwd();
      };);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
      cleanChild.on('close', (code) => {}
        if ( {})
          console.log('Clean completed, retrying build...')) {}
     {}
          console.log('Clean completed, retrying build...')};
          this.runBuildCheck()} else {}
          console.log('Clean failed')};
      })} catch (error) {}
      console.error('Error running build "fix": ', error.message)};
  };
  stop() {}
    console.log('Stopping Build Monitor...');
    this.isRunning = false;
    if ( {})
      clearInterval(this.intervalId)};
    console.log('Build Monitor stopped')) {}
     {}
      clearInterval(this.intervalId)};
    console.log('Build Monitor stopped')}};
};
// Start the monitor if run directly;
if ( {})
  const monitor = new BuildMonitor) {}
     {}
  const monitor = new BuildMonitor}(;);
  // Handle graceful shutdown;
  process.on('SIGINT', () => {}
    monitor.stop();
    process.exit(0)}
});
  process.on('SIGTERM', () => {}
    monitor.stop();
    process.exit(0)}
});
  monitor.start().catch(console.error)};
<<<<<<< HEAD
module.exports = BuildMonitor;
=======
module.exports = BuildMonitor;