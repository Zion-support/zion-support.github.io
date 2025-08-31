#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📦 Starting intelligent dependency manager automation...');

// Get automation interval from environment variable (default: 4 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 14400000; // 4 hours

async function runIntelligentDependencyManagement() {
  try {
    console.log(`📦 Running intelligent dependency management at ${new Date().toISOString()}`);
    
    const dependencyAnalysis = {
      timestamp: new Date().toISOString(),
      outdated: [],
      vulnerabilities: [],
      unused: [],
      peerDependencies: [],
      recommendations: [],
      actions: [],
      priority: 'medium'
    };

    // 1. Analyze current dependencies
    console.log('🔍 Analyzing current dependencies...');
    dependencyAnalysis.outdated = await checkOutdatedDependencies();
    
    // 2. Security vulnerability scan
    console.log('🔒 Scanning for security vulnerabilities...');
    dependencyAnalysis.vulnerabilities = await scanVulnerabilities();
    
    // 3. Detect unused dependencies
    console.log('🧹 Detecting unused dependencies...');
    dependencyAnalysis.unused = await detectUnusedDependencies();
    
    // 4. Check peer dependency conflicts
    console.log('🔗 Checking peer dependency conflicts...');
    dependencyAnalysis.peerDependencies = await checkPeerDependencies();
    
    // 5. Generate intelligent recommendations
    console.log('💡 Generating dependency recommendations...');
    dependencyAnalysis.recommendations = generateDependencyRecommendations(dependencyAnalysis);
    
    // 6. Plan actions
    console.log('📋 Planning dependency actions...');
    dependencyAnalysis.actions = planDependencyActions(dependencyAnalysis);
    
    // 7. Prioritize actions
    dependencyAnalysis.priority = prioritizeDependencyActions(dependencyAnalysis);
    
    // 8. Generate comprehensive report
    console.log('📊 Generating dependency analysis report...');
    const reportPath = path.join(process.cwd(), 'intelligent-dependency-analysis.json');
    fs.writeFileSync(reportPath, JSON.stringify(dependencyAnalysis, null, 2));
    
    // 9. Create action plan
    await createDependencyActionPlan(dependencyAnalysis);
    
    // 10. Execute safe updates if configured
    if (process.env.AUTO_UPDATE_SAFE === 'true') {
      await executeSafeUpdates(dependencyAnalysis);
    }
    
    console.log(`✅ Intelligent dependency management completed. Report saved to ${reportPath}`);
    console.log(`🎯 Priority: ${dependencyAnalysis.priority.toUpperCase()}`);
    console.log(`📋 Actions: ${dependencyAnalysis.actions.length}`);
    
  } catch (error) {
    console.error('❌ Intelligent dependency management failed:', error.message);
  }
}

async function checkOutdatedDependencies() {
  const outdated = [];
  
  try {
    // Check for outdated packages
    const output = execSync('npm outdated --json', { stdio: 'pipe' }).toString();
    const outdatedData = JSON.parse(output);
    
    Object.keys(outdatedData).forEach(packageName => {
      const pkg = outdatedData[packageName];
      const current = pkg.current;
      const latest = pkg.latest;
      const wanted = pkg.wanted;
      
      // Calculate update priority
      let priority = 'low';
      let risk = 'low';
      
      if (isMajorVersionUpdate(current, latest)) {
        priority = 'high';
        risk = 'high';
      } else if (isMinorVersionUpdate(current, latest)) {
        priority = 'medium';
        risk = 'medium';
      }
      
      // Check if it's a breaking change
      if (isBreakingChange(current, latest)) {
        risk = 'high';
      }
      
      outdated.push({
        name: packageName,
        current: current,
        wanted: wanted,
        latest: latest,
        priority: priority,
        risk: risk,
        type: getDependencyType(packageName),
        lastUpdated: pkg.published || 'unknown',
        description: getPackageDescription(packageName)
      });
    });
    
  } catch (error) {
    // npm outdated returns non-zero exit code when there are outdated packages
    if (error.status === 1) {
      // Parse the output even with non-zero exit code
      try {
        const output = error.stdout?.toString() || error.message;
        if (output.includes('{')) {
          const jsonStart = output.indexOf('{');
          const jsonEnd = output.lastIndexOf('}') + 1;
          const jsonOutput = output.substring(jsonStart, jsonEnd);
          const outdatedData = JSON.parse(jsonOutput);
          
          Object.keys(outdatedData).forEach(packageName => {
            const pkg = outdatedData[packageName];
            outdated.push({
              name: packageName,
              current: pkg.current,
              wanted: pkg.wanted,
              latest: pkg.latest,
              priority: isMajorVersionUpdate(pkg.current, pkg.latest) ? 'high' : 'medium',
              risk: isMajorVersionUpdate(pkg.current, pkg.latest) ? 'high' : 'medium',
              type: getDependencyType(packageName),
              lastUpdated: pkg.published || 'unknown',
              description: getPackageDescription(packageName)
            });
          });
        }
      } catch (parseError) {
        console.log('⚠️  Could not parse outdated dependencies output');
      }
    } else {
      console.log('✅ All dependencies are up to date');
    }
  }
  
  return outdated;
}

