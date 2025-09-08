
import React from 'react';

import { Search, TrendingUp, Target, BarChart3, Globe, Zap, Users, CheckCircle, ArrowRight, Play, Star, Eye, Brain, Shield, Lock, Sparkles, ChartBar, Lightbulb, Rocket, Settings } from 'lucide-react';


        'Generate comprehensive SEO reports automatically with actionable insights and recommendations.',
      color: 'bg-gradient-to-br from-pink-500 to-rose-600',
      gradient: 'from-pink-400 to-rose-500',
    },;
  ];







  ];
  const pricingPlans = [
    {
      name: 'Starter'
      price: '$39'
      period: '/month'
      description: 'Perfect for small websites and blogs'
      features: [

        'Up to 5 websitesBasic keyword researchMonthly site auditsEmail supportBasic reportingMobile app access'
      ];
      popular: false,
      color: 'border-gray-600',
      buttonColor: 'bg-gray-600 hover:bg-gray-700'
    };
    {
import Head from 'next / head';
import Card from '../components / ui / Card';
import Button from '../components / ui / Button';
import {

  ];

;
  const pricing_plans = [;


    {

      name: 'Starter',
  price: '$39'
      period: '/month',


      color: 'border - gray - 600',
      button_color: 'bg - gray - 600 hover:bg - gray - 700',
    },    {        'Up to 5 websites_basic keyword research_monthly site audits_email support_basic reporting_mobile app access';
      ];
      popular: false,
      color: 'border - gray - 600',
      button_color: 'bg - gray - 600 hover:bg - gray - 700';
    }

      color: 'border - blue - 500',
      button_color: 'bg - blue - 600 hover:bg - blue - 700',
    },    {        'Up to 25 websites_advanced keyword research_weekly site audits_priority support_advanced reporting_competitor analysisAPI access_white - label reports';
      ];
      popular: true,
      color: 'border - blue - 500',
      button_color: 'bg - blue - 600 hover:bg - blue - 700';
    }

      description: 'For large organizations and enterprises',

      name: 'Google Search Console',

      icon: '🔍',
      description: 'Search performance data',
    },    { name: 'WordPress', icon: '🔌', description: 'Plugin integration' },      popular: false,
      color: 'border - purple - 600',
      button_color: 'bg - purple - 600 hover:bg - purple - 700';
    }
  ];
