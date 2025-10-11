'use client';
import React, {useCallback, useState, useEffect, Suspense, lazy, memo}from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

import StructuredData from './components/StructuredData';

import {Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText}}from 'lucide-react';

ServiceCardSkeleton.displayName = 'ServiceCardSkeleton',

const HomePage: React.FC = () => {,
    const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => 
    setIsLoaded(true);
    // Trigger visibility animation;
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer)}, []);

      })
    }
  }, []);

  const features = const features = const features = [
    {
      icon: Brain,
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      benefits: [''AWS/Azure/GCP', 'Container Orchestration', 'Auto-scaling', 'Disaster Recovery'']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      benefits: [''Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response'']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your business requirements.',
      benefits: [''Web Applications', 'Mobile Apps', 'API Development', 'System Integration'']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics tools.',
      benefits: [''Business Intelligence', 'Real-time Dashboards', 'Data Visualization', 'Reporting'']
    },
    {
      icon: Users,
      title: 'Consulting Services',
      description: 'Expert guidance to help you navigate digital transformation and technology adoption.',
      benefits: [''Strategy Planning', 'Technology Assessment', 'Implementation Support', 'Training'']
    },
  ];
  const services = const services = const services = [
    {
      icon: Brain,
      title: 'AI Services',
      description: 'Comprehensive AI solutions including machine learning, natural language processing, and computer vision.',;
      href: '/ai-services',;
      features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics'];
    },
    {
      icon: Cloud,
      title: 'IT Services',
      description: 'Complete IT infrastructure and cloud solutions to modernize your business operations.',
      href: '/it-services',
      features: ['Cloud Migration', 'Infrastructure Management', 'DevOps', 'Monitoring']},
    {icon: Cpu,
      title: 'Micro SaaS',
      description: 'Specialized software-as-a-service solutions designed for specific business needs.',
      href: '/micro-saas',
      features: ['Custom SaaS', 'API Integration', 'Scalable Solutions', 'Maintenance']
    }
  ];
  return (
    <>
      <SEOOptimizer;
        title="Zion Tech Group - Advanced AI and IT Solutions" description="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology."
        keywords={['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services']}
        canonicalUrl="https://ziontechgroup.com"
        structuredData={
          '@context': 'https://schema.org',
          '@type': 'TechCompany',
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
          description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
          foundingDate: '2020',
          numberOfEmployees: '50-100',
          industry: 'Technology',
          services: [,
            'AI Solutions',
            'Quantum Computing',
            'Autonomous Systems',
            'Digital Transformation',
            'Cloud Services',
            'Automation',
            'Business Intelligence'
          ],
          contactPoint: 
            '@type': 'ContactPoint',
            telephone: '+1-302-464-0950',
            contactType: 'Customer Service',
            areaServed: 'US',
            availableLanguage: 'en',},
          address: {,
            '@type': 'PostalAddress',
            streetAddress: '364 E Main St STE 1008',
            addressLocality: 'Middletown',
            addressRegion: 'DE',
            postalCode: '19709',
            addressCountry: 'US'
          }
        }
      />
      <PerformanceOptimizer;
        enableImageOptimization={true}
        enableLazyLoading={true}
        enablePreloading={true}
        enableCodeSplitting={true}

      >
        <AccessibilityEnhancer;
          enableKeyboardNavigation={true}
          enableScreenReaderSupport={true}
          enableHighContrast={true}
          enableFocusManagement={true}
        >
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
            {/* Navigation */}
            </div></div><Navigation />
            
            {/* Skip to main content for accessibility */}
            <a;
              href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50">
              Skip to main content;
            </a>

            {/* Hero Section */}
            <section id="main-content" className="relative pt-20 pb-16 overflow-hidden">
              </section></section><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                </div></div><div className="text-center">
                  </div></div><div className="mb-8">
                    </div></div><div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                      </div></div><Sparkles className="w-4 h-4 mr-2" />
                      Trusted by 500+ Companies Worldwide;
                    </div>
                  </div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                    </h1></h1><span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent neon-text">
                      Advanced AI & IT Solutions;
                    </span></span></span>
                    <br />
                    <span className="text-3xl md:text-5xl lg:text-6xl">
                      for the Future;
                    </span></span></span>
                  </h1>
                  <p className="text-xl md: text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">,</p>
                    Transform your business with cutting-edge artificial intelligence, quantum computing, 
                    and autonomous systems. We deliver enterprise-grade solutions that drive innovation and growth.
                  </p></p></p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    </div></div><a;
                      href="/contact" className="cyber-button text-lg px-8 py-4 inline-flex items-center space-x-2 group"
                      aria-label="Get started with our services">
                      <span>Get Started</span></span></span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a;
                      href="tel:+13024640950"
                      onClick={handlePhoneClick})
                      className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center space-x-2 group")
                      aria-label="Call us at (302) 464-0950">
                      <Phone className="w-5 h-5" />
                      <span>(302) 464-0950</span></span></span>
                    </a>
                  </div>
                  
                  {/* Stats Section */}
                    </div>
                  </div>
                </div>
              </div>

const HomePage: React.FC = memo(() => {,
    const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => 
    preloadComponents();
    setIsLoaded(true)}, []);

  const features = const features = const features = [
    {
      icon: Brain,
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      benefits: [''AWS/Azure/GCP', 'Container Orchestration', 'Auto-scaling', 'Disaster Recovery'']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      benefits: [''Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response'']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your business requirements.',
      benefits: [''Web Applications', 'Mobile Apps', 'API Development', 'System Integration'']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics tools.',
      benefits: [''Business Intelligence', 'Real-time Dashboards', 'Data Visualization', 'Reporting'']
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Expert guidance to help you make the right technology decisions.',
      benefits: [''Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Training'']
    },
  ];
  const stats = const stats = const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },;
    { number: '50+', label: 'Expert Team Members' };
  ];
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed" /></p>
              We help businesses leverage cutting-edge technology to drive growth, 
              improve efficiency, and stay ahead of the competition.

      </main>
    </>
  );
}
      </main>
    </>
  );
}
      </main>
    </>
  );
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* Features Section */}
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
                    Don't just take our word for it. Here's what industry leaders say about our solutions.
                  </p></p></p>
                </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4" /></p>
                      "Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%."
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4" /></p>
                      "Outstanding service and cutting-edge technology. They delivered our project ahead of schedule."
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4" /></p>
                      "The best IT partner we've ever worked with. Their expertise in AI and cloud solutions is unmatched."
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
                  </a>
                </div>
              </div>
            </section>

            {/* Footer */}
            <Footer / /></Footer>
          </div>

        </AccessibilityEnhancer>
      </PerformanceOptimizer>

    </>
  );
}

HomePage.displayName = 'HomePage';

export default HomePage;
