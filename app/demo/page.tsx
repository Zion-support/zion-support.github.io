'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Phone, 
  Mail,
  MapPin,
  MessageSquare,
  Eye,
  Sparkles,
  Brain,
  Code,
  Shield,
  Cloud,
  Target,
  BarChart,
  Settings,
  FileText,
  Bot,
  Palette,
  Camera,
  Music,
  Video,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  TrendingUp,
  Lock,
  Database,
  Smartphone,
  Globe,
  Zap,
  Activity,
  PieChart,
  TrendingDown,
  Compass,
  Navigation
} from 'lucide-react';

export default function DemoPage() {
  const [selectedDemo, setSelectedDemo] = useState('ai-project-manager');
  const [isBooking, setIsBooking] = useState(false);

  const demos = [
    {
      id: 'ai-project-manager',
      title: 'AI Project Manager Pro',
      description: 'See how our AI-powered project management platform can transform your workflow',
      duration: '30 minutes',
      category: 'AI Solutions',
      icon: BarChart,
      features: [
        'Smart scheduling and resource allocation',
        'Predictive analytics and risk assessment',
        'Automated workflow optimization',
        'Real-time collaboration tools'
      ],
      benefits: [
        '40% faster project planning',
        '95% accuracy in timeline predictions',
        '70% reduction in project delays',
        '300% ROI within 6 months'
      ],
      image: '/images/demos/ai-project-manager.jpg',
      popular: true
    },
    {
      id: 'ai-analytics-dashboard',
      title: 'AI Analytics Dashboard',
      description: 'Experience real-time data insights and predictive analytics in action',
      duration: '25 minutes',
      category: 'AI Solutions',
      icon: BarChart,
      features: [
        'Real-time data visualization',
        'AI-powered insights and recommendations',
        'Custom dashboard creation',
        'Automated reporting and alerts'
      ],
      benefits: [
        '50% faster decision making',
        '90% improvement in data accuracy',
        '200% increase in actionable insights',
        '60% time saved on reporting'
      ],
      image: '/images/demos/ai-analytics.jpg',
      popular: true
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support Suite',
      description: 'Watch our AI chatbots and support automation in action',
      duration: '20 minutes',
      category: 'AI Solutions',
      icon: MessageSquare,
      features: [
        'Intelligent chatbot conversations',
        'Automated ticket routing',
        'Sentiment analysis and escalation',
        'Multi-channel support integration'
      ],
      benefits: [
        '90% faster response times',
        '80% reduction in support costs',
        '95% customer satisfaction',
        '24/7 availability'
      ],
      image: '/images/demos/ai-customer-support.jpg',
      popular: false
    },
    {
      id: 'ai-content-studio',
      title: 'AI Content Studio',
      description: 'Create amazing content with AI-powered writing and design tools',
      duration: '35 minutes',
      category: 'AI Solutions',
      icon: Palette,
      features: [
        'AI content generation',
        'Visual design automation',
        'Brand voice training',
        'Multi-format content creation'
      ],
      benefits: [
        '95% time saved on content creation',
        '300% increase in content output',
        '85% improvement in engagement',
        '200% faster time to market'
      ],
      image: '/images/demos/ai-content-studio.jpg',
      popular: true
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Services',
      description: 'See how we seamlessly migrate your infrastructure to the cloud',
      duration: '40 minutes',
      category: 'IT Services',
      icon: Cloud,
      features: [
        'Zero-downtime migration',
        'Cost optimization analysis',
        'Security and compliance',
        'Performance monitoring'
      ],
      benefits: [
        '70% reduction in infrastructure costs',
        '99.9% uptime guarantee',
        '5x faster deployment',
        'Unlimited scalability'
      ],
      image: '/images/demos/cloud-migration.jpg',
      popular: false
    },
    {
      id: 'cybersecurity-suite',
      title: 'Enterprise Cybersecurity Suite',
      description: 'Experience our comprehensive security solutions and threat detection',
      duration: '30 minutes',
      category: 'IT Services',
      icon: Shield,
      features: [
        'Real-time threat detection',
        'Automated incident response',
        'Compliance monitoring',
        'Security awareness training'
      ],
      benefits: [
        '95% threat detection accuracy',
        '80% faster incident response',
        '100% compliance achievement',
        'Zero security breaches'
      ],
      image: '/images/demos/cybersecurity.jpg',
      popular: false
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  const timeSlots = [
    { time: '9:00 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: false },
    { time: '1:00 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '4:00 PM', available: false }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechCorp Solutions',
      content: 'The AI Project Manager demo was eye-opening. We could see exactly how it would fit into our workflow and the potential ROI was incredible.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Data Director',
      company: 'Analytics Inc',
      content: 'The AI Analytics Dashboard demo showed us capabilities we never knew existed. The real-time insights would transform our decision-making process.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Manager',
      company: 'GrowthCorp',
      content: 'The AI Content Studio demo was amazing. We could create professional content in minutes instead of hours. It\'s exactly what we needed.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const handleBookDemo = () => {
    setIsBooking(true);
    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false);
      alert('Demo booking confirmed! We\'ll send you a calendar invite shortly.');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              See It In Action
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Experience our AI and technology solutions firsthand. Book a personalized demo 
              and see how we can transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Play className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Live Demos</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Users className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Expert Guidance</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Free Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Selection */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Choose Your Demo
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Select the solution you'd like to see in action. Our experts will tailor the demo to your specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {demos.map((demo) => (
                <div
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`cursor-pointer bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 ${
                    selectedDemo === demo.id ? 'ring-2 ring-cyan-400 bg-slate-700/50' : ''
                  }`}
                >
                  {demo.popular && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  <div className="flex items-center space-x-3 mb-4">
                    <demo.icon className="w-8 h-8 text-cyan-400" />
                    <div>
                      <h3 className="text-xl font-bold text-white">{demo.title}</h3>
                      <p className="text-cyan-400 text-sm">{demo.category}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{demo.description}</p>
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{demo.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>1-on-1</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Demo Details */}
            {selectedDemoData && (
              <div className="bg-slate-800/50 rounded-lg p-8 mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{selectedDemoData.title}</h3>
                    <p className="text-gray-300 mb-6">{selectedDemoData.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">What You'll See:</h4>
                        <ul className="space-y-2">
                          {selectedDemoData.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">Expected Benefits:</h4>
                        <ul className="space-y-2">
                          {selectedDemoData.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center text-gray-300">
                              <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-slate-700/50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Book Your Demo</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Select Time Slot</label>
                          <div className="grid grid-cols-2 gap-2">
                            {timeSlots.map((slot, index) => (
                              <button
                                key={index}
                                disabled={!slot.available}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                                  slot.available
                                    ? 'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30'
                                    : 'bg-slate-600 text-gray-500 cursor-not-allowed'
                                }`}
                              >
                                {slot.time}
                              </button>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Your Information</label>
                          <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-2 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors mb-2"
                          />
                          <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-2 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors mb-2"
                          />
                          <input
                            type="text"
                            placeholder="Company Name"
                            className="w-full px-4 py-2 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                          />
                        </div>
                        
                        <button
                          onClick={handleBookDemo}
                          disabled={isBooking}
                          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                          {isBooking ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                              Booking...
                            </>
                          ) : (
                            <>
                              <Calendar className="w-5 h-5 mr-2" />
                              Book Demo
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-gray-400 text-sm mb-4">Or contact us directly:</p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href="tel:+13024640950"
                          className="flex items-center justify-center px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          (302) 464-0950
                        </a>
                        <a
                          href="mailto:kleber@ziontechgroup.com"
                          className="flex items-center justify-center px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Email Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Demo Attendees Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Hear from business leaders who experienced our solutions firsthand
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to See the Future?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Book your personalized demo today and discover how our AI and technology solutions 
            can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBookDemo}
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Demo Now
            </button>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}