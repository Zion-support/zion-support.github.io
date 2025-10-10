'use client';

import React, { Suspense, lazy, memo } from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, Brain, Zap, Target, BarChart, Shield, Users, Globe, Clock, Award, Rocket, TrendingUp, Building, Activity, Settings, Database, Heart, Home, Video, Palette, Code } from 'lucide-react';
import Footer from './components/Footer';

// Lazy load heavy components
const LazyHero = lazy(() => import('./components/FuturisticHero'));
const LazyServiceCard = lazy(() => import('./components/FuturisticServiceCard'));

// Service data - optimized structure
const microSAASServices = [
  {
    name: "AI Project Manager Pro",
    description: "Intelligent project management with predictive analytics and automated resource allocation",
    price: "$99/mo",
    features: ["Smart Scheduling", "Risk Prediction", "Team Optimization", "Progress Tracking"],
    category: "Productivity",
    popular: true,
    icon: BarChart,
    link: "https://ziontechgroup.com/ai-project-manager"
  },
  {
    name: "AI Analytics Dashboard",
    description: "Get intelligent insights from your data with AI-powered analytics and predictive modeling",
    price: "$149/mo",
    features: ["Real-time Analytics", "Predictive Insights", "Custom Reports", "Data Visualization"],
    category: "Analytics",
    popular: true,
    icon: Target,
    link: "https://ziontechgroup.com/ai-analytics-dashboard"
  },
  {
    name: "AI Customer Support Bot",
    description: "24/7 AI-powered customer support with natural language processing and instant responses",
    price: "$199/mo",
    features: ["24/7 Support", "Multi-language", "Sentiment Analysis", "Escalation Management"],
    category: "Support",
    popular: false,
    icon: Users,
    link: "https://ziontechgroup.com/ai-customer-support-bot"
  },
  {
    name: "AI Content Generator",
    description: "Create high-quality content automatically with AI-powered writing and editing tools",
    price: "$79/mo",
    features: ["Content Creation", "SEO Optimization", "Multi-format", "Brand Voice"],
    category: "Content",
    popular: true,
    icon: Zap,
    link: "https://ziontechgroup.com/ai-content-generation"
  },
  {
    name: "AI Social Media Manager",
    description: "Automate your social media presence with AI-powered content creation and scheduling",
    price: "$129/mo",
    features: ["Auto Posting", "Content Generation", "Analytics", "Engagement Tracking"],
    category: "Marketing",
    popular: false,
    icon: Globe,
    link: "https://ziontechgroup.com/ai-social-media-manager"
  },
  {
    name: "AI Code Assistant",
    description: "AI-powered coding assistant that helps developers write better code faster",
    price: "$89/mo",
    features: ["Code Generation", "Bug Detection", "Code Review", "Documentation"],
    category: "Development",
    popular: true,
    icon: Code,
    link: "https://ziontechgroup.com/ai-code-assistant"
  }
];

const aiServices = [
  {
    name: "AI Workflow Automation",
    description: "Streamline your business processes with intelligent automation solutions",
    icon: Settings,
    link: "/ai-workflow-automation"
  },
  {
    name: "AI Data Analytics",
    description: "Transform your data into actionable insights with advanced AI analytics",
    icon: BarChart,
    link: "/ai-data-analytics"
  },
  {
    name: "AI Customer Support",
    description: "Enhance customer experience with intelligent support solutions",
    icon: Users,
    link: "/ai-customer-support"
  },
  {
    name: "AI Content Generation",
    description: "Create engaging content at scale with AI-powered tools",
    icon: Zap,
    link: "/ai-content-generation"
  },
  {
    name: "AI Healthcare Solutions",
    description: "Revolutionary healthcare solutions powered by artificial intelligence",
    icon: Heart,
    link: "/ai-healthcare"
  },
  {
    name: "AI Fintech Platform",
    description: "Secure and intelligent financial technology solutions",
    icon: Shield,
    link: "/ai-fintech"
  }
];

const itServices = [
  {
    name: "Cloud Migration & Setup",
    description: "Seamless migration to cloud infrastructure with expert guidance",
    icon: Cloud,
    link: "/cloud-migration"
  },
  {
    name: "Cybersecurity Solutions",
    description: "Comprehensive security solutions to protect your digital assets",
    icon: Shield,
    link: "/cybersecurity"
  },
  {
    name: "Custom Development",
    description: "Tailored software solutions built to meet your specific needs",
    icon: Code,
    link: "/custom-development"
  },
  {
    name: "DevOps & CI/CD",
    description: "Streamline your development workflow with modern DevOps practices",
    icon: Settings,
    link: "/devops-cicd"
  },
  {
    name: "Database Management",
    description: "Optimize and maintain your database infrastructure",
    icon: Database,
    link: "/database-management"
  },
  {
    name: "IT Support & Maintenance",
    description: "24/7 technical support and proactive system maintenance",
    icon: Activity,
    link: "/it-support"
  }
];

// Optimized Service Card Component
const ServiceCard = memo(({ service, isMicroSAAS = false }: { service: any, isMicroSAAS?: boolean }) => {
  const IconComponent = service.icon;
  
  return (
    <div className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
      {service.popular && (
        <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">
          <Star className="w-4 h-4 inline mr-1" />
          Popular
        </div>
      )}
      
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl">
          <IconComponent className="w-8 h-8 text-cyan-400" />
        </div>
        {isMicroSAAS && (
          <div className="text-right">
            <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
            <div className="text-sm text-gray-400">per month</div>
          </div>
        )}
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
        {service.name}
      </h3>
      
      <p className="text-gray-300 mb-4 leading-relaxed">
        {service.description}
      </p>
      
      {isMicroSAAS && service.features && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {service.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-center text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <a
        href={service.link}
        className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
      >
        Learn More
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

// Loading component
const LoadingSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-700 rounded mb-4"></div>
    <div className="h-4 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded mb-4"></div>
    <div className="h-12 bg-gray-700 rounded"></div>
  </div>
);

// Main Page Component
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <Suspense fallback={<LoadingSkeleton />}>
        <LazyHero />
      </Suspense>

      {/* Micro SAAS Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Micro SAAS Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful, affordable AI-powered tools designed to streamline your business operations and boost productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAASServices.map((service, index) => (
              <ServiceCard key={index} service={service} isMicroSAAS={true} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence solutions to transform your business and drive innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                IT Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions to modernize your infrastructure and optimize your technology stack.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI and IT solutions can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1-302-464-0950"
              className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;