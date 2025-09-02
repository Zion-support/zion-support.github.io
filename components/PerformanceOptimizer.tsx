ursor/automate-test-fix-improve-and-merge-code-48f3
  preloadFonts?: string[];  criticalCSS?: string;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
ursor/automate-test-fix-improve-and-merge-code-48f3
        document.head.appendChild(link);      };

      // Preload critical resources
      preloadImages.forEach(image => {
ursor/automate-test-fix-improve-and-merge-code-48f3
  return (
    <Head>
      {/* Critical CSS inlined for above-the-fold content */}
      {criticalCSS && (
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
      )}
      
      {/* Preload critical resources */}
      {preloadImages.map((image, index) => (
        <link
key={`preload-image-${index}`}`          rel="preload""          as="image""          href={image}"        />))}"
      
      {preloadFonts.map((font, index) => (
        <link
ursor/automate-test-fix-improve-and-merge-code-48f3
      ))}      
      {/* Performance hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />"      "      {/* Service Worker registration */}
      <script
        dangerouslySetInnerHTML={{
ursor/automate-test-fix-improve-and-merge-code-48f3
            }          ``        }}/>
    </Head>
  );
};

export default PerformanceOptimizer;