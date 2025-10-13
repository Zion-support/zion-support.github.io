// SEO Utils utility
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
}

export class SEOUtils {
  private static instance: SEOUtils;

  static getInstance(): SEOUtils {
    if (!SEOUtils.instance) {
      SEOUtils.instance = new SEOUtils();
    }
    return SEOUtils.instance;
  }

  generateTitle(baseTitle: string, siteName: string = 'Zion Tech Group'): string {
    return `${baseTitle} | ${siteName}`;
  }

  generateDescription(text: string, maxLength: number = 160): string {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength - 3) + '...';
  }

  generateKeywords(text: string): string[] {
    // Simple keyword extraction (in a real app, you'd use more sophisticated methods)
    const words = text.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 3);
    
    // Remove common stop words
    const stopWords = ['the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'can', 'had', 'her', 'was', 'one', 'our', 'out', 'day', 'get', 'has', 'him', 'his', 'how', 'its', 'may', 'new', 'now', 'old', 'see', 'two', 'way', 'who', 'boy', 'did', 'man', 'oil', 'sit', 'try', 'use'];
    
    return words.filter(word => !stopWords.includes(word));
  }

  generateCanonicalUrl(path: string, baseUrl: string = 'https://ziontechgroup.com'): string {
    return `${baseUrl}${path}`;
  }

  validateSEOData(data: SEOData): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!data.title || data.title.length < 30) {
      errors.push('Title should be at least 30 characters long');
    }

    if (!data.description || data.description.length < 120) {
      errors.push('Description should be at least 120 characters long');
    }

    if (!data.keywords || data.keywords.length === 0) {
      errors.push('Keywords are required');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

export default SEOUtils;