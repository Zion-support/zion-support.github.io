<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> merged-prs-20250907-203621
}},
}},
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
=======
=======
}},
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> merged-prs-20250907-203621
}},





#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
// Security checks
const securityChecks = [{

    "action": () => {"
      try {
  // TODO: Implement
}"

      } catch (error) {
      }
    },
main

    }},
<<<<<<< HEAD

main



    }},
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  {
    "name": 'Environment Variables Check',
    "action": () => {

  {
    "name": 'Environment Variables Check',
    "action": () => {"]"
      const envFiles = ['.env', '.env.local', '.env.production'];

      let foundEnvFiles = 0;
<<<<<<< HEAD
=======
<<<<<<< HEAD
      envFiles.forEach(envFile => {
        if (fs.existsSync(envFile)) {
          foundEnvFiles++;
        }
      });
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
      console.log(`Found ${foundEnvFiles} environment files`);
    },
  },
=======
<<<<<<< HEAD
<<<<<<< HEAD
      console.log(`Found ${foundEnvFiles} environment files`);
    },
  },
=======
<<<<<<< HEAD
<<<<<<< HEAD
      console.log(`Found ${foundEnvFiles} environment files`);
    },
  },
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
>>>>>>> merged-prs-20250907-203621
      

      
origin/cursor/integrate-build-improve-and-re-verify-c7b5

origin/cursor/expand-services-advertise-and-build-project-c28b
main


<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
      
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
>>>>>>> merged-prs-20250907-203621

      envFiles.forEach(envFile => {)
        if (fs.existsSync(envFile)) {
          foundEnvFiles++;
      });

<<<<<<< HEAD
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a





<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
    }},
  {
    "name": API Security Check,
    "action": () => {
      const apiDir = path.join(process.cwd(),pages,api');

      if (fs.existsSync(apiDir)) {
        const apiFiles = fs;
          .readdirSync(apiDir)
          .filter(file => file.endsWith('.ts') || file.endsWith('.js'));
        let securityIssues = 0;
<<<<<<< HEAD
=======
<<<<<<< HEAD
        apiFiles.forEach(file => {
          const content = fs.readFileSync(path.join(apiDir, file), 'utf8');
          if (
            content.includes('process.env') &&
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
<<<<<<< HEAD
            !content.includes('// Security: ')
=======
<<<<<<< HEAD
<<<<<<< HEAD
            !content.includes('// Security: ')
=======
<<<<<<< HEAD
<<<<<<< HEAD
            !content.includes('// Security: ')
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
>>>>>>> merged-prs-20250907-203621
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5

origin/cursor/expand-services-advertise-and-build-project-c28b
main

        apiFiles.forEach(file => {)








<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
            !content.includes('// "Security": ')

          ) {
            securityIssues++;
<<<<<<< HEAD
=======
<<<<<<< HEAD
          }
        });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b


<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a




<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> merged-prs-20250907-203621













        console.log(
          `Found ${apiFiles.length} API files, ${securityIssues} potential security issues`)
        );
<<<<<<< HEAD
        

=======
<<<<<<< HEAD
      }
    },
  },
<<<<<<< HEAD


=======
        
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

        
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5

origin/cursor/expand-services-advertise-and-build-project-c28b

        
main

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======





        

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
      }
    }},
  {
    "name": Content Security Policy Check,
    "action": () => {
      const pagesDir = path.join(process.cwd(),pages');

      if (fs.existsSync(pagesDir)) {
        const pages = fs;
          .readdirSync(pagesDir)
          .filter(file => file.endsWith('.tsx'));
        let cspFound = 0;
<<<<<<< HEAD
=======
<<<<<<< HEAD
        pages.forEach(page => {
          const content = fs.readFileSync(path.join(pagesDir, page), 'utf8');
          if (
            content.includes('Content-Security-Policy') ||
            content.includes('CSP')
          ) {
            cspFound++;
          }
        });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b


<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> merged-prs-20250907-203621





        console.log(`Found CSP in ${cspFound}/${pages.length} pages`);
      }
    },
  },
<<<<<<< HEAD
        

=======
<<<<<<< HEAD


=======
        
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

        
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======

        pages.forEach(page => {)

            cspFound++;




>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a



<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a





<<<<<<< HEAD
        

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
      }
    }},
  {
    "name": 'HTTPS Enforcement Check',
    "action": () => {

    "name": 'HTTPS Enforcement Check',
      const nextConfigPath = path.join(process.cwd(), 'next.config.js');
      if (fs.existsSync(nextConfigPath)) {
        const content = fs.readFileSync(nextConfigPath, 'utf8')
        if (content.includes('https') || content.includes('secure')) {
        } else {
<<<<<<< HEAD
=======
<<<<<<< HEAD
        }
      } else {
      }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
<<<<<<< HEAD
    },
  },
