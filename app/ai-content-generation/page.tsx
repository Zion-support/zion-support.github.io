import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Brain, Target, BarChart, Clock, Users, TrendingUp, Globe, MessageSquare, Eye, Sparkles } from 'lucide-react';

const AIContentGenerationPage: React.FC = () => {
  const contentServices = [
    {
      title: 'AI Blog Content Generator Pro',
      description: 'Advanced AI-powered blog content creation with SEO optimization, keyword research, and brand voice consistency.',
      icon: '✍️',
      price: '$149/month',
      features: [
        'SEO-optimized content generation',
        'Keyword research and integration',
        'Brand voice consistency',
        'Multi-language support',
        'Content calendar automation',
        'Performance analytics'
      ],
      benefits: [
        'Create 50+ blog posts per month',
        'Increase organic traffic by 200%',
        'Save 40+ hours weekly',
        'Improve SEO rankings'
      ],
      marketPrice: '$300-600/month',
      technologies: ['OpenAI GPT-4', 'Claude', 'Custom Fine-tuned Models', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Social Media Content Suite',
      description: 'Comprehensive social media content creation with platform-specific optimization and engagement analytics.',
      icon: '📱',
      price: '$199/month',
      features: [
        'Platform-specific content (Instagram, LinkedIn, Twitter, TikTok)',
        'Visual content generation',
        'Hashtag optimization',
        'Engagement prediction',
        'Content scheduling',
        'Performance tracking'
      ],
      benefits: [
        'Increase engagement by 150%',
        'Grow followers organically',
        'Save 30+ hours weekly',
        'Improve brand awareness'
      ],
      marketPrice: '$400-800/month',
      technologies: ['DALL-E', 'Midjourney API', 'Social Media APIs', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Email Marketing Content Creator',
      description: 'Intelligent email content generation with personalization, A/B testing, and conversion optimization.',
      icon: '📧',
      price: '$129/month',
      features: [
        'Personalized email content',
        'Subject line optimization',
        'A/B testing automation',
        'Segmentation-based content',
        'Call-to-action optimization',
        'Performance analytics'
      ],
      benefits: [
        'Increase open rates by 45%',
        'Boost conversion by 60%',
        'Save 25+ hours weekly',
        'Improve email ROI'
      ],
      marketPrice: '$250-500/month',
      technologies: ['Machine Learning', 'Email APIs', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Video Script Generator Pro',
      description: 'Advanced video script creation with storyboarding, voice-over optimization, and platform-specific formatting.',
      icon: '🎬',
      price: '$179/month',
      features: [
        'Video script generation',
        'Storyboard creation',
        'Voice-over optimization',
        'Platform-specific formatting',
        'Hook and CTA optimization',
        'Engagement prediction'
      ],
      benefits: [
        'Create video content 10x faster',
        'Increase video engagement by 80%',
        'Save 35+ hours weekly',
        'Improve video performance'
      ],
      marketPrice: '$350-700/month',
      technologies: ['OpenAI GPT-4', 'Video APIs', 'React', 'Node.js', 'FFmpeg'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Product Description Generator',
      description: 'Intelligent product description creation with SEO optimization, persuasive copywriting, and conversion focus.',
      icon: '🛍️',
      price: '$99/month',
      features: [
        'SEO-optimized descriptions',
        'Persuasive copywriting',
        'Feature highlighting',
        'Benefit-focused content',
        'Multi-format output',
        'Conversion optimization'
      ],
      benefits: [
        'Increase product sales by 35%',
        'Improve SEO rankings',
        'Save 20+ hours weekly',
        'Boost conversion rates'
      ],
      marketPrice: '$200-400/month',
      technologies: ['NLP', 'E-commerce APIs', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Technical Documentation Creator',
      description: 'Automated technical documentation with API documentation, user guides, and developer resources.',
      icon: '📚',
      price: '$159/month',
      features: [
        'API documentation generation',
        'User guide creation',
        'Code example generation',
        'Interactive documentation',
        'Version control integration',
        'Multi-format export'
      ],
      benefits: [
        'Reduce documentation time by 70%',
        'Improve developer experience',
        'Keep docs always updated',
        'Reduce support tickets'
      ],
      marketPrice: '$300-600/month',
      technologies: ['OpenAPI', 'Swagger', 'React', 'Node.js', 'GitHub API'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Generation Services - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered content generation services for blogs, social media, emails, videos, and more. Transform your content strategy with cutting-edge AI technology." />
        <meta name="keywords" content="AI content generation, content creation, blog writing, social media content, email marketing, video scripts, content automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Content Generation Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Revolutionary AI-powered content creation for blogs, social media, emails, videos, and more. Scale your content production with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
                >
                  📞 +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  ✉️ Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI Content Generation?
              </h2>
              <p className="text-xl text-gray-600">
                Advanced AI technology combined with industry expertise to deliver exceptional content at scale
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered</h3>
                <p className="text-gray-600">State-of-the-art AI models for superior content quality</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">10x Faster</h3>
                <p className="text-gray-600">Create content 10x faster than traditional methods</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">SEO Optimized</h3>
                <p className="text-gray-600">Every piece of content is optimized for search engines</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">Average 200% increase in content performance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Content Generation Services
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive AI-powered content solutions for every business need
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                      <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-600 font-semibold">
                      Save up to 50% vs market rates
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700 font-medium">{service.contactInfo}</p>
                  </div>

                  <div className="flex gap-2">
                    <a 
                      href="tel:+13024640950"
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                    >
                      Call Now
                    </a>
                    <a 
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Scale Your Content Production?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our AI content experts for a free consultation and custom content strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-sm text-blue-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p className="mt-2">🌐 https://ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIContentGenerationPage;