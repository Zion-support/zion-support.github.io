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
        <title>Free Consultation - Zion Tech Group | Expert AI & IT Advice</title>
        <meta name="description" content="Schedule a free consultation with our AI and IT experts. Get personalized advice on how to transform your business with technology." />
        <meta name="keywords" content="free consultation, AI consultation, IT consultation, business transformation, Zion Tech Group" />
      </Helmet>
              </div>
            </div>
          </div>
</div>
      </div>
    </>

  );
}
