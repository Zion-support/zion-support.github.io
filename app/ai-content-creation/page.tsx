import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PenTool, Image, Video, FileText, ArrowRight, CheckCircle, Star } from 'lucide-react';

const AiContentCreationPage: React.FC = () => {
  const contentSolutions = [
    {
      title: 'AI Content Writer',
      description: 'Professional AI-powered content creation for blogs, articles, marketing copy, and more.',
      icon: <PenTool className="w-6 h-6" />,
      features: [
        'Blog Post Generation',
        'Article Writing',
        'Marketing Copy',
        'SEO Optimization',
        'Plagiarism Detection',
        'Tone & Style Customization'
      ],
      benefits: [
        'Create 50+ articles per day',
        'Reduce writing time by 80%',
        'Improve SEO rankings by 40%',
        'Maintain consistent brand voice',
        'Scale content production 10x'
      ],
      price: '$500-1,500/month',
      category: 'Content Writing'
    },
    {
      title: 'AI Image Generator',
      description: 'Professional AI image creation for marketing, social media, and design projects.',
      icon: <Image className="w-6 h-6" />,
      features: [
        'Custom Image Generation',
        'Style Transfer',
        'Background Removal',
        'Image Enhancement',
        'Logo Creation',
        'Social Media Graphics'
      ],
      benefits: [
        'Generate 100+ images daily',
        'Professional quality output',
        'Multiple style options',
        'Fast turnaround time',
        'Cost-effective solution'
      ],
      price: '$299/month',
      category: 'Visual Content'
    },
    {
      title: 'AI Video Creator',
      description: 'Create engaging videos with AI-powered editing, voiceovers, and animations.',
      icon: <Video className="w-6 h-6" />,
      features: [
        'Video Generation',
        'Auto Voiceover',
        'Text-to-Video',
        'Animation Creation',
        'Video Editing',
        'Template Library'
      ],
      benefits: [
        'Create videos in minutes',
        'Professional voiceovers',
        'Multiple formats',
        'Easy customization',
        'High engagement rates'
      ],
      price: '$799/month',
      category: 'Video Content'
    },
    {
      title: 'AI Copy Generator',
      description: 'Generate compelling marketing copy, ads, and promotional content with AI.',
      icon: <FileText className="w-6 h-6" />,
      features: [
        'Ad Copy Generation',
        'Email Marketing',
        'Social Media Posts',
        'Product Descriptions',
        'Landing Page Copy',
        'Call-to-Action Optimization'
      ],
      benefits: [
        'Increase conversion rates',
        'A/B test variations',
        'Consistent messaging',
        'Time-saving automation',
        'ROI optimization'
      ],
      price: '$399/month',
      category: 'Marketing Copy'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Content Creation - Zion Tech Group</title>
        <meta name="description" content="Professional AI content creation solutions by Zion Tech Group. Generate high-quality content at scale." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Content Creation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your content strategy with AI-powered creation tools that generate high-quality, engaging content at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
            <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300">
              View Examples
            </button>
          </div>
        </div>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Content Creation Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI content creation tools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contentSolutions.map((solution, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {solution.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{solution.price}</div>
                      <div className="text-sm text-gray-400">{solution.category}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our Content Creation Tools?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive engagement and business growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <PenTool className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">High Quality</h3>
                <p className="text-gray-300">
                  Generate professional-quality content that matches your brand voice and style.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Image className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Multi-Format</h3>
                <p className="text-gray-300">
                  Create text, images, videos, and more with our comprehensive content creation suite.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">SEO Optimized</h3>
                <p className="text-gray-300">
                  All content is optimized for search engines to improve your online visibility.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Scalable</h3>
                <p className="text-gray-300">
                  Scale your content production to meet growing demands without quality compromise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start creating high-quality content at scale with our AI-powered tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AiContentCreationPage;