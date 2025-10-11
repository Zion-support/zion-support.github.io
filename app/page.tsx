'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  TrendingUp,
  Clock,
  Phone,
  Mail
} from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced machine learning and AI technologies to automate and optimize your business processes.'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions that grow with your business needs.'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security measures to protect your data and systems from threats.'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Streamline operations with intelligent automation that reduces costs and increases efficiency.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '5+', label: 'Years Experience' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'Outstanding service and cutting-edge technology. They delivered exactly what we needed on time and within budget.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLab',
      role: 'Founder',
      content: 'The team at Zion Tech Group is exceptional. Their expertise in AI and cloud solutions is unmatched.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions | Transform Your Business</title>
        <meta name="description" content="Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, cloud infrastructure, and intelligent automation." />
        <meta name="keywords" content="AI solutions, IT services, cloud computing, cybersecurity, automation, machine learning, business transformation" />
        <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI and IT solutions" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  Welcome to <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Zion Tech Group</span>
                </h1>
                <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
                  Leading Provider of AI & IT Solutions
                </p>
                <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Transform your business with cutting-edge artificial intelligence, cloud infrastructure, 
                  and intelligent automation. We deliver measurable results that drive growth and efficiency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  <a
                    href="/services"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    Explore Services
                  </a>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-300 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Why Choose Our Solutions?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We combine cutting-edge technology with proven expertise to deliver solutions that transform your business.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Preview */}
          <section className="py-20 bg-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our Core Services
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive AI and IT solutions designed to accelerate your business growth.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">AI Services</h3>
                  <p className="text-gray-300 mb-6">
                    Advanced AI solutions including chatbots, data analytics, computer vision, and machine learning models.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      AI-Powered Chatbots
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Data Analytics & Insights
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Computer Vision
                    </li>
                  </ul>
                  <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-medium">
                    Learn More →
                  </a>
                </div>
                
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">IT Services</h3>
                  <p className="text-gray-300 mb-6">
                    Complete IT infrastructure solutions including cloud migration, cybersecurity, and system optimization.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Cloud Migration
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Cybersecurity Solutions
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      System Optimization
                    </li>
                  </ul>
                  <a href="/it-services" className="text-cyan-400 hover:text-cyan-300 font-medium">
                    Learn More →
                  </a>
                </div>
                
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Micro SaaS</h3>
                  <p className="text-gray-300 mb-6">
                    Ready-to-use SaaS solutions that can be quickly deployed to solve specific business challenges.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Analytics Dashboard
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      AI Chat Platform
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Invoice Management
                    </li>
                  </ul>
                  <a href="/micro-saas" className="text-cyan-400 hover:text-cyan-300 font-medium">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">
                  What Our Clients Say
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Don't just take our word for it. Here's what our satisfied clients have to say about our services.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                    <div className="border-t border-white/20 pt-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Get started with a free consultation and discover how our AI and IT solutions 
                  can accelerate your business growth and efficiency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call: (302) 464-0950
                  </a>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-cyan-400" />
                      <span>24/7 Support Available</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-cyan-400" />
                      <span>Expert Team</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-cyan-400" />
                      <span>Proven Results</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
