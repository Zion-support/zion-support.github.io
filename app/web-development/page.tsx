'use client';
import React from 'react';
import { Code, Smartphone, Globe, Database, Shield, BarChart, Users, CheckCircle, ArrowRight, Cloud } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
const WebDevelopmentPage: React.FC = () => {
  const webServices = [
    {
      title: 'Frontend Development',
      description: 'Modern, responsive web applications with cutting-edge technologies',
      icon: Code,
      price: '$1,200/month',
      features: ['React/Next.js', 'Vue.js/Angular', 'Responsive Design', 'PWA Development'],
      benefits: ['50% faster load times', 'Mobile-first approach', 'SEO optimized'],
      color: 'text-blue-400'
    },
    {
      title: 'Backend Development',
      description: 'Scalable server-side solutions and API development',
      icon: Database,
      price: '$1,500/month',
      features: ['Node.js/Python', 'RESTful APIs', 'Microservices', 'Database Design'],
      benefits: ['99.9% uptime', 'Scalable architecture', 'Secure APIs'],
      color: 'text-green-400'
    },
    {
      title: 'Full-Stack Development',
      description: 'Complete web solutions from frontend to backend',
      icon: Globe,
      price: '$2,200/month',
      features: ['End-to-end development', 'Cloud deployment', 'DevOps integration', 'Testing & QA'],
      benefits: ['Unified solution', 'Faster development', 'Better performance'],
      color: 'text-purple-400'
    },
    {
      title: 'E-commerce Development',
      description: 'Custom e-commerce platforms and online stores',
      icon: Smartphone,
      price: '$1,800/month',
      features: ['Custom platforms', 'Payment integration', 'Inventory management', 'Analytics'],
      benefits: ['Higher conversion rates', 'Mobile optimized', 'Secure payments'],
      color: 'text-orange-400'
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and support for your web applications',
      icon: Users,
      price: '$500/month',
      features: ['24/7 Support', 'Regular Updates', 'Bug Fixes', 'Performance Monitoring'],
      color: 'text-gray-400'
    }
  ];

  const technologies = [
    { name: 'React/Next.js', icon: Code, description: 'Modern frontend frameworks' },
    { name: 'Node.js', icon: Database, description: 'Server-side JavaScript' },
    { name: 'Python/Django', icon: Globe, description: 'Backend development' },
    { name: 'MongoDB/PostgreSQL', icon: Database, description: 'Database solutions' },
    { name: 'AWS/Azure', icon: Cloud, description: 'Cloud platforms' },
    { name: 'Docker/Kubernetes', icon: Shield, description: 'Containerization' }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan',
      icon: BarChart
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes and prototypes to visualize your solution',
      icon: Code
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your web application using modern technologies and best practices',
      icon: Globe
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing and deployment with ongoing support',
      icon: Shield
    }
  ];

  return (
    <>{}</>{}{}
      <SEOOptimizer
        title="Web Development Services - Zion Tech Group"
        description="Professional web development services including frontend, backend, full-stack, and e-commerce solutions. Modern technologies and best practices."
        keywords={['web development', 'frontend development', 'backend development', 'full-stack', 'e-commerce', 'React', 'Node.js']}
        canonicalUrl="https://ziontechgroup.com/web-development"
      /></SEOOptimize>
        <PerformanceOptimizer
          enableImageOptimization={true}
          enableLazyLoading={true}
          enableCodeSplitting={true}
          enablePrefetching={true}
        /></PerformanceOptimize>
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      /></AccessibilityEnhance>
      <SecurityEnhancer
        enableCSP={true}
        enableHTTPSRedirect={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      /></SecurityEnhance>
      <Analytics /></Analytic>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <Navigation /></Navigatio>

        <main className="container mx-auto px-4 py-16 pt-24">{/* Hero Section */}</mai>
          <section className="text-center mb-16"></sectio>
            <h1 className="text-4 xl md:text-5 xl lg:text-6 xl font-bold text-white mb-6 neon-text"></h1></<<<h1>Web</h1></<<h1>Development</h1> Services<p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">Build modern, scalable, and high-performance web applications with our expert development team.</p></<<<p>From</p></<<p>frontend</p> to backend, we deliver solutions that drive business growth.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >Start Your Project</a><a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >Call +1 302 464 0950</a>
              </a>
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-20"></sectio>
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-12 text-center neon-text"></h2></<<<h2>Our</h2></<<h2>Web</h2> Development Services<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{webServices.map((service, index) => (</div>
                <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300"></div>
                  <div className="flex items-center mb-6"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4"></div>
                      <service.icon className="w-8 h-8 text-white" /></servic>
                    </div>
                    <div></div>
                      <h3 className="text-2 xl font-bold text-white mb-2 neon-text"></h>{service.title}<div className={`font-semibold ${service.color}`}></div>{service.price}<p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                  <div className="mb-6"></div>
                    <h4 className="text-lg font-semibold text-white mb-3">Features</h4><ul className="space-y-2">{service.features.map((feature, featureIndex) => (</u>
                        <li key={featureIndex} className="flex items-center text-gray-300"></l>
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" >{feature}</CheckCircl>
                        </CheckCircle>
                      ))}
                    </ul>
                  </div>

                  {service.benefits && (
                    <div className="mb-6"></div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4><ul className="space-y-2">{service.benefits.map((benefit, benefitIndex) => (</u>
                          <li key={benefitIndex} className="flex items-center text-gray-300"></l>
                            <ArrowRight className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" >{benefit}</ArrowRigh>
                          </ArrowRight>
                        ))}
                      </ul>
                    </div>
                  )}

                  <a
                    href="/contact"
                    className="w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 cyber-button"
                  >Get Started</a>
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-20"></sectio>
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-12 text-center neon-text"></h2></<<<h2>Technologies</h2></<<h2>We</h2> Use<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">{technologies.map((tech, index) => (</div>
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div>
                  <tech.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" /></tec>
                  <h3 className="text-lg font-semibold text-white mb-2"></h>{tech.name}<p className="text-sm text-gray-300">{tech.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mb-20"></sectio>
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-12 text-center neon-text"></h2></<<<h2>Our</h2></<<h2>Development</h2> Process<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{process.map((step, index) => (</div>
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <span className="text-2 xl font-bold text-white"></spa>{step.step}<h3 className="text-xl font-bold text-white mb-3 neon-text"></h>{step.title}<p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center"></sectio>
            <div className="cyber-card p-12 max-w-4 xl mx-auto"></div>
              <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6 neon-text"></h2></<<<h2>Ready</h2></<<h2>to</h2> Build Your Next Web Application?<p className="text-xl text-gray-300 mb-8">Let's discuss your project requirements and create a custom solution that drives your business forward.</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >Start Your Project</a><a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >Call +1 302 464 0950</a>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer /></Foote>
      </div>
    
  );
};

export default WebDevelopmentPage;