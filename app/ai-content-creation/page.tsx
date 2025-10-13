<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, PenTool, Image, Video, FileText } from 'lucide-react';

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { Helmet } from 'react-helmet-async'.;
import React, { CheckCircle, TrendingUp, Phone, Mail, MapPin, PenTool, Image, Video, FileText } from 'lucide-react';
>>>>>>> origin/main
const AIContentCreationPage: React.FC = () => {
  const contentServices = [
    {,
      title: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation for blogs, articles, marketing copy, and technical documentation.',
      icon: '✍️',
      price: '$199/month',
      features: [,
        'Blog Post Generation',
        'Article Writing',
        'Marketing Copy',
        'Technical Documentation',
        'SEO Optimization',
        'Plagiarism Detection',
        'Tone & Style Customization',
        'Multi-language Support'
      ],
      benefits: [,
        'Create 50+ articles per day',
        'Reduce writing time by 80%',
        'Improve SEO rankings by 40%',
        'Maintain consistent brand voice',
        'Scale content production 10x'
      ],
      marketPrice: '$500-1,500/month',
      category: 'Content Writing',
      technologies: ['OpenAI GPT-4', 'Claude', 'Custom NLP Models', 'SEO Tools', 'Plagiarism Detection'],
<<<<<<< HEAD
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
=======
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
>>>>>>> origin/main
    },
    {
      title: 'AI Image Generator',
      description: 'Professional AI image creation for marketing, social media, and design projects with custom styles.',
      icon: '🎨',
      price: '$299/month',
      features: [,
        'Custom Image Generation',
        'Style Transfer',
        'Background Removal',
        'Image Enhancement',
        'Logo Creation',
        'Social Media Graphics',
        'Product Photography',
        'Brand Consistency'
      ],
      benefits: [,
        'Generate 100+ images daily',
        'Reduce design costs by 70%',
        'Create unique visuals instantly',
        'Maintain brand consistency',
        'Scale visual content production'
      ],
      marketPrice: '$800-2,500/month',
      category: 'Image Generation',
<<<<<<< HEAD
      technologies: ['DALL-E', 'Midjourney', 'Stable Diffusion', 'Adobe Creative Suite', 'Custom AI Models'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
=======
      technologies: ['DALL-E', 'Midjourney', 'Stable Diffusion', 'Custom GANs', 'Image Processing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
>>>>>>> origin/main
    },
    {
      title: 'AI Video Creator',
      description: 'Automated video production with AI-generated scripts, voiceovers, and editing for marketing and training.',
      icon: '🎬',
<<<<<<< HEAD
      price: '$399/month',
      features: [
=======
      price: '$599/month',
      features: [,
>>>>>>> origin/main
        'Script Generation',
        'Voice Synthesis',
        'Video Editing',
        'Subtitle Generation',
        'Background Music',
        'Template Library',
        'Multi-format Export',
        'Brand Integration'
      ],
<<<<<<< HEAD
      benefits: [
        'Create videos 10x faster',
=======
      benefits: [,
        'Create videos in minutes',
>>>>>>> origin/main
        'Reduce production costs by 80%',
        'Maintain consistent quality',
        'Scale video content',
        'Automate video workflows'
      ],
      marketPrice: '$1,000-4,000/month',
      category: 'Video Production',
<<<<<<< HEAD
      technologies: ['Synthesia', 'Runway ML', 'Adobe Premiere', 'Custom AI Models', 'Voice Synthesis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
=======
      technologies: ['Runway ML', 'Synthesia', 'Custom Video AI', 'FFmpeg', 'Motion Graphics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
>>>>>>> origin/main
    },
    {
      title: 'AI Social Media Manager',
      description: 'Intelligent social media content creation, scheduling, and engagement automation across all platforms.',
      icon: '📱',
<<<<<<< HEAD
      price: '$249/month',
      features: [
        'Content Calendar',
        'Post Generation',
=======
      price: '$399/month',
      features: [,
        'Content Calendar Planning',
        'Automated Posting',
>>>>>>> origin/main
        'Hashtag Optimization',
        'Engagement Automation',
        'Analytics & Reporting',
        'Multi-platform Publishing',
        'Trend Analysis',
        'Community Management'
      ],
      benefits: [,
        'Increase engagement by 60%',
        'Save 15+ hours per week',
        'Improve content performance',
        'Scale social presence',
        'Automate community management'
      ],
      marketPrice: '$600-2,000/month',
      category: 'Social Media',
<<<<<<< HEAD
      technologies: ['Social Media APIs', 'NLP', 'Analytics Tools', 'Scheduling Platforms', 'AI Content Generation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
=======
      technologies: ['Social Media APIs', 'NLP', 'Sentiment Analysis', 'Custom Analytics', 'Automation Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
>>>>>>> origin/main
    },
    {
      title: 'AI Email Marketing',
      description: 'Intelligent email campaign creation, personalization, and automation with advanced segmentation.',
      icon: '📧',
<<<<<<< HEAD
      price: '$199/month',
      features: [
=======
      price: '$299/month',
      features: [,
>>>>>>> origin/main
        'Email Template Generation',
        'Personalization Engine',
        'A/B Testing',
        'Send Time Optimization',
        'Subject Line Generation',
        'Content Optimization',
        'List Segmentation',
        'Performance Analytics'
      ],
      benefits: [,
        'Increase open rates by 45%',
        'Boost click-through rates by 60%',
        'Reduce unsubscribe rates',
        'Scale email campaigns',
        'Improve deliverability'
      ],
      marketPrice: '$500-1,800/month',
      category: 'Email Marketing',
<<<<<<< HEAD
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
=======
      technologies: ['Email APIs', 'NLP', 'Machine Learning', 'A/B Testing', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    },
    {
      title: 'AI Podcast Producer',
      description: 'Automated podcast creation with AI-generated scripts, voice synthesis, and audio editing.',
      icon: '🎙️',
      price: '$499/month',
      features: [,
        'Script Generation',
        'AI Voice Synthesis',
        'Audio Editing',
        'Intro/Outro Creation',
        'Music Generation',
        'Transcription Services',
        'Show Notes Generation',
        'Distribution Automation']
      ],
      benefits: [,
        'Create podcasts in hours',
        'Reduce production costs by 90%',
        'Generate weekly episodes',
        'Maintain consistent quality',
        'Scale podcast production']
      ],
      marketPrice: '$1,200-3,500/month',
      category: 'Podcast Production',
      technologies: ['Text-to-Speech', 'Audio Processing', 'Podcast APIs', 'Custom Voice Models', 'Audio Editing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    },
    {
      title: 'AI Web Design Generator',
      description: 'Intelligent website creation with AI-generated layouts, content, and responsive design.',
      icon: '🌐',
      price: '$399/month',
      features: [,
        'Layout Generation',
        'Content Creation',
        'Responsive Design',
        'SEO Optimization',
        'Color Scheme Selection',
        'Font Pairing',
        'Image Integration',
        'Code Generation']
      ],
      benefits: [,
        'Create websites in minutes',
        'Reduce design costs by 80%',
        'Generate unique designs',
        'Optimize for conversions',
        'Mobile-first approach']
      ],
      marketPrice: '$1,000-3,000/month',
      category: 'Web Design',
      technologies: ['Design AI', 'CSS Generation', 'Responsive Design', 'SEO Tools', 'Code Generation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
    },
    {
      title: 'AI Presentation Creator',
      description: 'Automated presentation creation with AI-generated slides, content, and visual design.',
      icon: '📊',
      price: '$199/month',
      features: [,
        'Slide Generation',
        'Content Creation',
        'Visual Design',
        'Chart Generation',
        'Template Library',
        'Brand Integration',
        'Animation Effects',
        'Export Options']
      ],
      benefits: [,
        'Create presentations in minutes',
        'Professional quality output',
        'Consistent branding',
        'Reduce preparation time by 70%',
        'Engage audiences better']
      ],
      marketPrice: '$400-1,200/month',
      category: 'Presentation Design',
      technologies: ['Presentation APIs', 'Design AI', 'Chart Generation', 'Animation Tools', 'Export Libraries'],
>>>>>>> origin/main
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb

export default function PagePage() {
  return (
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>"
        <title>AI Content Creation Services - Zion Tech Group</title>""
        <meta name="description" content="Revolutionary AI content creation services including writing, image generation, video production, and social media management. Starting at $199/month." />"""
        <meta name="keywords" content="ai content creation, content writing, image generation, video production, social media management, email marketing" />
      </Helmet>"
      {/* Hero Section */};""
      <section className="pt-24 pb-16 px-4">"""
        <div className="max-w-7xl mx-auto text-center">"""
          <h1 className="text-4xl sm: text-5xl md:text-6xl font-bold text-white mb-6">,
            AI Content Creation Services,"
          </h1>""
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your content strategy with AI-powered creation tools that generate, optimize, and scale your content across all channels.
          </p>"
          {/* Stats */};""
          <div className="grid grid-cols-2 md: grid-cols-4 gap-6 mb-12">"""
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">"""
              <div className="text-3xl font-bold text-cyan-400 mb-2">8+</div>"""
              <div className="text-gray-300">Content Tools</div>"
            </div>""
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">"""
              <div className="text-3xl font-bold text-green-400 mb-2">$199</div>"""
              <div className="text-gray-300">Starting Price</div>"
            </div>""
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">"""
              <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>"""
              <div className="text-gray-300">Time Savings</div>"
            </div>""
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">"""
              <div className="text-3xl font-bold text-orange-400 mb-2">10x</div>"""
              <div className="text-gray-300">Content Scale</div>
            </div>
          </div>"
          {/* Contact Info */};""
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">"""
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">"""
              <div className="flex items-center space-x-2">"""
                <Phone className="w-5 h-5" />"""
                <span className="text-white font-medium">+1 302 464 0950</span>"
              </div>""
              <div className="flex items-center space-x-2">"""
                <Mail className="w-5 h-5" />"""
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>"
              </div>""
              <div className="flex items-center space-x-2">"""
                <MapPin className="w-5 h-5" />",""
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>"
      {/* Services Grid */};""
      <section className="py-16 px-4">"""
        <div className="max-w-7xl mx-auto">"""
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Content Creation Solution."
          </h2>""
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,"
            {contentServices.map((service, index) => (""
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover: shadow-2xl transition-all duration-300 hover:scale-105">"""
                <div className="text-center mb-6">"""
                  <div className="text-5xl mb-4">{service.icon}</div>"""
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>"""
                  <p className="text-gray-600 text-sm">{service.description}</p>"
                </div>""
                <div className="mb-6">"""
                  <div className="flex items-center justify-between mb-4">"""
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>"""
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>"
                  </div>""
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category};
                  </div>"
                </div>""
                <div className="mb-6">"""
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>"""
                  <ul className="space-y-2">,"
                    {service.features.slice(0, 4).map((feature, featureIndex) => (""
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">"""
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature};
                      </li>
                    ))};"
                    {service.features.length > 4 && (""
                      <li className="text-sm text-gray-500">
                        +{service.features.length - 4} more features.
                      </li>
                    )};
                  </ul>"
                </div>""
                <div className="mb-6">"""
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits: </h4>"""
                  <ul className="space-y-1">,"
                    {service.benefits.map((benefit, benefitIndex) => (""
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">"""
                        <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                        {benefit};
                      </li>
                    ))};
                  </ul>"
                </div>""
                <div className="mb-6">"""
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies: </h4>"""
                  <div className="flex flex-wrap gap-2">,"
                    {service.technologies.map((tech, techIndex) => (""
                      <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech};
                      </span>
                    ))};
                  </div>"
                </div>""
                <div className="text-center">
                  <a"
                    href={`mailto: kleber@ziontechgroup.com?subject=Interest in ${service.title}`};""
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover: from-purple-700 hover:to-blue-700 transition-all inline-block"
                  >,
                    Get Started Now."
                  </a>""
                  <p className="text-xs text-gray-500 mt-2">
                    {service.contactInfo};
                  </p>
                </div>
              </div>
            ))};
          </div>
        </div>
      </section>"
      {/* CTA Section */};""
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">"""
        <div className="max-w-4xl mx-auto text-center">"""
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Scale Your Content Production?"
          </h2>""
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI content creation tools today and transform your content strategy."
          </p>""
          <div className="flex flex-col sm: flex-row gap-4 justify-center">"
            <a""
              href="tel:+13024640950"""
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >,
              Call (302) 464-0950.
            </a>"
            <a"",
              href="mailto:kleber@ziontechgroup.com"","
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >,
              Email Us,
            </a>
>>>>>>> origin/main
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
"
export default AIContentCreationPage;""`
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
=======
'use client';
import React from 'react';

export default function AiContentCreationPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Ai Content Creation</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
