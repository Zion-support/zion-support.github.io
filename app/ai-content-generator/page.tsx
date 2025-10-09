'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, CheckCircle, AlertTriangle, Zap, Star, Users, Clock, Shield, Brain, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Settings, BarChart3, FileText as FileIcon, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, TrendingUp, Target, Globe, Eye, MousePointer, PenTool, Type, AlignLeft } from 'lucide-react';

const AIContentGeneratorPage: React.FC = () => {
  const [contentType, setContentType] = useState('blog');
  const [topic, setTopic] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateContent = async () => {
    setIsGenerating(true);
    // Simulate AI content generation
    setTimeout(() => {
      const sampleContent = {
        blog: `# The Future of AI in Content Creation

Artificial Intelligence is revolutionizing how we create and consume content. In this comprehensive guide, we'll explore the latest trends and technologies shaping the future of content creation.

## Key Benefits of AI Content Creation

1. **Increased Efficiency**: AI can generate high-quality content in minutes instead of hours
2. **Consistent Quality**: Maintain brand voice and tone across all content
3. **Scalability**: Create content at scale without proportional resource increases
4. **Personalization**: Tailor content to specific audiences and demographics

## Best Practices for AI Content

- Always review and edit AI-generated content
- Maintain human oversight and creativity
- Use AI as a tool to enhance, not replace, human creativity
- Focus on value and relevance for your audience

## Conclusion

The future of content creation lies in the harmonious collaboration between human creativity and AI capabilities. By embracing these technologies, businesses can create more engaging, relevant, and effective content than ever before.`,
        social: `🚀 Exciting news! AI is transforming content creation like never before!

✨ Key benefits:
• 10x faster content production
• Consistent brand voice
• Personalized for your audience
• Scales with your business

💡 Pro tip: Use AI as your creative partner, not replacement!

#AIContent #ContentCreation #Innovation #DigitalMarketing`,
        email: `Subject: Transform Your Content Strategy with AI

Hi [Name],

I hope this email finds you well. I wanted to share some exciting insights about how AI is revolutionizing content creation.

Did you know that businesses using AI for content creation see:
• 67% increase in content output
• 45% improvement in engagement rates
• 30% reduction in content costs

Our AI Content Generator can help you:
✓ Create blog posts, social media content, and emails
✓ Maintain consistent brand voice
✓ Scale your content production
✓ Improve engagement and conversions

Would you like to see how it works? I'd be happy to schedule a quick demo.

Best regards,
[Your Name]`,
        ad: `🎯 HIGH-CONVERTING AD COPY

Headline: "Transform Your Content in Minutes, Not Hours"

Subheadline: "AI-Powered Content Creation That Actually Works"

Body: "Stop spending hours on content creation. Our AI generates high-quality, engaging content for blogs, social media, and marketing campaigns in minutes. Join 10,000+ businesses already using our platform."

CTA: "Start Creating Now - Free Trial"

Benefits:
• 10x faster content creation
• Professional quality guaranteed
• No writing experience needed
• 30-day money-back guarantee`
      };
      
      setGeneratedContent(sampleContent[contentType] || '');
      setIsGenerating(false);
    }, 2000);
  };

  const contentTypes = [
    { id: 'blog', name: 'Blog Posts', icon: FileText, description: 'Long-form articles and guides' },
    { id: 'social', name: 'Social Media', icon: Users, description: 'Posts for all social platforms' },
    { id: 'email', name: 'Email Marketing', icon: Mail, description: 'Newsletters and campaigns' },
    { id: 'ad', name: 'Ad Copy', icon: Target, description: 'High-converting advertisements' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Writing',
      description: 'Advanced language models create high-quality, engaging content tailored to your brand voice'
    },
    {
      icon: Zap,
      title: 'Multiple Formats',
      description: 'Generate blogs, social media posts, emails, ad copy, and more with a single platform'
    },
    {
      icon: Palette,
      title: 'Brand Voice Consistency',
      description: 'Maintain consistent tone and style across all your content with AI that learns your brand'
    },
    {
      icon: Clock,
      title: 'Lightning Fast',
      description: 'Generate professional content in seconds, not hours, saving you valuable time'
    },
    {
      icon: Target,
      title: 'SEO Optimized',
      description: 'AI automatically optimizes content for search engines and social media algorithms'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Track content performance and get AI recommendations for improvement'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses and content creators',
      features: [
        'Up to 10,000 words per month',
        '5 content types',
        'Basic templates',
        'Email support',
        'Standard quality',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 50,000 words per month',
        'All content types',
        'Custom templates',
        'Priority support',
        'High quality output',
        'Up to 5 user accounts',
        'Brand voice training',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations with high content needs',
      features: [
        'Unlimited words',
        'All content types',
        'Custom AI models',
        'Dedicated support',
        'Premium quality',
        'Unlimited users',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Content Generator - Zion Tech Group</title>
        <meta name="description" content="AI-powered content creation tool. Starting at $199/month. Generate blogs, social media posts, emails, and ad copy with intelligent AI writing assistance." />
        <meta name="keywords" content="ai content generator, content creation, ai writing, blog writing, social media content, email marketing, ad copy" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="w-4 h-4 mr-2" />
            AI-Powered Content Creation
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Content Generator
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create high-quality content in seconds with our AI-powered writing assistant. 
            Generate blogs, social media posts, emails, and ad copy that converts.
          </p>
          
          {/* Interactive Demo */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 cyber-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Try Our AI Content Generator</h3>
            
            {/* Content Type Selector */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {contentTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setContentType(type.id)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    contentType === type.id
                      ? 'border-cyan-500 bg-cyan-500/20'
                      : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                  }`}
                >
                  <type.icon className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
                  <div className="text-sm font-medium text-white">{type.name}</div>
                  <div className="text-xs text-gray-400">{type.description}</div>
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Enter your topic or keyword..."
                className="w-full bg-gray-800 text-white p-4 rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none"
              />
              <button
                onClick={generateContent}
                disabled={!topic.trim() || isGenerating}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? 'Generating Content...' : 'Generate Content'}
              </button>
            </div>
            
            {generatedContent && (
              <div className="mt-8 bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold text-white mb-4">Generated Content:</h4>
                <div className="prose prose-invert max-w-none">
                  <pre className="whitespace-pre-wrap text-gray-300 text-sm leading-relaxed">
                    {generatedContent}
                  </pre>
                </div>
                <div className="mt-4 flex space-x-4">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                    Use This Content
                  </button>
                  <button className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors">
                    Regenerate
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Copy to Clipboard
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 cyber-card">
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful Content Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 cyber-card relative ${
                plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan - AI Content Generator`}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Amazing Content?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start using our AI Content Generator today and transform your content creation process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIContentGeneratorPage;