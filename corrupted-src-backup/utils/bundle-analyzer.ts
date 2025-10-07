// Bundle analyzer configuration for better code splitting
export const bundleAnalyzerConfig = {
  analyzerMode: 'static',
  openAnalyzer: false,
  generateStatsFile: true,
  statsFilename: 'bundle-stats.json',
  reportFilename: 'bundle-report.html',
  defaultSizes: 'gzip',
  excludeAssets: ['node_modules'],
  chunkFilter: chunk => {
    // Exclude vendor chunks from analysis
    return !chunk.name.includes('vendor');
  },
};
