'use client';
import React, { useState, useMemo } from 'react';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Brain, Cloud, Shield, Code, BarChart, Users, Award, Target, Star, ArrowRight, Sparkles, Cpu, Database, Smartphone, Lock, Zap, Globe, Calendar, FileText, Settings, CheckSquare, MessageSquare, Building, Clock, Send, DollarSign, Rocket, Shield as ShieldIcon, Users as UsersIcon, TrendingUp as TrendingUpIcon, Star as StarIcon, Award as AwardIcon, Target as TargetIcon, Brain as BrainIcon, Cloud as CloudIcon, Code as CodeIcon, BarChart as BarChartIcon, Users as UsersIcon2, Zap as ZapIcon, Globe as GlobeIcon, Database as DatabaseIcon, Smartphone as SmartphoneIcon, Lock as LockIcon, Settings as SettingsIcon, CheckSquare as CheckSquareIcon, MessageSquare as MessageSquareIcon, Building as BuildingIcon, Clock as ClockIcon, Send as SendIcon, DollarSign as DollarSignIcon, Rocket as RocketIcon } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function MicroSaasPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchTerm, setSearchTerm] = useState('');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };
  const [activeTab, setActiveTab] = useState('overview');

  const microSaasServices = [
    {
      category: 'AI-Powered Business Tools',
      services: [
        {
          id: 1,
          name: 'AI Project Manager Pro',
          description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment. Trusted by 10,000+ teams worldwide.',
          icon: BarChart,
          price: 99,
          originalPrice: 149,
          features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization', 'Gantt charts', 'Time tracking'],
          benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
          link: '/ai-project-manager',
          popular: true,
          category: 'Productivity',
          rating: 4.9,
          users: '10,000+',
          freeTrial: '14 days'
        },
        {
          id: 2,
          name: 'AI Smart Calendar Pro',
          description: 'Revolutionary calendar that learns your patterns and automatically optimizes your schedule for maximum productivity and work-life balance.',
          icon: Calendar,
          price: 59,
          originalPrice: 89,
          features: ['Smart scheduling', 'Pattern learning', 'Conflict resolution', 'Time blocking', 'Meeting optimization', 'Work-life balance', 'Integration support', 'Mobile sync'],
          benefits: ['50% time saved', '90% fewer conflicts', 'Perfect work-life balance', '25% more productive'],
          link: '/ai-smart-calendar',
          popular: true,
          category: 'Productivity',
          rating: 4.8,
          users: '5,000+',
          freeTrial: '7 days'
        },
        {
          id: 3,
          name: 'AI Voice Cloning Studio Pro',
          description: 'Professional voice cloning and synthesis platform for content creators, marketers, and businesses. Create natural-sounding voiceovers in minutes.',
          icon: Mic,
          price: 149,
          originalPrice: 199,
          features: ['Voice cloning', 'Text-to-speech', 'Emotion control', 'Multiple languages', 'Real-time processing', 'API integration', 'Custom voices', 'Batch processing'],
          benefits: ['95% voice accuracy', '80% cost reduction', '10x faster production', 'Unlimited usage'],
          link: '/ai-voice-cloning-studio',
          popular: false,
          category: 'Creative',
          rating: 4.7,
          users: '2,500+',
          freeTrial: '3 days'
        }
      ]
    },
    {
      category: 'Marketing & Sales Automation',
      services: [
        {
          id: 4,
          name: 'AI Email Marketing Pro',
          description: 'Intelligent email marketing platform that uses AI to optimize subject lines, content, and send times for maximum engagement and conversions.',
          icon: Mail,
          price: 79,
          originalPrice: 119,
          features: ['AI content generation', 'Send time optimization', 'A/B testing', 'Segmentation', 'Analytics dashboard', 'Template library', 'Automation workflows', 'Deliverability tools'],
          benefits: ['300% higher open rates', '250% more clicks', '180% increase in conversions', '60% time saved'],
          link: '/ai-email-marketing',
          popular: true,
          category: 'Marketing',
          rating: 4.9,
          users: '8,000+',
          freeTrial: '14 days'
        },
        {
          id: 5,
          name: 'AI Social Media Manager',
          description: 'Automated social media management with AI-powered content creation, posting optimization, and engagement tracking across all platforms.',
          icon: MessageSquare,
          price: 89,
          originalPrice: 129,
          features: ['Content generation', 'Multi-platform posting', 'Engagement tracking', 'Hashtag optimization', 'Analytics reports', 'Scheduling', 'Brand voice training', 'Trend analysis'],
          benefits: ['400% more engagement', '70% time saved', '200% follower growth', '85% better reach'],
          link: '/ai-social-media-manager',
          popular: true,
          category: 'Marketing',
          rating: 4.8,
          users: '6,500+',
          freeTrial: '10 days'
        }
      ]
    },
    {
      category: 'Customer Support & Service',
      services: [
        {
          id: 6,
          name: 'AI Customer Support Pro',
          description: 'Intelligent customer support system with AI chatbots, ticket routing, and automated responses that provide 24/7 assistance.',
          icon: MessageSquare,
          price: 129,
          originalPrice: 179,
          features: ['AI chatbots', 'Ticket routing', 'Knowledge base', 'Multi-language support', 'Sentiment analysis', 'Escalation management', 'Performance analytics', 'Integration APIs'],
          benefits: ['90% faster response', '80% cost reduction', '95% customer satisfaction', '24/7 availability'],
          link: '/ai-customer-support',
          popular: true,
          category: 'Support',
          rating: 4.9,
          users: '12,000+',
          freeTrial: '21 days'
        },
        {
          id: 7,
          name: 'AI Help Desk Assistant',
          description: 'Smart help desk solution that automatically categorizes tickets, suggests solutions, and provides instant answers to common questions.',
          icon: Settings,
          price: 99,
          originalPrice: 139,
          features: ['Auto-categorization', 'Solution suggestions', 'Knowledge base search', 'Ticket prioritization', 'SLA management', 'Reporting dashboard', 'Mobile app', 'Team collaboration'],
          benefits: ['75% faster resolution', '60% fewer escalations', '85% accuracy', '50% time saved'],
          link: '/ai-help-desk',
          popular: false,
          category: 'Support',
          rating: 4.7,
          users: '4,000+',
          freeTrial: '14 days'
        }
      ]
    },
    {
      category: 'Data & Analytics',
      services: [
        {
          id: 8,
          name: 'AI Business Intelligence Pro',
          description: 'Advanced BI platform with AI-powered insights, predictive analytics, and automated reporting for data-driven decision making.',
          icon: BarChart,
          price: 199,
          originalPrice: 299,
          features: ['Predictive analytics', 'Automated insights', 'Custom dashboards', 'Data visualization', 'Report automation', 'Trend analysis', 'Alert system', 'API integration'],
          benefits: ['300% faster insights', '90% accuracy', '200% better decisions', '80% time saved'],
          link: '/ai-business-intelligence',
          popular: true,
          category: 'Analytics',
          rating: 4.9,
          users: '3,500+',
          freeTrial: '30 days'
        },
        {
          id: 9,
          name: 'AI Data Visualization Studio',
          description: 'Create stunning, interactive data visualizations with AI assistance. Transform complex data into compelling stories and insights.',
          icon: BarChart,
          price: 149,
          originalPrice: 199,
          features: ['AI chart suggestions', 'Interactive dashboards', 'Custom templates', 'Real-time updates', 'Export options', 'Collaboration tools', 'Mobile responsive', 'Brand customization'],
          benefits: ['90% faster creation', '200% more engaging', '85% better insights', '60% time saved'],
          link: '/ai-data-visualization',
          popular: false,
          category: 'Analytics',
          rating: 4.6,
          users: '2,000+',
          freeTrial: '14 days'
        }
      ]
    },
    {
      category: 'Security & Compliance',
      services: [
        {
          id: 10,
          name: 'AI Security Monitor Pro',
          description: 'Advanced security monitoring with AI-powered threat detection, automated incident response, and compliance reporting.',
          icon: Shield,
          price: 299,
          originalPrice: 399,
          features: ['Threat detection', 'Incident response', 'Compliance reporting', 'Real-time monitoring', 'Risk assessment', 'Automated alerts', 'Forensic analysis', 'Integration support'],
          benefits: ['95% threat detection', '80% faster response', '100% compliance', '70% cost reduction'],
          link: '/ai-security-monitor',
          popular: true,
          category: 'Security',
          rating: 4.9,
          users: '1,500+',
          freeTrial: '30 days'
        }
      ]
    }
  ];

  const categories = ['all', ...new Set(microSaasServices.flatMap(cat => cat.services.map(s => s.category)))];

  const filteredServices = useMemo(() => {
    return microSaasServices.flatMap(category => 
      category.services.filter(service => {
        const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
        const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
        const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            service.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesPrice && matchesSearch;
      })
    );
  }, [selectedCategory, priceRange, searchTerm]);

  const benefits = [
    {
      icon: TrendingUp,
      stat: '300%',
      title: 'Average ROI Increase',
      description: 'Our clients see significant returns on investment within the first quarter'
    },
    {
      icon: Users,
      stat: '50K+',
      title: 'Active Users',
      description: 'Trusted by businesses worldwide for their critical operations'
    },
    {
      icon: Award,
      stat: '99.9%',
      title: 'Uptime Guarantee',
      description: 'Enterprise-grade reliability with comprehensive SLA coverage'
    },
    {
      icon: Target,
      title: '24/7 Support',
      description: 'Round-the-clock assistance from our expert technical team'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'AI Project Manager Pro transformed our team productivity. We now complete projects 40% faster with better quality.',
      rating: 5,
      avatar: '/images/testimonials/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCorp',
      content: 'The AI Email Marketing Pro increased our open rates by 300%. It\'s like having a marketing genius on our team.',
      rating: 5,
      avatar: '/images/testimonials/michael.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Manager',
      content: 'AI Analytics Dashboard gave us insights we never had before. Our decision-making is now data-driven.',
      rating: 5,
      avatar: '/images/testimonials/emily.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              AI-Powered Business Tools for Modern Enterprises
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Streamline your business operations with our intelligent micro SAAS applications. 
              From project management to customer support, we have the tools you need to succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#services"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore Solutions
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI-powered solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📧 Email: kleber@ziontechgroup.com</p>
              <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}