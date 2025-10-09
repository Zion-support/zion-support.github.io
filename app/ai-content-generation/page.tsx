import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight } from 'lucide-react';

const AIContentGenerationPage: React.FC = () => {
  const contentServices = [
    {
      title: 'AI Blog Content Generator Pro',
      description: 'Advanced AI-powered blog content creation with SEO optimization, research integration, and brand voice consistency.',
      icon: '✍️',
      price: '$199/month',
      features: [
        'SEO-optimized content generation',
        'Research integration',
        'Brand voice consistency',
        'Multi-language support',
        'Content calendar automation',
        'Performance analytics'
      ],
      benefits: [
        'Create 10x more content',
        'Improve SEO rankings by 150%',
        'Save 40+ hours per week',
        'Increase organic traffic by 200%'
      ],
      marketPrice: '$500-1000/month',
      technologies: ['OpenAI GPT-4', 'Claude', 'Custom Fine-tuned Models', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Social Media Content Suite',
      description: 'Comprehensive social media content creation with platform-specific optimization, hashtag research, and engagement prediction.',
      icon: '📱',
      price: '$149/month',
      features: [
        'Platform-specific optimization',
        'Hashtag research automation',
        'Engagement prediction',
        'Visual content generation',
        'Posting schedule optimization',
        'Viral content analysis'
      ],
      benefits: [
        'Increase engagement by 300%',
        'Grow followers organically',
        'Save 25+ hours per week',
        'Improve brand awareness'
      ],
      marketPrice: '$300-600/month',
      technologies: ['OpenAI GPT-4', 'DALL-E', 'Instagram API', 'Twitter API', 'LinkedIn API'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Email Marketing Automation',
      description: 'Intelligent email marketing campaigns with personalized content, A/B testing, and automated segmentation.',
      icon: '📧',
      price: '$179/month',
      features: [
        'Personalized email content',
        'A/B testing automation',
        'Customer segmentation',
        'Send time optimization',
        'Subject line generation',
        'Performance tracking'
      ],
      benefits: [
        'Increase open rates by 250%',
        'Boost click-through rates by 180%',
        'Reduce unsubscribe rates by 60%',
        'Save 30+ hours per week'
      ],
      marketPrice: '$400-800/month',
      technologies: ['OpenAI GPT-4', 'Mailchimp API', 'SendGrid API', 'Custom ML Models'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Video Script Generator',
      description: 'Create compelling video scripts for YouTube, TikTok, Instagram Reels, and other platforms with AI optimization.',
      icon: '🎬',
      price: '$129/month',
      features: [
        'Platform-specific optimization',
        'Hook generation',
        'Call-to-action optimization',
        'Trending topic integration',
        'Script timing optimization',
        'Engagement prediction'
      ],
      benefits: [
        'Increase video views by 400%',
        'Improve engagement rates by 200%',
        'Save 20+ hours per week',
        'Boost subscriber growth'
      ],
      marketPrice: '$200-500/month',
      technologies: ['OpenAI GPT-4', 'YouTube API', 'TikTok API', 'Trend Analysis AI'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Product Description Generator',
      description: 'Generate compelling product descriptions that convert visitors into customers with AI-powered optimization.',
      icon: '🛍️',
      price: '$99/month',
      features: [
        'Conversion-optimized descriptions',
        'SEO keyword integration',
        'Feature highlighting',
        'Emotional trigger optimization',
        'A/B testing support',
        'Bulk generation'
      ],
      benefits: [
        'Increase conversion rates by 150%',
        'Reduce bounce rates by 40%',
        'Save 15+ hours per week',
        'Improve product visibility'
      ],
      marketPrice: '$150-400/month',
      technologies: ['OpenAI GPT-4', 'E-commerce APIs', 'Conversion AI', 'SEO Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Technical Documentation Generator',
      description: 'Create comprehensive technical documentation, API docs, and user guides with AI assistance.',
      icon: '📚',
      price: '$159/month',
      features: [
        'Code documentation generation',
        'API documentation automation',
        'User guide creation',
        'Technical writing optimization',
        'Multi-format support',
        'Version control integration'
      ],
      benefits: [
        'Reduce documentation time by 70%',
        'Improve developer experience',
        'Ensure consistency across docs',
        'Save 25+ hours per week'
      ],
      marketPrice: '$300-700/month',
      technologies: ['OpenAI GPT-4', 'GitHub API', 'Confluence API', 'Markdown Processing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Marketing Manager',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group\'s AI content generation has revolutionized our content strategy. We\'ve increased our content output by 500% while maintaining quality.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'The ROI is incredible. We\'re saving $15,000/month on content creation while producing better quality content than our previous agency.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'GlobalBrand',
      content: 'The multi-language support is game-changing. We can now create localized content for all our markets without hiring translators.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Generation Services - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered content generation services. Create high-quality, SEO-optimized content at scale with our advanced AI tools and expert team." />
        <meta name="keywords" content="AI content generation, content creation, blog writing, social media content, email marketing, video scripts" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Content Generation Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
                Transform your content strategy with AI-powered content generation that creates, optimizes, and scales your content production
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
                >
                  📞 +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  ✉️ Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Content Generation Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered content generation tools designed to scale your content production
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                  <div className="p-8">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-3xl font-bold text-purple-600">{service.price}</span>
                        <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                      </div>
                      <p className="text-sm text-green-600 font-semibold">Save up to 60% vs market price</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
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

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a 
                        href="tel:+13024640950"
                        className="flex-1 bg-purple-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                      >
                        Call Now
                      </a>
                      <a 
                        href="mailto:kleber@ziontechgroup.com"
                        className="flex-1 border-2 border-purple-600 text-purple-600 text-center py-3 px-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
                      >
                        Email Us
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join hundreds of satisfied clients who have transformed their content strategy with our AI solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Get started with our AI content generation services and see the difference in your content quality and production speed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center"
              >
                📞 Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                ✉️ Get Free Consultation
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIContentGenerationPage;