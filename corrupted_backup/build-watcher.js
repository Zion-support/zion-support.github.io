
      fs.mkdirSync(logsDir, { recursive: true });
    }
      const watcher = fs.watch(dir, { recursive: true }, (eventType, filename) => {
        if (filename && this.shouldWatchFile(filename)) {
          this.handleFileChange(eventType, path.join(dir, filename));
        }
      });
      console.log(`👀 Watching directory: ${dir}`);
      console.log(`👀 Watching file: ${filePath}`);
    return !isIgnored;
  }
    return new RegExp(`^${regexStr}$`);
  }
      console.log(`✅ Build completed successfully in ${buildDuration}ms`);
      console.log('✅ Type check passed);
    } catch (error) {
      console.log(❌ Type check failed');
      throw new Error(`Type check failed: ${error.message}`);
      console.log('✅ Lint check passed);
    } catch (error) {
      console.log(❌ Lint check failed');
      throw new Error(`Lint check failed: ${error.message}`);
      execSync('npx next build, { 
        encoding: utf8', 
        cwd: this.projectRoot,
        stdio: 'pipe,
        timeout: this.buildTimeout
      });
      console.log(✅ Next.js build completed');
    } catch (error) {
      console.log('❌ Next.js build failed);
      throw new Error(`Next.js build failed: ${error.message}`);
    } catch (error) {
      console.error(❌ Error fixer failed:', error);
    setInterval(async () => {
      if (this.isRunning) {
        await this.performHealthCheck();
      }
    }, 30 * 60 * 1000);
  }
      fs.mkdirSync(reportDir, { recursive: true });
    }
      console.error('Error cleaning up old reports:', error);
module.exports = BuildWatcher;
module.exports = BuildWatcher;

