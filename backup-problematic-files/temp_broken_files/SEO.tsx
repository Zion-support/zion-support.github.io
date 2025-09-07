<Helmet>;
      <title>{fullTitle}</title>;
      <meta name="description" content={description} />;
      {keywords && <meta name="keywords" content={keywords} />}
      ;
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />;
      <meta property="og:title" content={fullTitle} />;
      <meta property="og:description" content={description} />;
      <meta property="og:image" content={ogImage} />;
      {ogUrl && <meta property="og:url" content={ogUrl} />}

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      ;
      {/* No index directive for search engines if needed */}
      {noindex && <meta name="robots" content="noindex" />}

}