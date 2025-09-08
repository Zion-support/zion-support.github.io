    ];    
      }
    ];  }

      }
    ];  }

      }
    ];      try {
        const result = await customScript.script();
        this.results.details.push({
          'name': customScript.name,'
          'status': 'success','
          'result': result'
        });
        this.log(`✅ 'Completed': ${customScript.name}`)} catch (error) {`        }
        this.results.details.push({
          'name': customScript.name,'
          'status': 'failed','
          'error': error.message'
        });
        this.log(`❌ "Failed": ${customScript.name} - ${error.message}`, 'ERROR')}
    }
  }
  async detectErrors() {
    const errorPatterns = ['SyntaxError',
      'TypeError',
      'ReferenceError',
      'Module not found',
      'Cannot resolve',
      'Unexpected token'
    ];
    const errors = [];
    const srcDir = path.join(this.projectRoot, 'src');
    if (fs.existsSync(srcDir)) {
      const files = this.getAllFiles(srcDir, ['.js', '.jsx', '.ts', '.tsx']);
      for (const file of files.slice(0, 50)) { // Limit to first 50 files
        try {
  getAllFiles(dir, extensions) {
    let files = [];
    try {
          files.push(fullPath)}
