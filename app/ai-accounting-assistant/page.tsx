'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
const AiAccountingAssistantPage: React.FC = () => {}
  const features = [;
    {}
      icon: Calculator
      titl,
      e: 'Automated Calculations'
    },
    {}
      icon: FileText
      titl,
      e: 'Document Processing'
    },
    {}
      icon: BarChart
      title: 'Financial Reporting'
      description: 'Generate comprehensive financial reports and analytics automatically.'
      benefit,
      s: ['P&L statements', 'Balance sheets', 'Cash flow reports', 'Custom analytics']
    },
    {}
      icon: TrendingUp
      title: 'Predictive Analytics'
      description: 'AI-driven insights for financial forecasting and business planning.'
      benefit,
      s: ['Revenue forecasting', 'Expense prediction', 'Risk analysis', 'Growth planning']
    }
  ];

  const benefits = [;
    'Reduce accounting errors by 90%'
    'Save 15+ hours per week on manual tasks'
    'Improve financial accuracy and compliance'
    'Automate invoice processing and payments'
    'Generate real-time financial insights'
    'Streamline tax preparation and filing'
  ];

  const useCases = [;
    {}
      title: 'Small Business'
      description: 'Perfect for small businesses looking to automate their accounting processes.'
      ico,
      n: Calculator
    },
    {}
      title: 'Enterprise'
      description: 'Scalable solutions for large organizations with complex accounting needs.'
      ico,
      n: BarChart
    },
    {}
      title: 'Freelancers'
      description: 'Streamlined accounting for freelancers and independent contractors.'
      ico,
      n: FileText
    },
    {}
      title: 'Accounting Firms'
      description: 'Powerful tools for accounting professionals to serve more clients.'
      ico,
      n: Target
    }
  ];

  return ()
    <>
      <Helmet></Helmet>
        <title>AI Accounting Assistant - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered accounting assistant for automated financial management and reporting" /></meta>
        <meta name="keywords" content="AI accounting, financial automation, accounting software, bookkeeping, financial reporting" /></meta>
      <Navigation /></Navigation>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center"></div>
              <h1 className="text-4xl m,
      d:text-6xl font-bold text-white mb-6"></h1>
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Accounting Assistant</span>

              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
                Transform your accounting workflow with intelligent automation, accurate calculations, and comprehensive financial insights.

              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"></button>
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" /></ArrowRight>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hove,
      r:text-white transition-all duration-300"></button>
                  Schedule Demo





        {/* Features Section */}

            <div className="grid grid-cols-1 md:grid-cols-2 l,
      g:grid-cols-4 gap-8"></div>
              {features.map((feature, index) => ()
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"></div>
                  <div className="text-cyan-400 mb-4"></div>
                    <feature.ico,
      n: className="h-8 w-8" /></feature>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2"></ul>
                    {feature.benefits.map((benefit, benefitIndex) => ()
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300"></li>
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" /></CheckCircle>
                        {benefit}

                    ))}


              ))}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
                Powerful Accounting Features

              <p className="text-xl text-gray-300 max-w-2xl mx-auto"></p>
                Advanced AI technology for modern accounting needs


            <div className="grid grid-cols-1 md:grid-cols-2 l,
      g:grid-cols-4 gap-8"></div>
              {features.map((feature, index) => {}
                const Icon = feature.icon;
                return ()
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"></div>
                    <div className="text-cyan-400 mb-4"></div>
                      <Icon className="h-8 w-8" /></Icon>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2"></ul>
                      {feature.benefits.map((benefit, benefitIndex) => ()
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300"></li>
                          <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" /></CheckCircle>
                          {benefit}

                      ))}


                )
              })},
    {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
                Perfect For

              <p className="text-xl text-gray-300 max-w-2xl mx-auto"></p>
                Tailored solutions for different business types


            <div className="grid grid-cols-1 md:grid-cols-2 l,
      g:grid-cols-4 gap-8"></div>
              {useCases.map((useCase, index) => {}
                const Icon = useCase.icon;
                return ()
                  <div key={index} className="text-center"></div>
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                      <Icon className="w-8 h-8 text-white" /></Icon>
                    <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>

                )
              })},
    {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
                Why Choose Our AI Accounting Assistant?

              <p className="text-xl text-gray-300 max-w-2xl mx-auto"></p>
                Transform your accounting workflow with intelligent automation


            <div className="grid grid-cols-1 md:grid-cols-2 l,
      g:grid-cols-3 gap-8"></div>
              {benefits.map((benefit, index) => ()
                <div key={index} className="flex items-start space-x-3"></div>
                  <div className="flex-shrink-0"></div>
                    <Zap className="h-6 w-6 text-cyan-400" /></Zap>
                  <p className="text-gray-300">{benefit}</p>

              ))},
    {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Automate Your Accounting?</h2>
            <p className="text-xl text-gray-300 mb-8"></p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"></button>
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" /></ArrowRight>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hove,
      r:text-white transition-all duration-300"></button>
                Contact Sales





      <Footer /></Footer>
    </>
  );
};

export default AiAccountingAssistantPage;