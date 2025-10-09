'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, ArrowRight, Cpu, Cloud, Shield, Database, Network, Settings, Users, Globe, Award, TrendingUp, Zap, Target, BarChart, MessageSquare, Eye, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'Infrastructure Services',
      icon: Cpu,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      services: [
        {
          name: 'IT Infrastructure Management',
          price: '$999/month',
          description: 'Complete IT infrastructure management with 99.9% uptime guarantee and proactive monitoring',
          features: ['Server Management', 'Network Setup', 'Security Hardening', 'Backup Solutions', 'Disaster Recovery', 'Performance Monitoring'],
          benefits: ['99.9% uptime guarantee', 'Proactive monitoring', 'Reduced downtime', 'Cost optimization'],
          link: '/it-infrastructure'
        },
        {
          name: 'Cloud Infrastructure Setup',
          price: '$1,299/month',
          description: 'Cloud infrastructure design, implementation, and optimization across AWS, Azure, and GCP',
          features: ['Cloud Architecture Design', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Auto-scaling', 'Monitoring'],
          benefits: ['Cost savings', 'Improved scalability', 'Enhanced security', 'Global availability'],
          link: '/cloud-services'
        },
        {
          name: 'Network Solutions',
          price: '$1,099/month',
          description: 'Network design, implementation, monitoring, and optimization for enterprise environments',
          features: ['Network Design', 'Implementation', 'Monitoring', 'Troubleshooting', 'Security Hardening', 'Performance Optimization'],
          benefits: ['Reliable connectivity', 'Enhanced security', 'Optimized performance', 'Reduced latency'],
          link: '/networking'
        },
        {
          name: 'Data Center Services',
          price: '$1,599/month',
          description: 'Complete data center management including hardware, power, cooling, and security',
          features: ['Hardware Management', 'Power & Cooling', 'Physical Security', 'Environmental Monitoring', 'Maintenance', 'Compliance'],
          benefits: ['Maximum uptime', 'Energy efficiency', 'Physical security', 'Compliance assurance'],
          link: '/data-center-services'
        }
      ]
    },
    {
      title: 'Security Services',
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      services: [
        {
          name: 'Cybersecurity Solutions',
          price: '$1,599/month',
          description: 'Comprehensive cybersecurity solutions with threat detection, prevention, and incident response',
          features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Compliance', 'Security Training'],
          benefits: ['Enhanced security posture', 'Compliance assurance', 'Risk mitigation', '24/7 monitoring'],
          link: '/cybersecurity'
        },
        {
          name: 'Security Audit & Assessment',
          price: '$2,499/month',
          description: 'Comprehensive security audits and assessments to identify vulnerabilities and compliance gaps',
          features: ['Security Audits', 'Penetration Testing', 'Compliance Assessment', 'Risk Analysis', 'Remediation Planning', 'Follow-up Testing'],
          benefits: ['Risk identification', 'Compliance validation', 'Security improvement', 'Peace of mind'],
          link: '/security-audit'
        },
        {
          name: 'Identity & Access Management',
          price: '$899/month',
          description: 'Secure identity and access management solutions with multi-factor authentication and single sign-on',
          features: ['Single Sign-On (SSO)', 'Multi-Factor Authentication', 'Identity Provisioning', 'Access Control', 'Audit Logging', 'Compliance'],
          benefits: ['Enhanced security', 'Improved user experience', 'Centralized management', 'Compliance'],
          link: '/identity-access-management'
        },
        {
          name: 'Data Protection & Backup',
          price: '$799/month',
          description: 'Comprehensive data protection and backup solutions with disaster recovery capabilities',
          features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Compliance', 'Testing', 'Monitoring'],
          benefits: ['Data security', 'Business continuity', 'Compliance', 'Peace of mind'],
          link: '/data-protection'
        }
      ]
    },
    {
      title: 'Development & DevOps',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      services: [
        {
          name: 'DevOps & CI/CD',
          price: '$1,199/month',
          description: 'Streamlined development workflows with automated testing, deployment, and monitoring',
          features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'Version Control'],
          benefits: ['Faster deployments', 'Improved quality', 'Reduced errors', 'Better collaboration'],
          link: '/devops'
        },
        {
          name: 'Application Development',
          price: '$1,499/month',
          description: 'Custom application development using modern technologies and best practices',
          features: ['Custom Development', 'API Development', 'Database Design', 'UI/UX Design', 'Testing', 'Deployment'],
          benefits: ['Tailored solutions', 'Modern technology', 'Scalable architecture', 'Ongoing support'],
          link: '/application-development'
        },
        {
          name: 'API Development & Integration',
          price: '$999/month',
          description: 'API development and integration services to connect systems and enable data flow',
          features: ['API Design', 'RESTful APIs', 'GraphQL APIs', 'Integration', 'Documentation', 'Testing'],
          benefits: ['System connectivity', 'Data flow', 'Scalability', 'Documentation'],
          link: '/api-development'
        },
        {
          name: 'Mobile App Development',
          price: '$1,799/month',
          description: 'Native and cross-platform mobile application development for iOS and Android',
          features: ['Native Development', 'Cross-platform', 'UI/UX Design', 'Testing', 'App Store Deployment', 'Maintenance'],
          benefits: ['Mobile presence', 'User engagement', 'Cross-platform', 'Ongoing support'],
          link: '/mobile-app-development'
        }
      ]
    },
    {
      title: 'Database & Analytics',
      icon: Database,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      services: [
        {
          name: 'Database Services',
          price: '$899/month',
          description: 'Database design, optimization, and management with AI-powered tuning and monitoring',
          features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'AI Optimization', 'Monitoring'],
          benefits: ['Improved performance', 'Data security', 'Automated optimization', 'Reliability'],
          link: '/database'
        },
        {
          name: 'Data Analytics & BI',
          price: '$1,299/month',
          description: 'Business intelligence and data analytics solutions to turn data into actionable insights',
          features: ['Data Warehousing', 'ETL Processes', 'Analytics Dashboards', 'Reporting', 'Data Visualization', 'Predictive Analytics'],
          benefits: ['Data-driven decisions', 'Business insights', 'Competitive advantage', 'Improved efficiency'],
          link: '/business-intelligence'
        },
        {
          name: 'Data Migration Services',
          price: '$1,999/month',
          description: 'Secure and efficient data migration services with minimal downtime and data integrity',
          features: ['Data Assessment', 'Migration Planning', 'Data Transfer', 'Validation', 'Testing', 'Go-live Support'],
          benefits: ['Seamless migration', 'Data integrity', 'Minimal downtime', 'Risk mitigation'],
          link: '/data-migration'
        },
        {
          name: 'Big Data Solutions',
          price: '$2,499/month',
          description: 'Big data processing and analytics solutions for large-scale data operations',
          features: ['Hadoop Setup', 'Spark Processing', 'Data Lakes', 'Real-time Analytics', 'Machine Learning', 'Scalability'],
          benefits: ['Large-scale processing', 'Real-time insights', 'Scalability', 'Advanced analytics'],
          link: '/big-data-solutions'
        }
      ]
    },
    {
      title: 'Support & Maintenance',
      icon: Settings,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      services: [
        {
          name: 'IT Support & Helpdesk',
          price: '$599/month',
          description: '24/7 IT support and helpdesk services with guaranteed response times',
          features: ['24/7 Support', 'Helpdesk Management', 'Remote Support', 'On-site Support', 'SLA Guarantee', 'Knowledge Base'],
          benefits: ['Quick resolution', 'Minimal downtime', 'User satisfaction', 'Cost efficiency'],
          link: '/it-support'
        },
        {
          name: 'System Administration',
          price: '$799/month',
          description: 'Complete system administration services including user management, updates, and maintenance',
          features: ['User Management', 'System Updates', 'Performance Monitoring', 'Security Updates', 'Backup Management', 'Documentation'],
          benefits: ['System reliability', 'Security', 'Performance', 'Compliance'],
          link: '/system-administration'
        },
        {
          name: 'IT Consulting',
          price: '$1,499/month',
          description: 'Strategic IT consulting services to align technology with business objectives',
          features: ['IT Strategy', 'Technology Assessment', 'Roadmap Planning', 'Vendor Selection', 'Implementation Planning', 'Change Management'],
          benefits: ['Strategic alignment', 'Technology optimization', 'Cost reduction', 'Competitive advantage'],
          link: '/it-consulting'
        },
        {
          name: 'IT Training & Certification',
          price: '$399/month',
          description: 'Comprehensive IT training and certification programs for your team',
          features: ['Technical Training', 'Certification Programs', 'Hands-on Labs', 'Assessment', 'Progress Tracking', 'Certification Support'],
          benefits: ['Skill development', 'Certification', 'Productivity', 'Retention'],
          link: '/it-training'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 250% ROI with measurable business impact and cost savings across all IT implementations'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all IT solutions with SOC 2 Type II certification'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock IT support and monitoring with guaranteed response times and SLA compliance'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified IT professionals with extensive experience in enterprise technology solutions'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide IT support and services with localized expertise and multi-language capabilities'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Award-winning IT solutions and recognition from leading technology organizations'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'TechCorp Solutions',
      role: 'CTO',
      content: 'The IT infrastructure management service has been outstanding. We\'ve achieved 99.9% uptime and reduced our IT costs by 40%.',
      rating: 5
    },
    {
      name: 'David Kim',
      company: 'DataFlow Inc.',
      role: 'IT Director',
      content: 'The cybersecurity solutions provided comprehensive protection. We passed our compliance audit with flying colors.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'CloudFirst Ltd.',
      role: 'VP of Technology',
      content: 'The DevOps implementation transformed our development process. We now deploy 5x faster with zero downtime.',
      rating: 5
    }
  ];

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    hours: 'Mon-Fri: 9AM-6PM EST'
  };

  return (
    <>
      <SEOOptimizer
        title="IT Services - Zion Tech Group | Comprehensive IT Solutions"
        description="Professional IT services including infrastructure management, cybersecurity, DevOps, database services, and 24/7 support. Transform your IT operations with our expert solutions. Starting at $399/month."
        keywords={['IT services', 'IT infrastructure', 'cybersecurity', 'DevOps', 'database services', 'IT support', 'cloud services', 'system administration']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
                IT Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT services and solutions designed to optimize your technology infrastructure, 
              enhance security, and drive business growth. From infrastructure management to cybersecurity, 
              we provide end-to-end IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#pricing"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                View Our Services
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section id="pricing" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Our IT Service Categories
            </h2>
            <div className="space-y-16">
              {serviceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 cyber-card">
                  <div className="flex items-center mb-8">
                    <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center mr-6`}>
                      <category.icon className={`w-8 h-8 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-gray-300">Professional IT solutions for your business needs</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card group">
                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.name}</h4>
                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                        
                        {/* Features */}
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h5>
                          <ul className="space-y-1">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                                <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits */}
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h5>
                          <ul className="space-y-1">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                                <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                          <a
                            href={service.link}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center gap-2"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Why Choose Our IT Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cyber-card group">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Client Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 cyber-card text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your IT Operations?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Contact us for a free IT assessment and discover how our services can optimize your technology infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${contactInfo.email}?subject=IT Services Consultation Request`}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all flex items-center justify-center gap-2"
                >
                  <Cpu className="w-5 h-5" />
                  Get Free Assessment
                </a>
                <a
                  href="tel:+13024640950"
                  className="bg-transparent border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ITServicesPage;