'use client';
import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  PenTool, 
  Target, 
  Zap, 
  Globe, 
  BarChart3, 
  Users, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp, 
  Brain, 
  ArrowRight,
  Star,
  Download,
  Play,
  Pause,
  RotateCcw,
  Settings,
  Bell,
  Search,
  PieChart,
  Activity,
  Award,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  BookOpen,
  Type,
  Edit3,
  Copy,
  Palette,
  Languages,
  Shield,
  Sparkles
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIContentWriterPro: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [demoData, setDemoData] = useState({
    articlesGenerated: 1247,
    wordsWritten: 156000,
    timeSaved: 420,
    languages: 25,
    efficiency: 95,
    satisfaction: 98
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Writing',
      description: 'Advanced AI that generates high-quality, engaging content tailored to your brand voice',
      benefits: ['10x faster writing', 'SEO optimized', 'Brand voice consistency', 'Plagiarism-free']
    },
    {
      icon: Target,
      title: 'Content Strategy',
      description: 'Intelligent content planning and strategy recommendations based on market analysis',
      benefits: ['Content calendar', 'Topic suggestions', 'Trend analysis', 'Audience insights']
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Generate content in 25+ languages with native-level quality and cultural adaptation',
      benefits: ['25+ languages', 'Cultural adaptation', 'Local SEO', 'Global reach']
    },
    {
      icon: BarChart3,
      title: 'SEO Optimization',
      description: 'Built-in SEO tools that optimize content for search engines and improve rankings',
      benefits: ['Keyword optimization', 'Meta descriptions', 'Schema markup', 'Performance tracking']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Collaborative editing and approval workflows for seamless team content creation',
      benefits: ['Real-time editing', 'Comment system', 'Approval workflows', 'Version control']
    },
    {
      icon: Shield,
      title: 'Content Security',
      description: 'Enterprise-grade security with content encryption and access controls',
      benefits: ['Data encryption', 'Access controls', 'Audit logs', 'Compliance ready']
    }
  ];

  const contentTypes = [
    {
      icon: FileText,
      title: 'Blog Posts',
      description: 'Long-form articles optimized for SEO and engagement',
      examples: ['How-to guides', 'Industry insights', 'Product reviews', 'Case studies']
    },
    {
      icon: Type,
      title: 'Social Media',
      description: 'Engaging posts for all major social media platforms',
      examples: ['Facebook posts', 'Twitter threads', 'LinkedIn articles', 'Instagram captions']
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'High-converting email campaigns and newsletters',
      examples: ['Welcome series', 'Product launches', 'Newsletters', 'Abandoned cart']
    },
    {
      icon: Target,
      title: 'Ad Copy',
      description: 'Compelling ad copy that drives conversions and clicks',
      examples: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Display banners']
    },
    {
      icon: BookOpen,
      title: 'Product Descriptions',
      description: 'Persuasive product descriptions that boost sales',
      examples: ['E-commerce listings', 'Feature descriptions', 'Benefits copy', 'Technical specs']
    },
    {
      icon: Globe,
      title: 'Website Content',
      description: 'Professional website copy that converts visitors',
      examples: ['Landing pages', 'About pages', 'Service descriptions', 'Contact forms']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$89',
      period: '/month',
      originalPrice: '$129',
      features: [
        '10,000 words/month',
        '5 content types',
        'Basic SEO tools',
        'Email support',
        'Mobile app access',
        '5 team members'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$179',
      period: '/month',
      originalPrice: '$249',
      features: [
        '50,000 words/month',
        'All content types',
        'Advanced SEO tools',
        'Priority support',
        'API access',
        '25 team members',
        'Brand voice training',
        'Analytics dashboard'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$349',
      period: '/month',
      originalPrice: '$499',
      features: [
        'Unlimited words',
        'All content types',
        'Custom AI models',
        'Dedicated support',
        'White-label options',
        'Unlimited team members',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Content Marketing Manager',
      company: 'Digital Solutions Co.',
      content: 'AI Content Writer Pro has transformed our content production. We\'re now publishing 3x more content with 40% better engagement rates. The AI understands our brand voice perfectly.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'David Kim',
      role: 'Founder',
      company: 'StartupHub',
      content: 'As a startup, we needed high-quality content without the budget for a full content team. This tool delivers professional-grade content that rivals what agencies charge $5,000+ for.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Thompson',
      role: 'E-commerce Director',
      company: 'RetailMax',
      content: 'Our product descriptions generated by AI Content Writer Pro have increased our conversion rate by 35%. The SEO optimization features are incredible.',
      rating: 5,
      avatar: 'LT'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="cyber-grid absolute inset-0"></div>
        <div className="neural-network-bg absolute inset-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Brain className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Content Creation</span>
            </div>
            
            <h1 className="cyber-text-3d text-5xl md:text-7xl font-bold mb-6">
              AI Content Writer Pro
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create 10x more content in half the time with AI-powered writing that understands your brand voice. 
              Generate blog posts, social media content, emails, and more with professional quality.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <a
                href="#demo"
                className="cyber-button px-8 py-4 text-lg flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Try Live Demo</span>
              </a>
              <a
                href="#pricing"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 text-lg rounded-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Start Free Trial</span>
              </a>
            </div>
            
            {/* Live Demo Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="cyber-card p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400">{demoData.articlesGenerated.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Articles Generated</div>
              </div>
              <div className="cyber-card p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">{demoData.wordsWritten.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Words Written</div>
              </div>
              <div className="cyber-card p-4 text-center">
                <div className="text-2xl font-bold text-green-400">{demoData.efficiency}%</div>
                <div className="text-sm text-gray-400">Efficiency</div>
              </div>
              <div className="cyber-card p-4 text-center">
                <div className="text-2xl font-bold text-orange-400">{demoData.timeSaved}h</div>
                <div className="text-sm text-gray-400">Time Saved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="cyber-text-3d text-4xl md:text-5xl font-bold mb-6">
              Create Any Type of Content
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From blog posts to social media, generate professional content for every platform and purpose
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((type, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                    <type.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold">{type.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-cyan-400 mb-2">Examples:</div>
                  {type.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="cyber-text-3d text-4xl md:text-5xl font-bold mb-6">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI technology that understands context, tone, and your brand voice
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="cyber-text-3d text-4xl md:text-5xl font-bold mb-6">
              Try It Live
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of AI Content Writer Pro with our interactive demonstration
            </p>
          </div>
          
          <div className="cyber-card p-8 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Content Generator</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Content Type</label>
                    <select className="w-full p-3 bg-slate-700 border border-gray-600 rounded-lg text-white">
                      <option>Blog Post</option>
                      <option>Social Media Post</option>
                      <option>Email Campaign</option>
                      <option>Product Description</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Topic</label>
                    <input 
                      type="text" 
                      placeholder="Enter your topic..."
                      className="w-full p-3 bg-slate-700 border border-gray-600 rounded-lg text-white"
                      defaultValue="The Future of AI in Content Marketing"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Tone</label>
                    <select className="w-full p-3 bg-slate-700 border border-gray-600 rounded-lg text-white">
                      <option>Professional</option>
                      <option>Casual</option>
                      <option>Friendly</option>
                      <option>Authoritative</option>
                    </select>
                  </div>
                  <button className="cyber-button w-full py-3 px-6 flex items-center justify-center space-x-2">
                    <Sparkles className="w-5 h-5" />
                    <span>Generate Content</span>
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Generated Content</h3>
                <div className="bg-slate-800 p-6 rounded-lg border border-gray-600">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-cyan-400 mb-2">Title:</h4>
                      <p className="text-gray-300">The Future of AI in Content Marketing: How Artificial Intelligence is Revolutionizing Digital Storytelling</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cyan-400 mb-2">Introduction:</h4>
                      <p className="text-gray-300">In the rapidly evolving landscape of digital marketing, artificial intelligence is emerging as a game-changing force that's transforming how brands create, distribute, and optimize content. As we look toward the future, AI-powered content marketing tools are not just enhancing efficiency—they're fundamentally reshaping the creative process itself.</p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>Words: 247</span>
                      <span>Reading time: 2 min</span>
                      <span>SEO Score: 95/100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="cyber-text-3d text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your content needs. All plans include 14-day free trial.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'border-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <div className="text-sm text-gray-500 line-through mt-1">
                      {plan.originalPrice}{plan.period}
                    </div>
                  )}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'cyber-button'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="cyber-text-3d text-4xl md:text-5xl font-bold mb-6">
              Trusted by Content Creators
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about AI Content Writer Pro
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center text-slate-900 font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="cyber-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="cyber-text-3d text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of content creators already using AI Content Writer Pro to produce better content faster.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Start Free Trial</span>
              </a>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 text-lg rounded-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">12,000+</div>
                <div className="text-gray-400">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">10x</div>
                <div className="text-gray-400">Faster Content Creation</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
                <div className="text-gray-400">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-300">Ready to get started? Contact our team today.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-white transition-colors">
                {contactInfo.phone}
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-white transition-colors">
                {contactInfo.email}
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-300">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIContentWriterPro;