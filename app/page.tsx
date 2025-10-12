import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Smartphone, Brain, Cpu, Server, Wifi, Star, TrendingUp, Users, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FuturisticBackground from './components/FuturisticBackground';
import ParticleBackground from './components/ParticleBackground';
import ServiceCard from './components/ServiceCard';
import AnimatedCard from './components/AnimatedCard';

export default function HomePage() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' },
    { number: '24/7', label: 'Support' }
  ];

  const services = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence services including content generation, chatbots, and predictive analytics',
      features: ['Content Generation', 'Chatbot Development', 'Predictive Analytics', 'Machine Learning'],
      pricing: 'Starting at $99/month',
      link: '/ai-services',
      popular: true,
      category: 'AI Services'
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and GCP expertise for seamless digital transformation',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Cost Optimization', '24/7 Monitoring'],
      pricing: 'Starting at $299/month',
      link: '/cloud-services',
      popular: true,
      category: 'Cloud Services'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Training', 'Compliance Audit'],
      pricing: 'Starting at $199/month',
      link: '/cybersecurity',
      popular: false,
      category: 'Security'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: 'Data Intelligence',
      description: 'Transform your data into actionable insights with advanced analytics and visualization',
      features: ['Data Visualization', 'Business Intelligence', 'Real-time Analytics', 'Custom Dashboards'],
      pricing: 'Starting at $149/month',
      link: '/data-analytics',
      popular: false,
      category: 'Analytics'
    },
    {
      icon: <Server className="w-8 h-8 text-green-400" />,
      title: 'IT Infrastructure',
      description: 'Complete IT infrastructure management with proactive monitoring and optimization',
      features: ['Network Management', 'Server Maintenance', 'Backup Solutions', 'Disaster Recovery'],
      pricing: 'Starting at $399/month',
      link: '/it-services',
      popular: true,
      category: 'IT Services'
    },
    {
      icon: <Wifi className="w-8 h-8 text-orange-400" />,
      title: '5G Implementation',
      description: 'Cutting-edge 5G network solutions for ultra-fast connectivity and IoT integration',
      features: ['5G Network Design', 'IoT Integration', 'Edge Computing', 'Performance Optimization'],
      pricing: 'Starting at $599/month',
      link: '/5g-implementation',
      popular: false,
      category: '5G Solutions'
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'AI-Powered Solutions',
      description: 'Leverage the latest AI technology to automate and optimize your business processes.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to ensure your systems run smoothly.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Scalable Infrastructure',
      description: 'Solutions that grow with your business and adapt to your changing needs.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security measures to protect your sensitive data and systems.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech transformed our business with their AI solutions. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      content: 'Outstanding service and support. Their cloud migration was seamless and efficient.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLab',
      content: 'The cybersecurity solutions provided excellent protection for our digital infrastructure.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, cybersecurity, cloud computing, data analytics, digital transformation" />
      </Helmet>
      
      {/* Futuristic Backgrounds */}
      <FuturisticBackground />
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase">
              Next-Generation Technology Solutions
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              AI & IT Solutions
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Leading provider of artificial intelligence, cybersecurity, and digital transformation services. 
            Empower your business with cutting-edge technology solutions that drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/contact" 
              className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-sm"></div>
            </Link>
            <Link
              to="/about"
              className="group border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="text-center p-6 hover:bg-white/5">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions tailored to your business needs with cutting-edge innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                pricing={service.pricing}
                link={service.link}
                popular={service.popular}
                category={service.category}
                delay={index * 0.1}
                neon={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Zion Tech</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We deliver exceptional results through innovation, expertise, and dedication to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="text-center p-6 hover:bg-white/5">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6 shadow-lg shadow-cyan-500/25">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Real results from real businesses that trust our expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="p-6 hover:bg-white/10">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.company}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Transform Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Business</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses already using our solutions to drive growth and innovation. 
            Start your digital transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/contact" 
              className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
            >
              <span className="relative z-10 flex items-center text-lg">
                Start Your Journey
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-sm"></div>
            </Link>
            <Link 
              to="/ai-services" 
              className="group border-2 border-cyan-400 text-cyan-400 px-10 py-5 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 text-lg"
            >
              Explore AI Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}