import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Languages, Brain, FileText, Clock, Target, CheckCircle, Globe, Zap } from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer;

export default function AITranslationServicePage() {
  
  const features = [
    {
    icon: <Languages className=';w-6 h-6 text-blue-400"  / />,'
          title: '100+ Languages','
          description: 'Support for over 100 languages with high accuracy translation'
  }
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-400" />'
          title: 'AI-Powered','
          description: 'Advanced neural machine translation with context understanding'
  }
    },
    {
      icon: <FileText className="w-6 h-6 text-green-400" />'
          title: 'Document Translation','
          description: 'Translate documents while preserving original formatting'
  }
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-400" />'
          title: 'Real-time Translation','
          description: 'Instant translation for live conversations and content'
  }
    }
  ];

  const translationTypes = [
    {'
      category: 'Translation Types','
      items: ['Text Translation', 'Document Translation', 'Website Translation', 'Audio Translation', 'Video Subtitles', 'Live Translation']
    },
    {'
      category: 'Languages','
      items: ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Arabic', 'Portuguese', 'Russian', 'Italian']
    },
    {'
      category: 'Industries','
      items: ['Legal', 'Medical', 'Technical', 'Business', 'Marketing', 'E-commerce', 'Education', 'Entertainment']
    },
    {'
      category: 'Features','
      items: ['Context Awareness', 'Industry-Specific Models', 'Quality Assurance', 'Human Review', 'API Integration', 'Batch Processing']
    }
  ];

  const pricingPlans = [
    {'
      name: 'Basic','
      price: '$29','
      period: '/month','
          description: 'Perfect for individuals and small projects'
  },
      features: ['
        'Up to 100,000 words/month','
        '50+ languages','
        'Basic document translation','
        'Email support','
        'Standard accuracy'
      ]
    },
    {'
      name: 'Professional','
      price: '$99','
      period: '/month','
          description: 'Ideal for businesses and teams'
  },
      features: ['
        'Up to 500,000 words/month','
        '100+ languages','
        'All document types','
        'Priority support','
        'API access','
        'Custom glossaries'
      ],
      popular: true
    },
    {'
      name: 'Enterprise','
      price: '$299','
      period: '/month','
          description: 'For large organizations'
  },
      features: ['
        'Unlimited words','
        'All languages','
        'Custom models','
        '24/7 support','
        'Dedicated account manager','
        'SLA guarantee'
      ]
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-green-400" />'
          title: 'Industry-Specific Translation','
          description: 'Specialized translation models for legal, medical, technical, and business content'
  }
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />'
          title: 'Lightning Fast','
          description: 'Get translations in seconds with our optimized AI models'
  }
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-400" />'
          title: 'Global Reach','
          description: 'Expand your business to new markets with accurate translations'
  }
    }
  ];

  return (
    
    <div>
    <Helmet />
        <title>AI Translation Service - Zion Tech Group</title>
        <meta />
        <meta />
      </Helmet>

      <div />
        {/* Hero Section */}
        <section>
        <div>
    <ResponsiveContainer />
            <div>
    <h1>AI Translation Service
              </h1></h1>
              <p />
                Break language barriers with our advanced AI-powered translation service supporting 100+ languages.
              </p>
              <div>
    <FuturisticButton />
                  Start Translating
                </FuturisticButton>
                <FuturisticButton />
                  View Demo
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section />
          <ResponsiveContainer />
            <div>
    <h2 className="text-4xl font-bold text-white mb-4">Powerful Translation Features</h2>
              <p />
                Our AI translation service provides comprehensive language solutions for all your needs.
              </p>
            </div>
            <div />
              {features.map((feature, index) => (
                <FuturisticCard />
                  <div />
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Translation Types Section */}
        <section />
          <ResponsiveContainer />
            <div>
    <h2 className="text-4xl font-bold text-white mb-4">Translation Capabilities</h2>
              <p />
                Comprehensive translation services for every type of content and industry.
              </p>
            </div>
            <div />
              {translationTypes.map((type, index) => (
                <FuturisticCard />
                  <h3 className="text-xl font-semibold text-white mb-4">{type.category}</h3>
                  <ul />
                    {type.items.map((item, itemIndex) => (
                      <li />
                        <CheckCircle />
                        {item}
                      </li>
                    ))}
                  </ul>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Benefits Section */}
        <section />
          <ResponsiveContainer />
            <div>
    <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Translation Service?</h2>
              <p />
                Experience the benefits of AI-powered translation technology.
              </p>
            </div>
            <div />
              {benefits.map((benefit, index) => (
                <FuturisticCard />
                  <div />
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Pricing Section */}
        <section />
          <ResponsiveContainer />
            <div>
    <h2 className="text-4xl font-bold text-white mb-4">Pricing Plans</h2>
              <p />
                Choose the perfect plan for your translation needs.
              </p>
            </div>
            <div />
              {pricingPlans.map((plan, index) => ('
                <FuturisticCard />
                  {plan.popular && (
                    <div>
    <span />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div>
    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div />
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul />
                    {plan.features.map((feature, featureIndex) => (
                      <li />
                        <CheckCircle />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <FuturisticButton />
                    Get Started
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section />
          <ResponsiveContainer />
            <div>
    <h2 className="text-4xl font-bold text-white mb-4">Ready to Break Language Barriers?</h2>
              <p />
                Start translating your content today with our advanced AI translation service.
              </p>
              <div>
    <FuturisticButton />
                  Start Free Trial
                </FuturisticButton>
                <FuturisticButton />
                  Contact Sales
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

      </div>
    </div>
  );
}

'