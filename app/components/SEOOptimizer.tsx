
  canonicalUrl?: string;
  structuredData?: object;}const SEOOptimizer: React.FC<SEOOptimizerProps> = ({,
  title,;
  description,;
  keywords = [],
  canonicalUrl,;
  structuredData;}) => {;
  const keywordsString = keywords.join(', ');
;
  return(<Helmet />);
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywordsString}/>
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl}/>
      {/* Open Graph */} <meta property="og: title" content={title,}/>
      <meta property="og: description" content={description,}/>
      <meta property="og: type" content="website" />
      <meta property="og: url" content={canonicalUrl,}/>
    </Helmet>
  );
}
;
export default SEOOptimizer;
;