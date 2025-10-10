'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Building, Users, Shield, Globe, Brain, Cloud, Code, BarChart, Zap, ArrowRight, Star, Award, Target, Clock, Settings, Lock, Database, Smartphone, Eye, Sparkles } from 'lucide-react';
const EnterprisePage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions designed for large-scale enterprise environments.',
      benefits: ['Advanced threat protection', 'Compliance management', 'Data encryption', 'Access control']},
    {icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions that grow with your business needs.',
      benefits: ['Auto-scaling', 'High availability', 'Disaster recovery', 'Cost optimization']},
    {icon: Brain,
      title: 'AI Integration',
      description: 'Enterprise-grade AI solutions for automation and intelligent decision making.',
      benefits: ['Machine learning', 'Predictive analytics', 'Process automation', 'Intelligent insights']},
    {icon: Database,
      title: 'Data Management',
      description: 'Advanced data management and analytics for enterprise-scale operations.',
      benefits: ['Big data processing', 'Real-time analytics', 'Data governance', 'Business intelligence']},
    {icon: Users,
      title: 'User Management',
      description: 'Comprehensive user and access management for large organizations.',
      benefits: ['Single sign-on', 'Role-based access', 'User provisioning', 'Audit trails']},
    {icon: Settings,
      title: 'System Integration',
      description: 'Seamless integration with existing enterprise systems and workflows.',
      benefits: ['API integration', 'Legacy system support', 'Workflow automation', 'Data synchronization']}]
const solutions = [
    {title: 'Enterprise Resource Planning',
      description: 'Comprehensive ERP solutions that streamline business processes and improve efficiency.',
      icon: Building,
      benefits: ['Financial management', 'Supply chain optimization', 'Human resources', 'Project management']},
    {title: 'Customer Relationship Management',
      description: 'Advanced CRM systems for managing customer relationships and sales processes.',
      icon: Users,
      benefits: ['Lead management', 'Sales automation', 'Customer analytics', 'Marketing automation']},
    {title: 'Business Intelligence',
      description: 'Powerful BI solutions for data-driven decision making and strategic planning.',
      icon: BarChart,
      benefits: ['Data visualization', 'Predictive analytics', 'Reporting', 'Performance monitoring']},
    {title: 'Workflow Automation',
      description: 'Automate complex business processes to improve efficiency and reduce errors.',
      icon: Zap,
      benefits: ['Process automation', 'Task management', 'Approval workflows', 'Document management']}]
const benefits = [
    'Reduce operational costs by 30%',
    'Improve productivity by 50%',
    'Enhance security and compliance',
    'Streamline business processes',

    'Enable data-driven decisions',

    'Scale with business growth',

    'Integrate with existing systems',

    'Provide 24/7 support and monitoring'
  ]
const stats = [
    {number: '500+', label: 'Enterprise Clients', icon: Building ,},
    {number: '99.9%', label: 'Uptime Guarantee', icon: Shield ,},
    {number: '50%', label: 'Cost Reduction', icon: TrendingUp ,},
    {number: '24/7', label: 'Support Available', icon: Clock ,}]
return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>)
      <SEOOptimizer>
      <Navigation />
      {/* Hero Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" /></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} /></div>
        <div className="relative max-w-7xl mx-auto text-center"></div>
          <h1>
            Enterprise</h1>
            <span>Solutions;</span>
            </span>
          </h1>
          <p>Comprehensive enterprise-grade solutions designed for large-scale business operations.;</p>
            Transform your organization with cutting-edge technology and expert implementation.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
            <button>Get Enterprise Consultation;</button>
              <ArrowRight>
            </button>
            <button>View Case Studies,</button>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8"></div>,
            {stats.map((stat, index) => (} <div key={index}className="text-center"></div>
                <div className="flex justify-center mb-4"></div>
                  <stat />
                <div className="text-3xl font-bold text-white mb-2">{stat.number</div>}</div>
                <div className="text-gray-300 text-sm">{stat.label</div>}</div>
              </div>
            ))}

          </div>
        </div>
      </section>
      {/* Features Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2>Enterprise-Grade Features;</h2>
            </h2>
            <p>Built for scale, security, and performance to meet the demands of large organizations.</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div>,
                  <feature>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description</p>}</p>
                <ul>
                  {feature.benefits.map((benefit, idx) => (} <li>
                      <CheckCircle />

                      {benefit} </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </section>
            <h2>Comprehensive Solutions;</h2>
            </h2>
            <p>End-to-end enterprise solutions that address every aspect of your business operations.</p>
            </p>
          </div>
                    </li>

                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </section>
      {/* Benefits Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2>Ready to Transform Your Enterprise?</h2>
          </h2>
          <p>Join hundreds of enterprise clients who trust our solutions for their mission-critical operations.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
            <button>Contact Enterprise Sales;</button>
              <ArrowRight>
            </button>
            <button>Learn More;</button>
            </button>
          </div>
        </div>
      </section>
      <Footer />
  ),
};

export default EnterprisePage;

