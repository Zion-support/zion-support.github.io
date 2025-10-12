'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, Calendar, Phone, Mail, ArrowRight, CheckCircle, Star, Users, Clock } from 'lucide-react';

const DemoPage: React.FC = () => {
  const demos = [
    {
      title: 'AI Chatbot Demo',
      description: 'Experience our AI-powered customer support chatbot',
      duration: '15 min',
      category: 'AI Services',
      features: ['Natural Language Processing', 'Multi-language Support', 'CRM Integration'],
      thumbnail: '/api/placeholder/400/250'
    },
    {
      title: 'Analytics Dashboard Demo',
      description: 'See our advanced business intelligence platform in action',
      duration: '20 min',
      category: 'Data Analytics',
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
      thumbnail: '/api/placeholder/400/250'
    },
    {
      title: 'Cloud Infrastructure Demo',
      description: 'Explore our scalable cloud solutions and migration tools',
      duration: '25 min',
      category: 'IT Services',
      features: ['Auto-scaling', 'Cost Optimization', 'Security Monitoring'],
      thumbnail: '/api/placeholder/400/250'
    },
    {
      title: 'Cybersecurity Demo',
      description: 'Learn about our advanced threat detection and protection',
      duration: '30 min',
      category: 'Security',
      features: ['Threat Detection', 'Real-time Alerts', 'Compliance Reports'],
      thumbnail: '/api/placeholder/400/250'
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CEO",
      content: "The demo was incredibly insightful. We could see exactly how their AI solutions would integrate with our existing systems.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Global Finance Ltd.",
      role: "CTO",
      content: "The cloud migration demo showed us exactly what to expect. The process was seamless and well-explained.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "HealthTech Solutions",
      role: "VP of Operations",
      content: "The analytics dashboard demo was impressive. We could see the value immediately for our data-driven decisions.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Helmet>
        <title>Request Demo - Zion Tech Group</title>
        <meta name="description" content="Schedule a personalized demo of our AI and IT solutions. See how we can transform your business with our cutting-edge technology." />
      </Helmet>
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            See It In Action
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience our AI and IT solutions firsthand with a personalized demo. 
            See how our technology can transform your business.
          </p>
        </section>

        {/* Demo Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Available Demos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {demos.map((demo, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <Play className="w-16 h-16 text-cyan-400 opacity-50" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                      {demo.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                      {demo.duration}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {demo.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {demo.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {demo.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group">
                    <Play className="w-4 h-4 mr-2" />
                    Schedule Demo
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Schedule Demo Form */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Schedule Your Demo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Why Schedule a Demo?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">Personalized Experience</h4>
                      <p className="text-gray-300 text-sm">See exactly how our solutions fit your specific needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">Expert Guidance</h4>
                      <p className="text-gray-300 text-sm">Get answers to all your questions from our specialists</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">No Obligation</h4>
                      <p className="text-gray-300 text-sm">Free demo with no commitment required</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      +1 302 464 0950
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-green-400" />
                    <span className="text-green-400">Available Mon-Fri 9AM-6PM EST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to See the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Schedule your personalized demo today and discover how our AI and IT solutions can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call to Schedule
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DemoPage;