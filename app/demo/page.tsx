import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, ArrowRight, Star, BarChart3, Shield, Cloud, Zap, Brain } from 'lucide-react';

const DemoPage: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'AI-Powered Analytics',
      description: 'See how our AI analyzes your data in real-time',
      demo: 'Live Demo'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Experience our enterprise-grade security features',
      demo: 'Demo'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Explore our scalable cloud solutions',
      demo: 'Interactive Demo'
    },
    {
      icon: Zap,
      title: 'Automation Tools',
      description: 'Watch our AI automation in action',
      demo: 'Video Demo'
    }
  ];

  const demoSections = [
    {
      title: 'AI Analytics Dashboard',
      description: 'Experience our powerful AI analytics platform that transforms raw data into actionable insights.',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Interactive visualizations',
        'Custom reporting'
      ],
      image: '/api/placeholder/600/400',
      demoType: 'Interactive'
    },
    {
      title: 'Security Monitoring',
      description: 'See how our advanced security solutions protect your business from threats.',
      features: [
        'Threat detection',
        'Real-time monitoring',
        'Incident response',
        'Compliance reporting'
      ],
      image: '/api/placeholder/600/400',
      demoType: 'Live Demo'
    },
    {
      title: 'Cloud Migration',
      description: 'Watch our cloud migration process in action with zero downtime.',
      features: [
        'Automated migration',
        'Data synchronization',
        'Performance optimization',
        'Cost monitoring'
      ],
      image: '/api/placeholder/600/400',
      demoType: 'Video Demo'
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      company: "MedTech Solutions",
      role: "CTO",
      content: "The AI analytics demo was impressive. We could see exactly how it would benefit our operations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      role: "CEO",
      content: "The security demo gave us confidence in their capabilities. The real-time threat detection was remarkable.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "FinanceFlow",
      role: "Head of Analytics",
      content: "The cloud migration demo showed us the process was much smoother than we expected.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Demo - See Our Solutions in Action | Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
        <meta name="keywords" content="demo, AI demo, IT demo, technology demo, interactive demo, live demo" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              See Our Solutions
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                in Action
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience our AI and IT solutions through interactive demos. 
              See firsthand how our technology can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                <Play className="w-5 h-5 mr-2 inline" />
                Start Interactive Demo
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Live Demo
              </button>
            </div>
          </div>
        </section>

        {/* Demo Features */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Explore Our Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{feature.description}</p>
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300">
                      {feature.demo}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Demo Sections */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            {demoSections.map((section, index) => (
              <div key={index} className={`mb-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <h3 className="text-3xl font-bold text-white mb-6">{section.title}</h3>
                    <p className="text-gray-300 mb-6 text-lg">{section.description}</p>
                    <ul className="space-y-3 mb-8">
                      {section.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                      <Play className="w-5 h-5 mr-2 inline" />
                      {section.demoType}
                    </button>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/50">
                      <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <Play className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                          <p className="text-gray-300">Demo Video</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              What Our Demo Users Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to See More?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo with our experts to see how our solutions can meet your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Schedule Live Demo
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;