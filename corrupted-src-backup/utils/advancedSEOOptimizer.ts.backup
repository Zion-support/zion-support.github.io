/**
 * Advanced SEO optimizer for comprehensive search engine optimization
 */

interface SEOMetrics {
  titleScore: number;
  descriptionScore: number;
  headingScore: number;
  keywordScore: number;
  imageAltScore: number;
  linkScore: number;
  overallScore: number;
}

interface SEORecommendation {
  type: 'title' | 'description' | 'heading' | 'keyword' | 'image' | 'link';
  priority: 'high' | 'medium' | 'low';
  message: string;
  suggestion: string;
}

class AdvancedSEOOptimizer {
  private metrics: SEOMetrics = {
    titleScore: 0,
    descriptionScore: 0,
    headingScore: 0,
    keywordScore: 0,
    imageAltScore: 0,
    linkScore: 0,
    overallScore: 0,
  };

  private recommendations: SEORecommendation[] = [];

  public analyzePage(): SEOMetrics {
    this.metrics = {
      titleScore: this.analyzeTitle(),
      descriptionScore: this.analyzeDescription(),
      headingScore: this.analyzeHeadings(),
      keywordScore: this.analyzeKeywords(),
      imageAltScore: this.analyzeImages(),
      linkScore: this.analyzeLinks(),
      overallScore: 0,
    };

    this.metrics.overallScore = this.calculateOverallScore();
    this.generateRecommendations();

    return this.metrics;
  }

  private analyzeTitle(): number {
    const title = document.querySelector('title')?.textContent || '';
    let score = 0;

    if (title.length > 0) score += 20;
    if (title.length >= 30 && title.length <= 60) score += 30;
    if (title.includes(' ')) score += 20;
    if (title.length > 0 && title.length < 30) score += 10;

    return Math.min(score, 100);
  }

  private analyzeDescription(): number {
    const description =
      document
        .querySelector('meta[name="description"]')
        ?.getAttribute('content') || '';
    let score = 0;

    if (description.length > 0) score += 20;
    if (description.length >= 120 && description.length <= 160) score += 30;
    if (description.includes(' ')) score += 20;
    if (description.length > 0 && description.length < 120) score += 10;

    return Math.min(score, 100);
  }

  private analyzeHeadings(): number {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let score = 0;

    if (headings.length > 0) score += 20;
    if (headings.length >= 3 && headings.length <= 6) score += 30;
    if (headings.length > 6) score += 10;

    // Check for proper heading hierarchy
    let previousLevel = 0;
    let hierarchyScore = 0;
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level <= previousLevel + 1) {
        hierarchyScore += 10;
      }
      previousLevel = level;
    });

    score += Math.min(hierarchyScore, 50);
    return Math.min(score, 100);
  }

  private analyzeKeywords(): number {
    const content = document.body.textContent || '';
    const words = content.toLowerCase().split(/\s+/);
    const wordCount = words.length;

    if (wordCount === 0) return 0;

    // Simple keyword density analysis
    const keywordDensity = this.calculateKeywordDensity(words);
    let score = 0;

    if (keywordDensity > 0.01 && keywordDensity < 0.03) score += 40;
    if (keywordDensity >= 0.03 && keywordDensity <= 0.05) score += 30;
    if (keywordDensity > 0.05) score += 10;

    return Math.min(score, 100);
  }

  private analyzeImages(): number {
    const images = document.querySelectorAll('img');
    let score = 0;

    if (images.length === 0) return 100;

    let altTextCount = 0;
    images.forEach(img => {
      if (img.getAttribute('alt') && img.getAttribute('alt')!.trim() !== '') {
        altTextCount++;
      }
    });

    score = (altTextCount / images.length) * 100;
    return Math.round(score);
  }

  private analyzeLinks(): number {
    const links = document.querySelectorAll('a');
    let score = 0;

    if (links.length === 0) return 0;

    let validLinks = 0;
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href !== '#' && href !== 'javascript:void(0)') {
        validLinks++;
      }
    });

    score = (validLinks / links.length) * 100;
    return Math.round(score);
  }

  private calculateKeywordDensity(words: string[]): number {
    const wordCount = words.length;
    const wordFreq: { [key: string]: number } = {};

    words.forEach(word => {
      if (word.length > 3) {
        wordFreq[word] = (wordFreq[word] || 0) + 1;
      }
    });

    const maxFreq = Math.max(...Object.values(wordFreq));
    return maxFreq / wordCount;
  }

  private calculateOverallScore(): number {
    const scores = [
      this.metrics.titleScore,
      this.metrics.descriptionScore,
      this.metrics.headingScore,
      this.metrics.keywordScore,
      this.metrics.imageAltScore,
      this.metrics.linkScore,
    ];

    return Math.round(
      scores.reduce((sum, score) => sum + score, 0) / scores.length
    );
  }

  private generateRecommendations(): void {
    this.recommendations = [];

    if (this.metrics.titleScore < 70) {
      this.recommendations.push({
        type: 'title',
        priority: 'high',
        message: 'Title needs improvement',
        suggestion: 'Ensure title is 30-60 characters and descriptive',
      });
    }

    if (this.metrics.descriptionScore < 70) {
      this.recommendations.push({
        type: 'description',
        priority: 'high',
        message: 'Meta description needs improvement',
        suggestion: 'Ensure description is 120-160 characters and compelling',
      });
    }

    if (this.metrics.headingScore < 70) {
      this.recommendations.push({
        type: 'heading',
        priority: 'medium',
        message: 'Heading structure needs improvement',
        suggestion: 'Use proper heading hierarchy (h1, h2, h3, etc.)',
      });
    }

    if (this.metrics.imageAltScore < 70) {
      this.recommendations.push({
        type: 'image',
        priority: 'medium',
        message: 'Images need alt text',
        suggestion: 'Add descriptive alt text to all images',
      });
    }

    if (this.metrics.linkScore < 70) {
      this.recommendations.push({
        type: 'link',
        priority: 'low',
        message: 'Links need improvement',
        suggestion: 'Ensure all links have valid href attributes',
      });
    }
  }

  public getRecommendations(): SEORecommendation[] {
    return this.recommendations;
  }

  public getHighPriorityRecommendations(): SEORecommendation[] {
    return this.recommendations.filter(rec => rec.priority === 'high');
  }

  public getMetrics(): SEOMetrics {
    return this.metrics;
  }

  public generateReport(): string {
    const report = `
SEO Analysis Report
==================

Overall Score: ${this.metrics.overallScore}/100

Detailed Scores:
- Title: ${this.metrics.titleScore}/100
- Description: ${this.metrics.descriptionScore}/100
- Headings: ${this.metrics.headingScore}/100
- Keywords: ${this.metrics.keywordScore}/100
- Images: ${this.metrics.imageAltScore}/100
- Links: ${this.metrics.linkScore}/100

Recommendations:
${this.recommendations
  .map(
    rec => `- ${rec.priority.toUpperCase()}: ${rec.message} - ${rec.suggestion}`
  )
  .join('\n')}
    `;

    return report.trim();
  }
}

export default AdvancedSEOOptimizer;
