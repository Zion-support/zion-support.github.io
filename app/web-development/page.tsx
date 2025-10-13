import React from 'react';
import { Link } from 'react-router-dom';
import { Code, ArrowRight, CheckCircle, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Target, Calendar } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const WebDevelopmentPage = () => {
  const services = [
    {
      title: 'Custom Web Applications',
      description: 'Tailored web applications built with modern technologies and best practices.',
      icon: <Code className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      features: ['React/Next.js', 'Node.js', 'Database Integration', 'API Development']
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration and inventory management.',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      features: ['Payment Processing', 'Inventory Management', 'Order Tracking', 'Admin Dashboard']
    },
    {
      title: 'Progressive Web Apps',
      description: 'Modern PWAs that work seamlessly across all devices and platforms.',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-500',
      features: ['Offline Functionality', 'Push Notifications', 'App-like Experience', 'Cross-platform']
    },
    {
      title: 'API Development',
      description: 'RESTful and GraphQL APIs for seamless data integration and communication.',
      icon: <Target className="w-8 h-8" />,
      color: 'from-orange-500 to-yellow-500',
      features: ['RESTful APIs', 'GraphQL', 'Authentication', 'Documentation']
    }
  ];

  const benefits = [
    'Modern, responsive design',
    'Fast loading times',
    'SEO optimized',
    'Mobile-first approach',
    'Cross-browser compatibility',
    'Scalable architecture'
  ];

  const stats = [
    { number: '200+', label: 'Websites Built', icon: <Code className="w-6 h-6" /> },
    { number: '99.9%', label: 'Client Satisfaction', icon: <Award className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Cloud className="w-6 h-6" /> },
    { number: '50+', label: 'Technologies Used', icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Web Development - Zion Tech Group | Custom Web Applications & Solutions"
        description="Professional web development services including custom applications, e-commerce solutions, PWAs, and API development. Modern, responsive, and scalable web solutions."
        keywords="web development, custom web applications, e-commerce, PWA, API development, responsive design"
        canonical="https://ziontechgroup.com/web-development"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Web Development
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Professional web development services that deliver modern, responsive, and scalable solutions. 
            From custom applications to e-commerce platforms, we build websites that work.
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
              View Portfolio
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
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive web development solutions tailored to your business needs and goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <FuturisticCard key={index} className="p-6 text-center group hover:scale-105 transition-all duration-300">
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
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Web Development Services?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our web development solutions are designed to deliver exceptional performance and user experience.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
              <p className="text-gray-300 mb-6">
                Ready to build your next web project? Contact our experts for a personalized consultation.
              </p>
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Contact Us
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Next Web Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's create a web solution that drives your business forward and delivers exceptional user experience.
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
              View Portfolio
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;