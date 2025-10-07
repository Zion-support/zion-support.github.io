#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class AISEOOptimizer {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 3600000; // 1 hour default
    this.seoStrategy = process.env.SEO_STRATEGY || 'comprehensive';
    this.seoScoreThreshold = parseInt(process.env.SEO_SCORE_THRESHOLD) || 85;
    this.optimizationHistory = [];
    this.seoMetrics = {
      totalPages: 0,
      optimizedPages: 0,
      overallSEOScore: 0,
      technicalScore: 0,
      contentScore: 0,
      userExperienceScore: 0
    };
    
    console.log('🔍 AI SEO Optimizer Started');
    console.log(`⏰ Optimization Interval: ${this.interval / 1000}s`);
    console.log(`🔧 Strategy: ${this.seoStrategy}`);
    console.log(`🎯 SEO Score Threshold: ${this.seoScoreThreshold}%`);
  }

  async start() {
    console.log('🚀 Starting AI-powered SEO optimization...');
    
    // Initial SEO optimization run
    await this.performSEOOptimization();
    
    // Set up continuous optimization
    setInterval(async () => {
      await this.performSEOOptimization();
    }, this.interval);
    
    // Keep process alive
    setInterval(() => {
      this.logStatus();
    }, 900000); // Log status every 15 minutes
  }

  async performSEOOptimization() {
    try {
      console.log('🔍 Performing AI-powered SEO optimization...');
      
      const startTime = Date.now();
      
      // Scan for web pages
      const webPages = await this.scanWebPages();
      
      // Analyze SEO performance
      const seoAnalysis = await this.analyzeSEOPerformance(webPages);
      
      // Identify optimization opportunities
      const opportunities = await this.identifySEOOpportunities(seoAnalysis);
      
      // Apply AI-powered optimizations
      const optimizationResults = await this.applyAIOptimizations(opportunities);
      
      // Generate SEO recommendations
      const recommendations = await this.generateSEORecommendations(seoAnalysis, optimizationResults);
      
      // Store optimization history
      const optimizationEntry = {
        timestamp: new Date().toISOString(),
        webPages: webPages,
        seoAnalysis: seoAnalysis,
        opportunities: opportunities,
        optimizationResults: optimizationResults,
        recommendations: recommendations,
        optimizationTime: Date.now() - startTime
      };
      
      this.optimizationHistory.push(optimizationEntry);
      
      // Keep only last 20 optimization runs
      if (this.optimizationHistory.length > 20) {
        this.optimizationHistory = this.optimizationHistory.slice(-20);
      }
      
      // Update metrics
      this.updateSEOMetrics(optimizationResults, seoAnalysis);
      
      // Log results
      this.logSEOResults();
      
      // Save results
      this.saveResults();
      
      console.log(`✅ SEO optimization completed in ${optimizationEntry.optimizationTime}ms`);
      
    } catch (error) {
      console.error('❌ Error during SEO optimization:', error.message);
    }
  }

  async scanWebPages() {
    const webPages = [];
    const pageDirs = ['src', 'pages', 'components', 'public'];
    
    try {
      pageDirs.forEach(dir => {
        if (fs.existsSync(dir)) {
          webPages.push(...this.getAllWebPages(dir));
        }
      });
      
      // Filter for web page files
      return webPages.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.js', '.jsx', '.ts', '.tsx', '.html', '.md'].includes(ext);
      });
    } catch (error) {
      console.error('❌ Error scanning web pages:', error.message);
    }
    
    return webPages;
  }

  async analyzeSEOPerformance(webPages) {
    const analysis = {
      overall: 0,
      byPage: {},
      byCategory: {},
      criticalIssues: [],
      improvements: []
    };
    
    try {
      let totalScore = 0;
      let pageCount = 0;
      
      for (const page of webPages) {
        const pageAnalysis = await this.analyzeSinglePage(page);
        analysis.byPage[page] = pageAnalysis;
        
        totalScore += pageAnalysis.overallScore;
        pageCount++;
        
        if (pageAnalysis.overallScore < this.seoScoreThreshold) {
          analysis.criticalIssues.push({
            page: page,
            score: pageAnalysis.overallScore,
            issues: pageAnalysis.issues
          });
        } else {
          analysis.improvements.push({
            page: page,
            score: pageAnalysis.overallScore,
            strengths: pageAnalysis.strengths
          });
        }
      }
      
      if (pageCount > 0) {
        analysis.overall = Math.round(totalScore / pageCount);
      }
      
      // Analyze by category
      analysis.byCategory = this.analyzeSEOByCategory(webPages, analysis.byPage);
      
    } catch (error) {
      console.error('❌ Error analyzing SEO performance:', error.message);
    }
    
    return analysis;
  }

  async analyzeSinglePage(pagePath) {
    const analysis = {
      overallScore: 0,
      technicalScore: 0,
      contentScore: 0,
      userExperienceScore: 0,
      issues: [],
      strengths: [],
      recommendations: []
    };
    
    try {
      const content = fs.readFileSync(pagePath, 'utf8');
      const ext = path.extname(pagePath).toLowerCase();
      
      // Analyze based on file type
      if (['.js', '.jsx', '.ts', '.tsx'].includes(ext)) {
        Object.assign(analysis, this.analyzeReactPage(content, pagePath));
      } else if (['.html', '.md'].includes(ext)) {
        Object.assign(analysis, this.analyzeHTMLPage(content, pagePath));
      }
      
      // Calculate overall score
      analysis.overallScore = Math.round(
        (analysis.technicalScore + analysis.contentScore + analysis.userExperienceScore) / 3
      );
      
    } catch (error) {
      console.error(`❌ Error analyzing page ${pagePath}:`, error.message);
    }
    
    return analysis;
  }

  analyzeReactPage(content, pagePath) {
    const analysis = {
      technicalScore: 0,
      contentScore: 0,
      userExperienceScore: 0,
      issues: [],
      strengths: [],
      recommendations: []
    };
    
    // Technical SEO analysis
    if (content.includes('title') || content.includes('meta')) {
      analysis.strengths.push('SEO meta elements detected');
      analysis.technicalScore += 25;
    } else {
      analysis.issues.push('Missing SEO meta elements');
      analysis.technicalScore -= 20;
    }
    
    if (content.includes('h1') || content.includes('h2') || content.includes('h3')) {
      analysis.strengths.push('Proper heading structure detected');
      analysis.technicalScore += 20;
    } else {
      analysis.issues.push('Missing proper heading structure');
      analysis.technicalScore -= 15;
    }
    
    if (content.includes('alt=') || content.includes('aria-label')) {
      analysis.strengths.push('Accessibility attributes present');
      analysis.technicalScore += 15;
    }
    
    // Content SEO analysis
    const textContent = content.replace(/['"`]/g, ' ').replace(/\s+/g, ' ');
    const wordCount = textContent.split(' ').filter(word => word.length > 3).length;
    
    if (wordCount > 50) {
      analysis.strengths.push(`Substantial content: ${wordCount} meaningful words`);
      analysis.contentScore += 30;
    } else {
      analysis.issues.push('Content may be too thin');
      analysis.contentScore -= 20;
    }
    
    // User Experience analysis
    if (content.includes('loading') || content.includes('suspense')) {
      analysis.strengths.push('Performance optimizations detected');
      analysis.userExperienceScore += 20;
    }
    
    if (content.includes('error') && content.includes('boundary')) {
      analysis.strengths.push('Error handling implemented');
      analysis.userExperienceScore += 15;
    }
    
    // Normalize scores
    analysis.technicalScore = Math.max(0, Math.min(100, analysis.technicalScore + 50));
    analysis.contentScore = Math.max(0, Math.min(100, analysis.contentScore + 50));
    analysis.userExperienceScore = Math.max(0, Math.min(100, analysis.userExperienceScore + 50));
    
    return analysis;
  }

  analyzeHTMLPage(content, pagePath) {
    const analysis = {
      technicalScore: 0,
      contentScore: 0,
      userExperienceScore: 0,
      issues: [],
      strengths: [],
      recommendations: []
    };
    
    // Technical SEO analysis
    if (content.includes('<title>')) {
      analysis.strengths.push('Title tag present');
      analysis.technicalScore += 25;
    } else {
      analysis.issues.push('Missing title tag');
      analysis.technicalScore -= 25;
    }
    
    if (content.includes('<meta name="description"')) {
      analysis.strengths.push('Meta description present');
      analysis.technicalScore += 20;
    } else {
      analysis.issues.push('Missing meta description');
      analysis.technicalScore -= 20;
    }
    
    if (content.includes('<meta name="keywords"')) {
      analysis.strengths.push('Keywords meta tag present');
      analysis.technicalScore += 10;
    }
    
    if (content.includes('<h1>')) {
      analysis.strengths.push('H1 heading present');
      analysis.technicalScore += 15;
    } else {
      analysis.issues.push('Missing H1 heading');
      analysis.technicalScore -= 15;
    }
    
    // Content analysis
    const textContent = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const wordCount = textContent.split(' ').filter(word => word.length > 2).length;
    
    if (wordCount > 100) {
      analysis.strengths.push(`Rich content: ${wordCount} words`);
      analysis.contentScore += 30;
    } else if (wordCount > 50) {
      analysis.strengths.push(`Adequate content: ${wordCount} words`);
      analysis.contentScore += 20;
    } else {
      analysis.issues.push('Content may be too thin');
      analysis.contentScore -= 20;
    }
    
    // User Experience analysis
    if (content.includes('defer') || content.includes('async')) {
      analysis.strengths.push('Script loading optimization');
      analysis.userExperienceScore += 20;
    }
    
    if (content.includes('viewport')) {
      analysis.strengths.push('Mobile-friendly viewport');
      analysis.userExperienceScore += 15;
    }
    
    // Normalize scores
    analysis.technicalScore = Math.max(0, Math.min(100, analysis.technicalScore + 50));
    analysis.contentScore = Math.max(0, Math.min(100, analysis.contentScore + 50));
    analysis.userExperienceScore = Math.max(0, Math.min(100, analysis.userExperienceScore + 50));
    
    return analysis;
  }

  async identifySEOOpportunities(seoAnalysis) {
    const opportunities = [];
    
    // Identify pages below SEO threshold
    seoAnalysis.criticalIssues.forEach(issue => {
      opportunities.push({
        type: 'critical-seo-fix',
        page: issue.page,
        priority: 'critical',
        currentScore: issue.score,
        targetScore: this.seoScoreThreshold,
        description: `Fix critical SEO issues on ${path.basename(issue.page)}`,
        recommendations: this.generatePageSpecificRecommendations(issue)
      });
    });
    
    // Identify technical SEO opportunities
    if (seoAnalysis.overall < 90) {
      opportunities.push({
        type: 'technical-seo-improvement',
        priority: 'high',
        description: 'Improve technical SEO elements',
        recommendations: ['Add missing meta tags', 'Optimize heading structure', 'Improve accessibility']
      });
    }
    
    // Identify content SEO opportunities
    if (seoAnalysis.overall < 85) {
      opportunities.push({
        type: 'content-seo-improvement',
        priority: 'medium',
        description: 'Enhance content for SEO',
        recommendations: ['Expand thin content', 'Add relevant keywords', 'Improve content structure']
      });
    }
    
    return opportunities;
  }

  async applyAIOptimizations(opportunities) {
    const results = {
      optimizationsApplied: 0,
      pagesModified: 0,
      seoImprovement: 0,
      errors: []
    };
    
    try {
      for (const opportunity of opportunities) {
        if (opportunity.page && opportunity.type === 'critical-seo-fix') {
          const optimizationResult = await this.optimizeSinglePage(opportunity);
          
          if (optimizationResult.success) {
            results.optimizationsApplied++;
            results.pagesModified++;
            results.seoImprovement += optimizationResult.improvement;
          } else {
            results.errors.push(optimizationResult.error);
          }
        }
      }
    } catch (error) {
      console.error('❌ Error applying AI optimizations:', error.message);
    }
    
    return results;
  }

  async optimizeSinglePage(opportunity) {
    try {
      const pagePath = opportunity.page;
      const content = fs.readFileSync(pagePath, 'utf8');
      let modified = false;
      let newContent = content;
      
      // Apply basic SEO optimizations
      if (opportunity.recommendations.includes('Add missing meta tags')) {
        // Add basic meta tags if missing
        if (!content.includes('<title>')) {
          const pageName = path.basename(pagePath, path.extname(pagePath));
          newContent = `<title>${pageName}</title>\n${newContent}`;
          modified = true;
        }
        
        if (!content.includes('<meta name="description"')) {
          const description = `Optimized page for ${path.basename(pagePath, path.extname(pagePath))}`;
          newContent = newContent.replace('<title>', `<title>\n<meta name="description" content="${description}">`);
          modified = true;
        }
      }
      
      // Save optimized content
      if (modified) {
        fs.writeFileSync(pagePath, newContent, 'utf8');
        return {
          success: true,
          improvement: 15,
          message: 'Page SEO optimized successfully'
        };
      }
      
      return {
        success: true,
        improvement: 0,
        message: 'No SEO optimizations needed'
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  generatePageSpecificRecommendations(issue) {
    const recommendations = [];
    
    if (issue.score < 50) {
      recommendations.push('Major SEO overhaul required');
      recommendations.push('Review all SEO fundamentals');
    } else if (issue.score < 70) {
      recommendations.push('Significant SEO improvements needed');
      recommendations.push('Focus on critical elements');
    }
    
    // Add specific recommendations based on issues
    issue.issues.forEach(problem => {
      if (problem.includes('Missing title')) {
        recommendations.push('Add descriptive title tag');
      }
      if (problem.includes('Missing meta description')) {
        recommendations.push('Add compelling meta description');
      }
      if (problem.includes('Missing H1')) {
        recommendations.push('Add primary heading (H1)');
      }
      if (problem.includes('Content too thin')) {
        recommendations.push('Expand content with relevant information');
      }
    });
    
    return recommendations;
  }

  async generateSEORecommendations(seoAnalysis, optimizationResults) {
    const recommendations = [];
    
    // Score-based recommendations
    if (seoAnalysis.overall < this.seoScoreThreshold) {
      recommendations.push({
        priority: 'high',
        category: 'overall',
        description: 'Improve overall SEO score',
        action: `Target: ${this.seoScoreThreshold}%, Current: ${seoAnalysis.overall}%`,
        effort: 'medium'
      });
    }
    
    // Technical SEO recommendations
    if (seoAnalysis.overall < 90) {
      recommendations.push({
        priority: 'high',
        category: 'technical',
        description: 'Enhance technical SEO',
        action: 'Fix missing meta tags and structure',
        effort: 'medium'
      });
    }
    
    // Content SEO recommendations
    if (seoAnalysis.overall < 85) {
      recommendations.push({
        priority: 'medium',
        category: 'content',
        description: 'Improve content quality',
        action: 'Expand thin content and add keywords',
        effort: 'high'
      });
    }
    
    // Maintenance recommendations
    recommendations.push({
      priority: 'low',
      category: 'maintenance',
      description: 'Regular SEO monitoring',
      action: 'Schedule monthly SEO audits',
      effort: 'low'
    });
    
    return recommendations;
  }

  updateSEOMetrics(optimizationResults, seoAnalysis) {
    this.seoMetrics.totalPages = Object.keys(seoAnalysis.byPage).length;
    this.seoMetrics.optimizedPages = optimizationResults.pagesModified;
    this.seoMetrics.overallSEOScore = seoAnalysis.overall;
    this.seoMetrics.technicalScore = this.calculateAverageScore(seoAnalysis.byPage, 'technicalScore');
    this.seoMetrics.contentScore = this.calculateAverageScore(seoAnalysis.byPage, 'contentScore');
    this.seoMetrics.userExperienceScore = this.calculateAverageScore(seoAnalysis.byPage, 'userExperienceScore');
  }

  calculateAverageScore(byPage, scoreType) {
    const scores = Object.values(byPage).map(analysis => analysis[scoreType]).filter(score => score > 0);
    if (scores.length === 0) return 0;
    return Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
  }

  logSEOResults() {
    if (this.optimizationHistory.length > 0) {
      const latest = this.optimizationHistory[this.optimizationHistory.length - 1];
      
      console.log('\n🔍 AI SEO Optimization Results:');
      console.log('─'.repeat(50));
      console.log(`📅 Timestamp: ${latest.timestamp}`);
      console.log(`⏱️  Optimization Time: ${latest.optimizationTime}ms`);
      console.log(`📄 Pages Analyzed: ${latest.webPages.length}`);
      console.log(`🔧 Optimizations Applied: ${latest.optimizationResults.optimizationsApplied}`);
      console.log(`📊 Overall SEO Score: ${latest.seoAnalysis.overall}%`);
      console.log(`🎯 Target Score: ${this.seoScoreThreshold}%`);
      console.log(`📈 SEO Improvement: ${latest.optimizationResults.seoImprovement} points`);
      console.log('─'.repeat(50));
    }
  }

  logStatus() {
    const memoryUsage = process.memoryUsage();
    const uptime = process.uptime();
    
    console.log(`🔍 AI SEO Optimizer Status - Uptime: ${Math.round(uptime)}s, Memory: ${Math.round(memoryUsage.heapUsed / 1024 / 1024)}MB`);
    console.log(`📊 Total Pages: ${this.seoMetrics.totalPages}, SEO Score: ${this.seoMetrics.overallSEOScore}%`);
  }

  saveResults() {
    try {
      const resultsPath = path.join(process.cwd(), 'logs', 'ai-seo-optimizer-results.json');
      fs.writeFileSync(resultsPath, JSON.stringify(this.optimizationHistory, null, 2));
    } catch (error) {
      console.error('❌ Failed to save SEO results:', error.message);
    }
  }

  getAllWebPages(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);
    
    files.forEach(file => {
      const fullPath = path.join(dirPath, file);
      
      if (fs.statSync(fullPath).isDirectory()) {
        arrayOfFiles = this.getAllWebPages(fullPath, arrayOfFiles);
      } else {
        arrayOfFiles.push(fullPath);
      }
    });
    
    return arrayOfFiles;
  }

  analyzeSEOByCategory(webPages, byPage) {
    const byCategory = {
      components: { count: 0, avgScore: 0 },
      pages: { count: 0, avgScore: 0 },
      templates: { count: 0, avgScore: 0 }
    };
    
    webPages.forEach(page => {
      const analysis = byPage[page];
      
      if (page.includes('components')) {
        byCategory.components.count++;
        byCategory.components.avgScore += analysis.overallScore;
      } else if (page.includes('pages')) {
        byCategory.pages.count++;
        byCategory.pages.avgScore += analysis.overallScore;
      } else {
        byCategory.templates.count++;
        byCategory.templates.avgScore += analysis.overallScore;
      }
    });
    
    // Calculate averages
    Object.keys(byCategory).forEach(category => {
      if (byCategory[category].count > 0) {
        byCategory[category].avgScore = Math.round(byCategory[category].avgScore / byCategory[category].count);
      }
    });
    
    return byCategory;
  }
}

// Start the AI SEO optimizer
const optimizer = new AISEOOptimizer();
optimizer.start().catch(error => {
  console.error('❌ Failed to start AI SEO optimizer:', error);
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down AI SEO optimizer...');
  optimizer.saveResults();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down AI SEO optimizer...');
  optimizer.saveResults();
  process.exit(0);
});