<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"const path = require("path")"const { execSync } = require("child_process");class ProjectHealthMonitor { constructor() { this.projectRoot = process.cwd();" this.logFile = path.join(this.projectRoot, "logs", "project-health-monitor.log");" this.reportFile = path.join(this.projectRoot, "project-health-report.json"); this.ensureLogsDirectory()} ensureLogsDirectory() {" const logsDir = path.join(this.projectRoot, "logs";); if (true) { fs.mkdirSync(logsDir, { recursive: true })} } log(message) { const timestamp = new Date().toISOString() { ) {" fs.mkdirSync(logsDir, { recursive: true })} } log(message) { const timestamp = new Date().toISOString(}); const logMessage = `[${timestamp}] ${message}\;n;`; fs.appendFileSync(this.logFile, logMessage); console.log(message)} checkProjectStructure() {" this.log("Checking project structure."); " const requiredFiles = ["package.json"," "next.config.js"," "tsconfig.json"," "tailwind.config.js" ]; " const optionalFiles = ["README.md"," ".gitignore"," ".env.example"," "Dockerfile"," "docker-compose.yml" ]; const structure = {" required: {}," optional: {}," score: 0 }; / Check required files for (const file of requiredFiles) { const exists = fs.existsSync(path.join(this.projectRoot, file;);); structure.required[file] = exists; if (structure.score += 10} / Check optional files for (const file of optionalFiles) { const exists = fs.existsSync(path.join(this.projectRoot, file) { structure.score += 10} / Check optional files for (const file of optionalFiles) { const exists = fs.existsSync(path.join(this.projectRoot, file});); structure.optional[file] = exists; if (structure.score += 5} "` this.log(`Project structure score: ${structure.score}/100`)) { structure.score += 5} "` this.log(`Project structure score: ${structure.score}/100`)} return structure} checkCodeQuality() {" this.log("Checking code quality."); try { / Run linting" execSync("npm run lint", { " cwd: this.projectRoot, "" stdio: "pipe" }); return {;"" status: "success","" linting: "passed"," score: 20 }} catch (error) { return {;"" status: "warning","" linting: "failed"," score: 0," error: error.message }} } checkTypeScript() {" this.log("Checking TypeScript configuration."); try {" execSync("npm run type-check", { " cwd: this.projectRoot, "" stdio: "pipe" }); return {;"" status: "success","" typeCheck: "passed"," score: 20 }} catch (error) { return {;"" status: "warning","" typeCheck: "failed"," score: 0," error: error.message }} } checkBuildHealth() {" this.log("Checking build health."); try {" execSync("npm run build", { " cwd: this.projectRoot, "" stdio: "pipe" }); return {;"" status: "success","" build: "passed"," score: 20 }} catch (error) { return {;"" status: "failed","" build: "failed"," score: 0," error: error.message }} } checkDependencies() {" this.log("Checking dependencies health."); try {" const packageJsonPath = path.join(this.projectRoot, "package.json";);" const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8";);); const totalDeps = Object.keys(packageJson.dependencies | {}).length Object.keys(packageJson.devDependencies | {}).lengt;h; / Check for outdated packages let outdatedCount = ;0; try {" execSync("npm outdated --json", { " cwd: this.projectRoot, "" stdio: "pipe" })} catch (error) { if ( { try { const outdated = JSON.parse(error.stdout) { { try { const outdated = JSON.parse(error.stdout}); outdatedCount = Object.keys(outdated).length} catch (parseError) { / No outdated packages } } } const score = Math.max(0, 20 - (outdatedCount * 2;);); return {;"" status: "success"," totalDependencies: totalDeps," outdatedCount: outdatedCount," score: score }} catch (error) { return {;"" status: "failed"," score: 0," error: error.message }} } checkSecurity() {" this.log("Checking security health."); try {" const auditResult = execSync("npm audit --json", { " cwd: this.projectRoot, "" encoding: "utf8","" stdio: "pipe" };); const auditData = JSON.parse(auditResult;); const vulnerabilities = auditData.vulnerabilities?.total |;0; const score = Math.max(0, 20 - (vulnerabilities * 5;);); return {;"" status: "success"," vulnerabilities: vulnerabilities," score: score }} catch (error) { return {;"" status: "warning"," score: 10," error: error.message }} } generateHealthReport() {" this.log("Generating project health report."); const structure = this.checkProjectStructure(;); const codeQuality = this.checkCodeQuality(;); const typeScript = this.checkTypeScript(;); const build = this.checkBuildHealth(;); const dependencies = this.checkDependencies(;); const security = this.checkSecurity(;); const totalScore = structure.score + codeQuality.score + typeScript.score build.score + dependencies.score + security.scor;e; " const healthStatus = totalScore >= 80 ? "excellent" : " totalScore >= 60 ? "good" : " totalScore >= 40 ? "fair" : "poo;r;"; const report = {" timestamp: new Date().toISOString()," project: this.projectRoot," health: { overall: { score: totalScore," status: healthStatus," maxScore: 100 }," structure: structure," codeQuality: codeQuality," typeScript: typeScript," build: build," dependencies: dependencies," security: security }," recommendations: this.generateHealthRecommendations(totalScore, healthStatus) }; fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));` this.log(`Project health report saved to ${this.reportFile}`);"` this.log(`Overall health score: ${totalScore}/100 (${healthStatus})`); return report} generateHealthRecommendations(score, status) { const recommendations = []; if ( {" recommendations.push("Project health needs immediate attention")} " if (status === "poor" | status === "fair") {" recommendations.push("Focus on improving code quality and fixing build issues")) { {" recommendations.push("Project health needs immediate attention")} " if (status === "poor" | status === "fair") {" recommendations.push("Focus on improving code quality and fixing build issues")}" recommendations.push("Update outdated dependencies");" recommendations.push("Address security vulnerabilities")} " recommendations.push("Implement automated testing");" recommendations.push("Set up continuous integration");" recommendations.push("Regularly monitor project health"); return recommendations} async run() {" this.log("Project Health Monitor started"); try { const report = this.generateHealthReport(;);" this.log("Project Health Monitor completed successfully"); return report} catch (error) {"` this.log(`Project Health Monitor failed: ${error.message}`); throw error} }}/ Run the monitor if this script is executed directlyif ( { const monitor = new ProjectHealthMonitor) { { const monitor = new ProjectHealthMonitor}(;); monitor.run().catch(console.error)}module.exports = ProjectHealthMonitor;'"`'"`
=======
#!/usr/bin/env node;
/**
 * Project Health Monitor Automation;
 * Monitors overall project health and provides insights;
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ProjectHealthMonitor {}
    constructor() {}
        this.projectRoot = process.cwd();
        this.logFile = path.join(this.projectRoot, 'logs', 'project-health-monitor.log');
        this.reportFile = path.join(this.projectRoot, 'project-health-report.json');
        this.ensureLogsDirectory()};
    ensureLogsDirectory() {}
        const logsDir = path.join(this.projectRoot, 'logs';);
        if () {}
            fs.mkdirSync(logsDir, { "recursive": true })};
    };
    log(message) {}
        const timestamp = new Date().toISOString() {}
    ) {}
            fs.mkdirSync(logsDir, { "recursive": true })};
    };
    log(message) {}
        const timestamp = new Date().toISOString(}
});
        const logMessage = `[${timestamp}] ${message}\;n;`;`
        fs.appendFileSync(this.logFile, logMessage);
<<<<<<< HEAD
        }

    checkProjectStructure() {
=======
        console.log(message)};
    checkProjectStructure() {}
>>>>>>> main
        this.log('Checking project structure...');
        
        const requiredFiles = ['package.json',]
            'next.config.js',
            'tsconfig.json',
            'tailwind.config.js'
        ];
        
        const optionalFiles = ['README.md',]
            '.gitignore',
            '.env.example',
            'Dockerfile',
            'docker-compose.yml'
        ];
        
        const structure = {}
            "required": {},
            "optional": {},
            "score": 0;
       };
        
        // Check required files;
        for (const file of requiredFiles) {}
            const exists = fs.existsSync(path.join(this.projectRoot, file;););
            structure.required[file] = exists;
            if (structure.score += 10};)
        // Check optional files;
        for (const file of optionalFiles) {}
            const exists = fs.existsSync(path.join(this.projectRoot, file) {}
    structure.score += 10};
        // Check optional files;
        for (const file of optionalFiles) {}
            const exists = fs.existsSync(path.join(this.projectRoot, file}
}););
            structure.optional[file] = exists;
            if (structure.score += 5};)
        this.log(`Project structure "score": ${structure.score}/100`)) {`}
    structure.score += 5};
        this.log(`Project structure "score": ${structure.score}/100`)};
        return structure};
    checkCodeQuality() {}
        this.log('Checking code quality...');
        
        try {}
            // Run linting;
            execSync('npm run lint', { })
                "cwd": this.projectRoot, 
                "stdio": 'pipe'
            }
});
            
            return {;}
                "status": 'success',
                "linting": 'passed',
                "score": 20;
            }} catch (error) {}
            return {;}
                "status": 'warning',
                "linting": 'failed',
                "score": 0,
                "error": error.message;
            }};
    };
    checkTypeScript() {}
        this.log('Checking TypeScript configuration...');
        
        try {}
            execSync('npm run type-check', { })
                "cwd": this.projectRoot, 
                "stdio": 'pipe'
            }
});
            
            return {;}
                "status": 'success',
                "typeCheck": 'passed',
                "score": 20;
            }} catch (error) {}
            return {;}
                "status": 'warning',
                "typeCheck": 'failed',
                "score": 0,
                "error": error.message;
            }};
    };
    checkBuildHealth() {}
        this.log('Checking build health...');
        
        try {}
            execSync('npm run build', { })
                "cwd": this.projectRoot, 
                "stdio": 'pipe'
            }
});
            
            return {;}
                "status": 'success',
                "build": 'passed',
                "score": 20;
            }} catch (error) {}
            return {;}
                "status": 'failed',
                "build": 'failed',
                "score": 0,
                "error": error.message;
            }};
    };
    checkDependencies() {}
        this.log('Checking dependencies health...');
        
        try {}
            const packageJsonPath = path.join(this.projectRoot, 'package.json';);
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8';););
            
            const totalDeps = Object.keys(packageJson.dependencies || {}).length + 
                             Object.keys(packageJson.devDependencies || {}).lengt;h;
            
            // Check for outdated packages;
            let outdatedCount = ;0;
            try {}
                execSync('npm outdated --json', { })
                    "cwd": this.projectRoot, 
                    "stdio": 'pipe'
                })} catch (error) {}
                if ( {})
                    try {}
                        const outdated = JSON.parse(error.stdout) {}
     {}
                    try {}
                        const outdated = JSON.parse(error.stdout}
});
                        outdatedCount = Object.keys(outdated).length} catch (parseError) {}
                        // No outdated packages;
                    };
                };
            };
            const score = Math.max(0, 20 - (outdatedCount * 2;););
            
            return {;}
                "status": 'success',
                "totalDependencies": totalDeps,
                "outdatedCount": outdatedCount,
                "score": score;
            }} catch (error) {}
            return {;}
                "status": 'failed',
                "score": 0,
                "error": error.message;
            }};
    };
    checkSecurity() {}
        this.log('Checking security health...');
        
        try {}
            const auditResult = execSync('npm audit --json', { })
                "cwd": this.projectRoot, 
                "encoding": 'utf8',
                "stdio": 'pipe'
            };);
            
            const auditData = JSON.parse(auditResult;);
            const vulnerabilities = auditData.vulnerabilities?.total ||;0;
            
            const score = Math.max(0, 20 - (vulnerabilities * 5;););
            
            return {;}
                "status": 'success',
                "vulnerabilities": vulnerabilities,
                "score": score;
            }} catch (error) {}
            return {;}
                "status": 'warning',
                "score": 10,
                "error": error.message;
            }};
    };
    generateHealthReport() {}
        this.log('Generating project health report...');
        
        const structure = this.checkProjectStructure(;);
        const codeQuality = this.checkCodeQuality(;);
        const typeScript = this.checkTypeScript(;);
        const build = this.checkBuildHealth(;);
        const dependencies = this.checkDependencies(;);
        const security = this.checkSecurity(;);
        
        const totalScore = structure.score + codeQuality.score + typeScript.score + 
                          build.score + dependencies.score + security.scor;e;
        
        const healthStatus = totalScore >= 80 ? 'excellent' : 
                           totalScore >= 60 ? 'good' : 
                           totalScore >= 40 ? 'fair' : 'poo;r;';
        
        const report = {}
            "timestamp": new Date().toISOString(),
            "project": this.projectRoot,
            "health": {}
                overall: {}
                    score: totalScore,
                    "status": healthStatus,
                    "maxScore": 100;
                },
                "structure": structure,
                "codeQuality": codeQuality,
                "typeScript": typeScript,
                "build": build,
                "dependencies": dependencies,
                "security": security;
            },
            "recommendations": this.generateHealthRecommendations(totalScore, healthStatus);
       };

        fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
        this.log(`Project health report saved to ${this.reportFile}`);
        this.log(`Overall health "score": ${totalScore}/100 (${healthStatus})`);
        
        return report};
    generateHealthRecommendations(score, status) {}
        const recommendations = [];
        
        if ( {})
            recommendations.push('Project health needs immediate attention')};
        if (status === 'poor' || status === 'fair') {}
            recommendations.push('Focus on improving code quality and fixing build issues')) {}
     {}
            recommendations.push('Project health needs immediate attention')};
        if (status === 'poor' || status === 'fair') {}
            recommendations.push('Focus on improving code quality and fixing build issues')};
            recommendations.push('Update outdated dependencies');
            recommendations.push('Address security vulnerabilities')};
        recommendations.push('Implement automated testing');
        recommendations.push('Set up continuous integration');
        recommendations.push('Regularly monitor project health');
        
        return recommendations};
    async run() {}
        this.log('Project Health Monitor started');
        
        try {}
            const report = this.generateHealthReport(;);
            this.log('Project Health Monitor completed successfully');
            return report} catch (error) {}
            this.log(`Project Health Monitor "failed": ${error.message}`);
            throw error};
    };
};
// Run the monitor if this script is executed directly;
if ( {})
    const monitor = new ProjectHealthMonitor) {}
     {}
    const monitor = new ProjectHealthMonitor}(;);
    monitor.run().catch(console.error)};
module.exports = ProjectHealthMonitor;
>>>>>>> main
