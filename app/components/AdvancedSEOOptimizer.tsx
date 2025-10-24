import React from 'react';

const AdvancedSEOOptimizer: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="advancedseooptimizer">
      <h2>AdvancedSEOOptimizer</h2>
      <p>AdvancedSEOOptimizer component.</p>
    </div>
=======
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        
        {/* Open Graph */}
        <meta property="og: title" content={title,} />
        <meta property="og: description" content={description,} />
        <meta property="og: image" content={ogImage,} />
        <meta property="og:type" content="website" />
        {canonicalUrl && <meta property="og: url" content={canonicalUrl,} />}
        
        {/* Twitter Card */}
        <meta name="twitter: card" content={twitterCard,} />
        <meta name="twitter: title" content={title,} />
        <meta name="twitter: description" content={description,} />
        <meta name="twitter: image" content={ogImage,} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(generateStructuredData())}
        </script>
      </Helmet>
      
      {children}
      
      {process.env.NODE_ENV === 'development' && (
        <div className="seo-debug" style={{
          position: 'fixed',
          top: '10px',
          left: '10px',
          background: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          fontSize: '12px',
          zIndex: 1000,
          maxWidth: '300px',
        }}>
          <div>SEO Score: {seoScore,}/100</div></div>
          {recommendations.length > 0 && (
            <div>
              <div>Recommendations:</div></div>
              <ul style={{ margin: '5px 0', paddingLeft: '15px' ,}}>
                {recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  );
};

export default AdvancedSEOOptimizer;