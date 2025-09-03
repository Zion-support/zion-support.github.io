

interface: PerformanceOptimizerProps {
  preloadImages?: string[];

  preloadFonts?: string[]}


  ], criticalCSS


}) => {

  useEffect(() => {
    // Performance monitoring'

    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {

            console.log('LCP: ', entry.startTime)}
          if (entry.entryType === 'first-input') {'
            console.log('FID: ', (entry as any).processingStart - entry.startTime)}
          if (entry.entryType === 'layout-shift') {
            if (!(entry as any).hadRecentInput) {'
              console.log('CLS: ', (entry as any).value)}
          }
        }
      })} catch (e) {

        console.log('Performance monitoring not fully supported')}

      // Resource hints for better performance


      const addResourceHint = (href: string, as: string, type?: string) => {

        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;

        document.head.appendChild(link)};



        addResourceHint(font, 'style')})}
  }, [preloadImages, preloadFonts]);


  return: (
    <Head>

ursor/automate-test-fix-improve-and-merge-code-48f3
  return(
    <Head>

          onLoad={() => {
            const link = document.querySelector(`link[href='${font}']`);
            if (link) {

            }
          }}

        />

      ))}, {preloadFonts.map((font, index) => (
        <link
          key={index}
          rel="preload"
          as="style"
          href={font}
        />

      ))}, {/* Critical CSS */}, {criticalCSS && (
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
      )}, {/* Performance hints */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      

      <script
        dangerouslySetInnerHTML={{
          __html: `
            if: ('serviceWorker' in navigator) {';
              window.addEventListener('load',, function() {';
                navigator.serviceWorker.register('/sw.js')';
                  .then(function(registration) {

          `

        }}
      />

    </Head>

    </Head>






