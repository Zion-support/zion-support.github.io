'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

import StructuredData from './components/StructuredData';

import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => ()
))
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton',

const HomePage: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer)
  }, []);

  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = const handlePhoneClick = useCallback(() => {;
    if (typeof window !== 'undefined' && 'gtag' in window) {;
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      gtag()
      })
    }
  }, []);

  const features = const features = const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',;
      description: 'Cutting-edge artificial intelligence solutions that transform your business operations.',;
      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'];
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      benefits: ['AWS/Azure/GCP', 'Container Orchestration', 'Auto-scaling', 'Disaster Recovery']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      benefits: ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your business requirements.',
      benefits: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics tools.',
      benefits: ['Business Intelligence', 'Real-time Dashboards', 'Data Visualization', 'Reporting']
    },
    {
      icon: Users,
      title: 'Consulting Services',
      description: 'Expert guidance to help you navigate digital transformation and technology adoption.',
      benefits: ['Strategy Planning', 'Technology Assessment', 'Implementation Support', 'Training']
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
      features: ['Cloud Migration', 'Infrastructure Management', 'DevOps', 'Monitoring']
    },
    {
      icon: Cpu,
      title: 'Micro SaaS',
      description: 'Specialized software-as-a-service solutions designed for specific business needs.',
      href: '/micro-saas',
      features: ['Custom SaaS', 'API Integration', 'Scalable Solutions', 'Maintenance']
    }
  ];
  return ()
                      aria-label="Call us at (302) 464-0950"></a>
                      <Phone className="w-5 h-5" / /></Phone>
                      <span>(302) 464-0950</span>
                    </a>
                  </div>
                  
                  {/* Stats Section */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto" /></div>
                    <div className="text-center" /></div>
                      <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
                      <div className="text-sm text-gray-300">Projects Delivered</div>
                    </div>
                    <div className="text-center" /></div>
                      <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                      <div className="text-sm text-gray-300">Uptime Guarantee</div>
                    </div>
                    <div className="text-center" /></div>
                      <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                      <div className="text-sm text-gray-300">Support Available</div>
                    </div>
                    <div className="text-center" /></div>
                      <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">5★</div>
                      <div className="text-sm text-gray-300">Client Rating</div>
                    </div>
                  </div>
                </div>
              </div>

const HomePage: React.FC = memo(() => {
    const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    preloadComponents();
    setIsLoaded(true)
  }, []);

  const features = const features = const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',;
      description: 'Cutting-edge artificial intelligence solutions that transform your business operations.',;
      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'];
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      benefits: ['AWS/Azure/GCP', 'Container Orchestration', 'Auto-scaling', 'Disaster Recovery']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      benefits: ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your business requirements.',
      benefits: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics tools.',
      benefits: ['Business Intelligence', 'Real-time Dashboards', 'Data Visualization', 'Reporting']
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Expert guidance to help you make the right technology decisions.',
      benefits: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Training']
    },
  ];
  const stats = const stats = const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },;
    { number: '50+', label: 'Expert Team Members' };
  ];
  return ()
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" aria-hidden="true" / /></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" / /></div>
          <div className="relative max-w-7xl mx-auto text-center" /></div>
            <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" /></h1>
              Transform Your Business with
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> AI & IT Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed" /></p>
              We help businesses leverage cutting-edge technology to drive growth, 
              improve efficiency, and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
            </section>

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
}, {/* Services Section */}
            <section className="py-20 bg-slate-800/50 backdrop-blur-sm" /></section>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" /></div>
                <div className="text-center mb-16" /></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" /></h2>
                    Our Core Services
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
                    Comprehensive technology solutions designed to accelerate your digital transformation
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" /></div>
                  {services.map((service, index) => ()
                          {service.features.map((feature, featureIndex) => ()
                          ))}
                        </div>
                        <a href={service.href}
                          className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform" /></a>
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4" / /></ArrowRight>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* Features Section */}
            <section className="py-20" /></section>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" /></div>
                <div className="text-center mb-16" /></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" /></h2>
                    Why Choose Zion Tech Group?
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
                    We combine cutting-edge technology with deep industry expertise to deliver exceptional results
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" /></div>
                  {features.map((feature, index) => ()
                          {feature.benefits.map((benefit, benefitIndex) => ()
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-slate-900/50" /></section>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" /></div>
                <div className="text-center mb-16" /></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" /></h2>
                    What Our Clients Say
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
                    Don't just take our word for it. Here's what industry leaders say about our solutions.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" /></div>
                  <div className="cyber-card" /></div>
                    <div className="flex items-center mb-4" /></div>
                      <div className="flex text-yellow-400" /></div>
                        {[...Array(5)].map((_, i) => ()
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4" /></p>
                      "Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%."
                    </p>
                    <div className="flex items-center" /></div>
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3" /></div>
                        JS
                      </div>
                      <div></div>
                        <div className="text-white font-semibold">John Smith</div>
                        <div className="text-sm text-gray-400">CEO, TechCorp</div>
                      </div>
                    </div>
                  </div>
                  <div className="cyber-card" /></div>
                    <div className="flex items-center mb-4" /></div>
                      <div className="flex text-yellow-400" /></div>
                        {[...Array(5)].map((_, i) => ()
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4" /></p>
                      "Outstanding service and cutting-edge technology. They delivered our project ahead of schedule."
                    </p>
                    <div className="flex items-center" /></div>
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-3" /></div>
                        MJ
                      </div>
                      <div></div>
                        <div className="text-white font-semibold">Maria Johnson</div>
                        <div className="text-sm text-gray-400">CTO, InnovateLabs</div>
                      </div>
                    </div>
                  </div>
                  <div className="cyber-card" /></div>
                    <div className="flex items-center mb-4" /></div>
                      <div className="flex text-yellow-400" /></div>
                        {[...Array(5)].map((_, i) => ()
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4" /></p>
                      "The best IT partner we've ever worked with. Their expertise in AI and cloud solutions is unmatched."
                    </p>
                    <div className="flex items-center" /></div>
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold mr-3" /></div>
                        DW
                      </div>
                      <div></div>
                        <div className="text-white font-semibold">David Wilson</div>
                        <div className="text-sm text-gray-400">VP Engineering, DataFlow</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600" /></section>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" /></div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" /></h2>
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto" /></p>
                  Let's discuss how our AI and IT solutions can drive your digital transformation and accelerate growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" /></div>
                  <a href="/contact"
                    className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group" /></a>
                    <span>Start Your Project</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" / /></ArrowRight>
                  </a>
                  <a href="tel:+13024640950"
                    onClick={handlePhoneClick}
                    className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2" /></a>
                    <Phone className="w-5 h-5" / /></Phone>
                    <span>(302) 464-0950</span>
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
