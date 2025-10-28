interface BundleAnalysis {
  totalSize: number;
  gzipSize: number;
  files: Array<{
    name: string;
    size: number;
    gzipSize: number;
  }>;
}

class BundleAnalyzer {
  private analysis: BundleAnalysis = {
    totalSize: 0,
    gzipSize: 0,
    files: []
  };

  analyzeBundle(): BundleAnalysis {
    if (typeof window === 'undefined') {
      return this.analysis;
    }

    // Analyze script tags
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;
    let gzipSize = 0;
    const files: Array<{ name: string; size: number; gzipSize: number }> = [];

    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src) {
        // Estimate sizes (in real implementation, you'd fetch and measure)
        const estimatedSize = this.estimateFileSize(src);
        const estimatedGzipSize = estimatedSize * 0.3; // Assume 70% compression
        
        files.push({
          name: src,
          size: estimatedSize,
          gzipSize: estimatedGzipSize
        });
        
        totalSize += estimatedSize;
        gzipSize += estimatedGzipSize;
      }
    });

    this.analysis = {
      totalSize,
      gzipSize,
      files
    };

    return this.analysis;
  }

  private estimateFileSize(src: string): number {
    // Simple estimation based on common patterns
    if (src.includes('vendor') || src.includes('chunk')) {
      return 50000; // 50KB
    }
    if (src.includes('main') || src.includes('app')) {
      return 25000; // 25KB
    }
    return 10000; // 10KB default
  }

  getOptimizationSuggestions(): string[] {
    const suggestions: string[] = [];
    const analysis = this.analysis;

    if (analysis.totalSize > 500000) { // 500KB
      suggestions.push('Consider code splitting to reduce bundle size');
    }

    if (analysis.gzipSize / analysis.totalSize > 0.4) {
      suggestions.push('Enable gzip compression for better performance');
    }

    if (analysis.files.length > 10) {
      suggestions.push('Consider bundling multiple small files together');
    }

    const largeFiles = analysis.files.filter(file => file.size > 100000);
    if (largeFiles.length > 0) {
      suggestions.push(`Large files detected: ${largeFiles.map(f => f.name).join(', ')}`);
    }

    return suggestions;
  }

  generateReport(): string {
    const analysis = this.analyzeBundle();
    const suggestions = this.getOptimizationSuggestions();

    let report = 'Bundle Analysis Report\n';
    report += '====================\n\n';
    report += `Total Size: ${(analysis.totalSize / 1024).toFixed(2)} KB\n`;
    report += `Gzip Size: ${(analysis.gzipSize / 1024).toFixed(2)} KB\n`;
    report += `Compression Ratio: ${((1 - analysis.gzipSize / analysis.totalSize) * 100).toFixed(1)}%\n\n`;

    report += 'Files:\n';
    analysis.files.forEach(file => {
      report += `  ${file.name}: ${(file.size / 1024).toFixed(2)} KB (${(file.gzipSize / 1024).toFixed(2)} KB gzipped)\n`;
    });

    if (suggestions.length > 0) {
      report += '\nSuggestions:\n';
      suggestions.forEach(suggestion => {
        report += `  - ${suggestion}\n`;
      });
    }

    return report;
  }

  exportAnalysis(): BundleAnalysis {
    return this.analyzeBundle();
  }
}

export default BundleAnalyzer;
export { BundleAnalysis };