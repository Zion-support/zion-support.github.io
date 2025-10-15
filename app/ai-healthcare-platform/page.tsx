import React from 'react';
import { 
  ArrowRight
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Heart, 
  Zap, 
  Shield, 
  Globe, 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Phone,
  Mail,
  MapPin,
  Download,
  Play,
  Pause,
  RefreshCw,
  Settings,
  Eye,
  Filter,
  Calendar,
  Target,
  Users,
  Award,
  TrendingUp,
  Cpu,
  Database,
  BarChart3,
  Activity,
  Lock,
  Clock,
  Smartphone,
  Search,
  FileText,
  Stethoscope,
  Pill,
  Microscope,
  Clipboard,
  AlertTriangle,
  Bell,
  MessageSquare,
  Camera,
  Scan,
  Thermometer,
  Syringe,
  Bandage
} from 'lucide-react';

const AiHealthcarePlatformPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Diagnosis Assistant",
      description: "Advanced machine learning algorithms that assist healthcare professionals in accurate diagnosis and treatment planning.",
      benefits: ["Symptom analysis", "Disease prediction", "Treatment recommendations", "Risk assessment"]
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Medical Imaging AI",
      description: "AI-powered analysis of X-rays, MRIs, CT scans, and other medical images for faster and more accurate diagnosis.",
      benefits: ["Image analysis", "Anomaly detection", "Pattern recognition", "Radiology assistance"]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Electronic Health Records",
      description: "Comprehensive EHR system with AI-powered data analysis, patient history tracking, and automated documentation.",
      benefits: ["Patient records", "Data analysis", "Automated notes", "Interoperability"]
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Telemedicine Platform",
      description: "Secure video consultations, remote patient monitoring, and virtual care delivery with AI assistance.",
      benefits: ["Video consultations", "Remote monitoring", "Virtual care", "Patient engagement"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "HIPAA Compliance",
      description: "Enterprise-grade security and privacy protection with full HIPAA compliance and data encryption.",
      benefits: ["HIPAA compliance", "Data encryption", "Access controls", "Audit trails"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Healthcare Analytics",
      description: "Comprehensive analytics and reporting for population health, clinical outcomes, and operational efficiency.",
      benefits: ["Population health", "Clinical outcomes", "Operational metrics", "Predictive analytics"]
    }
  ];

  const aiCapabilities = [
    {
      title: "Drug Interaction Checker",
      description: "AI-powered system that identifies potential drug interactions and adverse effects",
      icon: <Pill className="w-8 h-8" />,
      accuracy: "99.8%"
    },
    {
      title: "Symptom Checker",
      description: "Intelligent symptom analysis that provides preliminary health assessments",
      icon: <Thermometer className="w-8 h-8" />,
      accuracy: "95.2%"
    },
    {
      title: "Lab Result Analysis",
      description: "Automated analysis of laboratory results with trend monitoring and alerts",
      icon: <Microscope className="w-8 h-8" />,
      accuracy: "98.5%"
    },
    {
      title: "Treatment Optimization",
      description: "AI-driven treatment recommendations based on patient data and medical literature",
      icon: <Syringe className="w-8 h-8" />,
      accuracy: "97.3%"
    }
  ];

  const pricingPlans = [
    {
      name: "Clinic",
      price: "$399",
      period: "month",
      description: "Perfect for small clinics and private practices",
      features: [
        "Up to 50 patients",
        "Basic AI features",
        "EHR system",
        "Telemedicine",
        "Email support",
        "Basic analytics",
        "HIPAA compliance"
      ],
      popular: false
    },
    {
      name: "Hospital",
      price: "$899",
      period: "month",
      description: "Ideal for hospitals and large healthcare facilities",
      features: [
        "Up to 1,000 patients",
        "Advanced AI features",
        "Full EHR suite",
        "Advanced telemedicine",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
        "Multi-location support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "month",
      description: "Complete solution for healthcare systems and networks",
      features: [
        "Unlimited patients",
        "Full AI capabilities",
        "Custom EHR",
        "Enterprise telemedicine",
        "24/7 dedicated support",
        "Custom development",
        "On-premise deployment",
        "White-label options"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Williams",
      company: "Metro General Hospital",
      role: "Chief Medical Officer",
      content: "The AI diagnosis assistant has improved our diagnostic accuracy by 30%. It's like having a second opinion from the world's best specialists.",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      company: "Family Care Clinic",
      role: "Primary Care Physician",
      content: "The telemedicine platform has revolutionized our practice. We can now serve patients remotely while maintaining the same quality of care.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      company: "Regional Medical Center",
      role: "IT Director",
      content: "The platform's analytics have given us insights into patient care patterns that we never had before. Our operational efficiency has improved by 40%.",
      rating: 5
    }
  ];

  const specialties = [
    { name: "Cardiology", icon: <Heart className="w-6 h-6" /> },
    { name: "Radiology", icon: <Camera className="w-6 h-6" /> },
    { name: "Oncology", icon: <Microscope className="w-6 h-6" /> },
    { name: "Neurology", icon: <Brain className="w-6 h-6" /> },
    { name: "Pediatrics", icon: <Users className="w-6 h-6" /> },
    { name: "Emergency", icon: <AlertTriangle className="w-6 h-6" /> },
    { name: "Surgery", icon: <Syringe className="w-6 h-6" /> },
    { name: "Mental Health", icon: <MessageSquare className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Healthcare Platform - Intelligent Medical Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform healthcare delivery with our AI-powered platform. Advanced diagnosis assistance, telemedicine, EHR, and analytics for modern healthcare providers." />
        <meta name="keywords" content="AI healthcare, medical AI, telemedicine, EHR, healthcare analytics, medical diagnosis, HIPAA compliance" />
        <meta property="og:title" content="AI Healthcare Platform - Zion Tech Group" />
        <meta property="og:description" content="Intelligent healthcare platform with AI-powered diagnosis and patient care" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-healthcare-platform" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
                  <Heart className="w-4 h-4 mr-2" />
                  #1 AI Healthcare Platform
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    AI Healthcare Platform
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Revolutionize healthcare delivery with our AI-powered platform. 
                  Advanced diagnosis assistance, telemedicine, and intelligent patient care for modern healthcare providers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule Demo
                  </a>
                  <a
                    href="#demo"
                    className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Advanced Healthcare Features
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive healthcare solutions powered by artificial intelligence and modern technology.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 neon-card"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Capabilities Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    AI-Powered Capabilities
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Leverage cutting-edge AI technology to enhance patient care and clinical outcomes.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {aiCapabilities.map((capability, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                      <div className="text-white">{capability.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{capability.title}</h3>
                    <p className="text-gray-300 mb-6">{capability.description}</p>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                      <div className="text-blue-400 font-semibold text-sm">Accuracy: {capability.accuracy}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Specialties Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Medical Specialties
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI platform supports a wide range of medical specialties and healthcare disciplines.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                {specialties.map((specialty, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 text-center hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="text-blue-400 mb-3 flex justify-center">{specialty.icon}</div>
                    <div className="text-white font-semibold text-sm">{specialty.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Healthcare Pricing Plans
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your healthcare facility's needs and budget.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <div 
                    key={index} 
                    className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                      plan.popular 
                        ? 'border-blue-400/40 shadow-blue-500/10' 
                        : 'border-blue-500/20 hover:border-blue-400/40'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-blue-400">{plan.price}</span>
                        <span className="text-gray-400 ml-2">/{plan.period}</span>
                      </div>
                    </div>
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <a
                      href="tel:+13024640950"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                          : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Healthcare Success Stories
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how healthcare providers are improving patient care with our AI platform.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/40 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-blue-400">{testimonial.role}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Transform Healthcare with AI
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join the healthcare revolution and provide better patient care with our AI-powered platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Schedule Demo
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AiHealthcarePlatformPage;