<<<<<<< HEAD
<<<<<<< HEAD

        const dependencies = lockFile.dependencies || {};
;
,;
        // This would need more sophisticated analysis,;
        return [],;
      };
      return [],;
    } catch (error) {,;
      this.log(`Duplicate dependency check error:${error.message}`),;
      return [],;
    };
  };
,;
  async start() {,;
    this.log('Build optimizer service started'),;
,;
    // Run optimization immediately,;
    await this.optimizeBuild(),;
,;
    // Set up interval for periodic optimization,;
    setInterval(async () => {,;
      await this.optimizeBuild(),;
    }, 24 * 60 * 60 * 1000), // Every 24 hours,;
  };
};
,;
// Start the service,;
const buildOptimizer = new BuildOptimizer(),;
buildOptimizer.start().catch(console.error),;
;
=======
const dependencies = lockFile.dependencies || {};
; // This would need more sophisticated analysis; return []}; return []} catch (error) {_; this.log(`Duplicate dependency check error: ${error.message}`); return []}};
; async start() {_; this.log('Build optimizer service started');
; // Run optimization immediately; await this.optimizeBuild();
; // Set up interval for periodic optimization; setInterval(async () = > {; await this.optimizeBuild()}, 24 * 60 * 60 * 1000), // Every 24 hours}};
;
// Start the service;
const _buildOptimizer = new BuildOptimizer();
buildOptimizer.start().catch(console.error);
=======
        const dependencies = lockFile.dependencies || {};
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
;
        // This would need more sophisticated analysis;
        return [];
      };
      return [];
    } catch (error) {;
      this.log(`Duplicate dependency check error: ${error.message}`);
      return [];
};
};
;
  async start() {;
    this.log('Build optimizer service started');
;
    // Run optimization immediately;
    await this.optimizeBuild();
;
    // Set up interval for periodic optimization;
    setInterval(async () => {;
      await this.optimizeBuild();
    }, 24 * 60 * 60 * 1000), // Every 24 hours;
};
};
;
// Start the service;
<<<<<<< HEAD
const _buildOptimizer = new BuildOptimizer();
buildOptimizer.start().catch(console.error);
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
const buildOptimizer = new BuildOptimizer();
buildOptimizer.start().catch(console.error);
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
