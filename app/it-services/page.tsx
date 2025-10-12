import React from 'react';
import { CheckCircle, Code, Cloud, Shield, Server, Database, Smartphone, Globe, ArrowRight, Zap, Users, BarChart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServices: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: 'Cloud Migration & Management',
      description: 'Seamlessly migrate your infrastructure to the cloud with AWS, Azure, or Google Cloud.',
      price: 'Starting at $2,500/month',
      features: ['Zero-Downtime Migration', 'Cost Optimization', 'Security Implementation', '24/7 Monitoring'],
      link: '/cloud-migration'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive security solutions and threat monitoring.',
      price: 'Starting at $1,500/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response'],
      link: '/cybersecurity-solutions'
    },
    {
      icon: <Code className="w-8 h-8 text-green-400" />,
      title: 'Custom Software Development',
      description: 'Build tailored software solutions that meet your specific business requirements.',
      price: 'Starting at $150/hour',
      features: ['Full-Stack Development', 'API Integration', 'Database Design', 'Quality Assurance'],
      link: '/custom-development'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and reporting.',
      price: 'Starting at $3,000/month',
      features: ['Data Warehousing', 'Predictive Analytics', 'Custom Dashboards', 'Real-time Reporting'],
      link: '/data-analytics'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-400" />,
      title: 'Mobile App Development',
      description: 'Create native and cross-platform mobile applications for iOS and Android.',
      price: 'Starting at $5,000/project',
      features: ['Native Development', 'Cross-Platform', 'UI/UX Design', 'App Store Optimization'],
      link: '/mobile-development'
    },
    {
      icon: <Server className="w-8 h-8 text-yellow-400" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and monitoring.',
      price: 'Starting at $2,000/month',
      features: ['Automated Deployment', 'Container Orchestration', 'Monitoring & Logging', 'Infrastructure as Code'],
      link: '/devops-cicd'
    }
  ];

  const enterpriseSolutions = [
    {
      title: 'Enterprise Architecture',
      description: 'Design and implement scalable enterprise solutions',
      icon: <Server className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize legacy systems and processes',
      icon: <Zap className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT planning and technology roadmaps',
      icon: <Users className="w-6 h-6 text-green-400" />
    },
    {
      title: 'System Integration',
      description: 'Connect disparate systems and applications',
      icon: <Globe className="w-6 h-6 text-orange-400" />
    },
    {
      title: 'Performance Optimization',
      description: 'Improve system performance and efficiency',
      icon: <BarChart className="w-6 h-6 text-red-400" />
    },
    {
      title: 'Disaster Recovery',
      description: 'Ensure business continuity and data protection',
      icon: <Shield className="w-6 h-6 text-yellow-400" />
    }
  ];

  const technologies = [
    'React', 'Node.js', 'Python', 'Java', 'C#', 'PHP',
    'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform',
    'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'MySQL', 'Oracle',
    'React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic'
  ];

  const industries = [
    { name: 'Healthcare', description: 'HIPAA-compliant solutions and telemedicine platforms' },
    { name: 'Finance', description: 'Secure banking systems and fintech applications' },
    { name: 'E-commerce', description: 'Scalable online stores and payment processing' },
    { name: 'Manufacturing', description: 'IoT solutions and supply chain management' },
    { name: 'Education', description: 'Learning management systems and educational apps' },
    { name: 'Government', description: 'Secure government portals and citizen services' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, custom development, and more. Expert solutions for your business." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, software development, DevOps, data analytics" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Comprehensive IT solutions to power your business. From cloud migration to cybersecurity, 
              we provide expert technology services that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>

          {/* IT Services Grid */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Our IT Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <p className="text-purple-300 font-semibold mb-4">{service.price}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.link}
                    className="text-purple-400 hover:text-purple-300 font-medium flex items-center group-hover:translate-x-1 transition-transform"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Solutions */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Enterprise Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enterpriseSolutions.map((solution, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    {solution.icon}
                    <h3 className="text-lg font-semibold text-white ml-3">{solution.title}</h3>
                  </div>
                  <p className="text-gray-300">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Technologies We Use</h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-gray-300 text-center mb-8">
                We work with the latest technologies and frameworks to deliver cutting-edge solutions
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                    <span className="text-white font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Industries Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Industries We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-300">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT services can help you modernize your technology stack and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Schedule Consultation
                </button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                Free consultation • Custom solutions • 24/7 support
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ITServices;
