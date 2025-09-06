import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Advanced IT Solutions & AI Services</title>
        <meta name="description" content="Leading provider of advanced IT solutions, AI services, and cutting-edge technology solutions for modern businesses." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">Zion Tech Group</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Pioneering the future with advanced IT solutions, AI services, and cutting-edge technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services" className="btn-primary">
                  Explore Our Services
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-900/50">
import Link from 'next/link',
import Head from 'next/head';
import { useState, useEffect, Suspense  } from 'react';
import { ContactInfo, AnimationState  } from '../types';
import ErrorBoundary from '../components/ErrorBoundary',
import LoadingSpinner from '../components/LoadingSpinner';
  });
  useEffect(() => {;
    const timer = setTimeout(() => {;
      setAnimationState(prev => ({ ...prev, isLoaded: true }));
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  if (animationState && animationState.hasError) {;
    return (
          >;
            Reload Page;
          </button>;
        </div>;
    <>;
      <Head>;
        <title > Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions</title>;
        <meta name="description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />;
        <meta name="keywords" content="micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions" />;
        <meta property="og:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />;
        <meta property="og:description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />;
        <meta property="og:url" content={contact && contact.site} />;
        <meta property="og:type" content="website" />;
        <meta property="og:site_name" content="Zion Tech Group" />;
        <meta property="og:locale" content="en_US" />;
        <meta name="twitter:card" content="summary_large_image" />;
        <meta name="twitter:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />;
        <meta name="twitter:description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions." />;
        <meta name="twitter:site" content="@ziontechgroup" />;
        <meta name="twitter:creator" content="@ziontechgroup" />;
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:JSON && JSON.stringify({
              "@context":"https://schema && schema.org",
              "@type":"Organization",
              "name":"Zion Tech Group",
              "url":contact && contact.site,
              "logo":`${contact && contact.site}/favicon && favicon.svg`,
              "description":"Leading provider of micro SaaS products, AI services, and IT solutions",
              "address":{
                "@type":"PostalAddress",
                "streetAddress":"364 E Main St STE 1008",
                "addressLocality":"Middletown",
                "addressRegion":"DE",
                "postalCode":"19709",
                "addressCountry":"US"
              },
              "contactPoint":{
                "@type":"ContactPoint",
                "telephone":contact && contact.phone,
                "contactType":"customer service",
                "email":contact && contact.email
              },
              "sameAs":[contact && contact.site]
            })
          }}
        />;
      </Head>;
      <ErrorBoundary level="page">;
        <Suspense fallback={<LoadingSpinner full_screen text="Loading Zion Tech Group..." />}>;
          <main className="min - h-screen bg - gradient - to - b from - slate - 950 via - slate - 900 to - slate - 950 text - white">;
        {/* Hero Section */}
              100+ advanced AI services, and 100+ comprehensive IT solutions. From cloud optimization ;
              to AI automation, quantum computing to blockchain solutions, we help businesses scale ;
              efficiently and securely in the digital age.;
            </p>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Services Overview */}
                  <li>• Quantum Computing Consulting</li>;
                  <li>• Blockchain & Web3 Solutions</li>;
                  <li>• DevSecOps & Security Automation</li>;
                  <li>• Enterprise Data Platform</li>;
                  View All IT Services →;
                </Link>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Contact Section */}
            </div>;
          </div>;
        </section>;
          </main>;
        </Suspense>;
        {/* <PerformanceMonitor ;          show_metrics={process.env.NODE_ENV === 'development'}
          log_metrics={true}
          onThresholdExceeded={(metrics) => {
            console.warn ('Performance thresholds exceeded:', metrics);
          }}
        /> */}
      </ErrorBoundary>;
    </>);}
