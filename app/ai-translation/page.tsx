import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const AITranslationPage: React.FC = () => {
  const features = [
    'Advanced neural machine translation for 100+ languages',
    'Context-aware translation with industry-specific terminology',
    'Real-time translation for live conversations and meetings',
    'Document translation with format preservation',
    'Voice translation with natural speech synthesis',
    'Integration with 100+ business applications',
    'Custom translation models and glossaries',
    'Quality assurance and human review workflows',
    'Batch processing and bulk translation',
    'API access for automated translation workflows'
  ];

  const benefits = [
    'Reduce translation costs by 80%',
    'Improve translation accuracy by 90%',
    'Speed up translation process by 95%',
    'Support global business expansion',
    'Maintain brand consistency across languages',
    'Eliminate language barriers in communication',
    'Scale multilingual content production',
    'Improve customer experience worldwide'
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$99/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 100,000 words/month',
        '50+ languages',
        'Basic translation quality',
        'Email support',
        'Mobile app access',
        'Basic analytics'
      ]
    },
    {
      plan: 'Professional',
      price: '$199/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 1,000,000 words/month',
        '100+ languages',
        'Advanced translation quality',
        'Priority support',
        'API access',
        'Custom models',
        'Human review'
      ]
    },
    {
      plan: 'Enterprise',
      price: '$499/month',
      description: 'For large organizations',
      features: [
        'Unlimited words',
        'All languages',
        'Premium translation quality',
        'Dedicated support',
        'White-label options',
        'On-premise deployment',
        'Advanced security'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Translation Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered translation with neural machine translation, real-time translation, and 100+ languages. Reduce translation costs by 80%." />
        <meta name="keywords" content="AI translation, machine translation, multilingual support, real-time translation, document translation, voice translation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-translation" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full mb-6">
            <Globe className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Translation Platform
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Revolutionize Global Communication with AI
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your global communication with our AI-powered translation platform that supports 
            100+ languages, provides real-time translation, and maintains context and meaning.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
              <div className="text-white font-medium">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-pink-400 mb-2">90%</div>
              <div className="text-white font-medium">Higher Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-white font-medium">Faster Translation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">100+</div>
              <div className="text-white font-medium">Languages</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-all duration-300 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Demo
            </a>
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Powerful AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Proven Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-lg p-6 border border-sky-500/30">
                <TrendingUp className="w-8 h-8 text-sky-400 mb-4" />
                <p className="text-white font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Flexible Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 border ${
                plan.plan === 'Professional' 
                  ? 'border-sky-500 bg-gradient-to-br from-sky-500/20 to-blue-500/20' 
                  : 'border-white/20'
              }`}>
                {plan.plan === 'Professional' && (
                  <div className="bg-sky-600 text-white px-4 py-2 rounded-full text-sm font-semibold text-center mb-6">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-4">{plan.price}</div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+13024640950"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.plan === 'Professional'
                      ? 'bg-gradient-to-r from-sky-600 to-blue-600 text-white hover:from-sky-700 hover:to-blue-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Market Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Market Comparison
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="overflow-x-auto">
              <table className="w-full text-white">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-4 px-4">Feature</th>
                    <th className="text-center py-4 px-4">Our Platform</th>
                    <th className="text-center py-4 px-4">Google Translate</th>
                    <th className="text-center py-4 px-4">DeepL</th>
                    <th className="text-center py-4 px-4">Microsoft Translator</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4">Real-time Translation</td>
                    <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-green-400 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><span className="text-red-400">✗</span></td>
                    <td className="text-center py-4 px-4"><span className="text-red-400">✗</span></td>
                    <td className="text-center py-4 px-4"><span className="text-red-400">✗</span></td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4">Custom Models</td>
                    <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-green-400 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><span className="text-red-400">✗</span></td>
                    <td className="text-center py-4 px-4"><span className="text-red-400">✗</span></td>
                    <td className="text-center py-4 px-4"><span className="text-red-400">✗</span></td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4">API Access</td>
                    <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-green-400 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><span className="text-red-400">✗</span></td>
                    <td className="text-center py-4 px-4"><span className="text-red-400">✗</span></td>
                    <td className="text-center py-4 px-4"><span className="text-red-400">✗</span></td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4">Starting Price</td>
                    <td className="text-center py-4 px-4 font-bold text-cyan-400">$99/month</td>
                    <td className="text-center py-4 px-4">Free</td>
                    <td className="text-center py-4 px-4">$6.99/month</td>
                    <td className="text-center py-4 px-4">$10/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Break Language Barriers?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our AI-powered translation platform 
            to communicate globally and expand their reach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-all duration-300 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email: kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AITranslationPage;
