import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRightIcon, 
  ShieldCheckIcon, 
  CloudIcon,
  GlobeAltIcon,
  SignalIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com/",
    "description": "Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.",
    "foundingDate": "2020",
    "industry": "Technology",
    "numberOfEmployees": "50-100",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "customer service",
      "availableLanguage": "English"
    }
  };

  const services = [
    {
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence services including machine learning, natural language processing, and predictive analytics.',
      icon: ShieldCheckIcon,
      href: '/ai-solutions'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from threats and vulnerabilities.',
      icon: ShieldCheckIcon,
      href: '/cybersecurity'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern businesses with high availability and performance.',
      icon: CloudIcon,
      href: '/cloud-infrastructure'
    },
    {
      title: 'Micro SaaS Solutions',
      description: 'Custom micro SaaS applications tailored to your specific business needs.',
      icon: GlobeAltIcon,
      href: '/micro-saas-solutions'
    },
    {
      title: '5G Solutions',
      description: 'Next-generation 5G technology implementation for ultra-fast connectivity.',
      icon: SignalIcon,
      href: '/5g-solutions'
    },
    {
      title: 'IT Services',
      description: 'Complete IT infrastructure management and support services.',
      icon: BriefcaseIcon,
      href: '/it-solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Company</title>
        <meta name="description" content="Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your operations with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Advanced AI & IT Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge technology, AI-powered solutions, and comprehensive IT services.
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

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <service.icon className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  Learn More
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const page = React.lazy(() => import('./page'));
export default page;