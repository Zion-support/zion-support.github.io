import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Calendar, ArrowRight, CheckCircle, Star, Users, Zap, Shield } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const DemoPage = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-analytics');

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'See how our AI analytics platform transforms raw data into actionable insights with real-time dashboards and predictive analytics.',
      duration: '15 minutes',
      features: [
        'Real-time data visualization',
        'Predictive analytics models',
        'Custom dashboard creation',
        'Automated reporting'
      ],
      video: '/api/placeholder/800/450',
      popular: true
    },
    {
      id: 'ai-automation',
      title: 'AI Automation Workflows',
      description: 'Experience intelligent automation that streamlines business processes and reduces manual work by up to 80%.',
      duration: '12 minutes',
      features: [
        'Workflow automation',
        'Document processing',
        'Email automation',
        'Task scheduling'
      ],
      video: '/api/placeholder/800/450',
      popular: false
    },
    {
      id: 'ai-content',
      title: 'AI Content Generation',
      description: 'Watch our AI create high-quality content at scale, from blog posts to marketing materials and social media content.',
      duration: '10 minutes',
      features: [
        'Blog post generation',
        'Marketing copy creation',
        'Social media content',
        'SEO optimization'
      ],
      video: '/api/placeholder/800/450',
      popular: false
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS Solutions',
      description: 'Explore our ready-to-use software solutions that can be implemented immediately to solve specific business challenges.',
      duration: '20 minutes',
      features: [
        'Analytics dashboards',
        'Security tools',
        'Productivity apps',
        'Business automation'
      ],
      video: '/api/placeholder/800/450',
      popular: true
    }
  ];

  const benefits = [
    {
      title: "See It In Action",
      description: "Watch real demonstrations of our solutions working with actual data and scenarios"
    },
    {
      title: "Ask Questions",
      description: "Get answers to your specific questions from our expert team during the demo"
    },
    {
      title: "Custom Scenarios",
      description: "We can tailor the demo to show how our solutions work for your specific use case"
    },
    {
      title: "No Commitment",
      description: "Free demo with no obligation to purchase - just valuable insights for your business"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "The demo was incredibly insightful. We could see exactly how the AI analytics would work with our data and the potential impact on our business.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The automation demo showed us possibilities we hadn't even considered. It was eye-opening to see how much we could streamline our processes.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "The content generation demo was impressive. We could see how it would save us hours of work while maintaining quality and consistency.",
      rating: 5
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo) || demos[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Demo - See Our AI Solutions in Action | Zion Tech Group"
        description="Watch live demonstrations of our AI solutions, automation tools, and micro SAAS products. See how our technology can transform your business."
        keywords="demo, AI demo, technology demonstration, live demo, AI solutions demo, automation demo"
        canonical="https://ziontechgroup.com/demo"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            See It In
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Action
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Watch live demonstrations of our AI solutions and see how they can transform your business. 
            Experience the power of our technology firsthand.
          </p>
        </div>
      </section>

      {/* Demo Selection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your Demo
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the demo that best matches your interests and business needs
            </p>
          </div>
          
          {/* Demo Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                  selectedDemo === demo.id
                    ? 'bg-white/20 border-cyan-500/50 ring-2 ring-cyan-500/20'
                    : 'bg-white/10 border-white/20 hover:bg-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">
                    {demo.title}
                  </h3>
                  {demo.popular && (
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {demo.description}
                </p>
                <div className="flex items-center text-sm text-cyan-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  {demo.duration}
                </div>
              </button>
            ))}
          </div>

          {/* Selected Demo Details */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {selectedDemoData.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedDemoData.description}
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">What You'll See:</h4>
                  <ul className="space-y-2">
                    {selectedDemoData.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </button>
                  <Link
                    to="/contact"
                    className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
                  >
                    Schedule Live Demo
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src={selectedDemoData.video}
                    alt={selectedDemoData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group">
                      <Play className="w-6 h-6 text-white ml-1 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Watch Our Demo?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get the most out of your demo experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what others have learned from our demos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to See More?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Schedule a personalized demo tailored to your specific business needs and challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Schedule Live Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/consultation"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;