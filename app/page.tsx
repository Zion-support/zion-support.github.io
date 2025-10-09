'use client';

import React, { useState, useEffect, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Star, 
  CheckCircle, 
  Play, 
  Sparkles,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Users,
  Award,
  Clock,
  Target,
  BarChart,
  Cpu,
  Globe,
  Lock,
  Database,
  Smartphone,
  Code,
  MessageSquare,
  Eye,
  Settings,
  Wifi,
  Server,
  HardDrive,
  MessageSquare as Chat,
  FileText,
  PieChart,
  Activity,
  Zap as Lightning,
  Rocket,
  Layers,
  Workflow,
  Bot,
  Headphones,
  Monitor,
  Smartphone as Mobile,
  Laptop,
  Tablet,
  Watch,
  Camera,
  Mic,
  Headphones as Headset,
  Gamepad2,
  Wifi as Network,
  Shield as Security,
  Database as Data,
  BarChart as Analytics,
  TrendingUp as Growth,
  Users as Team,
  Award as Achievement,
  Star as Rating,
  Clock as Time,
  Target as Goal,
  CheckCircle as Success,
  ArrowRight as Next,
  Play as Start,
  Sparkles as Magic,
  Phone as Call,
  Mail as Email,
  MapPin as Location
} from 'lucide-react';

// Real Micro SAAS Services Data
const microSaasServices = [
  {
    id: 'ai-project-manager',
    name: 'AI Project Manager Pro',
    description: 'Intelligent project management with AI-powered scheduling, resource allocation, and risk prediction. Achieve 40% faster project delivery.',
    icon: BarChart,
    price: '$299/month',
    features: ['AI-powered scheduling', 'Resource optimization', 'Risk prediction', 'Real-time analytics', 'Team collaboration'],
    popular: true,
    category: 'Project Management',
    benefits: ['40% faster delivery', '30% cost reduction', '95% accuracy in predictions'],
    link: 'https://ziontechgroup.com/ai-project-manager',
    demo: 'https://ziontechgroup.com/demo/ai-project-manager'
  },
  {
    id: 'ai-social-media-manager',
    name: 'AI Social Media Manager',
    description: 'Automated social media management with AI content creation, optimal posting times, and engagement analytics.',
    icon: MessageSquare,
    price: '$199/month',
    features: ['AI content creation', 'Optimal posting times', 'Engagement analytics', 'Multi-platform management', 'Brand voice consistency'],
    popular: true,
    category: 'Social Media',
    benefits: ['300% engagement increase', '50% time savings', 'Consistent brand voice'],
    link: 'https://ziontechgroup.com/ai-social-media-manager',
    demo: 'https://ziontechgroup.com/demo/ai-social-media-manager'
  },
  {
    id: 'ai-analytics-dashboard',
    name: 'AI Analytics Dashboard',
    description: 'Advanced business intelligence with AI-powered insights, predictive analytics, and automated reporting.',
    icon: PieChart,
    price: '$399/month',
    features: ['AI-powered insights', 'Predictive analytics', 'Automated reporting', 'Custom dashboards', 'Real-time monitoring'],
    popular: true,
    category: 'Analytics',
    benefits: ['60% better decision making', 'Real-time insights', 'Automated reporting'],
    link: 'https://ziontechgroup.com/ai-analytics-dashboard',
    demo: 'https://ziontechgroup.com/demo/ai-analytics-dashboard'
  },
  {
    id: 'ai-email-marketing',
    name: 'AI Email Marketing Suite',
    description: 'Intelligent email marketing with AI-driven personalization, A/B testing, and automated campaign optimization.',
    icon: Mail,
    price: '$149/month',
    features: ['AI personalization', 'A/B testing', 'Campaign optimization', 'Segmentation', 'Performance tracking'],
    popular: true,
    category: 'Email Marketing',
    benefits: ['45% higher open rates', '60% click-through improvement', 'Automated optimization'],
    link: 'https://ziontechgroup.com/ai-email-marketing',
    demo: 'https://ziontechgroup.com/demo/ai-email-marketing'
  },
  {
    id: 'ai-customer-support-bot',
    name: 'AI Customer Support Bot',
    description: '24/7 AI-powered customer support with natural language processing and seamless human handoff.',
    icon: Bot,
    price: '$249/month',
    features: ['24/7 availability', 'Natural language processing', 'Human handoff', 'Multi-language support', 'Learning capabilities'],
    popular: true,
    category: 'Customer Support',
    benefits: ['90% query resolution', '24/7 availability', 'Instant responses'],
    link: 'https://ziontechgroup.com/ai-customer-support-bot',
    demo: 'https://ziontechgroup.com/demo/ai-customer-support-bot'
  },
  {
    id: 'ai-code-review-assistant',
    name: 'AI Code Review Assistant',
    description: 'Automated code analysis with AI-powered suggestions, security scanning, and performance optimization recommendations.',
    icon: Code,
    price: '$179/month',
    features: ['Automated code analysis', 'Security scanning', 'Performance optimization', 'Best practices', 'Team collaboration'],
    popular: false,
    category: 'Development',
    benefits: ['50% faster code reviews', '90% bug detection', 'Consistent quality'],
    link: 'https://ziontechgroup.com/ai-code-review-assistant',
    demo: 'https://ziontechgroup.com/demo/ai-code-review-assistant'
  },
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator Pro',
    description: 'AI-powered content creation for blogs, social media, marketing materials, and technical documentation.',
    icon: FileText,
    price: '$129/month',
    features: ['Multi-format content', 'SEO optimization', 'Brand voice consistency', 'Plagiarism checking', 'Content scheduling'],
    popular: false,
    category: 'Content Creation',
    benefits: ['80% content creation time saved', 'SEO optimized', 'Brand consistent'],
    link: 'https://ziontechgroup.com/ai-content-generator',
    demo: 'https://ziontechgroup.com/demo/ai-content-generator'
  },
  {
    id: 'ai-seo-optimizer',
    name: 'AI SEO Optimizer',
    description: 'Advanced SEO optimization with AI-driven keyword research, content analysis, and ranking predictions.',
    icon: Target,
    price: '$199/month',
    features: ['Keyword research', 'Content analysis', 'Ranking predictions', 'Competitor analysis', 'Technical SEO'],
    popular: false,
    category: 'SEO',
    benefits: ['200% organic traffic increase', 'Top 3 rankings', 'Automated optimization'],
    link: 'https://ziontechgroup.com/ai-seo-optimizer',
    demo: 'https://ziontechgroup.com/demo/ai-seo-optimizer'
  }
];

