<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
'use client;

<<<<<<< HEAD
import React from 'react;

import { Helmet } from 'react-helmet-async;

import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star } from 'lucide-react;

import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react;

interface ConsultationType {}
  id: number;

  name: string;

  description: string;

  duration: string;

  price: string;

  features: string[];

  popular?: boolean;

}

const ConsultationPage: React.FC = () => {}
  const [selectedType, setSelectedType] = useState<number | null>(null);
<<<<<<< HEAD

  const [formData, setFormData] = useState({
    name: ',
    email: ',
    phone: ',
    company: ',
    message: ',
    consultationType: 
=======
  const [formData, setFormData] = useState({}
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    consultationType: ''
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  });

  const consultationTypes: ConsultationType[] = [
    {}
      id: 1,
  const consultationServices = [;
    'AI Strategy & Implementation,
    'Cloud Migration Planning,
    'Cybersecurity Assessment,
    'Digital Transformation,
    'IT Infrastructure Review,
    'Technology Roadmap Development
  ];

  const consultationTypes: ConsultationType[] = [
<<<<<<< HEAD
    {
      id: '1,
      name: 'Discovery Call,
      description: 'Initial consultation to understand your business needs and challenges,
      duration: '30 minutes,
      price: 'Free,
      features: [
        'Business needs assessment,
        'Technology evaluation,
        'Initial recommendations,
        'Next steps planning
=======
    {}
      id: '1',
      name: 'Discovery Call',
      description: 'Initial consultation to understand your business needs and challenges',
      duration: '30 minutes',
      price: 'Free',
      features: []
        'Business needs assessment',
        'Technology evaluation',
        'Initial recommendations',
        'Next steps planning'
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      ]
    },
    {}
      id: 2,
<<<<<<< HEAD
      name: 'Strategic Planning,
      description: 'Comprehensive analysis and strategic roadmap for your AI transformation,
      duration: '2 hours,
      price: '$500,
      features: [
        'Deep dive into current systems,
        'AI readiness assessment,
        'Strategic roadmap creation,
        'Implementation timeline,
        'ROI projections,
        'Follow-up support
=======
      name: 'Strategic Planning',
      description: 'Comprehensive analysis and strategic roadmap for your AI transformation',
      duration: '2 hours',
      price: '$500',
      features: []
        'Deep dive into current systems',
        'AI readiness assessment',
        'Strategic roadmap creation',
        'Implementation timeline',
        'ROI projections',
        'Follow-up support'
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      ],
      popular: true
    },
    {}
      id: 3,
<<<<<<< HEAD
      name: 'Technical Deep Dive,
      description: 'Detailed technical analysis and architecture recommendations,
      duration: '4 hours,
      price: '$1,200,
      features: [},
    {
      id: '3,
      name: 'Technical Deep Dive,
      description: 'In-depth technical analysis and solution architecture design,
      duration: '4-8 hours,
      price: '$1,200,
      features: [
        'Technical architecture review,
        'Security assessment,
        'Performance optimization,
        'Integration planning,
        'Scalability analysis,
        'Detailed technical documentation
=======
      name: 'Technical Deep Dive',
      description: 'Detailed technical analysis and architecture recommendations',
      duration: '4 hours',
      price: '$1,200',
      features: []
        'Business needs assessment',
        'Technology audit',
        'Solution recommendations',
        'Next steps planning'
      ],
      popular: false});;)
},
    {}
      id: '2',
      name: 'Strategic Planning',
      description: 'Comprehensive technology strategy development for your organization',
      duration: '2-4 hours',
      price: '$500',
      features: []
        'Detailed technology roadmap',
        'Risk assessment',
        'Implementation timeline',
        'Budget planning',
        'ROI analysis'
      ],
      popular: true});;)
},
    {}
      id: '3',
      name: 'Technical Deep Dive',
      description: 'In-depth technical analysis and solution architecture design',
      duration: '4-8 hours',
      price: '$1,200',
      features: []
        'Technical architecture review',
        'Security assessment',
        'Performance optimization',
        'Integration planning',
        'Scalability analysis',
        'Detailed technical documentation'
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      ]
    },
    {}
      id: 4,
<<<<<<< HEAD
      name: 'Executive Briefing,
      description: 'High-level overview for C-level executives and decision makers,
      duration: '1 hour,
      price: '$300,
      features: [
        'Executive summary,
        'Business impact analysis,
        'Investment recommendations,
        'Risk assessment,
        'Competitive advantages
=======
      name: 'Executive Briefing',
      description: 'High-level overview for C-level executives and decision makers',
      duration: '1 hour',
      price: '$300',
      features: []
        'Executive summary',
        'Business impact analysis',
        'Investment recommendations',
        'Risk assessment',
        'Competitive advantages'
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      ]
      ],
      popular: false});)}
=======
'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, Mail, Phone, CheckCircle, ArrowRight, Brain, Cloud, Shield, Zap } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-029f

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    preferredTime: '',
    budget: ''
  });

  const services = [
    {
      icon: Brain,
      title: 'AI Strategy & Implementation',
      description: 'Develop and implement AI solutions tailored to your business needs',
      duration: '2-4 hours'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration & Architecture',
      description: 'Plan and execute cloud migration strategies for optimal performance',
      duration: '2-3 hours'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security evaluation and risk mitigation strategies',
      duration: '3-4 hours'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Complete digital transformation roadmap and implementation plan',
      duration: '4-6 hours'
    }
  ];

<<<<<<< HEAD
<<<<<<< HEAD
  const experts = [    {;
      name: 'Dr. Sarah Chen,
      role: 'AI & Machine Learning Consultant,
      experience: '15+ years,
      expertise: ['AI Strategy', 'Machine Learning', 'Data Science],
      image: '/images/experts/sarah-chen.jpg});)
},
    {
      name: 'Michael Rodriguez,
      role: 'Cloud Architecture Specialist,
      experience: '12+ years,
      expertise: ['Cloud Migration', 'AWS', 'Azure', 'DevOps],
      image: '/images/experts/michael-rodriguez.jpg
    },
    {      name: 'Alex Thompson,
      role: 'Cybersecurity Consultant,
      experience: '10+ years,
      expertise: ['Security Audits', 'Compliance', 'Risk Management],
      image: '/images/experts/alex-thompson.jpg});)
=======
  const experts = [
    {}
      name: 'Dr. Sarah Chen',
      role: 'AI & Machine Learning Consultant',
      experience: '15+ years',
      expertise: ['AI Strategy', 'Machine Learning', 'Data Science'],
      image: '/images/experts/sarah-chen.jpg'});;)
},
    {}
      name: 'Michael Rodriguez',
      role: 'Cloud Architecture Specialist',
      experience: '12+ years',
      expertise: ['Cloud Migration', 'AWS', 'Azure', 'DevOps'],
      image: '/images/experts/michael-rodriguez.jpg'
    },
    {}
      name: 'Alex Thompson',
      role: 'Cybersecurity Consultant',
      experience: '10+ years',
      expertise: ['Security Audits', 'Compliance', 'Risk Management'],
      image: '/images/experts/alex-thompson.jpg'});;)
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
}

  ];

