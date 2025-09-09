/**
 * Custom Vite plugin to optimize preload links and reduce browser warnings
 */
export function optimizePreloads() {
  return {
    name: 'optimize-preloads',
    generateBundle(options, bundle) {
      // Find the HTML file
      const htmlFile = Object.keys(bundle).find(fileName => fileName.endsWith('.html'));
      
      if (htmlFile && bundle[htmlFile].type === 'asset') {
        let html = bundle[htmlFile].source;
        
        // Add proper as attributes to preload links
        html = html.replace(
          /<link rel="modulepreload"([^>]*)>/g,
          '<link rel="modulepreload"$1 as="script">'
        );
        
        // Add proper as attributes to CSS preload links
        html = html.replace(
          /<link rel="preload"([^>]*\.css[^>]*)>/g,
          '<link rel="preload"$1 as="style" onload="this.onload=null;this.rel=\'stylesheet\'"><noscript><link rel="stylesheet"$1></noscript>'
        );
        
        // Add proper as attributes to JS preload links
        html = html.replace(
          /<link rel="preload"([^>]*\.js[^>]*)>/g,
          '<link rel="preload"$1 as="script">'
        );
        
        // Remove unnecessary modulepreload links for non-critical chunks
        // Keep only the main entry and react-core
        html = html.replace(
          /<link rel="modulepreload"[^>]*(?<!react-core-)[^>]*>/g,
          ''
        );
        
        bundle[htmlFile].source = html;
      }
    }
  };
}