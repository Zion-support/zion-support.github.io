<<<<<<< HEAD

=======
import React from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import Button from '../components/ui/Button';
import { Check, X, Star, TrendingUp, DollarSign, Zap } from 'lucide-react';
export default function PricingComparisonPage() {

  const serviceComparisons = [
    {
      service: 'AI Content Generator'
      zionPricing: {
        starter: '$19/month'
        professional: '$49/month'
        enterprise: '$199/month'
      }
      competitors: [        {
          name: 'Jasper AI'
          pricing: '$39/month'
          rating: '4.8/5'
          pros: ['Excellent templates', 'Good AI quality', 'Wide integrations']
          cons: [
<<<<<<< HEAD
            'Higher pricing'
            'Limited customization'
            'No unlimited plan'
          ]
          savings: 'Save $20/month with Zion'
        },        {
          name: 'Copy.ai'
          pricing: '$36/month'
          rating: '4.6/5'
          pros: ['Unlimited words', 'Good value', 'Simple interface']
          cons: ['Basic features', 'Limited templates', 'No advanced SEO']
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            'Higher pricing',
            'Limited customization',
            'No unlimited plan',
          ],
=======
          savings: 'Save $20/month with Zion',
        },        {
          name: 'Copy.ai',
          pricing: '$36/month',
          rating: '4.6/5',
          pros: ['Unlimited words', 'Good value', 'Simple interface'],
          cons: ['Basic features', 'Limited templates', 'No advanced SEO'],
          savings: 'Save $17/month with Zion',
        },        {
          name: 'Writesonic',
          pricing: '$19/month',
          rating: '4.4/5',          pros: ['Excellent templatesGood AI qualityWide integrations'],
          cons: ['Higher pricingLimited customizationNo unlimited plan'],
          savings: 'Save $20/month with Zion'
};
          name: 'Copy.ai',
          pricing: '$36/month',
          rating: '4.6/5',
          pros: ['Unlimited words', 'Good value', 'Simple interface'],
          cons: ['Basic features', 'Limited templates', 'No advanced SEO'],
          savings: 'Save $17/month with Zion',
        },          pros: ['Unlimited wordsGood valueSimple interface'],
          cons: ['Basic featuresLimited templatesNo advanced SEO'],
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          savings: 'Save $17/month with Zion'
        },        {
          name: 'Writesonic'
          pricing: '$19/month'
          rating: '4.4/5',          pros: ['Excellent templatesGood AI qualityWide integrations']
          cons: ['Higher pricingLimited customizationNo unlimited plan']
          savings: 'Save $20/month with Zion'
        }
          name: 'Copy.ai'
          pricing: '$36/month'
          rating: '4.6/5'
          pros: ['Unlimited words', 'Good value', 'Simple interface']
          cons: ['Basic features', 'Limited templates', 'No advanced SEO']
          savings: 'Save $17/month with Zion'
        },          pros: ['Unlimited wordsGood valueSimple interface']
          cons: ['Basic featuresLimited templatesNo advanced SEO']
          savings: 'Save $17/month with Zion'
        }
          name: 'Writesonic'
          pricing: '$19/month'
          rating: '4.4/5'
          pros: ['Affordable', 'Good for beginners', 'Basic features']
          cons: ['Limited features', 'Basic AI models', 'No team features']
          savings: 'Same price, better features'
        }
      ]
        'AI-powered content generation'
        'Multiple content formats'
        'SEO optimization'
        'Team collaboration'
        'API access'
        'Custom templates'
      ]
      color: 'from-purple-500 to-indigo-600'
      icon: '🤖'
    };
    {;
      insight: 'Professional features at startup-friendly prices',;
      icon: <Zap className="w-6 h-6" />,;
      color: 'text-purple-400'
};
    {;
      insight: 'Enterprise-grade reliability without enterprise pricing',;
      icon: <Star className="w-6 h-6" />,;
      color: 'text-yellow-400';
      insight: 'Zion services are 30 - 60% more affordable than market leaders',
      icon: <DollarSign className='w - 6 h - 6' />,
      color: 'text - green - 400',
    },
    {
      insight: 'All plans include free trials and no hidden fees',
      icon: <Check className='w - 6 h - 6' />,
      color: 'text - blue - 400',
    },
    {
      insight: 'Professional features at startup - friendly prices',
      icon: <Zap className='w - 6 h - 6' />,
      color: 'text - purple - 400',
    },
    {
      insight: 'Enterprise - grade reliability without enterprise pricing',
      icon: <Star className='w - 6 h - 6' />,
      color: 'text - yellow - 400',
    },  ];    {
      insight: 'All plans include free trials and no hidden fees',
      icon: <Check className="w-6 h-6" />,
      color: 'text - blue - 400';
    }
    {
      insight: 'Professional features at startup - friendly prices',
      icon: <Zap className="w-6 h-6" />,
      color: 'text - purple - 400';
    }
    {
      insight: 'Enterprise - grade reliability without enterprise pricing',
      icon: <Star className="w-6 h-6" />,
      color: 'text - yellow - 400';
    }
  ];
  const marketInsights = [
    {
      insight: 'Zion services are 30-60% more affordable than market leaders'
      icon: <DollarSign className='w-6 h-6' />
      color: 'text-green-400'
    }
    {
      insight: 'All plans include free trials and no hidden fees'
      icon: <Check className='w-6 h-6' />
      color: 'text-blue-400'
    }
    {
      insight: 'Professional features at startup-friendly prices'
      icon: <Zap className='w-6 h-6' />
      color: 'text-purple-400'
    }
    {
      insight: 'Enterprise-grade reliability without enterprise pricing'
      icon: <Star className='w-6 h-6' />
      color: 'text-yellow-400'
<<<<<<< HEAD

                View Our Pricing

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Key insights that make Zion the smart choice for your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {marketInsights.map((insight, index) => (
                <Card
        {/* Market Insights */}
        <section className='py - 24 bg - gray - 900'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
            <div className='text - center mb - 20'>;
              <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 8'>;
                Why Choose Zion?;
              </h2>;
              <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>;
                Key insights that make Zion the smart choice for your business.;
              </p>;
            </div>;
            <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8'>;
              {market_insights.map ((insight, index) => (
                <Card;
                  key={index}
                  className='text - center group hover:scale - 105 transition - transform duration - 300';
                >;
                  <div;
                    className={`w - 16 h - 16 rounded - 2xl bg - gradient - to - br from - indigo - 500 to - purple - 600 flex items - center justify - center text - white mx - auto mb - 6`}
                  >                    {insight.icon}                Why Choose Zion?;
              </h2>;
              <p className="text - xl text - gray - 400 max - w-3xl mx - auto">;
                Key insights that make Zion the smart choice for your business.;
              </p>;
            </div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8">;
              {market_insights.map ((insight, index) => (
                <Card;

=======
    },  ];    {
      insight: 'All plans include free trials and no hidden fees'
      icon: <Check className="w-6 h-6" />
      color: 'text-blue-400'
    }
    {
      insight: 'Professional features at startup-friendly prices'
      icon: <Zap className="w-6 h-6" />
      color: 'text-purple-400'
    }
    {
      insight: 'Enterprise-grade reliability without enterprise pricing'
      icon: <Star className="w-6 h-6" />
      color: 'text-yellow-400'
    <>;
      <Head>;
        <title>;
          Pricing Comparison - Zion Tech Group | How We Stack Up Against the;
          Competition;
        </title>;
        {/* Hero Section */}
        <section className='pt-32 pb-20 bg-gradient-to-br from-indigo-900/20 to-purple-900/20'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>;
            <div className='mb-8'>;
              <div className='inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6'>;
                <span className='w-2 h-2 bg-indigo-500 rounded-full mr-2 animate-pulse' />;
                Pricing Analysis;
              </div>;
            </div>;
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight'>;
              How We Compare to the Competition;
            </h1>;
            <p className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12'>;
              See how Zion's micro SaaS services stack up against market;
              leaders. Get professional-grade features at startup-friendly;
              prices.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <Button
                href='#comparison'
                variant='primary'
                size='lg'
                className='bg-indigo-600 hover:bg-indigo-700 text-white'>;
                View Comparison;
              </Button>;
              <Button
                href='/pricing'
                variant='outline'
                size='lg'
                className='border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white'>                href="#comparison";
                variant="primary";
                size="lg";
                className="bg-indigo-600 hover:bg-indigo-700 text-white";
                View Comparison;
              </Button>;
              <Button
                View Our Pricing
              </Button>;
            </div>;
          </div>;
        </section>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  key={index}
                  className="text - center group hover:scale - 105 transition-transform duration-300";
                >;
                  <div className={`w - 16 h - 16 rounded - 2xl bg - gradient - to - br from - indigo - 500 to - purple - 600 flex items - center justify - center text - white mx - auto mb - 6`}>;
                    {insight.icon}
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  </div>
                  <p className={`text-lg font-semibold ${insight.color}`}>
                    {insight.insight}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Detailed Comparison */}
        <section id='comparison' className='py-24 bg-gray-800'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-20'>
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'>
                Detailed Service Comparison
              </h2>
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
                See exactly how each service compares in features, pricing, and
                value.              </p>
            </div>
            {serviceComparisons.map((service, serviceIndex) => (        <section id="comparison" className="py-24 bg-gray-800">
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {/* Detailed Comparison */}

        <section id="comparison" className="py-24 bg-gray-800">
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

              ))}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Detailed Service Comparison
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See exactly how each service compares in features, pricing, and value.
                  <div
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service && service.color} flex items-center justify-center text-4xl mx-auto mb-6`}>;
                    {service && service.icon}
                  </div>;
                  <h3 className='text-3xl font-bold text-white mb-4'>;
                    {service && service.service}
                  </h3>;
                  <div className='flex flex-wrap justify-center gap-4 text-lg text-gray-300'>;
                    <span>;
                      Starter:{' '}
                      <span className='text-green-400 font-semibold'>;
                        {service && service.zionPricing.starter}
                  </p>;
                </Card>))}
            </div>;
          </div>;
        </section>;
        {/* Detailed Comparison */}
        <section id='comparison' className='py - 24 bg - gray - 800'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
            <div className='text - center mb - 20'>;
              <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 8'>;
                Detailed Service Comparison;
              </h2>;
              <p className='text - xl text - gray - 400 max - w-3xl mx - auto'>;
                See exactly how each service compares in features, pricing, and;
                value.              </p>;
            </div>;
            {service_comparisons.map ((service, service_index) => (        <section id="comparison" className="py - 24 bg-gray-800">;
          <div className="max - w-7xl mx - auto px - 4 sm:px-6 lg:px-8">;
            <div className="text-center mb-20">;
              <h2 className="text - 3xl sm:text - 4xl font - bold text-white mb-8">;
                Detailed Service Comparison;
              </h2>;
              <p className="text - xl text - gray - 400 max-w-3xl mx-auto">;
                See exactly how each service compares in features, pricing, and value.;
            </div>;
            {service_comparisons.map ((service, service_index) => (
              <div key={service_index} className='mb - 24'>;
                <div className='text - center mb - 16'>;
                  <div;
                    className={`w - 20 h - 20 rounded - 3xl bg - gradient - to - br ${service.color} flex items - center justify - center text - 4xl mx - auto mb - 6`}
                  >;
                    {service.icon}
                  </div>;
                  <h3 className='text - 3xl font - bold text - white mb - 4'>;
                    {service.service}
                  </h3>;
                  <div className='flex flex - wrap justify - center gap - 4 text - lg text - gray - 300'>;
                    <span>;
                      Starter:{' '}
                      <span className='text - green - 400 font - semibold'>;
                        {service.zion_pricing.starter}
                      </span>;
                    </span>;
                    <span>;
                      Professional:{' '}
                      </span>;
                    </span>;
                    <span>;
                      Enterprise:{' '}
                      </span>;
                    </span>;
                  </div>;
                </div>;
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{service.service}</h3>
                  <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-300">
                    <span>Starter: <span className="text-green-400 font-semibold">{service.zionPricing.starter}</span></span>
                    <span>Professional: <span className="text-blue-400 font-semibold">{service.zionPricing.professional}</span></span>
                    <span>Enterprise: <span className="text-purple-400 font-semibold">{service.zionPricing.enterprise}</span></span>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        </div>;
                        <div className='text-center'>;
                          <p className='text-green-400 font-semibold mb-2'>;
                            Starting at;
                          </p>;
                          <p className='text-2xl font-bold text-white'>;
                            {service && service.zionPricing.starter}
                          </p>                        </div>                    {service && service.icon}
                  </div>;
                  <h3 className="text-3xl font-bold text-white mb-4">{service && service.service}</h3>;
                  <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-300">;
                    <span>Starter: <span className="text-green-400 font-semibold">{service && service.zionPricing.starter}</span></span>;
                    <span>Professional: <span className="text-blue-400 font-semibold">{service && service.zionPricing.professional}</span></span>;
                    <span>Enterprise: <span className="text-purple-400 font-semibold">{service && service.zionPricing.enterprise}</span></span>;
                  </div>;
                </div>;
                  {/* Zion Service */}
                  <div className="lg:col-span-1">;
                    <Card className="h-full border-2 border-green-500 bg-green-500/5">;
                      <div className="text-center p-6">;
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-4">;
                          Zion {service && service.service}
                        </div>;
                        <h4 className="text-xl font-bold text-white mb-4">Best Value</h4>;
                        <div className="space-y-3 mb-6">;
                          {service && service.features.map((feature, featureIndex) => (;
                            <div key={featureIndex} className="flex items-center text-gray-300">;
                              <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />;
                              <span className="text-sm">{feature}</span>;
                            </div>;
                          ))}
<<<<<<< HEAD

                      <Card className="h-full border border-gray-700">
                        <div className="text-center p-6">
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-500/20 text-gray-400 text-sm font-medium mb-4">
                            {competitor.name}
                          </div>
                          <div className="flex items-center justify-center mb-4">

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math && Math.floor(parseFloat(competitor && competitor.rating))
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-400'
                                }`}
                              />;
                            ))}
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                          </div>
                          <div className='mb-4'>
                            <p className='text-lg font-semibold text-white'>
                              {competitor.pricing}
                            </p>
                          </div>
                          <div className='space-y-2 mb-4 text-xs'>
                            <div>
                              <p className='text-green-400 font-medium mb-1'>
                                Pros:
                              </p>
                              <ul className='text-gray-300 space-y-1'>
                                {competitor.pros.map((pro, proIndex) => (
                                  <li
                                    key={proIndex}
                                    className='flex items-center'>;
                                    <Check className='w-3 h-3 text-green-400 mr-2 flex-shrink-0' />                                    {pro}                          </div>;
                          <div className="mb-4">;
                            <p className="text-lg font-semibold text-white">{competitor && competitor.pricing}</p>;
                          </div>;
                          <div className="space-y-2 mb-4 text-xs">;
                            <div>;
                              <p className="text-green-400 font-medium mb-1">Pros:</p>;
                              <ul className="text-gray-300 space-y-1">;
                                {competitor && competitor.pros.map((pro, proIndex) => (;
                                  <li key={proIndex} className="flex items-center">;
                                    <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />;
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                          </div>
                          <div className="mb-4">
                            <p className="text-lg font-semibold text-white">{competitor.pricing}</p>
                          </div>
                          <div className="space-y-2 mb-4 text-xs">
                            <div>
                              <p className="text-green-400 font-medium mb-1">Pros:</p>
                              <ul className="text-gray-300 space-y-1">
                                {competitor.pros.map((pro, proIndex) => (
                                  <li key={proIndex} className="flex items-center">
                                    <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />

                                    {pro}
                                  </li>;
                                ))}

                              </ul>
                            </div>
                            <div>

                              <ul className="text-gray-300 space-y-1">
                                {competitor.cons.map((con, conIndex) => (
                                  <li key={conIndex} className="flex items-center">
                                    <X className="w-3 h-3 text-red-400 mr-2 flex-shrink-0" />

                                  </li>
                                ))}
                              </ul>;
                            </div>;
                          </div>;
                          <div className='text-center'>;
                            <p className='text-green-400 font-semibold text-sm'>;
                              {competitor && competitor.savings}
                            </p>                          </div>                          <div className="text-center">;
                            <p className="text-green-400 font-semibold text-sm">{competitor && competitor.savings}</p>;
                          </div>;
                        </div>;
                      </Card>;
                    </div>;
                  ))}
                </div>;
              </div>;
            ))}
          </div>
        </section>
        {/* CTA Section */}
        <section className='py-24 bg-gradient-to-r from-indigo-600 to-purple-600'>;
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'>;
            </h2>;
            <p className='text-xl text-indigo-100 mb-12'>;
              Start your free trial today and see why thousands of businesses;
              choose Zion.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
                              </ul>
                            </div>
                          </div>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                            <p className="text-green-400 font-semibold text-sm">{competitor.savings}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  ))}
                </div>;
              </div>;
            ))}
