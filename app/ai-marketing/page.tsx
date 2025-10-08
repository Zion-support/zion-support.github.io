import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, ArrowRight, ExternalLink, Target, BarChart3, Megaphone, Brain } from 'lucide-react';

const AIMarketingPage: React.FC = () => {
  const aiMarketingServices = [
    {
      title: 'AI-Powered Ad Optimization',
      description: 'Automated ad campaign optimization using machine learning to maximize ROI and reduce costs.',
      icon: '🎯',
      price: '$299/month',
      features: [
        'Real-time bid optimization',
        'Audience targeting refinement',
        'Ad creative A/B testing',
        'Cross-platform campaign management',
        'Performance analytics and insights',
        'Automated budget allocation'
      ],
      benefits: [
        'Increase ROAS by 150%',
        'Reduce cost per acquisition by 40%',
        'Improve click-through rates by 60%',
        'Automate 80% of campaign management'
      ],
      marketPrice: '$500-1,500/month',
      category: 'Ad Optimization',
      technologies: ['Google Ads API', 'Facebook Marketing API', 'Machine Learning', 'Python', 'React'],
      link: 'https://ziontechgroup.com/ai-ad-optimization',
      popular: true
    },
    {
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, emails, and marketing materials.',
      icon: '✍️',
      price: '$199/month',
      features: [
        'Blog post and article generation',
        'Social media content creation',
        'Email marketing automation',
        'Product description generation',
        'SEO-optimized content',
        'Multi-language content support'
      ],
      benefits: [
        'Create content 20x faster',
        'Maintain consistent brand voice',
        'Improve SEO rankings by 50%',
        'Reduce content creation costs by 70%'
      ],
      marketPrice: '$300-1,000/month',
      category: 'Content Creation',
      technologies: ['GPT-4', 'Claude', 'BERT', 'NLP', 'React', 'Node.js'],
      link: 'https://ziontechgroup.com/ai-content-generation'
    },
    {
      title: 'AI Social Media Management',
      description: 'Intelligent social media posting, engagement, and community management.',
      icon: '📱',
      price: '$249/month',
      features: [
        'Optimal posting time prediction',
        'Hashtag optimization',
        'Engagement rate optimization',
        'Content calendar automation',
        'Sentiment analysis',
        'Influencer identification'
      ],
      benefits: [
        'Increase engagement by 45%',
        'Save 20 hours/week on social media',
        'Grow followers organically',
        'Improve brand sentiment'
      ],
      marketPrice: '$400-1,200/month',
      category: 'Social Media',
      technologies: ['Social Media APIs', 'Machine Learning', 'React', 'Node.js', 'MongoDB'],
      link: 'https://ziontechgroup.com/ai-social-media-management',
      popular: true
    },
    {
      title: 'AI Email Marketing Automation',
      description: 'Intelligent email campaigns with personalization, segmentation, and optimization.',
      icon: '📧',
      price: '$179/month',
      features: [
        'Smart segmentation and targeting',
        'Personalized content generation',
        'Send time optimization',
        'A/B testing automation',
        'Behavioral trigger campaigns',
        'Performance analytics'
      ],
      benefits: [
        'Increase open rates by 35%',
        'Boost conversion rates by 50%',
        'Reduce unsubscribe rates by 30%',
        'Automate 90% of email campaigns'
      ],
      marketPrice: '$300-800/month',
      category: 'Email Marketing',
      technologies: ['SendGrid', 'Mailchimp API', 'Machine Learning', 'React', 'Node.js'],
      link: 'https://ziontechgroup.com/ai-email-marketing'
    },
    {
      title: 'AI Customer Segmentation',
      description: 'Advanced customer segmentation using machine learning for targeted marketing.',
      icon: '👥',
      price: '$399/month',
      features: [
        'Behavioral pattern analysis',
        'Predictive customer modeling',
        'Lifetime value prediction',
        'Churn risk assessment',
        'Personalized recommendations',
        'Real-time segmentation updates'
      ],
      benefits: [
        'Improve targeting accuracy by 60%',
        'Increase customer lifetime value by 40%',
        'Reduce churn by 25%',
        'Optimize marketing spend allocation'
      ],
      marketPrice: '$600-2,000/month',
      category: 'Customer Analytics',
      technologies: ['Machine Learning', 'Python', 'TensorFlow', 'PostgreSQL', 'React'],
      link: 'https://ziontechgroup.com/ai-customer-segmentation'
    },
    {
      title: 'AI Lead Scoring & Qualification',
      description: 'Intelligent lead scoring and qualification for sales teams.',
      icon: '🎯',
      price: '$349/month',
      features: [
        'Behavioral lead scoring',
        'Lead qualification automation',
        'Sales opportunity prediction',
        'Lead nurturing optimization',
        'CRM integration',
        'Sales forecasting'
      ],
      benefits: [
        'Increase conversion rates by 40%',
        'Focus on high-value leads',
        'Reduce sales cycle by 30%',
        'Improve sales team efficiency'
      ],
      marketPrice: '$500-1,500/month',
      category: 'Lead Management',
      technologies: ['Machine Learning', 'CRM APIs', 'Python', 'React', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/ai-lead-scoring'
    },
    {
      title: 'AI Marketing Analytics',
      description: 'Advanced marketing analytics with predictive insights and recommendations.',
      icon: '📊',
      price: '$299/month',
      features: [
        'Multi-channel attribution modeling',
        'Predictive analytics',
        'ROI optimization recommendations',
        'Customer journey analysis',
        'Real-time performance monitoring',
        'Custom dashboard creation'
      ],
      benefits: [
        'Improve marketing ROI by 80%',
        'Identify high-value channels',
        'Optimize budget allocation',
        'Predict campaign performance'
      ],
      marketPrice: '$500-1,800/month',
      category: 'Analytics',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/ai-marketing-analytics'
    },
    {
      title: 'AI Influencer Marketing',
      description: 'Intelligent influencer identification, outreach, and campaign management.',
      icon: '🌟',
      price: '$449/month',
      features: [
        'Influencer discovery and vetting',
        'Audience overlap analysis',
        'Campaign performance prediction',
        'Automated outreach',
        'Content collaboration tools',
        'ROI tracking and reporting'
      ],
      benefits: [
        'Find perfect influencer matches',
        'Increase campaign success by 70%',
        'Reduce manual outreach by 90%',
        'Improve influencer ROI by 60%'
      ],
      marketPrice: '$700-2,500/month',
      category: 'Influencer Marketing',
      technologies: ['Social Media APIs', 'Machine Learning', 'NLP', 'React', 'Node.js'],
      link: 'https://ziontechgroup.com/ai-influencer-marketing'
    },
    {
      title: 'AI Voice & Video Marketing',
      description: 'AI-powered voice and video content creation for marketing campaigns.',
      icon: '🎥',
      price: '$599/month',
      features: [
        'AI voice generation',
        'Video content creation',
        'Automated video editing',
        'Voice-over generation',
        'Multi-language support',
        'Brand voice consistency'
      ],
      benefits: [
        'Create video content 10x faster',
        'Reduce production costs by 80%',
        'Scale content creation',
        'Maintain brand consistency'
      ],
      marketPrice: '$1,000-3,000/month',
      category: 'Video Marketing',
      technologies: ['OpenAI', 'Video APIs', 'Machine Learning', 'React', 'Node.js'],
      link: 'https://ziontechgroup.com/ai-video-marketing'
    },
    {
      title: 'AI Marketing Automation Platform',
      description: 'Comprehensive marketing automation with AI-powered decision making.',
      icon: '🤖',
      price: '$799/month',
      features: [
        'End-to-end campaign automation',
        'Cross-channel orchestration',
        'Predictive customer journey mapping',
        'Dynamic content personalization',
        'Real-time optimization',
        'Advanced analytics and reporting'
      ],
      benefits: [
        'Automate 95% of marketing tasks',
        'Increase revenue by 200%',
        'Reduce marketing costs by 50%',
        'Improve customer experience'
      ],
      marketPrice: '$1,500-5,000/month',
      category: 'Marketing Automation',
      technologies: ['Machine Learning', 'Workflow Engines', 'APIs', 'React', 'Node.js'],
      link: 'https://ziontechgroup.com/ai-marketing-automation',
      popular: true
    }
  ];

  const categories = [
    'All Services',
    'Ad Optimization',
    'Content Creation',
    'Social Media',
    'Email Marketing',
    'Customer Analytics',
    'Lead Management',
    'Analytics',
    'Influencer Marketing',
    'Video Marketing',
    'Marketing Automation'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All Services');

  const filteredServices = selectedCategory === 'All Services' 
    ? aiMarketingServices 
    : aiMarketingServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Marketing Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered marketing automation, ad optimization, and content generation. Transform your marketing with cutting-edge artificial intelligence." />
        <meta name="keywords" content="ai marketing, marketing automation, ad optimization, content generation, social media ai, email marketing ai" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
              AI Marketing Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pink-100 max-w-3xl mx-auto">
              Revolutionize your marketing with AI-powered automation, optimization, and content generation. 
              Transform your campaigns and achieve unprecedented results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300 hover:scale-105"
              >
                ✉️ Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-pink-600 text-white shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {selectedCategory} Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Choose from our comprehensive range of AI marketing services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div 
                key={index} 
                className={`cyber-card p-6 hover:bg-pink-400/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative ${
                  service.popular ? 'ring-2 ring-pink-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-pink-400 text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-pink-400">{service.price}</span>
                  <span className="text-sm text-gray-400 ml-2 line-through">{service.marketPrice}</span>
                </div>
                
                <div className="mb-4">
                  <span className="text-xs text-pink-300 bg-pink-900/30 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-xs text-pink-300">
                        ✓ {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col gap-2">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors inline-flex items-center justify-center"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Marketing Capabilities */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Marketing Capabilities
            </h2>
            <p className="text-xl text-gray-300">
              Cutting-edge AI technology powering your marketing success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-pink-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Precision Targeting</h3>
              <p className="text-gray-300">AI-powered audience segmentation and targeting optimization</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Predictive Analytics</h3>
              <p className="text-gray-300">Forecast campaign performance and optimize in real-time</p>
            </div>
            
            <div className="text-center">
              <div className="bg-cyan-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Megaphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Content Generation</h3>
              <p className="text-gray-300">Automated content creation for all marketing channels</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Smart Automation</h3>
              <p className="text-gray-300">Intelligent campaign automation and optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300">
              Our AI marketing solutions deliver measurable business impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">200%</div>
              <div className="text-gray-300">Average ROI Increase</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">60%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">150%</div>
              <div className="text-gray-300">Conversion Rate Boost</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">95%</div>
              <div className="text-gray-300">Campaign Automation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Marketing with AI?
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            Contact us today for a free AI marketing consultation and custom solution recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-pink-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🕒 24/7 Support Available</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIMarketingPage;