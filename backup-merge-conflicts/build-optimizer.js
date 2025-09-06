<<<<<<< HEAD
const dependencies = lockFile.dependencies |{}; // This would need more sophisticated analysis; return []}; return []} catch (error) {this.log(`Duplicate dependency check error: ${error.message}`); return []}}; async start() {this.log('Build optimizer service started'); // Run optimization immediately; await this.optimizeBuild(); // Set up interval for periodic optimization; setInterval(async () = > {; await this.optimizeBuild()}, 24 * 60 * 60 * 1000), // Every 24 hours}}
=======
const dependencies = lockFile.dependencies || {};
; // This would need more sophisticated analysis; return []}; return []} catch (error) {; this.log(`Duplicate dependency check error: ${error.message}`); return []}};
; async start() {; this.log('Build optimizer service started');
; // Run optimization immediately; await this.optimizeBuild();
; // Set up interval for periodic optimization; setInterval(async () = > {; await this.optimizeBuild()}, 24 * 60 * 60 * 1000), // Every 24 hours}};
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
// Start the service;
const buildOptimizer = new BuildOptimizer();
buildOptimizer.start().catch(console.error);
        // This would need more sophisticated analysis;
        return [];
      }
      return [];
    } catch (error) {this.log(`Duplicate dependency check error: ${error.message}`);
      return [];
}
}
  async start() {this.log('Build optimizer service started');
    // Run optimization immediately;
    await this.optimizeBuild();
    // Set up interval for periodic optimization;
    setInterval(async () => {;
      await this.optimizeBuild();
    }, 24 * 60 * 60 * 1000), // Every 24 hours;
}
}
// Start the service;
const buildOptimizer = new BuildOptimizer();
<<<<<<< HEAD
buildOptimizer.start().catch(console.error);
=======
buildOptimizer.start().catch(console.error);
<<<<<<< HEAD

=======
},;
,;
// Start the service,;
const buildOptimizer = new BuildOptimizer(),;
buildOptimizer.start().catch(console.error),;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
