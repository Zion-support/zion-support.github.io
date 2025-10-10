'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
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
  Navigation,
  Award,
  DollarSign
} from 'lucide-react';

export default function ConsultationPage() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('30');
  const [isBooking, setIsBooking] = useState(false);

  const services = [
    {
      id: 'ai-strategy',
      title: 'AI Strategy Consultation',
      description: 'Develop a comprehensive AI strategy tailored to your business needs',
      duration: '60 minutes',
      price: 'Free',
      icon: Brain,
      features: [
        'AI readiness assessment',
        'Technology roadmap development',
        'ROI analysis and projections',
        'Implementation timeline'
      ],
      popular: true
    },
    {
      id: 'technical-review',
      title: 'Technical Architecture Review',
      description: 'Evaluate your current infrastructure and recommend improvements',
      duration: '90 minutes',
      price: '$500',
      icon: Code,
      features: [
        'Infrastructure audit',
        'Security assessment',
        'Performance optimization',
        'Scalability recommendations'
      ],
      popular: false
    },
    {
      id: 'data-strategy',
      title: 'Data Strategy Planning',
      description: 'Create a data-driven approach to business intelligence and analytics',
      duration: '45 minutes',
      price: 'Free',
      icon: BarChart,
      features: [
        'Data quality assessment',
        'Analytics platform selection',
        'Data governance framework',
        'Insights roadmap'
      ],
      popular: true
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Planning',
      description: 'Plan your move to the cloud with minimal disruption',
      duration: '75 minutes',
      price: '$750',
      icon: Cloud,
      features: [
        'Migration strategy development',
        'Cost optimization analysis',
        'Security and compliance review',
        'Timeline and resource planning'
      ],
      popular: false
    },
    {
      id: 'cybersecurity-audit',
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security evaluation and recommendations',
      duration: '120 minutes',
      price: '$1,000',
      icon: Shield,
      features: [
        'Security vulnerability assessment',
        'Compliance gap analysis',
        'Incident response planning',
        'Security training recommendations'
      ],
      popular: false
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation Roadmap',
      description: 'Create a comprehensive digital transformation strategy',
      duration: '90 minutes',
      price: 'Free',
      icon: Target,
      features: [
        'Current state analysis',
        'Future vision development',
        'Technology selection',
        'Change management planning'
      ],
      popular: true
    }
  ];

  const selectedServiceData = services.find(service => service.id === selectedService);

  const timeSlots = [
    { date: 'Today', slots: ['2:00 PM', '3:30 PM', '5:00 PM'] },
    { date: 'Tomorrow', slots: ['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM'] },
    { date: 'Wednesday', slots: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'] },
    { date: 'Thursday', slots: ['10:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'] },
    { date: 'Friday', slots: ['9:00 AM', '11:00 AM', '2:00 PM'] }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Expert Guidance',
      description: 'Get advice from industry experts with 15+ years of experience'
    },
    {
      icon: Target,
      title: 'Customized Solutions',
      description: 'Tailored recommendations based on your specific business needs'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Our clients see 300% average ROI within 6 months'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Get actionable insights and recommendations within 48 hours'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Book Your Consultation',
      description: 'Choose your preferred service and time slot',
      icon: Calendar
    },
    {
      step: 2,
      title: 'Pre-Consultation Prep',
      description: 'We\'ll send you a brief questionnaire to understand your needs',
      icon: FileText
    },
    {
      step: 3,
      title: 'Expert Consultation',
      description: 'Meet with our experts for a focused discussion on your challenges',
      icon: Users
    },
    {
      step: 4,
      title: 'Deliverable & Follow-up',
      description: 'Receive detailed recommendations and ongoing support',
      icon: CheckCircle
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechCorp Solutions',
      content: 'The AI strategy consultation was incredibly valuable. We now have a clear roadmap for implementing AI across our organization.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'IT Director',
      company: 'DataFlow Inc',
      content: 'The technical architecture review helped us identify critical issues we didn\'t even know existed. Highly recommended!',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'CEO',
      company: 'GrowthCorp',
      content: 'The digital transformation roadmap consultation gave us the clarity we needed to make informed technology decisions.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const handleBookConsultation = () => {
    setIsBooking(true);
    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false);
      alert('Consultation booked successfully! We\'ll send you a calendar invite and preparation materials shortly.');
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
              Free Expert Consultation
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Get personalized advice from our AI and technology experts. 
              Discover how to transform your business with cutting-edge solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Free Consultations</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Users className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Expert Guidance</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Proven Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Choose Your Consultation
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Select the type of consultation that best fits your needs. 
                Most consultations are free and provide immediate value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`cursor-pointer bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 ${
                    selectedService === service.id ? 'ring-2 ring-cyan-400 bg-slate-700/50' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  <div className="flex items-center space-x-3 mb-4">
                    <service.icon className="w-8 h-8 text-cyan-400" />
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-cyan-400 text-sm">{service.duration}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-green-400 text-sm font-medium">{service.price}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Service Details */}
            {selectedServiceData && (
              <div className="bg-slate-800/50 rounded-lg p-8 mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{selectedServiceData.title}</h3>
                    <p className="text-gray-300 mb-6">{selectedServiceData.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-2">What You'll Get:</h4>
                        <ul className="space-y-2">
                          {selectedServiceData.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-300">Duration:</span>
                          <span className="text-white font-medium">{selectedServiceData.duration}</span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-300">Price:</span>
                          <span className="text-green-400 font-medium">{selectedServiceData.price}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">Format:</span>
                          <span className="text-white font-medium">Video Call</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-slate-700/50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Book Your Consultation</h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Select Time Slot</label>
                          <div className="space-y-3">
                            {timeSlots.slice(0, 3).map((day, index) => (
                              <div key={index}>
                                <div className="text-sm font-medium text-cyan-400 mb-2">{day.date}</div>
                                <div className="flex flex-wrap gap-2">
                                  {day.slots.map((slot, slotIndex) => (
                                    <button
                                      key={slotIndex}
                                      className="px-3 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-500/30 transition-all"
                                    >
                                      {slot}
                                    </button>
                                  ))}
                                </div>
                              </div>
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
                          onClick={handleBookConsultation}
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
                              Book Consultation
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-gray-400 text-sm mb-4">Need immediate assistance?</p>
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

      {/* Benefits */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our Consultations?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Get expert guidance from industry leaders with proven track records
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Simple steps to get expert guidance for your business
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600"></div>
              {process.map((step, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-slate-800/50 p-6 rounded-lg">
                      <div className="text-cyan-400 font-bold text-lg mb-2">Step {step.step}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Hear from business leaders who benefited from our consultations
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Book your free consultation today and discover how our AI and technology solutions 
            can drive growth and efficiency in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBookConsultation}
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Free Consultation
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