;
  const integrations = [;

;
  const use_cases = [;
    {
      title: 'E - commerce Websites',
      description:;
        'Optimize product pages, category pages, and search functionality for better conversions.',
      benefits: [;
        'Higher search rankings',
        'Increased organic traffic',
        'Better conversion rates',
        'Competitive advantage',
      ],
    },
    {
      title: 'Content Marketing',
      description:;
        'Optimize blog posts, articles, and content for search engines and user engagement.',
      icon: '📝',
      benefits: [;
        'Better content visibility',
        'Higher engagement rates',
        'More organic traffic',
        'Authority building',
      ],
    },
    {
      title: 'Local Businesses',
      description:;
        'Improve local search visibility and attract customers in your area.',
      icon: '📍',
      benefits: [;
        'Local search dominance',
        'Increased foot traffic',
        'Better customer acquisition',
        'Competitive positioning',
      ],
    },
    {
      title: 'SaaS Companies',
      description:;
        'Optimize landing pages, feature pages, and documentation for better user acquisition.',
      icon: '💻',
      benefits: [;
        'Higher conversion rates',
        'Better user experience',
        'Reduced acquisition costs',
        'Market expansion',
      ],
    },
  ];
;
  const success_metrics = [;



    {
      metric: 'Organic Traffic'
      value: '+150%'
      description: 'Average increase in organic traffic'
    }
    {
      metric: 'Search Rankings'
      value: '+45%'
      description: 'Improvement in search rankings'
    }
    {
      metric: 'Conversion Rate'
      value: '+80%'
      description: 'Increase in conversion rates'
    }
    {
      metric: 'ROI'
      value: '400%'
      description: 'Average return on investment'
    },  ];    { metric: 'Organic Traffic', value: '+150%', description: 'Average increase in organic traffic' }
    { metric: 'Search Rankings', value: '+45%', description: 'Improvement in search rankings' }
    { metric: 'Conversion Rate', value: '+80%', description: 'Increase in conversion rates' }
      description: 'Optimize product pages, category pages, and search functionality for better conversions.',
    icon: '🛍️',
      benefits: ['Higher search rankingsIncreased organic trafficBetter conversion ratesCompetitive advantage']

    };
    {;
      category: 'On-Page SEO',;
      icon: <Target className="w-6 h-6 text-green-400" />,;
      tools: ['Content optimizationMeta tag generatorSchema markup builderInternal linking suggestionsImage optimization'];
    };
    {;
      category: 'Technical SEO',;
      icon: <Settings className="w-6 h-6 text-purple-400" />,;
      tools: ['Site audit toolPage speed analyzerMobile optimizationCore Web VitalsXML sitemap generator'];
    };
    {;
      category: 'Analytics & Reporting',;
      icon: <BarChart3 className="w-6 h-6 text-orange-400" />,;
      tools: ['Ranking trackerTraffic analysisConversion trackingCompetitor monitoringCustom dashboards'];

    }
  ];



  return (

        />;
        <meta name='twitter:card' content='summary_large_image' />;


            analytics, and intelligent optimization;
          </p>;

          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-20'>;


              variant='outline'
              size='lg'


            </Button>
          </div>
          {/* Stats */}


            <Button
              href="#pricing"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 shadow-2xl shadow-blue-500/25"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="#demo"
              variant="outline"
              size="lg"

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${feature && feature.color} shadow-xl`}>;
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;
              Everything you need to dominate search rankings and drive organic traffic;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {features && features.map((feature, index) => (;
              <Card
                key={index}
                className="text-center group bg-gray-800/50 border border-gray-700 hover:border-blue-500/30 hover:bg-gray-800/80 transition-all duration-300 hover:-translate-y-1"

            ))}









      {/* SEO Tools Section */}

      <section className="py-24 bg-black relative overflow-hidden">



        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Comprehensive SEO Tools
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">

          </div>;
        </div>;
      </section>;
      {/* SEO Tools Section */}
      <section className='py-24 bg-black relative overflow-hidden'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>;
          <div className='text-center mb-20'>;
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>;
              Comprehensive SEO Tools;
            </h2>;
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>              Professional-grade tools used by top SEO agencies and marketers;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>      <section className="py-24 bg-black relative overflow-hidden">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">;
          <div className="text-center mb-20">;
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">;
              Comprehensive SEO Tools;
            </h2>;
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>;
            {seoTools && seoTools.map((tool, index) => (;



              <Card
                key={index}
                className='group border border-gray-700 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300'>;
                <div className='flex items-start space-x-4'>;
                  <div className='flex-shrink-0'>{tool && tool.icon}</div>;
                  <div className='flex-1'>;
                    <h3 className='text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300'>;
                      {tool && tool.category}
                    </h3>;
                    <div className='grid grid-cols-1 gap-2'>;
                      {tool && tool.tools.map((toolName, toolIndex) => (;
                        <div
                          key={toolIndex}
                          className='flex items-center text-sm text-gray-300'>;
                          <CheckCircle className='w-4 h-4 text-blue-400 mr-2 flex-shrink-0' />                          {toolName}            {seoTools && seoTools.map((tool, index) => (;
              <Card
                key={index}
                className="group border border-gray-700 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300">;
                <div className="flex items-start space-x-4">;
                  <div className="flex-shrink-0">{tool && tool.icon}</div>;
                  <div className="flex-1">;
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">;
                      {tool && tool.category}
                    </h3>;
                    <div className="grid grid-cols-1 gap-2">;
                      {tool && tool.tools.map((toolName, toolIndex) => (;
                        <div key={toolIndex} className="flex items-center text-sm text-gray-300">;
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />;



            {seoTools.map((tool, index) => (
origin/cursor/automate-test-improve-and-merge-code-2533
              <Card
                  {feature.title}</h2>;
            <p className=text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;
              Everything you need to dominate search rankings and drive organic traffic;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8>;
            {features.map((feature, index) => (className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br ${feature && feature.color} shadow-xl`}>;
                    {feature && feature.icon}
                  </div>;
                </div>;
                <h3 className=text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300'>;
                  {feature && feature.title}
                </h3>;
                <p className='text-gray-400 leading-relaxed>                  {feature && feature.description}              Powerful SEO Features;
            </h2>;
            <p className=text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;
                <h3 className='text - xl font - bold mb - 4 text - white group - hover:text - blue - 400 transition - colors duration - 300'    />;

                  {feature.title}

                </h3>
                <p className='text-gray-400 leading-relaxed'    />

                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Tools Section */}


<section className='py-24 bg-black relative overflow-hidden'    />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'    />
          <div className='text-center mb-20'    />
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'    />
              Comprehensive SEO Tools;
            </h2>
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'    />
              Professional-grade tools used by top SEO agencies and marketers;
            </p>
          </div>

