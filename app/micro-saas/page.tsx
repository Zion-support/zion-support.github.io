import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, CheckCircle, Star, Cloud, BarChart3, Users, Clock, DollarSign, Shield, Code, Database, Mail, Settings, Brain, Mic, Globe, Monitor } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const services = [
    {
      id: 'zion-ai-neural-interface',
      title: 'Zion AI Neural Interface',
      description: 'Revolutionary brain-computer interface technology for seamless human-AI interaction.',
      features: ['Neural signal processing', 'Real-time AI communication', 'Cognitive enhancement', 'Medical applications'],
      price: '$299/month',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      featured: true
    },
    {
      id: 'zion-ai-voice-cloning-studio',
      title: 'Zion AI Voice Cloning Studio',
      description: 'Professional voice synthesis and cloning platform for content creators and businesses.',
      features: ['High-quality voice synthesis', 'Multi-language support', 'Real-time voice conversion', 'API integration'],
      price: '$199/month',
      icon: <Mic className="w-8 h-8 text-purple-400" />,
      featured: true
    },
    {
      id: 'zion-ai-holographic-workspace',
      title: 'Zion AI Holographic Workspace',
      description: 'Immersive 3D workspace environment powered by AI for enhanced productivity and collaboration.',
      features: ['3D holographic displays', 'AI-powered collaboration', 'Virtual meeting rooms', 'Spatial computing'],
      price: '$399/month',
      icon: <Monitor className="w-8 h-8 text-green-400" />,
      featured: true
    },
    {
      id: 'zion-ai-quantum-optimizer',
      title: 'Zion AI Quantum Optimizer',
      description: 'Quantum computing simulation platform for complex optimization problems and research.',
      features: ['Quantum algorithm simulation', 'Optimization problem solving', 'Research tools', 'Academic integration'],
      price: '$499/month',
      icon: <Settings className="w-8 h-8 text-blue-400" />,
      featured: false
    }
  ];

  const stats = [
    { label: 'Active Users', value: '50,000+', icon: <Users className="w-6 h-6" /> },
    { label: 'Uptime', value: '99.9%', icon: <Shield className="w-6 h-6" /> },
    { label: 'Customer Satisfaction', value: '98%', icon: <Star className="w-6 h-6" /> },
    { label: 'Data Security', value: '100%', icon: <Cloud className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      company: 'NeuroTech Research',
      role: 'Research Director',
      content: 'Zion AI Neural Interface has revolutionized our research capabilities. The precision and reliability are unmatched.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      company: 'Creative Studios',
      role: 'Audio Director',
      content: 'The voice cloning technology is incredible. We can create high-quality voiceovers in minutes instead of hours.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emily Johnson',
      company: 'Design Agency',
      role: 'Creative Director',
      content: 'The holographic workspace has transformed how we collaborate. It feels like the future of remote work.',
      rating: 5,
      avatar: 'EJ'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Cutting-Edge AI Tools</title>
        <meta name="description" content="Discover our innovative micro SAAS solutions including AI neural interfaces, voice cloning, holographic workspaces, and quantum optimization tools." />
        <meta name="keywords" content="micro SAAS, AI tools, neural interface, voice cloning, holographic workspace, quantum computing, AI solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SAAS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Cutting-edge AI-powered micro SAAS tools designed to revolutionize how you work, create, and innovate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Explore Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Our Micro SAAS Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`bg-slate-800/50 backdrop-blur-md border rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300 ${
                    service.featured ? 'ring-2 ring-cyan-500/50' : 'border-cyan-500/20'
                  }`}
                >
                  {service.featured && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                      Featured
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-cyan-400">
                      {service.price}
                    </div>
                    <Link
                      to={`/micro-saas/${service.id}`}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              What Our Customers Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Workflow?
              </h2>
              <p className="text-gray-300 mb-8">
                Join thousands of professionals who are already using our micro SAAS solutions to achieve extraordinary results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;