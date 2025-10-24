// Bundle analysis utilities
export interface BundleAnalysis {
  totalSize: number;
  gzipSize: number;
  chunks: ChunkInfo[];
  recommendations: string[];
}

export interface ChunkInfo {
  name: string;
  size: number;
  gzipSize: number;
  modules: ModuleInfo[];
}

export interface ModuleInfo {
  name: string;
  size: number;
  gzipSize: number;
  type: 'js' | 'css' | 'image' | 'font' | 'other';
}

export class BundleAnalyzer {
  private static instance: BundleAnalyzer;
  private analysis: BundleAnalysis | null = null;

  static getInstance(): BundleAnalyzer {
    if (!BundleAnalyzer.instance) {
      BundleAnalyzer.instance = new BundleAnalyzer();
    }
    return BundleAnalyzer.instance;
  }

  // Analyze current bundle
  analyzeBundle(): BundleAnalysis {
    if (this.analysis) {
      return this.analysis;
    }

    const chunks = this.analyzeChunks();
    const totalSize = chunks.reduce((sum, chunk) => sum + chunk.size, 0);
    const gzipSize = chunks.reduce((sum, chunk) => sum + chunk.gzipSize, 0);
    const recommendations = this.generateRecommendations(chunks);

    this.analysis = {
      totalSize,
      gzipSize,
      chunks,
      recommendations
    };

    return this.analysis;
  }

  private analyzeChunks(): ChunkInfo[] {
    // This would typically analyze webpack stats or vite build output
    // For now, we'll return mock data based on common patterns
    return [
      {
        name: 'vendor',
        size: 500000, // 500KB
        gzipSize: 150000, // 150KB
        modules: [
          { name: 'react', size: 100000, gzipSize: 30000, type: 'js' },
          { name: 'react-dom', size: 120000, gzipSize: 35000, type: 'js' },
          { name: 'lodash', size: 80000, gzipSize: 25000, type: 'js' }
        ]
      },
      {
        name: 'app',
        size: 200000, // 200KB
        gzipSize: 60000, // 60KB
        modules: [
          { name: 'App.tsx', size: 50000, gzipSize: 15000, type: 'js' },
          { name: 'components', size: 80000, gzipSize: 25000, type: 'js' },
          { name: 'styles.css', size: 30000, gzipSize: 10000, type: 'css' }
        ]
      }
    ];
  }

  private generateRecommendations(chunks: ChunkInfo[]): string[] {
    const recommendations: string[] = [];

    // Check for large chunks
    const largeChunks = chunks.filter(chunk => chunk.size > 300000);
    if (largeChunks.length > 0) {
      recommendations.push(`Consider code splitting for large chunks: ${largeChunks.map(c => c.name).join(', ')}`);
    }

    // Check for unused modules
    const lodashChunk = chunks.find(chunk => 
      chunk.modules.some(module => module.name === 'lodash')
    );
    if (lodashChunk) {
      recommendations.push('Consider using lodash-es or individual lodash functions to reduce bundle size');
    }

    // Check for duplicate dependencies
    const reactModules = chunks.flatMap(chunk => 
      chunk.modules.filter(module => module.name.includes('react'))
    );
    if (reactModules.length > 2) {
      recommendations.push('Check for duplicate React dependencies');
    }

    // Check for large images
    const imageModules = chunks.flatMap(chunk => 
      chunk.modules.filter(module => module.type === 'image')
    );
    const largeImages = imageModules.filter(module => module.size > 100000);
    if (largeImages.length > 0) {
      recommendations.push('Optimize large images or use WebP format');
    }

    return recommendations;
  }

  // Get optimization suggestions
  getOptimizationSuggestions(): string[] {
    const analysis = this.analyzeBundle();
    const suggestions: string[] = [];

    if (analysis.totalSize > 1000000) { // 1MB
      suggestions.push('Bundle size is large. Consider implementing code splitting.');
    }

    if (analysis.gzipSize / analysis.totalSize > 0.7) {
      suggestions.push('Gzip compression ratio is low. Check for already compressed assets.');
    }

    const jsChunks = analysis.chunks.filter(chunk => 
      chunk.modules.some(module => module.type === 'js')
    );
    if (jsChunks.length > 10) {
      suggestions.push('Too many JS chunks. Consider consolidating smaller chunks.');
    }

    return suggestions;
  }

  // Generate bundle report
  generateReport(): string {
    const analysis = this.analyzeBundle();
    const suggestions = this.getOptimizationSuggestions();

    let report = 'Bundle Analysis Report\n';
    report += '====================\n\n';
    report += `Total Size: ${(analysis.totalSize / 1024).toFixed(2)} KB\n`;
    report += `Gzip Size: ${(analysis.gzipSize / 1024).toFixed(2)} KB\n`;
    report += `Compression Ratio: ${((1 - analysis.gzipSize / analysis.totalSize) * 100).toFixed(1)}%\n\n`;

    report += 'Chunks:\n';
    analysis.chunks.forEach(chunk => {
      report += `- ${chunk.name}: ${(chunk.size / 1024).toFixed(2)} KB (${(chunk.gzipSize / 1024).toFixed(2)} KB gzipped)\n`;
    });

    report += '\nRecommendations:\n';
    analysis.recommendations.forEach(rec => {
      report += `- ${rec}\n`;
    });

    report += '\nOptimization Suggestions:\n';
    suggestions.forEach(suggestion => {
      report += `- ${suggestion}\n`;
    });

    return report;
  }
}

// Export singleton instance
export const bundleAnalyzer = BundleAnalyzer.getInstance();