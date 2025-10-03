// import React from 'react';
import { Metadata } from 'next';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  PenTool, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Clock,
  Star,
  TrendingUp,
  Settings,
  Users,
  Globe,
  Smartphone,
  Mail,
  Phone,
  Calendar,
  Database,
  Bot,
  Eye,
  Target,
  Layers,
  Wifi,
  Building,
  Home,
  Car,
  Plane,
  Ship,
  MessageSquare,
  Share2,
  ThumbsUp,
  Search,
  Filter,
  Edit3,
  Copy,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Square,
  Triangle,
  Circle,
  Hexagon,
  Lock,
  Shield,
  Bell,
  CreditCard,
  PieChart,
  LineChart,
  Activity,
  Monitor,
  Camera,
  Mic,
  MapPin,
  ShoppingCart,
  Package,
  Truck
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Content Factory - Intelligent Content Creation Suite | Zion Tech Group',
  description: 'AI-powered content generation for marketing, social media, documentation, and SEO with brand consistency. Create 10x more content in less time.',
  keywords: 'AI content creation, content marketing, social media automation, blog writing, SEO content, marketing automation',
};

export default function AIContentFactoryPage() {
  const features = [
    {
      icon: PenTool,
      title: 'Automated Blog & Article Writing',
      description: 'Generate high-quality, SEO-optimized blog posts and articles based on your topics, keywords, and brand voice.',
      benefits: [
        'SEO-optimized content generation',
        'Brand voice consistency',
        'Topic research and outlines',
        'Multi-format content creation'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Social Media Content Generation',
      description: 'Create engaging social media posts, captions, and content optimized for each platform (LinkedIn, Twitter, Instagram, Facebook).',
      benefits: [
        'Platform-specific optimization',
        'Hashtag research and integration',
        'Engaging caption generation',
        'Content calendar planning'
      ]
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Product Descriptions',
      description: 'Generate compelling product descriptions that convert visitors into customers with persuasive copy and SEO optimization.',
      benefits: [
        'Conversion-optimized copy',
        'Product feature highlighting',
        'SEO keyword integration',
        'A/B testing variations'
      ]
    },
    {
      icon: FileText,
      title: 'Technical Documentation',
      description: 'Create comprehensive technical documentation, user guides, and knowledge base articles with accuracy and clarity.',
      benefits: [
        'Technical accuracy maintenance',
        'Step-by-step guide generation',
        'Code documentation',
        'User-friendly explanations'
      ]
    },
    {
      icon: Target,
      title: 'Marketing Copy & Ad Content',
      description: 'Generate persuasive marketing copy for ads, email campaigns, landing pages, and promotional materials.',
      benefits: [
        'Persuasive copywriting',
        'A/B testing variations',
        'CTA optimization',
        'Audience targeting'
      ]
    },
    {
      icon: Globe,
      title: 'Multilingual Content Creation',
      description: 'Generate content in multiple languages while maintaining brand voice and cultural appropriateness.',
      benefits: [
        '50+ language support',
        'Cultural adaptation',
        'Brand voice consistency',
        'Quality assurance'
      ]
    }
  ];

  const contentTypes = [
    {
      type: 'Blog Posts',
      icon: FileText,
      description: 'Long-form articles and blog posts',
      output: '2,000-5,000 words',
      time: '5-10 minutes'
    },
    {
      type: 'Social Media Posts',
      icon: MessageSquare,
      description: 'Platform-optimized social content',
      output: '280 characters + media',
      time: '1-2 minutes'
    },
    {
      type: 'Product Descriptions',
      icon: ShoppingCart,
      description: 'E-commerce product copy',
      output: '150-500 words',
      time: '2-3 minutes'
    },
    {
      type: 'Email Campaigns',
      icon: Mail,
      description: 'Email marketing content',
      output: '200-1,000 words',
      time: '3-5 minutes'
    },
    {
      type: 'Technical Docs',
      icon: Settings,
      description: 'Technical documentation',
      output: '1,000-3,000 words',
      time: '10-15 minutes'
    },
    {
      type: 'Ad Copy',
      icon: Target,
      description: 'Marketing and advertising copy',
      output: '50-200 words',
      time: '2-4 minutes'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '10,000 words per month',
        '5 content types',
        'Basic templates',
        'Email support',
        '1 brand voice setup',
        'Standard quality'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing teams',
      features: [
        '50,000 words per month',
        'All content types',
        'Premium templates',
        'Priority support',
        '5 brand voices',
        'Advanced customization',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$899',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited words',
        'Custom content types',
        'White-label options',
        'Dedicated support',
        'Unlimited brand voices',
        'Custom integrations',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Content Scaling',
      description: 'Generate thousands of product descriptions and marketing copy for large product catalogs.',
      results: '90% faster content creation',
      savings: '$50K+ annually'
    },
    {
      title: 'Blog Content Strategy',
      description: 'Maintain consistent blog publishing schedule with high-quality, SEO-optimized articles.',
      results: '10x more content published',
      savings: '$30K+ annually'
    },
    {
      title: 'Social Media Management',
      description: 'Create engaging social media content across multiple platforms with consistent brand voice.',
      results: '5x engagement increase',
      savings: '$25K+ annually'
    },
    {
      title: 'Technical Documentation',
      description: 'Generate comprehensive technical docs and user guides for software products.',
      results: '80% faster documentation',
      savings: '$40K+ annually'
    }
  ];

  const integrations = [
    { name: 'WordPress', logo: '🔗', description: 'Direct blog publishing' },
    { name: 'Shopify', logo: '🛍️', description: 'E-commerce integration' },
    { name: 'HubSpot', logo: '📊', description: 'CRM and marketing automation' },
    { name: 'Mailchimp', logo: '📧', description: 'Email marketing campaigns' },
    { name: 'Hootsuite', logo: '🐦', description: 'Social media scheduling' },
    { name: 'Buffer', logo: '📱', description: 'Social media management' },
    { name: 'Google Docs', logo: '📄', description: 'Document collaboration' },
    { name: 'Notion', logo: '📝', description: 'Content planning and organization' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center gap-3 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                <PenTool className="w-4 h-4" />
                AI Content Creation Suite
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI Content Factory
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Create 10x More Content</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              AI-powered content generation for marketing, social media, documentation, and SEO. Maintain brand consistency while scaling your content production 10x faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Demo: {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}?subject=AI Content Factory Demo Request`}
                className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Request Demo
              </a>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">10x</div>
                <div className="text-sm text-gray-600">Faster Content Creation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">70%</div>
                <div className="text-sm text-gray-600">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Languages Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Create Any Type of Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((content, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <content.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{content.type}</h3>
                <p className="text-gray-600 mb-6">{content.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Output:</span>
                    <span className="font-semibold text-purple-600">{content.output}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Time:</span>
                    <span className="font-semibold text-green-600">{content.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Powerful Features for Content Creation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gray-50 rounded-2xl p-8 shadow-lg ${plan.popular ? 'ring-2 ring-purple-500 transform scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={`mailto:${contactInfo.email}?subject=AI Content Factory - ${plan.name} Plan Inquiry`}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-colors ${
                    plan.popular 
                      ? 'bg-purple-600 text-white hover:bg-purple-700' 
                      : 'border-2 border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Real Results for Content Teams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Results</div>
                    <div className="text-lg font-bold text-purple-600">{useCase.results}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Savings</div>
                    <div className="text-lg font-bold text-green-600">{useCase.savings}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Seamless Integrations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{integration.logo}</div>
                <div className="text-sm font-semibold text-gray-900 mb-1">{integration.name}</div>
                <div className="text-xs text-gray-600">{integration.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Scale Your Content Production?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join hundreds of businesses creating 10x more content with AI. Get your free content audit and see how much time you can save.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: {contactInfo.phone}
            </a>
            <a 
              href={`mailto:${contactInfo.email}?subject=AI Content Factory - Free Content Audit`}
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Audit
            </a>
          </div>
          <div className="mt-8 text-purple-100">
            <p className="text-lg font-semibold mb-2">📍 Address:</p>
            <p>{contactInfo.address}</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How does the AI maintain my brand voice?</h3>
              <p className="text-gray-600">
                Our AI learns your brand voice by analyzing your existing content, style guides, and preferences. You can also provide specific instructions and examples to ensure consistency across all generated content.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I edit and customize the generated content?</h3>
              <p className="text-gray-600">
                Absolutely! All generated content is fully editable. You can modify, refine, and customize any piece of content to perfectly match your needs. The AI serves as your starting point, not your endpoint.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Is the content SEO-optimized?</h3>
              <p className="text-gray-600">
                Yes! Our AI incorporates SEO best practices including keyword optimization, meta descriptions, proper heading structure, and readability optimization to help improve your search rankings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What languages are supported?</h3>
              <p className="text-gray-600">
                We support over 50 languages including English, Spanish, French, German, Italian, Portuguese, Chinese, Japanese, Korean, Arabic, and many more. All content maintains cultural appropriateness and linguistic accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}