async function scanVulnerabilities() {
  const vulnerabilities = [];
  
  try {
    // Run npm audit
    const output = execSync('npm audit --json', { stdio: 'pipe' }).toString();
    const auditData = JSON.parse(output);
    
    if (auditData.vulnerabilities) {
      Object.keys(auditData.vulnerabilities).forEach(packageName => {
        const vuln = auditData.vulnerabilities[packageName];
        
        vuln.via.forEach(via => {
          if (via.type === 'audit') {
            vulnerabilities.push({
              package: packageName,
              severity: via.severity,
              title: via.title,
              description: via.description,
              cwe: via.cwe || [],
              cvss: via.cvss || {},
              recommendation: via.recommendation || 'Update to latest version',
              dependencyOf: vuln.dependencyOf || [],
              path: vuln.path || []
            });
          }
        });
      });
    }
    
  } catch (error) {
    // npm audit returns non-zero exit code when vulnerabilities are found
    if (error.status === 1) {
      try {
        const output = error.stdout?.toString() || error.message;
        if (output.includes('{')) {
          const jsonStart = output.indexOf('{');
          const jsonEnd = output.lastIndexOf('}') + 1;
          const jsonOutput = output.substring(jsonStart, jsonEnd);
          const auditData = JSON.parse(jsonOutput);
          
          if (auditData.vulnerabilities) {
            Object.keys(auditData.vulnerabilities).forEach(packageName => {
              const vuln = auditData.vulnerabilities[packageName];
              vuln.via.forEach(via => {
                if (via.type === 'audit') {
                  vulnerabilities.push({
                    package: packageName,
                    severity: via.severity,
                    title: via.title,
                    description: via.description,
                    cwe: via.cwe || [],
                    cvss: via.cvss || {},
                    recommendation: via.recommendation || 'Update to latest version',
                    dependencyOf: vuln.dependencyOf || [],
                    path: vuln.path || []
                  });
                }
              });
            });
          }
        }
      } catch (parseError) {
        console.log('⚠️  Could not parse audit output');
      }
    } else {
      console.log('✅ No security vulnerabilities found');
    }
  }
  
  return vulnerabilities;
}

async function detectUnusedDependencies() {
  const unused = [];
  
  try {
    // Run depcheck if available
    try {
      const output = execSync('npx depcheck --json', { stdio: 'pipe' }).toString();
      const depcheckData = JSON.parse(output);
      
      if (depcheckData.dependencies && depcheckData.dependencies.length > 0) {
        depcheckData.dependencies.forEach(dep => {
          unused.push({
            name: dep,
            type: 'unused',
            reason: 'Not imported or used in code',
            impact: 'low'
          });
        });
      }
      
      if (depcheckData.devDependencies && depcheckData.devDependencies.length > 0) {
        depcheckData.devDependencies.forEach(dep => {
          unused.push({
            name: dep,
            type: 'unused-dev',
            reason: 'Not used in build or test processes',
            impact: 'low'
          });
        });
      }
      
    } catch (depcheckError) {
      // Fallback to manual analysis
      console.log('ℹ️  depcheck not available, using manual analysis');
      unused.push(...await manualUnusedDependencyAnalysis());
    }
    
  } catch (error) {
    console.log('⚠️  Unused dependency detection failed:', error.message);
  }
  
  return unused;
}

