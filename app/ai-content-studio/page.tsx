'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Palette,
  Brain,
  FileText,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Shield,
  Clock,
  Zap,
  Target,
  BarChart,
  MessageSquare,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Award,
  Lock,
  Database,
  Cloud,
  Code,
  Smartphone,
  Settings,
  Search,
  Bot,
  Camera,
  Music,
  Video,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Clock3,
  Compass,
  Navigation as NavIcon,
  PieChart,
  TrendingDown,
  Activity,
  TrendingUp
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIContentStudioPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Content Creation',
      description: 'Generate high-quality content using advanced AI models and natural language processing',
      benefits: ['Text generation', 'Image creation', 'Video production', 'Audio synthesis']
    },
    {
      icon: Palette,
      title: 'Creative Design Tools',
      description: 'Professional design tools with AI assistance for graphics, layouts, and visual content',
      benefits: ['Auto-design', 'Template generation', 'Brand consistency', 'Visual optimization']
    },
    {
      icon: FileText,
      title: 'Content Management',
      description: 'Comprehensive content management system with version control and collaboration features',
      benefits: ['Version control', 'Team collaboration', 'Content scheduling', 'Performance tracking']
    },
    {
      icon: Target,
      title: 'SEO Optimization',
      description: 'Built-in SEO tools to optimize content for search engines and improve visibility',
      benefits: ['Keyword research', 'Content optimization', 'Meta tag generation', 'Performance analytics']
    },
    {
      icon: Zap,
      title: 'Automation Workflows',
      description: 'Create automated workflows for content creation, publishing, and distribution',
      benefits: ['Workflow automation', 'Scheduled publishing', 'Multi-platform distribution', 'Performance monitoring']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to track content performance and optimize strategies',
      benefits: ['Performance metrics', 'Engagement tracking', 'ROI analysis', 'Trend identification']
    }
  ];

  const contentTypes = [
    {
      title: 'Blog Posts',
      description: 'AI-powered blog content creation with SEO optimization and research integration',
      icon: '📝',
      features: ['SEO optimization', 'Research integration', 'Multiple formats', 'Scheduling']
    },
    {
      title: 'Social Media',
      description: 'Platform-specific social media content with engagement optimization',
      icon: '📱',
      features: ['Platform optimization', 'Hashtag research', 'Engagement prediction', 'Visual content']
    },
    {
      title: 'Video Content',
      description: 'Professional video creation with AI-powered editing and optimization',
      icon: '🎥',
      features: ['Script generation', 'Auto-editing', 'Multiple formats', 'Thumbnail creation']
    },
    {
      title: 'Email Marketing',
      description: 'AI-optimized email campaigns with personalization and A/B testing',
      icon: '📧',
      features: ['Personalization', 'A/B testing', 'Subject optimization', 'Content variation']
    },
    {
      title: 'Web Content',
      description: 'Website content creation with conversion optimization and user experience focus',
      icon: '🌐',
      features: ['Conversion optimization', 'UX writing', 'Landing pages', 'Product descriptions']
    },
    {
      title: 'E-books & Guides',
      description: 'Long-form content creation with structured information and professional formatting',
      icon: '📚',
      features: ['Structured content', 'Professional formatting', 'Research integration', 'Multi-format export']
    }
  ];

  const benefits = [
    'Increase content production by 10x',
    'Improve content quality and consistency',
    'Reduce content creation costs by 80%',
    'Enhance SEO performance and visibility',
    'Streamline content workflows',
    'Scale content across multiple platforms'
  ];

  const pricing = [
    {
      name: 'Creator',
      price: '$99',
      period: '/month',
      description: 'Perfect for individual content creators',
      features: [
        'Basic AI content generation',
        '5 content types',
        'Email support',
        'Standard templates',
        '1 user account',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Studio',
      price: '$299',
      period: '/month',
      description: 'Ideal for content teams and agencies',
      features: [
        'Advanced AI generation',
        'All content types',
        'Priority support',
        'Custom templates',
        'Up to 10 users',
        'Advanced analytics',
        'Workflow automation',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Full AI suite',
        'Custom content types',
        'Dedicated support',
        'White-label solution',
        'Unlimited users',
        'Custom integrations',
        'SLA guarantee',
        'Training & consulting'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Content Marketing Agency',
      role: 'Creative Director',
      quote: 'AI Content Studio transformed our workflow. We now produce 5x more content with better quality and consistency.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Brand',
      role: 'Marketing Manager',
      quote: 'The SEO optimization features improved our organic traffic by 300%. Content creation is now effortless.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Social Media Agency',
      role: 'Content Strategist',
      quote: 'Multi-platform content generation saved us 20+ hours per week. Our client satisfaction increased dramatically.',
      rating: 5,
      image: '👩‍💻'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="text-6xl mb-6 animate-bounce">🎨</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI Content Studio
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Your Complete Content Creation Hub
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Create, manage, and optimize content across all platforms with our comprehensive 
            AI-powered content studio. From ideation to publication, we've got you covered.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10x</div>
              <div className="text-gray-300">More Content</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">6</div>
              <div className="text-gray-300">Content Types</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Available</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Creating
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Demo
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful Content Studio Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create amazing content at scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">
                  <feature.icon className="text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="text-green-400 mr-2 w-4 h-4" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Content Types Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Content Types Supported
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create any type of content with AI-powered tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl mb-4 text-center">{type.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{type.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{type.description}</p>
                <div className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-3 text-center">
                      <span className="text-cyan-400 font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose AI Content Studio?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your content strategy with intelligent automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Content Studio Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the right plan for your content needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="text-green-400 mr-3 w-5 h-5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 px-6 rounded-lg font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations transformed their content strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                    <p className="text-cyan-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start creating amazing content with AI today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIContentStudioPage;