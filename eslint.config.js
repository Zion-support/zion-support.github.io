}
  }
  {
    files: ['**/*.cjs']
    languageOptions: {
      sourceType: 'commonjs'
      globals: {
        // Node.js globals,
  process: 'readonly'
        console: 'readonly'
        require: 'readonly'
        module: 'readonly'
        exports: 'readonly'
        __dirname: 'readonly'
        __filename: 'readonly'
        global: 'readonly'
        Buffer: 'readonly'
        setTimeout: 'readonly'
        clearTimeout: 'readonly'
        setInterval: 'readonly'
        clearInterval: 'readonly'
        setImmediate: 'readonly'
        clearImmediate: 'readonly'
      }
    }
  }
  {
    ignores: [
      // Node/build outputs
      '.next/**out/**dist/**build/**node_modules/**',
      // Public assets/scripts
      // Root-level noisy files
      '*.config.js*.config.cjs*.config.mjs*.backup.**.old.**.disabled.**.broken.**.corrupted.**.temp.*'
    ]
  }
],