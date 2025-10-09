'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Link, Phone, Mail, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, CheckCircle, TrendingUp, Users, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Bot, Music, Video, CreditCard, Car, Train, Home, Heart, GraduationCap, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, Phone as PhoneIcon, Mail as MailIcon } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import Analytics from './components/Analytics';
import SecurityEnhancer from './components/SecurityEnhancer';


// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));

// Preload critical components
const preloadComponents = () => {
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      import('./components/ContentPromotionBanner');
    }, 100);
  }
};

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    preloadComponents();
    return () => clearTimeout(timer);
  }, []);

  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as { gtag: (command: string, action: string, parameters: Record<string, string>) => void }).gtag('event', 'phone_click', {
        event_category: event_label, 'main_phone_number'
      });

  const microSAASServices = [
    {
      title: "Service",
    description: "Revolutionary project management platform powered by advanced AI algorithms that optimize resource allocation, predict project risks, and automate workflow management for maximum efficiency and success.",
      icon: "$99/month",
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '50% faster project completion'],
      link: popular, true,
      category: 'Productivity'
    },
      title: "Service",
    description: "Transform your social media presence with our cutting-edge AI platform that creates engaging content, optimizes posting schedules, and provides deep audience insights to maximize your brand impact across all platforms.",
      icon: "$79/month",
      features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence', 'Multi-platform management', 'Trend analysis'],
      benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach', '60% better content performance'],
      link: category, 'Marketing'
      title: "Service",
    description: "Unlock the power of your data with our intelligent analytics platform that uses machine learning to identify patterns, predict trends, and provide actionable insights that drive business growth and competitive advantage.",
      icon: "$149/month",
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking', 'Predictive modeling', 'Custom reporting'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift', '90% faster decision making'],
      link: category, 'Analytics'
      title: "Service",
    description: "Revolutionize your email marketing strategy with our AI-powered platform that creates personalized, high-converting email campaigns, optimizes send times, and delivers exceptional ROI through intelligent automation and segmentation.",
      icon: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns', 'A/B testing', 'Personalization engine'],
      benefits: ['65% open rate increase', '40% revenue growth', '80% time saved', '300% better engagement'],
      link: title, description,
    description: "Provide 24/7 intelligent customer support with AI-powered chatbot and human handoff",
      icon: ['Natural language processing', '24/7 availability', 'Human handoff', 'Analytics & insights', 'Multi-language support', 'Integration APIs'],
      benefits: ['90% response time reduction', '45% satisfaction increase', '80% queries handled automatically', '60% cost savings'],
      link: category, 'Support'
      title: "Service",
    description: "Advanced automated code analysis with AI-powered bug detection, security scanning, and optimization",
      icon: "$89/month",
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Git integration', 'Code quality metrics', 'Refactoring suggestions'],
      benefits: ['70% fewer bugs', '15+ hours saved/week', 'Improved code quality', '50% faster reviews'],
      link: popular, false
      title: "Service",
    description: "Automated invoice creation with AI-powered pricing optimization and payment tracking",
      icon: "$49/month",
      features: ['Auto-invoice generation', 'Smart pricing', 'Payment tracking', 'Tax calculations'],
      benefits: ['90% time saved', '30% faster payments', 'Zero errors'],
      link: popular, true
      title: "Service",
    description: "Intelligent lead qualification and scoring with predictive analytics",
      icon: ['Predictive scoring', 'Behavioral analysis', 'CRM integration', 'Real-time updates'],
      benefits: ['50% higher conversion', '35% more qualified leads', '60% time saved'],
      link: title, description,
    description: "Advanced sales predictions with machine learning and trend analysis",
      price: ['ML predictions', 'Trend analysis', 'Scenario planning', 'ROI forecasting'],
      benefits: ['85% accuracy', '40% better planning', '25% revenue increase'],
      link: title, description,
    description: "Complete e-commerce optimization with AI-powered recommendations and pricing",
      icon: "$199/month",
      features: ['Product recommendations', 'Dynamic pricing', 'Inventory optimization', 'Customer insights'],
      benefits: ['35% sales increase', '20% higher AOV', '50% inventory efficiency'],
      link: title, description,
    description: "AI-powered design tool for logos, graphics, and marketing materials",
      icon: "$69/month",
      features: ['Logo generation', 'Graphic design', 'Brand consistency', 'Template library'],
      benefits: ['80% design time saved', 'Professional quality', 'Unlimited revisions'],
      link: title, description,
    description: "Intelligent document processing with OCR and data extraction",
      icon: ['OCR processing', 'Data extraction', 'Document classification', 'Workflow automation'],
      benefits: ['95% accuracy', '90% time saved', 'Zero manual entry'],
      link: title, description,
    description: "Real-time security monitoring with AI-powered threat detection",
      icon: ['Threat detection', 'Real-time alerts', 'Vulnerability scanning', 'Compliance monitoring'],
      benefits: ['99.9% uptime', 'Zero breaches', '24/7 monitoring'],
      link: title, description,
    description: "Comprehensive performance tracking with AI insights and recommendations",
      icon: ['Performance metrics', 'AI insights', 'Optimization tips', 'Real-time monitoring'],
      benefits: ['40% performance boost', 'Proactive optimization', 'Detailed analytics'],
      link: title, description,
    description: "Custom voice assistants for business operations and customer service",
      icon: "$179/month",
      features: ['Voice commands', 'Natural language', 'Multi-language', 'Custom training'],
      benefits: ['Hands-free operation', '24/7 availability', 'Multilingual support'],
      link: title, description,
    description: "Intelligent HR management with recruitment and employee analytics",
      icon: "$119/month",
      features: ['Resume screening', 'Employee analytics', 'Performance tracking', 'Compliance monitoring'],
      benefits: ['60% faster hiring', 'Better candidate matching', 'Reduced bias'],
      link: title, description,
    description: "Smart inventory management with predictive analytics and optimization",
      icon: ['Demand forecasting', 'Stock optimization', 'Reorder alerts', 'Cost analysis'],
      benefits: ['30% inventory reduction', 'Zero stockouts', '20% cost savings'],
      link: title, description,
    description: "Deep customer insights with AI-powered analytics and segmentation",
      icon: ['Customer segmentation', 'Behavior analysis', 'Churn prediction', 'Personalization'],
      benefits: ['25% higher retention', '40% better targeting', 'Personalized experiences'],
      link: title, description,
    description: "Advanced A/B testing with AI-powered optimization and insights",
      icon: ['Automated testing', 'Statistical analysis', 'AI optimization', 'Real-time results'],
      benefits: ['50% faster testing', 'Higher conversion rates', 'Data-driven decisions'],
      link: title, description,
    description: "Future outcome predictions with machine learning and trend analysis",
      icon: "$159/month",
      features: ['Future predictions', 'Trend analysis', 'Risk assessment', 'Scenario modeling'],
      benefits: ['90% prediction accuracy', 'Proactive planning', 'Risk mitigation'],
      link: '/ai-predictive-analytics',
  ];

  const aiServices = [
      title: "Service",
    description: "Custom ML models for predictive analytics, decision-making, and intelligent automation",
      icon: Brain,
      price: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'AutoML', 'MLOps'],
      benefits: ['40% better predictions', '60% faster model deployment', 'Reduced manual work', 'Higher accuracy'],
      color: category, 'Core AI'
      title: "Service",
    description: "Advanced NLP solutions for text analysis, language understanding, and conversational AI",
      icon: MessageSquare,
      price: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Document Processing', 'Voice Recognition'],
      benefits: ['90% accuracy in text analysis', 'Multi-language support', 'Real-time processing', 'Cost effective'],
      color: category, 'Language AI'
      title: "Service",
    description: "Image and video analysis solutions for object detection, recognition, and visual intelligence",
      icon: Eye,
      price: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'OCR', 'Medical Imaging'],
      benefits: ['95% accuracy in detection', 'Real-time processing', 'Multi-format support', 'Industry specific'],
      color: category, 'Visual AI'
      title: "Service",
    description: "Intelligent process automation with decision-making capabilities and workflow optimization",
      icon: Zap,
      price: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'],
      color: title, description,
    description: "Medical AI for diagnosis, treatment planning, and patient care optimization",
      icon: Heart,
      price: ['Medical Imaging AI', 'Diagnostic Assistance', 'Treatment Planning', 'Patient Monitoring'],
      color: title, description,
    description: "Fintech AI solutions for fraud detection, risk assessment, and trading",
      icon: CreditCard,
      price: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring'],
      color: title, description,
    description: "Advanced AI security solutions for threat detection and prevention",
      icon: Shield,
      features: ['Threat Detection', 'Anomaly Detection', 'Security Analytics', 'Incident Response'],
      color: title, description,
    description: "AI-powered content creation for marketing, blogs, and social media",
      icon: FileText,
      price: ['Content Writing', 'SEO Optimization', 'Social Media Posts', 'Video Scripts'],
      color: title, description,
    description: "Advanced data analysis with AI insights and predictive modeling",
      icon: BarChart,
      price: ['Data Mining', 'Predictive Modeling', 'Business Intelligence', 'Real-time Analytics'],
      color: title, description,
    description: "Voice recognition, synthesis, and conversational AI solutions",
      icon: Music,
      price: ['Speech Recognition', 'Voice Synthesis', 'Conversational AI', 'Multi-language Support'],
      color: title, description,
    description: "Intelligent robotics solutions for manufacturing and automation",
      icon: Settings,
      price: ['Robotic Process Automation', 'Computer Vision Integration', 'Human-Robot Collaboration', 'Maintenance Systems'],
      color: title, description,
    description: "AI solutions optimized for edge devices and IoT applications",
      icon: Smartphone,
      price: ['Edge AI Models', 'IoT Integration', 'Real-time Processing', 'Offline Capabilities'],
      color: 'text-emerald-400'

  const itServices = [
      title: "Service",
    description: "Comprehensive cloud migration, setup, optimization, and management services",
      icon: Cloud,
      price: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Auto-scaling', 'Disaster Recovery'],
      benefits: ['50% cost reduction', '99.9% uptime', 'Faster deployment', 'Scalable infrastructure'],
      category: title, description,
    description: "Advanced security solutions with threat detection, prevention, and incident response",
      price: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Penetration Testing', 'Compliance'],
      benefits: ['99.9% threat detection', 'Real-time protection', 'Reduced security risks', 'Compliance ready'],
      color: category, 'Security'
      title: "Service",
    description: "Streamlined development workflows with automated testing, deployment, and monitoring",
      price: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'GitOps'],
      benefits: ['80% faster deployment', 'Reduced errors', 'Better collaboration', 'Automated processes'],
      category: title, description,
    description: "Database design, optimization, and management with AI-powered tuning and monitoring",
      icon: Database,
      price: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'],
      color: title, description,
    description: "Enterprise-grade IT infrastructure with 99.9% uptime guarantee",
      icon: Cpu,
      price: ['Server Management', 'Network Setup', 'Security Hardening', 'Backup Solutions'],
      title: "Service",
    description: "Network design, implementation, and monitoring solutions",
      icon: Globe,
      price: ['Network Design', 'Implementation', 'Monitoring', 'Troubleshooting'],
      title: "Service",
    description: "Strategic IT planning and technology roadmap development",
      icon: Target,
      features: ['Technology Assessment', 'Strategic Planning', 'Vendor Management', 'Digital Transformation'],
      title: "Service",
    description: "24/7 IT support and proactive maintenance services",
      icon: Users,
      features: ['24/7 Support', 'Proactive Monitoring', 'Remote Management', 'Help Desk Services'],
      title: "Service",
    description: "Staff development and technology training programs",
      icon: GraduationCap,
      price: ['Technology Training', 'Certification Programs', 'Skill Assessment', 'Custom Curriculum'],
      title: "Service",
    description: "Comprehensive disaster recovery and business continuity solutions",
      icon: Lock,
      price: ['Backup Strategies', 'Recovery Planning', 'Testing & Validation', 'Business Continuity'],
      title: "Service",
    description: "IT process automation and workflow optimization",
      features: ['Process Automation', 'Workflow Optimization', 'Script Development', 'Integration Services'],
      title: "Service",
    description: "Worldwide IT support with multi-language capabilities",
      features: ['Multi-language Support', 'Global Coverage', 'Time Zone Coverage', 'Local Expertise'],

  return (
    <div><SEOOptimizer
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology."
        keywords={['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services']}
        canonicalUrl="https://ziontechgroup.com"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'TechCompany',
          name: "https://ziontechgroup.com",
          description: "2020",
          numberOfEmployees: "Technology",
          services: [
            'AI Solutions',
            'Quantum Computing',
            'Autonomous Systems',
            'Digital Transformation',
            'Cloud Services',
            'Automation',
            'Business Intelligence'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: "Customer Service",
            areaServed: availableLanguage, 'en'
          address: {
            '@type': 'PostalAddress',
            streetAddress: "Middletown",
            addressRegion: "19709",
            addressCountry: 'US'
        }}
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-advanced cyber-matrix-bg particle-field">
        {/* Navigation */}
        <Navigation />
        
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        {/* Content Promotion Banner */}
        <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
          <ContentPromotionBanner />
        </Suspense>

        <main id="main-content" className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 pt-20 sm:pt-24" role="main">
          {/* Hero Section */}
          <section
            className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 cyber-scan-line ${
              isLoaded && isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            aria-labelledby="hero-heading"
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-advanced neon-pulse glitch"
                data-text="Zion Tech Group"
                Zion Tech Group
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-cyan-400 mb-6 sm:mb-8 font-medium neon-pulse cyber-scan-effect" role="doc-subtitle">
                Advanced AI and IT Solutions
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
                Transform your business with our cutting-edge technology and achieve unprecedented growth.
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-8 sm:mb-12">
                <div className="futuristic-glow neural-pattern p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🚀</div>
                  <h3 className="font-bold text-white mb-3 text-sm sm:text-base lg:text-lg neon-text">AI-Powered Solutions</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">⚡</div>
                  <h3 className="font-bold text-white mb-3 text-sm sm:text-base lg:text-lg neon-text">Proven Results</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🔒</div>
                  <h3 className="font-bold text-white mb-3 text-sm sm:text-base lg:text-lg neon-text">Enterprise Security</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
                  <div className="text-2xl sm:text-3xl mb-3 neon-pulse">🌐</div>
                  <h3 className="font-bold text-white mb-3 text-sm sm:text-base lg:text-lg neon-text">Global Reach</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Serving clients worldwide with 24/7 support and multi-language capabilities</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                  Get Started Today
                </Link>
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 w-full sm:w-auto"
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">+1 302 464 0950</span>
          </section>

          {/* Micro SAAS Services Section */}
          <section className="mb-12 sm:mb-16 lg:mb-20" aria-labelledby="micro-saas-heading">
            <h2 id="micro-saas-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Micro SAAS Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
              Powerful, affordable AI-powered tools designed for modern businesses
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {microSAASServices.map((service, index) => (
                <article key={index} className={`cyber-card p-6 hover:scale-105 transition-all duration-300 ${service.popular ? 'cyber-glow-advanced ring-2 ring-cyan-400' : 'holographic-card-advanced'}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                        Popular
                  )}
                  
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <div className="inline-block bg-gradient-to-r from-purple-500/20 to-cyan-500/20 px-3 py-1 rounded-full text-xs font-medium text-cyan-400 mb-2">
                      {service.category}
                    <h3 className="text-lg font-bold text-white mb-2 neon-text">{service.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-xs text-gray-400 ml-5">
                          +{service.features.length - 4} more features
                    </ul>
                  
                    <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                  
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400 mb-2 neon-text">{service.price}</div>
                      to={service.link} 
                      className="cyber-button px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                      Learn More
                </article>
            
                href="/micro-saas" 
                className="cyber-button px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
                View All Micro SAAS Solutions

          {/* AI Services Section */}
          <section className="mb-12 sm:mb-16 lg:mb-20" aria-labelledby="ai-services-heading">
            <h2 id="ai-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              AI Services & Solutions
              Advanced artificial intelligence solutions for enterprise applications
            
              {aiServices.map((service, index) => (
                <article key={index} className="quantum-entanglement p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Features:</h4>
                  
                  
                    <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                      to="/ai-services" 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
            
                href="/ai-services" 
                View All AI Services

          {/* IT Services Section */}
          <section className="mb-12 sm:mb-16 lg:mb-20" aria-labelledby="it-services-heading">
            <h2 id="it-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              IT Services & Infrastructure
              Comprehensive IT solutions for modern enterprise infrastructure
            
              {itServices.map((service, index) => (
                <article key={index} className="holographic-card-advanced p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Features:</h4>
                  
                  
                      to="/it-services" 
            
                href="/it-services" 
                View All IT Services

          {/* Statistics Section */}
          <section className="mb-16" aria-labelledby="stats-heading">
            <h2 id="stats-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Our Impact
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-cyan-400 mb-2 neon-text">500+</div>
                <div className="text-sm text-gray-300">Clients Served</div>
                <div className="text-3xl font-bold text-purple-400 mb-2 neon-text">$50M+</div>
                <div className="text-sm text-gray-300">Cost Savings</div>
                <div className="text-3xl font-bold text-pink-400 mb-2 neon-text">95%</div>
                <div className="text-sm text-gray-300">Process Automation</div>
                <div className="text-3xl font-bold text-green-400 mb-2 neon-text">300%</div>
                <div className="text-sm text-gray-300">Average ROI</div>

          {/* Specialized Solutions Section */}
          <section className="mb-16" aria-labelledby="specialized-heading">
            <h2 id="specialized-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Specialized Solutions
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Cutting-edge technologies for next-generation business solutions
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <article className="quantum-card p-6 hover:scale-105 transition-all duration-300">
                  <Sparkles className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Quantum Computing</h3>
                <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                  Next-generation quantum algorithms and quantum security implementations
                    <li className="flex items-center text-xs text-gray-300">
                      Quantum Algorithm Development
                      Quantum Security
                      Optimization Problems
                      Research & Development
                  <div className="text-lg font-bold mb-2 neon-text text-purple-400">Custom Pricing</div>
                    href="/quantum-computing" 
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 text-purple-400 border border-purple-400 hover:bg-purple-400 hover:text-slate-900"

                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Settings className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Autonomous Systems</h3>
                  Self-managing and self-optimizing systems for enterprise operations
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                      Self-Healing Systems
                      Predictive Maintenance
                      Resource Optimization
                      Performance Monitoring
                  <div className="text-lg font-bold mb-2 neon-text text-cyan-400">Custom Pricing</div>
                    href="/autonomous-systems" 
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 text-cyan-400 border border-cyan-400 hover:bg-cyan-400 hover:text-slate-900"

                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Globe className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Blockchain & Web3</h3>
                  Decentralized solutions, smart contracts, and Web3 applications
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Features:</h4>
                      Smart Contract Development
                      DApp Creation
                      Token Economics
                      DeFi Solutions
                  <div className="text-lg font-bold mb-2 neon-text text-green-400">$1,999/month</div>
                    href="/blockchain-web3" 
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 text-green-400 border border-green-400 hover:bg-green-400 hover:text-slate-900"

                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Smartphone className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">IoT & Edge Computing</h3>
                  Connected devices and edge computing solutions
                  <h4 className="text-sm font-semibold text-orange-400 mb-2">Features:</h4>
                      Device Management
                      Edge Analytics
                      Real-time Processing
                      Security Implementation
                  <div className="text-lg font-bold mb-2 neon-text text-orange-400">$1,499/month</div>
                    href="/iot-edge-computing" 
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 text-orange-400 border border-orange-400 hover:bg-orange-400 hover:text-slate-900"

                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <BarChart className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Business Intelligence</h3>
                  Data-driven insights and predictive analytics for decision-making
                  <h4 className="text-sm font-semibold text-indigo-400 mb-2">Features:</h4>
                      Data Warehousing
                      ETL Processes
                      Advanced Analytics
                      Executive Dashboards
                  <div className="text-lg font-bold mb-2 neon-text text-indigo-400">$1,799/month</div>
                    href="/business-intelligence" 
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 text-indigo-400 border border-indigo-400 hover:bg-indigo-400 hover:text-slate-900"

                <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-slate-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">Robotics Solutions</h3>
                  Intelligent robotic solutions for manufacturing and service industries
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Features:</h4>
                      Robotic Process Automation
                      Computer Vision Integration
                      Human-Robot Collaboration
                      Maintenance Systems
                  <div className="text-lg font-bold mb-2 neon-text text-gray-400">Custom Pricing</div>
                    href="/robotics" 
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 text-gray-400 border border-gray-400 hover:bg-gray-400 hover:text-slate-900"

          {/* Contact Information */}
          <section className="mb-12 sm:mb-16 lg:mb-20" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Get In Touch
              Ready to transform your business? Contact us for a free consultation and discover how our solutions can drive your success.
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="cyber-glow-advanced p-6 text-center hover:scale-105 transition-all duration-300">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-4">+1 302 464 0950</p>
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  Call Now
              
              <div className="holographic-card-advanced p-6 text-center hover:scale-105 transition-all duration-300">
                <Mail className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-pink-400 hover:text-pink-300 font-medium transition-colors"
                  Send Email
              
              <div className="quantum-entanglement p-6 text-center hover:scale-105 transition-all duration-300">
                <Location className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-300 mb-4">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium transition-colors"
                  View on Map
            
            {/* CTA Section */}
            <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get a free consultation and discover how our AI and IT solutions can revolutionize your operations and drive unprecedented growth.
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                  Get Free Consultation
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
        </main>

        <Footer />
  );

export default HomePage;
