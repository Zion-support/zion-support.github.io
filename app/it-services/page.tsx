import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Code, 
  Smartphone, 
  Database, 
  Globe, 
  Zap, 
  Users, 
  BarChart, 
  Lock, 
  Cpu, 
  Wifi,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  DollarSign,
  Server,
  Network,
  Settings
} from 'lucide-react';

const ITServicesPage = () => {
  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud infrastructure with zero downtime and enhanced security',
      price: 'From $2,500',
      features: ['AWS/Azure/GCP expertise', 'Data migration', 'Security compliance', '24/7 support'],
      path: '/cloud-migration',
      popular: true
    },
    {
      icon: <Code className="w-8 h-8 text-green-400" />,
      title: 'DevOps Solutions',
      description: 'Complete DevOps implementation with CI/CD pipelines and automation',
      price: 'From $3,000',
      features: ['CI/CD setup', 'Infrastructure as Code', 'Monitoring & logging', 'Security integration'],
      path: '/devops-solutions'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity Suite',
      description: 'Comprehensive cybersecurity solutions to protect your digital assets',
      price: 'From $1,500',
      features: ['Threat detection', 'Vulnerability assessment', 'Compliance audit', 'Incident response'],
      path: '/cybersecurity'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile app development for iOS and Android',
      price: 'From $5,000',
      features: ['Native performance', 'Cross-platform', 'App store optimization', 'Maintenance support'],
      path: '/mobile-development'
    },
    {
      icon: <Globe className="w-8 h-8 text-yellow-400" />,
      title: 'Web Development',
      description: 'Modern, responsive web applications with cutting-edge technologies',
      price: 'From $3,500',
      features: ['Responsive design', 'SEO optimization', 'Performance tuning', 'Security hardening'],
      path: '/web-development'
    },
    {
      icon: <Database className="w-8 h-8 text-cyan-400" />,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management services',
      price: 'From $2,000',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Security hardening'],
      path: '/database-management'
    },
    {
      icon: <BarChart className="w-8 h-8 text-orange-400" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics',
      price: 'From $2,500',
      features: ['Data visualization', 'Predictive analytics', 'Custom dashboards', 'Real-time reporting'],
      path: '/data-analytics'
    },
    {
      icon: <Cpu className="w-8 h-8 text-pink-400" />,
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions for complex problem solving',
      price: 'Custom pricing',
      features: ['Quantum algorithms', 'Hardware integration', 'Research & development', 'Consultation'],
      path: '/quantum-computing-solutions'
    }
  ];

  const technologies = [
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'Google Cloud', category: 'Cloud' },
    { name: 'Docker', category: 'Containerization' },
    { name: 'Kubernetes', category: 'Orchestration' },
    { name: 'Terraform', category: 'Infrastructure' },
    { name: 'Jenkins', category: 'CI/CD' },
    { name: 'GitLab CI', category: 'CI/CD' },
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Redis', category: 'Cache' },
    { name: 'Elasticsearch', category: 'Search' }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your current infrastructure and requirements to create a comprehensive plan',
      icon: <Settings className="w-8 h-8 text-blue-400" />
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our experts design a scalable and secure solution tailored to your needs',
      icon: <Network className="w-8 h-8 text-green-400" />
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We implement the solution with minimal disruption to your business operations',
      icon: <Code className="w-8 h-8 text-purple-400" />
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Thorough testing and optimization to ensure peak performance and security',
      icon: <Zap className="w-8 h-8 text-yellow-400" />
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'Smooth deployment with ongoing support and maintenance services',
      icon: <Server className="w-8 h-8 text-red-400" />
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Expert Engineers' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, DevOps, cybersecurity, mobile development, and more. Transform your business with our expert team." />
        <meta name="keywords" content="IT services, cloud migration, DevOps, cybersecurity, mobile development, web development, database management" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                IT Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Complete IT solutions to modernize your infrastructure, enhance security, 
                and accelerate your digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our IT Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to meet your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-blue-400 mb-6">{service.price}</div>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Technologies We Use</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with the latest and most reliable technologies in the industry
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-white font-semibold mb-2">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach to delivering exceptional IT solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    {step.icon}
                  </div>
                  <div className="text-2xl font-bold text-blue-400 mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our expert team help you modernize your technology stack and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Get Free Consultation
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;