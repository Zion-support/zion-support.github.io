'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  FileText, Brain, Zap, CheckCircle, Star, Users, Clock, 
  Target, Palette, Globe, Shield, Download, Upload, 
  Copy, RefreshCw, Settings, BarChart, TrendingUp,
  ArrowRight, Phone, Mail, MapPin, DollarSign, Award
} from 'lucide-react';

const AIWritingAssistantPage: React.FC = () => {
  const [activeTemplate, setActiveTemplate] = useState('blog-post');
  const [inputText, setInputText] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTone, setSelectedTone] = useState('professional');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [wordCount, setWordCount] = useState(500);

  const templates = [
    {
      id: 'blog-post',
      name: 'Blog Post',
      icon: FileText,
      description: 'Create engaging blog posts with SEO optimization',
      category: 'content'
    },
    {
      id: 'email',
      name: 'Email',
      icon: Mail,
      description: 'Professional emails and newsletters',
      category: 'communication'
    },
    {
      id: 'social-media',
      name: 'Social Media',
      icon: Globe,
      description: 'Captivating social media posts',
      category: 'marketing'
    },
    {
      id: 'product-description',
      name: 'Product Description',
      icon: Target,
      description: 'Compelling product descriptions',
      category: 'ecommerce'
    },
    {
      id: 'ad-copy',
      name: 'Ad Copy',
      icon: Zap,
      description: 'High-converting advertisement copy',
      category: 'advertising'
    },
    {
      id: 'press-release',
      name: 'Press Release',
      icon: FileText,
      description: 'Professional press releases',
      category: 'pr'
    },
    {
      id: 'proposal',
      name: 'Proposal',
      icon: FileText,
      description: 'Business proposals and pitches',
      category: 'business'
    },
    {
      id: 'resume',
      name: 'Resume',
      icon: Users,
      description: 'Professional resume and CV',
      category: 'career'
    }
  ];

  const tones = [
    { id: 'professional', name: 'Professional', description: 'Formal and business-like' },
    { id: 'casual', name: 'Casual', description: 'Friendly and conversational' },
    { id: 'persuasive', name: 'Persuasive', description: 'Convincing and compelling' },
    { id: 'informative', name: 'Informative', description: 'Educational and detailed' },
    { id: 'creative', name: 'Creative', description: 'Imaginative and engaging' },
    { id: 'technical', name: 'Technical', description: 'Precise and detailed' }
  ];

  const languages = [
    { id: 'en', name: 'English', flag: '🇺🇸' },
    { id: 'es', name: 'Spanish', flag: '🇪🇸' },
    { id: 'fr', name: 'French', flag: '🇫🇷' },
    { id: 'de', name: 'German', flag: '🇩🇪' },
    { id: 'it', name: 'Italian', flag: '🇮🇹' },
    { id: 'pt', name: 'Portuguese', flag: '🇵🇹' },
    { id: 'zh', name: 'Chinese', flag: '🇨🇳' },
    { id: 'ja', name: 'Japanese', flag: '🇯🇵' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Writing',
      description: 'Advanced AI algorithms that understand context and generate high-quality content',
      benefits: ['Natural language generation', 'Context awareness', 'Creative suggestions']
    },
    {
      icon: CheckCircle,
      title: 'Grammar & Style Check',
      description: 'Real-time grammar checking and style optimization for perfect content',
      benefits: ['Grammar correction', 'Style suggestions', 'Readability improvement']
    },
    {
      icon: Target,
      title: 'SEO Optimization',
      description: 'Built-in SEO tools to help your content rank higher in search results',
      benefits: ['Keyword optimization', 'Meta descriptions', 'Content structure']
    },
    {
      icon: Palette,
      title: 'Tone & Voice',
      description: 'Customize the tone and voice to match your brand personality',
      benefits: ['Multiple tone options', 'Brand voice consistency', 'Audience targeting']
    },
    {
      icon: Globe,
      title: 'Multi-Language',
      description: 'Write in multiple languages with native-level quality',
      benefits: ['50+ languages', 'Cultural adaptation', 'Local context']
    },
    {
      icon: BarChart,
      title: 'Analytics',
      description: 'Track content performance and optimize based on data',
      benefits: ['Performance metrics', 'Engagement tracking', 'ROI analysis']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      originalPrice: '$49',
      description: 'Perfect for individuals and small teams',
      features: [
        '10,000 words/month',
        '20+ templates',
        'Basic grammar check',
        'Email support',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$59',
      period: '/month',
      originalPrice: '$99',
      description: 'Ideal for growing businesses',
      features: [
        '50,000 words/month',
        '50+ templates',
        'Advanced grammar & style',
        'SEO optimization',
        'Priority support',
        '5 user accounts',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      originalPrice: '$249',
      description: 'For large organizations',
      features: [
        'Unlimited words',
        'All templates',
        'Advanced AI features',
        'Custom integrations',
        'Dedicated support',
        'Unlimited users',
        'White-label options',
        'Custom training'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Manager',
      company: 'TechCorp',
      content: 'AI Writing Assistant has revolutionized our content creation process. We save 15+ hours per week and our engagement rates have increased by 60%.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'StartupXYZ',
      content: 'The quality of content generated is outstanding. It sounds natural and professional, and the SEO optimization features are incredibly helpful.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Freelance Writer',
      company: 'Self-Employed',
      content: 'This tool has helped me scale my business significantly. I can now take on 3x more clients while maintaining high quality standards.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const sampleContent = `# ${inputText || 'AI-Generated Content'}

## Introduction
This is a professionally crafted piece of content generated by our advanced AI writing assistant. The content is optimized for ${selectedTone} tone and written in ${languages.find(l => l.id === selectedLanguage)?.name || 'English'}.

## Key Points
- **Quality**: High-quality, engaging content that resonates with your audience
- **SEO Optimized**: Built-in SEO optimization for better search rankings
- **Customizable**: Adjustable tone, style, and length to match your needs
- **Multi-language**: Support for 50+ languages with cultural adaptation

## Benefits
1. **Time Saving**: Generate content 10x faster than manual writing
2. **Consistency**: Maintain consistent brand voice across all content
3. **Scalability**: Scale your content production without compromising quality
4. **Cost Effective**: Reduce content creation costs by up to 70%

## Conclusion
Our AI Writing Assistant is the perfect solution for businesses looking to scale their content marketing efforts while maintaining high quality standards. Try it today and experience the difference AI-powered content creation can make.

---
*Generated by Zion Tech Group AI Writing Assistant*`;

    setGeneratedContent(sampleContent);
    setIsGenerating(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    // You could add a toast notification here
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'ai-generated-content.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Writing Assistant Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered writing tool with 50+ templates, grammar checking, and SEO optimization. Save 10+ hours per week and improve content quality by 85%." />
        <meta name="keywords" content="ai writing assistant, content generation, grammar check, seo optimization, writing tools, content marketing" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Writing Assistant Pro
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced AI-powered writing tool that helps you create high-quality content 10x faster. 
                From blog posts to emails, generate engaging content that converts.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 cyber-card">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">15,000+</div>
                  <div className="text-gray-300 text-sm">Active Users</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 cyber-card">
                  <div className="text-2xl font-bold text-green-400 mb-1">4.9/5</div>
                  <div className="text-gray-300 text-sm">User Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 cyber-card">
                  <div className="text-2xl font-bold text-purple-400 mb-1">85%</div>
                  <div className="text-gray-300 text-sm">Quality Improvement</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 cyber-card">
                  <div className="text-2xl font-bold text-orange-400 mb-1">10x</div>
                  <div className="text-gray-300 text-sm">Faster Writing</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                >
                  Try Free Demo
                </button>
                <a
                  href="tel:+13024640950"
                  className="bg-transparent border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-500/10 transition-all text-center"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>

            {/* Demo Interface */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 cyber-card">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    What would you like to write about?
                  </label>
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="e.g., A blog post about AI in healthcare"
                    className="w-full px-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Tone</label>
                    <select
                      value={selectedTone}
                      onChange={(e) => setSelectedTone(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                    >
                      {tones.map(tone => (
                        <option key={tone.id} value={tone.id} className="bg-slate-800">
                          {tone.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Language</label>
                    <select
                      value={selectedLanguage}
                      onChange={(e) => setSelectedLanguage(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                    >
                      {languages.map(lang => (
                        <option key={lang.id} value={lang.id} className="bg-slate-800">
                          {lang.flag} {lang.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <div className="flex items-center justify-center space-x-2">
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Generating...</span>
                    </div>
                  ) : (
                    'Generate Content'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generated Content Section */}
      {generatedContent && (
        <section id="demo-section" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 cyber-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Generated Content</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={handleCopy}
                    className="flex items-center space-x-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-all"
                  >
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </button>
                  <button
                    onClick={handleDownload}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-6 max-h-96 overflow-y-auto">
                <pre className="text-gray-300 whitespace-pre-wrap text-sm leading-relaxed">
                  {generatedContent}
                </pre>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Templates Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Choose Your Template
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {templates.map((template) => (
              <button
                key={template.id}
                onClick={() => setActiveTemplate(template.id)}
                className={`p-6 rounded-lg transition-all duration-300 ${
                  activeTemplate === template.id
                    ? 'bg-cyan-500/20 border-2 border-cyan-500'
                    : 'bg-white/5 hover:bg-white/10 border-2 border-transparent'
                }`}
              >
                <template.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-white font-medium mb-2">{template.name}</h3>
                <p className="text-gray-400 text-sm">{template.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
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
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Simple Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 cyber-card ${
                  plan.popular ? 'ring-2 ring-cyan-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{plan.originalPrice}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center block"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Writing?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join 15,000+ users who are already creating better content with AI. 
            Start your free trial today and see the difference.
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

export default AIWritingAssistantPage;