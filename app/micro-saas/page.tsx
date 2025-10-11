'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Zap, Shield, Clock, Users, Target, BarChart, MessageSquare, Eye, Brain, Cpu, Settings, FileText, Bot, Music, Video, CreditCard, ShoppingCart, Smartphone, Globe, Database, Cloud, Code, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Compass, Navigation as NavIcon, PieChart, TrendingUp, TrendingDown, Activity, Atom, Rocket, Microscope, Layers, Server, Network, HardDrive, Wifi, Monitor, Keyboard, Mouse, Headphones, Printer, Scanner, Router, Switch, Firewall, Antivirus, Backup, Recovery, Migration, Integration, Consulting, Support, Maintenance, Upgrade, Security as SecurityIcon, Compliance, Audit, Training, Documentation, Testing, Quality, Performance, Scalability, Reliability, Availability, Monitoring, Alerting, Logging, Analytics, Reporting, Dashboard } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasServices = [
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization and timeline prediction',
      icon: '📊',
      price: '$199/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Budget optimization'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
      link: '/ai-project-manager',
      popular: true,
      category: 'Productivity',
      marketPrice: '$299',
      savings: '33%'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automate your social media with AI-powered content creation and smart scheduling',
      icon: '📱',
      price: '$149/month',
      features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence', 'Hashtag optimization', 'Competitor analysis'],
      benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach', '50% better ROI'],
      link: '/ai-social-media-manager',
      popular: true,
      category: 'Marketing',
      marketPrice: '$249',
      savings: '40%'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics',
      icon: '📈',
      price: '$299/month',
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking', 'Predictive modeling', 'Custom reports'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift', '25% faster decisions'],
      link: '/ai-analytics-dashboard',
      popular: true,
      category: 'Analytics',
      marketPrice: '$499',
      savings: '40%'
    },
    {
      title: 'AI Email Marketing Suite',
      description: 'Transform your email marketing with AI-powered content generation and automation',
      icon: '📧',
      price: '$199/month',
      features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns', 'A/B testing', 'Deliverability optimization'],
      benefits: ['65% open rate increase', '40% revenue growth', '80% time saved', '35% higher click rates'],
      link: '/ai-email-marketing',
      popular: true,
      category: 'Marketing',
      marketPrice: '$349',
      savings: '43%'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Provide 24/7 intelligent customer support with AI-powered chatbot',
      icon: '🤖',
      price: '$249/month',
      features: ['Natural language processing', '24/7 availability', 'Human handoff', 'Analytics & insights', 'Multi-language support', 'Integration APIs'],
      benefits: ['90% response time reduction', '45% satisfaction increase', '80% queries handled automatically', '60% cost savings'],
      link: '/ai-customer-support-bot',
      popular: true,
      category: 'Support',
      marketPrice: '$399',
      savings: '38%'
    },
    {
      title: 'AI Code Review Assistant',
      description: 'Advanced automated code analysis with AI-powered bug detection and optimization',
      icon: '🔍',
      price: '$179/month',
      features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Git integration', 'Code quality metrics', 'Team collaboration'],
      benefits: ['70% fewer bugs', '15+ hours saved/week', 'Improved code quality', 'Faster deployment'],
      link: '/ai-code-generation',
      popular: false,
      category: 'Development',
      marketPrice: '$299',
      savings: '40%'
    },
    {
      title: 'AI Content Generator',
      description: 'Create high-quality content for blogs, social media, and marketing with AI',
      icon: '✍️',
      price: '$129/month',
      features: ['Blog writing', 'Social media posts', 'Email templates', 'Ad copy generation', 'SEO optimization', 'Brand voice consistency'],
      benefits: ['10x content output', '50% time savings', '40% better engagement', 'SEO-optimized content'],
      link: '/ai-content-generation',
      popular: true,
      category: 'Content',
      marketPrice: '$199',
      savings: '35%'
    },
    {
      title: 'AI Lead Generation System',
      description: 'Automated lead generation and qualification with AI-powered targeting',
      icon: '🎯',
      price: '$349/month',
      features: ['Lead scoring', 'Contact discovery', 'Email outreach', 'CRM integration', 'Behavioral tracking', 'Conversion optimization'],
      benefits: ['300% more qualified leads', '60% conversion rate', '80% time savings', 'ROI tracking'],
      link: '/ai-lead-generation',
      popular: true,
      category: 'Sales',
      marketPrice: '$599',
      savings: '42%'
    },
    {
      title: 'AI Video Generator',
      description: 'Create professional videos with AI-powered editing and generation',
      icon: '🎬',
      price: '$399/month',
      features: ['AI video creation', 'Auto-editing', 'Voice synthesis', 'Text-to-video', 'Brand templates', 'Multi-format export'],
      benefits: ['90% time savings', 'Professional quality', 'Unlimited videos', 'No editing skills needed'],
      link: '/ai-video-generation',
      popular: true,
      category: 'Media',
      marketPrice: '$699',
      savings: '43%'
    },
    {
      title: 'AI Voice Cloning Studio',
      description: 'Create realistic voice clones for content creation and personalization',
      icon: '🎤',
      price: '$299/month',
      features: ['Voice cloning', 'Text-to-speech', 'Emotion control', 'Multi-language', 'API access', 'Custom voices'],
      benefits: ['99% voice accuracy', 'Multiple languages', 'Emotional range', 'API integration'],
      link: '/ai-voice-cloning',
      popular: false,
      category: 'Media',
      marketPrice: '$499',
      savings: '40%'
    },
    {
      title: 'AI Fashion Design Assistant',
      description: 'Design clothing and accessories with AI-powered fashion intelligence',
      icon: '👗',
      price: '$199/month',
      features: ['Fashion design', 'Trend analysis', 'Color matching', 'Size optimization', '3D modeling', 'Pattern generation'],
      benefits: ['10x faster design', 'Trend prediction', 'Perfect fit', 'Cost reduction'],
      link: '/ai-fashion-design',
      popular: false,
      category: 'Design',
      marketPrice: '$349',
      savings: '43%'
    },
    {
      title: 'AI Music Composer',
      description: 'Create original music and soundtracks with AI composition tools',
      icon: '🎵',
      price: '$149/month',
      features: ['Music composition', 'Genre selection', 'Instrument arrangement', 'Mixing & mastering', 'Royalty-free', 'Custom styles'],
      benefits: ['Unlimited tracks', 'Professional quality', 'No copyright issues', 'Custom branding'],
      link: '/ai-music-composition',
      popular: false,
      category: 'Media',
      marketPrice: '$249',
      savings: '40%'
    },
    {
      title: 'AI Fitness Coach',
      description: 'Personalized fitness training with AI-powered workout optimization',
      icon: '💪',
      price: '$99/month',
      features: ['Personalized workouts', 'Form analysis', 'Progress tracking', 'Nutrition guidance', 'Goal setting', 'Community support'],
      benefits: ['Better results', 'Motivation boost', 'Injury prevention', 'Flexible scheduling'],
      link: '/ai-fitness-coach',
      popular: true,
      category: 'Health',
      marketPrice: '$199',
      savings: '50%'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management',
      icon: '⚙️',
      price: '$249/month',
      features: ['Process automation', 'Smart routing', 'Exception handling', 'Integration APIs', 'Custom triggers', 'Analytics'],
      benefits: ['80% time savings', 'Error reduction', 'Scalable processes', 'Cost efficiency'],
      link: '/ai-workflow-automation',
      popular: true,
      category: 'Automation',
      marketPrice: '$399',
      savings: '38%'
    },
    {
      title: 'AI Data Visualization',
      description: 'Transform complex data into stunning visual insights with AI',
      icon: '📊',
      price: '$179/month',
      features: ['Auto-chart generation', 'Interactive dashboards', 'Real-time updates', 'Custom themes', 'Export options', 'Collaboration'],
      benefits: ['Instant insights', 'Better decisions', 'Time savings', 'Professional presentations'],
      link: '/ai-data-visualization',
      popular: false,
      category: 'Analytics',
      marketPrice: '$299',
      savings: '40%'
    },
    {
      title: 'AI Sales Automation',
      description: 'Boost sales performance with AI-powered automation and insights',
      icon: '💰',
      price: '$299/month',
      features: ['Lead qualification', 'Follow-up automation', 'Pipeline management', 'Performance analytics', 'CRM integration', 'Predictive selling'],
      benefits: ['50% more sales', 'Better lead quality', 'Automated follow-ups', 'Revenue growth'],
      link: '/ai-sales-automation',
      popular: true,
      category: 'Sales',
      marketPrice: '$499',
      savings: '40%'
    }
  ];

  const categories = ['All', 'Productivity', 'Marketing', 'Analytics', 'Support', 'Development', 'Content', 'Sales', 'Media', 'Design', 'Health', 'Automation'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our powerful micro SAAS solutions designed for modern businesses. AI-powered tools starting from $99/month with 40% savings." />
        <meta name="keywords" content="micro SAAS, AI tools, business automation, productivity software, affordable solutions" />
      </Helmet>

      <Navigation />

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful, affordable AI-powered tools designed for modern businesses. 
            Start with our micro SAAS solutions and scale as you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center justify-center border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              All our micro SAAS solutions come with 30-day free trials and 24/7 support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      🔥 POPULAR
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-sm text-gray-400">/month</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <span className="text-gray-400 line-through">{service.marketPrice}</span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                      Save {service.savings}
                    </span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300">
                        ✓ {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <a 
                    href={service.link}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our micro SAAS solutions today and see the difference AI can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center justify-center border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MicroSaasPage;