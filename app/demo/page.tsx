import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, Pause, RotateCcw, Settings, Download, Share, Star, CheckCircle, ArrowRight, Phone, Mail, Calendar, Clock, Users, Zap, Brain, BarChart, Shield, Cloud } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-automation');
  const [isPlaying, setIsPlaying] = useState(false);

  const demos = [
    {
      id: 'ai-automation',
      title: 'AI Workflow Automation',
      description: 'See how our AI can automate complex business processes and workflows',
      duration: '3:45',
      features: ['Process Automation', 'Smart Routing', 'Error Handling', 'Real-time Monitoring'],
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-analytics',
      title: 'AI Data Analytics',
      description: 'Experience our advanced analytics platform with predictive insights',
      duration: '4:20',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
      icon: BarChart,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support',
      description: 'Watch our AI chatbot handle customer inquiries with human-like responses',
      duration: '2:30',
      features: ['Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'Escalation Management'],
      icon: Brain,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity',
      description: 'See how AI can detect and prevent security threats in real-time',
      duration: '3:15',
      features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Compliance Monitoring'],
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Explore our cloud solutions and infrastructure management capabilities',
      duration: '4:00',
      features: ['Auto-scaling', 'Load Balancing', 'Monitoring', 'Cost Optimization'],
      icon: Cloud,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Reduce manual work by up to 90% with intelligent automation',
      stat: '90%'
    },
    {
      icon: TrendingUp,
      title: 'Increase Efficiency',
      description: 'Improve process efficiency and accuracy with AI-powered solutions',
      stat: '300%'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Protect your business with advanced AI-powered security measures',
      stat: '99.9%'
    },
    {
      icon: Users,
      title: 'Better Experience',
      description: 'Deliver exceptional customer and user experiences',
      stat: '95%'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      quote: 'The AI automation demo showed us exactly how we could streamline our operations. The results were immediate and impressive.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'FinanceFlow Bank',
      role: 'Head of IT',
      quote: 'The cybersecurity demo was eye-opening. We could see threats being detected and prevented in real-time.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      company: 'RetailMax Stores',
      role: 'Operations Director',
      quote: 'The customer support AI demo convinced us that we could provide 24/7 support without compromising quality.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Live Demo - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business operations." />
        <meta name="keywords" content="AI demo, IT demo, technology demonstration, AI automation demo, business solutions demo" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Experience Our Solutions
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                See our AI and IT solutions in action. Watch interactive demos that showcase 
                how our technology can transform your business operations.
              </p>
            </div>
          </section>

          {/* Demo Selection */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Choose a Demo</h2>
              <p className="text-xl text-gray-300">Select a solution to see it in action</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {demos.map((demo) => (
                <div
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`cyber-card p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedDemo === demo.id ? 'ring-2 ring-cyan-400' : ''
                  }`}
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${demo.color} flex items-center justify-center mb-4`}>
                    <demo.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{demo.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{demo.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Duration: {demo.duration}</span>
                    <span className="flex items-center">
                      <Play className="w-4 h-4 mr-1" />
                      Play
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Demo Player */}
          <section className="container mx-auto px-4 py-16">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {demos.find(d => d.id === selectedDemo)?.title}
                </h3>
                <p className="text-gray-300">
                  {demos.find(d => d.id === selectedDemo)?.description}
                </p>
              </div>

              {/* Video Player Placeholder */}
              <div className="bg-slate-800 rounded-lg p-8 mb-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Interactive Demo</h4>
                <p className="text-gray-300 mb-4">
                  Click play to start the {demos.find(d => d.id === selectedDemo)?.title} demonstration
                </p>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="cyber-button inline-flex items-center"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                    {isPlaying ? 'Pause' : 'Play'} Demo
                  </button>
                  <button className="cyber-button inline-flex items-center">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Restart
                  </button>
                </div>
              </div>

              {/* Demo Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features Demonstrated:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {demos.find(d => d.id === selectedDemo)?.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Demo Controls */}
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
                    <Settings className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
                    <Share className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-sm text-gray-400">
                  Duration: {demos.find(d => d.id === selectedDemo)?.duration}
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Why Our Solutions Work</h2>
              <p className="text-xl text-gray-300">Proven results from real implementations</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center cyber-card p-6">
                  <benefit.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-300">Real feedback from demo sessions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="cyber-card text-center p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to See More?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Schedule a personalized demo with our experts. We'll show you exactly how our 
                solutions can address your specific business challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Demo
                </a>
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DemoPage;