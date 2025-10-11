'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Building, Users, Shield, Globe, Brain, Cloud, Code, BarChart, Zap, ArrowRight, Star, Award, Target, Clock, Settings, Lock, Database, Smartphone, Eye, Sparkles } from 'lucide-react';
const EnterprisePage: React.FC = () => {
  },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions that grow with your business needs.',
      benefits: [''Auto-scaling', 'High availability', 'Disaster recovery', 'Cost optimization'']
  },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Enterprise-grade AI solutions for automation and intelligent decision making.',
      benefits: [''Machine learning', 'Predictive analytics', 'Process automation', 'Intelligent insights'']
  },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Advanced data management and analytics for enterprise-scale operations.',
      benefits: [''Big data processing', 'Real-time analytics', 'Data governance', 'Business intelligence'']
  },
    {
      icon: Users,
      title: 'User Management',
      description: 'Comprehensive user and access management for large organizations.',
      benefits: [''Single sign-on', 'Role-based access', 'User provisioning', 'Audit trails'']
  },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Seamless integration with existing enterprise systems and workflows.',
      benefits: [''API integration', 'Legacy system support', 'Workflow automation', 'Data synchronization'']
  },
  ];
const solutions = const solutions = const solutions = [
    {
  },
    {
      title: 'Customer Relationship Management',
      description: 'Advanced CRM systems for managing customer relationships and sales processes.',
      icon: Users,
      benefits: [''Lead management', 'Sales automation', 'Customer analytics', 'Marketing automation'']
  },
    {
      title: 'Business Intelligence',
      description: 'Powerful BI solutions for data-driven decision making and strategic planning.',
      icon: BarChart,
      benefits: [''Data visualization', 'Predictive analytics', 'Reporting', 'Performance monitoring'']
  },
    {
      title: 'Workflow Automation',
      description: 'Automate complex business processes to improve efficiency and reduce errors.',
      icon: Zap,
      benefits: [''Process automation', 'Task management', 'Approval workflows', 'Document management'']
  }
  ];
const benefits = const benefits = const benefits = [
    'Reduce operational costs by 30%',
    'Improve productivity by 50%',
    'Enhance security and compliance',
    'Streamline business processes',

    'Enable data-driven decisions',

    'Scale with business growth',

    'Integrate with existing systems',;
;
    'Provide 24/7 support and monitoring';
  ];
const stats = const stats = const stats = [
    { number: '500+', label: 'Enterprise Clients', icon: Building },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '50%', label: 'Cost Reduction', icon: TrendingUp },;
    { number: '24/7', label: 'Support Available', icon: Clock };
  ];
          </h1>
          <p></p>
            Comprehensive enterprise-grade solutions designed for large-scale business operations.;
            Transform your organization with cutting-edge technology and expert implementation.
            </button>
            <button></button>
              View Case Studies,
            </button></button></button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
            ))}

          </div>
        </div>
      </section>
      {/* Features Section */}
              Built for scale, security, and performance to meet the demands of large organizations.
            </p></p></p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div></div></div>
                  <feature>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3></h3></h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p></p></p>
                <ul>
                  {feature.benefits.map((benefit, idx) => (} <li>
                      <CheckCircle />

                      {benefit})
                    </li>)
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </section>
              End-to-end enterprise solutions that address every aspect of your business operations.
            </p></p></p>
          </div>
                    </li>

                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </section>
      {/* Benefits Section */}
            </div>
          </div>
        </section>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
          </div>
        </div>
      </section>
      <Footer / /></Footer>
  ),
};

export default EnterprisePage;
