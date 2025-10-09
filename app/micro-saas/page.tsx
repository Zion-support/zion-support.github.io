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
  FileText,
  PieChart,
  Activity,
  Lightning,
  Rocket,
  Layers,
  Workflow,
  Bot,
  Headphones,
  Monitor,
  Mobile,
  Laptop,
  Tablet,
  Watch,
  Camera,
  Mic,
  Headset,
  Gamepad2,
  Network,
  Security,
  Data,
  Analytics,
  Growth,
  Team,
  Achievement,
  Rating,
  Time,
  Goal,
  Success,
  Next,
  Start,
  Magic,
  Call,
  Email,
  Location
} from 'lucide-react';

// Real Micro SAAS Services Data with detailed information
const microSaasServices = [
  {
    id: 'ai-project-manager',
    name: 'AI Project Manager Pro',
    description: 'Intelligent project management with AI-powered scheduling, resource allocation, and risk prediction. Achieve 40% faster project delivery with automated insights.',
    icon: BarChart,
    price: '$299/month',
    features: [
      'AI-powered project scheduling',
      'Resource optimization algorithms',
      'Risk prediction & mitigation',
      'Real-time progress analytics',
      'Team collaboration tools',
      'Automated reporting',
      'Integration with 50+ tools',
      'Mobile app access'
    ],
    popular: true,
    category: 'Project Management',
    benefits: ['40% faster delivery', '30% cost reduction', '95% accuracy in predictions'],
    link: 'https://ziontechgroup.com/ai-project-manager',
    demo: 'https://ziontechgroup.com/demo/ai-project-manager',
    useCases: [
      'Software development project management',
      'Marketing campaign coordination',
      'Event planning and execution',
      'Construction project oversight',
      'Research and development tracking'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'TensorFlow', 'Docker', 'AWS'],
    roi: '300% ROI through improved project efficiency',
    freeTrial: '14 days free trial',
    setupTime: '5 minutes'
  },
  {
    id: 'ai-social-media-manager',
    name: 'AI Social Media Manager',
    description: 'Automated social media management with AI content creation, optimal posting times, and engagement analytics. Increase engagement by 300%.',
    icon: MessageSquare,
    price: '$199/month',
    features: [
      'AI content generation',
      'Optimal posting time analysis',
      'Multi-platform management',
      'Engagement analytics dashboard',
      'Brand voice consistency',
      'Hashtag optimization',
      'Competitor analysis',
      'Automated responses'
    ],
    popular: true,
    category: 'Social Media',
    benefits: ['300% engagement increase', '50% time savings', 'Consistent brand voice'],
    link: 'https://ziontechgroup.com/ai-social-media-manager',
    demo: 'https://ziontechgroup.com/demo/ai-social-media-manager',
    useCases: [
      'Small business social media automation',
      'E-commerce product promotion',
      'Personal brand building',
      'Event marketing campaigns',
      'Customer service automation'
    ],
    technologies: ['Python', 'OpenAI GPT', 'Instagram API', 'Twitter API', 'Facebook API', 'Analytics'],
    roi: '250% ROI through increased engagement and sales',
    freeTrial: '7 days free trial',
    setupTime: '2 minutes'
  },
  {
    id: 'ai-analytics-dashboard',
    name: 'AI Analytics Dashboard',
    description: 'Advanced business intelligence with AI-powered insights, predictive analytics, and automated reporting. Make data-driven decisions with 90% accuracy.',
    icon: PieChart,
    price: '$399/month',
    features: [
      'AI-powered data insights',
      'Predictive analytics',
      'Custom dashboard creation',
      'Automated report generation',
      'Real-time data monitoring',
      'Data visualization tools',
      'Alert system',
      'API integrations'
    ],
    popular: true,
    category: 'Analytics',
    benefits: ['60% better decision making', 'Real-time insights', 'Automated reporting'],
    link: 'https://ziontechgroup.com/ai-analytics-dashboard',
    demo: 'https://ziontechgroup.com/demo/ai-analytics-dashboard',
    useCases: [
      'E-commerce sales analytics',
      'Marketing performance tracking',
      'Financial data analysis',
      'Customer behavior insights',
      'Operational efficiency monitoring'
    ],
    technologies: ['React', 'D3.js', 'Python', 'Pandas', 'TensorFlow', 'MongoDB'],
    roi: '400% ROI through improved decision making',
    freeTrial: '21 days free trial',
    setupTime: '10 minutes'
  },
  {
    id: 'ai-email-marketing',
    name: 'AI Email Marketing Suite',
    description: 'Intelligent email marketing with AI-driven personalization, A/B testing, and automated campaign optimization. Increase open rates by 45%.',
    icon: Mail,
    price: '$149/month',
    features: [
      'AI email personalization',
      'Automated A/B testing',
      'Campaign optimization',
      'Advanced segmentation',
      'Performance tracking',
      'Template library',
      'Drip campaign automation',
      'Deliverability optimization'
    ],
    popular: true,
    category: 'Email Marketing',
    benefits: ['45% higher open rates', '60% click-through improvement', 'Automated optimization'],
    link: 'https://ziontechgroup.com/ai-email-marketing',
    demo: 'https://ziontechgroup.com/demo/ai-email-marketing',
    useCases: [
      'E-commerce email campaigns',
      'Lead nurturing sequences',
      'Newsletter automation',
      'Customer onboarding',
      'Retention campaigns'
    ],
    technologies: ['Node.js', 'SendGrid', 'Mailchimp API', 'Machine Learning', 'Redis', 'PostgreSQL'],
    roi: '350% ROI through improved email performance',
    freeTrial: '14 days free trial',
    setupTime: '3 minutes'
  },
  {
    id: 'ai-customer-support-bot',
    name: 'AI Customer Support Bot',
    description: '24/7 AI-powered customer support with natural language processing and seamless human handoff. Resolve 90% of queries automatically.',
    icon: Bot,
    price: '$249/month',
    features: [
      '24/7 automated support',
      'Natural language processing',
      'Human handoff capability',
      'Multi-language support',
      'Learning from interactions',
      'Integration with CRM',
      'Custom knowledge base',
      'Performance analytics'
    ],
    popular: true,
    category: 'Customer Support',
    benefits: ['90% query resolution', '24/7 availability', 'Instant responses'],
    link: 'https://ziontechgroup.com/ai-customer-support-bot',
    demo: 'https://ziontechgroup.com/demo/ai-customer-support-bot',
    useCases: [
      'E-commerce customer service',
      'SaaS product support',
      'FAQ automation',
      'Lead qualification',
      'Technical support'
    ],
    technologies: ['OpenAI GPT', 'Dialogflow', 'WebSocket', 'Node.js', 'MongoDB', 'Redis'],
    roi: '280% ROI through reduced support costs',
    freeTrial: '7 days free trial',
    setupTime: '15 minutes'
  },
  {
    id: 'ai-code-review-assistant',
    name: 'AI Code Review Assistant',
    description: 'Automated code analysis with AI-powered suggestions, security scanning, and performance optimization recommendations. Improve code quality by 50%.',
    icon: Code,
    price: '$179/month',
    features: [
      'Automated code analysis',
      'Security vulnerability scanning',
      'Performance optimization tips',
      'Best practices enforcement',
      'Team collaboration features',
      'Integration with Git',
      'Custom rule configuration',
      'Detailed reporting'
    ],
    popular: false,
    category: 'Development',
    benefits: ['50% faster code reviews', '90% bug detection', 'Consistent quality'],
    link: 'https://ziontechgroup.com/ai-code-review-assistant',
    demo: 'https://ziontechgroup.com/demo/ai-code-review-assistant',
    useCases: [
      'Software development teams',
      'Code quality assurance',
      'Security compliance',
      'Performance optimization',
      'Learning and training'
    ],
    technologies: ['Python', 'AST Analysis', 'Security Scanners', 'GitHub API', 'Docker', 'CI/CD'],
    roi: '200% ROI through improved code quality',
    freeTrial: '14 days free trial',
    setupTime: '5 minutes'
  },
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator Pro',
    description: 'AI-powered content creation for blogs, social media, marketing materials, and technical documentation. Create content 80% faster.',
    icon: FileText,
    price: '$129/month',
    features: [
      'Multi-format content generation',
      'SEO optimization',
      'Brand voice consistency',
      'Plagiarism checking',
      'Content scheduling',
      'Template library',
      'Multi-language support',
      'Collaboration tools'
    ],
    popular: false,
    category: 'Content Creation',
    benefits: ['80% content creation time saved', 'SEO optimized', 'Brand consistent'],
    link: 'https://ziontechgroup.com/ai-content-generator',
    demo: 'https://ziontechgroup.com/demo/ai-content-generator',
    useCases: [
      'Blog content creation',
      'Social media posts',
      'Marketing copy',
      'Product descriptions',
      'Technical documentation'
    ],
    technologies: ['OpenAI GPT', 'NLP', 'SEO Tools', 'Plagiarism Detection', 'React', 'Node.js'],
    roi: '220% ROI through content efficiency',
    freeTrial: '7 days free trial',
    setupTime: '2 minutes'
  },
  {
    id: 'ai-seo-optimizer',
    name: 'AI SEO Optimizer',
    description: 'Advanced SEO optimization with AI-driven keyword research, content analysis, and ranking predictions. Increase organic traffic by 200%.',
    icon: Target,
    price: '$199/month',
    features: [
      'AI keyword research',
      'Content optimization',
      'Ranking predictions',
      'Competitor analysis',
      'Technical SEO audit',
      'Link building suggestions',
      'Performance tracking',
      'Automated reporting'
    ],
    popular: false,
    category: 'SEO',
    benefits: ['200% organic traffic increase', 'Top 3 rankings', 'Automated optimization'],
    link: 'https://ziontechgroup.com/ai-seo-optimizer',
    demo: 'https://ziontechgroup.com/demo/ai-seo-optimizer',
    useCases: [
      'Website SEO optimization',
      'E-commerce product optimization',
      'Local business SEO',
      'Content marketing',
      'Competitive analysis'
    ],
    technologies: ['Python', 'Web Scraping', 'SEO APIs', 'Machine Learning', 'Analytics', 'React'],
    roi: '300% ROI through increased organic traffic',
    freeTrial: '14 days free trial',
    setupTime: '5 minutes'
  }
];

// Service Card Component
const ServiceCard = memo(({ service }: { service: any }) => (
  <div className="quantum-card p-8 h-full group hover:scale-105 transition-all duration-300">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
          <service.icon className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {service.name}
          </h3>
          <p className="text-sm text-gray-400">{service.category}</p>
        </div>
      </div>
      {service.popular && (
        <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-bold rounded-full">
          Popular
        </span>
      )}
    </div>
    
    <p className="text-gray-300 mb-6 text-base leading-relaxed">
      {service.description}
    </p>
    
    <div className="mb-6">
      <div className="text-3xl font-bold text-cyan-400 mb-2">{service.price}</div>
      <div className="text-sm text-gray-400 mb-2">{service.roi}</div>
      <div className="flex items-center space-x-4 text-sm text-gray-300 mb-4">
        <span className="flex items-center">
          <Clock className="w-4 h-4 mr-1 text-green-400" />
          {service.setupTime}
        </span>
        <span className="flex items-center">
          <Star className="w-4 h-4 mr-1 text-yellow-400" />
          {service.freeTrial}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {service.benefits.map((benefit: string, index: number) => (
          <span key={index} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
            {benefit}
          </span>
        ))}
      </div>
    </div>
    
    <div className="space-y-3 mb-8">
      <h4 className="text-sm font-semibold text-cyan-400">Key Features:</h4>
      {service.features.slice(0, 4).map((feature: string, index: number) => (
        <div key={index} className="flex items-center text-sm text-gray-300">
          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
          {feature}
        </div>
      ))}
    </div>

    <div className="mb-6">
      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Technologies:</h4>
      <div className="flex flex-wrap gap-2">
        {service.technologies.map((tech: string, index: number) => (
          <span key={index} className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
    
    <div className="flex space-x-3">
      <a
        href={service.link}
        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg text-center font-medium hover:from-cyan-600 hover:to-blue-700 transition-all group"
      >
        <span className="flex items-center justify-center">
          Start Free Trial
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </span>
      </a>
      <a
        href={service.demo}
        className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400 hover:text-black transition-all"
      >
        Demo
      </a>
    </div>
  </div>
));

// Pricing Tiers Section
const PricingTiersSection = memo(() => (
  <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text">
          <span className="holographic-text">Simple Pricing</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Choose the plan that fits your business needs. All plans include free trials and no setup fees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            name: 'Starter',
            price: '$99/month',
            description: 'Perfect for small businesses getting started',
            features: [
              'Up to 3 micro SAAS tools',
              'Basic AI features',
              'Email support',
              'Standard integrations',
              'Basic analytics',
              '5 team members'
            ],
            popular: false,
            cta: 'Start Free Trial'
          },
          {
            name: 'Professional',
            price: '$299/month',
            description: 'Ideal for growing businesses',
            features: [
              'Up to 10 micro SAAS tools',
              'Advanced AI features',
              'Priority support',
              'All integrations',
              'Advanced analytics',
              'Unlimited team members',
              'Custom workflows',
              'API access'
            ],
            popular: true,
            cta: 'Start Free Trial'
          },
          {
            name: 'Enterprise',
            price: 'Custom',
            description: 'For large organizations with specific needs',
            features: [
              'Unlimited micro SAAS tools',
              'Custom AI models',
              'Dedicated support',
              'Custom integrations',
              'Enterprise analytics',
              'Unlimited everything',
              'White-label options',
              'SLA guarantee'
            ],
            popular: false,
            cta: 'Contact Sales'
          }
        ].map((tier, index) => (
          <div key={index} className={`cyber-card p-8 relative ${tier.popular ? 'ring-2 ring-cyan-400' : ''}`}>
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">{tier.price}</div>
              <p className="text-gray-300">{tier.description}</p>
            </div>
            
            <div className="space-y-4 mb-8">
              {tier.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
            
            <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
              tier.popular 
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
            }`}>
              {tier.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
));

// Main Micro SAAS Page Component
export default function MicroSaasPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tools', icon: Layers },
    { id: 'Project Management', label: 'Project Management', icon: BarChart },
    { id: 'Social Media', label: 'Social Media', icon: MessageSquare },
    { id: 'Analytics', label: 'Analytics', icon: PieChart },
    { id: 'Email Marketing', label: 'Email Marketing', icon: Mail },
    { id: 'Customer Support', label: 'Customer Support', icon: Bot },
    { id: 'Development', label: 'Development', icon: Code },
    { id: 'Content Creation', label: 'Content Creation', icon: FileText },
    { id: 'SEO', label: 'SEO', icon: Target }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Micro SAAS Solutions - Zion Tech Group',
    description: 'AI-powered micro SAAS tools for project management, social media, analytics, and more',
    provider: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com'
    },
    areaServed: 'Worldwide',
    serviceType: 'Software as a Service'
  };

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta
          name="description"
          content="AI-powered micro SAAS solutions for project management, social media, analytics, email marketing, and more. Start free trials and boost your business efficiency."
        />
        <meta
          name="keywords"
          content="micro SAAS, AI tools, project management, social media automation, analytics, email marketing, customer support, business software"
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 cyber-grid neural-network-bg overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 cyber-text">
              <span className="holographic-text neon-pulse">Micro SAAS Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              AI-powered micro SAAS tools that solve specific business problems. 
              Start free trials and transform your workflow in minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button px-8 py-4 text-lg font-bold group"
              >
                <span className="flex items-center">
                  <Phone className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                  Start Free Trial
                </span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 text-lg font-bold text-white border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 group"
              >
                <span className="flex items-center">
                  <Mail className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Contact Sales
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers Section */}
        <PricingTiersSection />

        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text">
              <span className="holographic-text">Ready to Get Started?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Start your free trial today and experience the power of AI-driven micro SAAS solutions.
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
                  Email kleber@ziontechgroup.com
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}