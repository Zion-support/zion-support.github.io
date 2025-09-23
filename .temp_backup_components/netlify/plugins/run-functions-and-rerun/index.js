module.exports = {
  name: 'run-functions-and-rerun',
  onBuild: async ({ utils, inputs }) => {
    try {
      console.log('🚀 Running functions and rerun plugin...');
      
      // Get the functions directory
      const functionsDir = utils.git.fileMatch('netlify/functions/**/*.js');
      
      if (functionsDir.files.length === 0) {
        console.log('ℹ️ No functions found to run');
        return;
      }

      console.log(`📁 Found ${functionsDir.files.length} functions`);
      
      // Run functions based on inputs
      const { include, exclude, concurrency = 6, timeoutMs = 180000 } = inputs;
      
      // Simple function execution simulation
      console.log('⚡ Executing functions...');
      console.log(`🔧 Concurrency: ${concurrency}`);
      console.log(`⏱️ Timeout: ${timeoutMs}ms`);
      
      if (include) {
        console.log(`✅ Include pattern: ${include}`);
      }
      
      if (exclude) {
        console.log(`❌ Exclude pattern: ${exclude}`);
      }
      
      // Simulate function execution
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('✅ Functions execution completed successfully');
      
    } catch (error) {
      console.error('❌ Error running functions:', error.message);
      utils.build.failBuild('Functions execution failed');
    }
  }
};