=======
<<<<<<< HEAD
<<<<<<< HEAD
    },
  },
=======
<<<<<<< HEAD
<<<<<<< HEAD
    },
  },
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
>>>>>>> merged-prs-20250907-203621
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5

origin/cursor/expand-services-advertise-and-build-project-c28b
main








<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
    }},
]
// Run security checks
  // TODO: Implement
  // TODO: Implement




























];

// Run security checks;
let successCount = 0;
let totalCount = securityChecks.length;
for (const check of securityChecks) {
  try {
    
    check.action();
    
    successCount++;
  } catch (error) {
    
  }
}

// Generate security report
  // TODO: Implement
    check.action();
    successCount++;


const report = {

  "checks": securityChecks.map(check => ({"
    name: check.name,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> merged-prs-20250907-203621





    status: 'completed',
  })),
  summary: {,
  total: totalCount,
    successful: successCount,
    failed: totalCount - successCount,
  },
};
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
>>>>>>> merged-prs-20250907-203621
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5

origin/cursor/expand-services-advertise-and-build-project-c28b
main









<<<<<<< HEAD

    "status": 'completed'})),
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    "status": 'completed'})),
<<<<<<< HEAD
  "summary": {
    total: totalCount,
    "successful": successCount,
    "failed": totalCount - successCount}};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

main
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======


<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621




<<<<<<< HEAD




