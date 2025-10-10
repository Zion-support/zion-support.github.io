'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Palette, 
  Brush, 
  Download, 
  Upload, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Globe, 
  Smartphone, 
  Laptop, 
  Database, 
  AlertTriangle,
  ArrowRight,
  Settings,
  Bell,
  Shield,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  Brain,
  Activity,
  Eye,
  EyeOff,
  FileText,
  Image,
  Layers,
  Type,
  Shapes,
  Sparkles,
  Wand2,
  Target,
  BarChart3
} from 'lucide-react';

const AILogoDesignerPro: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('features');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      category: 'AI-Powered Design',
      items: [
        'Machine learning logo generation',
        'Brand personality analysis',
        'Industry-specific design patterns',
        'Color psychology optimization',
        'Typography matching algorithms',
        'Scalability optimization'
      ]
    },
    {
      category: 'Design Tools',
      items: [
        'Unlimited logo variations',
        'Vector format exports (SVG, PDF)',
        'High-resolution PNG/JPG exports',
        'Transparent background support',
        'Multiple color variations',
        'Font pairing suggestions'
      ]
    },
    {
      category: 'Brand Management',
      items: [
        'Brand guideline generation',
        'Logo usage guidelines',
        'Color palette extraction',
        'Font recommendations',
        'Business card templates',
        'Letterhead designs'
      ]
    },
    {
      category: 'Collaboration',
      items: [
        'Team collaboration tools',
        'Client feedback system',
        'Version control and history',
        'Real-time editing',
        'Comment and annotation',
        'Approval workflows'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$59',
      period: '/month',
      description: 'Perfect for freelancers and small businesses',
      features: [
        '50 logo designs per month',
        'Basic AI generation',
        'Standard export formats',
        'Brand color palette',
        'Email support',
        'Commercial license',
        '7-day free trial'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'For agencies and growing businesses',
      features: [
        'Everything in Starter',
        'Unlimited logo designs',
        'Advanced AI algorithms',
        'All export formats',
        'Brand guidelines',
        'Team collaboration (5 users)',
        'Priority support',
        'API access'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large agencies and corporations',
      features: [
        'Everything in Professional',
        'Unlimited team members',
        'White-label solution',
        'Custom integrations',
        'Dedicated support',
        'On-premise deployment',
        'Custom AI training',
        'SLA guarantee'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: '90% Faster Design',
      description: 'Create professional logos in minutes, not hours'
    },
    {
      icon: Palette,
      title: 'Unlimited Creativity',
      description: 'AI generates endless unique design variations'
    },
    {
      icon: Target,
      title: 'Brand Perfect',
      description: 'AI ensures logos match your brand personality'
    },
    {
      icon: BarChart3,
      title: 'Proven Results',
      description: '95% client satisfaction rate'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Creative Director, DesignStudio',
      content: 'AI Logo Designer Pro has revolutionized our workflow. We can now create 10x more logos for our clients in the same time.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Startup Founder, TechFlow',
      content: 'The AI understood our brand perfectly and created a logo that perfectly represents our tech startup. Amazing results!',
      rating: 5
    },
    {
      name: 'Emily Johnson',
      role: 'Marketing Manager, RetailCorp',
      content: 'The brand guidelines feature saved us weeks of work. Everything is perfectly coordinated and professional.',
      rating: 5
    }
  ];

  const designCategories = [
    { name: 'Technology', count: '2,500+', icon: Globe },
    { name: 'Healthcare', count: '1,800+', icon: Shield },
    { name: 'Finance', count: '2,200+', icon: BarChart3 },
    { name: 'Retail', count: '3,100+', icon: Target },
    { name: 'Food & Beverage', count: '2,700+', icon: Sparkles },
    { name: 'Education', count: '1,900+', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Logo Designer Pro - Professional Logo Creation | Zion Tech Group</title>
        <meta name="description" content="Create stunning logos with AI Logo Designer Pro. Machine learning-powered design, brand guidelines, and unlimited variations. Professional results in minutes." />
        <meta name="keywords" content="logo design, AI design, brand identity, logo generator, graphic design, brand guidelines, logo maker" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-logo-designer" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Palette className="w-4 h-4 mr-2" />
              AI-Powered Design
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Logo Designer
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create stunning, professional logos in minutes with AI-powered design technology. 
              Perfect for businesses, agencies, and creative professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </button>
            </div>
          </div>

          {/* Design Categories */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {designCategories.map((category, index) => (
              <div key={index} className="text-center bg-slate-800/50 rounded-xl p-6">
                <category.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-lg font-semibold text-white mb-1">{category.name}</div>
                <div className="text-sm text-gray-400">{category.count} designs</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Design Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to create logos that perfectly represent your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((category, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                <h3 className="text-xl font-semibold text-purple-400 mb-6">{category.category}</h3>
                <ul className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Creative Pricing Plans
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your creative needs. All plans include 7-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800 rounded-xl p-8 border-2 ${
                plan.popular ? 'border-purple-400' : 'border-slate-700'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                    : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Logo Designer Pro?
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of designers and businesses who trust our AI for their logo needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Creative Professionals
            </h2>
            <p className="text-xl text-gray-300">
              See what our users say about AI Logo Designer Pro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-purple-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Create Your Perfect Logo?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 25,000+ designers and businesses who trust AI Logo Designer Pro for their brand identity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300">
              Have questions about our AI design platform? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300 mb-2">+1 302 464 0950</p>
              <p className="text-sm text-gray-400">24/7 Support Available</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300 mb-2">kleber@ziontechgroup.com</p>
              <p className="text-sm text-gray-400">Primary Contact</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300 mb-2">364 E Main St STE 1008</p>
              <p className="text-sm text-gray-400">Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AILogoDesignerPro;