import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  Star, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  TrendingUp, 
  Globe, 
  Brain, 
  Cpu, 
  Target, 
  BarChart, 
  MessageSquare, 
  Eye, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  FileText,
  Image,
  Video,
  Music,
  Calendar,
  DollarSign,
  Award,
  Rocket,
  Layers,
  Workflow,
  Bot,
  Activity,
  Globe as Web,
  Mail as Email,
  MessageCircle,
  Mic,
  Phone as PhoneIcon,
  Headphones,
  Printer,
  Camera,
  Wrench,
  Cog,
  Monitor,
  Wifi,
  HardDrive,
  Server,
  Network,
  PenTool,
  Type,
  Palette,
  Scissors,
  Volume2,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle
} from 'lucide-react';

const AIContentGenerationPage: React.FC = () => {
  const contentServices = [
    {
      id: 'ai-blog-writing',
      name: 'AI Blog Writing Assistant',
      description: 'Create engaging blog posts, articles, and long-form content with AI-powered writing assistance.',
      icon: PenTool,
      price: 29,
      period: 'month',
      features: [
        'SEO-Optimized Blog Posts',
        'Topic Research & Ideas',
        'Content Outlines',
        'Writing Style Adaptation',
        'Plagiarism Detection',
        'Grammar & Style Check',
        'Multi-language Support',
        'Content Calendar Integration'
      ],
      benefits: [
        'Create 10x more content',
        'Improve SEO rankings',
        'Save 20+ hours/week',
        'Increase engagement rates'
      ],
      category: 'Writing',
      popular: true,
      marketPrice: '$99/month',
      technologies: ['GPT-4', 'NLP', 'SEO Tools', 'Content APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-social-media-content',
      name: 'AI Social Media Content Creator',
      description: 'Generate engaging social media posts, captions, and hashtags for all platforms.',
      icon: MessageCircle,
      price: 19,
      period: 'month',
      features: [
        'Platform-Specific Content',
        'Hashtag Research',
        'Visual Content Ideas',
        'Post Scheduling',
        'Engagement Optimization',
        'Trend Analysis',
        'Brand Voice Consistency',
        'Performance Analytics'
      ],
      benefits: [
        'Increase followers by 300%',
        'Improve engagement rates',
        'Save 15+ hours/week',
        'Maintain consistent posting'
      ],
      category: 'Social Media',
      popular: true,
      marketPrice: '$79/month',
      technologies: ['AI/ML', 'Social APIs', 'Trend Analysis', 'Content Optimization'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing Content',
      description: 'Create compelling email campaigns, newsletters, and automated sequences.',
      icon: Mail,
      price: 39,
      period: 'month',
      features: [
        'Email Template Generation',
        'Subject Line Optimization',
        'Personalization Engine',
        'A/B Testing Content',
        'Segmentation Content',
        'Automation Sequences',
        'Performance Analytics',
        'Compliance Checking'
      ],
      benefits: [
        'Increase open rates by 150%',
        'Improve click-through rates',
        'Save 20+ hours/week',
        'Boost conversions'
      ],
      category: 'Email Marketing',
      popular: false,
      marketPrice: '$149/month',
      technologies: ['AI/ML', 'Email APIs', 'Personalization', 'A/B Testing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-product-descriptions',
      name: 'AI Product Description Generator',
      description: 'Create compelling product descriptions that drive sales and improve SEO.',
      icon: Type,
      price: 25,
      period: 'month',
      features: [
        'E-commerce Optimized',
        'SEO-Friendly Descriptions',
        'Feature Highlighting',
        'Benefit-Focused Copy',
        'Multiple Variations',
        'Language Translation',
        'Bulk Generation',
        'Quality Scoring'
      ],
      benefits: [
        'Increase sales by 25%',
        'Improve SEO rankings',
        'Save 30+ hours/week',
        'Scale product catalog'
      ],
      category: 'E-commerce',
      popular: false,
      marketPrice: '$99/month',
      technologies: ['AI/ML', 'E-commerce APIs', 'SEO Tools', 'Translation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-ad-copy',
      name: 'AI Ad Copy Generator',
      description: 'Create high-converting ad copy for Google, Facebook, and other advertising platforms.',
      icon: Target,
      price: 35,
      period: 'month',
      features: [
        'Platform-Specific Copy',
        'A/B Testing Variations',
        'Audience Targeting',
        'Conversion Optimization',
        'Budget Optimization',
        'Performance Tracking',
        'Creative Testing',
        'ROI Analysis'
      ],
      benefits: [
        'Increase ad performance by 200%',
        'Reduce cost per acquisition',
        'Save 25+ hours/week',
        'Improve campaign ROI'
      ],
      category: 'Advertising',
      popular: false,
      marketPrice: '$149/month',
      technologies: ['AI/ML', 'Ad APIs', 'A/B Testing', 'Performance Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-video-scripts',
      name: 'AI Video Script Generator',
      description: 'Create engaging video scripts for YouTube, TikTok, and other video platforms.',
      icon: Video,
      price: 45,
      period: 'month',
      features: [
        'Platform-Specific Scripts',
        'Hook & CTA Optimization',
        'Engagement Techniques',
        'Length Optimization',
        'Visual Cue Integration',
        'Call-to-Action Placement',
        'Trend Integration',
        'Performance Analytics'
      ],
      benefits: [
        'Increase video engagement',
        'Improve retention rates',
        'Save 30+ hours/week',
        'Create viral content'
      ],
      category: 'Video Content',
      popular: false,
      marketPrice: '$199/month',
      technologies: ['AI/ML', 'Video APIs', 'Trend Analysis', 'Engagement Metrics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-podcast-scripts',
      name: 'AI Podcast Script Generator',
      description: 'Create engaging podcast scripts and show notes with AI assistance.',
      icon: Mic,
      price: 39,
      period: 'month',
      features: [
        'Episode Structure',
        'Interview Questions',
        'Show Notes Generation',
        'Transcription Services',
        'SEO Optimization',
        'Engagement Hooks',
        'Call-to-Action Integration',
        'Performance Tracking'
      ],
      benefits: [
        'Improve podcast quality',
        'Increase listener engagement',
        'Save 25+ hours/week',
        'Grow audience faster'
      ],
      category: 'Audio Content',
      popular: false,
      marketPrice: '$149/month',
      technologies: ['AI/ML', 'Audio APIs', 'Transcription', 'SEO Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-whitepapers',
      name: 'AI Whitepaper Generator',
      description: 'Create comprehensive whitepapers, case studies, and technical documents.',
      icon: FileText,
      price: 99,
      period: 'month',
      features: [
        'Research Integration',
        'Data Analysis',
        'Technical Writing',
        'Citation Management',
        'Formatting & Styling',
        'Review & Editing',
        'Version Control',
        'Collaboration Tools'
      ],
      benefits: [
        'Create professional documents',
        'Establish thought leadership',
        'Save 40+ hours/week',
        'Improve credibility'
      ],
      category: 'Technical Writing',
      popular: false,
      marketPrice: '$399/month',
      technologies: ['AI/ML', 'Research APIs', 'Document Processing', 'Citation Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-newsletters',
      name: 'AI Newsletter Generator',
      description: 'Create engaging newsletters with curated content and personalized recommendations.',
      icon: Mail,
      price: 29,
      period: 'month',
      features: [
        'Content Curation',
        'Personalization Engine',
        'Template Generation',
        'A/B Testing',
        'Subscriber Segmentation',
        'Performance Analytics',
        'Automation Workflows',
        'Integration APIs'
      ],
      benefits: [
        'Increase open rates by 200%',
        'Improve subscriber engagement',
        'Save 20+ hours/week',
        'Grow subscriber base'
      ],
      category: 'Newsletter',
      popular: false,
      marketPrice: '$99/month',
      technologies: ['AI/ML', 'Email APIs', 'Content Curation', 'Personalization'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-press-releases',
      name: 'AI Press Release Generator',
      description: 'Create professional press releases and media kits for maximum impact.',
      icon: Printer,
      price: 49,
      period: 'month',
      features: [
        'Professional Formatting',
        'Media Kit Generation',
        'Distribution Optimization',
        'SEO Enhancement',
        'Multi-language Support',
        'Template Library',
        'Performance Tracking',
        'Media Database Integration'
      ],
      benefits: [
        'Increase media coverage',
        'Improve brand visibility',
        'Save 25+ hours/week',
        'Professional presentation'
      ],
      category: 'PR & Media',
      popular: false,
      marketPrice: '$199/month',
      technologies: ['AI/ML', 'PR APIs', 'Media Databases', 'SEO Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-website-copy',
      name: 'AI Website Copy Generator',
      description: 'Create compelling website copy that converts visitors into customers.',
      icon: Globe,
      price: 59,
      period: 'month',
      features: [
        'Landing Page Copy',
        'About Page Content',
        'Service Descriptions',
        'Testimonial Integration',
        'Call-to-Action Optimization',
        'SEO Enhancement',
        'Conversion Optimization',
        'A/B Testing'
      ],
      benefits: [
        'Increase conversions by 150%',
        'Improve user experience',
        'Save 30+ hours/week',
        'Boost search rankings'
      ],
      category: 'Web Copy',
      popular: false,
      marketPrice: '$249/month',
      technologies: ['AI/ML', 'Web APIs', 'SEO Tools', 'Conversion Optimization'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-technical-docs',
      name: 'AI Technical Documentation',
      description: 'Create comprehensive technical documentation and user guides.',
      icon: FileText,
      price: 79,
      period: 'month',
      features: [
        'API Documentation',
        'User Manuals',
        'Code Documentation',
        'Tutorial Creation',
        'Version Control',
        'Collaboration Tools',
        'Search Optimization',
        'Multi-format Export'
      ],
      benefits: [
        'Improve developer experience',
        'Reduce support tickets',
        'Save 35+ hours/week',
        'Enhance product adoption'
      ],
      category: 'Technical Docs',
      popular: false,
      marketPrice: '$299/month',
      technologies: ['AI/ML', 'Documentation APIs', 'Version Control', 'Search Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content Types', count: contentServices.length },
    { id: 'Writing', name: 'Writing', count: contentServices.filter(s => s.category === 'Writing').length },
    { id: 'Social Media', name: 'Social Media', count: contentServices.filter(s => s.category === 'Social Media').length },
    { id: 'Email Marketing', name: 'Email Marketing', count: contentServices.filter(s => s.category === 'Email Marketing').length },
    { id: 'E-commerce', name: 'E-commerce', count: contentServices.filter(s => s.category === 'E-commerce').length },
    { id: 'Advertising', name: 'Advertising', count: contentServices.filter(s => s.category === 'Advertising').length },
    { id: 'Video Content', name: 'Video Content', count: contentServices.filter(s => s.category === 'Video Content').length },
    { id: 'Audio Content', name: 'Audio Content', count: contentServices.filter(s => s.category === 'Audio Content').length },
    { id: 'Technical Writing', name: 'Technical Writing', count: contentServices.filter(s => s.category === 'Technical Writing').length },
    { id: 'Newsletter', name: 'Newsletter', count: contentServices.filter(s => s.category === 'Newsletter').length },
    { id: 'PR & Media', name: 'PR & Media', count: contentServices.filter(s => s.category === 'PR & Media').length },
    { id: 'Web Copy', name: 'Web Copy', count: contentServices.filter(s => s.category === 'Web Copy').length },
    { id: 'Technical Docs', name: 'Technical Docs', count: contentServices.filter(s => s.category === 'Technical Docs').length }
  ];

  const pricingPlans = [
    {
      name: 'Content Starter',
      price: 99,
      period: 'month',
      description: 'Perfect for small businesses and content creators',
      features: [
        'Access to 5 Content Tools',
        'Basic Templates',
        'Standard Support',
        'Email Support',
        'Basic Analytics',
        'API Access'
      ],
      popular: false
    },
    {
      name: 'Content Professional',
      price: 199,
      period: 'month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Access to 10 Content Tools',
        'Premium Templates',
        'Priority Support',
        'Phone & Email Support',
        'Advanced Analytics',
        'Full API Access',
        'Custom Integrations',
        'Training Sessions'
      ],
      popular: true
    },
    {
      name: 'Content Enterprise',
      price: 399,
      period: 'month',
      description: 'Complete solution for large organizations',
      features: [
        'Access to All Content Tools',
        'Custom Templates',
        '24/7 Dedicated Support',
        'Dedicated Account Manager',
        'Advanced Analytics',
        'White-label Solutions',
        'Custom Integrations',
        'SLA Guarantee',
        'On-site Training'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Content Generation - Zion Tech Group</title>
        <meta name="description" content="Create high-quality content 10x faster with AI. Blog posts, social media, emails, and marketing copy. Starting at $19/month." />
        <meta name="keywords" content="ai content generation, content writing, blog writing, social media content, email marketing, content creation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            AI Content Generation
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto cyber-glow">
            Create high-quality content 10x faster with advanced AI. From blog posts to social media, we generate content that engages and converts.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="cyber-card hologram-card p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">10x</div>
              <div className="text-gray-300 text-sm">Faster Creation</div>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">$19</div>
              <div className="text-gray-300 text-sm">Starting Price</div>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Time Saved</div>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">12+</div>
              <div className="text-gray-300 text-sm">Content Types</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Content Audit
            </a>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Content Types We Generate
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentServices.map((service, index) => (
              <div key={index} className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <span className="text-sm text-gray-400">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-cyan-400">${service.price}</span>
                    <span className="text-gray-400 ml-1">/{service.period}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Market Price: <span className="line-through">{service.marketPrice}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-gray-500">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                    className="w-full cyber-button text-center inline-block"
                  >
                    Get Started Now
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    {service.contactInfo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Choose Your Content Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card hologram-card p-8 text-center relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">${plan.price}</span>
                    <span className="text-gray-400 ml-1">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-cyan-600 hover:bg-cyan-700 text-white' 
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our AI Content Generation?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered Quality</h3>
              <p className="text-gray-300">Advanced AI technology that creates high-quality, engaging content that resonates with your audience.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">10x Faster</h3>
              <p className="text-gray-300">Create content 10x faster than traditional methods, allowing you to scale your content production.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300">Increase engagement rates by 200% and save 20+ hours per week with our proven content solutions.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">SEO Optimized</h3>
              <p className="text-gray-300">All content is optimized for search engines to improve your rankings and organic traffic.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Settings className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Customizable</h3>
              <p className="text-gray-300">Tailor content to your brand voice, style, and specific requirements for maximum impact.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Multi-Platform</h3>
              <p className="text-gray-300">Create content for all platforms including blogs, social media, email, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our AI content generation to create engaging, high-quality content that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Content Audit
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400 space-y-1">
            <p>✓ Free content audit • ✓ Custom recommendations • ✓ No setup fees</p>
            <p>✓ 30-day money-back guarantee • ✓ 24/7 support • ✓ Enterprise security</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIContentGenerationPage;