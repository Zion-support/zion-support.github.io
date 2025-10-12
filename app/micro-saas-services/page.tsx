import React from 'react';
import { CheckCircle, ArrowRight, Zap, Clock, DollarSign, Star, Users, Shield, Brain, Globe, Settings, Mail, Calendar, FileText, BarChart3, CreditCard, Smartphone, Camera, Database, Lock, Send, TrendingUp, Target, Award } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FuturisticBackground from '../components/FuturisticBackground';
import ParticleBackground from '../components/ParticleBackground';
import ServiceCard from '../components/ServiceCard';
import AnimatedCard from '../components/AnimatedCard';

const MicroSAASServicesPage: React.FC = () => {
  const microSAAS = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Content Studio Pro',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI technology with brand voice customization.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice training', 'Content templates', 'Plagiarism detection', 'Social media scheduling'],
      pricing: '$49/month',
      originalPrice: '$79/month',
      link: '/ai-content-generator',
      popular: true,
      category: 'Content Creation'
    },
    {
      icon: <Calendar className="w-8 h-8 text-green-400" />,
      title: 'Smart Calendar Assistant',
      description: 'AI-powered calendar management that optimizes your schedule, suggests meeting times, and handles booking conflicts automatically.',
      features: ['Smart scheduling', 'Meeting optimization', 'Time zone handling', 'Integration with 50+ apps', 'Conflict resolution', 'Analytics dashboard'],
      pricing: '$29/month',
      originalPrice: '$49/month',
      link: '/smart-calendar',
      popular: true,
      category: 'Productivity'
    },
    {
      icon: <CreditCard className="w-8 h-8 text-purple-400" />,
      title: 'Expense Tracker AI',
      description: 'Automatically track and categorize expenses with AI-powered receipt scanning and intelligent budget management.',
      features: ['Receipt scanning', 'Smart categorization', 'Budget alerts', 'Tax preparation', 'Multi-currency support', 'Expense reports'],
      pricing: '$19/month',
      originalPrice: '$35/month',
      link: '/expense-tracker',
      popular: false,
      category: 'Finance'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Secure Password Vault',
      description: 'Enterprise-grade password management with zero-knowledge encryption, breach monitoring, and secure sharing capabilities.',
      features: ['Zero-knowledge encryption', 'Password generator', 'Breach monitoring', 'Secure sharing', '2FA integration', 'Dark web scanning'],
      pricing: '$15/month',
      originalPrice: '$25/month',
      link: '/password-manager',
      popular: true,
      category: 'Security'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
      title: 'Business Intelligence Hub',
      description: 'Transform your data into actionable insights with AI-powered analytics, custom dashboards, and predictive forecasting.',
      features: ['Real-time analytics', 'Custom dashboards', 'Predictive insights', 'Data visualization', 'Automated reports', 'API integrations'],
      pricing: '$79/month',
      originalPrice: '$129/month',
      link: '/analytics-dashboard',
      popular: true,
      category: 'Analytics'
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-400" />,
      title: 'Team Collaboration Suite',
      description: 'All-in-one team productivity platform with real-time communication, project management, and workflow automation.',
      features: ['Real-time chat', 'File sharing', 'Project tracking', 'Video conferencing', 'Workflow automation', 'Team analytics'],
      pricing: '$39/month',
      originalPrice: '$59/month',
      link: '/team-collaboration',
      popular: false,
      category: 'Collaboration'
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-400" />,
      title: 'Email Marketing Pro',
      description: 'AI-powered email marketing platform with advanced segmentation, automation, and performance optimization.',
      features: ['AI segmentation', 'Email automation', 'A/B testing', 'Performance analytics', 'Template library', 'Deliverability optimization'],
      pricing: '$59/month',
      originalPrice: '$99/month',
      link: '/email-marketing',
      popular: true,
      category: 'Marketing'
    },
    {
      icon: <Camera className="w-8 h-8 text-pink-400" />,
      title: 'AI Photo Editor',
      description: 'Professional photo editing with AI-powered tools for background removal, enhancement, and batch processing.',
      features: ['AI background removal', 'Auto enhancement', 'Batch processing', 'Filters & effects', 'Cloud storage', 'API access'],
      pricing: '$25/month',
      originalPrice: '$45/month',
      link: '/photo-editor',
      popular: false,
      category: 'Design'
    },
    {
      icon: <Database className="w-8 h-8 text-emerald-400" />,
      title: 'Data Backup Cloud',
      description: 'Automated cloud backup solution with encryption, version control, and disaster recovery for all your important files.',
      features: ['Automated backups', 'End-to-end encryption', 'Version control', 'Disaster recovery', 'Cross-platform sync', 'Bandwidth optimization'],
      pricing: '$35/month',
      originalPrice: '$55/month',
      link: '/data-backup',
      popular: false,
      category: 'Storage'
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      title: 'Sales CRM Pro',
      description: 'Customer relationship management with AI-powered lead scoring, sales forecasting, and automated follow-ups.',
      features: ['Lead scoring', 'Sales forecasting', 'Automated follow-ups', 'Pipeline management', 'Email tracking', 'Performance analytics'],
      pricing: '$69/month',
      originalPrice: '$109/month',
      link: '/sales-crm',
      popular: true,
      category: 'Sales'
    },
    {
      icon: <Lock className="w-8 h-8 text-red-400" />,
      title: 'Website Security Scanner',
      description: 'Continuous website security monitoring with vulnerability detection, malware scanning, and automated threat response.',
      features: ['Vulnerability scanning', 'Malware detection', 'SSL monitoring', 'Uptime monitoring', 'Threat alerts', 'Security reports'],
      pricing: '$45/month',
      originalPrice: '$75/month',
      link: '/security-scanner',
      popular: false,
      category: 'Security'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: 'SEO Optimizer Pro',
      description: 'AI-powered SEO tool that analyzes your website, suggests improvements, and tracks rankings across search engines.',
      features: ['Keyword research', 'Site audit', 'Rank tracking', 'Content optimization', 'Backlink analysis', 'Competitor monitoring'],
      pricing: '$55/month',
      originalPrice: '$89/month',
      link: '/seo-optimizer',
      popular: true,
      category: 'SEO'
    }
  ];

  const benefits = [
    {
      title: 'Cost Effective',
      description: 'Affordable solutions that deliver maximum value for your investment',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing tools and workflows',
      icon: <Settings className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Scalable Solutions',
      description: 'Grow your business with solutions that scale with your needs',
      icon: <Zap className="w-6 h-6 text-purple-500" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your success',
      icon: <Shield className="w-6 h-6 text-red-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'StartupCo',
      content: 'The AI Content Generator saved us hours every week. Highly recommended!',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'TechFlow',
      content: 'Excellent value for money. The expense tracker is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      company: 'DataDriven Inc.',
      content: 'The analytics dashboard provided insights we never knew existed.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our collection of powerful micro SaaS applications designed to streamline your business operations and boost productivity." />
        <meta name="keywords" content="micro SaaS, SaaS applications, business tools, productivity software, AI tools" />
      </Helmet>
      
      {/* Futuristic Backgrounds */}
      <FuturisticBackground />
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase">
              Micro SaaS Solutions
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Micro SaaS Services
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Powerful, focused applications designed to solve specific business challenges. 
            Get the tools you need without the complexity of enterprise software. 
            <span className="text-cyan-400 font-semibold">12 premium micro SaaS solutions</span> to boost your productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/contact" 
              className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-sm"></div>
            </Link>
            <Link
              to="/ai-services"
              className="group border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              View AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro SaaS Applications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Focused solutions for specific business needs with enterprise-grade features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {microSAAS.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                pricing={service.pricing}
                originalPrice={service.originalPrice}
                link={service.link}
                popular={service.popular}
                category={service.category}
                delay={index * 0.1}
                neon={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Micro SaaS</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Focused solutions that deliver maximum value for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="text-center p-6 hover:bg-white/5">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6 shadow-lg shadow-cyan-500/25">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Users Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Real feedback from real users who trust our micro SaaS solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="p-6 hover:bg-white/10">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.company}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Boost Your <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Productivity</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Start using our micro SaaS applications today and experience the difference. 
            Join thousands of businesses already using our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/contact" 
              className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
            >
              <span className="relative z-10 flex items-center text-lg">
                Start Free Trial
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-sm"></div>
            </Link>
            <Link 
              to="/it-services" 
              className="group border-2 border-cyan-400 text-cyan-400 px-10 py-5 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 text-lg"
            >
              Explore IT Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASServicesPage;