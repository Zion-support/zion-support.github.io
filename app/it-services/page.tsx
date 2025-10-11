'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Server, 
  Cloud, 
  Shield, 
  Database, 
  Code, 
  Settings, 
  CheckCircle,
  ArrowRight,
  Zap,
  Brain,
  BarChart,
  Target,
  Users,
  Globe,
  Smartphone
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      icon: Cloud,
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', '24/7 Monitoring'],
      price: 'From $500/month'
    },
    {
      id: 2,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: Shield,
      features: ['Security Audit', 'Penetration Testing', 'Compliance', 'Incident Response'],
      price: 'From $1,000/month'
    },
    {
      id: 3,
      title: 'Database Management',
      description: 'Optimize and secure your database infrastructure.',
      icon: Database,
      features: ['Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Migration'],
      price: 'From $800/month'
    },
    {
      id: 4,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with latest technologies.',
      icon: Code,
      features: ['React/Next.js', 'Node.js', 'TypeScript', 'Progressive Web Apps'],
      price: 'From $3,000/project'
    },
    {
      id: 5,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications.',
      icon: Smartphone,
      features: ['React Native', 'Flutter', 'iOS Development', 'Android Development'],
      price: 'From $5,000/project'
    },
    {
      id: 6,
      title: 'System Administration',
      description: 'Comprehensive system management and maintenance services.',
      icon: Settings,
      features: ['Server Management', 'User Administration', 'System Monitoring', 'Updates & Patches'],
      price: 'From $400/month'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Fast Implementation',
      description: 'Quick deployment and setup of IT solutions'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security for all your systems'
    },
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'Intelligent automation and monitoring'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Real-time insights and optimization'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We analyze your current IT infrastructure and identify areas for improvement.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Create a comprehensive roadmap tailored to your business needs and goals.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deploy solutions with minimal disruption to your daily operations.'
    },
    {
      step: '04',
      title: 'Support',
      description: 'Ongoing maintenance and support to ensure optimal performance.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud solutions, cybersecurity, web development, and system administration. Transform your business with our expertise." />
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, web development, system administration, IT consulting" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IT Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive IT solutions to modernize your infrastructure, enhance security, and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive solutions designed to meet all your IT needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-12 h-12 text-cyan-600 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-sm text-cyan-600 font-medium">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Process
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                A proven methodology that ensures successful project delivery and maximum ROI.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-cyan-100">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT services can help modernize your systems and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Get Free Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default ITServicesPage;