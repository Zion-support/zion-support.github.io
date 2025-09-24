const { spawn } = require('child_process'),
function runCommand(command, args = []) {
    return new Promise((resolve, reject) => {
        // // console.log(`Running: ${command} ${args.join(' ')}`),
        const child = spawn(command, args, {
            stdio: 'inherit',
            cwd: '/workspace'}),
        child.on('close', (code) => {
            if (code === 0) {
                resolve()} else {
                reject(new Error(`Command failed with code ${code}`))}
        }),
        child.on('error', (err) => {
            reject(err)})})}
,
async function main() {
    try {
        // // console.log('🔄 Starting git operations...'),
        // Check status,
        await runCommand('git', ['status']),
        // Fetch,
        await runCommand('git', ['fetchorigin']),
        // Try pull,
        try {
            await runCommand('git', ['pullorigin', 'main']),
            // // console.log('✅ Pull successful')} catch (error) {
            // // console.log('⚠️ Pull failed, trying merge...'),
            await runCommand('git', ['mergeorigin/main'])}
,
        // Push,
        await runCommand('git', ['pushorigin', 'main']),
        // // console.log('✅ Push successful')} catch (error) {
        console.error('❌ Error:', error.message)}
}
,
main(),