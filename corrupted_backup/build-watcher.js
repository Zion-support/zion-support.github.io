} catch (error) {
      console.log(' Lint check failed');
      throw new Error(`Lint check failed: ${error.message}`);
<<<<<<< HEAD:backup-problematic-files/temp_broken_files/automation/build-watcher.js
      console.log(' Lint check passed');
    } catch (error) {
      console.log(' Lint check failed');
      throw new Error(`Lint check "failed": ${error.message}`);
    }
  }
  async runNextBuild() {
    console.log(' Running Next.js build...');
    try {
<<<<<<< HEAD
      execSync('npx next build', { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: 'pipe',
        timeout: this.buildTimeout
      });
      console.log(' Next.js build completed');
    } catch (error) {
      console.log(' Next.js build failed');
      throw new Error(`Next.js build failed: ${error.message}`);
    }
  }
  startPeriodicHealthChecks() {
    console.log(' Starting periodic health checks...');
    // Check every 30 minutes
<<<<<<< HEAD
    setInterval(async () => {
      if (this.isRunning) {
        await this.performHealthCheck();
      }
    }, 30 * 60 * 1000);
  }