async function manualUnusedDependencyAnalysis() {
  const unused = [];
  
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const srcPath = path.join(process.cwd(), 'src');
    
    if (fs.existsSync(srcPath)) {
      const files = getAllFiles(srcPath, ['.js', '.jsx', '.ts', '.tsx']);
      const usedImports = new Set();
      
      // Scan for imports in source files
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        const importMatches = content.match(/import\s+.*\s+from\s+['"`]([^'"`]+)['"`]/g);
        
        if (importMatches) {
          importMatches.forEach(match => {
            const packageMatch = match.match(/from\s+['"`]([^'"`]+)['"`]/);
            if (packageMatch) {
              const packageName = packageMatch[1];
              // Extract package name from import path
              const pkgName = packageName.split('/')[0];
              if (pkgName && !pkgName.startsWith('.')) {
                usedImports.add(pkgName);
              }
            }
          });
        }
      });
      
      // Check for unused dependencies
      Object.keys(packageJson.dependencies || {}).forEach(dep => {
        if (!usedImports.has(dep)) {
          unused.push({
            name: dep,
            type: 'potentially-unused',
            reason: 'Not directly imported in source code',
            impact: 'low',
            note: 'May be used indirectly or dynamically'
          });
        }
      });
    }
    
  } catch (error) {
    console.log('⚠️  Manual unused dependency analysis failed:', error.message);
  }
  
  return unused;
}

async function checkPeerDependencies() {
  const peerDependencies = [];
  
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    // Check for peer dependency conflicts
    if (packageJson.peerDependencies) {
      Object.keys(packageJson.peerDependencies).forEach(dep => {
        const requiredVersion = packageJson.peerDependencies[dep];
        const installedVersion = getInstalledVersion(dep);
        
        if (installedVersion && !satisfiesVersion(installedVersion, requiredVersion)) {
          peerDependencies.push({
            package: dep,
            required: requiredVersion,
            installed: installedVersion,
            conflict: true,
            severity: 'high'
          });
        }
      });
    }
    
  } catch (error) {
    console.log('⚠️  Peer dependency check failed:', error.message);
  }
  
  return peerDependencies;
}

function generateDependencyRecommendations(analysis) {
  const recommendations = [];
  
  // Security recommendations
  if (analysis.vulnerabilities.length > 0) {
    const criticalVulns = analysis.vulnerabilities.filter(v => v.severity === 'critical');
    const highVulns = analysis.vulnerabilities.filter(v => v.severity === 'high');
    
    if (criticalVulns.length > 0) {
      recommendations.push({
        priority: 'critical',
        category: 'Security',
        title: 'Fix Critical Security Vulnerabilities',
        description: `Found ${criticalVulns.length} critical security vulnerabilities`,
        action: 'Update vulnerable packages immediately',
        impact: 'Critical',
        packages: criticalVulns.map(v => v.package)
      });
    }
    
    if (highVulns.length > 0) {
      recommendations.push({
        priority: 'high',
        category: 'Security',
        title: 'Fix High Priority Security Vulnerabilities',
        description: `Found ${highVulns.length} high priority security vulnerabilities`,
        action: 'Update vulnerable packages as soon as possible',
        impact: 'High',
        packages: highVulns.map(v => v.package)
      });
    }
  }
  
  // Update recommendations
  if (analysis.outdated.length > 0) {
    const majorUpdates = analysis.outdated.filter(pkg => pkg.priority === 'high');
    const minorUpdates = analysis.outdated.filter(pkg => pkg.priority === 'medium');
    
    if (majorUpdates.length > 0) {
      recommendations.push({
        priority: 'medium',
        category: 'Updates',
        title: 'Consider Major Version Updates',
        description: `Found ${majorUpdates.length} packages with major version updates available`,
        action: 'Review breaking changes and update if compatible',
        impact: 'Medium',
        packages: majorUpdates.map(pkg => pkg.name)
      });
    }
    
    if (minorUpdates.length > 0) {
      recommendations.push({
        priority: 'low',
        category: 'Updates',
        title: 'Apply Minor Version Updates',
        description: `Found ${minorUpdates.length} packages with minor version updates available`,
        action: 'Update packages for bug fixes and new features',
        impact: 'Low',
        packages: minorUpdates.map(pkg => pkg.name)
      });
    }
  }
  
  // Cleanup recommendations
  if (analysis.unused.length > 0) {
    const definitelyUnused = analysis.unused.filter(pkg => pkg.type === 'unused');
    
    if (definitelyUnused.length > 0) {
      recommendations.push({
        priority: 'low',
        category: 'Cleanup',
        title: 'Remove Unused Dependencies',
        description: `Found ${definitelyUnused.length} unused dependencies`,
        action: 'Remove unused packages to reduce bundle size',
        impact: 'Low',
        packages: definitelyUnused.map(pkg => pkg.name)
      });
    }
  }
  
  return recommendations;
}

