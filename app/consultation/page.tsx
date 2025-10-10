'use client';
<<<<<<< HEAD
      features: [,
        'AI readiness assessment',
        'Technology roadmap development',
        'ROI analysis and projections',
        'Implementation planning',
        'Risk assessment',
        'Team training recommendations'
      ],
      popular: true;,
    },
    {id: 'technical',
      name: 'Technical Architecture Review',
      description: 'Deep dive into your current technical infrastructure',
      duration: '1-2 weeks',
      price: '$3,000',
      features: [,
        'Infrastructure audit',
        'Security assessment',
        'Performance analysis',
        'Scalability recommendations',
        'Technology stack optimization',
        'Migration planning'
      ],
      popular: false;,},
    {id: 'digital',
      name: 'Digital Transformation Planning',
      description: 'Complete digital transformation strategy and roadmap',
      duration: '4-6 weeks',
      price: '$8,000',
      features: [,
        'Current state analysis',
        'Future state vision',
        'Change management strategy',
        'Technology selection',
        'Implementation timeline',
        'Success metrics definition'
      ],
      popular: false;,
  const process = [
    {step: '1',},
    {step: '2',
      title: 'Strategy Development',},
    {step: '3',
      title: 'Implementation Plan',},
    {step: '4',
      title: 'Ongoing Support',}]

  return(<>)
      <Helmet />
        <title>Consultation Services | Zion Tech Group</title>
        <meta name="description" content="Expert consultation services for AI strategy, cloud migration, and cybersecurity. Get personalized guidance for your technology needs." />
        <meta name="keywords" content="AI consultation, cloud migration, cybersecurity audit, technology consulting, IT strategy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">,</h1>
                Expert Consultation Services;
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Get personalized guidance and strategic insights to transform your business with cutting-edge technology.</p>
              </p>
=======
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  MessageCircle, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Shield,
  Zap,
  Brain,
  Cloud,
  Code
} from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [selectedService, setSelectedService] = useState('');

  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Custom AI development and implementation',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Cloud migration and infrastructure management',
      features: ['AWS/Azure/GCP', 'Cloud Architecture', 'DevOps', 'Security']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Bespoke software and web applications',
      features: ['Web Development', 'Mobile Apps', 'API Development', 'Database Design']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions',
      features: ['Security Audit', 'Penetration Testing', 'Compliance', 'Monitoring']
    }
  ];

  const consultationTypes = [
    {
      title: 'Free Discovery Call',
      duration: '30 minutes',
      price: 'Free',
      description: 'Initial consultation to understand your needs',
      features: ['Needs Assessment', 'Solution Overview', 'Next Steps Planning'],
      recommended: false
    },
    {
      title: 'Technical Consultation',
      duration: '1 hour',
      price: '$200',
      description: 'Detailed technical analysis and recommendations',
      features: ['Technical Review', 'Architecture Planning', 'Implementation Roadmap', 'Resource Estimation'],
      recommended: true
    },
    {
      title: 'Strategic Planning',
      duration: '2 hours',
      price: '$500',
      description: 'Comprehensive business and technology strategy',
      features: ['Business Analysis', 'Technology Roadmap', 'ROI Projections', 'Risk Assessment', 'Implementation Plan'],
      recommended: false
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group</title>
        <meta name="description" content="Schedule a free consultation with our AI and IT experts. Get personalized solutions for your business needs." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Free
              </span>
              <br />
              <span className="text-white">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get expert advice on AI, cloud computing, and digital transformation. 
              Schedule a free consultation with our specialists today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Schedule Now
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-medium transition-all duration-300">
                Call (302) 464-0950
              </button>
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
            </div>
          </div>
        </section>

<<<<<<< HEAD
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8 mb-20">,</div>
              {services.map((service, index) => (
                <div key={index}className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover: border-cyan-400/30 transition-all duration-300">,</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description</p>}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature} </li>
                    ))}
                  </ul>

                  <div className="border-t border-white/10 pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price</span>}</span>
                      <span className="text-gray-400 flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {service.duration} </span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover: from-cyan-600 hover:to-purple-600 transition-all duration-300">,</button>
                      Get Started;
                    </button>
=======
        {/* Services Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
              </div>
            </div>

      description: 'Provide continuous guidance and support throughout implementation.',
      icon: Clock;,
    }
  ];

  const selectedConsultation = consultationTypes.find(type => type.id === selectedType);

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>
      <Helmet />
        <title>Consultation - Zion Tech Group | Expert AI & IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI strategy, technical architecture, and digital transformation. Our consultants help you make informed technology decisions." />
        <meta name="keywords" content="AI consultation, IT consulting, digital transformation, technology strategy, technical architecture, business consulting" />
      </Helmet>

      {/* Hero Section */} <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md: text-7xl font-bold text-white mb-6">,</h1>
            Expert <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Consultation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Get expert guidance on AI strategy, technical architecture, and digital transformation.</p>
            Our experienced consultants help you make informed technology decisions.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover: from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">,</button>
              Schedule Consultation;
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-blue-400 text-blue-400 hover: bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">,</button>
              Download Brochure;
            </button>
          </div>
        </div>
      </section>

      {/* Consultation Types */} <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Consultation Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose the consultation type that best fits your needs;</p>
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,</div>
            {consultationTypes.map((type) => (
              <div;
                key={type.id}className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 cursor-pointer hover: scale-105 ${,
                  selectedType === type.id;
                    ? 'border-blue-400/50 ring-2 ring-blue-400/20'
                    : 'border-white/20 hover: border-white/40',}`}
                onClick={() =>setSelectedType(type.id)</div>}>
                {type.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular;</div>
                    </div>
                  </div>
                )} <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{type.name}</h3>
                  <p className="text-gray-300 mb-4">{type.description</p>}</p>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-3xl font-bold text-white">{type.price</span>}</span>
                    <span className="text-gray-400">{type.duration</span>}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {type.features.map((feature, index) => (
                    <li key={index}className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature</span>}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Consultation Details */}{selectedConsultation && (
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">{selectedConsultation.name</h2>}</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">{selectedConsultation.description</p>}</p>
            </div>

            <div className="grid grid-cols-1 lg: grid-cols-2 gap-12">,</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">What's Included</h3>
                <ul className="space-y-4">
                  {selectedConsultation.features.map((feature, index) => (
                    <li key={index}className="flex items-start text-gray-300">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature</span>}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Schedule Your Consultation</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <span>Duration: {selectedConsultation.duration,</span>}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span>Investment: {selectedConsultation.price,</span>}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Users className="w-5 h-5 text-blue-400" />
                    <span>Team of 2-3 experts</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover: from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">,</button>
                  Book Now;
                </button>
=======
        {/* Consultation Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Consultation Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((consultation, index) => (
                <div
                  key={index}
                  className={`bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 relative ${
                    consultation.recommended 
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                      : 'border-slate-700'
                  }`}
                >
                  {consultation.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Recommended
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{consultation.title}</h3>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{consultation.price}</div>
                    <div className="text-gray-400">{consultation.duration}</div>
                  </div>
                  <p className="text-gray-300 mb-6 text-center">{consultation.description}</p>
                  <div className="space-y-3 mb-8">
                    {consultation.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    consultation.recommended
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                  }`}>
                    {consultation.price === 'Free' ? 'Schedule Free Call' : 'Book Consultation'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Schedule Your Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-solutions">AI Solutions</option>
                      <option value="cloud-services">Cloud Services</option>
                      <option value="custom-development">Custom Development</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="consulting">General Consulting</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-plus">$100,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="3-months">Within 3 months</option>
                    <option value="6-months">Within 6 months</option>
                    <option value="planning">Just planning</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Tell us about your project and specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
                <p className="text-gray-300">Certified professionals with years of experience in AI and IT solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Proven Track Record</h3>
                <p className="text-gray-300">Successfully delivered 500+ projects for clients across various industries</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support and maintenance for all our solutions</p>
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD
=======
      </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
    </>
  );
};

<<<<<<< HEAD
      )}

      {/* Process Section */} <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">A structured approach to delivering exceptional consultation services;</p>
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,</div>
            {process.map((step, index) => (
              <div key={index}className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">Step {step.step</div>}}</div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description</p>}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */} <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300">Contact our consultation team today</p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,</div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-400">Mon-Fri 9AM-6PM EST</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">consultation@ziontechgroup.com</p>
              <p className="text-sm text-gray-400">24/7 Response</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">San Francisco, CA</p>
              <p className="text-sm text-gray-400">By Appointment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */} <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,</h2>
              Transform Your Business Today;
            </h2>
            <p className="text-xl text-gray-300 mb-8">Let our expert consultants help you navigate the complex world of AI and technology.</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover: from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">,</button>
                Schedule Free Consultation;
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover: bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">,</button>
                View Case Studies;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

=======
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
export default ConsultationPage;
