import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, Right, Circle, Star, BarChart3, Shield, Cloud, Zap } from 'lucide-react';

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

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'The AI solutions from Zion Tech Group transformed our business operations. The demo was incredibly impressive and the implementation exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'Their cloud infrastructure demo showed us exactly how we could scale our operations. The team was professional and the results speak for themselves.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLabs',
      role: 'Head of IT',
      content: 'The security features demonstrated were exactly what we needed. Zion Tech Group delivered a solution that was both powerful and easy to use.',
      rating: 5
    }
  ];

  const benefits = [
    'See solutions in action before committing',
    'Interactive demos tailored to your needs',
    'Expert guidance throughout the process',
    'No pressure, just valuable insights',
    'Custom scenarios for your industry',
    'Immediate answers to your questions'
  ];

  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how we can transform your business." />
        <meta name="keywords" content="demo, AI demo, IT demo, cloud demo, automation demo" />
        <link rel="canonical" href="/demo" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Experience Our
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                See our AI and IT solutions in action. Interactive demos designed to show you 
                exactly how we can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Start Demo
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
                  Schedule Live Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Interactive Demos
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our solutions through hands-on demonstrations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {feature.description}
                    </p>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                      <Play className="w-4 h-4 mr-2" />
                      {feature.demo}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Try Our Demos?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get a firsthand look at how our solutions can benefit your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 bg-slate-800/50 rounded-2xl">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Circle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Hear from businesses that experienced our solutions firsthand
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="text-white font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-cyan-400 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to See It in Action?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Schedule a personalized demo with our experts and discover how our 
                solutions can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Start Interactive Demo
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center">
                  <Right className="w-5 h-5 mr-2" />
                  Schedule Live Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;