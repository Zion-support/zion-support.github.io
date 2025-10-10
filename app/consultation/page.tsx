'use client';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-8a15
=======

>>>>>>> cursor/analyze-improve-and-deploy-application-9948
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

interface ConsultationType {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  popular: boolean});;)
}

const ConsultationPage: React.FC = () => {
<<<<<<< HEAD
  const consultationServices = [
    'AI Strategy & Implementation',
    'Cloud Migration Planning',
    'Cybersecurity Assessment',
    'Digital Transformation',
    'IT Infrastructure Review',
    'Technology Roadmap Development'
  ];
=======
  const [selectedType, setSelectedType] = useState<string></string>('');
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0

  const consultationTypes: ConsultationType[] = [
    {
      id: '1',
      name: 'Discovery Call',
      description: 'Initial consultation to understand your business needs and challenges',
      duration: '30 minutes',
      price: 'Free',
      features: [
<<<<<<< HEAD
        'Business needs assessment',
        'Technology audit',
        'Solution recommendations',
        'Next steps planning'
      ],
      popular: false});;)
},
    {
      id: '2',
      name: 'Strategic Planning',
      description: 'Comprehensive technology strategy development for your organization',
      duration: '2-4 hours',
      price: '$500',
      features: [
        'Detailed technology roadmap',
        'Risk assessment',
        'Implementation timeline',
        'Budget planning',
        'ROI analysis'
=======
        'Current IT assessment',
        'Technology roadmap development',
        'Budget planning and optimization',
        'Risk analysis and mitigation',
        'Implementation timeline'
>>>>>>> cursor/fix-errors-and-merge-to-main-550e
      ],
      popular: true});;)
},
    {
<<<<<<< HEAD
      id: '3',
      name: 'Technical Deep Dive',
      description: 'In-depth technical analysis and solution architecture design',
      duration: '4-8 hours',
      price: '$1,200',
      features: [
<<<<<<< HEAD
        'Technical architecture review',
        'Security assessment',
        'Performance optimization',
        'Integration planning',
        'Implementation strategy'
=======
        'Cloud readiness assessment',
=======
      id: 'ai',
      name: 'AI Implementation Consultation',
      description: 'Expert guidance on AI adoption, technology selection, and implementation strategy for your business.',
      duration: '3-5 hours',
      price: '$750',
      features: [
        'AI readiness assessment',
        'Technology stack recommendations',
        'Implementation roadmap',
        'ROI projections',
        'Ongoing support included'
      ],
      popular: true
    },
    {
      id: 'cloud',
      name: 'Cloud Migration Consultation',
      description: 'Strategic planning for cloud migration, platform selection, and optimization strategies.',
      duration: '4-6 hours',
      price: '$1,000',
      features: [
        'Current infrastructure analysis',
        'Cloud platform comparison',
>>>>>>> cursor/analyze-improve-and-deploy-application-9948
        'Migration strategy development',
        'Cost optimization planning',
        'Security and compliance review'
      ],
      popular: false});;)
},
    {
      id: 'security',
<<<<<<< HEAD
      name: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations to protect your digital assets.',
      duration: '3-5 hours',
      price: '$750',
=======
      name: 'Cybersecurity Assessment',
      description: 'Comprehensive security evaluation and recommendations to protect your digital assets.',
      duration: '3-4 hours',
      price: '$600',
>>>>>>> cursor/analyze-improve-and-deploy-application-9948
      features: [
        'Security vulnerability assessment',
        'Compliance review',
        'Penetration testing guidance',
        'Security policy development',
        'Incident response planning'
>>>>>>> cursor/fix-errors-and-merge-to-main-550e
      ],
<<<<<<< HEAD
      popular: false});;)
}
  ];

<<<<<<< HEAD
  const [selectedType, setSelectedType] = useState<string>('1');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
=======
  const experts = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI & Machine Learning Consultant',
      experience: '15+ years',
      expertise: ['AI Strategy', 'Machine Learning', 'Data Science'],
      image: '/images/experts/sarah-chen.jpg'});;)
},
    {
      name: 'Michael Rodriguez',
      role: 'Cloud Architecture Specialist',
      experience: '12+ years',
<<<<<<< HEAD
      expertise: ['Cloud Migration', 'AWS', 'Azure', 'DevOps'],
      image: '/images/experts/michael-rodriguez.jpg'
    },
