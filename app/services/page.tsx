import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Shield, Zap, Globe, ArrowRight, CheckCircle, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Target, Calendar } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const ServicesPage = () => {
  const services = [
    {
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions to transform your business operations.',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      link: '/ai-services',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: 'IT Services',
      description: 'Comprehensive technology solutions including cloud infrastructure and cybersecurity.',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      link: '/services',
      features: ['Cloud Migration', 'Network Security', 'System Integration', 'IT Consulting']
    },
    {
      title: 'Micro SAAS',
      description: 'Ready-to-use software solutions for immediate deployment and business growth.',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      link: '/micro-saas',
      features: ['Analytics Tools', 'Security Solutions', 'Productivity Apps', 'Business Intelligence']
    },
    {
      title: '5G Solutions',
      description: 'Next-generation connectivity and infrastructure services for modern businesses.',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      link: '/5g-solutions',
      features: ['Edge Computing', 'IoT Solutions', 'Smart City', 'Mobile Applications']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs and current technology stack to identify opportunities for improvement.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'We develop a comprehensive strategy and implementation plan tailored to your specific requirements.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our expert team implements the solution with minimal disruption to your existing operations.'
    },
    {
      step: '04',
      title: 'Support & Optimization',
      description: 'We provide ongoing support and continuously optimize the solution for maximum performance.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <Award className="w-6 h-6" /> },
    { number: '99.9%', label: 'Client Satisfaction', icon: <Users className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Shield className="w-6 h-6" /> },
    { number: '50+', label: 'Countries Served', icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="IT Services - Zion Tech Group | Comprehensive Technology Solutions"
        description="Professional IT services including cloud infrastructure, cybersecurity, system integration, and digital transformation. Expert technology consulting for modern businesses."
        keywords="IT services, cloud infrastructure, cybersecurity, system integration, technology consulting, digital transformation"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              IT Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
            From AI-powered analytics to enterprise security, we have everything you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We offer a comprehensive range of technology services to meet all your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <FuturisticCard key={index} className="p-6 text-center group hover:scale-105 transition-all duration-300">
                <Link to={service.link} className="block">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </Link>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and maximum value for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our IT services can help you achieve your business goals and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Contact Us Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ServicesPage;