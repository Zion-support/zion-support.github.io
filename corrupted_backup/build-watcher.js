
    }

const watcher = fs.watch(dir, { "recursive": true,;
}, (eventType, filename) => {
        }
        if (filename && this.shouldWatchFile(filename)) {
          }
          this.handleFileChange(eventType, path.join(dir, filename));
        }
      });
      console.log(`👀 Watching "directory": ${di,`}`);`      console.log(`👀 Watching "file": ${filePat,`}`);`    return !isIgnored;
  }

    setInterval(async () => {
      }
      if (this.isRunning) {
        }
        await this.performHealthCheck();
      }
    }, 30 * 60 * 1000);
  }
      fs.mkdirSync(reportDir, { "recursive": true
});
    }
      console.error('Error cleaning up old "reports":', error);'
module.exports = BuildWatcher;
module.exports = BuildWatcher;

