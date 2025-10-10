import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Target, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  DollarSign,
  Calendar,
  BarChart3,
  Users,
  Globe,
  Lock,
  Download,
  Upload,
  Bell,
  Settings,
  CreditCard,
  Smartphone,
  Shield,
  PieChart,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Edit,
  Trash2,
  Copy,
  Eye,
  Plus,
  Minus,
  Calculator,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Database,
  Cpu,
  Activity,
  MessageSquare,
  UserPlus,
  TrendingDown,
  Award,
  Briefcase,
  Building,
  FileText,
  Link,
  Share2,
  RefreshCw
} from 'lucide-react';

export default function AILeadGenerationPage() {
  const features = [
    {
      icon: Cpu,
      title: 'AI-Powered Lead Scoring',
      description: 'Machine learning algorithms analyze lead behavior and predict conversion probability with 92% accuracy',
      benefit: 'Increase conversion rates by 45% and reduce sales cycle by 30%'
    },
    {
      icon: Search,
      title: 'Intelligent Lead Discovery',
      description: 'AI scans millions of data points to find high-quality prospects that match your ideal customer profile',
      benefit: 'Generate 3x more qualified leads automatically'
    },
    {
      icon: MessageSquare,
      title: 'Automated Outreach',
      description: 'AI crafts personalized messages and sequences that resonate with each prospect',
      benefit: 'Improve response rates by 60% with personalized content'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Advanced analytics predict which leads are most likely to convert and when',
      benefit: 'Focus efforts on high-probability prospects'
    },
    {
      icon: Target,
      title: 'Multi-Channel Campaigns',
      description: 'Coordinate email, social media, phone, and direct mail campaigns automatically',
      benefit: 'Increase touchpoints by 400% without manual effort'
    },
    {
      icon: Shield,
      title: 'Compliance & Privacy',
      description: 'GDPR and CCPA compliant with built-in opt-out management and data protection',
      benefit: 'Stay compliant while scaling your outreach'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 leads/month',
        'Basic AI scoring',
        'Email campaigns',
        'Basic analytics',
        'Email support',
        '2 user accounts',
        'Standard integrations'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Most popular for growing businesses',
      features: [
        'Up to 10,000 leads/month',
        'Advanced AI scoring',
        'Multi-channel campaigns',
        'Advanced analytics & reporting',
        'Social media integration',
        'API access',
        'Priority support',
        '5 user accounts',
        'Advanced integrations',
        'Custom sequences'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited leads',
        'Custom AI models',
        'White-label solution',
        'Advanced automation',
        'Custom integrations',
        'Dedicated support',
        'Unlimited users',
        'Advanced compliance tools',
        'Custom reporting',
        'Dedicated account manager'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Adams',
      role: 'Marketing Director, TechCorp',
      content: 'AI Lead Generation increased our qualified leads by 300% and our conversion rate by 45%. The AI scoring is incredibly accurate.',
      rating: 5,
      company: 'TechCorp Solutions'
    },
    {
      name: 'Michael Torres',
      role: 'CEO, StartupXYZ',
      content: 'The automated outreach sequences saved us 20 hours per week. Our response rates improved from 2% to 8% in just one month.',
      rating: 5,
      company: 'StartupXYZ'
    },
    {
      name: 'Sarah Kim',
      role: 'Sales Manager, Enterprise Inc',
      content: 'The predictive analytics help us focus on the right prospects. Our sales team is 50% more productive now.',
      rating: 5,
      company: 'Enterprise Inc'
    }
  ];

  const integrations = [
    { name: 'Salesforce', logo: 'SF' },
    { name: 'HubSpot', logo: 'HS' },
    { name: 'Pipedrive', logo: 'PD' },
    { name: 'LinkedIn', logo: 'LI' },
    { name: 'Facebook', logo: 'FB' },
    { name: 'Twitter', logo: 'TW' },
    { name: 'Mailchimp', logo: 'MC' },
    { name: 'Zapier', logo: 'Z' }
  ];

  const industries = [
    {
      title: 'B2B SaaS',
      description: 'Generate high-quality leads for software and technology companies',
      icon: Cpu,
      benefits: ['Technical targeting', 'Decision maker identification', 'Company size filtering']
    },
    {
      title: 'E-commerce',
      description: 'Find and convert online shoppers with personalized campaigns',
      icon: Globe,
      benefits: ['Behavioral targeting', 'Purchase intent signals', 'Retargeting campaigns']
    },
    {
      title: 'Real Estate',
      description: 'Identify potential buyers and sellers in your market area',
      icon: Building,
      benefits: ['Location-based targeting', 'Property value analysis', 'Life event triggers']
    },
    {
      title: 'Financial Services',
      description: 'Target qualified prospects for loans, insurance, and investments',
      icon: CreditCard,
      benefits: ['Credit score analysis', 'Income verification', 'Compliance management']
    }
  ];

  const benefits = [
    {
      metric: '300%',
      label: 'More Qualified Leads',
      description: 'AI-powered prospect discovery'
    },
    {
      metric: '45%',
      label: 'Higher Conversion',
      description: 'Intelligent lead scoring'
    },
    {
      metric: '60%',
      label: 'Better Response Rates',
      description: 'Personalized outreach'
    },
    {
      metric: '30%',
      label: 'Faster Sales Cycle',
      description: 'Predictive analytics'
    }
  ];

  const leadSources = [
    {
      name: 'LinkedIn',
      description: 'Professional network targeting',
      icon: Briefcase,
      leads: '50K+ monthly'
    },
    {
      name: 'Company Databases',
      description: 'B2B company information',
      icon: Database,
      leads: '100K+ companies'
    },
    {
      name: 'Social Media',
      description: 'Facebook, Twitter, Instagram',
      icon: Share2,
      leads: '200K+ profiles'
    },
    {
      name: 'Email Lists',
      description: 'Verified email addresses',
      icon: Mail,
      leads: '500K+ contacts'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Lead Generation - Smart Prospect Discovery & Conversion | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered lead generation with intelligent scoring, automated outreach, and predictive analytics. Generate 3x more qualified leads!" />
        <meta name="keywords" content="AI lead generation, prospect discovery, lead scoring, automated outreach, sales automation, B2B leads" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-lead-generation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="absolute inset-0 cyber-grid-enhanced"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text-enhanced neon-pulse">
              AI Lead Generation
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Revolutionary AI-powered lead generation that discovers high-quality prospects, 
              scores them intelligently, and converts them with personalized automated campaigns.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">300% More Leads</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">45% Higher Conversion</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="neon-button-enhanced hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="/demo"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-bold hover:bg-cyan-400 hover:text-slate-900 transition-colors inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See the measurable impact AI Lead Generation delivers
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">{benefit.metric}</span>
                </div>
                <div className="text-2xl font-bold text-white mb-2">{benefit.label}</div>
                <div className="text-gray-300 text-sm">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Intelligent Lead Generation Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Powered by advanced AI to transform your lead generation process
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="futuristic-card-enhanced p-6 group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <p className="text-cyan-400 text-sm font-medium">{feature.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Sources Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Massive Lead Sources
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Access millions of qualified prospects across multiple channels
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadSources.map((source, index) => (
              <div key={index} className="futuristic-card p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <source.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{source.name}</h3>
                <p className="text-gray-300 mb-4">{source.description}</p>
                <div className="text-cyan-400 font-bold text-lg">{source.leads}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From B2B SaaS to e-commerce, AI Lead Generation adapts to your market
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="futuristic-card p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{industry.title}</h3>
                <p className="text-gray-300 mb-4">{industry.description}</p>
                <div className="space-y-2">
                  {industry.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`futuristic-card-enhanced p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-bold transition-all ${
                    plan.popular
                      ? 'neon-button-enhanced'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted by 12,000+ Businesses
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See what our customers say about AI Lead Generation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="futuristic-card-enhanced p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite CRM and marketing tools
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="futuristic-card p-6 text-center group hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold">{integration.logo}</span>
                </div>
                <div className="text-white font-medium">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Generate More Qualified Leads?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already generating 3x more qualified leads with AI-powered lead generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Target className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="/demo"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-300">
            <p className="mb-4">
              <strong>Contact us:</strong> <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 (302) 464-0950</a> | 
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 ml-2">kleber@ziontechgroup.com</a>
            </p>
            <p className="text-sm">
              364 E Main St STE 1008, Middletown, DE 19709 | <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">ziontechgroup.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}