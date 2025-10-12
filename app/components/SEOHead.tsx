import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD

=======
  return (
    <div>Content</div>
  );
        <title>5G Data Analytics - Zion Tech Group</title>
      <title>Zion Tech Group - Advanced AI and IT Solutions</title>
const SEOHead: React.FC = () => {
  return (
    <div>Content</div>
  );
    <>
      <Helmet >
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
      <meta name="description" content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses." />
      <meta name="keywords" content="AI solutions, IT services, cloud computing, digital transformation, 5 G implementation" />
      <meta name="viewport" content="width="device-width," initial-scale=1.0" /  />
      <meta name="theme-color" content="#8 b5 cf6" />
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
      {/* Open Graph Meta Tags */}
      {/* Twitter Card Meta Tags */}
      {/* Additional SEO Meta Tags */}
      {/* Structured Data */}
      <script type="application/ld+json"  />{JSON.stringify({
          "@context": "https: //schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "description": "Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.",
          "url": "https: //ziontechgroup.com",
          "logo": "https: //ziontechgroup.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
          },
          "sameAs": [
            "https: //github.com/ziontechgroup",
            "https: //linkedin.com/company/ziontechgroup",
            "https://twitter.com/ziontechgroup"
          ]
        })}
<<<<<<< HEAD

  );
};
export default SEOHead;
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ComponentsPage() {
  return (
    <>
      <Helmet>
        <title>Components - Zion Tech Group</title>
        <meta name="description" content="Professional components services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Components</h1>
          <p className="text-lg text-gray-300 mb-8">Professional components services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
=======
      </script>
    </Helmet>
    </>;
  );
};
export default SEOHead;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
