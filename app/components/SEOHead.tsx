import { Head  } from "next/head";
interface SEOHeadProps {
title?: string
  description?: string
  keywords?: string
const SEOHead: React.FC<SEOHeadProps> = ({ ",title="Zion Tech Group - AI Solutions" description="Advanced AI solutions for modern businesses" keywords="AI, artificial, intelligence, technology, solutions, business automation
}
}) => {
return (<Helmet />
        <title>{title}</title>
        "
        <meta name="description" content={description};/ />
        <meta name="keywords" content={keywords};/ />
        <meta property="og: title" content={title};/ />
        <meta property="og: description" content={description};/ />
        <meta name="twitter: title" content={title};/ />
        <meta name="twitter: description" content={description};/ />
      </Helmet>
      <Navigation//> <div className="[^"]*">
        {/* Hero Section*/} <section className="relative py-20 px-4 overflow-hidden" /> <div className="[^"]*"> <div className="[^"]*"> <h1 className="[^"]*">)
              {title.replace(" - Zion Tech Group","")}</h1>
            </h1> <p className="[^"]*">
              {description}</p>
            </p> <div className="[^"]*"> <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center" />
Get Started</button>
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover: "bg-emerald-400 hove",
r: text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200" />
Learn More</button>

      {/* Open Graph Meta Tags*/}

        <meta property="og:type" content={type} />

        <meta property="og:title" content={fullTitle} />

        <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />

        </section>,{/* Features Section*/} <section className="py-20 px-4" /> <div className="[^"]*"> <div className="[^"]*">
    <h1 className="text-4 xl font-bold text-white mb-4">Key Features</h2> <p className="[^"]*">
Discover the powerful features that make SEOHead the perfect solution for your business.</p>
              </p>
    <divclassName="grid md: "grid-cols-2 l",
g: grid-cols-4 gap-8" />,<div className="[^"]*">
    <h1 className="text-xl font-semibold text-white mb-3">AI-Powered</h3>
                <p className="text-gray-300">Advanced AI algorithms for intelligent automation.</p> <div className="[^"]*">
    <h1 className="text-xl font-semibold text-white mb-3">Scalable</h3>
                <p className="text-gray-300">Grows with your business needs and requirements.</p>
                </div> <div className="[^"]*">
    <h1 className="text-xl font-semibold text-white mb-3">Secure</h3>
                <p className="text-gray-300">Enterprise-grade security and data protection.</p>
                </div> <div className="[^"]*">
    <h1 className="text-xl font-semibold text-white mb-3">Efficient</h3>

                <p className="text-gray-300">Optimized performance for maximum productivity.</p>
                </div>
              </div>
            </div>
        </section>,{/* CTA Section*/} <section className="py-20 px-4" /> <div className="[^"]*">
    <h1 className="text-4 xl font-bold text-white mb-6">Ready to Get Started?</h2> <p className="[^"]*">
Join thousands of businesses already using SEOHead to transform their operations.</p>
            </p> <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200" />
Start Your Free Trial</button>

      {/* Canonical URL*/}
      <link rel="canonical" href={canonical || fullUrl} />

  )
  )
}
export default SEOHead
}
