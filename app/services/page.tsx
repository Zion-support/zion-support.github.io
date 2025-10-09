'use client';
import React from 'react';
import { Brain, Cpu, Shield, Cloud, Zap, Code, Settings, BarChart, MessageSquare, Eye, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Star, Users, Award, Lock, Database, Globe, Target, Search, FileText, Smartphone, Phone, Mail, MapPin, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const microSAASServices = [
    {
      title: 'AI Project Manager',
      description: 'Intelligent project planning with AI-powered resource optimization and timeline prediction',
      icon: BarChart,
      price: '$99/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automate your social media with AI-powered content creation and smart scheduling',
      icon: MessageSquare,
      price: '$79/month',
      features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence'],
      benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach'],
      link: '/ai-social-media-manager',
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics',
      icon: PieChart,
      price: '$149/month',
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift'],
      link: '/ai-analytics',
      popular: true,
      category: 'Analytics'
    },
    {
      title: 'AI Email Marketing',
      description: 'Transform your email marketing with AI-powered content generation and automation',
      icon: Mail,
      price: '$99/month',
      features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns'],
      benefits: ['65% open rate increase', '40% revenue growth', '80% time saved'],
      link: '/ai-email-marketing',
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Provide 24/7 intelligent customer support with AI-powered chatbot',
      icon: Bot,
      price: '$149/month',
      features: ['Natural language processing', '24/7 availability', 'Human handoff', 'Analytics & insights'],
      benefits: ['90% response time reduction', '45% satisfaction increase', '80% queries handled automatically'],
      link: '/ai-customer-support-bot',
      popular: true,
      category: 'Customer Service'
    },
    {
      title: 'AI Code Review Assistant',
      description: 'Advanced automated code analysis with AI-powered bug detection and optimization',
      icon: Code,
      price: '$89/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Git integration'],
      benefits: ['70% fewer bugs', '15+ hours saved/week', 'Improved code quality'],
      link: '/ai-code-generation',
      popular: false,
      category: 'Development'
    },
    {
      title: 'AI Video Generator',
      description: 'Create professional videos with AI-powered editing and content generation',
      icon: Video,
      price: '$199/month',
      features: ['AI video editing', 'Auto-generated content', 'Voice synthesis', 'Multi-language support'],
      benefits: ['90% time reduction', 'Professional quality', 'Unlimited exports'],
      link: '/ai-video-generation',
      popular: true,
      category: 'Content Creation'
    },
    {
      title: 'AI Voice Cloning',
      description: 'Create realistic voice clones for content creation and accessibility',
      icon: Mic,
      price: '$129/month',
      features: ['High-quality voice cloning', 'Multiple voice options', 'Real-time synthesis', 'API integration'],
      benefits: ['99% voice accuracy', 'Multiple languages', 'Real-time processing'],
      link: '/ai-voice-cloning',
      popular: false,
      category: 'Content Creation'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management',
      icon: Zap,
      price: '$179/month',
      features: ['Process automation', 'Smart routing', 'Exception handling', 'Analytics dashboard'],
      benefits: ['80% process automation', '60% cost reduction', 'Real-time monitoring'],
      link: '/ai-workflow-automation',
      popular: true,
      category: 'Automation'
    },
    {
      title: 'AI Fashion Design',
      description: 'Create stunning fashion designs with AI-powered design tools',
      icon: Palette,
      price: '$159/month',
      features: ['AI design generation', 'Trend analysis', 'Color matching', 'Pattern creation'],
      benefits: ['50% design time reduction', 'Trend-aware designs', 'Unlimited creativity'],
      link: '/ai-fashion-design',
      popular: false,
      category: 'Design'
    },
    {
      title: 'AI Music Composition',
      description: 'Compose original music with AI-powered composition tools',
      icon: Music,
      price: '$119/month',
      features: ['AI composition', 'Multiple genres', 'Instrument simulation', 'Royalty-free music'],
      benefits: ['Unlimited compositions', 'Professional quality', 'No copyright issues'],
      link: '/ai-music-composition',
      popular: false,
      category: 'Creative'
    },
    {
      title: 'AI Fitness Coach',
      description: 'Personalized fitness coaching with AI-powered workout plans',
      icon: Heart,
      price: '$89/month',
      features: ['Personalized workouts', 'Progress tracking', 'Nutrition advice', 'Goal setting'],
      benefits: ['Better results', 'Motivation boost', 'Flexible scheduling'],
      link: '/ai-fitness-coach',
      popular: false,
      category: 'Health & Fitness'
    }
  ];

  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics and decision-making',
      icon: Brain,
      price: '$1,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring'],
      color: 'text-purple-400',
      category: 'AI Development'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis and language understanding',
      icon: MessageSquare,
      price: '$1,200/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      color: 'text-blue-400',
      category: 'AI Development'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection and recognition',
      icon: Eye,
      price: '$1,800/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'],
      color: 'text-green-400',
      category: 'AI Development'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities',
      icon: Zap,
      price: '$1,400/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'],
      color: 'text-cyan-400',
      category: 'Automation'
    },
    {
      title: 'AI Data Visualization',
      description: 'Transform complex data into interactive visualizations',
      icon: BarChart,
      price: '$1,100/month',
      features: ['Interactive Dashboards', 'Real-time Visualization', 'Custom Charts', 'Data Storytelling'],
      color: 'text-orange-400',
      category: 'Data Science'
    },
    {
      title: 'AI 3D Generation',
      description: 'Create 3D models and environments with AI technology',
      icon: Cube,
      price: '$1,600/month',
      features: ['3D Model Generation', 'Texture Creation', 'Animation', 'VR/AR Support'],
      color: 'text-pink-400',
      category: '3D & Graphics'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Migration',
      description: 'Seamless cloud migration with zero downtime and data integrity',
      icon: Cloud,
      price: '$1,299/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration'],
      color: 'text-blue-400',
      category: 'Cloud Computing'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions with threat detection and prevention',
      icon: Shield,
      price: '$1,599/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
      color: 'text-red-400',
      category: 'Security'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing and deployment',
      icon: Settings,
      price: '$1,199/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup'],
      color: 'text-green-400',
      category: 'Development'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning',
      icon: Database,
      price: '$899/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'],
      color: 'text-purple-400',
      category: 'Data Management'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting for digital transformation and optimization',
      icon: Briefcase,
      price: '$1,000/month',
      features: ['Strategic Planning', 'Technology Assessment', 'Digital Transformation', 'Process Optimization'],
      color: 'text-yellow-400',
      category: 'Consulting'
    },
    {
      title: 'Network Infrastructure',
      description: 'Design and implement robust network infrastructure solutions',
      icon: Globe,
      price: '$1,400/month',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', '24/7 Monitoring'],
      color: 'text-indigo-400',
      category: 'Infrastructure'
    }
  ];

  const categories = ['All', 'Productivity', 'Marketing', 'Analytics', 'Customer Service', 'Development', 'Content Creation', 'Automation', 'Design', 'Creative', 'Health & Fitness'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-rain floating-particles">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Our Services">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Comprehensive AI and IT solutions designed to transform your business operations and drive unprecedented growth.
          </p>
        </section>

        {/* Micro SAAS Services */}
        <section className="mb-16" aria-labelledby="micro-saas-heading">
          <h2 id="micro-saas-heading" className="text-4xl font-bold text-white mb-8 text-center neon-text">
            Micro SAAS Solutions
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Powerful, affordable AI-powered tools designed for modern businesses
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 mb-12">
            {microSAASServices.map((service, index) => (
              <article key={index} className={`quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <service.icon className="w-8 h-8 text-cyan-400" />
                  <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">{service.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400 mb-2 neon-text">{service.price}</div>
                  <a 
                    href={service.link} 
                    className="cyber-button px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* AI Services */}
        <section className="mb-16" aria-labelledby="ai-services-heading">
          <h2 id="ai-services-heading" className="text-4xl font-bold text-white mb-8 text-center neon-text">
            AI Services
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Advanced artificial intelligence solutions for enterprise applications
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {aiServices.map((service, index) => (
              <a
                key={index}
                href={`/ai-solutions#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <service.icon className={`w-12 h-12 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">{service.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-lg font-bold text-cyan-400 neon-text">{service.price}</div>
              </a>
            ))}
          </div>
        </section>

        {/* IT Services */}
        <section className="mb-16" aria-labelledby="it-services-heading">
          <h2 id="it-services-heading" className="text-4xl font-bold text-white mb-8 text-center neon-text">
            IT Services
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive IT solutions for modern enterprises
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {itServices.map((service, index) => (
              <a
                key={index}
                href={`/it-services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <service.icon className={`w-12 h-12 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">{service.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-lg font-bold text-cyan-400 neon-text">{service.price}</div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="quantum-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today to discuss how our AI and IT solutions can revolutionize your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button-enhanced px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
