<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358

<<<<<<< HEAD
=======

=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31





<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
#!/usr/bin/env node;,"});,"})
const { execSync } = // // require(,;,"});,"})
  child_process');,"});,"})
const fs = // // require(;,"});,"})
  'fs');,"});,"})
const path = // // require(;,"});,"})
  'path');,"});,"})
;,"});,"})
console.log(;,"});,"})
  '🚀 Starting PM2 automation processes...');,"});,"})
;,"});,"})
// Check if PM2 is installed;,"});,"})
try {;,"});,"})
  execSync(;,"});,"})
  'pm2 --version', { stdio: 'pipe });,"});,"})
  console.log(,;,"});,"})
  ✅ PM2 is installed');,"});,"})
} catch (error) {;,"});,"})
  console.error(;,"});,"})
  '❌ PM2 is not installed. Please install it first: npm install -g pm2);,"});,"})
  process.exit(1);,"});,"})
}"});,"})
;,"});,"})
// Function to start automation processes;,"});,"})
async function startAutomation() {;,"});,"})
  try {;,"});,"})
    // Start the main application;,"});,"})
    console.log(,;,"});,"})
  📱 Starting main application...');,"});,"})
    execSync(;,"});,"})
  'pm2 start ecosystem.config.cjs --only apps', { stdio: 'inherit });,"});,"})
;,"});,"})
    // Wait a moment for apps to start;,"});,"})
    await new Promise(resolve => setTimeout(resolve, 2000));,"});,"})
;,"});,"})
    // Start automation processes;,"});,"})
    console.log(,;,"});,"})
  🤖 Starting automation processes...');,"});,"})
    execSync(;,"});,"})
  'pm2 start ecosystem.config.cjs --only automation', { stdio: 'inherit });,"});,"})
;,"});,"})
    // Save PM2 configuration;,"});,"})
    console.log(,;,"});,"})
  💾 Saving PM2 configuration...');,"});,"})
    execSync(;,"});,"})
  'pm2 save', { stdio: 'inherit });,"});,"})
;,"});,"})
    // Show status;,"});,"})
    console.log(,;,"});,"})
  📊 PM2 Status: ');,"});,"})
    execSync(;,"});,"})
  'pm2 list, { stdio:;,"});,"})
  'inherit' });,"});,"})
;,"});,"})
    console.log(;,"});,"})
  '✅ All PM2 processes started successfully!');,"});,"})
    console.log(;,"});,"})
  '📝 Use "pm2 logs" to view logs');,"});,"})
    console.log(;,"});,"})
  '📊 Use "pm2 monit" to monitor processes');,"});,"})
    console.log(;,"});,"})
  '🛑 Use "pm2 stop all" to stop all processes');,"});,"})
;,"});,"})
  } catch (error) {;,"});,"})
    console.error(;,"});,"})
  '❌ Failed to start PM2 processes:', error.message);,"});,"})
    process.exit(1);,"});,"})
  }"});,"})
}"});,"})
;,"});,"})
// Handle graceful shutdown;,"});,"})
process.on(;,"});,"})
  'SIGINT', () => {;,"});,"})
  console.log(;,"});,"})
  '🛑 Received SIGINT, shutting down gracefully...');,"});,"})
  process.exit(0);,"});,"})
});,"});,"})
;,"});,"})
process.on(;,"});,"})
  'SIGTERM', () => {;,"});,"})
  console.log(;,"});,"})
  '🛑 Received SIGTERM, shutting down gracefully...');,"});,"})
  process.exit(0);,"});,"})
});,"});,"})
;,"});,"})
// Start automation;,"});,"})
startAutomation().catch(error => {;,"});,"})
  console.error(;,"});,"})
  '❌ Failed to start automation:', error);,"});,"})
  process.exit(1);,"});,"})
});,"});,"})
;,"});,"})
  '❌ PM2 is not installed. Please install it first: npm install -g pm2);
#!/usr/bin/env node,"}),"}) const { execSync } = require(,,"}),"}) child_process'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) ,"}) '🚀 Starting PM2 automation processes...'),"}),"}) ,"}),"}) try {,"}),"}) execSync(,"}),"}) 'pm2 --version',{ stdio: 'pipe }),"}),"}) ,"}) ✅ PM2 is installed'),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2),"}),"}) process.exit(1),"}),"}) }"}),"}) ,"}),"}) async function startAutomation() {,"}),"}) try {,"}),"}) ,"}) 📱 Starting main application...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }),"}),"}) ,"}),"}) await new Promise(resolve => setTimeout(resolve,2000)),"}),"}) ,"}),"}) ,"}) 🤖 Starting automation processes...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }),"}),"}) ,"}),"}) ,"}) 💾 Saving PM2 configuration...'),"}),"}) execSync(,"}),"}) 'pm2 save',{ stdio: 'inherit }),"}),"}) ,"}),"}) ,"}) 📊 PM2 Status: '),"}),"}) execSync(,"}),"}) 'pm2 list,{ stdio:,"}),"}) 'inherit' }),"}),"}) ,"}),"}) ,"}) '✅ All PM2 processes started successfully!'),"}),"}) ,"}) '📝 Use "pm2 logs" to view logs'),"}),"}) ,"}) '📊 Use "pm2 monit" to monitor processes'),"}),"}) ,"}) '🛑 Use "pm2 stop all" to stop all processes'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Failed to start PM2 processes:',error.message),"}),"}) process.exit(1),"}),"}) }"}),"}) }"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGINT',() => {,"}),"}) ,"}) '🛑 Received SIGINT,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGTERM',() => {,"}),"}) ,"}) '🛑 Received SIGTERM,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) startAutomation().catch(error => {,"}),"}) console.error(,"}),"}) '❌ Failed to start automation:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) ,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2); process.exit(1)} async function startAutomation() {; try {;  execSync(','pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }); await new Promise(resolve => setTimeout(resolve,2000));  execSync(','pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit });  execSync(','pm2 save',{ stdio: 'inherit });  execSync(','pm2 list,{ stdio:';inherit' });    } catch (error) { console.error(','❌ Failed to start PM2 processes: ',error.message); process.exit(1)} } process.on(','SIGINT',() => {  process.exit(0)}) process.on(' 'SIGTERM',() => {  process.exit(0)}); startAutomation().catch(error => { console.error(' '❌ Failed to start automation:',error); process.exit(1)})

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31




<<<<<<< HEAD
=======



ursor/integrate-build-improve-and-re-verify-8f7d;
ursor/fix-syntax-push-and-merge-to-main-40de;
origin/cursor/integrate-build-improve-and-re-verify-c7b5;
ursor/integrate-build-improve-and-re-verify-8f7d;
origin/cursor/integrate-build-improve-and-re-verify-c7b5;
#!/usr/bin/env node;,"});,"})"
const { execSync } = // // require(,;,"});,"})"
  child_process');,"});,"})"
const fs = // // require(;,"});,"})'"
  'fs');,"});,"})"
const path = // // require(;,"});,"})'"
  'path');,"});,"})"
;,"});,"})"
console.log(;,"});,"})'"
  '🚀 Starting PM2 automation processes...');,"});,"})"
;,"});,"})"
// Check if PM2 is installed;,"});,"})"
try {;,"});,"})"
  execSync(;,"});,"})'"
  'pm2 --version', { stdio: 'pipe });,"});,"})"
  console.log(,;,"});,"})'"
  ✅ PM2 is installed');,"});,"})"
} catch (error) {;,"});,"})"
  console.error(;,"});,"})'"
  '❌ PM2 is not installed. Please install it first: npm install -g pm2);,"});,"})"
  process.exit(1);,"});,"})"
}"});,"})"
;,"});,"})"
// Function to start automation processes;,"});,"})"
async function startAutomation() {;,"});,"})"
  try {;,"});,"})"
    // Start the main application;,"});,"})"
    console.log(,;,"});,"})'"
  📱 Starting main application...');,"});,"})"
    execSync(;,"});,"})'"
  'pm2 start ecosystem.config.cjs --only apps', { stdio: 'inherit });,"});,"})"
;,"});,"})"
    // Wait a moment for apps to start;,"});,"})"
    await new Promise(resolve => setTimeout(resolve, 2000));,"});,"})"
;,"});,"})"
    // Start automation processes;,"});,"})"
    console.log(,;,"});,"})'"
  🤖 Starting automation processes...');,"});,"})"
    execSync(;,"});,"})'"
  'pm2 start ecosystem.config.cjs --only automation', { stdio: 'inherit });,"});,"})"
;,"});,"})"
    // Save PM2 configuration;,"});,"})"
    console.log(,;,"});,"})'"
  💾 Saving PM2 configuration...');,"});,"})"
    execSync(;,"});,"})'"
  'pm2 save', { stdio: 'inherit });,"});,"})"
;,"});,"})"
    // Show status;,"});,"})"
    console.log(,;,"});,"})'"
  📊 PM2 Status: ');,"});,"})"
    execSync(;,"});,"})'"
  'pm2 list, { stdio:;,"});,"})'"
  'inherit' });,"});,"})"
;,"});,"})"
    console.log(;,"});,"})'"
  '✅ All PM2 processes started successfully!');,"});,"})"
    console.log(;,"});,"})'"
  '📝 Use "pm2 logs" to view logs');,"});,"})"
    console.log(;,"});,"})'"
  '📊 Use "pm2 monit" to monitor processes');,"});,"})"
    console.log(;,"});,"})'"
  '🛑 Use "pm2 stop all" to stop all processes');,"});,"})"
;,"});,"})"
  } catch (error) {;,"});,"})"
    console.error(;,"});,"})'"
  '❌ Failed to start PM2 processes:', error.message);,"});,"})"
    process.exit(1);,"});,"})"
  }"});,"})"
}"});,"})"
;,"});,"})"
// Handle graceful shutdown;,"});,"})"
process.on(;,"});,"})'"
  'SIGINT', () => {;,"});,"})"
  console.log(;,"});,"})'"
  '🛑 Received SIGINT, shutting down gracefully...');,"});,"})"
  process.exit(0);,"});,"})"
});,"});,"})"
;,"});,"})"
process.on(;,"});,"})'"
  'SIGTERM', () => {;,"});,"})"
  console.log(;,"});,"})'"
  '🛑 Received SIGTERM, shutting down gracefully...');,"});,"})"
  process.exit(0);,"});,"})"
});,"});,"})"
;,"});,"})"
// Start automation;,"});,"})"
startAutomation().catch(error => {;,"});,"})"
  console.error(;,"});,"})'"
  '❌ Failed to start automation:', error);,"});,"})"
  process.exit(1);,"});,"})"
});,"});,"})"
;,"});,"})
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31




<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
#!/usr/bin/env node,"}),"})
const { execSync } = require(,,"}),"})
  child_process'),"}),"})
const fs = require(,"}),"})
  'fs'),"}),"})
const path = require(,"}),"})
  'path'),"}),"})
,"}),"})
console.log(,"}),"})
  '🚀 Starting PM2 automation processes...'),"}),"})
,"}),"})
// Check if PM2 is installed,"}),"})
try {,"}),"})
  execSync(,"}),"})
  'pm2 --version', { "stdio": 'pipe }),"}),"})
  console.log(,,"}),"})
  ✅ PM2 is installed'),"}),"})
} catch (error) {,"}),"})
  console.error(,"}),"})
  '❌ PM2 is not installed. Please install it "first": npm install -g pm2),"}),"})
  process.exit(1),"}),"})
}"}),"})
,"}),"})
// Function to start automation processes,"}),"})
async function startAutomation() {,"}),"})
  try {,"}),"})
    // Start the main application,"}),"})
    console.log(,,"}),"})
  📱 Starting main application...'),"}),"})
    execSync(,"}),"})
  'pm2 start ecosystem.config.cjs --only apps', { "stdio": 'inherit }),"}),"})
,"}),"})
    // Wait a moment for apps to start,"}),"})
    await new Promise(resolve => setTimeout(resolve, 2000)),"}),"})
,"}),"})
    // Start automation processes,"}),"})
    console.log(,,"}),"})
  🤖 Starting automation processes...'),"}),"})
    execSync(,"}),"})
  'pm2 start ecosystem.config.cjs --only automation', { "stdio": 'inherit }),"}),"})
,"}),"})
    // Save PM2 configuration,"}),"})
    console.log(,,"}),"})
  💾 Saving PM2 configuration...'),"}),"})
    execSync(,"}),"})
  'pm2 save', { "stdio": 'inherit }),"}),"})
,"}),"})
    // Show status,"}),"})
    console.log(,,"}),"})
  📊 PM2 "Status": '),"}),"})
    execSync(,"}),"})
  'pm2 list, { stdio:,"}),"})
  'inherit' }),"}),"})
,"}),"})
    console.log(,"}),"})
  '✅ All PM2 processes started successfully!'),"}),"})
    console.log(,"}),"})
  '📝 Use "pm2 logs" to view logs'),"}),"})
    console.log(,"}),"})
  '📊 Use "pm2 monit" to monitor processes'),"}),"})
    console.log(,"}),"})
  '🛑 Use "pm2 stop all" to stop all processes'),"}),"})
,"}),"})
  } catch (error) {,"}),"})
    console.error(,"}),"})
  '❌ Failed to start PM2 "processes": ', error.message),"}),"})
    process.exit(1),"}),"})
  }"}),"})
}"}),"})
,"}),"})
// Handle graceful shutdown,"}),"})
process.on(,"}),"})
  'SIGINT', () => {,"}),"})
  console.log(,"}),"})
  '🛑 Received SIGINT, shutting down gracefully...'),"}),"})
  process.exit(0),"}),"})
}),"}),"})
,"}),"})
process.on(,"}),"})
  'SIGTERM', () => {,"}),"})
  console.log(,"}),"})
  '🛑 Received SIGTERM, shutting down gracefully...'),"}),"})
  process.exit(0),"}),"})
}),"}),"})
,"}),"})
// Start automation,"}),"})
startAutomation().catch(error => {,"}),"})
  console.error(,"}),"})
  '❌ Failed to start "automation": ', error),"}),"})
  process.exit(1),"}),"})
}),"}),"})
,"}),"})
<<<<<<< HEAD
=======













ursor/integrate-build-improve-and-re-verify-8f7d;
ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
origin/cursor/integrate-build-improve-and-re-verify-c7b5;
ursor/integrate-build-improve-and-re-verify-8f7d;
origin/cursor/integrate-build-improve-and-re-verify-c7b5;
"
#!/usr/bin/env node,"}),"})"
const { execSync } = require(,,"}),"})'"
  child_process'),"}),"})"
const fs = require(,"}),"})'"
  'fs'),"}),"})"
const path = require(,"}),"})'"
  'path'),"}),"})"
,"}),"})"
console.log(,"}),"})'"
  '🚀 Starting PM2 automation processes...'),"}),"})"
,"}),"})"
// Check if PM2 is installed,"}),"})"
try {,"}),"})"
  execSync(,"}),"})'"
  'pm2 --version', { "stdio": 'pipe }),"}),"})"
  console.log(,,"}),"})'"
  ✅ PM2 is installed'),"}),"})"
} catch (error) {,"}),"})"
  console.error(,"}),"})'"
  '❌ PM2 is not installed. Please install it "first": npm install -g pm2),"}),"})"
  process.exit(1),"}),"})"
}"}),"})"
,"}),"})"
// Function to start automation processes,"}),"})"
async function startAutomation() {,"}),"})"
  try {,"}),"})"
    // Start the main application,"}),"})"
    console.log(,,"}),"})'"
  📱 Starting main application...'),"}),"})"
    execSync(,"}),"})'"
  'pm2 start ecosystem.config.cjs --only apps', { "stdio": 'inherit }),"}),"})"
,"}),"})"
    // Wait a moment for apps to start,"}),"})"
    await new Promise(resolve => setTimeout(resolve, 2000)),"}),"})"
,"}),"})"
    // Start automation processes,"}),"})"
    console.log(,,"}),"})'"
  🤖 Starting automation processes...'),"}),"})"
    execSync(,"}),"})'"
  'pm2 start ecosystem.config.cjs --only automation', { "stdio": 'inherit }),"}),"})"
,"}),"})"
    // Save PM2 configuration,"}),"})"
    console.log(,,"}),"})'"
  💾 Saving PM2 configuration...'),"}),"})"
    execSync(,"}),"})'"
  'pm2 save', { "stdio": 'inherit }),"}),"})"
,"}),"})"
    // Show status,"}),"})"
    console.log(,,"}),"})'"
  📊 PM2 "Status": '),"}),"})"
    execSync(,"}),"})'"
  'pm2 list, { stdio:,"}),"})'"
  'inherit' }),"}),"})"
,"}),"})"
    console.log(,"}),"})'"
  '✅ All PM2 processes started successfully!'),"}),"})"
    console.log(,"}),"})'"
  '📝 Use "pm2 logs" to view logs'),"}),"})"
    console.log(,"}),"})'"
  '📊 Use "pm2 monit" to monitor processes'),"}),"})"
    console.log(,"}),"})'"
  '🛑 Use "pm2 stop all" to stop all processes'),"}),"})"
,"}),"})"
  } catch (error) {,"}),"})"
    console.error(,"}),"})'"
  '❌ Failed to start PM2 "processes": ', error.message),"}),"})"
    process.exit(1),"}),"})"
  }"}),"})"
}"}),"})"
,"}),"})"
// Handle graceful shutdown,"}),"})"
process.on(,"}),"})'"
  'SIGINT', () => {,"}),"})"
  console.log(,"}),"})'"
  '🛑 Received SIGINT, shutting down gracefully...'),"}),"})"
  process.exit(0),"}),"})"
}),"}),"})"
,"}),"})"
process.on(,"}),"})'"
  'SIGTERM', () => {,"}),"})"
  console.log(,"}),"})'"
  '🛑 Received SIGTERM, shutting down gracefully...'),"}),"})"
  process.exit(0),"}),"})"
}),"}),"})"
,"}),"})"
// Start automation,"}),"})"
startAutomation().catch(error => {,"}),"})"
  console.error(,"}),"})'"
  '❌ Failed to start "automation": ', error),"}),"})"
  process.exit(1),"}),"})"
}),"}),"})"
,"}),"})'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  '❌ PM2 is not installed. Please install it "first": npm install -g pm2);
  process.exit(1)}
// Function to start automation processes;
async function startAutomation() { return null; }
=======
  '❌ PM2 is not installed. Please install it "first": npm install -g pm2);
  process.exit(1)}
// Function to start automation processes;
async function startAutomation() {;
  try {;
    // Start the main application;
    console.log(,;
  📱 Starting main application...');
    execSync(',
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      'pm2 start ecosystem.config.cjs --only apps', { "stdio": 'inherit });
    // Wait a moment for apps to start;
    await new Promise(resolve => setTimeout(resolve, 2000));
    // Start automation processes;
<<<<<<< HEAD
    console.log(,;'
  🤖 Starting automation processes...');'
    execSync(','"
      'pm2 start ecosystem.config.cjs --only automation', { "stdio": 'inherit });
    // Save PM2 configuration;
    console.log(,;'
  💾 Saving PM2 configuration...');'
    execSync(','"
      'pm2 save', { "stdio": 'inherit });
    // Show status;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358

<<<<<<< HEAD
=======

=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    console.log(,;
  🤖 Starting automation processes...');
    execSync(',
      'pm2 start ecosystem.config.cjs --only automation', { "stdio": 'inherit });
    // Save PM2 configuration;
    console.log(,;
  💾 Saving PM2 configuration...');
    execSync(',
      'pm2 save', { "stdio": 'inherit });
    // Show status;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31





<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    console.log(,;
=======


    console.log(,;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  📊 PM2 Status: ');





<<<<<<< HEAD
    console.log(,;
  📊 PM2 Status: ');
<<<<<<< HEAD
<<<<<<< HEAD
    console.log(,;
  📊 PM2 Status: ');
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
    console.log(,;
  📊 PM2 Status: ');
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    console.log(,;
  📊 PM2 Status: ');
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    console.log(,;
  📊 PM2 Status: ');





    console.log(,;
  📊 PM2 Status: ');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    console.log(,
  📊 PM2 "Status": ');
    execSync(',
      'pm2 list, { "stdio": ';inherit' });
    console.log(',
      '✅ All PM2 processes started successfully!');
    console.log('
  '📝 Use 'pm2 logs' to view logs');
    console.log(',
      '📊 Use 'pm2 monit' to monitor processes');
    console.log(',
      '🛑 Use 'pm2 stop all' to stop all processes')} catch (error) {
    console.error(',
<<<<<<< HEAD
=======





    console.log(,;'
  📊 PM2 Status: ');






    console.log(,'"
  📊 PM2 "Status": ');'
    execSync(','"
      'pm2 list, { "stdio": ';inherit' });'
    console.log(','
      '✅ All PM2 processes started successfully!');'
    console.log(''
  '📝 Use 'pm2 logs' to view logs');'
    console.log(','
      '📊 Use 'pm2 monit' to monitor processes');'
    console.log(','
      '🛑 Use 'pm2 stop all' to stop all processes')} catch (error) {'
    console.error(','"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      '❌ Failed to start PM2 "processes": ', error.message);
    process.exit(1)}
}
// Handle graceful shutdown;'
process.on(','
  'SIGINT', () => {'
  console.log(','
      '🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0)})'
process.on(''
  'SIGTERM', () => {'
  console.log(','
      '🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0)});
// Start automation;
startAutomation().catch(error => {'
  console.error(''"
  '❌ Failed to start "automation": ', error);
<<<<<<< HEAD
  process.exit(1)})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node,"}),"}) const { execSync } = require(,,"}),"}) child_process'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) console.log(,"}),"}) '🚀 Starting PM2 automation processes...'),"}),"}) ,"}),"}) try {,"}),"}) execSync(,"}),"}) 'pm2 --version',{ stdio: 'pipe }),"}),"}) console.log(,,"}),"}) ✅ PM2 is installed'),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2),"}),"}) process.exit(1),"}),"}) }"}),"}) ,"}),"}) async function startAutomation() {,"}),"}) try {,"}),"}) console.log(,,"}),"}) 📱 Starting main application...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }),"}),"}) ,"}),"}) await new Promise(resolve => setTimeout(resolve,2000)),"}),"}) ,"}),"}) console.log(,,"}),"}) 🤖 Starting automation processes...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 💾 Saving PM2 configuration...'),"}),"}) execSync(,"}),"}) 'pm2 save',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 📊 PM2 Status: '),"}),"}) execSync(,"}),"}) 'pm2 list,{ stdio:,"}),"}) 'inherit' }),"}),"}) ,"}),"}) console.log(,"}),"}) '✅ All PM2 processes started successfully!'),"}),"}) console.log(,"}),"}) '📝 Use "pm2 logs" to view logs'),"}),"}) console.log(,"}),"}) '📊 Use "pm2 monit" to monitor processes'),"}),"}) console.log(,"}),"}) '🛑 Use "pm2 stop all" to stop all processes'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Failed to start PM2 processes:',error.message),"}),"}) process.exit(1),"}),"}) }"}),"}) }"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGINT',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGINT,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGTERM',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGTERM,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) startAutomation().catch(error => {,"}),"}) console.error(,"}),"}) '❌ Failed to start automation:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) ,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2); process.exit(1)} async function startAutomation() {; try {; console.log(,📱 Starting main application...'); execSync(','pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }); await new Promise(resolve => setTimeout(resolve,2000)); console.log(,🤖 Starting automation processes...'); execSync(','pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }); console.log(,💾 Saving PM2 configuration...'); execSync(','pm2 save',{ stdio: 'inherit }); console.log(,📊 PM2 Status: '); execSync(','pm2 list,{ stdio:';inherit' }); console.log(','✅ All PM2 processes started successfully!'); console.log(' '📝 Use 'pm2 logs' to view logs'); console.log(','📊 Use 'pm2 monit' to monitor processes'); console.log(','🛑 Use 'pm2 stop all' to stop all processes')} catch (error) { console.error(','❌ Failed to start PM2 processes: ',error.message); process.exit(1)} } process.on(','SIGINT',() => { console.log(','🛑 Received SIGINT,shutting down gracefully...'); process.exit(0)}) process.on(' 'SIGTERM',() => { console.log(','🛑 Received SIGTERM,shutting down gracefully...'); process.exit(0)}); startAutomation().catch(error => { console.error(' '❌ Failed to start automation:',error); process.exit(1)})
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
#!/usr/bin/env node,"}),"}) const { execSync } = require(,,"}),"}) child_process'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) console.log(,"}),"}) '🚀 Starting PM2 automation processes...'),"}),"}) ,"}),"}) try {,"}),"}) execSync(,"}),"}) 'pm2 --version',{ stdio: 'pipe }),"}),"}) console.log(,,"}),"}) ✅ PM2 is installed'),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2),"}),"}) process.exit(1),"}),"}) }"}),"}) ,"}),"}) async function startAutomation() {,"}),"}) try {,"}),"}) console.log(,,"}),"}) 📱 Starting main application...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }),"}),"}) ,"}),"}) await new Promise(resolve => setTimeout(resolve,2000)),"}),"}) ,"}),"}) console.log(,,"}),"}) 🤖 Starting automation processes...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 💾 Saving PM2 configuration...'),"}),"}) execSync(,"}),"}) 'pm2 save',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 📊 PM2 Status: '),"}),"}) execSync(,"}),"}) 'pm2 list,{ stdio:,"}),"}) 'inherit' }),"}),"}) ,"}),"}) console.log(,"}),"}) '✅ All PM2 processes started successfully!'),"}),"}) console.log(,"}),"}) '📝 Use "pm2 logs" to view logs'),"}),"}) console.log(,"}),"}) '📊 Use "pm2 monit" to monitor processes'),"}),"}) console.log(,"}),"}) '🛑 Use "pm2 stop all" to stop all processes'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Failed to start PM2 processes:',error.message),"}),"}) process.exit(1),"}),"}) }"}),"}) }"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGINT',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGINT,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGTERM',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGTERM,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) startAutomation().catch(error => {,"}),"}) console.error(,"}),"}) '❌ Failed to start automation:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) ,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2); process.exit(1)} async function startAutomation() {; try {; console.log(,📱 Starting main application...'); execSync(','pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }); await new Promise(resolve => setTimeout(resolve,2000)); console.log(,🤖 Starting automation processes...'); execSync(','pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }); console.log(,💾 Saving PM2 configuration...'); execSync(','pm2 save',{ stdio: 'inherit }); console.log(,📊 PM2 Status: '); execSync(','pm2 list,{ stdio:';inherit' }); console.log(','✅ All PM2 processes started successfully!'); console.log(' '📝 Use 'pm2 logs' to view logs'); console.log(','📊 Use 'pm2 monit' to monitor processes'); console.log(','🛑 Use 'pm2 stop all' to stop all processes')} catch (error) { console.error(','❌ Failed to start PM2 processes: ',error.message); process.exit(1)} } process.on(','SIGINT',() => { console.log(','🛑 Received SIGINT,shutting down gracefully...'); process.exit(0)}) process.on(' 'SIGTERM',() => { console.log(','🛑 Received SIGTERM,shutting down gracefully...'); process.exit(0)}); startAutomation().catch(error => { console.error(' '❌ Failed to start automation:',error); process.exit(1)})

<<<<<<< HEAD
#!/usr/bin/env node,"}),"}) const { execSync } = require(,,"}),"}) child_process'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) console.log(,"}),"}) '🚀 Starting PM2 automation processes...'),"}),"}) ,"}),"}) try {,"}),"}) execSync(,"}),"}) 'pm2 --version',{ stdio: 'pipe }),"}),"}) console.log(,,"}),"}) ✅ PM2 is installed'),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2),"}),"}) process.exit(1),"}),"}) }"}),"}) ,"}),"}) async function startAutomation() {,"}),"}) try {,"}),"}) console.log(,,"}),"}) 📱 Starting main application...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }),"}),"}) ,"}),"}) await new Promise(resolve => setTimeout(resolve,2000)),"}),"}) ,"}),"}) console.log(,,"}),"}) 🤖 Starting automation processes...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 💾 Saving PM2 configuration...'),"}),"}) execSync(,"}),"}) 'pm2 save',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 📊 PM2 Status: '),"}),"}) execSync(,"}),"}) 'pm2 list,{ stdio:,"}),"}) 'inherit' }),"}),"}) ,"}),"}) console.log(,"}),"}) '✅ All PM2 processes started successfully!'),"}),"}) console.log(,"}),"}) '📝 Use "pm2 logs" to view logs'),"}),"}) console.log(,"}),"}) '📊 Use "pm2 monit" to monitor processes'),"}),"}) console.log(,"}),"}) '🛑 Use "pm2 stop all" to stop all processes'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Failed to start PM2 processes:',error.message),"}),"}) process.exit(1),"}),"}) }"}),"}) }"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGINT',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGINT,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGTERM',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGTERM,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) startAutomation().catch(error => {,"}),"}) console.error(,"}),"}) '❌ Failed to start automation:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) ,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2); process.exit(1)} async function startAutomation() {; try {; console.log(,📱 Starting main application...'); execSync(','pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }); await new Promise(resolve => setTimeout(resolve,2000)); console.log(,🤖 Starting automation processes...'); execSync(','pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }); console.log(,💾 Saving PM2 configuration...'); execSync(','pm2 save',{ stdio: 'inherit }); console.log(,📊 PM2 Status: '); execSync(','pm2 list,{ stdio:';inherit' }); console.log(','✅ All PM2 processes started successfully!'); console.log(' '📝 Use 'pm2 logs' to view logs'); console.log(','📊 Use 'pm2 monit' to monitor processes'); console.log(','🛑 Use 'pm2 stop all' to stop all processes')} catch (error) { console.error(','❌ Failed to start PM2 processes: ',error.message); process.exit(1)} } process.on(','SIGINT',() => { console.log(','🛑 Received SIGINT,shutting down gracefully...'); process.exit(0)}) process.on(' 'SIGTERM',() => { console.log(','🛑 Received SIGTERM,shutting down gracefully...'); process.exit(0)}); startAutomation().catch(error => { console.error(' '❌ Failed to start automation:',error); process.exit(1)})

=======
#!/usr/bin/env node,"}),"}) const { execSync } = require(,,"}),"}) child_process'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) console.log(,"}),"}) '🚀 Starting PM2 automation processes...'),"}),"}) ,"}),"}) try {,"}),"}) execSync(,"}),"}) 'pm2 --version',{ stdio: 'pipe }),"}),"}) console.log(,,"}),"}) ✅ PM2 is installed'),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2),"}),"}) process.exit(1),"}),"}) }"}),"}) ,"}),"}) async function startAutomation() {,"}),"}) try {,"}),"}) console.log(,,"}),"}) 📱 Starting main application...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }),"}),"}) ,"}),"}) await new Promise(resolve => setTimeout(resolve,2000)),"}),"}) ,"}),"}) console.log(,,"}),"}) 🤖 Starting automation processes...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 💾 Saving PM2 configuration...'),"}),"}) execSync(,"}),"}) 'pm2 save',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 📊 PM2 Status: '),"}),"}) execSync(,"}),"}) 'pm2 list,{ stdio:,"}),"}) 'inherit' }),"}),"}) ,"}),"}) console.log(,"}),"}) '✅ All PM2 processes started successfully!'),"}),"}) console.log(,"}),"}) '📝 Use "pm2 logs" to view logs'),"}),"}) console.log(,"}),"}) '📊 Use "pm2 monit" to monitor processes'),"}),"}) console.log(,"}),"}) '🛑 Use "pm2 stop all" to stop all processes'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Failed to start PM2 processes:',error.message),"}),"}) process.exit(1),"}),"}) }"}),"}) }"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGINT',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGINT,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGTERM',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGTERM,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) startAutomation().catch(error => {,"}),"}) console.error(,"}),"}) '❌ Failed to start automation:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) ,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2); process.exit(1)} async function startAutomation() {; try {; console.log(,📱 Starting main application...'); execSync(','pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }); await new Promise(resolve => setTimeout(resolve,2000)); console.log(,🤖 Starting automation processes...'); execSync(','pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }); console.log(,💾 Saving PM2 configuration...'); execSync(','pm2 save',{ stdio: 'inherit }); console.log(,📊 PM2 Status: '); execSync(','pm2 list,{ stdio:';inherit' }); console.log(','✅ All PM2 processes started successfully!'); console.log(' '📝 Use 'pm2 logs' to view logs'); console.log(','📊 Use 'pm2 monit' to monitor processes'); console.log(','🛑 Use 'pm2 stop all' to stop all processes')} catch (error) { console.error(','❌ Failed to start PM2 processes: ',error.message); process.exit(1)} } process.on(','SIGINT',() => { console.log(','🛑 Received SIGINT,shutting down gracefully...'); process.exit(0)}) process.on(' 'SIGTERM',() => { console.log(','🛑 Received SIGTERM,shutting down gracefully...'); process.exit(0)}); startAutomation().catch(error => { console.error(' '❌ Failed to start automation:',error); process.exit(1)})

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      '❌ Failed to start PM2 "processes": ', error.message);
    process.exit(1)}
}
// Handle graceful shutdown;
process.on(',
  'SIGINT', () => {
  console.log(',
      '🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0)})
process.on('
  'SIGTERM', () => {
  console.log(',
      '🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0)});
// Start automation;
startAutomation().catch(error => {
  console.error('
  '❌ Failed to start "automation": ', error);
  process.exit(1)})
#!/usr/bin/env node,"}),"}) const { execSync } = require(,,"}),"}) child_process'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) console.log(,"}),"}) '🚀 Starting PM2 automation processes...'),"}),"}) ,"}),"}) try {,"}),"}) execSync(,"}),"}) 'pm2 --version',{ stdio: 'pipe }),"}),"}) console.log(,,"}),"}) ✅ PM2 is installed'),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2),"}),"}) process.exit(1),"}),"}) }"}),"}) ,"}),"}) async function startAutomation() {,"}),"}) try {,"}),"}) console.log(,,"}),"}) 📱 Starting main application...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }),"}),"}) ,"}),"}) await new Promise(resolve => setTimeout(resolve,2000)),"}),"}) ,"}),"}) console.log(,,"}),"}) 🤖 Starting automation processes...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 💾 Saving PM2 configuration...'),"}),"}) execSync(,"}),"}) 'pm2 save',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 📊 PM2 Status: '),"}),"}) execSync(,"}),"}) 'pm2 list,{ stdio:,"}),"}) 'inherit' }),"}),"}) ,"}),"}) console.log(,"}),"}) '✅ All PM2 processes started successfully!'),"}),"}) console.log(,"}),"}) '📝 Use "pm2 logs" to view logs'),"}),"}) console.log(,"}),"}) '📊 Use "pm2 monit" to monitor processes'),"}),"}) console.log(,"}),"}) '🛑 Use "pm2 stop all" to stop all processes'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Failed to start PM2 processes:',error.message),"}),"}) process.exit(1),"}),"}) }"}),"}) }"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGINT',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGINT,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGTERM',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGTERM,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) startAutomation().catch(error => {,"}),"}) console.error(,"}),"}) '❌ Failed to start automation:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) ,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2); process.exit(1)} async function startAutomation() {; try {; console.log(,📱 Starting main application...'); execSync(','pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }); await new Promise(resolve => setTimeout(resolve,2000)); console.log(,🤖 Starting automation processes...'); execSync(','pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }); console.log(,💾 Saving PM2 configuration...'); execSync(','pm2 save',{ stdio: 'inherit }); console.log(,📊 PM2 Status: '); execSync(','pm2 list,{ stdio:';inherit' }); console.log(','✅ All PM2 processes started successfully!'); console.log(' '📝 Use 'pm2 logs' to view logs'); console.log(','📊 Use 'pm2 monit' to monitor processes'); console.log(','🛑 Use 'pm2 stop all' to stop all processes')} catch (error) { console.error(','❌ Failed to start PM2 processes: ',error.message); process.exit(1)} } process.on(','SIGINT',() => { console.log(','🛑 Received SIGINT,shutting down gracefully...'); process.exit(0)}) process.on(' 'SIGTERM',() => { console.log(','🛑 Received SIGTERM,shutting down gracefully...'); process.exit(0)}); startAutomation().catch(error => { console.error(' '❌ Failed to start automation:',error); process.exit(1)})

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

#!/usr/bin/env node,"}),"}) const { execSync } = require(,,"}),"}) child_process'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) console.log(,"}),"}) '🚀 Starting PM2 automation processes...'),"}),"}) ,"}),"}) try {,"}),"}) execSync(,"}),"}) 'pm2 --version',{ stdio: 'pipe }),"}),"}) console.log(,,"}),"}) ✅ PM2 is installed'),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2),"}),"}) process.exit(1),"}),"}) }"}),"}) ,"}),"}) async function startAutomation() {,"}),"}) try {,"}),"}) console.log(,,"}),"}) 📱 Starting main application...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }),"}),"}) ,"}),"}) await new Promise(resolve => setTimeout(resolve,2000)),"}),"}) ,"}),"}) console.log(,,"}),"}) 🤖 Starting automation processes...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 💾 Saving PM2 configuration...'),"}),"}) execSync(,"}),"}) 'pm2 save',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 📊 PM2 Status: '),"}),"}) execSync(,"}),"}) 'pm2 list,{ stdio:,"}),"}) 'inherit' }),"}),"}) ,"}),"}) console.log(,"}),"}) '✅ All PM2 processes started successfully!'),"}),"}) console.log(,"}),"}) '📝 Use "pm2 logs" to view logs'),"}),"}) console.log(,"}),"}) '📊 Use "pm2 monit" to monitor processes'),"}),"}) console.log(,"}),"}) '🛑 Use "pm2 stop all" to stop all processes'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Failed to start PM2 processes:',error.message),"}),"}) process.exit(1),"}),"}) }"}),"}) }"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGINT',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGINT,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGTERM',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGTERM,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) startAutomation().catch(error => {,"}),"}) console.error(,"}),"}) '❌ Failed to start automation:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) ,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2); process.exit(1)} async function startAutomation() {; try {; console.log(,📱 Starting main application...'); execSync(','pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }); await new Promise(resolve => setTimeout(resolve,2000)); console.log(,🤖 Starting automation processes...'); execSync(','pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }); console.log(,💾 Saving PM2 configuration...'); execSync(','pm2 save',{ stdio: 'inherit }); console.log(,📊 PM2 Status: '); execSync(','pm2 list,{ stdio:';inherit' }); console.log(','✅ All PM2 processes started successfully!'); console.log(' '📝 Use 'pm2 logs' to view logs'); console.log(','📊 Use 'pm2 monit' to monitor processes'); console.log(','🛑 Use 'pm2 stop all' to stop all processes')} catch (error) { console.error(','❌ Failed to start PM2 processes: ',error.message); process.exit(1)} } process.on(','SIGINT',() => { console.log(','🛑 Received SIGINT,shutting down gracefully...'); process.exit(0)}) process.on(' 'SIGTERM',() => { console.log(','🛑 Received SIGTERM,shutting down gracefully...'); process.exit(0)}); startAutomation().catch(error => { console.error(' '❌ Failed to start automation:',error); process.exit(1)})



<<<<<<< HEAD
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
#!/usr/bin/env node,"}),"}) const { execSync } = require(,,"}),"}) child_process'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) console.log(,"}),"}) '🚀 Starting PM2 automation processes...'),"}),"}) ,"}),"}) try {,"}),"}) execSync(,"}),"}) 'pm2 --version',{ stdio: 'pipe }),"}),"}) console.log(,,"}),"}) ✅ PM2 is installed'),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2),"}),"}) process.exit(1),"}),"}) }"}),"}) ,"}),"}) async function startAutomation() {,"}),"}) try {,"}),"}) console.log(,,"}),"}) 📱 Starting main application...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }),"}),"}) ,"}),"}) await new Promise(resolve => setTimeout(resolve,2000)),"}),"}) ,"}),"}) console.log(,,"}),"}) 🤖 Starting automation processes...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 💾 Saving PM2 configuration...'),"}),"}) execSync(,"}),"}) 'pm2 save',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 📊 PM2 Status: '),"}),"}) execSync(,"}),"}) 'pm2 list,{ stdio:,"}),"}) 'inherit' }),"}),"}) ,"}),"}) console.log(,"}),"}) '✅ All PM2 processes started successfully!'),"}),"}) console.log(,"}),"}) '📝 Use "pm2 logs" to view logs'),"}),"}) console.log(,"}),"}) '📊 Use "pm2 monit" to monitor processes'),"}),"}) console.log(,"}),"}) '🛑 Use "pm2 stop all" to stop all processes'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Failed to start PM2 processes:',error.message),"}),"}) process.exit(1),"}),"}) }"}),"}) }"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGINT',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGINT,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGTERM',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGTERM,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) startAutomation().catch(error => {,"}),"}) console.error(,"}),"}) '❌ Failed to start automation:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) ,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2); process.exit(1)} async function startAutomation() {; try {; console.log(,📱 Starting main application...'); execSync(','pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }); await new Promise(resolve => setTimeout(resolve,2000)); console.log(,🤖 Starting automation processes...'); execSync(','pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }); console.log(,💾 Saving PM2 configuration...'); execSync(','pm2 save',{ stdio: 'inherit }); console.log(,📊 PM2 Status: '); execSync(','pm2 list,{ stdio:';inherit' }); console.log(','✅ All PM2 processes started successfully!'); console.log(' '📝 Use 'pm2 logs' to view logs'); console.log(','📊 Use 'pm2 monit' to monitor processes'); console.log(','🛑 Use 'pm2 stop all' to stop all processes')} catch (error) { console.error(','❌ Failed to start PM2 processes: ',error.message); process.exit(1)} } process.on(','SIGINT',() => { console.log(','🛑 Received SIGINT,shutting down gracefully...'); process.exit(0)}) process.on(' 'SIGTERM',() => { console.log(','🛑 Received SIGTERM,shutting down gracefully...'); process.exit(0)}); startAutomation().catch(error => { console.error(' '❌ Failed to start automation:',error); process.exit(1)})
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
#!/usr/bin/env node,"}),"}) const { execSync } = require(,,"}),"}) child_process'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) console.log(,"}),"}) '🚀 Starting PM2 automation processes...'),"}),"}) ,"}),"}) try {,"}),"}) execSync(,"}),"}) 'pm2 --version',{ stdio: 'pipe }),"}),"}) console.log(,,"}),"}) ✅ PM2 is installed'),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2),"}),"}) process.exit(1),"}),"}) }"}),"}) ,"}),"}) async function startAutomation() {,"}),"}) try {,"}),"}) console.log(,,"}),"}) 📱 Starting main application...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }),"}),"}) ,"}),"}) await new Promise(resolve => setTimeout(resolve,2000)),"}),"}) ,"}),"}) console.log(,,"}),"}) 🤖 Starting automation processes...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 💾 Saving PM2 configuration...'),"}),"}) execSync(,"}),"}) 'pm2 save',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 📊 PM2 Status: '),"}),"}) execSync(,"}),"}) 'pm2 list,{ stdio:,"}),"}) 'inherit' }),"}),"}) ,"}),"}) console.log(,"}),"}) '✅ All PM2 processes started successfully!'),"}),"}) console.log(,"}),"}) '📝 Use "pm2 logs" to view logs'),"}),"}) console.log(,"}),"}) '📊 Use "pm2 monit" to monitor processes'),"}),"}) console.log(,"}),"}) '🛑 Use "pm2 stop all" to stop all processes'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Failed to start PM2 processes:',error.message),"}),"}) process.exit(1),"}),"}) }"}),"}) }"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGINT',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGINT,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGTERM',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGTERM,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) startAutomation().catch(error => {,"}),"}) console.error(,"}),"}) '❌ Failed to start automation:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) ,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2); process.exit(1)} async function startAutomation() {; try {; console.log(,📱 Starting main application...'); execSync(','pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }); await new Promise(resolve => setTimeout(resolve,2000)); console.log(,🤖 Starting automation processes...'); execSync(','pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }); console.log(,💾 Saving PM2 configuration...'); execSync(','pm2 save',{ stdio: 'inherit }); console.log(,📊 PM2 Status: '); execSync(','pm2 list,{ stdio:';inherit' }); console.log(','✅ All PM2 processes started successfully!'); console.log(' '📝 Use 'pm2 logs' to view logs'); console.log(','📊 Use 'pm2 monit' to monitor processes'); console.log(','🛑 Use 'pm2 stop all' to stop all processes')} catch (error) { console.error(','❌ Failed to start PM2 processes: ',error.message); process.exit(1)} } process.on(','SIGINT',() => { console.log(','🛑 Received SIGINT,shutting down gracefully...'); process.exit(0)}) process.on(' 'SIGTERM',() => { console.log(','🛑 Received SIGTERM,shutting down gracefully...'); process.exit(0)}); startAutomation().catch(error => { console.error(' '❌ Failed to start automation:',error); process.exit(1)})
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
#!/usr/bin/env node,"}),"}) const { execSync } = require(,,"}),"}) child_process'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) console.log(,"}),"}) '🚀 Starting PM2 automation processes...'),"}),"}) ,"}),"}) try {,"}),"}) execSync(,"}),"}) 'pm2 --version',{ stdio: 'pipe }),"}),"}) console.log(,,"}),"}) ✅ PM2 is installed'),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2),"}),"}) process.exit(1),"}),"}) }"}),"}) ,"}),"}) async function startAutomation() {,"}),"}) try {,"}),"}) console.log(,,"}),"}) 📱 Starting main application...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }),"}),"}) ,"}),"}) await new Promise(resolve => setTimeout(resolve,2000)),"}),"}) ,"}),"}) console.log(,,"}),"}) 🤖 Starting automation processes...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 💾 Saving PM2 configuration...'),"}),"}) execSync(,"}),"}) 'pm2 save',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 📊 PM2 Status: '),"}),"}) execSync(,"}),"}) 'pm2 list,{ stdio:,"}),"}) 'inherit' }),"}),"}) ,"}),"}) console.log(,"}),"}) '✅ All PM2 processes started successfully!'),"}),"}) console.log(,"}),"}) '📝 Use "pm2 logs" to view logs'),"}),"}) console.log(,"}),"}) '📊 Use "pm2 monit" to monitor processes'),"}),"}) console.log(,"}),"}) '🛑 Use "pm2 stop all" to stop all processes'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Failed to start PM2 processes:',error.message),"}),"}) process.exit(1),"}),"}) }"}),"}) }"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGINT',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGINT,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGTERM',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGTERM,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) startAutomation().catch(error => {,"}),"}) console.error(,"}),"}) '❌ Failed to start automation:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) ,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2); process.exit(1)} async function startAutomation() {; try {; console.log(,📱 Starting main application...'); execSync(','pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }); await new Promise(resolve => setTimeout(resolve,2000)); console.log(,🤖 Starting automation processes...'); execSync(','pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }); console.log(,💾 Saving PM2 configuration...'); execSync(','pm2 save',{ stdio: 'inherit }); console.log(,📊 PM2 Status: '); execSync(','pm2 list,{ stdio:';inherit' }); console.log(','✅ All PM2 processes started successfully!'); console.log(' '📝 Use 'pm2 logs' to view logs'); console.log(','📊 Use 'pm2 monit' to monitor processes'); console.log(','🛑 Use 'pm2 stop all' to stop all processes')} catch (error) { console.error(','❌ Failed to start PM2 processes: ',error.message); process.exit(1)} } process.on(','SIGINT',() => { console.log(','🛑 Received SIGINT,shutting down gracefully...'); process.exit(0)}) process.on(' 'SIGTERM',() => { console.log(','🛑 Received SIGTERM,shutting down gracefully...'); process.exit(0)}); startAutomation().catch(error => { console.error(' '❌ Failed to start automation:',error); process.exit(1)})

#!/usr/bin/env node,"}),"}) const { execSync } = require(,,"}),"}) child_process'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) console.log(,"}),"}) '🚀 Starting PM2 automation processes...'),"}),"}) ,"}),"}) try {,"}),"}) execSync(,"}),"}) 'pm2 --version',{ stdio: 'pipe }),"}),"}) console.log(,,"}),"}) ✅ PM2 is installed'),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2),"}),"}) process.exit(1),"}),"}) }"}),"}) ,"}),"}) async function startAutomation() {,"}),"}) try {,"}),"}) console.log(,,"}),"}) 📱 Starting main application...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }),"}),"}) ,"}),"}) await new Promise(resolve => setTimeout(resolve,2000)),"}),"}) ,"}),"}) console.log(,,"}),"}) 🤖 Starting automation processes...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 💾 Saving PM2 configuration...'),"}),"}) execSync(,"}),"}) 'pm2 save',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 📊 PM2 Status: '),"}),"}) execSync(,"}),"}) 'pm2 list,{ stdio:,"}),"}) 'inherit' }),"}),"}) ,"}),"}) console.log(,"}),"}) '✅ All PM2 processes started successfully!'),"}),"}) console.log(,"}),"}) '📝 Use "pm2 logs" to view logs'),"}),"}) console.log(,"}),"}) '📊 Use "pm2 monit" to monitor processes'),"}),"}) console.log(,"}),"}) '🛑 Use "pm2 stop all" to stop all processes'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Failed to start PM2 processes:',error.message),"}),"}) process.exit(1),"}),"}) }"}),"}) }"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGINT',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGINT,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGTERM',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGTERM,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) startAutomation().catch(error => {,"}),"}) console.error(,"}),"}) '❌ Failed to start automation:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) ,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2); process.exit(1)} async function startAutomation() {; try {; console.log(,📱 Starting main application...'); execSync(','pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }); await new Promise(resolve => setTimeout(resolve,2000)); console.log(,🤖 Starting automation processes...'); execSync(','pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }); console.log(,💾 Saving PM2 configuration...'); execSync(','pm2 save',{ stdio: 'inherit }); console.log(,📊 PM2 Status: '); execSync(','pm2 list,{ stdio:';inherit' }); console.log(','✅ All PM2 processes started successfully!'); console.log(' '📝 Use 'pm2 logs' to view logs'); console.log(','📊 Use 'pm2 monit' to monitor processes'); console.log(','🛑 Use 'pm2 stop all' to stop all processes')} catch (error) { console.error(','❌ Failed to start PM2 processes: ',error.message); process.exit(1)} } process.on(','SIGINT',() => { console.log(','🛑 Received SIGINT,shutting down gracefully...'); process.exit(0)}) process.on(' 'SIGTERM',() => { console.log(','🛑 Received SIGTERM,shutting down gracefully...'); process.exit(0)}); startAutomation().catch(error => { console.error(' '❌ Failed to start automation:',error); process.exit(1)})



<<<<<<< HEAD
=======
  process.exit(1)})'"
#!/usr/bin/env node,"}),"}) const { execSync } = require(,,"}),"}) child_process'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) console.log(,"}),"}) '🚀 Starting PM2 automation processes...'),"}),"}) ,"}),"}) try {,"}),"}) execSync(,"}),"}) 'pm2 --version',{ stdio: 'pipe }),"}),"}) console.log(,,"}),"}) ✅ PM2 is installed'),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2),"}),"}) process.exit(1),"}),"}) }"}),"}) ,"}),"}) async function startAutomation() {,"}),"}) try {,"}),"}) console.log(,,"}),"}) 📱 Starting main application...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }),"}),"}) ,"}),"}) await new Promise(resolve => setTimeout(resolve,2000)),"}),"}) ,"}),"}) console.log(,,"}),"}) 🤖 Starting automation processes...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 💾 Saving PM2 configuration...'),"}),"}) execSync(,"}),"}) 'pm2 save',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 📊 PM2 Status: '),"}),"}) execSync(,"}),"}) 'pm2 list,{ stdio:,"}),"}) 'inherit' }),"}),"}) ,"}),"}) console.log(,"}),"}) '✅ All PM2 processes started successfully!'),"}),"}) console.log(,"}),"}) '📝 Use "pm2 logs" to view logs'),"}),"}) console.log(,"}),"}) '📊 Use "pm2 monit" to monitor processes'),"}),"}) console.log(,"}),"}) '🛑 Use "pm2 stop all" to stop all processes'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Failed to start PM2 processes:',error.message),"}),"}) process.exit(1),"}),"}) }"}),"}) }"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGINT',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGINT,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGTERM',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGTERM,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) startAutomation().catch(error => {,"}),"}) console.error(,"}),"}) '❌ Failed to start automation:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) ,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2); process.exit(1)} async function startAutomation() {; try {; console.log(,📱 Starting main application...'); execSync(','pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }); await new Promise(resolve => setTimeout(resolve,2000)); console.log(,🤖 Starting automation processes...'); execSync(','pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }); console.log(,💾 Saving PM2 configuration...'); execSync(','pm2 save',{ stdio: 'inherit }); console.log(,📊 PM2 Status: '); execSync(','pm2 list,{ stdio:';inherit' }); console.log(','✅ All PM2 processes started successfully!'); console.log(' '📝 Use 'pm2 logs' to view logs'); console.log(','📊 Use 'pm2 monit' to monitor processes'); console.log(','🛑 Use 'pm2 stop all' to stop all processes')} catch (error) { console.error(','❌ Failed to start PM2 processes: ',error.message); process.exit(1)} } process.on(','SIGINT',() => { console.log(','🛑 Received SIGINT,shutting down gracefully...'); process.exit(0)}) process.on(' 'SIGTERM',() => { console.log(','🛑 Received SIGTERM,shutting down gracefully...'); process.exit(0)}); startAutomation().catch(error => { console.error(' '❌ Failed to start automation:',error); process.exit(1)})


'"
#!/usr/bin/env node,"}),"}) const { execSync } = require(,,"}),"}) child_process'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) console.log(,"}),"}) '🚀 Starting PM2 automation processes...'),"}),"}) ,"}),"}) try {,"}),"}) execSync(,"}),"}) 'pm2 --version',{ stdio: 'pipe }),"}),"}) console.log(,,"}),"}) ✅ PM2 is installed'),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2),"}),"}) process.exit(1),"}),"}) }"}),"}) ,"}),"}) async function startAutomation() {,"}),"}) try {,"}),"}) console.log(,,"}),"}) 📱 Starting main application...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }),"}),"}) ,"}),"}) await new Promise(resolve => setTimeout(resolve,2000)),"}),"}) ,"}),"}) console.log(,,"}),"}) 🤖 Starting automation processes...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 💾 Saving PM2 configuration...'),"}),"}) execSync(,"}),"}) 'pm2 save',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 📊 PM2 Status: '),"}),"}) execSync(,"}),"}) 'pm2 list,{ stdio:,"}),"}) 'inherit' }),"}),"}) ,"}),"}) console.log(,"}),"}) '✅ All PM2 processes started successfully!'),"}),"}) console.log(,"}),"}) '📝 Use "pm2 logs" to view logs'),"}),"}) console.log(,"}),"}) '📊 Use "pm2 monit" to monitor processes'),"}),"}) console.log(,"}),"}) '🛑 Use "pm2 stop all" to stop all processes'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Failed to start PM2 processes:',error.message),"}),"}) process.exit(1),"}),"}) }"}),"}) }"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGINT',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGINT,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGTERM',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGTERM,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) startAutomation().catch(error => {,"}),"}) console.error(,"}),"}) '❌ Failed to start automation:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) ,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2); process.exit(1)} async function startAutomation() {; try {; console.log(,📱 Starting main application...'); execSync(','pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }); await new Promise(resolve => setTimeout(resolve,2000)); console.log(,🤖 Starting automation processes...'); execSync(','pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }); console.log(,💾 Saving PM2 configuration...'); execSync(','pm2 save',{ stdio: 'inherit }); console.log(,📊 PM2 Status: '); execSync(','pm2 list,{ stdio:';inherit' }); console.log(','✅ All PM2 processes started successfully!'); console.log(' '📝 Use 'pm2 logs' to view logs'); console.log(','📊 Use 'pm2 monit' to monitor processes'); console.log(','🛑 Use 'pm2 stop all' to stop all processes')} catch (error) { console.error(','❌ Failed to start PM2 processes: ',error.message); process.exit(1)} } process.on(','SIGINT',() => { console.log(','🛑 Received SIGINT,shutting down gracefully...'); process.exit(0)}) process.on(' 'SIGTERM',() => { console.log(','🛑 Received SIGTERM,shutting down gracefully...'); process.exit(0)}); startAutomation().catch(error => { console.error(' '❌ Failed to start automation:',error); process.exit(1)})


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



'"
#!/usr/bin/env node,"}),"}) const { execSync } = require(,,"}),"}) child_process'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) console.log(,"}),"}) '🚀 Starting PM2 automation processes...'),"}),"}) ,"}),"}) try {,"}),"}) execSync(,"}),"}) 'pm2 --version',{ stdio: 'pipe }),"}),"}) console.log(,,"}),"}) ✅ PM2 is installed'),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2),"}),"}) process.exit(1),"}),"}) }"}),"}) ,"}),"}) async function startAutomation() {,"}),"}) try {,"}),"}) console.log(,,"}),"}) 📱 Starting main application...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }),"}),"}) ,"}),"}) await new Promise(resolve => setTimeout(resolve,2000)),"}),"}) ,"}),"}) console.log(,,"}),"}) 🤖 Starting automation processes...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 💾 Saving PM2 configuration...'),"}),"}) execSync(,"}),"}) 'pm2 save',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 📊 PM2 Status: '),"}),"}) execSync(,"}),"}) 'pm2 list,{ stdio:,"}),"}) 'inherit' }),"}),"}) ,"}),"}) console.log(,"}),"}) '✅ All PM2 processes started successfully!'),"}),"}) console.log(,"}),"}) '📝 Use "pm2 logs" to view logs'),"}),"}) console.log(,"}),"}) '📊 Use "pm2 monit" to monitor processes'),"}),"}) console.log(,"}),"}) '🛑 Use "pm2 stop all" to stop all processes'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Failed to start PM2 processes:',error.message),"}),"}) process.exit(1),"}),"}) }"}),"}) }"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGINT',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGINT,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGTERM',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGTERM,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) startAutomation().catch(error => {,"}),"}) console.error(,"}),"}) '❌ Failed to start automation:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) ,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2); process.exit(1)} async function startAutomation() {; try {; console.log(,📱 Starting main application...'); execSync(','pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }); await new Promise(resolve => setTimeout(resolve,2000)); console.log(,🤖 Starting automation processes...'); execSync(','pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }); console.log(,💾 Saving PM2 configuration...'); execSync(','pm2 save',{ stdio: 'inherit }); console.log(,📊 PM2 Status: '); execSync(','pm2 list,{ stdio:';inherit' }); console.log(','✅ All PM2 processes started successfully!'); console.log(' '📝 Use 'pm2 logs' to view logs'); console.log(','📊 Use 'pm2 monit' to monitor processes'); console.log(','🛑 Use 'pm2 stop all' to stop all processes')} catch (error) { console.error(','❌ Failed to start PM2 processes: ',error.message); process.exit(1)} } process.on(','SIGINT',() => { console.log(','🛑 Received SIGINT,shutting down gracefully...'); process.exit(0)}) process.on(' 'SIGTERM',() => { console.log(','🛑 Received SIGTERM,shutting down gracefully...'); process.exit(0)}); startAutomation().catch(error => { console.error(' '❌ Failed to start automation:',error); process.exit(1)})'"
#!/usr/bin/env node,"}),"}) const { execSync } = require(,,"}),"}) child_process'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) console.log(,"}),"}) '🚀 Starting PM2 automation processes...'),"}),"}) ,"}),"}) try {,"}),"}) execSync(,"}),"}) 'pm2 --version',{ stdio: 'pipe }),"}),"}) console.log(,,"}),"}) ✅ PM2 is installed'),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2),"}),"}) process.exit(1),"}),"}) }"}),"}) ,"}),"}) async function startAutomation() {,"}),"}) try {,"}),"}) console.log(,,"}),"}) 📱 Starting main application...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }),"}),"}) ,"}),"}) await new Promise(resolve => setTimeout(resolve,2000)),"}),"}) ,"}),"}) console.log(,,"}),"}) 🤖 Starting automation processes...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 💾 Saving PM2 configuration...'),"}),"}) execSync(,"}),"}) 'pm2 save',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 📊 PM2 Status: '),"}),"}) execSync(,"}),"}) 'pm2 list,{ stdio:,"}),"}) 'inherit' }),"}),"}) ,"}),"}) console.log(,"}),"}) '✅ All PM2 processes started successfully!'),"}),"}) console.log(,"}),"}) '📝 Use "pm2 logs" to view logs'),"}),"}) console.log(,"}),"}) '📊 Use "pm2 monit" to monitor processes'),"}),"}) console.log(,"}),"}) '🛑 Use "pm2 stop all" to stop all processes'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Failed to start PM2 processes:',error.message),"}),"}) process.exit(1),"}),"}) }"}),"}) }"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGINT',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGINT,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGTERM',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGTERM,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) startAutomation().catch(error => {,"}),"}) console.error(,"}),"}) '❌ Failed to start automation:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) ,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2); process.exit(1)} async function startAutomation() {; try {; console.log(,📱 Starting main application...'); execSync(','pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }); await new Promise(resolve => setTimeout(resolve,2000)); console.log(,🤖 Starting automation processes...'); execSync(','pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }); console.log(,💾 Saving PM2 configuration...'); execSync(','pm2 save',{ stdio: 'inherit }); console.log(,📊 PM2 Status: '); execSync(','pm2 list,{ stdio:';inherit' }); console.log(','✅ All PM2 processes started successfully!'); console.log(' '📝 Use 'pm2 logs' to view logs'); console.log(','📊 Use 'pm2 monit' to monitor processes'); console.log(','🛑 Use 'pm2 stop all' to stop all processes')} catch (error) { console.error(','❌ Failed to start PM2 processes: ',error.message); process.exit(1)} } process.on(','SIGINT',() => { console.log(','🛑 Received SIGINT,shutting down gracefully...'); process.exit(0)}) process.on(' 'SIGTERM',() => { console.log(','🛑 Received SIGTERM,shutting down gracefully...'); process.exit(0)}); startAutomation().catch(error => { console.error(' '❌ Failed to start automation:',error); process.exit(1)})


'"
#!/usr/bin/env node,"}),"}) const { execSync } = require(,,"}),"}) child_process'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) console.log(,"}),"}) '🚀 Starting PM2 automation processes...'),"}),"}) ,"}),"}) try {,"}),"}) execSync(,"}),"}) 'pm2 --version',{ stdio: 'pipe }),"}),"}) console.log(,,"}),"}) ✅ PM2 is installed'),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2),"}),"}) process.exit(1),"}),"}) }"}),"}) ,"}),"}) async function startAutomation() {,"}),"}) try {,"}),"}) console.log(,,"}),"}) 📱 Starting main application...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }),"}),"}) ,"}),"}) await new Promise(resolve => setTimeout(resolve,2000)),"}),"}) ,"}),"}) console.log(,,"}),"}) 🤖 Starting automation processes...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 💾 Saving PM2 configuration...'),"}),"}) execSync(,"}),"}) 'pm2 save',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 📊 PM2 Status: '),"}),"}) execSync(,"}),"}) 'pm2 list,{ stdio:,"}),"}) 'inherit' }),"}),"}) ,"}),"}) console.log(,"}),"}) '✅ All PM2 processes started successfully!'),"}),"}) console.log(,"}),"}) '📝 Use "pm2 logs" to view logs'),"}),"}) console.log(,"}),"}) '📊 Use "pm2 monit" to monitor processes'),"}),"}) console.log(,"}),"}) '🛑 Use "pm2 stop all" to stop all processes'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Failed to start PM2 processes:',error.message),"}),"}) process.exit(1),"}),"}) }"}),"}) }"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGINT',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGINT,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGTERM',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGTERM,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) startAutomation().catch(error => {,"}),"}) console.error(,"}),"}) '❌ Failed to start automation:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) ,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2); process.exit(1)} async function startAutomation() {; try {; console.log(,📱 Starting main application...'); execSync(','pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }); await new Promise(resolve => setTimeout(resolve,2000)); console.log(,🤖 Starting automation processes...'); execSync(','pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }); console.log(,💾 Saving PM2 configuration...'); execSync(','pm2 save',{ stdio: 'inherit }); console.log(,📊 PM2 Status: '); execSync(','pm2 list,{ stdio:';inherit' }); console.log(','✅ All PM2 processes started successfully!'); console.log(' '📝 Use 'pm2 logs' to view logs'); console.log(','📊 Use 'pm2 monit' to monitor processes'); console.log(','🛑 Use 'pm2 stop all' to stop all processes')} catch (error) { console.error(','❌ Failed to start PM2 processes: ',error.message); process.exit(1)} } process.on(','SIGINT',() => { console.log(','🛑 Received SIGINT,shutting down gracefully...'); process.exit(0)}) process.on(' 'SIGTERM',() => { console.log(','🛑 Received SIGTERM,shutting down gracefully...'); process.exit(0)}); startAutomation().catch(error => { console.error(' '❌ Failed to start automation:',error); process.exit(1)})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
#!/usr/bin/env node,"}),"}) const { execSync } = require(,,"}),"}) child_process'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) console.log(,"}),"}) '🚀 Starting PM2 automation processes...'),"}),"}) ,"}),"}) try {,"}),"}) execSync(,"}),"}) 'pm2 --version',{ stdio: 'pipe }),"}),"}) console.log(,,"}),"}) ✅ PM2 is installed'),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2),"}),"}) process.exit(1),"}),"}) }"}),"}) ,"}),"}) async function startAutomation() {,"}),"}) try {,"}),"}) console.log(,,"}),"}) 📱 Starting main application...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }),"}),"}) ,"}),"}) await new Promise(resolve => setTimeout(resolve,2000)),"}),"}) ,"}),"}) console.log(,,"}),"}) 🤖 Starting automation processes...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 💾 Saving PM2 configuration...'),"}),"}) execSync(,"}),"}) 'pm2 save',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 📊 PM2 Status: '),"}),"}) execSync(,"}),"}) 'pm2 list,{ stdio:,"}),"}) 'inherit' }),"}),"}) ,"}),"}) console.log(,"}),"}) '✅ All PM2 processes started successfully!'),"}),"}) console.log(,"}),"}) '📝 Use "pm2 logs" to view logs'),"}),"}) console.log(,"}),"}) '📊 Use "pm2 monit" to monitor processes'),"}),"}) console.log(,"}),"}) '🛑 Use "pm2 stop all" to stop all processes'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Failed to start PM2 processes:',error.message),"}),"}) process.exit(1),"}),"}) }"}),"}) }"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGINT',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGINT,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGTERM',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGTERM,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) startAutomation().catch(error => {,"}),"}) console.error(,"}),"}) '❌ Failed to start automation:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) ,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2); process.exit(1)} async function startAutomation() {; try {; console.log(,📱 Starting main application...'); execSync(','pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }); await new Promise(resolve => setTimeout(resolve,2000)); console.log(,🤖 Starting automation processes...'); execSync(','pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }); console.log(,💾 Saving PM2 configuration...'); execSync(','pm2 save',{ stdio: 'inherit }); console.log(,📊 PM2 Status: '); execSync(','pm2 list,{ stdio:';inherit' }); console.log(','✅ All PM2 processes started successfully!'); console.log(' '📝 Use 'pm2 logs' to view logs'); console.log(','📊 Use 'pm2 monit' to monitor processes'); console.log(','🛑 Use 'pm2 stop all' to stop all processes')} catch (error) { console.error(','❌ Failed to start PM2 processes: ',error.message); process.exit(1)} } process.on(','SIGINT',() => { console.log(','🛑 Received SIGINT,shutting down gracefully...'); process.exit(0)}) process.on(' 'SIGTERM',() => { console.log(','🛑 Received SIGTERM,shutting down gracefully...'); process.exit(0)}); startAutomation().catch(error => { console.error(' '❌ Failed to start automation:',error); process.exit(1)})
#!/usr/bin/env node,"}),"}) const { execSync } = require(,,"}),"}) child_process'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) console.log(,"}),"}) '🚀 Starting PM2 automation processes...'),"}),"}) ,"}),"}) try {,"}),"}) execSync(,"}),"}) 'pm2 --version',{ stdio: 'pipe }),"}),"}) console.log(,,"}),"}) ✅ PM2 is installed'),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2),"}),"}) process.exit(1),"}),"}) }"}),"}) ,"}),"}) async function startAutomation() {,"}),"}) try {,"}),"}) console.log(,,"}),"}) 📱 Starting main application...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }),"}),"}) ,"}),"}) await new Promise(resolve => setTimeout(resolve,2000)),"}),"}) ,"}),"}) console.log(,,"}),"}) 🤖 Starting automation processes...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 💾 Saving PM2 configuration...'),"}),"}) execSync(,"}),"}) 'pm2 save',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 📊 PM2 Status: '),"}),"}) execSync(,"}),"}) 'pm2 list,{ stdio:,"}),"}) 'inherit' }),"}),"}) ,"}),"}) console.log(,"}),"}) '✅ All PM2 processes started successfully!'),"}),"}) console.log(,"}),"}) '📝 Use "pm2 logs" to view logs'),"}),"}) console.log(,"}),"}) '📊 Use "pm2 monit" to monitor processes'),"}),"}) console.log(,"}),"}) '🛑 Use "pm2 stop all" to stop all processes'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Failed to start PM2 processes:',error.message),"}),"}) process.exit(1),"}),"}) }"}),"}) }"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGINT',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGINT,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGTERM',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGTERM,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) startAutomation().catch(error => {,"}),"}) console.error(,"}),"}) '❌ Failed to start automation:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) ,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2); process.exit(1)} async function startAutomation() {; try {; console.log(,📱 Starting main application...'); execSync(','pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }); await new Promise(resolve => setTimeout(resolve,2000)); console.log(,🤖 Starting automation processes...'); execSync(','pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }); console.log(,💾 Saving PM2 configuration...'); execSync(','pm2 save',{ stdio: 'inherit }); console.log(,📊 PM2 Status: '); execSync(','pm2 list,{ stdio:';inherit' }); console.log(','✅ All PM2 processes started successfully!'); console.log(' '📝 Use 'pm2 logs' to view logs'); console.log(','📊 Use 'pm2 monit' to monitor processes'); console.log(','🛑 Use 'pm2 stop all' to stop all processes')} catch (error) { console.error(','❌ Failed to start PM2 processes: ',error.message); process.exit(1)} } process.on(','SIGINT',() => { console.log(','🛑 Received SIGINT,shutting down gracefully...'); process.exit(0)}) process.on(' 'SIGTERM',() => { console.log(','🛑 Received SIGTERM,shutting down gracefully...'); process.exit(0)}); startAutomation().catch(error => { console.error(' '❌ Failed to start automation:',error); process.exit(1)})
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
#!/usr/bin/env node,"}),"}) const { execSync } = require(,,"}),"}) child_process'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) console.log(,"}),"}) '🚀 Starting PM2 automation processes...'),"}),"}) ,"}),"}) try {,"}),"}) execSync(,"}),"}) 'pm2 --version',{ stdio: 'pipe }),"}),"}) console.log(,,"}),"}) ✅ PM2 is installed'),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2),"}),"}) process.exit(1),"}),"}) }"}),"}) ,"}),"}) async function startAutomation() {,"}),"}) try {,"}),"}) console.log(,,"}),"}) 📱 Starting main application...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }),"}),"}) ,"}),"}) await new Promise(resolve => setTimeout(resolve,2000)),"}),"}) ,"}),"}) console.log(,,"}),"}) 🤖 Starting automation processes...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 💾 Saving PM2 configuration...'),"}),"}) execSync(,"}),"}) 'pm2 save',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 📊 PM2 Status: '),"}),"}) execSync(,"}),"}) 'pm2 list,{ stdio:,"}),"}) 'inherit' }),"}),"}) ,"}),"}) console.log(,"}),"}) '✅ All PM2 processes started successfully!'),"}),"}) console.log(,"}),"}) '📝 Use "pm2 logs" to view logs'),"}),"}) console.log(,"}),"}) '📊 Use "pm2 monit" to monitor processes'),"}),"}) console.log(,"}),"}) '🛑 Use "pm2 stop all" to stop all processes'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Failed to start PM2 processes:',error.message),"}),"}) process.exit(1),"}),"}) }"}),"}) }"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGINT',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGINT,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGTERM',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGTERM,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) startAutomation().catch(error => {,"}),"}) console.error(,"}),"}) '❌ Failed to start automation:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) ,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2); process.exit(1)} async function startAutomation() {; try {; console.log(,📱 Starting main application...'); execSync(','pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }); await new Promise(resolve => setTimeout(resolve,2000)); console.log(,🤖 Starting automation processes...'); execSync(','pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }); console.log(,💾 Saving PM2 configuration...'); execSync(','pm2 save',{ stdio: 'inherit }); console.log(,📊 PM2 Status: '); execSync(','pm2 list,{ stdio:';inherit' }); console.log(','✅ All PM2 processes started successfully!'); console.log(' '📝 Use 'pm2 logs' to view logs'); console.log(','📊 Use 'pm2 monit' to monitor processes'); console.log(','🛑 Use 'pm2 stop all' to stop all processes')} catch (error) { console.error(','❌ Failed to start PM2 processes: ',error.message); process.exit(1)} } process.on(','SIGINT',() => { console.log(','🛑 Received SIGINT,shutting down gracefully...'); process.exit(0)}) process.on(' 'SIGTERM',() => { console.log(','🛑 Received SIGTERM,shutting down gracefully...'); process.exit(0)}); startAutomation().catch(error => { console.error(' '❌ Failed to start automation:',error); process.exit(1)})
#!/usr/bin/env node,"}),"}) const { execSync } = require(,,"}),"}) child_process'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) console.log(,"}),"}) '🚀 Starting PM2 automation processes...'),"}),"}) ,"}),"}) try {,"}),"}) execSync(,"}),"}) 'pm2 --version',{ stdio: 'pipe }),"}),"}) console.log(,,"}),"}) ✅ PM2 is installed'),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2),"}),"}) process.exit(1),"}),"}) }"}),"}) ,"}),"}) async function startAutomation() {,"}),"}) try {,"}),"}) console.log(,,"}),"}) 📱 Starting main application...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }),"}),"}) ,"}),"}) await new Promise(resolve => setTimeout(resolve,2000)),"}),"}) ,"}),"}) console.log(,,"}),"}) 🤖 Starting automation processes...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 💾 Saving PM2 configuration...'),"}),"}) execSync(,"}),"}) 'pm2 save',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 📊 PM2 Status: '),"}),"}) execSync(,"}),"}) 'pm2 list,{ stdio:,"}),"}) 'inherit' }),"}),"}) ,"}),"}) console.log(,"}),"}) '✅ All PM2 processes started successfully!'),"}),"}) console.log(,"}),"}) '📝 Use "pm2 logs" to view logs'),"}),"}) console.log(,"}),"}) '📊 Use "pm2 monit" to monitor processes'),"}),"}) console.log(,"}),"}) '🛑 Use "pm2 stop all" to stop all processes'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Failed to start PM2 processes:',error.message),"}),"}) process.exit(1),"}),"}) }"}),"}) }"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGINT',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGINT,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGTERM',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGTERM,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) startAutomation().catch(error => {,"}),"}) console.error(,"}),"}) '❌ Failed to start automation:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) ,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2); process.exit(1)} async function startAutomation() {; try {; console.log(,📱 Starting main application...'); execSync(','pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }); await new Promise(resolve => setTimeout(resolve,2000)); console.log(,🤖 Starting automation processes...'); execSync(','pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }); console.log(,💾 Saving PM2 configuration...'); execSync(','pm2 save',{ stdio: 'inherit }); console.log(,📊 PM2 Status: '); execSync(','pm2 list,{ stdio:';inherit' }); console.log(','✅ All PM2 processes started successfully!'); console.log(' '📝 Use 'pm2 logs' to view logs'); console.log(','📊 Use 'pm2 monit' to monitor processes'); console.log(','🛑 Use 'pm2 stop all' to stop all processes')} catch (error) { console.error(','❌ Failed to start PM2 processes: ',error.message); process.exit(1)} } process.on(','SIGINT',() => { console.log(','🛑 Received SIGINT,shutting down gracefully...'); process.exit(0)}) process.on(' 'SIGTERM',() => { console.log(','🛑 Received SIGTERM,shutting down gracefully...'); process.exit(0)}); startAutomation().catch(error => { console.error(' '❌ Failed to start automation:',error); process.exit(1)})
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======






'"
#!/usr/bin/env node,"}),"}) const { execSync } = require(,,"}),"}) child_process'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) console.log(,"}),"}) '🚀 Starting PM2 automation processes...'),"}),"}) ,"}),"}) try {,"}),"}) execSync(,"}),"}) 'pm2 --version',{ stdio: 'pipe }),"}),"}) console.log(,,"}),"}) ✅ PM2 is installed'),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2),"}),"}) process.exit(1),"}),"}) }"}),"}) ,"}),"}) async function startAutomation() {,"}),"}) try {,"}),"}) console.log(,,"}),"}) 📱 Starting main application...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }),"}),"}) ,"}),"}) await new Promise(resolve => setTimeout(resolve,2000)),"}),"}) ,"}),"}) console.log(,,"}),"}) 🤖 Starting automation processes...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 💾 Saving PM2 configuration...'),"}),"}) execSync(,"}),"}) 'pm2 save',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 📊 PM2 Status: '),"}),"}) execSync(,"}),"}) 'pm2 list,{ stdio:,"}),"}) 'inherit' }),"}),"}) ,"}),"}) console.log(,"}),"}) '✅ All PM2 processes started successfully!'),"}),"}) console.log(,"}),"}) '📝 Use "pm2 logs" to view logs'),"}),"}) console.log(,"}),"}) '📊 Use "pm2 monit" to monitor processes'),"}),"}) console.log(,"}),"}) '🛑 Use "pm2 stop all" to stop all processes'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Failed to start PM2 processes:',error.message),"}),"}) process.exit(1),"}),"}) }"}),"}) }"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGINT',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGINT,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGTERM',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGTERM,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) startAutomation().catch(error => {,"}),"}) console.error(,"}),"}) '❌ Failed to start automation:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) ,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2); process.exit(1)} async function startAutomation() {; try {; console.log(,📱 Starting main application...'); execSync(','pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }); await new Promise(resolve => setTimeout(resolve,2000)); console.log(,🤖 Starting automation processes...'); execSync(','pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }); console.log(,💾 Saving PM2 configuration...'); execSync(','pm2 save',{ stdio: 'inherit }); console.log(,📊 PM2 Status: '); execSync(','pm2 list,{ stdio:';inherit' }); console.log(','✅ All PM2 processes started successfully!'); console.log(' '📝 Use 'pm2 logs' to view logs'); console.log(','📊 Use 'pm2 monit' to monitor processes'); console.log(','🛑 Use 'pm2 stop all' to stop all processes')} catch (error) { console.error(','❌ Failed to start PM2 processes: ',error.message); process.exit(1)} } process.on(','SIGINT',() => { console.log(','🛑 Received SIGINT,shutting down gracefully...'); process.exit(0)}) process.on(' 'SIGTERM',() => { console.log(','🛑 Received SIGTERM,shutting down gracefully...'); process.exit(0)}); startAutomation().catch(error => { console.error(' '❌ Failed to start automation:',error); process.exit(1)})'"
#!/usr/bin/env node,"}),"}) const { execSync } = require(,,"}),"}) child_process'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) console.log(,"}),"}) '🚀 Starting PM2 automation processes...'),"}),"}) ,"}),"}) try {,"}),"}) execSync(,"}),"}) 'pm2 --version',{ stdio: 'pipe }),"}),"}) console.log(,,"}),"}) ✅ PM2 is installed'),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2),"}),"}) process.exit(1),"}),"}) }"}),"}) ,"}),"}) async function startAutomation() {,"}),"}) try {,"}),"}) console.log(,,"}),"}) 📱 Starting main application...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }),"}),"}) ,"}),"}) await new Promise(resolve => setTimeout(resolve,2000)),"}),"}) ,"}),"}) console.log(,,"}),"}) 🤖 Starting automation processes...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 💾 Saving PM2 configuration...'),"}),"}) execSync(,"}),"}) 'pm2 save',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 📊 PM2 Status: '),"}),"}) execSync(,"}),"}) 'pm2 list,{ stdio:,"}),"}) 'inherit' }),"}),"}) ,"}),"}) console.log(,"}),"}) '✅ All PM2 processes started successfully!'),"}),"}) console.log(,"}),"}) '📝 Use "pm2 logs" to view logs'),"}),"}) console.log(,"}),"}) '📊 Use "pm2 monit" to monitor processes'),"}),"}) console.log(,"}),"}) '🛑 Use "pm2 stop all" to stop all processes'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Failed to start PM2 processes:',error.message),"}),"}) process.exit(1),"}),"}) }"}),"}) }"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGINT',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGINT,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGTERM',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGTERM,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) startAutomation().catch(error => {,"}),"}) console.error(,"}),"}) '❌ Failed to start automation:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) ,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2); process.exit(1)} async function startAutomation() {; try {; console.log(,📱 Starting main application...'); execSync(','pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }); await new Promise(resolve => setTimeout(resolve,2000)); console.log(,🤖 Starting automation processes...'); execSync(','pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }); console.log(,💾 Saving PM2 configuration...'); execSync(','pm2 save',{ stdio: 'inherit }); console.log(,📊 PM2 Status: '); execSync(','pm2 list,{ stdio:';inherit' }); console.log(','✅ All PM2 processes started successfully!'); console.log(' '📝 Use 'pm2 logs' to view logs'); console.log(','📊 Use 'pm2 monit' to monitor processes'); console.log(','🛑 Use 'pm2 stop all' to stop all processes')} catch (error) { console.error(','❌ Failed to start PM2 processes: ',error.message); process.exit(1)} } process.on(','SIGINT',() => { console.log(','🛑 Received SIGINT,shutting down gracefully...'); process.exit(0)}) process.on(' 'SIGTERM',() => { console.log(','🛑 Received SIGTERM,shutting down gracefully...'); process.exit(0)}); startAutomation().catch(error => { console.error(' '❌ Failed to start automation:',error); process.exit(1)})






'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

#!/usr/bin/env node,"}),"}) const { execSync } = require(,,"}),"}) child_process'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) console.log(,"}),"}) '🚀 Starting PM2 automation processes...'),"}),"}) ,"}),"}) try {,"}),"}) execSync(,"}),"}) 'pm2 --version',{ stdio: 'pipe }),"}),"}) console.log(,,"}),"}) ✅ PM2 is installed'),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2),"}),"}) process.exit(1),"}),"}) }"}),"}) ,"}),"}) async function startAutomation() {,"}),"}) try {,"}),"}) console.log(,,"}),"}) 📱 Starting main application...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }),"}),"}) ,"}),"}) await new Promise(resolve => setTimeout(resolve,2000)),"}),"}) ,"}),"}) console.log(,,"}),"}) 🤖 Starting automation processes...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 💾 Saving PM2 configuration...'),"}),"}) execSync(,"}),"}) 'pm2 save',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 📊 PM2 Status: '),"}),"}) execSync(,"}),"}) 'pm2 list,{ stdio:,"}),"}) 'inherit' }),"}),"}) ,"}),"}) console.log(,"}),"}) '✅ All PM2 processes started successfully!'),"}),"}) console.log(,"}),"}) '📝 Use "pm2 logs" to view logs'),"}),"}) console.log(,"}),"}) '📊 Use "pm2 monit" to monitor processes'),"}),"}) console.log(,"}),"}) '🛑 Use "pm2 stop all" to stop all processes'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Failed to start PM2 processes:',error.message),"}),"}) process.exit(1),"}),"}) }"}),"}) }"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGINT',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGINT,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGTERM',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGTERM,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) startAutomation().catch(error => {,"}),"}) console.error(,"}),"}) '❌ Failed to start automation:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) ,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2); process.exit(1)} async function startAutomation() {; try {; console.log(,📱 Starting main application...'); execSync(','pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }); await new Promise(resolve => setTimeout(resolve,2000)); console.log(,🤖 Starting automation processes...'); execSync(','pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }); console.log(,💾 Saving PM2 configuration...'); execSync(','pm2 save',{ stdio: 'inherit }); console.log(,📊 PM2 Status: '); execSync(','pm2 list,{ stdio:';inherit' }); console.log(','✅ All PM2 processes started successfully!'); console.log(' '📝 Use 'pm2 logs' to view logs'); console.log(','📊 Use 'pm2 monit' to monitor processes'); console.log(','🛑 Use 'pm2 stop all' to stop all processes')} catch (error) { console.error(','❌ Failed to start PM2 processes: ',error.message); process.exit(1)} } process.on(','SIGINT',() => { console.log(','🛑 Received SIGINT,shutting down gracefully...'); process.exit(0)}) process.on(' 'SIGTERM',() => { console.log(','🛑 Received SIGTERM,shutting down gracefully...'); process.exit(0)}); startAutomation().catch(error => { console.error(' '❌ Failed to start automation:',error); process.exit(1)})
#!/usr/bin/env node,"}),"}) const { execSync } = require(,,"}),"}) child_process'),"}),"}) const fs = require(,"}),"}) 'fs'),"}),"}) const path = require(,"}),"}) 'path'),"}),"}) ,"}),"}) console.log(,"}),"}) '🚀 Starting PM2 automation processes...'),"}),"}) ,"}),"}) try {,"}),"}) execSync(,"}),"}) 'pm2 --version',{ stdio: 'pipe }),"}),"}) console.log(,,"}),"}) ✅ PM2 is installed'),"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2),"}),"}) process.exit(1),"}),"}) }"}),"}) ,"}),"}) async function startAutomation() {,"}),"}) try {,"}),"}) console.log(,,"}),"}) 📱 Starting main application...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }),"}),"}) ,"}),"}) await new Promise(resolve => setTimeout(resolve,2000)),"}),"}) ,"}),"}) console.log(,,"}),"}) 🤖 Starting automation processes...'),"}),"}) execSync(,"}),"}) 'pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 💾 Saving PM2 configuration...'),"}),"}) execSync(,"}),"}) 'pm2 save',{ stdio: 'inherit }),"}),"}) ,"}),"}) console.log(,,"}),"}) 📊 PM2 Status: '),"}),"}) execSync(,"}),"}) 'pm2 list,{ stdio:,"}),"}) 'inherit' }),"}),"}) ,"}),"}) console.log(,"}),"}) '✅ All PM2 processes started successfully!'),"}),"}) console.log(,"}),"}) '📝 Use "pm2 logs" to view logs'),"}),"}) console.log(,"}),"}) '📊 Use "pm2 monit" to monitor processes'),"}),"}) console.log(,"}),"}) '🛑 Use "pm2 stop all" to stop all processes'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error(,"}),"}) '❌ Failed to start PM2 processes:',error.message),"}),"}) process.exit(1),"}),"}) }"}),"}) }"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGINT',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGINT,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) process.on(,"}),"}) 'SIGTERM',() => {,"}),"}) console.log(,"}),"}) '🛑 Received SIGTERM,shutting down gracefully...'),"}),"}) process.exit(0),"}),"}) }),"}),"}) ,"}),"}) startAutomation().catch(error => {,"}),"}) console.error(,"}),"}) '❌ Failed to start automation:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) ,"}),"}) '❌ PM2 is not installed. Please install it first: npm install -g pm2); process.exit(1)} async function startAutomation() {; try {; console.log(,📱 Starting main application...'); execSync(','pm2 start ecosystem.config.cjs --only apps',{ stdio: 'inherit }); await new Promise(resolve => setTimeout(resolve,2000)); console.log(,🤖 Starting automation processes...'); execSync(','pm2 start ecosystem.config.cjs --only automation',{ stdio: 'inherit }); console.log(,💾 Saving PM2 configuration...'); execSync(','pm2 save',{ stdio: 'inherit }); console.log(,📊 PM2 Status: '); execSync(','pm2 list,{ stdio:';inherit' }); console.log(','✅ All PM2 processes started successfully!'); console.log(' '📝 Use 'pm2 logs' to view logs'); console.log(','📊 Use 'pm2 monit' to monitor processes'); console.log(','🛑 Use 'pm2 stop all' to stop all processes')} catch (error) { console.error(','❌ Failed to start PM2 processes: ',error.message); process.exit(1)} } process.on(','SIGINT',() => { console.log(','🛑 Received SIGINT,shutting down gracefully...'); process.exit(0)}) process.on(' 'SIGTERM',() => { console.log(','🛑 Received SIGTERM,shutting down gracefully...'); process.exit(0)}); startAutomation().catch(error => { console.error(' '❌ Failed to start automation:',error); process.exit(1)})
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
