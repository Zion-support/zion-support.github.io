import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  Mail,
  MessageSquare,
  Video,
  Award,
  Shield,
  Brain,
  Zap,
  Target,
  BarChart,
  Database,
  Settings,
  Globe,
  Cpu,
  Lock,
  Activity,
  TrendingUp,
  Sparkles,
  FileText,
  Bot,
  DollarSign,
  Stethoscope,
  Eye
} from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consultation form submitted:', { ...formData, selectedService, selectedTimeSlot });
    setIsSubmitted(true);
  };

  const services = [
    { value: 'ai-analytics', label: 'AI Analytics', icon: BarChart },
    { value: 'ai-automation', label: 'AI Automation', icon: Zap },
    { value: 'ai-customer-support', label: 'AI Customer Support', icon: Bot },
    { value: 'ai-content-generation', label: 'AI Content Generation', icon: FileText },
    { value: 'ai-healthcare', label: 'AI Healthcare', icon: Stethoscope },
    { value: 'ai-fintech', label: 'AI Fintech', icon: DollarSign },
    { value: 'ai-cybersecurity', label: 'AI Cybersecurity', icon: Shield },
    { value: 'cloud-infrastructure', label: 'Cloud Infrastructure', icon: Globe },
    { value: 'it-consulting', label: 'IT Consulting', icon: Settings },
    { value: 'micro-saas', label: 'Micro SaaS Solutions', icon: Cpu },
    { value: 'custom', label: 'Custom Solution', icon: Brain }
  ];

  const timeSlots = [
    { value: 'morning-1', label: 'Monday 9:00 AM - 10:00 AM EST' },
    { value: 'morning-2', label: 'Monday 10:00 AM - 11:00 AM EST' },
    { value: 'afternoon-1', label: 'Monday 2:00 PM - 3:00 PM EST' },
    { value: 'afternoon-2', label: 'Monday 3:00 PM - 4:00 PM EST' },
    { value: 'tuesday-morning-1', label: 'Tuesday 9:00 AM - 10:00 AM EST' },
    { value: 'tuesday-morning-2', label: 'Tuesday 10:00 AM - 11:00 AM EST' },
    { value: 'tuesday-afternoon-1', label: 'Tuesday 2:00 PM - 3:00 PM EST' },
    { value: 'tuesday-afternoon-2', label: 'Tuesday 3:00 PM - 4:00 PM EST' },
    { value: 'wednesday-morning-1', label: 'Wednesday 9:00 AM - 10:00 AM EST' },
    { value: 'wednesday-morning-2', label: 'Wednesday 10:00 AM - 11:00 AM EST' },
    { value: 'wednesday-afternoon-1', label: 'Wednesday 2:00 PM - 3:00 PM EST' },
    { value: 'wednesday-afternoon-2', label: 'Wednesday 3:00 PM - 4:00 PM EST' },
    { value: 'thursday-morning-1', label: 'Thursday 9:00 AM - 10:00 AM EST' },
    { value: 'thursday-morning-2', label: 'Thursday 10:00 AM - 11:00 AM EST' },
    { value: 'thursday-afternoon-1', label: 'Thursday 2:00 PM - 3:00 PM EST' },
    { value: 'thursday-afternoon-2', label: 'Thursday 3:00 PM - 4:00 PM EST' },
    { value: 'friday-morning-1', label: 'Friday 9:00 AM - 10:00 AM EST' },
    { value: 'friday-morning-2', label: 'Friday 10:00 AM - 11:00 AM EST' },
    { value: 'friday-afternoon-1', label: 'Friday 2:00 PM - 3:00 PM EST' },
    { value: 'friday-afternoon-2', label: 'Friday 3:00 PM - 4:00 PM EST' }
  ];

  const consultationTypes = [
    {
      title: 'Free Discovery Call',
      duration: '30 minutes',
      price: 'Free',
      description: 'Initial consultation to understand your needs and challenges',
      features: [
        'Needs assessment',
        'Solution overview',
        'Next steps planning',
        'Q&A session'
      ],
      icon: MessageSquare,
      popular: true
    },
    {
      title: 'Technical Deep Dive',
      duration: '60 minutes',
      price: '$200',
      description: 'Detailed technical discussion and solution architecture',
      features: [
        'Technical requirements analysis',
        'Solution architecture design',
        'Implementation timeline',
        'Cost estimation'
      ],
      icon: Settings,
      popular: false
    },
    {
      title: 'Strategy Workshop',
      duration: '2 hours',
      price: '$500',
      description: 'Comprehensive business strategy and AI roadmap planning',
      features: [
        'Business process analysis',
        'AI strategy development',
        'ROI projections',
        'Implementation roadmap'
      ],
      icon: Target,
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Expert Guidance',
      description: 'Get advice from our team of AI and IT experts with 10+ years of experience',
      icon: Award
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored recommendations based on your specific business needs and goals',
      icon: Target
    },
    {
      title: 'Cost Transparency',
      description: 'Clear pricing and timeline estimates for your project implementation',
      icon: DollarSign
    },
    {
      title: 'No Obligation',
      description: 'Free consultation with no commitment required to proceed with our services',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Helmet>
        <title>Free Consultation - Zion Tech Group | Schedule Your AI & IT Strategy Session</title>
        <meta name="description" content="Schedule a free consultation with our AI and IT experts. Get personalized recommendations, cost estimates, and implementation strategies for your business." />
        <link rel="canonical" href="https://ziontechgroup.com/consultation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Free Consultation
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get expert advice on how AI and IT solutions can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#schedule"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
              >
                Schedule Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#consultation-types"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 inline-flex items-center"
              >
                View Options
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Types Section */}
      <section id="consultation-types" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Consultation Options</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the consultation type that best fits your needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((type, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 relative ${
                  type.popular 
                    ? 'border-cyan-400/60 shadow-lg shadow-cyan-500/10' 
                    : 'border-gray-600 hover:border-cyan-400/60'
                }`}
              >
                {type.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{type.title}</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{type.price}</div>
                  <div className="text-gray-400">{type.duration}</div>
                </div>
                
                <p className="text-gray-300 mb-6 text-center">{type.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedService(type.title.toLowerCase().replace(/\s+/g, '-'))}
                  className={`w-full font-bold py-3 px-6 rounded-lg transition-all duration-300 ${
                    type.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                      : 'bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white'
                  }`}
                >
                  Choose This Option
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Schedule a Consultation?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get personalized insights and recommendations from our expert team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Form Section */}
      <section id="schedule" className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 flex items-center justify-center">
              <Calendar className="w-8 h-8 mr-3 text-cyan-400" />
              Schedule Your Consultation
            </h2>
            <p className="text-xl text-gray-300">
              Fill out the form below and we'll contact you to confirm your appointment
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">Consultation Scheduled!</h3>
              <p className="text-gray-300 mb-4">
                Thank you for scheduling your consultation. We'll contact you within 24 hours to confirm your appointment.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Schedule Another Consultation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Interest *
                </label>
                <select
                  id="service"
                  name="service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-300 mb-2">
                  Preferred Time Slot *
                </label>
                <select
                  id="timeSlot"
                  name="timeSlot"
                  value={selectedTimeSlot}
                  onChange={(e) => setSelectedTimeSlot(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                >
                  <option value="">Select a time slot</option>
                  {timeSlots.map((slot) => (
                    <option key={slot.value} value={slot.value}>
                      {slot.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="Tell us about your project, challenges, or specific questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </button>
            </form>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't wait to get started. Schedule your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;