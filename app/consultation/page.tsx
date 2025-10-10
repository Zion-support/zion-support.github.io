'use client';
import React, { useState } from 'react';
import { Calendar, Phone, Mail, CheckCircle, ArrowRight, Star, Users, Clock, Shield, Brain, Cloud, Zap, Globe, Settings, Database, Eye, Sparkles, BookOpen, FileText, Download } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

export default function ConsultationPage() {
  const [selectedService, setSelectedService] = useState('ai-services');
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

  const services = [
    {
      id: 'ai-services',
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence',
      icon: Brain,
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      id: 'cloud-services',
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for your business',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'Migration Services', 'DevOps', 'Auto-scaling']
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Turn your data into actionable business insights',
      icon: Database,
      features: ['Data Visualization', 'Business Intelligence', 'ETL Processes', 'Real-time Analytics']
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions',
      icon: Shield,
      features: ['Security Audits', 'Penetration Testing', 'Compliance', '24/7 Monitoring']
    }
  ];

  const consultationTypes = [
    {
      title: 'Free Initial Consultation',
      duration: '30 minutes',
      price: 'Free',
      description: 'Get started with a free consultation to discuss your needs',
      features: ['Needs Assessment', 'Solution Overview', 'Next Steps Planning'],
      icon: Calendar
    },
    {
      title: 'Technical Deep Dive',
      duration: '60 minutes',
      price: '$200',
      description: 'Detailed technical consultation with our experts',
      features: ['Technical Analysis', 'Architecture Review', 'Implementation Plan'],
      icon: Settings
    },
    {
      title: 'Strategic Planning Session',
      duration: '90 minutes',
      price: '$500',
      description: 'Comprehensive strategic planning for your digital transformation',
      features: ['Strategic Assessment', 'Roadmap Development', 'Resource Planning'],
      icon: Globe
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Expert Guidance',
      description: 'Get advice from industry experts with 15+ years experience'
    },
    {
      icon: Users,
      title: 'Personalized Solutions',
      description: 'Tailored recommendations based on your specific needs'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Get actionable insights in just one session'
    },
    {
      icon: Star,
      title: 'Proven Results',
      description: 'Our clients see 300% average ROI improvement'
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

const consultationTypes = [
    {
      icon: Zap,
      title: 'AI Strategy Consultation',
      description: 'Develop a comprehensive AI strategy for your business',
      duration: '2-3 hours',
      price: 'Free'
    },
    {
      icon: Shield,
      title: 'Security Assessment',
      description: 'Evaluate your current security posture and identify improvements',
      duration: '1-2 hours',
      price: 'Free'
    },
    {
      icon: BarChart,
      title: 'Technology Audit',
      description: 'Review your current technology stack and recommend optimizations',
      duration: '2-4 hours',
      price: 'Free'

    }
  ];

  const benefits = [
    'Free initial consultation',
    'Customized recommendations',
    'No obligation to proceed',
    'Expert insights and advice',
    'Detailed project roadmap',
    'Transparent pricing'
  ];

  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group | Get Expert Advice</title>
        <meta name="description" content="Schedule a free consultation with our AI and IT experts. Get personalized recommendations and a custom roadmap for your business transformation." />
        <meta name="keywords" content="free consultation, AI strategy, technology audit, security assessment, expert advice, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Free
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Consultation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get expert advice on how AI and IT solutions can transform your business. 
              No obligation, just valuable insights.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Consultation Types */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Choose Your Consultation Type</h2>
              <div className="space-y-6">
                {consultationTypes.map((type, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <type.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{type.title}</h3>
                        <p className="text-gray-300 mb-3">{type.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{type.duration}</span>
                          </div>
                          <div className="text-cyan-400 font-semibold">{type.price}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">What You'll Get:</h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Consultation Form */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Schedule Your Consultation</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Consultation Scheduled!</h3>

                  <p className="text-gray-300 mb-6">
                    Schedule your free consultation and let's discuss how we can help transform your business.
                  </p>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                    Schedule Free Consultation
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
</div>
      </div>
    </>

  );
}
