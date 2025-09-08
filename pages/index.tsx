import Link from 'next/link',
import Head from 'next/head';
import { useState, useEffect, Suspense  } from 'react';
import { ContactInfo, AnimationState  } from '../types';
import ErrorBoundary from '../components/ErrorBoundary',
import LoadingSpinner from '../components/LoadingSpinner';
// import PerformanceMonitor from '../components/PerformanceMonitor';
export default function Home() {
  const [animationState, setAnimationState] = useState<AnimationState>({
<<<<<<< HEAD
    isLoaded: false;
    hasError: false
  });
  useEffect(() => {
    const timer = null;
=======
    isLoaded: false
    hasError: false
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationState(prev => ({ ...prev, isLoaded: true }));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (animationState.hasError) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 rounded-lg hover: bg-blue-700"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }
  return (;
    <>;
      <Head>;
        <title>Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions</title>;
        <meta name="description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />;
        <meta name="keywords" content="micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions" />;
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />;
        <meta name="robots" content="index, follow" />;
        <meta name="author" content="Zion Tech Group" />;
        <meta name="language" content="en-US" />;
        <link rel="canonical" href={contact.site} />;
        <link rel="icon" href="/favicon.ico" />;
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />;
        <meta property="og:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />;
        <meta property="og:description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />;
        <meta property="og:url" content={contact.site} />;
        <meta property="og:type" content="website" />;
        <meta property="og:site_name" content="Zion Tech Group" />;
        <meta property="og:locale" content="en_US" />;
        <meta name="twitter:card" content="summary_large_image" />;
        <meta name="twitter:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />;
        <meta name="twitter:description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />;
        <meta name="twitter:site" content="@ziontechgroup" />;
        <meta name="twitter:creator" content="@ziontechgroup" />;
        <script;
          type="application/ld+json";
          dangerouslySetInnerHTML={{__html:JSON.stringify({;
              "@context":"https://schema.org";
              "@type":"Organization";
              "name":"Zion Tech Group";
              "url":contact.site;
              "logo":`${contact.site}/favicon.svg`;
              "description":"Leading provider of micro SaaS products, AI services, and IT solutions";
              "address":{"@type":"PostalAddress";
                "streetAddress":"364 E Main St STE 1008";
                "addressLocality":"Middletown";
                "addressRegion":"DE";
                "postalCode":"19709";
                "addressCountry":"US";
              }
              "contactPoint":{"@type":"ContactPoint";
                "telephone":contact.phone;
                "contactType":"customer service";
                "email":contact.email;
              }
              "sameAs":[contact.site];
            });
          }}
        />;
      </Head>;
      <ErrorBoundary level="page">;
        <Suspense fallback={<LoadingSpinner fullScreen text="Loading Zion Tech Group..." />}>;
          <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">;
        {/* Hero Section */}
        <section className="py-20 px-4 text-center" role="banner" aria-labelledby="hero-title">;
          <div className="max-w-4xl mx-auto">;
            <h1 ;
              id="hero-title";
              className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${animationState.isLoaded ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8'}`}
            >;
              Zion Tech Group;
            </h1>;
            <p className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${animationState.isLoaded ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8'}`}>;
              Innovative Micro SaaS, AI Services & IT Solutions;
            </p>;
            <p className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${animationState.isLoaded ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8'}`}>;
              We deliver cutting-edge technology solutions with 150+ micro SaaS products;
              100+ advanced AI services, and 100+ comprehensive IT solutions. From cloud optimization ;
              to AI automation, quantum computing to blockchain solutions, we help businesses scale ;
              efficiently and securely in the digital age.;
            </p>;
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-600 ${animationState.isLoaded ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8'}`} role="navigation" aria-label="Main navigation">;
              <Link ;
                href="/services" ;
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:visible";
                aria-label="View all our services";
                tabIndex={animationState.isLoaded ? 0 :-1}
              >;
                View All Services;
              </Link>;
              <Link ;
                href="/services-catalog" ;
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:visible";
                aria-label="Browse our services catalog";
                tabIndex={animationState.isLoaded ? 0 :-1}
              >;
                Services Catalog;
              </Link>;
              <Link ;
                href="/contact" ;
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:visible";
                aria-label="Get a quote for our services";
                tabIndex={animationState.isLoaded ? 0 :-1}
              >;
                Get Quote;
              </Link>;
            </div>;
            <div className={`grid md:grid-cols-3 gap-6 text-center transition-all duration-1000 delay-800 ${animationState.isLoaded ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8'}`}>;
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">;
                <h3 className="text-2xl font-bold text-blue-400 mb-2" aria-label="150 plus micro SaaS products">150+</h3>;
                <p className="text-slate-300">Micro SaaS Products</p>;
              </div>;
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">;
                <h3 className="text-2xl font-bold text-purple-400 mb-2" aria-label="100 plus AI services">100+</h3>;
                <p className="text-slate-300">AI Services</p>;
              </div>;
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:scale-105">;
                <h3 className="text-2xl font-bold text-green-400 mb-2" aria-label="100 plus IT solutions">100+</h3>;
                <p className="text-slate-300">IT Solutions</p>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Services Overview */}
        <section className="py-16 px-4" role="main">;
          <div className="max-w-6xl mx-auto">;
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" id="service-categories">;
              Our Service Categories;
            </h2>;
            <div className="grid md:grid-cols-3 gap-8">;
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-colors">;
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Micro SaaS Products</h3>;
                <p className="text-slate-300 mb-6">;
                  Innovative, focused software solutions including AI-Powered Video Clip Maker;
                  Smart Contract Analyzer, Cybersecurity Threat Intelligence, and 50+ more specialized tools.;
                </p>;
                <ul className="text-slate-400 space-y-2 mb-6">;
                  <li>• AI-Powered Video Clip Maker</li>;
                  <li>• Smart Contract Analyzer</li>;
                  <li>• Cybersecurity Threat Intelligence</li>;
                  <li>• Multi-Language Website Translator</li>;
                  <li>• Predictive Inventory Optimizer</li>;
                </ul>;
                <Link href="/micro-saas" className="text-blue-400 hover:text-blue-300 font-semibold">;
                  View All Micro SaaS →;
                </Link>;
              </div>;
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-purple-500/40 transition-colors">;
                <h3 className="text-2xl font-bold mb-4 text-purple-400">AI Services</h3>;
                <p className="text-slate-300 mb-6">;
                  Advanced artificial intelligence solutions including autonomous AI agents;
                  financial trading systems, legal document analysis, and 40+ more AI-powered services.;
                </p>;
                <ul className="text-slate-400 space-y-2 mb-6">;
                  <li>• Autonomous AI Agents</li>;
                  <li>• AI-Powered Financial Trading</li>;
                  <li>• AI Legal Document Analysis</li>;
                  <li>• AI-Powered Voice Analytics</li>;
                  <li>• AI-Powered Search & Discovery</li>;
                </ul>;
                <Link href="/ai-services" className="text-purple-400 hover:text-purple-300 font-semibold">;
                  View All AI Services →;
                </Link>;
              </div>;
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-colors">;
                <h3 className="text-2xl font-bold mb-4 text-green-400">IT & Cloud Services</h3>;
                <p className="text-slate-300 mb-6">;
                  Comprehensive IT solutions including quantum computing consulting, blockchain & Web3 solutions;
                  DevSecOps automation, and 40+ more enterprise-grade services.;
                </p>;
                <ul className="text-slate-400 space-y-2 mb-6">;
                  <li>• Quantum Computing Consulting</li>;
                  <li>• Blockchain & Web3 Solutions</li>;
                  <li>• DevSecOps & Security Automation</li>;
                  <li>• Enterprise Data Platform</li>;
                  <li>• High-Performance Computing Solutions</li>;
                </ul>;
                <Link href="/it-services" className="text-green-400 hover:text-green-300 font-semibold">;
                  View All IT Services →;
                </Link>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Contact Section */}
        <section className="py-16 px-4 bg-slate-900/40">;
          <div className="max-w-4xl mx-auto text-center">;
            <h2 className="text-3xl md:text-4xl font-bold mb-8">;
              Ready to Transform Your Business?;
            </h2>;
            <p className="text-lg text-slate-300 mb-8">;
              Get in touch with our experts to discuss your project requirements and discover ;
              how our innovative solutions can drive your business forward.;
            </p>;
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">;
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">;
                Call {contact.phone}
              </a>;
              <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">;
                Email {contact.email}
              </a>;
              <Link href="/contact" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">;
                Contact Form;
              </Link>;
            </div>;
            <div className="text-slate-400">;
              <p>{contact.address}</p>;
              <p className="mt-2">Visit us at <a href={contact.site} className="text-blue-400 hover:text-blue-300">{contact.site}</a></p>;
            </div>;
          </div>;
        </section>;
          </main>;
        </Suspense>;
        {/* <PerformanceMonitor ;          showMetrics={process.env.NODE_ENV === 'development'}
          logMetrics={true}
          onThresholdExceeded={(metrics) => {console.warn('Performance thresholds exceeded:', metrics);
          }}
        /> */}
      </ErrorBoundary>;
    </>;
  );}
import React from 'react';
import { Button } from '@/components/ui/button';
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Zion Tech Group
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your trusted partner in technology solutions
        </p>
        <Button size="lg">
          Get Started
        </Button>
      </div>
    </div>
  );
}
          </div>
        </section>
        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  Zion Tech Group
                </h1>
                <p 
                  className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${
                    animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  Innovative Micro SaaS, AI Services & IT Solutions
                </p>
                <p 
                  className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
                    animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  We deliver cutting-edge technology solutions with 150+ micro SaaS products, 
                  100+ advanced AI services, and 100+ comprehensive IT solutions. From cloud optimization 
                  to AI automation, quantum computing to blockchain solutions, we help businesses scale 
                  efficiently and securely in the digital age.
                </p>
                <div 
                  className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 delay-600 ${
                    animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <Link 
                    href="/services" 
                    className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    View All Services
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link 
                    href="/contact" 
                    className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Get Quote
                  </Link>
                  <Link 
                    href="/about" 
                    className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Featured Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most popular and effective technology solutions
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-500 space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
We deliver exceptional results through innovation, expertise, and dedication
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
<p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our technology solutions can drive your success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors text-lg"
                >
                  Get Started
                </Link>
                <Link
                  href="/pricing"
                  className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
</Link>
              </div>
              <div className={`grid md:grid-cols-3 gap-6 text-center transition-all duration-1000 delay-800 ${
                animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2" aria-label="150 plus micro SaaS products">150+</h3>
                  <p className="text-slate-300">Micro SaaS Products</p>
                </div>
                <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
                  <h3 className="text-2xl font-bold text-purple-400 mb-2" aria-label="100 plus AI services">100+</h3>
                  <p className="text-slate-300">AI Services</p>
                </div>
                <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:scale-105">
                  <h3 className="text-2xl font-bold text-green-400 mb-2" aria-label="100 plus IT solutions">100+</h3>
                  <p className="text-slate-300">IT Solutions</p>
                </div>
              </div>
            </div>
          </section>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">150+</h3>
                <p className="text-slate-300">Micro SaaS Products</p>
              </div>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">100+</h3>
                <p className="text-slate-300">AI Services</p>
              </div>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-green-400 mb-2">100+</h3>
                <p className="text-slate-300">IT Solutions</p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{service.count}</div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses that trust Zion Tech Group for their technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Contact Us Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/request-quote" className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                Request Quote
              </Link>
            </div>
          </div>
        </section>
          </main>
        </Suspense>
        {/* <PerformanceMonitor 
          showMetrics={process.env.NODE_ENV === 'development'}
          logMetrics={true}
          onThresholdExceeded={(metrics) => {
            console.warn('Performance thresholds exceeded:', metrics)
          }}
        /> */}
      </ErrorBoundary>
    </>
  );
}
</main>
    </>