'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

import StructuredData from './components/StructuredData';

import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

ServiceCardSkeleton.displayName = 'ServiceCardSkeleton',

const HomePage: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => 
    setIsLoaded(true);
    // Trigger visibility animation;
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer)
  }, []);

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
                    </a>
                  </div>
                  
                  {/* Stats Section */}
                    </div>
                  </div>
                </div>
              </div>

const HomePage: React.FC = memo(() => {
    const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => 
    preloadComponents();
    setIsLoaded(true)
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
