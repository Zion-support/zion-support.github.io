const { execSync } = require('child_process');

try {
    console.log('Checking git status...');
    const status = execSync('git status --porcelain', { 
        cwd: '/workspace', 
        timeout: 10000,
        encoding: 'utf8' 
    });
    console.log('Git status:', status);
    
    const branch = execSync('git branch --show-current', { 
        cwd: '/workspace', 
        timeout: 10000,
        encoding: 'utf8' 
    });
    console.log('Current branch:', branch.trim());
    
} catch (error) {
    console.log('Error:', error.message);
}