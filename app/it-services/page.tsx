'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, 
  Shield, 
  Database, 
  Server, 
  Network, 
  Smartphone, 
  Monitor, 
  Code, 
  Lock, 
  BarChart, 
  Users, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Brain,
  Target,
  TrendingUp,
  Award,
  Sparkles,
  Globe,
  Settings,
  HardDrive,
  Wifi,
  Cpu
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Solutions',
      description: 'Comprehensive cloud migration, management, and optimization services for scalable, secure, and cost-effective infrastructure.',
      features: [
        'AWS, Azure, GCP expertise',
        'Cloud migration strategy',
        'Cost optimization',
        'Security hardening',
        '24/7 monitoring',
        'Disaster recovery'
      ],
      pricing: {
        consultation: { price: 150, period: 'hour', features: ['Initial assessment', 'Strategy planning', 'Cost analysis'] },
        migration: { price: 5000, period: 'project', features: ['Full migration', 'Testing', 'Go-live support'] },
        managed: { price: 2000, period: 'month', features: ['24/7 monitoring', 'Maintenance', 'Support'] }
      },
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      popular: true
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Services',
      description: 'Advanced security solutions to protect your business from evolving cyber threats with comprehensive monitoring and response.',
      features: [
        'Security assessment',
        'Penetration testing',
        'Vulnerability scanning',
        'Incident response',
        'Security training',
        'Compliance support'
      ],
      pricing: {
        assessment: { price: 3000, period: 'project', features: ['Security audit', 'Risk analysis', 'Recommendations'] },
        monitoring: { price: 1500, period: 'month', features: ['24/7 monitoring', 'Threat detection', 'Response'] },
        managed: { price: 2500, period: 'month', features: ['Full security suite', 'Training', 'Compliance'] }
      },
      icon: Shield,
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'devops-automation',
      name: 'DevOps & Automation',
      description: 'Streamline development workflows with CI/CD pipelines, infrastructure as code, and automated deployment solutions.',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Container orchestration',
        'Monitoring & logging',
        'Automated testing',
        'Performance optimization'
      ],
      pricing: {
        setup: { price: 4000, period: 'project', features: ['Pipeline setup', 'Tool configuration', 'Training'] },
        maintenance: { price: 1200, period: 'month', features: ['Pipeline maintenance', 'Updates', 'Support'] },
        full: { price: 3000, period: 'month', features: ['Full DevOps suite', '24/7 support', 'Optimization'] }
      },
      icon: Code,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'database-management',
      name: 'Database Management',
      description: 'Expert database design, optimization, and management services for improved performance and reliability.',
      features: [
        'Database design',
        'Performance tuning',
        'Backup & recovery',
        'Data migration',
        'Security hardening',
        'Monitoring & maintenance'
      ],
      pricing: {
        design: { price: 2000, period: 'project', features: ['Database design', 'Schema optimization', 'Documentation'] },
        maintenance: { price: 800, period: 'month', features: ['Performance tuning', 'Backup management', 'Monitoring'] },
        managed: { price: 1500, period: 'month', features: ['Full management', '24/7 support', 'Optimization'] }
      },
      icon: Database,
      color: 'from-purple-500 to-violet-600'
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      description: 'Design, implement, and maintain robust network infrastructure for optimal connectivity and security.',
      features: [
        'Network design',
        'Hardware installation',
        'Security configuration',
        'Performance optimization',
        'Monitoring setup',
        'Troubleshooting'
      ],
      pricing: {
        design: { price: 2500, period: 'project', features: ['Network design', 'Hardware selection', 'Implementation plan'] },
        installation: { price: 100, period: 'hour', features: ['Hardware installation', 'Configuration', 'Testing'] },
        managed: { price: 1000, period: 'month', features: ['24/7 monitoring', 'Maintenance', 'Support'] }
      },
      icon: Network,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'mobile-development',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development with modern frameworks and best practices.',
      features: [
        'iOS & Android apps',
        'Cross-platform solutions',
        'UI/UX design',
        'API integration',
        'App store deployment',
        'Maintenance & updates'
      ],
      pricing: {
        native: { price: 15000, period: 'project', features: ['Native iOS/Android', 'UI/UX design', 'Testing'] },
        cross: { price: 12000, period: 'project', features: ['Cross-platform', 'UI/UX design', 'Testing'] },
        maintenance: { price: 2000, period: 'month', features: ['Updates', 'Bug fixes', 'Support'] }
      },
      icon: Smartphone,
      color: 'from-indigo-500 to-blue-600'
    },
    {
      id: 'web-development',
      name: 'Web Development',
      description: 'Modern, responsive web applications with cutting-edge technologies and optimal performance.',
      features: [
        'Responsive design',
        'Modern frameworks',
        'Performance optimization',
        'SEO optimization',
        'Security implementation',
        'Maintenance & support'
      ],
      pricing: {
        frontend: { price: 8000, period: 'project', features: ['Frontend development', 'Responsive design', 'Testing'] },
        fullstack: { price: 15000, period: 'project', features: ['Full-stack development', 'Database design', 'Deployment'] },
        maintenance: { price: 1500, period: 'month', features: ['Updates', 'Security patches', 'Support'] }
      },
      icon: Monitor,
      color: 'from-teal-500 to-cyan-600'
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence solutions.',
      features: [
        'Data visualization',
        'Dashboard creation',
        'Predictive analytics',
        'Data warehousing',
        'ETL processes',
        'Custom reporting'
      ],
      pricing: {
        dashboard: { price: 5000, period: 'project', features: ['Dashboard creation', 'Data integration', 'Training'] },
        analytics: { price: 8000, period: 'project', features: ['Advanced analytics', 'ML models', 'Reporting'] },
        managed: { price: 2000, period: 'month', features: ['Data management', 'Report generation', 'Support'] }
      },
      icon: BarChart,
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const certifications = [
    { name: 'AWS Certified Solutions Architect', provider: 'Amazon Web Services' },
    { name: 'Microsoft Azure Solutions Architect', provider: 'Microsoft' },
    { name: 'CISSP - Certified Information Systems Security Professional', provider: 'ISC2' },
    { name: 'CISM - Certified Information Security Manager', provider: 'ISACA' },
    { name: 'PMP - Project Management Professional', provider: 'PMI' },
    { name: 'ITIL Foundation', provider: 'AXELOS' }
  ];

  const testimonials = [
    {
      name: 'David Thompson',
      company: 'Enterprise Solutions Corp.',
      content: 'Zion Tech Group migrated our entire infrastructure to AWS, reducing costs by 40% while improving performance. Exceptional service.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'Healthcare Systems Inc.',
      content: 'Their cybersecurity services helped us achieve HIPAA compliance and protect our sensitive patient data. Highly recommended.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      company: 'FinTech Startup',
      content: 'The DevOps automation they implemented reduced our deployment time from hours to minutes. Game-changing for our development process.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services & Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, DevOps, database management, and custom development solutions." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, DevOps, database management, web development, mobile development" />
        <meta property="og:title" content="IT Services & Solutions - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive IT services. From cloud migration to cybersecurity, we provide end-to-end technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text-enhanced">
              IT Services & Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Comprehensive Technology Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              From cloud infrastructure to cybersecurity, we provide end-to-end IT services that drive innovation, 
              enhance security, and optimize performance for businesses of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                <Phone className="inline-block mr-2" size={20} />
                Call Now: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                <Mail className="inline-block mr-2" size={20} />
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Our IT Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div 
                  key={service.id}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  )}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Pricing:</h4>
                    <div className="space-y-2">
                      {Object.entries(service.pricing).map(([plan, details]) => (
                        <div key={plan} className="flex justify-between items-center">
                          <span className="text-gray-300 capitalize">{plan}:</span>
                          <span className="text-white font-semibold">
                            ${details.price}/{details.period}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a 
                    href={`https://ziontechgroup.com/${service.id}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-center block"
                  >
                    Learn More <ArrowRight className="inline-block ml-2" size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Our Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-yellow-400 mr-3" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                      <p className="text-cyan-400 text-sm">{cert.provider}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              Client Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Award key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let our certified experts help you build a robust, secure, and scalable technology foundation for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                <Phone className="inline-block mr-2" size={20} />
                Call: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                <Mail className="inline-block mr-2" size={20} />
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p className="flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-2" />
                364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .neon-text {
          text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
        }
        .cyber-text-enhanced {
          background: linear-gradient(45deg, #00ffff, #ff00ff, #ffff00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .neon-glow {
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default ITServicesPage;