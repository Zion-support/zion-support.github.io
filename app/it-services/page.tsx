import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Server, Shield, Cloud, Database, Network, Code, Monitor, Smartphone, Globe, Settings, BarChart, Users, ArrowRight, CheckCircle } from 'lucide-react';
import Layout from '../layout';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security measures to protect your digital assets',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response']
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies',
      icon: Globe,
      color: 'from-green-500 to-emerald-600',
      features: ['React/Next.js', 'Node.js', 'API Integration', 'Performance Optimization']
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-600',
      features: ['React Native', 'Flutter', 'Native Development', 'App Store Optimization']
    },
    {
      title: 'API Development',
      description: 'Robust and scalable APIs for seamless system integration',
      icon: Code,
      color: 'from-indigo-500 to-purple-600',
      features: ['RESTful APIs', 'GraphQL', 'Microservices', 'API Documentation']
    },
    {
      title: 'Database Management',
      description: 'Optimized database solutions for performance and scalability',
      icon: Database,
      color: 'from-yellow-500 to-orange-600',
      features: ['SQL/NoSQL', 'Data Migration', 'Performance Tuning', 'Backup & Recovery']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment and continuous integration pipelines',
      icon: Settings,
      color: 'from-cyan-500 to-blue-600',
      features: ['Docker/Kubernetes', 'Jenkins/GitLab CI', 'Infrastructure as Code', 'Monitoring']
    },
    {
      title: 'IT Support',
      description: '24/7 technical support and maintenance services',
      icon: Monitor,
      color: 'from-gray-500 to-slate-600',
      features: ['Help Desk', 'Remote Support', 'System Maintenance', 'User Training']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: Server },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Monitor },
    { number: '10+', label: 'Years Experience', icon: Users }
  ];

  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, and more. Transform your business with our expert solutions."
      keywords="IT services, cloud computing, cybersecurity, web development, mobile development, DevOps, database management"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="text-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT solutions designed to modernize your infrastructure, enhance security, 
              and drive digital transformation. From cloud migration to cybersecurity, we've got you covered.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Discovery</h3>
                <p className="text-gray-300">We analyze your current infrastructure and identify opportunities for improvement.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Planning</h3>
                <p className="text-gray-300">We create a detailed roadmap tailored to your specific needs and goals.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Implementation</h3>
                <p className="text-gray-300">We execute the plan with precision, ensuring minimal disruption to your operations.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Support</h3>
                <p className="text-gray-300">We provide ongoing support and maintenance to ensure optimal performance.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT services can help modernize your infrastructure and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ITServicesPage;