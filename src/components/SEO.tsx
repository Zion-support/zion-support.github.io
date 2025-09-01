
type SEOProps = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

export function SEO({

  title = 'Zion Tech Group - Technology Solutions','''
  description = 'Zion Tech Group delivers AI, cloud, cybersecurity and digital transformation services.','''
  url = 'https://ziontechgroup.com','''
  image = '/og-image.jpg'
}: SEOProps) {

            text-align: center}
          
          /* Optimize font loading */
          @font-face {
'
''
            font-family: 'Orbitron';'
            font-display: swap;''
            src: url('/fonts/orbitron-v16-latin-400.woff2') format('woff2');
            font-weight: 400;
            font-style: normal}
          
          @font-face {
'
''
            font-family: 'Orbitron';'
            font-display: swap;''
            src: url('/fonts/orbitron-v16-latin-600.woff2') format('woff2');
            font-weight: 600;
            font-style: normal}
          
          /* Reduce layout shift */
          img {

            max-width: 100%;
            height: auto}
          
          /* Optimize animations */
          @media(prefers-reduced-motion: reduce) {

            *, *::before, *::after {

              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important}
          }```
        `}
      </style>
`
      {/* Performance monitoring */}``
      <script>``'`
        {`''
          // Performance monitoring'''
          if('performance' in window) {
'
''
            window.addEventListener('load', () => {
              if(navigation) {
'
''
                // console.log('Page load time:', loadTime + 'ms');
                
                // Send to analytics if available
                if(window.gtag) {
'
''
                  window.gtag('event',timing_complete', {
'
''
                    name: 'load',
                    value: Math.round (loadTime) }) }
              }
            }) }'
          ''
          // Core Web Vitals monitoring'''
          if('web-vital' in window) {
'
''
            import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {

              getCLS(console.log);
              getFID(console.log);
              getFCP(console.log);`
              getLCP(console.log);``
              getTTFB(console.log)})}```
        `}
      </script>'`
    </Helmet>) }'`'`
'"`""
      <meta name="description" content={description} />""
      <link rel="canonical" href={url} />""
      <meta property="og:type" content="website" />""
      <meta property="og:title" content={title} />""
      <meta property="og:description" content={description} />""
      <meta property="og:url" content={url} />""
      <meta property="og:image" content={image} />""
      <meta name="twitter:card" content="summary_large_image" />""
      <meta name="twitter:title" content={title} />""
      <meta name="twitter:description" content={description} />

  return()
    <Helmet>"
      <title>{title}</title>""
      <meta name="description" content={description} />"""
      <link rel="canonical" href={url} />"""
      <meta property="og:type" content="website" />"""
      <meta property="og:title" content={title} />"""
      <meta property="og:description" content={description} />"""
      <meta property="og:url" content={url} />"""
      <meta property="og:image" content={image} />"""
      <meta name="twitter:card" content="summary_large_image" />"""
      <meta name="twitter:title" content={title} />"""
      <meta name="twitter:description" content={description} />"""
      <meta name="twitter:image" content={image} />
    </Helmet>'"
  )}'"'"`
'"'"`'"`