<<<<<<< HEAD
  const handleBooking = (typeId: string) => {;
=======
  const handleBooking = (typeId: string) => {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
    setSelectedType(typeId);

    console.log(`Booking consultation: ${typeId});
=======
'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Phone, Mail, CheckCircle, ArrowRight, Star, Users, Clock, Shield, Brain, Cloud, Zap, Globe, Settings, Database, Eye, Sparkles, BookOpen, FileText, Download } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

export default function ConsultationPage() {
  const [selectedService, setSelectedService] = useState('ai-services');
  const [isSubmitted, setIsSubmitted] = useState(false);
'use client';
import React from 'react';
      </div>
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9

    }

  ];

<<<<<<< HEAD
<<<<<<< HEAD
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {    const { name, value } = e.target;;

    setFormData(prev => ({
=======
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {}
=======
  const benefits = [
    'Free initial consultation',
    'Customized recommendations',
    'Expert guidance',
    'No obligation to proceed',
    'Confidential discussion',
    'Follow-up support'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Form submitted:', formData);
  };

    message: '',
    preferredDate: '',
    preferredTime: ''
  });
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
    const { name, value } = e.target;
    setFormData(prev => ({}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      ...prev,
      [name]: value
    }));

  };

<<<<<<< HEAD
<<<<<<< HEAD
  const handleSubmit = (e: React.FormEvent) => {;;

=======
  const handleSubmit = (e: React.FormEvent) => {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
    e.preventDefault();

    // Handle form submission
    console.log('Form submitted:, formData);

  };

const PagePage: React.FC = () => {}
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ConsultationPage: React.FC = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
=======
  const consultationTypes = [
    {
      name: 'Discovery Call',
      duration: '30 minutes',
      price: 'Free',
      description: 'Initial assessment of your needs and challenges',
      features: ['Needs assessment', 'Challenge identification', 'Solution overview', 'Next steps planning']
    },
    {
      name: 'Strategy Session',
      duration: '2 hours',
      price: '$500',
      description: 'Comprehensive strategy development and planning',
      features: ['Detailed analysis', 'Strategy development', 'Implementation roadmap', 'Resource planning', 'Follow-up support']
    },
    {
      name: 'Deep Dive Workshop',
      duration: '4 hours',
      price: '$1,500',
      description: 'Intensive workshop with detailed technical analysis',
      features: ['Technical deep dive', 'Custom solution design', 'Team training', 'Implementation support', '3-month follow-up']
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

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-029f
  return (

    <>
      <Helmet>
<<<<<<< HEAD
        <title>Consultation - Zion Tech Group | Expert AI & IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI implementation, digital transformation, and IT strategy. Free discovery calls and comprehensive planning sessions available. />
        <meta name="keywords" content="AI consultation, IT consulting, digital transformation, technology strategy, business consulting />
        <meta property="og:title" content="Consultation - Zion Tech Group />
        <meta property="og:description" content="Expert consultation for your AI and IT needs />
        <meta property="og:type" content="website />
        <meta property="og:url" content="https://ziontechgroup.com/consultation />
      </Helmet>
  return (<div>
        <title>Consultation - Zion Tech Group | Expert IT Consulting<
        <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy. Book a consultation with our experienced team. 
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity consulting, technology strategy 
      <

<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
        {/* Hero Section */}

        <section className="pt-24 pb-16 px-4">          <div className="max-w-7xl mx-auto text-center>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent>
                Page
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8>
              Get personalized guidance from our experts to transform your business with AI and cutting-edge technology
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center>
              <a
                href="tel:+13024640950
                className="inline-flex items-center px-8 py-4 bg-cyan-400 text-slate-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors
              >
                <Phone className="w-5 h-5 mr-2 />
                Call Now: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors
              >
                <Mail className="w-5 h-5 mr-2 />
                Email Us
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Expert
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Consultation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get personalized guidance from our expert team. We'll help you navigate the complex world of AI and IT solutions 
              to achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button">
                Book Free Discovery Call
                <ArrowRight className="w-4 h-4 inline ml-2" />
              </button>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Call (302) 464-0950
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-029f
              </a>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Consultation Types */}

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <div className="text-center mb-16>
              <h2 className="text-3xl font-bold text-white mb-4>Choose Your Consultation Type</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto>
                Select the consultation that best fits your needs and budget              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <a
                  href="tel:+13024640950
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Free Consultation - Zion Tech Group | Expert AI & IT Advice</title>
        <meta name="description" content="Schedule a free consultation with our AI and IT experts. Get personalized recommendations for your business needs." />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Free Expert
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Consultation
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get personalized advice from our AI and IT experts. Discover how our solutions 
            can transform your business and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Schedule Now
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Focus Area</h2>
            <p className="text-xl text-gray-300">Select the service you'd like to discuss during your consultation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  selectedService === service.id
                    ? 'border-purple-400 bg-purple-500/10'
                    : 'border-gray-700 bg-white/5 hover:border-purple-400/50'
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Consultation?</h2>
            <p className="text-xl text-gray-300">Get expert insights tailored to your business needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
              </div>
            ))}
    <>
  </>
      {/* Consultation Form */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Schedule Your Consultation</h2>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Consultation Scheduled!</h3>
                <p className="text-gray-300 mb-6">
                  Thank you for scheduling your consultation. We'll contact you within 24 hours to confirm the details.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
                >
                  <Phone className="w-5 h-5 />
                  Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com
                  className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300
                >
                  <Mail className="w-5 h-5 />
                  Email Us
                </a>
              </div>
            </div>

<<<<<<< HEAD
<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8>
              {consultationTypes.map((type) => (

                <div
                  key={type.id}

                  className={bg-white/10 backdrop-blur-lg rounded-2xl border p-8 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer ${
                    selectedType === type.id ? 'border-cyan-400' : 'border-white/20
                  } ${type.popular ? 'ring-2 ring-cyan-400/50' : ''}}

=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationTypes.map((type) => (}
                <div
                  key={type.id}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl border p-8 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer ${}
                    selectedType === type.id ? 'border-cyan-400' : 'border-white/20'
                  } ${type.popular ? 'ring-2 ring-cyan-400/50' : ''}`}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                  onClick={() => setSelectedType(type.id)}

                >
<<<<<<< HEAD
                  {type.popular && (

                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2>
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold>
=======
                  {type.popular && (}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center>
                    <h3 className="text-2xl font-bold text-white mb-4>{type.name}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed>{type.description}</p>
                    
                    <div className="mb-6>
                      <div className="text-3xl font-bold text-cyan-400 mb-2>{type.price}</div>
                      <div className="flex items-center justify-center text-gray-400>
                        <Clock className="w-4 h-4 mr-2 />
                        <span>{type.duration}</span>
                      </div>
                    </div>
                    
<<<<<<< HEAD
                    <ul className="space-y-3 mb-8>
                      {type.features.map((feature, index) => (

                        <li key={index} className="flex items-center text-gray-300>
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 />
                          <span className="text-sm>{feature}</span>
=======
                    <ul className="space-y-3 mb-8">
                      {type.features.map((feature, index) => (}
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                        </li>
                      ))}

                    </ul>
                    
                    <button className="w-full bg-cyan-400 text-slate-900 font-semibold py-3 rounded-lg hover:bg-cyan-300 transition-colors>
                      Select This Option
                    </button>
                  </div>
                </div>
              ))}

=======
        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Consultation Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <service.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-cyan-400 text-sm font-medium">{service.duration}</div>
                </div>
              ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-029f
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Why Choose Us */}

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <div className="text-center mb-16>
              <h2 className="text-3xl font-bold text-white mb-4>Why Choose Our Consultation?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto>
                Our experts bring decades of experience in AI, quantum computing, and enterprise technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center>
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <Users className="w-8 h-8 text-cyan-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Expert Team</h3>
                <p className="text-gray-300>Our consultants have 15+ years of experience in AI, quantum computing, and enterprise technology.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center>
                <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <CheckCircle className="w-8 h-8 text-purple-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Proven Results</h3>
                <p className="text-gray-300">Weve helped 500+ companies achieve 300% average ROI through strategic AI implementation.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center>
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <Star className="w-8 h-8 text-green-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>98% Satisfaction</h3>
                <p className="text-gray-300>Our clients consistently rate our consultation services as excellent and highly valuable.</p>
=======
        {/* Consultation Types */}
        <section className="py-16 px-4 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Choose Your Consultation Type
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((type, index) => (
                <div key={index} className={`cyber-card hologram-card p-8 ${index === 1 ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{type.name}</h3>
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-cyan-400">{type.price}</span>
                      <span className="text-gray-400 ml-2">/ {type.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    index === 1
                      ? 'cyber-button'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}>
                    Book {type.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="cyber-card hologram-card p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
                Schedule Your Consultation
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your full name"
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
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-strategy">AI Strategy & Implementation</option>
                      <option value="cloud-migration">Cloud Migration & Architecture</option>
                      <option value="cybersecurity">Cybersecurity Assessment</option>
                      <option value="digital-transformation">Digital Transformation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-plus">$100,000+</option>
                      <option value="discuss">Prefer to discuss</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Tell us about your project or challenges
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Describe your current challenges, goals, and what you hope to achieve..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="cyber-button text-center"
                  >
                    Schedule Consultation
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="cyber-card hologram-card p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Don't wait to get started. Book your consultation today and take the first step towards 
                digital transformation and business growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button text-center"
                >
                  Call (302) 464-0950
                  <ArrowRight className="w-4 h-4 inline ml-2" />
                </a>
                <a
                  href="mailto:consultation@ziontechgroup.com"
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 text-center"
                >
                  Email Us
                </a>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-029f
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}

        <section className="py-16 px-4>
          <div className="max-w-4xl mx-auto>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20>
              <div className="text-center mb-8>
                <h2 className="text-3xl font-bold text-white mb-4>Schedule Your Consultation</h2>
                <p className="text-xl text-gray-300>
                  Fill out the form below and well get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2>
                      Full Name *
                    </label>
                    <input
                      type="text
                      id="name
                      name="name
                      value={formData.name}

                      onChange={handleInputChange}

                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors
                      placeholder="Enter your full name
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2>
                      Email Address *
                    </label>
                    <input
                      type="email
                      id="email
                      name="email
                      value={formData.email}

                      onChange={handleInputChange}

                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors
                      placeholder="Enter your email
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2>
                      Phone Number
                    </label>
                    <input
                      type="tel
                      id="phone
                      name="phone
                      value={formData.phone}

                      onChange={handleInputChange}

                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors
                      placeholder="Enter your phone number
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2>
                      Company Name
                    </label>
                    <input
                      type="text
                      id="company
                      name="company
                      value={formData.company}

                      onChange={handleInputChange}

                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors
                      placeholder="Enter your company name
                    />
=======
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>{service.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select budget</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-months-plus">6+ months</option>
                    </select>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
                  </div>
                </div>

                <div>
<<<<<<< HEAD
                  <label htmlFor="consultationType" className="block text-sm font-medium text-gray-300 mb-2>
                    Preferred Consultation Type
                  </label>
                  <select
                    id="consultationType
                    name="consultationType
                    value={formData.consultationType}

                    onChange={handleInputChange}

                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors
                  >
<<<<<<< HEAD
                    <option value="" className="bg-slate-800>Select consultation type</option>
                    {consultationTypes.map((type) => (

                      <option key={type.id} value={type.name} className="bg-slate-800>
=======
                    <option value="" className="bg-slate-800">Select consultation type</option>
                    {consultationTypes.map((type) => (}
                      <option key={type.id} value={type.name} className="bg-slate-800">
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                        {type.name} - {type.price}

                      </option>
                    ))}

                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2>
                    Tell us about your project
                  </label>
                  <textarea
                    id="message
                    name="message
                    value={formData.message}

                    onChange={handleInputChange}

                    rows={4}

                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors
                    placeholder="Describe your current challenges, goals, and what you hope to achieve...
                  />
                </div>

                <button
                  type="submit
                  className="w-full bg-cyan-400 text-slate-900 font-semibold py-4 rounded-lg hover:bg-cyan-300 transition-colors flex items-center justify-center
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-5 h-5 ml-2 />
=======
                  <label className="block text-white font-semibold mb-2">Tell us about your project</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Describe your current challenges, goals, and what you hope to achieve..."
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    Schedule Free Consultation
                    <ArrowRight className="inline-block ml-2 w-5 h-5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
      {/* Consultation Types */}
      <section id="consultation-types" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Choose Your Consultation Type
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
                </button>
              </form>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact Info */}

        <section className="py-16 px-4>
          <div className="max-w-4xl mx-auto text-center>
            <h2 className="text-3xl font-bold text-white mb-8>Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20>
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <Phone className="w-8 h-8 text-cyan-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Call Us</h3>
                <p className="text-gray-300 mb-4>Speak directly with our experts</p>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold>
                  (302) 464-0950
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20>
                <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <Mail className="w-8 h-8 text-purple-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Email Us</h3>
                <p className="text-gray-300 mb-4>Send us your questions</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold>
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20>
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <MapPin className="w-8 h-8 text-green-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Visit Us</h3>
                <p className="text-gray-300 mb-4>Our headquarters</p>
                <p className="text-cyan-400 font-semibold>
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
              </div>              </div>
            ));

          </div>
        </div>
      </section>

      {/* Expert Team */}
<<<<<<< HEAD

      <section className="py-16 px-4 bg-white/5>
        <div className="max-w-7xl mx-auto>
          <h2 className="text-3xl font-bold text-white mb-12 text-center>Meet Our Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8>
            {experts.map((expert, index) => (

              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300>
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center>
                  <span className="text-2xl font-bold text-white">{expert.name.split(' ').map(n => n[0]).join(')}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2>{expert.name}</h3>
                <p className="text-purple-400 mb-2>{expert.role}</p>
                <p className="text-gray-400 text-sm mb-4>{expert.experience}</p>
                <div className="flex flex-wrap justify-center gap-2>
                  {expert.expertise.map((skill, skillIndex) => (

                    <span key={skillIndex} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs>
=======
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Meet Our Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (}
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{expert.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{expert.name}</h3>
                <p className="text-purple-400 mb-2">{expert.role}</p>
                <p className="text-gray-400 text-sm mb-4">{expert.experience}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {expert.expertise.map((skill, skillIndex) => (}
                    <span key={skillIndex} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                      {skill}

                    </span>
                  ))}

                </div>
              </div>
            ))}

            </div>
          </div>
        </section>
=======
        <title>Consultation - Zion Tech Group</title>
        <meta name="description" content="Consultation services from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Consultation</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
      </div>
    </>
  );

};

<<<<<<< HEAD
<<<<<<< HEAD
export default ConsultationPage;      <section className="py-16 px-4>
        <div className="max-w-4xl mx-auto text-center>
          <h2 className="text-3xl font-bold text-white mb-6>Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8>
            Book a consultation with our experts and take the first step towards transforming your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center>
              <Calendar className="mr-2 h-5 w-5 />              Schedule Now
            </button>
            <button></button>
              <Mail className="mr-2 h-5 w-5 />
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
                <
              <
            <
          <
        <
      <
    <)
  );

};
=======
      {/* Booking Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Schedule Your Consultation
            </h2>
            
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Schedule a consultation today and take the first step towards AI-powered success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#consultation-types"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Book Now
              </a>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9

export default PagePage;
=======
export default ConsultationPage;
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
>>>>>>> origin/cursor/ad-creation-and-management-f267
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
=======
export default ConsultationPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-029f
