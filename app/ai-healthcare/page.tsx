'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Stethoscope, Brain, Shield, BarChart, Users, CheckCircle, ArrowRight, Star, 
  Phone, Mail, MapPin, Clock, Award, Target, Zap, Cpu, Eye, MessageSquare,
  FileText, Calendar, DollarSign, PieChart, Activity, ExternalLink, ChevronRight,
  Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator,
  Clock3, Compass, Navigation, Home, Heart, GraduationCap, Briefcase, Car,
  Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2,
  Music, Video, Camera, Palette, Bot, Headphones, Settings, Database, Cloud,
  Smartphone, Globe, Lock, TrendingUp, Sparkles, Code, Monitor, Network,
  RefreshCw, AlertTriangle, FileText as FileTextIcon, Download, Play, Code as CodeIcon
} from 'lucide-react';

export default function AIHealthcarePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const healthcareServices = [
    {
      title: 'AI Medical Diagnosis Assistant',
      description: 'Advanced AI system for medical image analysis, symptom assessment, and diagnostic support.',
      icon: Eye,
      features: [
        'Medical Image Analysis (X-ray, MRI, CT)',
        'Symptom Assessment & Triage',
        'Differential Diagnosis Support',
        'Risk Stratification',
        'Clinical Decision Support'
      ],
      benefits: [
        '95% accuracy in image analysis',
        '50% faster diagnosis time',
        'Reduced misdiagnosis by 40%',
        '24/7 availability'
      ],
      price: { starting: 4999, period: 'month' },
      popular: true
    },
    {
      title: 'AI Patient Monitoring System',
      description: 'Real-time patient monitoring with predictive analytics for early intervention.',
      icon: Activity,
      features: [
        'Real-time Vital Signs Monitoring',
        'Predictive Health Analytics',
        'Early Warning Systems',
        'Remote Patient Management',
        'Integration with Medical Devices'
      ],
      benefits: [
        '30% reduction in readmissions',
        'Early detection of complications',
        'Improved patient outcomes',
        'Reduced healthcare costs'
      ],
      price: { starting: 2999, period: 'month' },
      popular: true
    },
    {
      title: 'AI Drug Discovery Platform',
      description: 'Accelerate drug discovery with AI-powered molecular analysis and prediction.',
      icon: Cpu,
      features: [
        'Molecular Structure Analysis',
        'Drug-Target Interaction Prediction',
        'Side Effect Prediction',
        'Clinical Trial Optimization',
        'Personalized Medicine Support'
      ],
      benefits: [
        '60% faster drug discovery',
        'Reduced R&D costs by 40%',
        'Higher success rates',
        'Personalized treatment options'
      ],
      price: { starting: 7999, period: 'month' },
      popular: false
    },
    {
      title: 'AI Healthcare Analytics',
      description: 'Comprehensive healthcare data analysis for population health management.',
      icon: BarChart,
      features: [
        'Population Health Analytics',
        'Epidemiological Modeling',
        'Resource Optimization',
        'Outcome Prediction',
        'Cost-Benefit Analysis'
      ],
      benefits: [
        'Data-driven decision making',
        'Improved resource allocation',
        'Better patient outcomes',
        'Cost optimization'
      ],
      price: { starting: 3999, period: 'month' },
      popular: false
    },
    {
      title: 'AI Mental Health Support',
      description: 'AI-powered mental health assessment and support system.',
      icon: Heart,
      features: [
        'Mental Health Screening',
        'Mood Tracking & Analysis',
        'Crisis Intervention',
        'Therapy Recommendation',
        'Progress Monitoring'
      ],
      benefits: [
        'Early mental health detection',
        'Reduced stigma',
        '24/7 support availability',
        'Personalized care plans'
      ],
      price: { starting: 1999, period: 'month' },
      popular: true
    },
    {
      title: 'AI Medical Records Management',
      description: 'Intelligent medical records processing and management system.',
      icon: FileText,
      features: [
        'Automated Data Extraction',
        'Clinical Note Analysis',
        'Coding & Billing Support',
        'Compliance Monitoring',
        'Data Integration'
      ],
      benefits: [
        '90% reduction in data entry time',
        'Improved accuracy',
        'Better compliance',
        'Streamlined workflows'
      ],
      price: { starting: 2499, period: 'month' },
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Williams",
      company: "Mayo Clinic",
      content: "The AI diagnosis assistant has revolutionized our radiology department. We've seen a 40% improvement in diagnostic accuracy and 50% faster turnaround times.",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      company: "Johns Hopkins Hospital",
      content: "The patient monitoring system has been a game-changer. We've reduced readmissions by 35% and improved patient satisfaction scores significantly.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      company: "Cleveland Clinic",
      content: "The AI drug discovery platform has accelerated our research projects. We're seeing promising results in our oncology drug development programs.",
      rating: 5
    }
  ];

  const stats = [
    { label: 'Diagnostic Accuracy', value: '95%' },
    { label: 'Cost Reduction', value: '40%' },
    { label: 'Time Savings', value: '50%' },
    { label: 'Patient Satisfaction', value: '98%' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>AI Healthcare Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI healthcare solutions including medical diagnosis, patient monitoring, drug discovery, and healthcare analytics." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Healthcare Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transform healthcare delivery with cutting-edge AI technology that improves patient outcomes and reduces costs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Schedule Demo
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Healthcare Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-powered healthcare solutions designed to improve patient care and operational efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-semibold text-blue-600 mb-4">
                  Starting at ${service.pricing.starting}/{service.pricing.period}
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Healthcare Professionals Say</h2>
            <p className="text-xl text-gray-600">Real results from leading healthcare institutions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Healthcare?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI healthcare solutions can improve patient outcomes and operational efficiency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}