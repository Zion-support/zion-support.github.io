import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon, 
  ShieldCheckIcon, 
  CloudIcon,
  ArrowRightIcon,
  GlobeAltIcon,
  SignalIcon,
  BriefcaseIcon
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
      icon: ChartBarIcon,
      title: "Data Analytics",
      description: "Transform your data into actionable insights",
      color: "from-orange-500 to-red-500"
    }
  ];

  const services = [
    {
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence services including machine learning, natural language processing, and predictive analytics.',
      icon: CpuChipIcon,
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
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
          <EnhancedSEO
            title="Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Company"
            description="Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your operations with cutting-edge technology."
            keywords="AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology"
            canonical="https://ziontechgroup.com"
            structuredData={structuredData}
          />
          
          <StructuredData type="Organization" data={structuredData} />
          
          <StructuredData 
            type="WebSite" 
            data={{
              name: "Zion Tech Group",
              url: "https://ziontechgroup.com",
              potentialAction: {
                "@type": "SearchAction",
                "target": "https://ziontechgroup.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }} 
          />

      {/* Main Content */}
      <main id="main-content" role="main" aria-label="Main content">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Floating Elements with Neon Effects */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse floating"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-15 floating" style={{animationDelay: '3s'}}></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text neon-text">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Advanced AI and IT Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge artificial intelligence, cybersecurity solutions, 
              cloud infrastructure, and digital transformation services to drive innovation and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glow-effect"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glass"
              >
                Explore Services
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <Link to={service.href} className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all glow-effect">
                  Learn More <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven track record speaks for itself
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">
                  {stat.label}
                </div>
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
            Let's discuss how our technology solutions can drive your business forward
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
      </main>
        </div>
      </EnhancedAccessibility>
    </PerformanceOptimizer>
  );
};

export default HomePage;
