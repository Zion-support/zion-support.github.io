import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Languages, Brain, FileText, Clock, CheckCircle } from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

export default function AITranslationService() {
  const features = [
    {
      icon: <Languages className="w-8 h-8 text-blue-400" />,
      title: "100+ Languages",
      description: "Support for over 100 languages with native-level accuracy"
    },
    {
      icon: <Brain className="w-8 h-8 text-green-400" />,
      title: "AI-Powered",
      description: "Advanced neural networks provide context-aware translations"
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      title: "Document Support",
      description: "Translate PDFs, Word docs, and other file formats seamlessly"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-400" />,
      title: "Real-time Translation",
      description: "Instant translations for live conversations and meetings"
    }
  ];

  const translationTypes = [
    {
      category: 'Translation Types',
      items: ['Text Translation', 'Document Translation', 'Website Translation', 'Audio Translation', 'Video Subtitles', 'Live Translation']
    },
    {
      category: 'Languages',
      items: ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean', 'Arabic', 'Portuguese', 'Russian']
    },
    {
      category: 'Industries',
      items: ['Legal', 'Medical', 'Technical', 'Business', 'E-commerce', 'Education', 'Entertainment', 'Government']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 50,000 words/month',
        '50+ languages',
        'Basic document support',
        'Email support'
      ]
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 200,000 words/month',
        '100+ languages',
        'Advanced document support',
        'Priority support',
        'API access'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited words',
        'All languages',
        'Custom models',
        'Dedicated support',
        'White-label options'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Translation Service - Zion Tech Group</title>
        <meta name="description" content="Professional AI translation service supporting 100+ languages. Translate documents, websites, and real-time conversations with high accuracy." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <ResponsiveContainer>
            <div className="relative z-10 text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Translation Service
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Break down language barriers with our advanced AI translation service. 
                Translate documents, websites, and conversations in real-time with native-level accuracy.
              </p>
              <FuturisticButton href="#features" className="bg-blue-600 hover:bg-blue-700">
                Explore Features
              </FuturisticButton>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Powerful Translation Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered translation service offers enterprise-grade accuracy and speed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className="mb-4">
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
        <section className="py-16 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">What We Translate</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive translation solutions for all your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {translationTypes.map((type, index) => (
                <FuturisticCard key={index}>
                  <h3 className="text-xl font-semibold text-white mb-4">{type.category}</h3>
                  <ul className="space-y-2">
                    {type.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to fit your translation needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard key={index} className={`${index === 1 ? 'ring-2 ring-blue-500' : ''}`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-blue-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <FuturisticButton 
                      className={`w-full ${index === 1 ? 'bg-blue-600 hover:bg-blue-700' : 'border border-gray-600 hover:bg-gray-800'}`}
                    >
                      Get Started
                    </FuturisticButton>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <ResponsiveContainer>
            <div className="text-center">
              <FuturisticCard className="bg-gradient-to-r from-blue-600 to-purple-600">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Break Down Language Barriers?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Start translating with our AI-powered service today.
                </p>
                <FuturisticButton href="/contact" className="bg-white text-blue-600 hover:bg-gray-100">
                  Start Free Trial
                </FuturisticButton>
              </FuturisticCard>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
}