import React from 'react';
          Your trusted partner in technology solutions;
        </p>;
        <Button size="lg">;
          Get Started;
        </Button>;
      </div>;
            </div>
          </div>
        </section>
        {/* Services Overview */}
        <section className="py-16 px-4" role="main">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" id="service-categories">
              Our Service Categories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Micro SaaS Products</h3>
                <p className="text-slate-300 mb-6">
                  Innovative, focused software solutions including AI-Powered Video Clip Maker, 
                  Smart Contract Analyzer, Cybersecurity Threat Intelligence, and 50+ more specialized tools.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• AI-Powered Video Clip Maker</li>
                  <li>• Smart Contract Analyzer</li>
                  <li>• Cybersecurity Threat Intelligence</li>
                  <li>• Multi-Language Website Translator</li>
                  <li>• Predictive Inventory Optimizer</li>
                </ul>
                <Link href="/micro-saas" className="text-blue-400 hover:text-blue-300 font-semibold">
                  View All Micro SaaS →
                </Link>
              </div>
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-purple-500/40 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">AI Services</h3>
                <p className="text-slate-300 mb-6">
                  Advanced artificial intelligence solutions including autonomous AI agents, 
                  financial trading systems, legal document analysis, and 40+ more AI-powered services.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• Autonomous AI Agents</li>
                  <li>• AI-Powered Financial Trading</li>
                  <li>• AI Legal Document Analysis</li>
                  <li>• AI-Powered Voice Analytics</li>
                  <li>• AI-Powered Search & Discovery</li>
                </ul>
                <Link href="/ai-services" className="text-purple-400 hover:text-purple-300 font-semibold">
                  View All AI Services →
                </Link>
              </div>
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-green-400">IT & Cloud Services</h3>
                <p className="text-slate-300 mb-6">
                  Comprehensive IT solutions including quantum computing consulting, blockchain & Web3 solutions, 
                  DevSecOps automation, and 40+ more enterprise-grade services.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• Quantum Computing Consulting</li>
                  <li>• Blockchain & Web3 Solutions</li>
                  <li>• DevSecOps & Security Automation</li>
                  <li>• Enterprise Data Platform</li>
                  <li>• High-Performance Computing Solutions</li>
                </ul>
                <Link href="/it-services" className="text-green-400 hover:text-green-300 font-semibold">
                  View All IT Services →
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Get in touch with our experts to discuss your project requirements and discover 
              how our innovative solutions can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Call {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                Email {contact.email}
              </a>
              <Link href="/contact" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                Contact Form
              </Link>
            </div>
            <div className="text-slate-400">
              <p>{contact.address}</p>
              <p className="mt-2">Visit us at <a href={contact.site} className="text-blue-400 hover:text-blue-300">{contact.site}</a></p>
            </div>
          </div>
        </section>
          </main>
        </Suspense>
        <PerformanceMonitor 
          showMetrics={process.env.NODE_ENV === 'development'}
          logMetrics={true}
          onThresholdExceeded={(metrics) => {
            console.warn('Performance thresholds exceeded:', metrics)
          }}
        />
      </ErrorBoundary>
    </>
  )
}

        {/* Services Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
        <section className="py-16 bg-gray-50">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center mb-12">;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
                Our Core Services;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                Comprehensive technology solutions designed to accelerate your business growth;
              </p>;
            </motion && motion.div>;

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {services && services.map((service, index) => (;
                <motion&& motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}>;
                  <div className="text-4xl mb-4">;
                    <service && service.icon className="w-12 h-12 text-blue-600" />;
                  </div>;
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{service && service.title}</h3>;
                  <p className="text-gray-600 mb-4">{service && service.description}</p>;
                  <ul className="text-sm text-gray-500 space-y-2 mb-6">;
                    {service && service.features.map((feature, idx) => (;
                      <li key={idx} className="flex items-center">;
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />;
                        {feature}
                      </li>;
                    ))}
                  </ul>;
                  <Link
                    href={service && service.href}
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">;
                    Learn More;
                    <ArrowRight className="w-4 h-4 ml-1" />;
                  </Link>;
                </motion && motion.div>;
              ))}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              </p>
                We deliver exceptional results through innovation, expertise, and dedication
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
        <section className="py-16 bg-gray-50">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center mb-12">;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
                Why Choose Zion Tech Group?;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                We deliver exceptional results through innovation, expertise, and dedication;
              </p>;
            </motion && motion.div>;

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {whyChooseUs && whyChooseUs.map((item, index) => (;
                <motion&& motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                What Our <span className="text-cyan-400">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our satisfied clients have to say.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                    </div>
                  </Card>
<p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
                <Link
                  href="/contact"
                  className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors flex items-center justify-center">;
                  Get Free Consultation;
                  <ArrowRight className="w-5 h-5 ml-2" />;
                </Link>;
                <Link
                  href="tel:+13024640950"
              </div>
                </Link>              </div>
            </motion.div>
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our technology solutions can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
      </main>
    </>
</main>
    </>
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">;
                  <Phone className="w-5 h-5 mr-2" />;
                  Call Now;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </MainLayout>;
  );
}
      </main>;
    </>;
    </div>);
}
          </div>;
        </section>;
        {/* Services Section */}
        <section className="py - 16 bg - gray - 50">;
          <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className="text - center mb - 12";
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
                Our Core Services;
              </h2>;
              <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;
                Comprehensive technology solutions designed to accelerate your business growth;
              </p>;
            </motion.div>;
            <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
              {services.map ((service, index) => (
                <motion.div;
                  key={index}
                  className="bg - white rounded - lg shadow - lg p - 8 hover:shadow - xl transition - shadow";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >;
                  <div className="text - 4xl mb - 4">;
                    <service.icon className="w - 12 h - 12 text - blue - 600" />;
                  </div>;
                  <h3 className="text - xl font - semibold mb - 4 text - gray - 900">{service.title}</h3>;
                  <p className="text - gray - 600 mb - 4">{service.description}</p>;
                  <ul className="text - sm text - gray - 500 space - y-2 mb - 6">;
                    {service.features.map ((feature, idx) => (
                      <li key={idx} className="flex items - center">;
                        <CheckCircle className="w - 4 h - 4 text - green - 500 mr - 2" />;
                        {feature}
                      </li>))}
                  </ul>;
                  <Link;
                    href={service.href}
                    className="text - blue - 600 hover:text - blue - 700 font - semibold flex items - center";
                  >;
                    Learn More;
                    <ArrowRight className="w - 4 h - 4 ml - 1" />;
                  </Link>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* Featured Services */}
        <section className="py - 16 bg - white">;
          <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className="text - center mb - 12";
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
                Featured Solutions;
              </h2>;
              <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;
                Our most popular and effective technology solutions;
              </p>;
            </motion.div>;
            <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
              {featured_services.map ((service, index) => (
                <motion.div;
                  key={index}
                  className="bg - white rounded - lg shadow - lg p - 8 hover:shadow - xl transition - shadow";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >;
                  <div className="text - 3xl mb - 4">{service.icon}</div>;
                  <h3 className="text - xl font - semibold mb - 4 text - gray - 900">{service.title}</h3>;
                  <p className="text - gray - 600 mb - 4">{service.description}</p>;
                  <ul className="text - sm text - gray - 500 space - y-2 mb - 4">;
                    {service.features.map ((feature, idx) => (
                      <li key={idx}>• {feature}</li>))}
                  </ul>;
                  <div className="mt - 4">;
                    <span className="text - 2xl font - bold text - blue - 600">{service.price}</span>;
                  </div>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* Why Choose Us */}
        <section className="py - 16 bg - gray - 50">;
          <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className="text - center mb - 12";
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
                Why Choose Zion Tech Group?;
              </h2>;
              <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;
We deliver exceptional results through innovation, expertise, and dedication;
              </p>;
            </motion.div>;
            <div className="grid md:grid - cols - 2 lg:grid - cols - 4 gap - 8">;
              {whyChooseUs.map ((item, index) => (
                <motion.div;
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >;
                  <div className="bg - blue - 100 w - 16 h - 16 rounded - full flex items - center justify - center mx - auto mb - 4">;
                    <item.icon className="w - 8 h - 8 text - blue - 600" />;
                  </div>;
                  <h3 className="text - xl font - semibold mb - 2 text - gray - 900">{item.title}</h3>;
<p className="text - gray - 600">{item.description}</p>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py - 16 bg - blue - 600 text - white">;
          <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold mb - 4">;
                Ready to Transform Your Business?;
              </h2>;
              <p className="text - xl text - blue - 100 mb - 8 max - w-2xl mx - auto">;
                Let's discuss how our technology solutions can drive your success;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <Link;
                  href="/contact";
                  className="bg - yellow - 500 text - blue - 900 px - 8 py - 4 rounded - lg font - semibold text - lg hover:bg - yellow - 400 transition - colors flex items - center justify - center";
                >;
                  Get Free Consultation;
                  <ArrowRight className="w - 5 h - 5 ml - 2" />;
                </Link>;
                <Link;
                  href="tel:+13024640950";
                  className="border - 2 border - white text - white px - 8 py - 4 rounded - lg font - semibold text - lg hover:bg - white hover:text - blue - 600 transition - colors flex items - center justify - center";
                >;
                  <Phone className="w - 5 h - 5 mr - 2" />;
                  Call Now;
</Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </MainLayout>);
}
</main>;
    </>;
