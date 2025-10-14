import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Languages } from 'lucide-react';
import { Brain } from 'lucide-react';
import { FileText } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Target } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Zap } from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
export default function AITranslationServicePage() {
  const features = [
    {
      icon: <Languages className="w-6 h-6 text-blue-400" />,
      title: '100+ Languages',
      description: 'Support for over 100 languages with high accuracy translation'
    }
    {
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      title: 'AI-Powered',
      description: 'Advanced neural machine translation with context understanding'
    }
    {
      icon: <FileText className="w-6 h-6 text-green-400" />,
      title: 'Document Translation',
      description: 'Translate documents while preserving original formatting'
    }
    {
      icon: <Clock className="w-6 h-6 text-orange-400" />,
      title: 'Real-time Translation',
      description: 'Instant translation for live conversations and content';
    };
  ];
  const translationTypes = [
    {
      category: 'Translation Types',
      items: ['Text Translation', 'Document Translation', 'Website Translation', 'Audio Translation', 'Video Subtitles', 'Live Translation']
    }
    {
      category: 'Languages',
      items: ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Arabic', 'Portuguese', 'Russian', 'Italian']
    }
    {
      category: 'Industries',
      items: ['Legal', 'Medical', 'Technical', 'Business', 'Marketing', 'E-commerce', 'Education', 'Entertainment']
    }
    {
      category: 'Features',
      items: ['Context Awareness', 'Industry-Specific Models', 'Quality Assurance', 'Human Review', 'API Integration', 'Batch Processing'];
    };
  ];
  const pricingPlans = [
    {
      name: 'Basic',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small projects',
      features: [,
        'Up to 100,000 words/month'
        '50+ languages'
        'Basic document translation'
        'Email support'
        'Standard accuracy'
      ]
    }
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for businesses and teams',
      features: [,
        'Up to 500,000 words/month'
        '100+ languages'
        'All document types'
        'Priority support'
        'API access'
        'Custom glossaries'
      ]
      popular: true
    }
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [,
        'Unlimited words'
        'All languages'
        'Custom models'
        '24/7 support'
        'Dedicated account manager'
        'SLA guarantee'
      ];
    };
  ];
  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-green-400" />,
      title: 'Industry-Specific Translation',
      description: 'Specialized translation models for legal, medical, technical, and business content'
    }
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: 'Lightning Fast',
      description: 'Get translations in seconds with our optimized AI models'
    }
    {
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      title: 'Global Reach',
      description: 'Expand your business to new markets with accurate translations';
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" /></div>
      <Helmet /></Helmet>
        <title>AI Translation Service - Zion Tech Group</title>
        <meta name="description" content="Professional AI-powered translation services supporting 100+ languages with industry-specific models and real-time translation." / /></meta>
        <meta name="keywords" content="AI translation, machine translation, document translation, multilingual, language services" / /></meta>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" /></div>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden" /></section>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" /></div>
          <ResponsiveContainer /></ResponsiveContainer>
            <div className="relative z-10 text-center" /></div>
              <h1 className="text-5 xl md: text-7 xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6" />,
                AI Translation Service
              </h1>
              <p className="text-xl md: text-2 xl text-gray-300 mb-8 max-w-4 xl mx-auto" />,
                Break language barriers with our advanced AI-powered translation service supporting 100+ languages.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center" />,
                <FuturisticButton className="bg-blue-600 hover: bg-blue-700" />,
                  Start Translating
                </FuturisticButton>
                <FuturisticButton variant="outline" /></FuturisticButton>
                  View Demo
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
        {/* Features Section */}
        <section className="py-20" /></section>
          <ResponsiveContainer /></ResponsiveContainer>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4 xl font-bold text-white mb-4">Powerful Translation Features</h2>
              <p className="text-xl text-gray-300 max-w-3 xl mx-auto" /></p>
                Our AI translation service provides comprehensive language solutions for all your needs.
              </p>
            </div>)
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8" />),
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="text-center" /></FuturisticCard>
                  <div className="mb-4 flex justify-center" /></div>
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
        <section className="py-20 bg-white/5" /></section>
          <ResponsiveContainer /></ResponsiveContainer>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4 xl font-bold text-white mb-4">Translation Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-3 xl mx-auto" /></p>
                Comprehensive translation services for every type of content and industry.
              </p>
            </div>
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8" />,
              {translationTypes.map((type, index) => (
                <FuturisticCard key={index} /></FuturisticCard>
                  <h3 className="text-xl font-semibold text-white mb-4">{type.category}</h3>
                  <ul className="space-y-2" /></ul>
                    {type.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300" /></li>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" / /></CheckCircle>
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
        <section className="py-20" /></section>
          <ResponsiveContainer /></ResponsiveContainer>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4 xl font-bold text-white mb-4">Why Choose Our Translation Service?</h2>
              <p className="text-xl text-gray-300 max-w-3 xl mx-auto" /></p>
                Experience the benefits of AI-powered translation technology.
              </p>
            </div>
            <div className="grid md: grid-cols-3 gap-8" />,
              {benefits.map((benefit, index) => (
                <FuturisticCard key={index} className="text-center" /></FuturisticCard>
                  <div className="mb-4 flex justify-center" /></div>
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
        <section className="py-20 bg-white/5" /></section>
          <ResponsiveContainer /></ResponsiveContainer>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4 xl font-bold text-white mb-4">Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3 xl mx-auto" /></p>
                Choose the perfect plan for your translation needs.
              </p>
            </div>
            <div className="grid md: grid-cols-3 gap-8 max-w-6 xl mx-auto" />,
              {pricingPlans.map((plan, index) => (
                <FuturisticCard key={index} className={`${plan.popular ? 'ring-2 ring-blue-400' : ''}""