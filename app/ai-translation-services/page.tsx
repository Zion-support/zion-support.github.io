import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const AITranslationServicesPage: React.FC = () => {
  const features = [
    {
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      title: '100+ Languages',
      description: 'Support for over 100 languages with native-level accuracy and cultural context.'
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-400" />,
      title: 'Real-time Translation',
      description: 'Instant translation for live conversations, meetings, and customer support.'
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      title: 'AI-Powered Context',
      description: 'Advanced AI understands context, tone, and cultural nuances for accurate translations.'
    },
    {
      icon: <FileText className="w-6 h-6 text-orange-400" />,
      title: 'Document Translation',
      description: 'Translate documents, websites, and content while preserving formatting and structure.'
    },
    {
      icon: <Mic className="w-6 h-6 text-pink-400" />,
      title: 'Voice Translation',
      description: 'Convert speech to text and translate in real-time with natural voice synthesis.'
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption for sensitive business communications.'
    }
  ]

  const useCases = [
    {
      title: 'Global Customer Support',
      description: 'Provide support in any language with instant translation and cultural adaptation.',
      icon: <Users className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Multilingual Content',
      description: 'Translate websites, apps, and marketing materials for global audiences.',
      icon: <FileText className="w-8 h-8 text-emerald-400" />
    },
    {
      title: 'International Meetings',
      description: 'Break down language barriers in real-time during video conferences and calls.',
      icon: <Globe className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'E-commerce Expansion',
      description: 'Expand to new markets with localized product descriptions and customer communications.',
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 50,000 words/month',
        '50+ languages',
        'Basic API access',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 500,000 words/month',
        '100+ languages',
        'Real-time translation',
        'Priority support',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited words',
        'All languages',
        'Custom AI training',
        'Dedicated support',
        'White-label options'
      ],
      popular: false
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Translation Services - Multilingual Communication | Zion Tech Group</title>
        <meta name="description" content="Break language barriers with AI-powered translation services. Real-time translation, document processing, and multilingual support for global businesses." />
        <meta name="keywords" content="AI translation, multilingual, language services, real-time translation, document translation, global communication" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-translation-services" />
      </Helmet>

      <div>
        </Globe>
        </Zap>
        </Brain>
        </FileText>
        </Mic>
        </Shield>
        </Users>
        </FileText>
        </Globe>
        </BarChart3>
        </meta>
        </meta>
        </link>
        </Globe>
        </ArrowRight>
        </ArrowRight>
        </CheckCircle>
        </div>
        </div>
        </div>
        </ArrowRight>
        </ArrowRight>
        {/* Hero Section */}
        <section>
          <div>
          <div>
            <div>
              <Globe className="w-4 h-4" />
              <span>AI Translation Services</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Break Language <span>Barriers</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Connect with global audiences using AI-powered translation services. 
              Real-time translation, document processing, and multilingual support for businesses worldwide.
            </p>
            
            <div>
              <Link;
to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link;
to="/demo" 
                className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section>
          <div>
          <div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span>Translation Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Everything you need to communicate effectively across languages and cultures.
              </p>
            </div>
            
            <div>
              {features.map((feature, index) => (
                <div>
                  <div>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section>
          <div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect for <span>Every Business</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Discover how AI translation can transform your business operations and global reach.
              </p>
            </div>
            
            <div>
              {useCases.map((useCase, index) => (
                <div>
                  <div>
                    <div>
                      {useCase.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section>
          <div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple <span>Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your translation needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div>
              {pricingPlans.map((plan, index) => (
                <div>
                  {plan.popular && (
                    <div>
                      <div>
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div>
                      <span>{plan.price}</span>
                      <span>{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link;
to="/contact" 
                    className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div>
          <div>
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Go <span>Global?</span>
              </h2>
              
              <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                Break down language barriers and connect with global audiences. 
                Start your free trial today and experience the power of AI translation.
              </p>
              
              <div>
                <Link;
to="/contact" 
                  className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link;
to="/pricing" 
                  className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                >
                  <span>View All Plans</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AITranslationServicesPage