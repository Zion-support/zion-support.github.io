import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, PenTool, Image, Video, FileText } from 'lucide-react';

const AIContentCreationPage: React.FC = () => {
  const contentServices = [
    {
      title: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation for blogs, articles, marketing copy, and technical documentation.',
      icon: '✍️',
      price: '$199/month',
      features: [
        'Blog Post Generation',
        'Article Writing',
        'Marketing Copy',
        'Technical Documentation',
        'SEO Optimization',
        'Plagiarism Detection',
        'Tone & Style Customization',
        'Multi-language Support'
      ],
      benefits: [
        'Create 50+ articles per day',
        'Reduce writing time by 80%',
        'Improve SEO rankings by 40%',
        'Maintain consistent brand voice',
        'Scale content production 10x'
      ],
      marketPrice: '$500-1,500/month',
      category: 'Content Writing',
      technologies: ['OpenAI GPT-4', 'Claude', 'Custom NLP Models', 'SEO Tools', 'Plagiarism Detection'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Image Generator',
      description: 'Professional AI image creation for marketing, social media, and design projects with custom styles.',
      icon: '🎨',
      price: '$299/month',
      features: [
        'Custom Image Generation',
        'Style Transfer',
        'Background Removal',
        'Image Enhancement',
        'Logo Creation',
        'Social Media Graphics',
        'Product Photography',
        'Brand Consistency'
      ],
      benefits: [
        'Generate 100+ images daily',
        'Reduce design costs by 70%',
        'Create unique visuals instantly',
        'Maintain brand consistency',
        'Scale visual content production'
      ],
      marketPrice: '$800-2,500/month',
      category: 'Image Generation',
      technologies: ['DALL-E', 'Midjourney', 'Stable Diffusion', 'Adobe Creative Suite', 'Custom AI Models'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Video Creator',
      description: 'Automated video production with AI-generated scripts, voiceovers, and editing for marketing and training.',
      icon: '🎬',
      price: '$399/month',
      features: [
        'Script Generation',
        'Voice Synthesis',
        'Video Editing',
        'Subtitle Generation',
        'Background Music',
        'Template Library',
        'Multi-format Export',
        'Brand Integration'
      ],
      benefits: [
        'Create videos 10x faster',
        'Reduce production costs by 80%',
        'Maintain consistent quality',
        'Scale video content',
        'Automate video workflows'
      ],
      marketPrice: '$1,000-4,000/month',
      category: 'Video Production',
      technologies: ['Synthesia', 'Runway ML', 'Adobe Premiere', 'Custom AI Models', 'Voice Synthesis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Intelligent social media content creation, scheduling, and engagement automation across all platforms.',
      icon: '📱',
      price: '$249/month',
      features: [
        'Content Calendar',
        'Post Generation',
        'Hashtag Optimization',
        'Engagement Automation',
        'Analytics & Reporting',
        'Multi-platform Publishing',
        'Trend Analysis',
        'Community Management'
      ],
      benefits: [
        'Increase engagement by 60%',
        'Save 15+ hours per week',
        'Improve content performance',
        'Scale social presence',
        'Automate community management'
      ],
      marketPrice: '$600-2,000/month',
      category: 'Social Media',
      technologies: ['Social Media APIs', 'NLP', 'Analytics Tools', 'Scheduling Platforms', 'AI Content Generation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Email Marketing',
      description: 'Intelligent email campaign creation, personalization, and automation with advanced segmentation.',
      icon: '📧',
      price: '$199/month',
      features: [
        'Email Template Generation',
        'Personalization Engine',
        'A/B Testing',
        'Send Time Optimization',
        'Subject Line Generation',
        'Content Optimization',
        'List Segmentation',
        'Performance Analytics'
      ],
      benefits: [
        'Increase open rates by 45%',
        'Boost click-through rates by 60%',
        'Reduce unsubscribe rates',
        'Scale email campaigns',
        'Improve deliverability'
      ],
      marketPrice: '$500-1,800/month',
      category: 'Email Marketing',
      technologies: ['Email Platforms', 'NLP', 'Machine Learning', 'Analytics', 'Personalization Engines'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI SEO Content Optimizer',
      description: 'Advanced SEO content optimization with keyword research, content analysis, and ranking improvement.',
      icon: '🔍',
      price: '$299/month',
      features: [
        'Keyword Research',
        'Content Analysis',
        'SEO Scoring',
        'Competitor Analysis',
        'Content Optimization',
        'Meta Tag Generation',
        'Internal Linking',
        'Performance Tracking'
      ],
      benefits: [
        'Improve rankings by 50%',
        'Increase organic traffic by 80%',
        'Optimize content automatically',
        'Scale SEO efforts',
        'Beat competitors'
      ],
      marketPrice: '$700-2,500/month',
      category: 'SEO Optimization',
      technologies: ['SEO APIs', 'NLP', 'Analytics Tools', 'Keyword Research', 'Content Analysis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Creation - Automated Content Generation | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI content creation services. Generate high-quality text, images, videos, and social media content with our advanced AI tools." />
        <meta name="keywords" content="AI content creation, content generation, AI writing, image generation, video creation, social media automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <PenTool className="w-6 h-6 text-purple-400 mr-2" />
                <span className="text-purple-400 text-sm font-medium">AI Content Creation</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Create Content at Scale
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your content strategy with AI-powered creation tools. 
                Generate high-quality text, images, videos, and social media content automatically.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                  Start Creating
                </button>
                <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105">
                  View Examples
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Content Creation Suite
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create, optimize, and distribute content across all channels.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentServices.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium">
                      {service.category}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-700/50">
                    <p className="text-xs text-gray-400 text-center mb-3">{service.contactInfo}</p>
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Scale Your Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using AI to create amazing content. 
              Start your content revolution today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                <Phone className="w-5 h-5 inline mr-2" />
                Call Now: +1 302 464 0950
              </button>
              <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105">
                <Mail className="w-5 h-5 inline mr-2" />
                Email Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIContentCreationPage;