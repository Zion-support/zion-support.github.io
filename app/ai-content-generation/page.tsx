'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Star, Users, Clock, Target, BarChart, Zap, Shield, Globe, Brain, Cpu, Database, Cloud, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Award, TrendingUp, Lock, Code, BarChart3, PieChart as PieChartIcon, LineChart, Activity as ActivityIcon, Target as TargetIcon, Users as UsersIcon, Clock as ClockIcon, Calendar as CalendarIcon, FileText as FileTextIcon, Settings as SettingsIcon, Search as SearchIcon, Bot as BotIcon, Palette as PaletteIcon, Camera as CameraIcon, Music as MusicIcon, Video as VideoIcon, Gamepad2 as Gamepad2Icon, ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon, Building as BuildingIcon, Factory as FactoryIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon, Home as HomeIcon, Heart as HeartIcon, Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon, Briefcase as BriefcaseIcon, Wrench as WrenchIcon, Hammer as HammerIcon, Paintbrush as PaintbrushIcon, Scissors as ScissorsIcon, BookOpen as BookOpenIcon, Calculator as CalculatorIcon, Calendar as CalendarIcon, Clock3 as Clock3Icon, Compass as CompassIcon, Navigation as NavigationIcon, PieChart as PieChartIcon, TrendingDown as TrendingDownIcon, Activity as ActivityIcon, Zap as LightningIcon, Target as CrosshairIcon, Shield as SecurityIcon, Users as PeopleIcon, Star as StarIcon, CheckCircle as CheckIcon, ArrowRight as ArrowIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as LocationIcon, PenTool, Type, AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline, Strikethrough, Link, Image as ImageIcon, Video as VideoIcon2, FileText as FileTextIcon2, BookOpen as BookOpenIcon2, Newspaper, FileImage, FileVideo, FileAudio, FilePdf, FileWord, FileExcel, FilePowerpoint, FileArchive, FileCode, FileSpreadsheet, FileText as FileTextIcon3, File as FileIcon, Folder, FolderOpen, Save, Download, Upload, Share, Copy, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, Lightbulb, Bookmark, Flag, Tag, User, UserPlus, UserMinus, UserCheck, UserX, Users as UsersIcon2, UserCircle, UserCheck2, UserPlus2, UserMinus2, UserX2, Users2, UserCircle2, UserCheck3, UserPlus3, UserMinus3, UserX3, Users3, UserCircle3, UserCheck4, UserPlus4, UserMinus4, UserX4, Users4, UserCircle4, UserCheck5, UserPlus5, UserMinus5, UserX5, Users5, UserCircle5, UserCheck6, UserPlus6, UserMinus6, UserX6, Users6, UserCircle6, UserCheck7, UserPlus7, UserMinus7, UserX7, Users7, UserCircle7, UserCheck8, UserPlus8, UserMinus8, UserX8, Users8, UserCircle8, UserCheck9, UserPlus9, UserMinus9, UserX9, Users9, UserCircle9, UserCheck10, UserPlus10, UserMinus10, UserX10, Users10, UserCircle10 } from 'lucide-react';

const AIContentGenerationPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Writing Assistant',
      description: 'Generate high-quality content using advanced natural language processing',
      benefits: ['Blog posts', 'Articles', 'Product descriptions', 'Social media content']
    },
    {
      icon: PenTool,
      title: 'Content Templates',
      description: 'Pre-built templates for various content types and industries',
      benefits: ['Email campaigns', 'Landing pages', 'Press releases', 'Case studies']
    },
    {
      icon: Target,
      title: 'SEO Optimization',
      description: 'AI-powered SEO optimization for better search engine rankings',
      benefits: ['Keyword research', 'Meta descriptions', 'Title optimization', 'Content structure']
    },
    {
      icon: BarChart3,
      title: 'Content Analytics',
      description: 'Track content performance with AI-powered insights and recommendations',
      benefits: ['Engagement metrics', 'Performance tracking', 'A/B testing', 'ROI analysis']
    },
    {
      icon: Zap,
      title: 'Multi-format Support',
      description: 'Generate content in multiple formats and languages',
      benefits: ['Text content', 'Video scripts', 'Audio transcripts', 'Multilingual support']
    },
    {
      icon: Shield,
      title: 'Plagiarism Detection',
      description: 'Ensure content originality with AI-powered plagiarism detection',
      benefits: ['Originality checking', 'Citation management', 'Copyright compliance', 'Quality assurance']
    }
  ];

  const contentTypes = [
    { name: 'Blog Posts', icon: '📝', description: 'Engaging blog content', output: '1000+ words' },
    { name: 'Social Media', icon: '📱', description: 'Platform-specific posts', output: '280 chars' },
    { name: 'Email Marketing', icon: '📧', description: 'Campaign emails', output: '500+ words' },
    { name: 'Product Descriptions', icon: '🛍️', description: 'E-commerce content', output: '200+ words' },
    { name: 'Press Releases', icon: '📰', description: 'Media announcements', output: '800+ words' },
    { name: 'Case Studies', icon: '📊', description: 'Success stories', output: '1500+ words' }
  ];

  const pricingPlans = [
    {
      name: 'Writer',
      price: '$79',
      period: '/month',
      description: 'Perfect for individual content creators and bloggers',
      features: [
        '10,000 words/month',
        'Basic AI features',
        'Standard templates',
        'Email support',
        'Basic SEO tools',
        'Plagiarism checking'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Creator',
      price: '$199',
      period: '/month',
      description: 'Ideal for content teams and marketing agencies',
      features: [
        '50,000 words/month',
        'Advanced AI features',
        'All templates',
        'Priority support',
        'Advanced SEO',
        'Team collaboration',
        'Content analytics',
        'Multi-language support'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations with high content needs',
      features: [
        'Unlimited words',
        'Full AI suite',
        'Custom templates',
        '24/7 dedicated support',
        'White-label options',
        'API access',
        'Dedicated account manager',
        'Custom integrations'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Emily Rodriguez',
      role: 'Content Manager',
      company: 'Marketing Pro',
      content: 'AI Content Generation has increased our content output by 400% while maintaining high quality. Our engagement rates have skyrocketed.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'David Kim',
      role: 'Blogger',
      company: 'Tech Blog',
      content: 'The AI writing assistant is incredible. It understands context and tone perfectly, saving me hours of writing time.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Lisa Chen',
      role: 'Marketing Director',
      company: 'E-commerce Plus',
      content: 'The SEO optimization features have improved our search rankings by 200%. The content quality is consistently excellent.',
      rating: 5,
      avatar: '👩‍🎨'
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      description: 'Generate product descriptions, category pages, and marketing content at scale',
      benefits: ['500% more content', '300% better SEO', '200% higher conversion']
    },
    {
      industry: 'Marketing',
      description: 'Create compelling campaigns, social media content, and email marketing materials',
      benefits: ['400% faster creation', '250% better engagement', '180% higher ROI']
    },
    {
      industry: 'Publishing',
      description: 'Produce articles, blog posts, and editorial content with AI assistance',
      benefits: ['600% more articles', '350% better quality', '250% faster publishing']
    },
    {
      industry: 'Education',
      description: 'Create educational content, course materials, and learning resources',
      benefits: ['400% more content', '300% better engagement', '200% improved learning']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 pt-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-pink-500/10 text-pink-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <PenTool className="w-4 h-4" />
            <span>AI-Powered Content Creation</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
            AI Content Generation
          </h1>
          
          <p className="text-xl md:text-2xl text-pink-400 mb-8 font-medium cyber-glow">
            Intelligent Content Creation Platform
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your content strategy with AI-powered writing, SEO optimization, and automated content creation. 
            Increase content output by 400% while maintaining high quality and engagement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Demo
            </a>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">400%</div>
              <div className="text-gray-300">More Content</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-gray-300">Better SEO</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">200%</div>
              <div className="text-gray-300">Higher Engagement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            All Content Types Supported
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Generate high-quality content for any platform or purpose
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {contentTypes.map((contentType, index) => (
            <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">{contentType.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{contentType.name}</h3>
              <div className="text-sm text-gray-400 mb-1">{contentType.description}</div>
              <div className="text-sm text-pink-400">{contentType.output}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Powerful AI Features
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Leverage cutting-edge AI technology to create compelling content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">
                <feature.icon className="w-12 h-12 mx-auto text-pink-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-4 text-center leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Industry Applications
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Proven results across multiple industries and content types
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4 neon-text">
                {useCase.industry}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {useCase.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {useCase.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="text-center">
                    <div className="text-lg font-bold text-pink-400">{benefit}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your content needs. All plans include our core AI features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'border-pink-400 border-2' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-pink-400 mb-2">
                  {plan.price}
                  <span className="text-lg text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.cta === 'Contact Sales' ? 'mailto:kleber@ziontechgroup.com' : 'tel:+13024640950'}
                className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                    : 'bg-slate-800 text-white hover:bg-slate-700 border border-gray-600'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied content creators who have transformed their workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="cyber-card p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="cyber-card p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of content creators already using AI Content Generation to create better content, 
            faster, and with higher engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIContentGenerationPage;