'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, 
  Shield, 
  Database, 
  Settings, 
  Globe, 
  Smartphone, 
  BarChart, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Shield as SecurityIcon,
  TrendingUp,
  Globe as NetworkIcon,
  Settings as ConfigIcon
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ItServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud solutions with 99.9% uptime guarantee, auto-scaling, and multi-cloud orchestration.',
      features: ['99.9% Uptime SLA', 'Auto-scaling', 'Multi-cloud support', 'Cost optimization', 'Disaster recovery', 'Security management', 'Performance monitoring', '24/7 support'],
      price: 'Starting at $1,299/month',
      category: 'Infrastructure',
      popular: true
    },
    {
      icon: Shield,
      title: 'Advanced Cybersecurity Suite',
      description: 'Enterprise-grade security solutions with threat detection, vulnerability assessment, and automated incident response.',
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance management', 'Security analytics', 'Penetration testing', 'Risk assessment', '24/7 monitoring'],
      price: 'Starting at $799/month',
      category: 'Security',
      popular: true
    },
    {
      icon: Database,
      title: 'Database Services & Management',
      description: 'Complete database lifecycle management with optimization, migration, backup, and performance tuning.',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Migration services', 'Monitoring', 'Security hardening', 'Scalability planning', 'Maintenance'],
      price: 'Starting at $399/month',
      category: 'Database',
      popular: false
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD Solutions',
      description: 'Streamline development workflows with automated testing, deployment, and monitoring for faster delivery.',
      features: ['CI/CD pipelines', 'Automated testing', 'Infrastructure as code', 'Monitoring & alerting', 'Version control', 'Collaboration tools', 'Deployment automation', 'Performance optimization'],
      price: 'Starting at $599/month',
      category: 'DevOps',
      popular: true
    },
    {
      icon: Globe,
      title: 'Web Development & Hosting',
      description: 'Modern web applications with responsive design, SEO optimization, and reliable hosting solutions.',
      features: ['Responsive design', 'SEO optimization', 'Performance tuning', 'SSL certificates', 'CDN integration', 'Regular updates', 'Security patches', 'Analytics integration'],
      price: 'Starting at $1,299/month',
      category: 'Web Development',
      popular: false
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications with modern UX design and seamless integration.',
      features: ['Native & cross-platform', 'UI/UX design', 'App store optimization', 'Push notifications', 'Offline capabilities', 'Security implementation', 'Performance optimization', 'Maintenance support'],
      price: 'Starting at $1,999/month',
      category: 'Mobile Development',
      popular: false
    },
    {
      icon: BarChart,
      title: 'IT Analytics & Monitoring',
      description: 'Comprehensive IT performance monitoring with real-time insights and predictive analytics.',
      features: ['Real-time monitoring', 'Performance analytics', 'Predictive insights', 'Custom dashboards', 'Alerting system', 'Capacity planning', 'Trend analysis', 'Reporting'],
      price: 'Starting at $299/month',
      category: 'Analytics',
      popular: false
    },
    {
      icon: Zap,
      title: 'IT Process Automation',
      description: 'Intelligent automation of IT operations with workflow optimization and self-healing systems.',
      features: ['Workflow automation', 'Self-healing systems', 'Process optimization', 'Integration APIs', 'Monitoring', 'Exception handling', 'Cost optimization', 'Scalability'],
      price: 'Starting at $499/month',
      category: 'Automation',
      popular: true
    },
    {
      icon: Users,
      title: 'Managed IT Services',
      description: 'Complete IT management with 24/7 support, proactive monitoring, and strategic planning.',
      features: ['24/7 support', 'Proactive monitoring', 'Help desk services', 'Security management', 'Backup solutions', 'Strategic planning', 'Technology updates', 'Compliance support'],
      price: 'Starting at $999/month',
      category: 'Managed Services',
      popular: true
    },
    {
      icon: NetworkIcon,
      title: 'Network Solutions & Security',
      description: 'Enterprise networking with advanced security, load balancing, and performance optimization.',
      features: ['Network design', 'Security implementation', 'Load balancing', 'VPN solutions', 'Firewall management', 'Traffic optimization', 'Monitoring', 'Troubleshooting'],
      price: 'Starting at $699/month',
      category: 'Networking',
      popular: false
    },
    {
      icon: ConfigIcon,
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting with technology assessment, digital transformation, and roadmap development.',
      features: ['Technology assessment', 'Digital transformation', 'Strategic planning', 'Cost optimization', 'Vendor management', 'Risk assessment', 'Compliance planning', 'Training programs'],
      price: 'Starting at $299/hour',
      category: 'Consulting',
      popular: false
    },
    {
      icon: SecurityIcon,
      title: 'Compliance & Audit Services',
      description: 'Ensure regulatory compliance with automated monitoring, audit trails, and compliance reporting.',
      features: ['Regulatory compliance', 'Audit trails', 'Compliance reporting', 'Risk assessment', 'Documentation', 'Policy development', 'Training programs', 'Continuous monitoring'],
      price: 'Starting at $399/month',
      category: 'Compliance',
      popular: false
    }
  ];

  const benefits = [
    'Reduce IT costs by up to 40% with optimized solutions',
    'Improve system reliability with 99.9% uptime guarantee',
    'Enhance security posture with enterprise-grade protection',
    'Accelerate digital transformation initiatives',
    'Scale infrastructure seamlessly with business growth',
    'Ensure compliance with industry standards and regulations',
    'Gain competitive advantage with cutting-edge technology',
    'Achieve 300% ROI within the first year of implementation'
  ];

  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Enterprise Clients',
      description: 'Trusted by leading organizations worldwide'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime SLA',
      description: 'Reliable service you can count on'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Rating',
      description: 'Highly rated by our clients'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Support',
      description: 'Always here when you need us'
    },
    {
      icon: Shield,
      value: 'SOC 2',
      label: 'Compliance',
      description: 'Enterprise security standards'
    },
    {
      icon: Globe,
      value: '50+',
      label: 'Countries',
      description: 'Global presence and support'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Transform your IT infrastructure with our comprehensive IT services including cloud management, cybersecurity, DevOps, web development, and managed IT solutions." />
        <meta name="keywords" content="IT services, cloud management, cybersecurity, DevOps, web development, managed IT, infrastructure, Zion Tech Group" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT solutions that drive digital transformation. From cloud infrastructure and cybersecurity 
              to web development and managed services - we deliver technology that powers your business success.
            </p>
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-6 mb-12 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">12+</div>
                  <div className="text-gray-300 text-sm">IT Service Categories</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-gray-300 text-sm">Uptime Guarantee</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">300%</div>
                  <div className="text-gray-300 text-sm">Average ROI</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to transform your business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group relative ${
                  service.popular ? 'border-2 border-cyan-500/50' : ''
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-300">Contact for custom pricing</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and operational efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your IT?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your IT requirements and get started with a comprehensive solution today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ItServicesPage;