=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
const reportsDir = path.join(process.cwd(), 'automation-reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { "recursive": true });
}
const reportFile = path.join(reportsDir, `security-report-${Date.now()}.json`);
fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
<<<<<<< HEAD
console.log(`📄 Security report saved to: ${reportFile}`);
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");"console.log(" Security Audit Starting.\n");/ Security checksconst securityChecks = [{" name: "Dependency Vulnerability Scan"," action: () => {" console.log(" Scanning for vulnerable dependencies."); try {"" execSync("npm audit --audit-level=moderate", { stdio: "pipe" });" console.log(" No high-severity vulnerabilities found"); } catch (error) {" console.log(" Some vulnerabilities found - check npm audit output"); } }}, {"" name: "Environment Variables Check"," action: () => {" console.log(" Checking environment variables.");" const envFiles = [".env", ".env.local", ".env.production"]; let foundEnvFiles = 0; envFiles.forEach(envFile => { if (fs.existsSync(envFile)) { foundEnvFiles++; console.log(`Found ${envFile}`); } });` console.log(`Found ${foundEnvFiles} environment files`); }}, {"" name: "API Security Check"," action: () => {" console.log(" Checking API security.");" const apiDir = path.join(process.cwd(), "pages", "api"); if (fs.existsSync(apiDir)) { const apiFiles = fs .readdirSync(apiDir)" .filter(file => file.endsWith(".ts") | file.endsWith(".js")); let securityIssues = 0; apiFiles.forEach(file => {" const content = fs.readFileSync(path.join(apiDir, file), "utf8"); if (" content.includes("process.env") &&"" !content.includes("/ Security: ") ) { securityIssues++; } }); console.log(` `Found ${apiFiles.length} API files, ${securityIssues} potential security issues` ); } }}, {"" name: "Content Security Policy Check"," action: () => {" console.log(" Checking Content Security Policy.");" const pagesDir = path.join(process.cwd(), "pages"); if (fs.existsSync(pagesDir)) { const pages = fs .readdirSync(pagesDir)" .filter(file => file.endsWith(".tsx")); let cspFound = 0; pages.forEach(page => {" const content = fs.readFileSync(path.join(pagesDir, page), "utf8"); if (" content.includes("Content-Security-Policy") |" content.includes("CSP") ) { cspFound++; } });` console.log(`Found CSP in ${cspFound}/${pages.length} pages`); } }}, {"" name: "HTTPS Enforcement Check"," action: () => {" console.log(" Checking HTTPS enforcement.");" const nextConfigPath = path.join(process.cwd(), "next.config.js"); if (fs.existsSync(nextConfigPath)) {" const content = fs.readFileSync(nextConfigPath, "utf8");" if (content.includes("https") | content.includes("secure")) {" console.log(" HTTPS configuration found"); } else {" console.log(" No HTTPS enforcement found"); } } else {" console.log(" No Next.js config found"); } }},];/ Run security checkslet successCount = 0;let totalCount = securityChecks.length;for (const check of securityChecks) { try {` console.log(`\n ${check.name}.`); check.action();` console.log(` ${check.name} completed`); successCount++; } catch (error) {"` console.log(` ${check.name} failed: ${error.message}`); }}"console.log("\n Security Audit Complete!");"`console.log(` Successfully completed: ${successCount}/${totalCount} checks`);/ Generate security reportconst report = {" timestamp: new Date().toISOString()," checks: securityChecks.map(check => ({ name: check.name,"" status: "completed"}))," summary: { total: totalCount," successful: successCount," failed: totalCount - successCount}};"const reportsDir = path.join(process.cwd(), "automation-reports");if (!fs.existsSync(reportsDir)) {" fs.mkdirSync(reportsDir, { recursive: true });}`const reportFile = path.join(reportsDir, `security-report-${Date.now()}.json`);fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));"`console.log(` Security report saved to: ${reportFile}`);""`"`

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
console.log(`📄 Security report saved to: ${reportFile}`);
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");"console.log(" Security Audit Starting.\n");/ Security checksconst securityChecks = [{" name: "Dependency Vulnerability Scan"," action: () => {" console.log(" Scanning for vulnerable dependencies."); try {"" execSync("npm audit --audit-level=moderate", { stdio: "pipe" });" console.log(" No high-severity vulnerabilities found"); } catch (error) {" console.log(" Some vulnerabilities found - check npm audit output"); } }}, {"" name: "Environment Variables Check"," action: () => {" console.log(" Checking environment variables.");" const envFiles = [".env", ".env.local", ".env.production"]; let foundEnvFiles = 0; envFiles.forEach(envFile => { if (fs.existsSync(envFile)) { foundEnvFiles++; console.log(`Found ${envFile}`); } });` console.log(`Found ${foundEnvFiles} environment files`); }}, {"" name: "API Security Check"," action: () => {" console.log(" Checking API security.");" const apiDir = path.join(process.cwd(), "pages", "api"); if (fs.existsSync(apiDir)) { const apiFiles = fs .readdirSync(apiDir)" .filter(file => file.endsWith(".ts") | file.endsWith(".js")); let securityIssues = 0; apiFiles.forEach(file => {" const content = fs.readFileSync(path.join(apiDir, file), "utf8"); if (" content.includes("process.env") &&"" !content.includes("/ Security: ") ) { securityIssues++; } }); console.log(` `Found ${apiFiles.length} API files, ${securityIssues} potential security issues` ); } }}, {"" name: "Content Security Policy Check"," action: () => {" console.log(" Checking Content Security Policy.");" const pagesDir = path.join(process.cwd(), "pages"); if (fs.existsSync(pagesDir)) { const pages = fs .readdirSync(pagesDir)" .filter(file => file.endsWith(".tsx")); let cspFound = 0; pages.forEach(page => {" const content = fs.readFileSync(path.join(pagesDir, page), "utf8"); if (" content.includes("Content-Security-Policy") |" content.includes("CSP") ) { cspFound++; } });` console.log(`Found CSP in ${cspFound}/${pages.length} pages`); } }}, {"" name: "HTTPS Enforcement Check"," action: () => {" console.log(" Checking HTTPS enforcement.");" const nextConfigPath = path.join(process.cwd(), "next.config.js"); if (fs.existsSync(nextConfigPath)) {" const content = fs.readFileSync(nextConfigPath, "utf8");" if (content.includes("https") | content.includes("secure")) {" console.log(" HTTPS configuration found"); } else {" console.log(" No HTTPS enforcement found"); } } else {" console.log(" No Next.js config found"); } }},];/ Run security checkslet successCount = 0;let totalCount = securityChecks.length;for (const check of securityChecks) { try {` console.log(`\n ${check.name}.`); check.action();` console.log(` ${check.name} completed`); successCount++; } catch (error) {"` console.log(` ${check.name} failed: ${error.message}`); }}"console.log("\n Security Audit Complete!");"`console.log(` Successfully completed: ${successCount}/${totalCount} checks`);/ Generate security reportconst report = {" timestamp: new Date().toISOString()," checks: securityChecks.map(check => ({ name: check.name,"" status: "completed"}))," summary: { total: totalCount," successful: successCount," failed: totalCount - successCount}};"const reportsDir = path.join(process.cwd(), "automation-reports");if (!fs.existsSync(reportsDir)) {" fs.mkdirSync(reportsDir, { recursive: true });}`const reportFile = path.join(reportsDir, `security-report-${Date.now()}.json`);fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));"`console.log(` Security report saved to: ${reportFile}`);""`"`
=======
<<<<<<< HEAD
<<<<<<< HEAD
console.log(`📄 Security report saved to: ${reportFile}`);
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");"console.log(" Security Audit Starting.\n");/ Security checksconst securityChecks = [{" name: "Dependency Vulnerability Scan"," action: () => {" console.log(" Scanning for vulnerable dependencies."); try {"" execSync("npm audit --audit-level=moderate", { stdio: "pipe" });" console.log(" No high-severity vulnerabilities found"); } catch (error) {" console.log(" Some vulnerabilities found - check npm audit output"); } }}, {"" name: "Environment Variables Check"," action: () => {" console.log(" Checking environment variables.");" const envFiles = [".env", ".env.local", ".env.production"]; let foundEnvFiles = 0; envFiles.forEach(envFile => { if (fs.existsSync(envFile)) { foundEnvFiles++; console.log(`Found ${envFile}`); } });` console.log(`Found ${foundEnvFiles} environment files`); }}, {"" name: "API Security Check"," action: () => {" console.log(" Checking API security.");" const apiDir = path.join(process.cwd(), "pages", "api"); if (fs.existsSync(apiDir)) { const apiFiles = fs .readdirSync(apiDir)" .filter(file => file.endsWith(".ts") | file.endsWith(".js")); let securityIssues = 0; apiFiles.forEach(file => {" const content = fs.readFileSync(path.join(apiDir, file), "utf8"); if (" content.includes("process.env") &&"" !content.includes("/ Security: ") ) { securityIssues++; } }); console.log(` `Found ${apiFiles.length} API files, ${securityIssues} potential security issues` ); } }}, {"" name: "Content Security Policy Check"," action: () => {" console.log(" Checking Content Security Policy.");" const pagesDir = path.join(process.cwd(), "pages"); if (fs.existsSync(pagesDir)) { const pages = fs .readdirSync(pagesDir)" .filter(file => file.endsWith(".tsx")); let cspFound = 0; pages.forEach(page => {" const content = fs.readFileSync(path.join(pagesDir, page), "utf8"); if (" content.includes("Content-Security-Policy") |" content.includes("CSP") ) { cspFound++; } });` console.log(`Found CSP in ${cspFound}/${pages.length} pages`); } }}, {"" name: "HTTPS Enforcement Check"," action: () => {" console.log(" Checking HTTPS enforcement.");" const nextConfigPath = path.join(process.cwd(), "next.config.js"); if (fs.existsSync(nextConfigPath)) {" const content = fs.readFileSync(nextConfigPath, "utf8");" if (content.includes("https") | content.includes("secure")) {" console.log(" HTTPS configuration found"); } else {" console.log(" No HTTPS enforcement found"); } } else {" console.log(" No Next.js config found"); } }},];/ Run security checkslet successCount = 0;let totalCount = securityChecks.length;for (const check of securityChecks) { try {` console.log(`\n ${check.name}.`); check.action();` console.log(` ${check.name} completed`); successCount++; } catch (error) {"` console.log(` ${check.name} failed: ${error.message}`); }}"console.log("\n Security Audit Complete!");"`console.log(` Successfully completed: ${successCount}/${totalCount} checks`);/ Generate security reportconst report = {" timestamp: new Date().toISOString()," checks: securityChecks.map(check => ({ name: check.name,"" status: "completed"}))," summary: { total: totalCount," successful: successCount," failed: totalCount - successCount}};"const reportsDir = path.join(process.cwd(), "automation-reports");if (!fs.existsSync(reportsDir)) {" fs.mkdirSync(reportsDir, { recursive: true });}`const reportFile = path.join(reportsDir, `security-report-${Date.now()}.json`);fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));"`console.log(` Security report saved to: ${reportFile}`);""`"`
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
>>>>>>> merged-prs-20250907-203621


origin/cursor/integrate-build-improve-and-re-verify-c7b5

origin/cursor/expand-services-advertise-and-build-project-c28b
  "summary": {"
    total: totalCount,"
    "successful": successCount,""
    "failed": totalCount - successCount}};""
const reportsDir = path.join(process.cwd(), 'automation-reports');

if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { "recursive": true });"
const reportFile = path.join(reportsDir, `security-report-${Date.now()}.json`);
fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a





<<<<<<< HEAD
<<<<<<< HEAD
main


<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a







<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======











>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
console.log('� Security Audit Starting...\n')
    "status"
    "status"
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    "status"
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    "status"
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
    "status"
    "status"
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    "status"
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> merged-prs-20250907-203621
origin/cursor/integrate-build-improve-and-re-verify-c7b5

origin/cursor/expand-services-advertise-and-build-project-c28b
main


    "status"
    "status"



    "status"
    "status"

    "status"





<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