<div className='grid grid-cols-1 md:grid-cols-2 gap-8'    />
            {seoTools.map((tool, index) => (}
              <Card;}
key={index}
                className='group border border-gray-700 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300'    />;
                <div className='flex items-start space-x-4'    />;
                  <div className='flex-shrink-0'    />{tool && tool.icon}</div>;
                  <div className='flex-1'    />;
                    <h3 className='text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300'    />;
                      {tool && tool.category}
                    </h3>;
                    <div className='grid grid-cols-1 gap-2'    />;

                      {tool && tool.tools.map((toolName, toolIndex) => (;}
                        <div;}
key={toolIndex}

                          className='flex items-center text-sm text-gray-300'
                            />
                          <CheckCircle className='w-4 h-4 text-blue-400 mr-2 flex-shrink-0'    />
















              </Card>

<section className='py-24 bg-black relative overflow-hidden'    />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'    />
          <div className='text-center mb-20'    />
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'    />
              Use Cases;
            </h2>
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'    />
              Trusted by businesses across industries for SEO success;
            </p>
          </div>

<div className='grid grid-cols-1 md:grid-cols-2 gap-8'    />
            {useCases.map((useCase, index) => (}
              <Card;}
key={index}
                className='group border border-gray-700 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300'    />;
                <div className='flex items-start space-x-4'    />;
                  <div className='text-4xl'    />{useCase && useCase.icon}</div>;
                  <div className='flex-1'    />;
                    <h3 className='text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300'    />;
                      {useCase && useCase.title}
                    </h3>;
                    <p className='text-gray-400 mb-4 leading-relaxed'    />;
                      {useCase && useCase.description}
                    </p>;
                    <div className='grid grid-cols-2 gap-2'    />;

                      {useCase && useCase.benefits.map((benefit, benefitIndex) => (;}
                        <div;}
key={benefitIndex}

                          className='flex items-center text-sm text-gray-300'
                            />
                          <TrendingUp className='w-4 h-4 text-blue-400 mr-2 flex-shrink-0'    />



      <section className='py-24 bg-black relative overflow-hidden'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>;
          <div className='text-center mb-20'>;
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>;
              Use Cases;
            </h2>;
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>              Trusted by businesses across industries for SEO success;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>      <section className="py-24 bg-black relative overflow-hidden">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">;
          <div className="text-center mb-20">;
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">;
              Use Cases;
            </h2>;
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>;
            {useCases && useCases.map((useCase, index) => (;



              <Card
                key={index}
                className='group border border-gray-700 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300'>;
                <div className='flex items-start space-x-4'>;
                  <div className='text-4xl'>{useCase && useCase.icon}</div>;
                  <div className='flex-1'>;
                    <h3 className='text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300'>;
                      {useCase && useCase.title}
                    </h3>;
                    <p className='text-gray-400 mb-4 leading-relaxed'>;
                      {useCase && useCase.description}
                    </p>;
                    <div className='grid grid-cols-2 gap-2'>;
                      {useCase && useCase.benefits.map((benefit, benefitIndex) => (;
                        <div
                          key={benefitIndex}
                          className='flex items-center text-sm text-gray-300'>;
                          <TrendingUp className='w-4 h-4 text-blue-400 mr-2 flex-shrink-0' />                          {benefit}            {useCases && useCases.map((useCase, index) => (;
              <Card
                key={index}
                className="group border border-gray-700 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300">;
                <div className="flex items-start space-x-4">;
                  <div className="text-4xl">{useCase && useCase.icon}</div>;
                  <div className="flex-1">;
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">;
                      {useCase && useCase.title}
                    </h3>;
                    <p className="text-gray-400 mb-4 leading-relaxed">;
                      {useCase && useCase.description}
                    </p>;
                    <div className="grid grid-cols-2 gap-2">;
                      {useCase && useCase.benefits.map((benefit, benefitIndex) => (;
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">;
                          <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />;








                </ul>;



                <Button
                  href='/contact'

              </Card>;


                    </li>



                <Button
                  href="/contact"
                  className={`w-full ${plan.buttonColor} text-white`}

            ))}









      {/* Integrations Section */}

      <section className="py-24 bg-black relative overflow-hidden">



        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">

          </div>;
        </div>;
      </section>;
      {/* Integrations Section */}
      <section className='py-24 bg-black relative overflow-hidden'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>;
          <div className='text-center mb-20'>;
            <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight'>;
              Seamless Integrations;
            </h2>;
            <p className='text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed'>              Connect with your favorite tools and platforms;
            </p>;
          </div>;
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>      <section className="py-24 bg-black relative overflow-hidden">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">;
          <div className="text-center mb-20">;
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">;
              Seamless Integrations;
            </h2>;
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">;
            </p>;
          </div>;
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>;
            {integrations && integrations.map((integration, index) => (;



              <Card
                key={index}
                className='text-center group border border-gray-700 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300'>;
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300'>;
                  {integration && integration.icon}
                </div>;
                <h3 className='font-semibold text-white mb-2'>;
                  {integration && integration.name}
                </h3>;
                <p className='text-sm text-gray-400'>;
                  {integration && integration.description}
                </p>              </Card>            {integrations && integrations.map((integration, index) => (;
              <Card
                key={index}
                className="text-center group border border-gray-700 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300">;
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">;
                  {integration && integration.icon}
                </div>;
                <h3 className="font-semibold text-white mb-2">{integration && integration.name}</h3>;
                <p className="text-sm text-gray-400">{integration && integration.description}</p>;
              </Card>;













            <Button
              href='/contact'
              variant='secondary'
              size='lg'
              className='bg-white text-blue-600 hover:bg-gray-100 shadow-2xl'
            >
              Start Free Trial
              <ArrowRight className='w-5 h-5 ml-2' />
            </Button>
              className='border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl'>;
              <Play className='w-5 h-5 mr-2' />              Watch Demo            Ready to Dominate Search Rankings?;
          </h2>;
          <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">;
            Join thousands of businesses who are already ranking higher and driving more organic traffic.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-6 justify-center">;









