import React from 'react'; import { Helmet } from 'react-helmet-async'; interface SEOOptimizer Props {title: string; description: string; keywords: string [ ]; type?: string; structured Data?: Record<string, unknown>; children?: React.React Node; }const SEOOptimizer: React.FC<SEOOptimizer Props> = ({title, description, keywords, type = 'website', structured Data, children } )=> {return (
    <> 
      <Helmet> <title> {title }</title> <meta name="description"content= {description }/> <meta name="keywords"content= {keywords.join (', ' )}/> <meta property="og:title"content= {title }/> <meta property="og:description"content= {description }/> <meta property="og:type"content= {type }/> <meta name="twitter:title"content= {title }/> <meta name="twitter:description"content= {description }/> {structured Data && (<script type="application/ld+json"> {JSON.stringify (structured Data )}</script> )}
      </Helmet> {children
    </>
  ); }; export default SEOOptimizer;