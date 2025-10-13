import React from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Star, 
  Play, 
  Phone, 
  Mail, 
  Rocket, 
  Globe, 
  Smartphone, 
  Monitor, 
  Database, 
  Cloud, 
  MessageSquare, 
  TrendingUp, 
  Award, 
  Target, 
  Cpu, 
  Atom, 
  Sparkles, 
  ArrowRight, 
  DollarSign, 
  Clock, 
  FileText, 
  Settings, 
  Download, 
  Upload, 
  Share2, 
  Heart, 
  ThumbsUp, 
  ChevronRight, 
  ExternalLink, 
  MapPin, 
  Calendar, 
  Check, 
  X, 
  AlertCircle, 
  Info, 
  HelpCircle, 
  Search, 
  Filter, 
  Sort, 
  Grid, 
  List, 
  Maximize, 
  Minimize, 
  RefreshCw, 
  Save, 
  Edit, 
  Trash2, 
  Copy, 
  Move, 
  Archive, 
  Tag, 
  Flag, 
  Bookmark, 
  Share, 
  Send, 
  Plus, 
  Minus, 
  Menu, 
  MoreHorizontal, 
  MoreVertical, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft, 
  ArrowUp, 
  ArrowDown, 
  ArrowLeft, 
  Home, 
  User, 
  Users, 
  Building, 
  Briefcase, 
  GraduationCap, 
  BookOpen, 
  Lightbulb, 
  Trophy, 
  Medal, 
  Crown, 
  Gem, 
  Diamond, 
  Zap, 
  Flash, 
  Thunder, 
  Lightning, 
  Fire, 
  Flame, 
  Sun, 
  Moon, 
  Planet, 
  Galaxy, 
  Universe, 
  Infinity
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';
import ResponsiveText from '../components/ResponsiveText';

const CybersecuritySuiteProPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion Cybersecurity Suite Pro",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Windows, macOS, Linux, Mobile",
    "description": "Comprehensive enterprise-grade cybersecurity suite providing advanced threat protection, vulnerability management, and compliance monitoring for modern organizations.",
    "url": "https://ziontechgroup.com/cybersecurity-suite-pro",
    "author": {
      "@type": "Organization",
      "name": "Zion Tech Group"
    },
    "offers": {
      "@type": "Offer",
      "price": "199",
      "priceCurrency": "USD",
      "priceValidUntil": "2024-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "156"
    }
  };

  const features = [
    {
      title: "Advanced Threat Detection",
      description: "AI-powered threat detection using machine learning algorithms to identify and neutralize sophisticated cyber attacks in real-time",
      icon: <Shield className="w-8 h-8 text-red-400" />,
      benefits: ["99.9% threat detection rate", "Real-time monitoring", "Zero-day attack protection"]
    },
    {
      title: "Endpoint Security",
      description: "Comprehensive endpoint protection with advanced antivirus, firewall, and behavioral analysis for all devices",
      icon: <Lock className="w-8 h-8 text-blue-400" />,
      benefits: ["Multi-device protection", "Behavioral analysis", "Automatic threat response"]
    },
    {
      title: "Network Security",
      description: "Advanced network monitoring and protection with intrusion detection, traffic analysis, and automated response",
      icon: <Globe className="w-8 h-8 text-green-400" />,
      benefits: ["Network intrusion detection", "Traffic analysis", "Automated response"]
    },
    {
      title: "Compliance Management",
      description: "Automated compliance monitoring and reporting for GDPR, HIPAA, SOX, and other regulatory requirements",
      icon: <CheckCircle className="w-8 h-8 text-purple-400" />,
      benefits: ["Automated compliance checks", "Real-time reporting", "Audit trail management"]
    }
  ];

  const pricingPlans = [
    {
      name: "Security Essentials",
      price: "$199",
      period: "per month",
      description: "Essential cybersecurity protection for small businesses",
      features: [
        "Basic threat detection",
        "Endpoint protection (up to 25 devices)",
        "Email security",
        "Firewall protection",
        "24/7 monitoring",
        "Email support"
      ],
      popular: false,
      cta: "Start Security Essentials"
    },
    {
      name: "Security Professional",
      price: "$499",
      period: "per month",
      description: "Advanced security features for growing businesses",
      features: [
        "Advanced threat detection",
        "Endpoint protection (up to 100 devices)",
        "Network security",
        "Compliance monitoring",
        "Priority support",
        "Security consulting",
        "Custom security policies"
      ],
      popular: true,
      cta: "Go Security Pro"
    },
    {
      name: "Security Enterprise",
      price: "$1,299",
      period: "per month",
      description: "Complete security suite for large organizations",
      features: [
        "Enterprise threat detection",
        "Unlimited endpoint protection",
        "Advanced network security",
        "Full compliance suite",
        "24/7 dedicated support",
        "Custom security solutions",
        "Security training included",
        "Dedicated security manager"
      ],
      popular: false,
      cta: "Scale to Enterprise"
    }
  ];

  const securityServices = [
    {
      title: "Penetration Testing",
      description: "Comprehensive security assessment to identify vulnerabilities in your systems and applications",
      icon: <Target className="w-6 h-6" />,
      results: "Identify 95% of vulnerabilities"
    },
    {
      title: "Security Audits",
      description: "Thorough security audits to ensure compliance with industry standards and regulations",
      icon: <Search className="w-6 h-6" />,
      results: "100% compliance assurance"
    },
    {
      title: "Incident Response",
      description: "Rapid response and recovery services for security incidents and data breaches",
      icon: <AlertTriangle className="w-6 h-6" />,
      results: "Average 15-minute response time"
    },
    {
      title: "Security Training",
      description: "Comprehensive security awareness training for your team to prevent human error",
      icon: <GraduationCap className="w-6 h-6" />,
      results: "90% reduction in human errors"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <EnhancedSEO
        title="Zion Cybersecurity Suite Pro - Enterprise-Grade Security"
        description="Protect your organization with our comprehensive cybersecurity suite. Advanced threat detection, endpoint security, network protection, and compliance management for modern businesses."
        keywords="cybersecurity, security suite, threat detection, endpoint security, network security, compliance, GDPR, HIPAA, security audit"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-600/20 animate-pulse" />
        <ResponsiveContainer>
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2">
              <Shield className="w-5 h-5 text-red-400" />
              <span className="text-red-300 font-medium">Enterprise Security</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Cybersecurity Suite Pro
            </h1>
            
            <ResponsiveText className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Protect your organization with enterprise-grade cybersecurity. 
              Advanced threat detection, comprehensive protection, and compliance management.
            </ResponsiveText>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700">
                <Play className="w-5 h-5 mr-2" />
                Start Security Trial
              </FuturisticButton>
              <FuturisticButton variant="outline" className="border-red-500/50 text-red-300 hover:bg-red-500/10">
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Security Experts
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Security Features
            </h2>
            <ResponsiveText className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive protection for your digital assets
            </ResponsiveText>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-lg">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-blue-300">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Security Services Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-red-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Security Services
            </h2>
            <ResponsiveText className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional security services to protect your organization
            </ResponsiveText>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {securityServices.map((service, index) => (
              <FuturisticCard key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-full mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
                  <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-green-300 font-medium">{service.results}</span>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Security Pricing
            </h2>
            <ResponsiveText className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose your security protection level
            </ResponsiveText>
          </div>
          
          <ResponsiveGrid className="gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`relative ${plan.popular ? 'ring-2 ring-red-500 scale-105' : ''} group hover:scale-105 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-red-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-8">{plan.description}</p>
                  
                  <ul className="space-y-4 mb-8 text-left">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <FuturisticButton 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-red-600 to-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
                  >
                    {plan.cta}
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600/20 to-blue-600/20">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Organization?
            </h2>
            <ResponsiveText className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your digital assets with our comprehensive cybersecurity suite
            </ResponsiveText>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700">
                <Rocket className="w-5 h-5 mr-2" />
                Start Security Trial
              </FuturisticButton>
              <FuturisticButton variant="outline" className="border-red-500/50 text-red-300 hover:bg-red-500/10">
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Contact: <a href="mailto:kleber@ziontechgroup.com" className="text-red-400 hover:text-red-300">kleber@ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default CybersecuritySuiteProPage;
