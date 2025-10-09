import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Shield, Clock, Users } from 'lucide-react';

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
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'AI-Powered Content Creation',
      description: 'Generate high-quality blog posts, articles, social media content, and marketing copy in seconds using advanced AI models.',
      benefits: ['10x faster content creation', 'SEO-optimized content', 'Multiple content formats', 'Brand voice consistency']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Multi-Language Support',
      description: 'Create content in 50+ languages with native-level quality and cultural adaptation.',
      benefits: ['Global reach', 'Cultural sensitivity', 'Local market adaptation', 'Translation accuracy']
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Real-Time Collaboration',
      description: 'Work with your team in real-time, with version control and collaborative editing features.',
      benefits: ['Team collaboration', 'Version control', 'Comment system', 'Approval workflows']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance with GDPR, CCPA, and SOC 2.',
      benefits: ['Data encryption', 'Compliance ready', 'Access controls', 'Audit trails']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>AI Content Generation Services | Zion Tech Group</title>
        <meta name="description" content="Transform your content strategy with our AI-powered content generation services. Create high-quality, SEO-optimized content at scale." />
      </Helmet>
      
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Content Generation Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your content strategy with AI-powered content creation that scales your business
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-2xl font-bold text-blue-600 mb-2">{service.price}</div>
              <div className="text-sm text-gray-500 mb-4">Market rate: {service.marketPrice}</div>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx}>• {benefit}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-sm text-gray-500">{service.contactInfo}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our AI Content Generation?</h2>
            <p className="text-xl text-gray-600">Advanced AI technology meets creative excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIContentGenerationPage;