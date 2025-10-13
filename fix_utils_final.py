#!/usr/bin/env python3
"""
Script to fix the final utility files
"""
import os

def fix_accessibility_enhancer(file_path):
    """Fix the accessibility enhancer file"""
    try:
        fixed_content = '''interface AccessibilityConfig {
  enabled: boolean;
  highContrast: boolean;
  fontSize: number;
  screenReader: boolean;
}

class AccessibilityEnhancer {
  private config: AccessibilityConfig;

  constructor() {
    this.config = {
      enabled: true,
      highContrast: false,
      fontSize: 16,
      screenReader: false
    };
  }

  init(): void {
    if (this.config.enabled) {
      console.log('Accessibility enhancer initialized');
    }
  }

  setHighContrast(enabled: boolean): void {
    this.config.highContrast = enabled;
  }

  setFontSize(size: number): void {
    this.config.fontSize = size;
  }

  setScreenReader(enabled: boolean): void {
    this.config.screenReader = enabled;
  }
}

export const accessibilityEnhancer = new AccessibilityEnhancer();
export default accessibilityEnhancer;'''
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def fix_seo_utils(file_path):
    """Fix the SEO utils file"""
    try:
        fixed_content = '''export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export class SEOUtils {
  private config: SEOConfig;

  constructor(config: SEOConfig) {
    this.config = config;
  }

  generateMetaTags() {
    return {
      title: this.config.title,
      description: this.config.description,
      keywords: this.config.keywords.join(', '),
      canonical: this.config.canonicalUrl,
      'og:title': this.config.title,
      'og:description': this.config.description,
      'og:image': this.config.ogImage,
      'og:type': this.config.ogType || 'website',
      'twitter:card': this.config.twitterCard || 'summary_large_image',
      'twitter:title': this.config.title,
      'twitter:description': this.config.description,
      'twitter:image': this.config.ogImage,
    };
  }

  generateStructuredData(type: string, data: any) {
    return {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };
  }
}'''
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def main():
    """Main function to fix utility files"""
    fixes = [
        ('app/utils/accessibilityEnhancer.ts', fix_accessibility_enhancer),
        ('utils/seoUtils.ts', fix_seo_utils),
    ]
    
    for file_path, fix_func in fixes:
        if os.path.exists(file_path):
            fix_func(file_path)

if __name__ == "__main__":
    main()