import Head from 'next/head';

interface SEOHeadProps {
<<<<<<< HEAD
title?: string
  description?: string
  keywords?: string
const SEOHead: "React.FC<SEOHeadProps> = ({ ",title = "Zion Tech Group - AI Solutions"
description="Advanced AI solutions for modern businesses"
keywords="AI, artificial, intelligence, technology, solutions, business automation" 

;}
;}) => {
return(<>
<Helmet />;
        <title>{title}</title>;
        <meta name = "description" content={description,};/ />
        <meta name = "keywords" content={keywords,};/ />
        <meta property="og: title" content={title,};/ />
        <meta property="og: description" content={description,};/ />
        <meta name="twitter: title" content={title,};/ />
        <meta name="twitter: description" content={description,};/ />
      </Helmet>
      <Navigation/ />,
    <divclassName = "min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900" />
        {/* Hero Section */,}
        <section className="relative py-20 px-4 overflow-hidden" />,
    <divclassName="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20" />,
    <divclassName="relative max-w-7 xl mx-auto text-center" />,
    <h1className="text-5 xl md: text-7 xl font-bold text-white mb-6 leading-tight" / />)
              {title.replace(' - Zion Tech Group','')}</h1>
            </h1>
            <pclassName = "text-xl text-gray-300 mb-8 max-w-3 xl mx-auto leading-relaxed" / />
              {description,}</p>
            </p>,
    <divclassName="flex flex-col sm: flex-row gap-4 justify-center" />
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center" />
Get Started</button>
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover: "bg-emerald-400 hove","
r: text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200" />
Learn More</button>
=======
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  canonical?: string;
  structuredData?: any;
}

export default function SEOHead({
  title = 'Zion Tech Group - Advanced AI & IT Solutions',
  description = 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. Transform your business with cutting-edge technology.',
  keywords = 'AI solutions, cybersecurity, cloud computing, digital transformation, blockchain, IT services',
  image = '/og-image.jpg',
  url = 'https://zion.app',
  type = 'website',
  canonical,
  structuredData,
}: SEOHeadProps) {
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const fullUrl = url.startsWith('http') ? url : `https://zion.app${url}`;
  const fullImage = image.startsWith('http') ? image : `https://zion.app${image}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
>>>>>>> 25500927562937ed05befe3bb53e25b2bd9a2d81

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />

<<<<<<< HEAD
        </section>,{/* Features Section */}
<section className="py-20 px-4" />,
    <divclassName="max-w-7 xl mx-auto" />,
    <divclassName="text-center mb-16" />,
    <h1 className="text-4 xl font-bold text-white mb-4">Key Features</h2>
              <pclassName="text-xl text-gray-300 max-w-3 xl mx-auto" / />
Discover the powerful features that make SEOHead the perfect solution for your business.</p>
              </p>,
    <divclassName="grid md: "grid-cols-2 l","
g: grid-cols-4 gap-8" />,<divclassName="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20" />,
    <h1 className="text-xl font-semibold text-white mb-3">AI-Powered</h3>
                <p className="text-gray-300">Advanced AI algorithms for intelligent automation.</p>,
    <divclassName="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20" / />,
    <h1 className="text-xl font-semibold text-white mb-3">Scalable</h3>
                <p className="text-gray-300">Grows with your business needs and requirements.</p>
                </div>,
    <divclassName="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20" / />,
    <h1 className="text-xl font-semibold text-white mb-3">Secure</h3>
                <p className="text-gray-300">Enterprise-grade security and data protection.</p>
                </div>,
    <divclassName="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20" / />,
    <h1 className="text-xl font-semibold text-white mb-3">Efficient</h3>

                <p className="text-gray-300">Optimized performance for maximum productivity.</p>
                </div>
              </div>
            </div>
        </section>,{/* CTA Section */}
<section className="py-20 px-4" />,
    <divclassName="max-w-4 xl mx-auto text-center" / />,
    <h1 className="text-4 xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <pclassName="text-xl text-gray-300 mb-8" / />
Join thousands of businesses already using SEOHead to transform their operations.</p>
            </p>
            <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200" />
Start Your Free Trial</button>
=======
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@ziontechgroup" />
      <meta name="twitter:creator" content="@ziontechgroup" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#7c3aed" />
      <meta name="msapplication-TileColor" content="#7c3aed" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
>>>>>>> 25500927562937ed05befe3bb53e25b2bd9a2d81

      {/* Canonical URL */}
      <link rel="canonical" href={canonical || fullUrl} />

<<<<<<< HEAD
  );
,}  )};
export default SEOHead;
=======
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}

      {/* Default Structured Data for Organization */}
      {!structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "description": description,
              "url": "https://zion.app",
              "logo": "https://zion.app/logo.png",
              "sameAs": [
                "https://twitter.com/ziontechgroup",
                "https://linkedin.com/company/zion-tech-group",
                "https://github.com/zion-holdings"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-0123",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US",
                "addressLocality": "San Francisco",
                "addressRegion": "CA"
              }
            }),
          }}
        />
      )}
    </Head>
  );
>>>>>>> 25500927562937ed05befe3bb53e25b2bd9a2d81
}