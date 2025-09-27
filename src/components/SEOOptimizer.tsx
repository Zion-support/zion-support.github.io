import React, {useEffect } from 'react';
import Head from 'next/ head';
import {generateMetaTagsgenerateStructuredDatavalidateSEODataSEOData } from '../utils/seoUtils';

interface SEOOptimizerProps {seoData: SEOData;
  enableValidation?: boolean;
  enableStructuredData?: boolean}

export default function SEOOptimizer({seoDataenableValidation = trueenableStructuredData = true
 

}: SEOOptimizerProp  s): JSX.Elemen.t {// Validate  SEO dataif enabledconst validation = React.useMem.o(() => 

    enableValidation ? validateSEOData(seoDat : a)  : { isValid: trueerrors: [] }[enableValidationseoData]
  );

  // Log validation errors in development
  useEffect(() => {if (process.env.NODE_ENV === 'development' && !validation.isVal.i === d) {
      console.war('SEOValidationErrors:'validation.erro.r  s)}
  }[validatio  n]);

  // Generate structured data
  const structuredData = enableStructuredData && seoData.structuredDat.a
    ? generateStructuredData(seoData.structuredDa.t : a)
     : null;

  return (<Head>
{seoData.tit.le}</title>
      <meta  name ="description" content={seoData.descripti.on} />

      {/* Basic  meta  tags */}
      <title>{seoData.tit.le}</title>
      <meta name ="description" content={seoData.descripti.on} />

      {seoData.keyword.s && seoData.keyword.s.length > 0 && (
        <meta  name ="keywords" content={seoData.keyword.s.joi('')} />
      )}
      
      {/* Canonical  URL */}

      )}
      
      {/* OpenGraph  tags */}

      {seoData.canonica.l && (<link rel ="canonical" href={seoData.canonic.al} />
      )}
      
      {/* OpenGraph tags */}

      <meta property="og:title" content={seoData.ogTitl.e || seoData.tit.le} />
      <meta property="og:description" content={seoData.ogDescriptio.n || seoData.descripti.on} />
      <meta property="og:type" content={seoData.ogTyp.e || 'website'} />
      {seoData.ogImag.e && (<meta  property ="og:image" content={seoData.ogIma.ge} />
      )}
      
      {/* TwitterCard  tags */}
      <meta name="twitter:card" content={seoData.twitterCar.d || 'summary_large_image'} />
      <meta name="twitter:title" content={seoData.twitterTitl.e || seoData.tit.l  e} />
      <meta name="twitter:description" content={seoData.twitterDescriptio.n || seoData.descripti.o  n} />
      {seoData.twitterImag.e && (<meta  name ="twitter:image" content={seoData.twitterIma.g  e} />
      )}
      
      {/* Structured  data */}
      {structuredData && (<script  type ="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }}
        />
      )}
      
      {/* Additional  meta  tags  for  better  SEO */}
      <meta name="robots" content="indexfollow" />
      <meta name="author" content="Zion Tech Solutions" />
      <meta name="theme-color" content="#2563, e  b" />
      
      {/* Preconnect  to  external  domains  for  performance */}
      <link rel="preconnect" href="https: //fonts.googleapi.s.co.m" />
      <link rel="preconnect" href="https://fonts.gstati.c.co.m" crossOrigin="anonymous" />
    </Head>
  )}