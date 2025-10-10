'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, Heart, Shield, Clock, Award, Target, BarChart, Globe, Home, Video, Palette, Code, Music, Camera, Headphones, MessageSquare, Smile, Activity, Zap, Settings, Database, Lock, Eye, Search, FileText, Stethoscope, UserCheck, FileMedical, Clipboard, Pill, Activity as ActivityIcon, AlertTriangle } from 'lucide-react';
import Footer from '../components/Footer';

const HealthcareITPage: React.FC = () => {
  const features = [
    "HIPAA Compliant Infrastructure",
    "Electronic Health Records (EHR)",
    "Patient Data Security",
    "Telemedicine Platform",
    "Medical Imaging Systems",
    "Pharmacy Management",
    "Appointment Scheduling",
    "Billing & Revenue Cycle",
    "Clinical Decision Support",
    "Interoperability Solutions",
    "Mobile Health Apps",
    "Compliance Monitoring"
  ];

  const solutions = [
    {
      title: "Electronic Health Records",
      icon: FileMedical,
      description: "Comprehensive EHR system with advanced clinical features",
      capabilities: [
        "Patient demographics management",
        "Medical history tracking",
        "Prescription management",
        "Lab results integration",
        "Clinical notes and documentation",
        "Billing integration"
      ]
    },
    {
      title: "Telemedicine Platform",
      icon: Video,
      description: "Secure video consultations and remote patient monitoring",
      capabilities: [
        "HD video consultations",
        "Remote vital signs monitoring",
        "Digital prescription management",
        "Patient portal access",
        "Appointment scheduling",
        "Insurance verification"
      ]
    },
    {
      title: "Medical Imaging",
      icon: Camera,
      description: "Advanced medical imaging and diagnostic tools",
      capabilities: [
        "DICOM image management",
        "AI-powered diagnostics",
        "3D imaging capabilities",
        "Cloud storage and backup",
        "Radiologist collaboration tools",
        "Mobile image viewing"
      ]
    },
    {
      title: "Pharmacy Management",
      icon: Pill,
      description: "Complete pharmacy operations and inventory management",
      capabilities: [
        "Inventory tracking",
        "Prescription processing",
        "Drug interaction checking",
        "Insurance billing",
        "Patient notifications",
        "Compliance reporting"
      ]
    }
  ];

  const pricingTiers = [
    {
      name: "Small Practice",
      price: "$499",
      period: "/month",
      description: "Perfect for small medical practices and clinics",
      features: [
        "Up to 10 providers",
        "Basic EHR system",
        "Telemedicine platform",
        "Basic reporting",
        "Email support",
        "HIPAA compliance"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Medical Group",
      price: "$1,299",
      period: "/month",
      description: "Comprehensive solution for medical groups and hospitals",
      features: [
        "Up to 50 providers",
        "Advanced EHR features",
        "Full telemedicine suite",
        "Medical imaging integration",
        "Priority support",
        "Custom workflows",
        "Advanced analytics",
        "API integrations"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Health System",
      price: "$2,999",
      period: "/month",
      description: "Enterprise solution for large health systems",
      features: [
        "Unlimited providers",
        "Full platform suite",
        "Custom integrations",
        "Dedicated support",
        "On-premise deployment",
        "SLA guarantee",
        "Training & consulting",
        "White-label solution",
        "24/7 phone support",
        "Compliance auditing"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      company: "Regional Medical Center",
      content: "The healthcare IT solutions have streamlined our operations significantly. Patient care has improved, and our staff is more efficient. The HIPAA compliance features give us complete peace of mind.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "IT Director",
      company: "Community Health Network",
      content: "Implementation was seamless, and the support team was excellent. The telemedicine platform has been crucial during the pandemic, allowing us to continue providing quality care to our patients.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Family Physician",
      company: "Private Practice",
      content: "The EHR system is intuitive and powerful. It has reduced our documentation time by 40% and improved the quality of our patient records. The mobile app is particularly useful for on-the-go access.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const complianceFeatures = [
    { name: "HIPAA Compliance", description: "Full compliance with healthcare privacy regulations", icon: Shield },
    { name: "SOC 2 Type II", description: "Security and availability controls certification", icon: Lock },
    { name: "HITRUST CSF", description: "Healthcare industry security framework", icon: CheckCircle },
    { name: "FDA 21 CFR Part 11", description: "Electronic records and signatures compliance", icon: FileText },
    { name: "GDPR Compliance", description: "European data protection regulations", icon: Globe },
    { name: "Audit Logging", description: "Comprehensive audit trails for all activities", icon: ActivityIcon }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>Healthcare IT Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Healthcare IT Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive healthcare technology solutions that improve patient care, 
              streamline operations, and ensure HIPAA compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-gradient-to-r from-green-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-green-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-green-400 text-green-400 font-semibold py-4 px-8 rounded-xl hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center">
                <Stethoscope className="w-5 h-5 mr-2" />
                View Demo
              </button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-400">HIPAA Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-gray-400">Healthcare Providers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">1M+</div>
                <div className="text-gray-400">Patients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete suite of healthcare technology solutions designed for modern medical practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-purple-600 rounded-xl flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                    <p className="text-gray-300">{solution.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {solution.capabilities.map((capability, capabilityIndex) => (
                    <div key={capabilityIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {capability}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare Compliance & Security
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry-leading security and compliance features to protect patient data
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFeatures.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <feature.icon className="w-6 h-6 text-green-400" />
                  <h3 className="text-lg font-semibold text-white">{feature.name}</h3>
                </div>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Healthcare Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful technology that enhances patient care and operational efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature}</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Healthcare-specific technology solutions with full HIPAA compliance and security.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare IT Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the healthcare solution that fits your practice size and needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`cyber-card p-8 hover:scale-105 transition-all duration-300 relative ${
                  tier.popular ? 'ring-2 ring-green-400/50' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-400 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-6">{tier.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 text-lg">{tier.period}</span>
                  </div>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-green-500 to-purple-600 text-white hover:from-green-600 hover:to-purple-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}>
                    {tier.cta}
                  </button>
                </div>
                
                <div className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-green-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Healthcare Providers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how healthcare organizations rely on our IT solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform Your Healthcare Practice
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of healthcare providers who trust our IT solutions. 
            Start your free trial and experience the difference technology can make.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-gradient-to-r from-green-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-green-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-green-400 text-green-400 font-semibold py-4 px-8 rounded-xl hover:bg-green-400 hover:text-slate-900 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
          
          <div className="text-center text-gray-400 text-sm">
            <p>Questions? Contact us at <a href="tel:+13024640950" className="text-green-400 hover:text-green-300">+1 (302) 464-0950</a></p>
            <p>or email <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300">kleber@ziontechgroup.com</a></p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthcareITPage;