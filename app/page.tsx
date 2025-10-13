import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Brain, Shield, Zap, Globe, ArrowRight } from "lucide-react";

const HomePage = () => {
  const features = [
    {
      title: "AI-Powered Solutions",
      description:
        "Cutting-edge artificial intelligence to transform your business operations",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "IT Services",
      description: "Comprehensive technology solutions for modern businesses",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Micro SAAS",
      description: "Ready-to-use software solutions for immediate deployment",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "5G Solutions",
      description: "Next-generation connectivity and infrastructure services",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Transform Your Business</title>
        <meta
          name="description"
          content="Leading provider of AI-powered solutions, cloud infrastructure, cybersecurity, and digital transformation services. 500+ successful projects, 24/7 support. Get your free consultation today!"
        />
        <meta
          name="keywords"
          content="AI solutions, cloud infrastructure, cybersecurity, digital transformation, business automation, technology consulting, 5G implementation, data analytics, custom software development"
        />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI and IT solutions. 500+ successful projects, enterprise-grade security, 24/7 support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI and IT solutions. 500+ successful projects, enterprise-grade security, 24/7 support." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "description": "Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses",
            "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/logo.png",
            "foundingDate": "2019",
            "numberOfEmployees": "50-100",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "364 E Main St STE 1008",
              "addressLocality": "Middletown",
              "addressRegion": "DE",
              "postalCode": "19709",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-302-464-0950",
              "contactType": "customer service",
              "email": "kleber@ziontechgroup.com",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://twitter.com/ziontechgroup",
              "https://linkedin.com/company/ziontechgroup",
              "https://github.com/ziontechgroup"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Technology Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI & Machine Learning Solutions"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cloud Infrastructure Services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cybersecurity Solutions"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "5G Implementation Services"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {" "}
              Zion Tech Group
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Leading provider of AI-powered solutions, IT services, and digital
            transformation for modern businesses. Transform your operations with
            cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/about"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your
              business growth and digital transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our solutions to drive
            growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/services"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