function planDependencyActions(analysis) {
  const actions = [];
  
  // Immediate actions for critical issues
  if (analysis.vulnerabilities.some(v => v.severity === 'critical')) {
    actions.push({
      type: 'update',
      priority: 'immediate',
      description: 'Update packages with critical security vulnerabilities',
      packages: analysis.vulnerabilities.filter(v => v.severity === 'critical').map(v => v.package),
      command: 'npm audit fix',
      risk: 'low'
    });
  }
  
  // High priority actions
  if (analysis.vulnerabilities.some(v => v.severity === 'high')) {
    actions.push({
      type: 'update',
      priority: 'high',
      description: 'Update packages with high priority security vulnerabilities',
      packages: analysis.vulnerabilities.filter(v => v.severity === 'high').map(v => v.package),
      command: 'npm audit fix',
      risk: 'low'
    });
  }
  
  // Safe updates
  const safeUpdates = analysis.outdated.filter(pkg => 
    pkg.risk === 'low' && pkg.priority === 'low'
  );
  
  if (safeUpdates.length > 0) {
    actions.push({
      type: 'update',
      priority: 'medium',
      description: 'Apply safe dependency updates',
      packages: safeUpdates.map(pkg => pkg.name),
      command: `npm update ${safeUpdates.map(pkg => pkg.name).join(' ')}`,
      risk: 'low'
    });
  }
  
  // Cleanup actions
  const definitelyUnused = analysis.unused.filter(pkg => pkg.type === 'unused');
  if (definitelyUnused.length > 0) {
    actions.push({
      type: 'remove',
      priority: 'low',
      description: 'Remove unused dependencies',
      packages: definitelyUnused.map(pkg => pkg.name),
      command: `npm uninstall ${definitelyUnused.map(pkg => pkg.name).join(' ')}`,
      risk: 'low'
    });
  }
  
  return actions;
}

function prioritizeDependencyActions(analysis) {
  if (analysis.vulnerabilities.some(v => v.severity === 'critical')) {
    return 'critical';
  } else if (analysis.vulnerabilities.some(v => v.severity === 'high')) {
    return 'high';
  } else if (analysis.outdated.some(pkg => pkg.priority === 'high')) {
    return 'medium';
  } else {
    return 'low';
  }
}

async function createDependencyActionPlan(analysis) {
  try {
    const actionPlanPath = path.join(process.cwd(), 'dependency-action-plan.md');
    let content = `# Dependency Management Action Plan\n\n`;
    content += `Generated: ${analysis.timestamp}\n`;
    content += `Priority: ${analysis.priority.toUpperCase()}\n\n`;
    
    if (analysis.actions.length > 0) {
      content += `## Recommended Actions\n\n`;
      analysis.actions.forEach((action, index) => {
        content += `### ${index + 1}. ${action.description}\n`;
        content += `- **Type**: ${action.type}\n`;
        content += `- **Priority**: ${action.priority}\n`;
        content += `- **Risk**: ${action.risk}\n`;
        content += `- **Command**: \`${action.command}\`\n`;
        content += `- **Packages**: ${action.packages.join(', ')}\n\n`;
      });
    }
    
    if (analysis.recommendations.length > 0) {
      content += `## Recommendations\n\n`;
      analysis.recommendations.forEach((rec, index) => {
        content += `### ${index + 1}. ${rec.title}\n`;
        content += `- **Priority**: ${rec.priority.toUpperCase()}\n`;
        content += `- **Category**: ${rec.category}\n`;
        content += `- **Impact**: ${rec.impact}\n`;
        content += `- **Description**: ${rec.description}\n`;
        content += `- **Action**: ${rec.action}\n`;
        if (rec.packages) {
          content += `- **Packages**: ${rec.packages.join(', ')}\n`;
        }
        content += '\n';
      });
    }
    
    fs.writeFileSync(actionPlanPath, content);
    console.log(`📋 Dependency action plan created: ${actionPlanPath}`);
    
  } catch (error) {
    console.log('⚠️  Failed to create dependency action plan:', error.message);
  }
}

async function executeSafeUpdates(analysis) {
  try {
    console.log('🔄 Executing safe dependency updates...');
    
    const safeActions = analysis.actions.filter(action => 
      action.risk === 'low' && action.type === 'update'
    );
    
    for (const action of safeActions) {
      try {
        console.log(`🔄 Executing: ${action.description}`);
        execSync(action.command, { stdio: 'inherit' });
        console.log(`✅ Successfully executed: ${action.description}`);
      } catch (error) {
        console.log(`⚠️  Failed to execute: ${action.description}`, error.message);
      }
    }
    
  } catch (error) {
    console.log('⚠️  Safe updates execution failed:', error.message);
  }
}

// Utility functions
function isMajorVersionUpdate(current, latest) {
  const currentMajor = parseInt(current.split('.')[0]);
  const latestMajor = parseInt(latest.split('.')[0]);
  return latestMajor > currentMajor;
}

function isMinorVersionUpdate(current, latest) {
  const currentMinor = parseInt(current.split('.')[1]);
  const latestMinor = parseInt(latest.split('.')[1]);
  return latestMinor > currentMinor;
}

function isBreakingChange(current, latest) {
  // This is a simplified check - in reality, you'd need to check changelogs
  return isMajorVersionUpdate(current, latest);
}

function getDependencyType(packageName) {
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    if (packageJson.dependencies && packageJson.dependencies[packageName]) {
      return 'production';
    } else if (packageJson.devDependencies && packageJson.devDependencies[packageName]) {
      return 'development';
    } else if (packageJson.peerDependencies && packageJson.peerDependencies[packageName]) {
      return 'peer';
    } else if (packageJson.optionalDependencies && packageJson.optionalDependencies[packageName]) {
      return 'optional';
    }
  } catch (error) {
    // Ignore errors
  }
  
  return 'unknown';
}

function getPackageDescription(packageName) {
  // This could be enhanced to fetch package descriptions from npm registry
  return 'Package description not available';
}

function getInstalledVersion(packageName) {
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    return packageJson.dependencies?.[packageName] || 
           packageJson.devDependencies?.[packageName] || 
           packageJson.peerDependencies?.[packageName];
  } catch (error) {
    return null;
  }
}

function satisfiesVersion(installed, required) {
  // Simplified version checking - in reality, you'd use semver
  return installed === required;
}

function getAllFiles(dir, extensions) {
  const files = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories that can't be accessed
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main continuous loop
async function runContinuous() {
  console.log(`🚀 Starting intelligent dependency manager with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  
  // Run initial dependency management
  await runIntelligentDependencyManagement();
  
  // Set up continuous execution
  setInterval(async () => {
    await runIntelligentDependencyManagement();
  }, AUTOMATION_INTERVAL);
  
  console.log(`✅ Intelligent dependency manager running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the intelligent dependency manager
runContinuous().catch(error => {
  console.error('❌ Failed to start intelligent dependency manager:', error);
  process.exit(1);
});