=======
      expertise: ['Cloud Migration', 'DevOps', 'Infrastructure'],
      image: '/images/experts/michael-rodriguez.jpg'});;)
},
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
    {
      name: 'Alex Thompson',
      role: 'Cybersecurity Consultant',
      experience: '10+ years',
      expertise: ['Security Audits', 'Compliance', 'Risk Management'],
      image: '/images/experts/alex-thompson.jpg'});;)
}
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-550e

<<<<<<< HEAD
  const handleBooking = (typeId: string) => {
    setSelectedType(typeId);
<<<<<<< HEAD
    console.log(`Booking consultation: ${typeId}`);
=======
import { Calendar, Clock, User, Mail, Phone, MessageCircle, CheckCircle, ArrowRight, Zap, Target, Users, Award } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    preferredTime: '',
    urgency: 'medium'
  });

  const services = [
    {
      icon: Zap,
      title: 'AI Strategy & Implementation',
      description: 'Develop and implement AI solutions tailored to your business needs',
      duration: '60-90 minutes'
    },
    {
      icon: Target,
      title: 'Cloud Migration Planning',
      description: 'Plan and execute seamless cloud migration strategies',
      duration: '45-60 minutes'
    },
    {
      icon: Users,
      title: 'Digital Transformation',
      description: 'Guide your organization through comprehensive digital transformation',
      duration: '90-120 minutes'
    },
    {
      icon: Award,
      title: 'Cybersecurity Assessment',
      description: 'Evaluate and strengthen your cybersecurity posture',
      duration: '60-90 minutes'
    }
  ];

  const consultationTypes = [
    {
      title: 'Discovery Call',
      description: 'Free 30-minute consultation to understand your needs',
      duration: '30 minutes',
      price: 'Free',
      features: ['Needs assessment', 'Solution overview', 'Next steps planning']
    },
    {
      title: 'Strategy Session',
      description: 'Comprehensive consultation with detailed recommendations',
      duration: '90 minutes',
      price: '$500',
      features: ['Detailed analysis', 'Custom recommendations', 'Implementation roadmap', 'Follow-up support']
    },
    {
      title: 'Executive Briefing',
      description: 'High-level strategic consultation for leadership teams',
      duration: '2 hours',
      price: '$1,000',
      features: ['Executive summary', 'Strategic recommendations', 'Risk assessment', 'ROI analysis']
    }
  ];

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-8a15
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
<<<<<<< HEAD
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-8a15
  };

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Consultation - Zion Tech Group | Expert IT Consulting</title>
=======
    // In a real app, this would open a booking modal or redirect to a booking page
    console.log(`Booking consultation: ${typeId}`););)
};

  return (
    <div></div>
      <Helmet></Helmet>
        <titl></titl>Consultation - Zion Tech Group | Expert IT Consulting</title>
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
        <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy. Book a consultation with our experienced team." />
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity consulting, technology strategy" />
        <meta property="og:title" content="Consultation - Zion Tech Group" />
        <meta property="og:description" content="Expert IT consulting and strategy sessions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/consultation" />
=======
        <title>Consultation - Zion Tech Group | Expert AI & IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI strategy, cloud migration, cybersecurity, and digital transformation. Free discovery calls available." />
        <meta name="keywords" content="AI consultation, IT consulting, cloud migration, cybersecurity, digital transformation, technology strategy" />
>>>>>>> cursor/fix-errors-and-merge-to-main-8a15
      </Helmet>

<<<<<<< HEAD
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
<<<<<<< HEAD
=======
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert IT Consultation</title>
        <meta name="description" content="Get expert IT consultation from our certified professionals. Strategic planning, technology assessment, and digital transformation guidance." />
        <meta name="keywords" content="IT consultation, technology consulting, digital transformation, IT strategy, technology assessment" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
>>>>>>> cursor/analyze-improve-and-deploy-application-9948
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Consultation</span>
=======
      <div></div>
        {/* Hero Section */}
        <section></section>
          <div></div>
            <h1></h1>
              Expert <spa></spa>Consultation</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
            </h1>
<<<<<<< HEAD
            <p></p>
              Get personalized guidance from our experienced team of IT experts. Transform your business with strategic technology solutions.
            </p>
=======
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Consultation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get personalized guidance from our AI and IT experts to transform your business with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  <Calendar className="w-5 h-5 inline mr-2" />
                  Book Free Discovery Call
                </button>
                <Link
                  to="/contact"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
>>>>>>> cursor/fix-errors-and-merge-to-main-8a15

<<<<<<< HEAD
        {/* Services Overview */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Consultation Services</h2>
              <p className="text-xl text-gray-300">Comprehensive technology guidance tailored to your needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {consultationServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-white font-medium">{service}</span>
                  </div>
=======
            <div></div>
              <div></div>
                <Calendar className="w-8 h-8 text-purple-400" />
                <div></div>
                  <di></di>Flexible Scheduling</div>
                  <di></di>Book at your convenience</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
                </div>
<<<<<<< HEAD
              </div>
              <div></div>
                <Users className="w-8 h-8 text-purple-400" />
                <div></div>
                  <di></di>Expert Team</div>
                  <di></di>15+ years experience</div>
                </div>
              </div>
              <div></div>
                <CheckCircle className="w-8 h-8 text-purple-400" />
                <div></div>
                  <di></di>Proven Results</div>
                  <di></di>98% client satisfaction</div>
                </div>
              ));
            </div>
=======
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get personalized guidance from our certified IT professionals. Strategic planning, technology assessment, and digital transformation expertise.
            </p>
>>>>>>> cursor/analyze-improve-and-deploy-application-9948
          </div>
        </section>

        {/* Consultation Types */}
        <section></section>
          <div></div>
            <h></h>Choose Your Consultation</h2>
            <div></div>
              {consultationTypes.map((type, index) => (
                <div></div>
                  <div></div>
                    <h></h>{type.title}</h3>
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    <di></di>{type.price}</div>
                    <di></di>{type.duration}</div>
                  </div>
                  
                  <ul></ul>
                    {type.features.map((feature, featureIndex) => (
                      <li></li>
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <spa></spa>{feature}</span>
                      </li>
                    ));
                  </ul>
                  
                  <button></button>
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ));
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section></section>
          <div></div>
            <div></div>
              <div></div>
                <h></h>Schedule Your Consultation</h2>
                <p></p>
                  Fill out the form below and we'll get back to you within 24 hours to schedule your consultation.
                </p>
              </div>
              
              <form></form>
                <div></div>
                  <div></div>
                    <labe></labe>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div></div>
                    <labe></labe>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div></div>
                  <div></div>
                    <labe></labe>Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div></div>
                    <labe></labe>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div></div>
                  <labe></labe>Service Interest *</label>
                  <select></select>
                    <optio></optio>Select a service</option>
                    <optio></optio>AI Strategy & Implementation</option>
                    <optio></optio>Cloud Migration Planning</option>
                    <optio></optio>Digital Transformation</option>
                    <optio></optio>Cybersecurity Assessment</option>
                    <optio></optio>Other</option>
                  </select>
                </div>
                
                <div></div>
                  <div></div>
                    <labe></labe>Preferred Time</label>
                    <select></select>
                      <optio></optio>Select preferred time</option>
                      <optio></optio>Morning (9 AM - 12 PM)</option>
                      <optio></optio>Afternoon (12 PM - 5 PM)</option>
                      <optio></optio>Evening (5 PM - 8 PM)</option>
                    </select>
                  </div>
                  
                  <div></div>
                    <labe></labe>Urgency</label>
                    <select></select>
                      <optio></optio>Low - Within 2 weeks</option>
                      <optio></optio>Medium - Within 1 week</option>
                      <optio></optio>High - Within 2-3 days</option>
                      <optio></optio>Urgent - Within 24 hours</option>
                    </select>
                  </div>
                </div>
                
                <div></div>
                  <labe></labe>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    placeholder="Tell us about your project and what you'd like to discuss..."
                  />
                </div>
                
                <div></div>
                  <button></button>
                    Schedule Consultation
                    <Calendar className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section></section>
          <div></div>
            <div></div>
              <h></h>Other Ways to Reach Us</h2>
              <p className="text-gray-300">Prefer to contact us directly? Here are other ways to get in touch.</p>
            </div>
            
            <div></div>
              <div></div>
                <div></div>
                  <Phone className="w-8 h-8 text-slate-900" />
                </div>
                <h></h>Phone</h3>
                <p className="text-cyan-400 font-medium">+1 (302) 464-0950</p>
                <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM EST</p>
              </div>
              
              <div></div>
                <div></div>
                  <Mail className="w-8 h-8 text-slate-900" />
                </div>
                <h></h>Email</h3>
                <p className="text-cyan-400 font-medium">consultation@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm">24/7 response</p>
              </div>
              
              <div></div>
                <div></div>
                  <MessageCircle className="w-8 h-8 text-slate-900" />
                </div>
                <h></h>Live Chat</h3>
                <p className="text-cyan-400 font-medium">Available on website</p>
                <p className="text-gray-400 text-sm">24/7 support</p>
              </div>
=======
              ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-8a15
            </div>
          </div>
        </section>

        {/* Consultation Types */}
<<<<<<< HEAD
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
<<<<<<< HEAD
              <h2 className="text-3xl font-bold text-white mb-4">Choose Your Consultation Type</h2>
              <p className="text-xl text-gray-300">Select the consultation that best fits your needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 cursor-pointer ${
                    selectedType === type.id
                      ? 'border-purple-400 bg-purple-500/20'
                      : 'border-white/20 hover:border-purple-400'
                  } ${type.popular ? 'ring-2 ring-purple-400' : ''}`}
                  onClick={() => setSelectedType(type.id)}
                >
                  {type.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
=======
        <section></section>
          <div></div>
            <div></div>
              <h></h>Choose Your Consultation Type</h2>
              <p></p>
                Select the consultation that best fits your needs. All sessions include detailed reports and actionable recommendations.
              </p>
            </div>

            <div></div>
              {consultationTypes.map((type) => (
                <div></div>
                  {type.popular && (
                    <div></div>
                      <div></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
=======
              <h2 className="text-3xl font-bold text-white mb-4">
                Choose Your Consultation Type
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Select the consultation that best fits your needs. All sessions include detailed reports and follow-up support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${
                    selectedType === type.id
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25 scale-105'
                      : 'border-white/20 hover:border-cyan-400/50'
                  } ${type.popular ? 'ring-2 ring-purple-400' : ''}`}
                  onClick={() => setSelectedType(type.id)}
                >
                  {type.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
>>>>>>> cursor/analyze-improve-and-deploy-application-9948
                        Most Popular
                      </span>
                    </div>
<<<<<<< HEAD
                  )}
<<<<<<< HEAD
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{type.name}</h3>
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400">{type.duration}</span>
                    </div>
                    <div className="text-3xl font-bold text-white mb-6">{type.price}</div>
                    <ul className="space-y-2 mb-6">
                      {type.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                      Select This Option
                    </button>
=======
                  );

                  <div></div>
                    <h></h>{type.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{type.description}</p>
                    <div></div>
                      <Clock className="w-4 h-4" />
                      <spa></spa>{type.duration}</span>
                    </div>
                    <di></di>{type.price}</div>
                  </div>

                  <ul></ul>
                    {type.features.map((feature, index) => (
                      <li></li>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
=======

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{type.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{type.description}</p>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{type.duration}</span>
                      </div>
                      <div className="text-2xl font-bold text-cyan-400">{type.price}</div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
>>>>>>> cursor/analyze-improve-and-deploy-application-9948
                      </li>
                    ));
                  </ul>

<<<<<<< HEAD
                  <button></button> handleBooking(type.id);
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      type.popular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'});;)
}`}
=======
                  <button
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      selectedType === type.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
>>>>>>> cursor/analyze-improve-and-deploy-application-9948
                  >
                    {selectedType === type.id ? 'Selected' : 'Select This'}
                  </button>
                </div>
              ));
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Expert Team */}
        <section></section>
          <div></div>
            <div></div>
              <h></h>Meet Our Experts</h2>
              <p></p>
                Our team of experienced professionals brings deep expertise across all areas of technology.
              </p>
            </div>

            <div></div>
              {experts.map((expert, index) => (
                <div></div>
                  <div></div>
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h></h>{expert.name}</h3>
                  <p className="text-purple-400 mb-2">{expert.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{expert.experience} experience</p>
                  <div></div>
                    {expert.expertise.map((skill, skillIndex) => (
                      <span></span>
                        {skill}
                      </span>
                    ));
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
                  </div>
                </div>
              ));
=======
        {/* Booking Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Book Your Consultation
                </h2>
                <p className="text-gray-300">
                  Ready to transform your business? Schedule a consultation with our experts.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-300 text-sm">Phone</p>
                        <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                          +1 (302) 464-0950
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-300 text-sm">Email</p>
                        <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                          kleber@ziontechgroup.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-300 text-sm">Address</p>
                        <p className="text-white font-semibold">
                          364 E Main St STE 1008<br />
                          Middletown, DE 19709
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Booking Form */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">Quick Booking</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Consultation Type
                      </label>
                      <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      >
                        <option value="">Select consultation type</option>
                        {consultationTypes.map((type) => (
                          <option key={type.id} value={type.id}>
                            {type.name} - {type.price}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Book Consultation
                    </button>
                  </form>
                </div>
              </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-9948
            </div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Contact Form */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Schedule Your Consultation</h2>
                <p className="text-xl text-gray-300">Fill out the form below and we'll get back to you within 24 hours</p>
=======
        {/* Contact Information */}
        <section></section>
          <div></div>
            <div></div>
              <div></div>
                <h></h>Ready to Get Started?</h2>
                <p></p>
                  Contact us today to schedule your consultation or learn more about our services.
                </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-white font-medium mb-2">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {consultationServices.map((service, index) => (
                      <option key={index} value={service} className="bg-gray-800">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us about your project and specific needs"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <ArrowRight className="w-5 h-5 inline mr-2" />
                    Schedule Consultation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact Info */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-300">Prefer to reach out directly? We're here to help</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-purple-400" />
=======
              <div></div>
                <div></div>
                  <div></div>
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h></h>Call Us</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
                <div></div>
                  <div></div>
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h></h>Email Us</h3>
                  <p className="text-gray-300">consultation@ziontech.com</p>
                </div>
                <div></div>
                  <div></div>
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h></h>Visit Us</h3>
                  <p className="text-gray-300">123 Tech Street, Silicon Valley</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
<<<<<<< HEAD

              <div></div>
                <Link></Link>
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link></Link>
                  View All Services
                </Link>
              </div>
=======
        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-gray-300 mb-8">
              For urgent IT issues or immediate consultation, contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Call Now: (302) 464-0950
              </a>
              <Link
                to="/contact"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Contact Us
              </Link>
>>>>>>> cursor/analyze-improve-and-deploy-application-9948
            </div>
=======
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Consultation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Get personalized guidance from our expert team to transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleBooking('strategy')}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
            <Link
              to="/contact"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Contact Us
            </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-550e
          </div>
<<<<<<< HEAD
        </div>
      </section>

<<<<<<< HEAD
      {/* Consultation Types */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Consultation Services</h2>
=======
      {/* Services Section */}
      <section></section>
        <div></div>
          <div></div>
            <h></h>Consultation Services</h2>
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
            <p className="text-xl text-gray-300">Comprehensive technology consulting tailored to your business needs</p>
          </div>
          
          <div></div>
            {consultationServices.map((service, index) => (
              <div></div>
                <div></div>
                  <CheckCircle className="h-6 w-6 text-white" />
=======
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-purple-400" />
>>>>>>> cursor/fix-errors-and-merge-to-main-8a15
                </div>
<<<<<<< HEAD
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">consultation@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">123 Tech Street, Innovation City</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
=======
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Consultation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((type) => (
              <div
                key={type.id}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border ${
                  type.popular ? 'border-purple-400' : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 relative`}
              >
                {type.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">{type.name}</h3>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Duration
                    </span>
                    <span>{type.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Price
                    </span>
                    <span className="text-2xl font-bold text-white">{type.price}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-8">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleBooking(type.id)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    type.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Book Consultation
                </button>
=======
                <h></h>{service}</h3>
                <p className="text-gray-300">Expert guidance and strategic planning for your technology initiatives.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
              </div>
            ));
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Expert Team */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Meet Our Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{expert.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{expert.name}</h3>
                <p className="text-purple-400 mb-2">{expert.role}</p>
                <p className="text-gray-400 text-sm mb-4">{expert.experience}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {expert.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
=======
      {/* Process Section */}
      <section></section>
        <div></div>
          <div></div>
            <h></h>Our Process</h2>
            <p className="text-xl text-gray-300">How we deliver exceptional consultation services</p>
          </div>
          
          <div></div>
            <div></div>
              <div></div>
                <spa></spa>1</span>
              </div>
              <h></h>Discovery</h3>
              <p className="text-gray-300">We analyze your current technology landscape and business objectives.</p>
            </div>
            
            <div></div>
              <div></div>
                <spa></spa>2</span>
              </div>
              <h></h>Strategy</h3>
              <p className="text-gray-300">We develop a customized roadmap aligned with your goals.</p>
            </div>
            
            <div></div>
              <div></div>
                <spa></spa>3</span>
              </div>
              <h></h>Implementation</h3>
              <p className="text-gray-300">We guide you through execution and provide ongoing support.</p>
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Book a consultation with our experts and take the first step towards transforming your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center">
=======
      <section></section>
        <div></div>
          <h2></h2>
            Ready to Transform Your Business?
          </h2>
          <p></p>
            Schedule a consultation with our experts and discover how technology can drive your success.
          </p>
          <div></div>
            <button></button>
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Now
            </button>
            <button></button>
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-550e
=======
        </section>
      </div>
    </>
>>>>>>> cursor/analyze-improve-and-deploy-application-9948
  );
=======
  ););)
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
};

export default ConsultationPage;