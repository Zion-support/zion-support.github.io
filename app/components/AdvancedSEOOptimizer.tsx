<<<<<<< HEAD

  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: any;
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
=======
keywords: string[];
canonicalUrl: string;
ogTitle?: string;
ogDescription?: string;
ogImage?: string;
ogUrl?: string;
twitterCard?: string;
twitterTitle?: string;
twitterDescription?: string;
twitterImage?: string;
structuredData?: any;
robots?: string;
author?: string;
publishedTime?: string;
modifiedTime?: string;
section?: string;
tags?: string[];
>>>>>>> cursor/fix-errors-and-merge-to-main-e36d
interface AdvancedSEOOptimizerProps {};
seoData: SEOData;
enableStructuredData?: boolean;
enableSocialMeta?: boolean;
enableAdvancedFeatures?: boolean;
const AdvancedSEOOptimizer: React.FC<AdvancedSEOOptimizerProps>  =  ({)};
<<<<<<< HEAD

  seoData,
  enableStructuredData = true,
  enableSocialMeta = true,
  enableAdvancedFeatures = true

      script.text = JSON.stringify(seoData.structuredData);
      document.head.appendChild(script);
    };

    // Set up meta tags for social media

          document.head.appendChild(tagMeta);
        });
  }, [
    seoData, enableStructuredData, enableSocialMeta, enableAdvancedFeatures
  
  ]);";"
  return ()";";"
    <Helmet>";";";"
      <title>{seoData.title}</title>""
      <meta name="description" content={seoData.description} />""
      <meta name="keywords" content={seoData.keywords.join(', ")} />";"'
    </Helmet>";";"
  );";";";"
import React from 'react';";";";";"
import SEOHead from './components/SEOHead";"'


  return ()
    <Helmet>
      <title>{seoData.title}</title>
      <meta: name ="description" content={seoData.description} />"
      <meta: name ="keywords" content={seoData.keywords.join(', ')} />"
    </Helmet>


        </div>;
      </div>;
    </>;,";
  ),";";
};";";";
;"
=======
seoData,
enableStructuredData = true,
enableSocialMeta = true,
enableAdvancedFeatures = true


const: script = document.createElement('script');";"
script.type = 'application/ld+json';";"
script.text = JSON.stringify(seoData.structuredData);
document.head.appendChild(script);
// Set up meta tags for social media



if (seoData.ogDescription) {}



if (seoData.ogImage) {}



if (seoData.ogUrl) {}



// Twitter Card tags;
if (seoData.twitterCard) {}



if (seoData.twitterTitle) {}



if (seoData.twitterDescription) {}



if (seoData.twitterImage) {}




// Advanced SEO features;
if (enableAdvancedFeatures) {}
// Set canonical URL


// Set robots meta tag;
if (seoData.robots) {}



// Set author meta tag;
if (seoData.author) {}



// Set published time;
if (seoData.publishedTime) {}



// Set modified time;
if (seoData.modifiedTime) {}



// Set section;
if (seoData.section) {}



// Set tags;
if (seoData.tags && seoData.tags.length > 0) {}
seoData.tags.forEach((tag) => {}
const tagMeta  = document.createElement('meta')";"
tagMeta.setAttribute('property', 'article:tag')";"
tagMeta.setAttribute('content', tag)";"
document.head.appendChild(tagMeta);
});
}, [
seoData, enableStructuredData, enableSocialMeta, enableAdvancedFeatures

]);";"
return ()";";"
<Helmet>";";";"
<title>{seoData.title}</title>"
<meta name="description" content={seoData.description} />"
<meta name="keywords" content={seoData.keywords.join(', ")} />";"'
</Helmet>";";"
);";";";"
import React from 'react';";";";";"
import SEOHead from './components/SEOHead";"'

return ()
<Helmet>
<title>{seoData.title}</title>
</Helmet>

</div>;
</div>;
</>;,";"
),";";"
};";";";"
;"

title="Components - Zion Tech Group";"
description="Professional components solutions for modern businesses";"
/>";"
<div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
<div: className ="text-center">";"
<h1: className ="text-4xl font-bold mb-4">Components</h1>";"
<p: className ="text-gray-300">Professional solutions coming soon...</p>";"
</div>;
</div>;
</>;
),

>>>>>>> cursor/fix-errors-and-merge-to-main-e36d

export default ComponentsPage;'";'";"