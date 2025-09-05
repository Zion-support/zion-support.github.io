const originalLog = console.log;
        let fixCount = 0;
        console.log = (...args) => {
          const message = args.join(' '
          if (message.includes(' Fixed') || message.includes('fixes applied'
          // // require('/workspace/scripts/automation/console-error-fixer.cjs'
          console.error('Script "error"