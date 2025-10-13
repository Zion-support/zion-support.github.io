import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Clock, Users, Shield, Brain, Cloud, Zap, Star, Phone, Mail, MapPin } from 'lucide-react';

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

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
      title: 'AI Strategy Consultation',
      description: 'Develop a comprehensive AI roadmap for your business',
      duration: '2-4 hours',
      price: 'Free',
      features: [
        'AI readiness assessment',
        'Technology stack evaluation',
        'Implementation roadmap',
        'ROI projections'
      ],
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations',
      duration: '4-6 hours',
      price: 'Free',
      features: [
        'Security vulnerability scan',
        'Compliance assessment',
        'Risk analysis report',
        'Remediation plan'
      ],
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: 'Cloud Migration Planning',
      description: 'Strategic cloud migration and optimization strategy',
      duration: '3-5 hours',
      price: 'Free',
      features: [
        'Current infrastructure analysis',
        'Cloud platform selection',
        'Migration timeline',
        'Cost optimization plan'
      ],
      icon: <Cloud className="w-8 h-8" />
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategy and planning',
      duration: '6-8 hours',
      price: 'Free',
      features: [
        'Business process analysis',
        'Technology gap assessment',
        'Transformation roadmap',
        'Change management plan'
      ],
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Quick Response',
      description: 'Get back to you within 24 hours'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Team',
      description: 'Certified professionals with 10+ years experience'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Confidential',
      description: 'Your information is completely secure and private'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'No Obligation',
      description: 'Free consultation with no strings attached'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Free Consultation - Zion Tech Group | Technology Advisory Services</title>
        <meta
          name="description"
          content="Get a free consultation with our technology experts. We'll help you develop AI strategies, cybersecurity plans, and digital transformation roadmaps for your business."
        />
        <meta
          name="keywords"
          content="free consultation, technology advisory, AI strategy, digital transformation, cybersecurity audit, cloud migration, technology planning"
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Free Consultation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get expert advice on AI strategy, cybersecurity, cloud migration, and digital transformation. 
              Our certified professionals are here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                Schedule Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Call Us: +1 302 464 0950
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}