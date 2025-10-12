import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Database, Network, Smartphone, Server, Cpu, Globe, Zap, Users, BarChart3, Clock, DollarSign, Star, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Seamless migration to cloud platforms with ongoing management and optimization.',
      price: '$2,500/project',
      features: ['AWS/Azure/GCP migration', 'Cost optimization', 'Security implementation', '24/7 monitoring']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, prevention, and compliance.',
      price: '$1,999/month',
      features: ['Threat monitoring', 'Vulnerability assessment', 'Compliance management', 'Incident response']
    },
    {
      icon: <Code className="w-8 h-8 text-green-500" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with modern technologies and best practices.',
      price: '$150/hour',
      features: ['Web applications', 'Mobile apps', 'API development', 'Legacy modernization']
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Database Management',
      description: 'Expert database design, optimization, and maintenance services.',
      price: '$299/month',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Data migration']
    },
    {
      icon: <Network className="w-8 h-8 text-orange-500" />,
      title: 'Network Infrastructure',
      description: 'Robust network design, implementation, and ongoing support services.',
      price: '$1,200/month',
      features: ['Network design', 'Hardware installation', 'Security configuration', 'Performance monitoring']
    },
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-500" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      price: '$8,000/project',
      features: ['iOS development', 'Android development', 'Cross-platform', 'App store deployment']
    },
    {
      icon: <Server className="w-8 h-8 text-indigo-500" />,
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure as code solutions.',
      price: '$2,200/month',
      features: ['CI/CD pipelines', 'Infrastructure automation', 'Container orchestration', 'Monitoring setup']
    },
    {
      icon: <Cpu className="w-8 h-8 text-teal-500" />,
      title: 'System Integration',
      description: 'Connect disparate systems and applications for seamless data flow.',
      price: '$1,800/project',
      features: ['API integration', 'Data synchronization', 'Legacy system integration', 'Real-time processing']
    },
    {
      icon: <Globe className="w-8 h-8 text-pink-500" />,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications with optimal performance.',
      price: '$3,500/project',
      features: ['Responsive design', 'SEO optimization', 'Performance tuning', 'Security implementation']
    },
    {
      icon: <Users className="w-8 h-8 text-amber-500" />,
      title: 'IT Consulting',
      description: 'Strategic IT planning and technology roadmap development.',
      price: '$200/hour',
      features: ['Technology assessment', 'Strategic planning', 'Vendor evaluation', 'Implementation guidance']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-emerald-500" />,
      title: 'Business Intelligence',
      description: 'Data analytics and reporting solutions for informed decision making.',
      price: '$1,500/month',
      features: ['Data warehousing', 'Dashboard creation', 'Report automation', 'Predictive analytics']
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'IT Support & Maintenance',
      description: 'Comprehensive IT support with proactive monitoring and maintenance.',
      price: '$99/user/month',
      features: ['24/7 support', 'Proactive monitoring', 'Hardware maintenance', 'Software updates']
    }
  ];

  const stats = [
    { number: '1000+', label: 'Projects Completed', icon: <Code className="w-6 h-6 text-blue-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-green-400" /> },
    { number: '50+', label: 'Enterprise Clients', icon: <Users className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6 text-orange-400" /> }
  ];

  const technologies = [
    { name: 'Cloud Platforms', items: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean'] },
    { name: 'Programming Languages', items: ['JavaScript', 'Python', 'Java', 'C#', 'Go', 'Rust'] },
    { name: 'Frameworks', items: ['React', 'Angular', 'Vue.js', 'Node.js', 'Django', 'Spring'] },
    { name: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch'] },
    { name: 'DevOps Tools', items: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Ansible'] },
    { name: 'Security', items: ['OWASP', 'Penetration Testing', 'Compliance', 'Encryption'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, software development, and infrastructure management. Expert solutions for modern businesses." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, software development, network infrastructure, DevOps" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Cloud className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              IT Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Comprehensive IT solutions designed to modernize your infrastructure, 
              enhance security, and drive digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our IT Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              End-to-end IT solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="mr-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">{service.title}</h3>
                      <p className="text-gray-300 text-sm">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="w-full block text-center py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Technologies We Use</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Cutting-edge technologies and industry best practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">{tech.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our IT services can modernize your technology stack and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITServicesPage;