import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Brain, Target } from 'lucide-react';

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
      icon: <Brain className="w-6 h-6" />,
      title: 'Intelligent Research Integration',
      description: 'AI automatically researches topics, finds relevant data, and incorporates insights into your content for maximum authority.',
      benefits: ['Automated research', 'Data-driven insights', 'Fact-checking', 'Source verification']
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'SEO Optimization',
      description: 'Built-in SEO optimization ensures your content ranks higher in search results and drives organic traffic.',
      benefits: ['Keyword optimization', 'Meta tag generation', 'Content structure', 'Performance tracking']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Manager',
      company: 'TechStart Inc',
      content: 'This AI content generator has revolutionized our content strategy. We went from 2 blog posts per week to 10, and our organic traffic increased by 200%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
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

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
                AI Content Generation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your content strategy with our advanced AI-powered content generation services. 
                Create high-quality, SEO-optimized content at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="bg-cyan-500 text-white py-4 px-8 rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
                >
                  Get Started Now
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-transparent border-2 border-cyan-500 text-cyan-500 py-4 px-8 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our AI Content Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered content generation services
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {contentServices.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-2xl border border-slate-600">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-400">Market Price: {service.marketPrice}</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700 font-medium">{service.contactInfo}</p>
                  </div>

                  <div className="flex gap-2">
                    <a 
                      href="tel:+13024640950"
                      className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center"
                    >
                      Call Now
                    </a>
                    <a 
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex-1 bg-cyan-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors text-center"
                    >
                      Email
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful AI Content Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our advanced AI technology delivers exceptional content generation capabilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-2xl border border-slate-600">
                  <div className="flex items-start space-x-4">
                    <div className="text-cyan-400 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results from real businesses using our AI content generation services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-2xl border border-slate-600">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our AI content generation services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-cyan-600 py-4 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Now
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white py-4 px-8 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIContentGenerationPage;