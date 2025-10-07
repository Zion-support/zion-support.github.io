#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class ContentOptimizer {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 1800000; // 30 minutes default
    this.optimizationStrategy = process.env.OPTIMIZATION_STRATEGY || 'comprehensive';
    this.contentQualityThreshold = parseInt(process.env.CONTENT_QUALITY_THRESHOLD) || 80;
    this.optimizationHistory = [];
    this.optimizationMetrics = {
      totalFiles: 0,
      optimizedFiles: 0,
      qualityScore: 0,
      seoScore: 0,
      readabilityScore: 0
    };
    
    console.log('📝 Content Optimizer Started');
    console.log(`⏰ Optimization Interval: ${this.interval / 1000}s`);
    console.log(`🔧 Strategy: ${this.optimizationStrategy}`);
    console.log(`🎯 Quality Threshold: ${this.contentQualityThreshold}%`);
  }

  async start() {
    console.log('🚀 Starting content optimization...');
    
    // Initial optimization run
    await this.performContentOptimization();
    
    // Set up continuous optimization
    setInterval(async () => {
      await this.performContentOptimization();
    }, this.interval);
    
    // Keep process alive
    setInterval(() => {
      this.logStatus();
    }, 600000); // Log status every 10 minutes
  }

  async performContentOptimization() {
    try {
      console.log('📝 Performing content optimization...');
      
      const startTime = Date.now();
      
      // Scan for content files
      const contentFiles = await this.scanContentFiles();
      
      // Analyze content quality
      const qualityAnalysis = await this.analyzeContentQuality(contentFiles);
      
      // Identify optimization opportunities
      const opportunities = await this.identifyOptimizationOpportunities(qualityAnalysis);
      
      // Apply optimizations
      const optimizationResults = await this.applyOptimizations(opportunities);
      
      // Generate optimization recommendations
      const recommendations = await this.generateOptimizationRecommendations(qualityAnalysis, optimizationResults);
      
      // Store optimization history
      const optimizationEntry = {
        timestamp: new Date().toISOString(),
        contentFiles: contentFiles,
        qualityAnalysis: qualityAnalysis,
        opportunities: opportunities,
        optimizationResults: optimizationResults,
        recommendations: recommendations,
        optimizationTime: Date.now() - startTime
      };
      
      this.optimizationHistory.push(optimizationEntry);
      
      // Keep only last 30 optimization runs
      if (this.optimizationHistory.length > 30) {
        this.optimizationHistory = this.optimizationHistory.slice(-30);
      }
      
      // Update metrics
      this.updateOptimizationMetrics(optimizationResults, qualityAnalysis);
      
      // Log results
      this.logOptimizationResults();
      
      // Save results
      this.saveResults();
      
      console.log(`✅ Content optimization completed in ${optimizationEntry.optimizationTime}ms`);
      
    } catch (error) {
      console.error('❌ Error during content optimization:', error.message);
    }
  }

  async scanContentFiles() {
    const contentFiles = [];
    const contentDirs = ['src', 'pages', 'components', 'content', 'public'];
    
    try {
      contentDirs.forEach(dir => {
        if (fs.existsSync(dir)) {
          contentFiles.push(...this.getAllContentFiles(dir));
        }
      });
      
      // Filter for content-related files
      return contentFiles.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.js', '.jsx', '.ts', '.tsx', '.md', '.html', '.css', '.scss'].includes(ext);
      });
    } catch (error) {
      console.error('❌ Error scanning content files:', error.message);
    }
    
    return contentFiles;
  }

  async analyzeContentQuality(contentFiles) {
    const analysis = {
      overall: 0,
      byFile: {},
      byType: {},
      issues: [],
      strengths: []
    };
    
    try {
      let totalScore = 0;
      let fileCount = 0;
      
      for (const file of contentFiles) {
        const fileAnalysis = await this.analyzeSingleFile(file);
        analysis.byFile[file] = fileAnalysis;
        
        totalScore += fileAnalysis.score;
        fileCount++;
        
        if (fileAnalysis.score < this.contentQualityThreshold) {
          analysis.issues.push({
            file: file,
            score: fileAnalysis.score,
            issues: fileAnalysis.issues
          });
        } else {
          analysis.strengths.push({
            file: file,
            score: fileAnalysis.score,
            strengths: fileAnalysis.strengths
          });
        }
      }
      
      if (fileCount > 0) {
        analysis.overall = Math.round(totalScore / fileCount);
      }
      
      // Analyze by file type
      analysis.byType = this.analyzeQualityByType(contentFiles, analysis.byFile);
      
    } catch (error) {
      console.error('❌ Error analyzing content quality:', error.message);
    }
    
    return analysis;
  }

  async analyzeSingleFile(filePath) {
    const analysis = {
      score: 0,
      issues: [],
      strengths: [],
      seoScore: 0,
      readabilityScore: 0,
      performanceScore: 0
    };
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const ext = path.extname(filePath).toLowerCase();
      
      // Analyze based on file type
      if (['.js', '.jsx', '.ts', '.tsx'].includes(ext)) {
        Object.assign(analysis, this.analyzeCodeFile(content, filePath));
      } else if (['.md', '.html'].includes(ext)) {
        Object.assign(analysis, this.analyzeMarkupFile(content, filePath));
      } else if (['.css', '.scss'].includes(ext)) {
        Object.assign(analysis, this.analyzeStyleFile(content, filePath));
      }
      
      // Calculate overall score
      analysis.score = Math.round(
        (analysis.seoScore + analysis.readabilityScore + analysis.performanceScore) / 3
      );
      
    } catch (error) {
      console.error(`❌ Error analyzing file ${filePath}:`, error.message);
    }
    
    return analysis;
  }

  analyzeCodeFile(content, filePath) {
    const analysis = {
      seoScore: 0,
      readabilityScore: 0,
      performanceScore: 0,
      issues: [],
      strengths: []
    };
    
    // Analyze code quality
    const lines = content.split('\n');
    const totalLines = lines.length;
    
    // Check for long lines
    const longLines = lines.filter(line => line.length > 120).length;
    if (longLines > 0) {
      analysis.issues.push(`Long lines detected: ${longLines}/${totalLines}`);
      analysis.readabilityScore -= 10;
    }
    
    // Check for comments
    const commentLines = lines.filter(line => line.trim().startsWith('//') || line.trim().startsWith('/*')).length;
    if (commentLines > 0) {
      analysis.strengths.push(`Good documentation: ${commentLines} comment lines`);
      analysis.readabilityScore += 15;
    }
    
    // Check for meaningful variable names
    const variablePattern = /\b(const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g;
    const variables = [...content.matchAll(variablePattern)];
    const meaningfulVars = variables.filter(v => v[2].length > 2 && !v[2].match(/^[a-z]$/)).length;
    
    if (meaningfulVars > 0) {
      analysis.strengths.push(`Meaningful variable names: ${meaningfulVars} variables`);
      analysis.readabilityScore += 10;
    }
    
    // Performance checks
    if (content.includes('innerHTML') || content.includes('document.write')) {
      analysis.issues.push('Potential security risk: innerHTML/document.write usage');
      analysis.performanceScore -= 20;
    }
    
    if (content.includes('setInterval') || content.includes('setTimeout')) {
      analysis.issues.push('Timers detected - ensure proper cleanup');
      analysis.performanceScore -= 5;
    }
    
    // SEO considerations for React components
    if (content.includes('title') || content.includes('meta') || content.includes('h1')) {
      analysis.strengths.push('SEO-friendly elements detected');
      analysis.seoScore += 20;
    }
    
    // Normalize scores
    analysis.seoScore = Math.max(0, Math.min(100, analysis.seoScore + 50));
    analysis.readabilityScore = Math.max(0, Math.min(100, analysis.readabilityScore + 50));
    analysis.performanceScore = Math.max(0, Math.min(100, analysis.performanceScore + 50));
    
    return analysis;
  }

  analyzeMarkupFile(content, filePath) {
    const analysis = {
      seoScore: 0,
      readabilityScore: 0,
      performanceScore: 0,
      issues: [],
      strengths: []
    };
    
    // SEO analysis
    if (content.includes('<title>')) {
      analysis.strengths.push('Title tag present');
      analysis.seoScore += 20;
    }
    
    if (content.includes('<meta name="description"')) {
      analysis.strengths.push('Meta description present');
      analysis.seoScore += 20;
    }
    
    if (content.includes('<h1>')) {
      analysis.strengths.push('H1 heading present');
      analysis.seoScore += 15;
    }
    
    if (content.includes('<img') && content.includes('alt=')) {
      analysis.strengths.push('Images have alt attributes');
      analysis.seoScore += 15;
    }
    
    // Readability analysis
    const textContent = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const wordCount = textContent.split(' ').length;
    
    if (wordCount > 100) {
      analysis.strengths.push(`Substantial content: ${wordCount} words`);
      analysis.readabilityScore += 20;
    }
    
    // Performance analysis
    if (content.includes('defer') || content.includes('async')) {
      analysis.strengths.push('Script loading optimization detected');
      analysis.performanceScore += 15;
    }
    
    // Normalize scores
    analysis.seoScore = Math.max(0, Math.min(100, analysis.seoScore + 30));
    analysis.readabilityScore = Math.max(0, Math.min(100, analysis.readabilityScore + 40));
    analysis.performanceScore = Math.max(0, Math.min(100, analysis.performanceScore + 50));
    
    return analysis;
  }

  analyzeStyleFile(content, filePath) {
    const analysis = {
      seoScore: 0,
      readabilityScore: 0,
      performanceScore: 0,
      issues: [],
      strengths: []
    };
    
    // Performance analysis
    if (content.includes('!important')) {
      const importantCount = (content.match(/!important/g) || []).length;
      if (importantCount > 5) {
        analysis.issues.push(`Excessive !important usage: ${importantCount} instances`);
        analysis.performanceScore -= 15;
      }
    }
    
    // Check for unused CSS patterns
    if (content.includes('*')) {
      analysis.issues.push('Universal selector detected - may impact performance');
      analysis.performanceScore -= 10;
    }
    
    // Check for responsive design
    if (content.includes('@media')) {
      analysis.strengths.push('Responsive design detected');
      analysis.performanceScore += 20;
    }
    
    // Check for CSS variables
    if (content.includes('var(--')) {
      analysis.strengths.push('CSS variables used for maintainability');
      analysis.readabilityScore += 15;
    }
    
    // Normalize scores
    analysis.seoScore = 50; // CSS doesn't directly impact SEO
    analysis.readabilityScore = Math.max(0, Math.min(100, analysis.readabilityScore + 50));
    analysis.performanceScore = Math.max(0, Math.min(100, analysis.performanceScore + 50));
    
    return analysis;
  }

  async identifyOptimizationOpportunities(qualityAnalysis) {
    const opportunities = [];
    
    // Identify files below quality threshold
    qualityAnalysis.issues.forEach(issue => {
      opportunities.push({
        type: 'quality-improvement',
        file: issue.file,
        priority: 'high',
        currentScore: issue.score,
        targetScore: this.contentQualityThreshold,
        description: `Improve content quality from ${issue.score}% to ${this.contentQualityThreshold}%`,
        recommendations: this.generateFileSpecificRecommendations(issue)
      });
    });
    
    // Identify SEO opportunities
    if (qualityAnalysis.overall < 85) {
      opportunities.push({
        type: 'seo-optimization',
        priority: 'medium',
        description: 'Improve overall SEO score',
        recommendations: ['Add meta descriptions', 'Optimize heading structure', 'Improve image alt texts']
      });
    }
    
    // Identify readability opportunities
    if (qualityAnalysis.overall < 80) {
      opportunities.push({
        type: 'readability-improvement',
        priority: 'medium',
        description: 'Improve content readability',
        recommendations: ['Add comments to code', 'Use meaningful variable names', 'Break down complex functions']
      });
    }
    
    return opportunities;
  }

  async applyOptimizations(opportunities) {
    const results = {
      optimizationsApplied: 0,
      filesModified: 0,
      qualityImprovement: 0,
      errors: []
    };
    
    try {
      for (const opportunity of opportunities) {
        if (opportunity.file && opportunity.type === 'quality-improvement') {
          const optimizationResult = await this.optimizeSingleFile(opportunity);
          
          if (optimizationResult.success) {
            results.optimizationsApplied++;
            results.filesModified++;
            results.qualityImprovement += optimizationResult.improvement;
          } else {
            results.errors.push(optimizationResult.error);
          }
        }
      }
    } catch (error) {
      console.error('❌ Error applying optimizations:', error.message);
    }
    
    return results;
  }

  async optimizeSingleFile(opportunity) {
    try {
      const filePath = opportunity.file;
      const content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      let newContent = content;
      
      // Apply basic optimizations
      if (opportunity.recommendations.includes('Add comments to code')) {
        // Add basic function documentation
        const functionPattern = /function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g;
        newContent = newContent.replace(functionPattern, (match, funcName) => {
          if (!content.includes(`// ${funcName}`)) {
            modified = true;
            return `// ${funcName} - Function description\n${match}`;
          }
          return match;
        });
      }
      
      // Save optimized content
      if (modified) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        return {
          success: true,
          improvement: 10,
          message: 'File optimized successfully'
        };
      }
      
      return {
        success: true,
        improvement: 0,
        message: 'No optimizations needed'
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  generateFileSpecificRecommendations(issue) {
    const recommendations = [];
    
    if (issue.score < 60) {
      recommendations.push('Major refactoring required');
      recommendations.push('Review coding standards');
    } else if (issue.score < 80) {
      recommendations.push('Minor improvements needed');
      recommendations.push('Add documentation');
    }
    
    // Add specific recommendations based on issues
    issue.issues.forEach(problem => {
      if (problem.includes('Long lines')) {
        recommendations.push('Break long lines into multiple lines');
      }
      if (problem.includes('innerHTML')) {
        recommendations.push('Replace innerHTML with safer alternatives');
      }
      if (problem.includes('!important')) {
        recommendations.push('Reduce !important usage in CSS');
      }
    });
    
    return recommendations;
  }

  async generateOptimizationRecommendations(qualityAnalysis, optimizationResults) {
    const recommendations = [];
    
    // Quality-based recommendations
    if (qualityAnalysis.overall < this.contentQualityThreshold) {
      recommendations.push({
        priority: 'high',
        category: 'quality',
        description: 'Improve overall content quality',
        action: `Target: ${this.contentQualityThreshold}%, Current: ${qualityAnalysis.overall}%`,
        effort: 'medium'
      });
    }
    
    // Performance recommendations
    if (optimizationResults.qualityImprovement > 0) {
      recommendations.push({
        priority: 'medium',
        category: 'performance',
        description: 'Continue optimization efforts',
        action: `Quality improved by ${optimizationResults.qualityImprovement} points`,
        effort: 'low'
      });
    }
    
    // Maintenance recommendations
    recommendations.push({
      priority: 'low',
      category: 'maintenance',
      description: 'Regular content review',
      action: 'Schedule monthly content quality reviews',
      effort: 'low'
    });
    
    return recommendations;
  }

  updateOptimizationMetrics(optimizationResults, qualityAnalysis) {
    this.optimizationMetrics.totalFiles = Object.keys(qualityAnalysis.byFile).length;
    this.optimizationMetrics.optimizedFiles = optimizationResults.filesModified;
    this.optimizationMetrics.qualityScore = qualityAnalysis.overall;
    this.optimizationMetrics.seoScore = this.calculateAverageScore(qualityAnalysis.byFile, 'seoScore');
    this.optimizationMetrics.readabilityScore = this.calculateAverageScore(qualityAnalysis.byFile, 'readabilityScore');
  }

  calculateAverageScore(byFile, scoreType) {
    const scores = Object.values(byFile).map(analysis => analysis[scoreType]).filter(score => score > 0);
    if (scores.length === 0) return 0;
    return Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
  }

  logOptimizationResults() {
    if (this.optimizationHistory.length > 0) {
      const latest = this.optimizationHistory[this.optimizationHistory.length - 1];
      
      console.log('\n📝 Content Optimization Results:');
      console.log('─'.repeat(50));
      console.log(`📅 Timestamp: ${latest.timestamp}`);
      console.log(`⏱️  Optimization Time: ${latest.optimizationTime}ms`);
      console.log(`📁 Files Analyzed: ${latest.contentFiles.length}`);
      console.log(`🔧 Optimizations Applied: ${latest.optimizationResults.optimizationsApplied}`);
      console.log(`📊 Quality Score: ${latest.qualityAnalysis.overall}%`);
      console.log(`🎯 Target Quality: ${this.contentQualityThreshold}%`);
      console.log(`📈 Quality Improvement: ${latest.optimizationResults.qualityImprovement} points`);
      console.log('─'.repeat(50));
    }
  }

  logStatus() {
    const memoryUsage = process.memoryUsage();
    const uptime = process.uptime();
    
    console.log(`📝 Content Optimizer Status - Uptime: ${Math.round(uptime)}s, Memory: ${Math.round(memoryUsage.heapUsed / 1024 / 1024)}MB`);
    console.log(`📊 Total Files: ${this.optimizationMetrics.totalFiles}, Quality: ${this.optimizationMetrics.qualityScore}%`);
  }

  saveResults() {
    try {
      const resultsPath = path.join(process.cwd(), 'logs', 'content-optimizer-results.json');
      fs.writeFileSync(resultsPath, JSON.stringify(this.optimizationHistory, null, 2));
    } catch (error) {
      console.error('❌ Failed to save optimization results:', error.message);
    }
  }

  getAllContentFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);
    
    files.forEach(file => {
      const fullPath = path.join(dirPath, file);
      
      if (fs.statSync(fullPath).isDirectory()) {
        arrayOfFiles = this.getAllContentFiles(fullPath, arrayOfFiles);
      } else {
        arrayOfFiles.push(fullPath);
      }
    });
    
    return arrayOfFiles;
  }

  analyzeQualityByType(contentFiles, byFile) {
    const byType = {
      code: { count: 0, avgScore: 0 },
      markup: { count: 0, avgScore: 0 },
      style: { count: 0, avgScore: 0 }
    };
    
    contentFiles.forEach(file => {
      const ext = path.extname(file).toLowerCase();
      const analysis = byFile[file];
      
      if (['.js', '.jsx', '.ts', '.tsx'].includes(ext)) {
        byType.code.count++;
        byType.code.avgScore += analysis.score;
      } else if (['.md', '.html'].includes(ext)) {
        byType.markup.count++;
        byType.markup.avgScore += analysis.score;
      } else if (['.css', '.scss'].includes(ext)) {
        byType.style.count++;
        byType.style.avgScore += analysis.score;
      }
    });
    
    // Calculate averages
    Object.keys(byType).forEach(type => {
      if (byType[type].count > 0) {
        byType[type].avgScore = Math.round(byType[type].avgScore / byType[type].count);
      }
    });
    
    return byType;
  }
}

// Start the content optimizer
const optimizer = new ContentOptimizer();
optimizer.start().catch(error => {
  console.error('❌ Failed to start content optimizer:', error);
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down content optimizer...');
  optimizer.saveResults();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down content optimizer...');
  optimizer.saveResults();
  process.exit(0);
});