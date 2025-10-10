'use client';
import React, { useEffect, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

}

}

const,
    }

      },
      addres,
      },
      ...seoData.structuredData};

      };
    }

    }

    }

    }

    }

    return baseStructuredData;
  }, [seoData, enableStructuredData]);

  // Generate Open Graph data;
    if (!enableOpenGraph) return {};

    };
  }, [seoData, enableOpenGraph]);

  // Generate Twitter Card data;
    if (!enableTwitterCards) return {};

          }},
          }},
          }}]};
  }, [seoData, enableTwitterCards]);

  // Generate meta tags;
  t: seoData.description },
  t: seoData.keywords.join(', ') },
  t: seoData.author || 'Zion Tech Group' },
  t: seoData.robots || 'index, follow' },
  t: 'width=device-width, initial-scale=1.0' },
  t: '#3B82F6' },
  t: '#3B82F6' },
  t: '/browserconfig.xml' }];
    return metaTags;
  }, [seoData]);

  const structuredData = generateStructuredData();
  const openGraphData = generateOpenGraphData();
  const twitterCardData = generateTwitterCardData();
  const metaTags = generateMetaTags();

      }
      metaDescription.setAttribute('content', seoData.description);

      // Update canonical URL;
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      }
      canonicalLink.setAttribute('href', seoData.canonicalUrl);
    }
  }, [seoData]);

  const addStructuredData = (dat)
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    structuredDataRef.current = script;
  };

    }
  }, [structuredData]);


          });
        }
      }
    }
  }, []);

  return (<Helmet></Helmet>
      {/* Basic Meta Tags */}
      <title>{seoData.title}</title>
        <meta key={index} name={tag.name} content={tag.content} /></meta>)
      ))}

      {/* Canonical URL */}
        <link rel="canonical" href={seoData.canonicalUrl} /></link>
      )}

      {/* Open Graph Tags */}
        <meta key={property} property={property} content={content} /></meta>
      ))}

      {/* Twitter Card Tags */}
        <meta key={name} name={name} content={content} /></meta>
      ))}

      {/* Additional SEO Tags */}"
      <meta name="format-detection" content="telephone=no" /></meta>"
      <meta name="mobile-web-app-capable" content="yes" /></meta>"
      <meta name="apple-mobile-web-app-capable" content="yes" /></meta>"
      <meta name="apple-mobile-web-app-status-bar-style" content="default" /></meta>"
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" /></meta>
      {/* Favicon and Icons */}"
      <link rel="icon" type="image/x-icon" href="/favicon.ico" /></link>"
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /></link>"
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /></link>"
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /></link>"
      <link rel="manifest" href="/site.webmanifest" /></link>
      {/* Preconnect to external domains */}"
      <link rel="preconnect" href="http,"
  s://fonts.googleapis.com" /></link>"
      <link rel="preconnect" href="http,"
  s://fonts.gstatic.com" crossOrigin="anonymous" /></link>"
      <link rel="preconnect" href="http,"
  s://www.google-analytics.com" /></link>"
      <link rel="preconnect" href="http,"
  s://www.googletagmanager.com" /></link>
      {/* DNS Prefetch */}"
      <link rel="dns-prefetch" href="//fonts.googleapis.com" /></link>"
      <link rel="dns-prefetch" href="//www.google-analytics.com" /></link>"
      <link rel="dns-prefetch" href="//www.googletagmanager.com" /></link>
    </Helmet>
  );
};

export default AdvancedSEOOptimizer;
"