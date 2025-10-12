import React from 'react'
import {Image, Video, MessageSquare} from 'lucide-react'
import {Helmet} from 'react-helmet-async'
import {Link} from 'react-router-dom'

export default function AIContentGeneratorPage() {
  const features = [
    {
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      title: 'Blog Posts & Articles',
      description: 'Generate high-_quality blog posts and articles on any topic'
    },
    {
      icon: <Image className="w-6 h-6 text-green-500" />,
      title: 'Social Media Content',
      description: 'Create engaging posts for all social media platforms'
    },
    {
      icon: <Video className="w-6 h-6 text-purple-500" />,
      title: 'Video Scripts',
      description: 'Generate compelling video scripts and descriptions'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-orange-500" />,
      title: 'Marketing Copy',
      description: 'Create persuasive marketing materials and ad copy'
    }
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small businesses',
      features: ['10,000 words/month', 'Basic templates', 'Email support', 'Standard _quality'],
      popular: false;
    },
    {
      plan: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for content creators and agencies',
      features: ['50,000 words/month', 'Premium templates', 'Priority support', 'High _quality'],
      popular: true;
    },
    {
      plan: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: ['Unlimited words', 'Custom templates', '24/7 support', 'Premium _quality'],
      popular: false;
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50"></div>
      </Helmet>
        <title>AI Content Generator - Zion Tech Group</title>
        <meta name="description" content="Generate high-_quality content for blogs, social media, marketing materials, and more using advanced AI technology." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              AI Content Generator;
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Generate high-_quality content for blogs, social media, marketing materials, and more using advanced AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <Link;
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started;
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link;
                to="/ai-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                All AI Services;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-12 sm:mb-16"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You Can Create;
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Generate various types of content with our advanced AI technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"></div>
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"></div>
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-12 sm:mb-16"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing;
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your content creation needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"></div>
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-blue-500 relative' : ''}`}></div>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center mb-2"></div>
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link;
                  to="/contact"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  Get Started;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Generate Amazing Content?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Start creating high-_quality content with our AI-powered generator today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link;
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              <Brain className="w-5 h-5 mr-2" />
              Start Free Trial;
            </Link>
            <Link;
              to="/ai-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore All AI Services;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
