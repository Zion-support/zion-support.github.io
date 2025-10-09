'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'Infrastructure Services',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      services: [
        { 
          name: 'Cloud Migration & Setup', 
          price: '$1,299/month', 
          description: 'Complete cloud migration and infrastructure setup',
          features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration'],
          benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability', 'Enhance security', 'Enable remote work']
        },
        { 
          name: 'IT Infrastructure Management', 
          price: '$999/month', 
          description: 'Enterprise-grade IT infrastructure with 99.9% uptime',
          features: ['Server Management', 'Network Setup', 'Security Hardening', 'Backup Solutions'],
          benefits: ['99.9% uptime guarantee', '24/7 monitoring', 'Proactive maintenance', 'Cost optimization']
        },
        { 
          name: 'Network Solutions', 
          price: '$1,099/month', 
          description: 'Network design, implementation, and monitoring',
          features: ['Network Design', 'Implementation', 'Monitoring', 'Troubleshooting'],
          benefits: ['Optimize network performance', 'Reduce downtime', 'Improve security', 'Scale with growth']
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
          name: 'Cybersecurity Suite', 
          price: '$1,599/month', 
          description: 'Comprehensive security solutions with threat detection',
          features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
          benefits: ['Protect against 99.9% of threats', 'Reduce security incidents by 70%', 'Ensure compliance', '24/7 protection']
        },
        { 
          name: 'Data Protection & Backup', 
          price: '$799/month', 
          description: 'Secure data backup and disaster recovery solutions',
          features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Compliance'],
          benefits: ['Protect critical data', 'Minimize downtime', 'Ensure compliance', 'Peace of mind']
        },
        { 
          name: 'Security Training', 
          price: '$299/month', 
          description: 'Employee security awareness and training programs',
          features: ['Security Training', 'Phishing Simulation', 'Compliance Training', 'Assessment'],
          benefits: ['Reduce human error', 'Improve security culture', 'Meet compliance requirements', 'Prevent breaches']
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
          description: 'Streamlined development workflows with automation',
          features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring'],
          benefits: ['Accelerate development', 'Improve quality', 'Reduce deployment time', 'Increase reliability']
        },
        { 
          name: 'Database Services', 
          price: '$899/month', 
          description: 'Database design, optimization, and management',
          features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security'],
          benefits: ['Optimize performance', 'Ensure data integrity', 'Improve security', 'Reduce costs']
        },
        { 
          name: 'API Development', 
          price: '$699/month', 
          description: 'Custom API development and integration services',
          features: ['API Design', 'Development', 'Documentation', 'Integration'],
          benefits: ['Enable integrations', 'Improve efficiency', 'Enhance user experience', 'Scale operations']
        }
      ]
    },
    {
      title: 'Support & Consulting',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      services: [
        { 
          name: 'Managed IT Services', 
          price: '$1,499/month', 
          description: 'Complete IT management and support services',
          features: ['24/7 Support', 'Proactive Monitoring', 'Maintenance', 'Help Desk'],
          benefits: ['Reduce IT burden', 'Improve uptime', 'Lower costs', 'Focus on business']
        },
        { 
          name: 'IT Consulting', 
          price: '$2,500/month', 
          description: 'Strategic IT planning and digital transformation',
          features: ['IT Strategy', 'Technology Assessment', 'Digital Transformation', 'Change Management'],
          benefits: ['Align IT with business goals', 'Optimize technology investments', 'Improve efficiency', 'Drive innovation']
        },
        { 
          name: 'IT Training', 
          price: '$399/month', 
          description: 'Staff training and certification programs',
          features: ['Technical Training', 'Certification Programs', 'Skill Assessment', 'Custom Curriculum'],
          benefits: ['Improve team skills', 'Increase productivity', 'Reduce support needs', 'Career development']
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 250% ROI with measurable business impact and cost savings'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all solutions and data'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring for all services'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class engineers and IT professionals with proven track records'
    }
  ];

  const technologies = [
    'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform',
    'Ansible', 'Jenkins', 'GitLab CI', 'Prometheus', 'Grafana', 'ELK Stack',
    'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Apache Kafka', 'RabbitMQ',
    'Nginx', 'Apache', 'HAProxy', 'Varnish', 'CDN', 'Load Balancers'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, and infrastructure management. Enterprise-grade solutions starting at $299/month." />
        <meta name="keywords" content="it services, cloud migration, cybersecurity, devops, infrastructure management, it consulting, managed it services" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to modernize your infrastructure, enhance security, 
            and accelerate your digital transformation journey.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">250%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-gray-300">Technologies</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 cyber-card">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            IT Service Categories
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                      
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
                        <h5 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h5>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                              <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <a
                          href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                          className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                        >
                          Get Started
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cyber-card">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Technologies & Platforms
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our IT services today and modernize your technology stack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;