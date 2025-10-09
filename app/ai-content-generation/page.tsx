'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, PenTool, Image, Video, Music, CheckCircle, Star, Zap, Shield, Clock, Users, ArrowRight, Phone, Mail, MapPin, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles } from 'lucide-react';

const AIContentGeneration: React.FC = () => {
  const [contentType, setContentType] = useState('blog');
  const [topic, setTopic] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleContentGeneration = async () => {
    setIsGenerating(true);
    // Simulate AI content generation
    setTimeout(() => {
      const sampleContent = {
        blog: `# ${topic}\n\n## Introduction\n\nIn today's rapidly evolving digital landscape, ${topic.toLowerCase()} has become a crucial element for businesses looking to stay competitive. This comprehensive guide will explore the key aspects and provide actionable insights.\n\n## Key Benefits\n\n1. **Enhanced Efficiency**: Streamline your processes and improve productivity\n2. **Cost Reduction**: Optimize resources and reduce operational costs\n3. **Better Results**: Achieve superior outcomes with data-driven approaches\n\n## Implementation Strategy\n\nTo successfully implement ${topic.toLowerCase()}, consider the following steps:\n\n- Conduct thorough research and analysis\n- Develop a comprehensive plan\n- Execute with precision and monitor results\n- Continuously optimize based on feedback\n\n## Conclusion\n\n${topic} represents a significant opportunity for growth and improvement. By following the strategies outlined above, you can position your business for long-term success.`,
        social: `🚀 Exciting news about ${topic}! \n\n✨ Key highlights:\n• Revolutionary approach to innovation\n• Proven results and success stories\n• Easy implementation process\n\n💡 Ready to transform your business? \n\n#${topic.replace(/\s+/g, '')} #Innovation #BusinessGrowth`,
        email: `Subject: Transform Your Business with ${topic}\n\nDear [Name],\n\nI hope this email finds you well. I wanted to share some exciting insights about ${topic} that could significantly impact your business.\n\n**Why This Matters:**\n• Industry-leading results\n• Proven track record\n• Easy implementation\n\n**Next Steps:**\n1. Schedule a consultation\n2. Review our case studies\n3. Start your transformation\n\nBest regards,\n[Your Name]`,
        ad: `🎯 ${topic} - The Game Changer You Need!\n\n✅ Proven Results\n✅ Easy Setup\n✅ 24/7 Support\n\nDon't miss out on this opportunity to revolutionize your business!\n\n👉 Get Started Today!`
      };
      setGeneratedContent(sampleContent[contentType] || '');
      setIsGenerating(false);
    }, 2000);
  };

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Writing',
      description: 'Advanced natural language processing creates high-quality, engaging content tailored to your needs',
      benefits: ['Natural language generation', 'Context awareness', 'Brand voice adaptation']
    },
    {
      icon: FileText,
      title: 'Multi-Format Support',
      description: 'Generate content for blogs, social media, emails, ads, and more with specialized templates',
      benefits: ['Blog posts', 'Social media content', 'Email campaigns', 'Ad copy']
    },
    {
      icon: Target,
      title: 'SEO Optimization',
      description: 'AI automatically optimizes content for search engines and target keywords',
      benefits: ['Keyword integration', 'Meta descriptions', 'Content structure', 'Readability scores']
    },
    {
      icon: Zap,
      title: 'Bulk Generation',
      description: 'Create multiple pieces of content simultaneously for efficient content marketing',
      benefits: ['Batch processing', 'Content variations', 'A/B testing', 'Campaign management']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for individual creators and small businesses',
      features: [
        'Up to 10,000 words per month',
        'Basic content types',
        'Standard templates',
        'Email support',
        'Basic SEO optimization'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for content teams and marketing agencies',
      features: [
        'Up to 50,000 words per month',
        'All content types',
        'Premium templates',
        'Priority support',
        'Advanced SEO features',
        'Team collaboration'
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
        'Custom content types',
        'White-label solution',
        '24/7 dedicated support',
        'API access',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save 80% Content Time',
      description: 'Generate high-quality content in minutes instead of hours'
    },
    {
      icon: TrendingUp,
      title: 'Increase Engagement by 150%',
      description: 'AI-optimized content drives better audience engagement'
    },
    {
      icon: Target,
      title: 'Perfect SEO Scores',
      description: 'Automatically optimized content ranks higher in search results'
    },
    {
      icon: Users,
      title: 'Scale Content Production',
      description: 'Create consistent, high-quality content at scale'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Content Generation - Zion Tech Group</title>
        <meta name="description" content="AI-powered content generation tool. Create high-quality blogs, social media posts, emails, and ads. Save 80% content time and increase engagement by 150%." />
        <meta name="keywords" content="ai content generation, content writing, blog writing, social media content, email marketing, content automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Content Generation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-powered content generation tool that creates high-quality blogs, social media posts, 
            emails, and ads. Save 80% content time and increase engagement by 150%.
          </p>
          
          {/* Live Content Generator */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 cyber-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Try Our AI Content Generator</h3>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {['blog', 'social', 'email', 'ad'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setContentType(type)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      contentType === type
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Enter your topic or keyword..."
                className="w-full p-4 bg-slate-800 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
              />
              <button
                onClick={handleContentGeneration}
                disabled={isGenerating || !topic.trim()}
                className="cyber-button disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? 'Generating Content...' : 'Generate AI Content'}
              </button>
            </div>
            
            {generatedContent && (
              <div className="mt-6 p-6 bg-slate-800/50 rounded-lg">
                <h4 className="text-lg font-bold text-white mb-4">Generated Content:</h4>
                <div className="bg-slate-900 p-4 rounded-lg">
                  <pre className="text-gray-300 whitespace-pre-wrap text-sm">{generatedContent}</pre>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors">
                    Copy Content
                  </button>
                  <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                    Edit Content
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
            Advanced AI Content Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our AI Content Generator?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cyber-card">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Choose Your Content Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 cyber-card relative ${
                plan.popular ? 'ring-2 ring-cyan-400' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
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
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan - AI Content Generation`}
                  className="w-full cyber-button text-center block"
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
            Join thousands of creators using our AI content generator to produce engaging content at scale.
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

export default AIContentGeneration;