<<<<<<< HEAD
          </div>
        </section>

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        {/* CTA Section */}
        <section className='py-24 bg-gradient-to-r from-indigo-600 to-purple-600'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-8'>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            </h2>
            <p className='text-xl text-indigo-100 mb-12'>
              Start your free trial today and see why thousands of businesses
              choose Zion.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
=======
        {/* CTA Section */}
        <section className='py - 24 bg - gradient - to - r from - indigo - 600 to - purple - 600'>;
          <div className='max - w-4xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>;
            <h2 className='text - 3xl sm:text - 4xl font - bold text - white mb - 8'>;
            </h2>;
            <p className='text - xl text - indigo - 100 mb - 12'>;
              Start your free trial today and see why thousands of businesses;
              choose Zion.;
            </p>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <Button
                href='/ai-content-generator'
                variant='secondary'
                size='lg'
                className='bg-white text-indigo-600 hover:bg-gray-100'              >
                Try AI Content Generator
              </Button>
              <Button
                href='/cloud-monitoring'
                variant='secondary'
                size='lg'
                className='bg-white text-indigo-600 hover:bg-gray-100'              >
                Try Cloud Monitoring
              </Button>
              <Button
                href='/devops-automation'
                variant='secondary'
                size='lg'
<<<<<<< HEAD
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
                Try DevOps Automation
              </Button>;
            </div>;
          </div>;
        </section>;
      </div>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                className='bg-white text-indigo-600 hover:bg-gray-100'              >                href="/ai-content-generator"
                variant="secondary"
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100"
                Try AI Content Generator
              </Button>
<<<<<<< HEAD
<<<<<<< HEAD
              <Button
                href='/cloud-monitoring'
                variant='secondary'
                size='lg'
                className='bg-white text-indigo-600 hover:bg-gray-100'                href="/cloud-monitoring"
                variant="secondary"
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100"
                Try Cloud Monitoring
              </Button>
              <Button
                href='/devops-automation'
                variant='secondary'
                size='lg'
                className='bg-white text-indigo-600 hover:bg-gray-100'                href="/devops-automation"
                variant="secondary"
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100"
                Try DevOps Automation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
);
}
              <Button
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
