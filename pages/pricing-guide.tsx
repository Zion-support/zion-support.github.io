import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import {
  CheckCircle,
  Star,
  Zap,
  Shield,
  Users,
  Globe,
  Phone,
  Mail,
  ArrowRight,
  DollarSign,
  TrendingUp,
  Award,
  Clock,
  Target,
  Brain,
  Server,
  Cloud,
  Database,
  Lock,
  BarChart3,
  Rocket,
  Heart,
  Sparkles,
  Calculator,
  BookOpen,
  Lightbulb,
  HelpCircle,
  Network
} from 'lucide-react';

const PricingGuide: React.FC = () => {
  const pricingFactors = [
    {
      name: 'Starter', price: '$99',
      period: '/month', description: 'Perfect for small businesses getting started',
      features: [
        'Up to 5 team members', 'Basic AI services',
        'Email support', 'Standard templates',
        'Basic analytics', '1GB storage'
      ], popular: false,
      cta: 'Start Free Trial'
    }, {
      name: 'Professional',
      price: '$299', period: '/month',
      description: 'Ideal for growing businesses', features: [
        'Up to 25 team members',
        'Advanced AI services', 'Priority support',
        'Custom templates', 'Advanced analytics',
        '10GB storage', 'API access',
        'Custom integrations'
      ], popular: true,
      cta: 'Start Free Trial'
    }, {
      name: 'Enterprise',
      price: 'Custom', period: '',
      description: 'For large organizations', features: [
        'Unlimited team members',
        'Full AI suite', '24/7 dedicated support',
        'White-label options', 'Custom analytics',
        'Unlimited storage', 'Full API access',
        'Custom development', 'SLA guarantee'
      ], popular: false,
      cta: 'Contact Sales'

    }
  ];

  const pricingExamples = [
    {
      name: 'Additional AI Credits', price: '$0.10',
      description: 'Per AI-generated content piece', icon: Brain
    },
    {
      name: 'Extra Storage', price: '$5',
      description: 'Per 10GB per month', icon: Database
    },
    {
      name: 'Priority Support', price: '$99',
      description: 'Per month for faster response', icon: Shield
    },
    {
      name: 'Custom Development', price: '$150',
      description: 'Per hour for custom features', icon: Network

    }
  ];

  const costSavingTips = [
    {
      question: 'Can I change my plan at any time?', answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.''
    },
    {
      question: 'Is there a free trial available?', answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.'
    }, {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.'
    }, {
      question: 'Do you offer discounts for annual subscriptions?',
      answer: 'Yes, we offer 20% off when you pay annually. This applies to all plans except Enterprise.'
    },
    {
      question: 'What happens if I exceed my plan limits?', answer: 'We\'ll notify you when you\'re approaching your limits. You can upgrade your plan or purchase additional credits as needed.'
    },
    {
      question: 'Is there a setup fee?', answer: 'No setup fees for Starter and Professional plans. Enterprise plans may include setup fees depending on custom requirements.'

    }
  ];
  return (
    <Layout>
      <Head>
        <title>Pricing Guide - Zion Tech Group</title>
        <meta name='description' content='Transparent pricing for all our AI and technology solutions' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
        {/* Hero Section */}
        <section className='relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600'>
          <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-20 sm:py-32'>
            <div className='text-center'>
              <Badge className='mb-4 bg-white/20 text-white border-white/30'>
                Transparent Pricing
              </Badge>
              <h1 className='text-4xl sm:text-6xl font-bold text-white mb-6'>
                Simple, Transparent Pricing
              </h1>
              <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
                Choose the plan that fits your business needs. All plans include our core features with no hidden fees.
              </p>
              <div className='flex flex-col sm: flex-row gap-4 justify-center'>
                <Button size='lg' className='bg-white text-blue-600 hover:bg-blue-50'>
                  Start Free Trial
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
                <Button size='lg' variant='outline' className='border-white text-white hover:bg-white hover:text-blue-600'>
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className='py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
                Choose Your Plan
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                All plans include our core AI services, with additional features and support based on your needs.
              </p>
            </div>

            <div className='grid grid-cols-1 md: grid-cols-3 gap-8'>
              {plans.map((plan, index) => (
                <Card key={index} className={`p-8 relative ${plan.popular ? 'ring-2 ring-blue-500 shadow-xl scale-105' : ''}`}>
                  {plan.popular && (
                    <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                      <Badge className='bg-blue-500 text-white'>Most Popular</Badge>

                    </div>
                    <div>
                      <h3 className='text-2xl font-bold text-white mb-2'>{factor.factor}</h3>
                      <p className='text-gray-300'>{factor.description}</p>
                    </div>
                  </div>
                  <ul className='space-y-3'>
                                         {factor.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className='flex items-center text-gray-300'>
                        <CheckCircle className='w-5 h-5 text-green-500 mr-3 flex-shrink-0' />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Examples */}
      <section className='py-20 px-4 sm: px-6 lg:px-8 bg-slate-800/50'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl font-bold text-white mb-4'>
              Real-World Pricing Examples;
            </h2>
            <p className='text-xl text-gray-300'>
              See how different project types are priced;
            </p>
          </motion.div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                         {pricingExamples.map((example, index) => (
              <motion.div
                key={example.scenario}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >;
                <Card className='p-8 h-full'>
                  <div className='text-center mb-6'>
                    <h3 className='text-xl font-bold text-white mb-2'>{example.scenario}</h3>
                    <p className='text-gray-300 text-sm mb-4'>{example.description}</p>
                    <div className='text-3xl font-bold text-blue-400 mb-2'>{example.price}</div>
                    <div className='text-sm text-gray-400'>Timeline: {example.timeline}</div>
                  </div>
                  <ul className='space-y-3 mb-6'>
                                         {example.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className='flex items-center text-gray-300 text-sm'>
                        <CheckCircle className='w-4 h-4 text-green-500 mr-3 flex-shrink-0' />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button className='w-full' variant={plan.popular ? 'default' : 'outline'}>
                    {plan.cta}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
                Add-on Services
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Enhance your plan with additional services and features as your business grows.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {addOns.map((addon, index) => (
                <Card key={index} className='p-6 text-center hover: shadow-lg transition-shadow duration-300'>
                  <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4'>
                    <addon.icon className='h-6 w-6 text-blue-600' />

                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className='py-20'>
          <div className='max-w-4xl mx-auto px-4 sm: px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
                Frequently Asked Questions
              </h2>
              <p className='text-xl text-gray-600'>
                Get answers to common questions about our pricing and plans.
              </p>
            </div>

            <div className='space-y-8'>
              {faqs.map((faq, index) => (
                <Card key={index} className='p-6'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-3'>{faq.question}</h3>
                  <p className='text-gray-600'>{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600'>
          <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
              Ready to Get Started?

            </h2>
            <p className='text-xl text-gray-300'>
              Smart strategies to maximize your AI investment;
            </p>
          </motion.div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                         {costSavingTips.map((tip, index) => (
              <motion.div
                key={tip.tip}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >;
                <Card className='p-6'>
                  <div className='flex items-start'>
                    <div className='p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 mr-4'>
                      <Lightbulb className='w-5 h-5 text-white' />
                    </div>
                    <div className='flex-1'>
                      <h3 className='text-lg font-bold text-white mb-2'>{tip.tip}</h3>
                      <p className='text-gray-300 mb-3'>{tip.description}</p>
                      <Badge variant='secondary' className='text-green-400'>
                        {tip.savings}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className='py-20 px-4 sm: px-6 lg:px-8 bg-slate-800/50'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >;
            <h2 className='text-4xl font-bold text-white mb-6'>
              Get Your Custom Quote;
            </h2>
            <p className='text-xl text-gray-300 mb-8'>
              Ready to get started? Contact us for a personalized quote based on your specific requirements.;
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button size='lg' className='bg-gradient-to-r from-blue-500 to-purple-600 text-white'>
                <Calculator className='w-5 h-5 mr-2' />
                Get Free Quote;
              </Button>
              <Button size='lg' variant='outline'>
                <HelpCircle className='w-5 h-5 mr-2' />
                Ask Questions;
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
;
export default PricingGuide;