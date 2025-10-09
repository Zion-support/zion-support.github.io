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
        'No stock photo licensing fees'
      ],
      marketPrice: '$800-2,500/month',
      category: 'Image Generation',
      technologies: ['DALL-E', 'Midjourney', 'Stable Diffusion', 'Custom GANs', 'Image Processing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Video Creator',
      description: 'Automated video production with AI-generated content, voiceovers, and professional editing.',
      icon: '🎬',
      price: '$599/month',
      features: [
        'Script Generation',
        'AI Voiceovers',
        'Video Editing',
        'Motion Graphics',
        'Subtitle Generation',
        'Thumbnail Creation',
        'Social Media Optimization',
        'Multi-format Export'
      ],
      benefits: [
        'Create videos in minutes',
        'Reduce production costs by 80%',
        'Generate 20+ videos daily',
        'Professional quality output',
        'Scale video marketing'
      ],
      marketPrice: '$1,500-5,000/month',
      category: 'Video Production',
      technologies: ['Runway ML', 'Synthesia', 'Custom Video AI', 'FFmpeg', 'Motion Graphics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Intelligent social media content planning, posting, and engagement with automated responses.',
      icon: '📱',
      price: '$399/month',
      features: [
        'Content Calendar Planning',
        'Automated Posting',
        'Hashtag Optimization',
        'Engagement Analysis',
        'Trend Monitoring',
        'Influencer Identification',
        'Crisis Management',
        'Performance Analytics'
      ],
      benefits: [
        'Increase engagement by 60%',
        'Save 10+ hours weekly',
        'Optimize posting times',
        'Identify viral content',
        'Manage multiple platforms'
      ],
      marketPrice: '$800-2,000/month',
      category: 'Social Media',
      technologies: ['Social Media APIs', 'NLP', 'Sentiment Analysis', 'Custom Analytics', 'Automation Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Email Marketing Suite',
      description: 'Intelligent email campaign creation, personalization, and optimization with advanced analytics.',
      icon: '📧',
      price: '$299/month',
      features: [
        'Email Template Generation',
        'Subject Line Optimization',
        'Personalization Engine',
        'Send Time Optimization',
        'A/B Testing',
        'Deliverability Monitoring',
        'List Segmentation',
        'Performance Analytics'
      ],
      benefits: [
        'Increase open rates by 45%',
        'Boost click-through rates by 60%',
        'Reduce unsubscribe rates by 30%',
        'Automate personalization',
        'Optimize send times'
      ],
      marketPrice: '$600-1,800/month',
      category: 'Email Marketing',
      technologies: ['Email APIs', 'NLP', 'Machine Learning', 'A/B Testing', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Podcast Producer',
      description: 'Automated podcast creation with AI-generated scripts, voice synthesis, and audio editing.',
      icon: '🎙️',
      price: '$499/month',
      features: [
        'Script Generation',
        'AI Voice Synthesis',
        'Audio Editing',
        'Intro/Outro Creation',
        'Music Generation',
        'Transcription Services',
        'Show Notes Generation',
        'Distribution Automation'
      ],
      benefits: [
        'Create podcasts in hours',
        'Reduce production costs by 90%',
        'Generate weekly episodes',
        'Maintain consistent quality',
        'Scale podcast production'
      ],
      marketPrice: '$1,200-3,500/month',
      category: 'Podcast Production',
      technologies: ['Text-to-Speech', 'Audio Processing', 'Podcast APIs', 'Custom Voice Models', 'Audio Editing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Web Design Generator',
      description: 'Intelligent website creation with AI-generated layouts, content, and responsive design.',
      icon: '🌐',
      price: '$399/month',
      features: [
        'Layout Generation',
        'Content Creation',
        'Responsive Design',
        'SEO Optimization',
        'Color Scheme Selection',
        'Font Pairing',
        'Image Integration',
        'Code Generation'
      ],
      benefits: [
        'Create websites in minutes',
        'Reduce design costs by 80%',
        'Generate unique designs',
        'Optimize for conversions',
        'Mobile-first approach'
      ],
      marketPrice: '$1,000-3,000/month',
      category: 'Web Design',
      technologies: ['Design AI', 'CSS Generation', 'Responsive Design', 'SEO Tools', 'Code Generation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Presentation Creator',
      description: 'Automated presentation creation with AI-generated slides, content, and visual design.',
      icon: '📊',
      price: '$199/month',
      features: [
        'Slide Generation',
        'Content Creation',
        'Visual Design',
        'Chart Generation',
        'Template Library',
        'Brand Integration',
        'Animation Effects',
        'Export Options'
      ],
      benefits: [
        'Create presentations in minutes',
        'Professional quality output',
        'Consistent branding',
        'Reduce preparation time by 70%',
        'Engage audiences better'
      ],
      marketPrice: '$400-1,200/month',
      category: 'Presentation Design',
      technologies: ['Presentation APIs', 'Design AI', 'Chart Generation', 'Animation Tools', 'Export Libraries'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Content Creation Services - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI content creation services including writing, image generation, video production, and social media management. Starting at $199/month." />
        <meta name="keywords" content="ai content creation, content writing, image generation, video production, social media management, email marketing" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Content Creation Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your content strategy with AI-powered creation tools that generate, optimize, and scale your content across all channels.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">8+</div>
              <div className="text-gray-300">Content Tools</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$199</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>
              <div className="text-gray-300">Time Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">10x</div>
              <div className="text-gray-300">Content Scale</div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
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

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Content Creation Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                  >
                    Get Started Now
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    {service.contactInfo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Scale Your Content Production?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI content creation tools today and transform your content strategy.
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

export default AIContentCreationPage;