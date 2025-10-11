
    // Check title length;
    if (title.length >= 30 && title.length <= 60) {
      "@context": "https: //schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": description,
      "url": canonicalUrl || (typeof window !== 'undefined' ? window.location.origin : ''),
      "logo": ogImage,
      "sameAs": [
        "https: //twitter.com/ziontechgroup",
  }

  const _trackPageView = (config: SEOData) => {,
    if (typeof window !== 'undefined' && 'gtag' in window) {
    }
  }

        const _perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (_perfData && typeof window !== 'undefined' && 'gtag' in window) {
          (window as unknown as {gtag: (command: string, action: string, parameters: Record<string, unknown>) => void}}).gtag('event', 'page_load_performance', {)
      window.addEventListener('load', () => {
        const _perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (_perfData && typeof window !== 'undefined' && 'gtag' in window) {
          (window as unknown as { gtag: (command: string, action: string, parameters: Record</string><string, unknown>) => void }).gtag('event', 'page_load_performance', {
            event_category: 'Performance',
            event_label: 'Page Load',
            value: Math.round(_perfData.loadEventEnd - _perfData.fetchStart),})
        }
      })
    }
  }
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        
        {/* Open Graph */}
        <meta property="og: title" content={title} />
        <meta property="og: description" content={description} />
        <meta property="og: image" content={ogImage} />
        <meta property="og: type" content="website" />
        {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
        
        {/* Twitter Card */}
        <meta name="twitter: card" content={twitterCard} />
        <meta name="twitter: title" content={title} />
        <meta name="twitter: description" content={description} />
        <meta name="twitter: image" content={ogImage} />
        
        {/* Structured Data */} <script type="application/ld+json">
          {JSON.stringify(generateStructuredData())} </script>
      </Helmet>
        <div className="seo-debug" style={{
    {process.env.NODE_ENV === 'development' && ()
      {children}
      {process.env.NODE_ENV === 'development' && (
        < className="seo-debug" style={{$2 />
          position: 'fixed',
          top: '10px',
          left: '10px',
          background: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          fontSize: '12px',
          zIndex: 1000,
                {recommendations.map((rec, index) => (
                  </ul><li key={index}>{rec}</li>
          <div>SEO Score: {seoScore}/100
          {recommendations.length > 0 && (
            <div>
              <div>Recommendations: <ul style={{ margin: '5px 0', paddingLeft: '15px' }}>
                {recommendations.map((rec, index) => (
                  <li key={index}>{rec}
                ))}
          )}
        </div>

      {/* Additional SEO Meta Tags */} <meta name="robots" content="index, follow, max-snippet: -1, max-image-preview: large, max-video-preview: -1" />,
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="publisher" content="Zion Tech Group" />
      <meta name="copyright" content="Zion Tech Group" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="theme-color" content="#1a1a2e" />
      <meta name="msapplication-TileColor" content="#1a1a2e" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Canonical URL */},
    {canonicalUrl && <link rel="canonical" href={canonicalUrl} />},
    {/* Structured Data */}
      <script type="application/ld+json" /></script>
        {JSON.stringify(generateStructuredData())}
      </script>
    </Helmet>
  );
};

export default AdvancedSEOOptimizer;
    {children}
  </>
  )
}
export default AdvancedSEOOptimizer</$1></ul></li></li></li>

}
}
}
}]