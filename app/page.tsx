'use client';
import React, { useState, useEffect, useCallback, lazy, Suspense, memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Zap, 
  Shield, 
  Target, 
  BarChart, 
  Users, 
  Award, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  TrendingUp, 
  Database, 
  Code, 
  Smartphone, 
  Settings, 
  Lock, 
  Building, 
  Factory, 
  Car, 
  Plane, 
  Ship, 
  Train, 
  Home, 
  Heart, 
  Stethoscope, 
  GraduationCap, 
  Briefcase, 
  Wrench, 
  Hammer, 
  Paintbrush, 
  Scissors, 
  BookOpen, 
  Calculator, 
  Calendar, 
  Clock3, 
  Compass, 
  Navigation as NavIcon, 
  PieChart, 
  TrendingDown, 
  Activity, 
  MessageSquare, 
  Eye, 
  Sparkles,
  ChevronRight,
  Play,
  Download,
  ExternalLink,
  Quote,
  User,
  Globe,
  Cpu,
  Palette,
  FileText as FileTextIcon,
  Location,
  Truck,
  ChefHat,
  Rocket,
  Sprout,
  Scale
} from 'lucide-react',

// Lazy load components
const Navigation = lazy(() => import('./components/Navigation')),
const Footer = lazy(() => import('./components/Footer')),
const EnhancedSEOHead = lazy(() => import('./components/EnhancedSEOHead')),

interface Service {
  icon: any,
  title: string,
  description: string,
  features: string[],
}

const services: Service[] = [
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Advanced artificial intelligence solutions for business automation and optimization.',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Comprehensive cloud migration, management, and optimization services.',
    features: ['Cloud Migration', 'Infrastructure Management', 'Cost Optimization', 'Security']
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Enterprise-grade security solutions to protect your digital assets.',
    features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance']
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Streamline operations with intelligent automation solutions.',
    features: ['Process Automation', 'Workflow Optimization', 'RPA', 'Integration']
  }
],

const HomePage: React.FC = () => {
const [isLoaded, setIsLoaded] = useState(false),

  useEffect(() => {
    setIsLoaded(true),
  }, []),

const handlePhoneClick = useCallback(() => {
    window.location.href = 'tel:+15551234567',
  }, []),

const handleEmailClick = useCallback(() => {
    window.location.href = 'mailto:info@ziontechgroup.com',
  }, []),

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
      </div>
    ),
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Suspense fallback={<div className="h-16 bg-slate-900" />}>
        <Navigation />
      </Suspense>
      
      <Suspense fallback={<div className="h-16 bg-slate-900" />}>
        <EnhancedSEOHead />
      </Suspense>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI-Powered
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Enterprise Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI technology, quantum computing, and digital transformation services. 
            We deliver innovative solutions that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your digital transformation journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of companies already using our AI solutions to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handlePhoneClick}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </button>
            <button 
              onClick={handleEmailClick}
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </button>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-64 bg-slate-900" />}>
        <Footer />
      </Suspense>
    </div>
  ),
},

export default HomePage,