// Real IT Services Data
const itServices = [
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure Solutions',
    description: 'Complete cloud migration and infrastructure setup with AWS, Azure, and Google Cloud. 99.9% uptime guarantee.',
    icon: Cloud,
    price: 'Starting at $2,999/month',
    features: ['Cloud migration', 'Infrastructure setup', 'Monitoring & maintenance', 'Security compliance', '24/7 support'],
    popular: true,
    category: 'Infrastructure',
    benefits: ['99.9% uptime', '50% cost reduction', 'Scalable infrastructure'],
    link: 'https://ziontechgroup.com/cloud-infrastructure',
    demo: 'https://ziontechgroup.com/demo/cloud-infrastructure'
  },
  {
    id: 'cybersecurity-suite',
    name: 'Enterprise Cybersecurity Suite',
    description: 'Comprehensive security solutions including threat detection, vulnerability assessment, and incident response.',
    icon: Shield,
    price: 'Starting at $1,999/month',
    features: ['Threat detection', 'Vulnerability assessment', 'Incident response', 'Security training', 'Compliance management'],
    popular: true,
    category: 'Security',
    benefits: ['99.8% threat detection', 'Zero data breaches', 'Compliance ready'],
    link: 'https://ziontechgroup.com/cybersecurity-suite',
    demo: 'https://ziontechgroup.com/demo/cybersecurity-suite'
  },
  {
    id: 'devops-automation',
    name: 'DevOps & CI/CD Automation',
    description: 'Complete DevOps pipeline setup with automated testing, deployment, and monitoring for faster software delivery.',
    icon: Settings,
    price: 'Starting at $1,499/month',
    features: ['CI/CD pipeline', 'Automated testing', 'Deployment automation', 'Monitoring setup', 'Team training'],
    popular: true,
    category: 'DevOps',
    benefits: ['70% faster deployments', '90% error reduction', 'Automated workflows'],
    link: 'https://ziontechgroup.com/devops-automation',
    demo: 'https://ziontechgroup.com/demo/devops-automation'
  },
  {
    id: 'database-management',
    name: 'Database Management & Optimization',
    description: 'Professional database administration with performance optimization, backup solutions, and data migration.',
    icon: Database,
    price: 'Starting at $999/month',
    features: ['Performance optimization', 'Backup solutions', 'Data migration', 'Security hardening', '24/7 monitoring'],
    popular: false,
    category: 'Database',
    benefits: ['300% performance improvement', 'Zero data loss', 'Automated backups'],
    link: 'https://ziontechgroup.com/database-management',
    demo: 'https://ziontechgroup.com/demo/database-management'
  },
  {
    id: 'network-solutions',
    name: 'Network Infrastructure Solutions',
    description: 'Complete network design, implementation, and management with security, monitoring, and optimization.',
    icon: Wifi,
    price: 'Starting at $1,299/month',
    features: ['Network design', 'Security implementation', 'Performance monitoring', 'Troubleshooting', 'Maintenance'],
    popular: false,
    category: 'Networking',
    benefits: ['99.9% network uptime', 'Enhanced security', 'Optimized performance'],
    link: 'https://ziontechgroup.com/network-solutions',
    demo: 'https://ziontechgroup.com/demo/network-solutions'
  },
  {
    id: 'it-consulting',
    name: 'Strategic IT Consulting',
    description: 'Expert IT strategy consulting to align technology with business goals and drive digital transformation.',
    icon: Users,
    price: '$300/hour',
    features: ['IT strategy planning', 'Technology assessment', 'Digital transformation', 'Vendor selection', 'Implementation guidance'],
    popular: false,
    category: 'Consulting',
    benefits: ['Strategic alignment', 'Cost optimization', 'Technology roadmap'],
    link: 'https://ziontechgroup.com/it-consulting',
    demo: 'https://ziontechgroup.com/demo/it-consulting'
  }
];

// Real AI Services Data
const aiServices = [
  {
    id: 'ai-machine-learning',
    name: 'AI Machine Learning Platform',
    description: 'Complete ML platform with model training, deployment, and monitoring. Build and deploy AI models at scale.',
    icon: Brain,
    price: 'Starting at $4,999/month',
    features: ['Model training', 'Model deployment', 'Performance monitoring', 'AutoML capabilities', 'Scalable infrastructure'],
    popular: true,
    category: 'Machine Learning',
    benefits: ['90% accuracy improvement', '10x faster model deployment', 'Automated optimization'],
    link: 'https://ziontechgroup.com/ai-machine-learning',
    demo: 'https://ziontechgroup.com/demo/ai-machine-learning'
  },
  {
    id: 'ai-computer-vision',
    name: 'AI Computer Vision Solutions',
    description: 'Advanced computer vision applications for object detection, image recognition, and video analysis.',
    icon: Eye,
    price: 'Starting at $3,499/month',
    features: ['Object detection', 'Image recognition', 'Video analysis', 'Real-time processing', 'Custom model training'],
    popular: true,
    category: 'Computer Vision',
    benefits: ['95% accuracy in detection', 'Real-time processing', 'Custom solutions'],
    link: 'https://ziontechgroup.com/ai-computer-vision',
    demo: 'https://ziontechgroup.com/demo/ai-computer-vision'
  },
  {
    id: 'ai-natural-language-processing',
    name: 'AI Natural Language Processing',
    description: 'Advanced NLP solutions for text analysis, sentiment analysis, language translation, and chatbot development.',
    icon: MessageSquare,
    price: 'Starting at $2,999/month',
    features: ['Text analysis', 'Sentiment analysis', 'Language translation', 'Chatbot development', 'Custom training'],
    popular: true,
    category: 'NLP',
    benefits: ['98% accuracy in analysis', 'Multi-language support', 'Real-time processing'],
    link: 'https://ziontechgroup.com/ai-natural-language-processing',
    demo: 'https://ziontechgroup.com/demo/ai-natural-language-processing'
  },
  {
    id: 'ai-predictive-analytics',
    name: 'AI Predictive Analytics',
    description: 'Advanced predictive analytics with AI-powered forecasting, trend analysis, and business intelligence.',
    icon: TrendingUp,
    price: 'Starting at $2,499/month',
    features: ['Predictive modeling', 'Trend analysis', 'Forecasting', 'Risk assessment', 'Business intelligence'],
    popular: false,
    category: 'Analytics',
    benefits: ['85% prediction accuracy', 'Risk mitigation', 'Data-driven decisions'],
    link: 'https://ziontechgroup.com/ai-predictive-analytics',
    demo: 'https://ziontechgroup.com/demo/ai-predictive-analytics'
  },
  {
    id: 'ai-robotics-platform',
    name: 'AI Robotics Platform',
    description: 'Intelligent robotics solutions with AI-powered automation, autonomous systems, and smart manufacturing.',
    icon: Bot,
    price: 'Starting at $9,999/month',
    features: ['Autonomous systems', 'Smart manufacturing', 'Quality control', 'Predictive maintenance', 'Integration'],
    popular: false,
    category: 'Robotics',
    benefits: ['40% efficiency increase', 'Zero-defect production', 'Predictive maintenance'],
    link: 'https://ziontechgroup.com/ai-robotics-platform',
    demo: 'https://ziontechgroup.com/demo/ai-robotics-platform'
  },
  {
    id: 'ai-edge-computing',
    name: 'AI Edge Computing Solutions',
    description: 'AI processing at the edge with low-latency inference, real-time decision making, and IoT integration.',
    icon: Cpu,
    price: 'Starting at $1,999/month',
    features: ['Edge AI processing', 'Low-latency inference', 'IoT integration', 'Real-time decisions', 'Offline capability'],
    popular: false,
    category: 'Edge Computing',
    benefits: ['90% latency reduction', 'Offline processing', 'Real-time decisions'],
    link: 'https://ziontechgroup.com/ai-edge-computing',
    demo: 'https://ziontechgroup.com/demo/ai-edge-computing'
  }
];

// Futuristic Hero Component
const FuturisticHero = memo(() => {
  const [currentText, setCurrentText] = useState(0);
  const heroTexts = [
    "AI-Powered Enterprise Solutions",
    "Quantum Computing Innovation",
    "Autonomous Systems Technology",
    "Digital Transformation Excellence"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center cyber-grid neural-network-bg overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 particle-field">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-pink-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 cyber-text">
            <span className="holographic-text neon-pulse">
              {heroTexts[currentText]}
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI, quantum computing, and autonomous systems. 
            Achieve <span className="neon-text">300% ROI</span> with our innovative solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="cyber-button px-8 py-4 text-lg font-bold group">
              <span className="flex items-center">
                <Rocket className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                Start Your Transformation
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 text-lg font-bold text-white border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 group">
              <span className="flex items-center">
                <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Watch Demo
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-sm text-gray-300">Projects Delivered</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Expert Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowRight className="w-6 h-6 text-cyan-400 rotate-90" />
      </div>
    </section>
  );
});

// Service Card Component
const ServiceCard = memo(({ service, category }: { service: any; category: string }) => (
  <div className="quantum-card p-6 h-full group hover:scale-105 transition-all duration-300">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
          <service.icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
            {service.name}
          </h3>
          <p className="text-sm text-gray-400">{service.category}</p>
        </div>
      </div>
      {service.popular && (
        <span className="px-2 py-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold rounded-full">
          Popular
        </span>
      )}
    </div>
    
    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
      {service.description}
    </p>
    
    <div className="mb-4">
      <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
      <div className="flex flex-wrap gap-1">
        {service.benefits.map((benefit: string, index: number) => (
          <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
            {benefit}
          </span>
        ))}
      </div>
    </div>
    
    <div className="space-y-2 mb-6">
      {service.features.slice(0, 3).map((feature: string, index: number) => (
        <div key={index} className="flex items-center text-sm text-gray-300">
          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
          {feature}
        </div>
      ))}
    </div>
    
    <div className="flex space-x-2">
      <a
        href={service.link}
        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all group"
      >
        <span className="flex items-center justify-center">
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </span>
      </a>
      <a
        href={service.demo}
        className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-400 hover:text-black transition-all"
      >
        Demo
      </a>
    </div>
  </div>
));

// Main Home Page Component
export default function HomePage() {
  const [activeTab, setActiveTab] = useState('micro-saas');

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US',
    },
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup'
    ],
    offers: {
      '@type': 'Offer',
      name: 'AI Enterprise Transformation Services',
      description: 'Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains',
      price: '50000',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions | Quantum Computing | Autonomous Systems</title>
        <meta
          name="description"
          content="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Achieve 300% ROI with our cutting-edge technology."
        />
        <meta
          name="keywords"
          content="AI, artificial intelligence, quantum computing, autonomous systems, digital transformation, IT services, machine learning, computer vision, NLP, robotics, edge computing"
        />
        <meta property="og:title" content="Zion Tech Group - AI & IT Solutions | Quantum Computing | Autonomous Systems" />
        <meta
          property="og:description"
          content="Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - AI & IT Solutions" />
        <meta
          name="twitter:description"
          content="Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains"
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <FuturisticHero />

        {/* Services Section */}
        <section className="py-20 cyber-scan-line">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text">
                <span className="holographic-text">Our Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI, IT, and emerging technology solutions designed to transform your business
              </p>
            </div>

            {/* Service Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { id: 'micro-saas', label: 'Micro SAAS', icon: Zap },
                { id: 'ai-services', label: 'AI Services', icon: Brain },
                { id: 'it-services', label: 'IT Services', icon: Cloud }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Service Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeTab === 'micro-saas' && microSaasServices.map((service) => (
                <ServiceCard key={service.id} service={service} category="Micro SAAS" />
              ))}
              {activeTab === 'ai-services' && aiServices.map((service) => (
                <ServiceCard key={service.id} service={service} category="AI Services" />
              ))}
              {activeTab === 'it-services' && itServices.map((service) => (
                <ServiceCard key={service.id} service={service} category="IT Services" />
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text">
              <span className="holographic-text">Ready to Transform?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Get started with a free consultation and discover how our solutions can revolutionize your business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button px-8 py-4 text-lg font-bold group"
              >
                <span className="flex items-center">
                  <Phone className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                  Call (302) 464-0950
                </span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 text-lg font-bold text-white border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 group"
              >
                <span className="flex items-center">
                  <Mail className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Email Us
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}