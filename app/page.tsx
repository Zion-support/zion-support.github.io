import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRightIcon,
  ShieldCheckIcon,
  CloudIcon,
  GlobeAltIcon,
  SignalIcon,
  BriefcaseIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';
import FuturisticBackground from './components/FuturisticBackground';

const HomePage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com/",
    "description": "Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.",
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
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ]
  };

  const features = [
    {
      icon: CpuChipIcon,
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence solutions for your business needs",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: CloudIcon,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions for modern businesses",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: ShieldCheckIcon,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: GlobeAltIcon,
      title: "Digital Transformation",
      description: "Complete digital transformation services for your organization",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: SignalIcon,
      title: "5G Solutions",
      description: "Next-generation 5G infrastructure and applications",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: BriefcaseIcon,
      title: "IT Services",
      description: "Comprehensive IT services and support for your business",
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI solutions, cloud infrastructure, cybersecurity, and digital transformation services. Empowering businesses with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, cloud infrastructure, cybersecurity, digital transformation, IT services, 5G solutions" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <FuturisticBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Advanced AI and IT Solutions
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge technology, artificial intelligence, 
              cloud infrastructure, and digital transformation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2"
              >
                Get Started
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts help you leverage the power of AI and modern technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Get Started Today
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const page = React.lazy(() => import('./page'));
export default page;