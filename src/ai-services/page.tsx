'use client'
import React from 'react';
import { CheckCircle, ArrowRight, Check } from 'lucide-react';
'use client';
import {CheckCircleArrowRight} from 'lucide-react';
import React from 'react';

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';

const AIServicesPage: React.FC = () => {constservices= [
    {
      icon: Brain,
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, pattern recognition, and intelligent decision making.',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Custom Model Training', 'Real-time Processing'],
      price: 'Starting at $2,50 0/month',
      color: 'text-purple-40 0'
   },
    {icon: Target,
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing campaigns with AI-powered targeting, content generation, and optimization.',
      features: ['Smart Targeting', 'Content Generation', 'Campaign Optimization', 'ROI Tracking'],
      price: 'Starting at $1,20 0/month',
      color: 'text-pink-40 0'
   },
    {icon: Zap,
      title: 'Process Automation',
      description: 'Automate complex business processes with AI decision-making and exception handling.',
      features: ['Workflow Automation', 'Exception Handling', 'Smart Routing', 'Performance Monitoring'],
      price: 'Starting at $80 0/month',
      color: 'text-blue-40 0'
   },
    {icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Advanced threat detection and response using AI-powered security monitoring.',
      features: ['Threat Detection', 'Automated Response', 'Behavioral Analysis', 'Compliance Reporting'],
      price: 'Starting at $1,50 0/month',
      color: 'text-red-40 0'
   },
    {icon: BarChart,
      title: 'Data Analytics & Insights',
      description: 'Transform raw data into actionable insights with AI-powered analytics and visualization.',
      features: ['Data Processing', 'Predictive Insights', 'Visualization', 'Automated Reports'],
      price: 'Starting at $90 0/month',
      color: 'text-teal-40 0'
   },
    {icon: Users,
      title: 'Customer Experience AI',
      description: 'Enhance customer interactions with AI chatbots, sentiment analysis, and personalized experiences.',
      features: ['AI Chatbots', 'Sentiment Analysis', 'Personalization', '24/7 Support'],
      price: 'Starting at $600/month',
      color: 'text-green-400'
    }
  ]
      features: ['AI Chatbots', 'Sentiment Analysis', 'Personalization', '2 4/7 Support'],
      price: 'Starting at $60 0/month',
      color: 'text-green-40 0'
   }
  ];

  constbenefits= [
    {icon: Star,
      title: 'Proven ROI',
      description: 'Average300% ROI within6months of implementation'
   },
    {icon: Zap,
      title: 'Rapid Deployment',
      description: 'Get your AI solutions up and running in 2-4 weeks'
   },
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all AI solutions'
   },
    {icon: Globe,
      title: 'Global Support',
      description: '24/7 support across all time zones with dedicated success managers'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI Services & Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions.
            From machine learning to automation, we deliver AI that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a;
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
            >
              Get Free Consultation</a>
            <a;
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              (302) 464-0950</a>
          </div>
        </section>
        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our AI Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <service.icon className={`w-8 h-8 ${service.color} mr-3`} />
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className={`text-lg font-bold ${service.color} mb-2`}>{service.price}</div>
                  <a;
                    href="/contact"
                    className={`inline-flex items-center text-sm font-medium ${service.color} hover:opacity-80 transition-opacity`}
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Benefits Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our AI Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free consultation and discover how our AI solutions can revolutionize your operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a;
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation</a>
              <a;
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                (302) 464-0950</a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
      description: '2 4/7 support across all time zones with dedicated success managers'
   }
  ];

  return (
  <divclassName="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900"><Navigation /><mainclassName="container mx-autopx-4py-16pt-24">{/* HeroSection */}
      <sectionclassName="text-centermb-16"><spanclassName="text-4 xlmd:text-6 xl font-boldtext-whitemb-6"></className="text-4 xlmd:text-6 xl font-boldtext-whitemb-6"><spanclassName="bg-gradient-to-r from-cyan-400via-purple-50 0to-pink-500bg-clip-texttext-transparent"></className="bg-gradient-to-r from-cyan-400via-purple-50 0to-pink-500bg-clip-texttext-transparent">AI Services & Solutions</spa></h><spanclassName="text-xl text-gray-300mb-8 max-w-4xlmx-auto"></spa></className="text-xl text-gray-300mb-8 max-w-4xlmx-auto">Transform your business with cutting-edge artificial intelligence solutions. 
            From machine learning to automation, we deliver AI that drives real results.
        </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="/contact"
             className="bg-gradient-to-r from-cyan-500to-purple-600text-white px-8 py-4 rounded-lg font-semiboldhover:from-cyan-600 hover:to-purple-700transition-all duration-300hover:scale-105"
            >Get Free Consultation</a><ahref="tel:+13024640950"
             className="border-2 border-cyan-400text-cyan-400px-8 py-3 rounded-lg font-semiboldhover:bg-cyan-400 hover:text-slate-900transition-allduration-300"
            >(30 2) 464-0950</a></di></sectio>{/* ServicesGrid */}
      <sectionclassName="mb-16"><h2className="text-3 xl font-bold text-white text-centermb-12">OurAIServices</h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">{services.map((serviceindex) => (
           <divkey={index}className="bg-slate-80 0/50backdrop-blur-sm rounded-xl p-6 hover:bg-slate-80 0/70transition-all duration-300hover:scale-105"><divclassName="flexitems-centermb-4"><service.iconclassName={`w-8 h-8${service.color}mr-3`} /><h3className="text-xlfont-boldtext-white">{service.title}</h></di><pclassName="text-gray-300mb-4">{service.description}</p><ulclassName="space-y-2mb-6">{service.features.map((featurefeatureIndex) => (
                 <likey={featureIndex}className="flex items-center text-smtext-gray-400"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />{feature}
                  </l>))}
              </u><divclassName="text-center"><divclassName={`text-lg font-bold${service.color}mb-2`}>{service.price}</di><ahref="/contact"
                    className={`inline-flex items-center text-sm font-medium${service.color}hover:opacity-80transition-opacity`}
                  >LearnMore<ArrowRightclassName="w-4h-4ml-1" /></a></di></di>))}
        </di></sectio>{/* BenefitsSection */}
      <sectionclassName="mb-16"><divclassName="bg-gradient-to-r from-indigo-90 0/50to-purple-90 0/50rounded-2xlp-8"><h2className="text-3 xl font-bold text-white text-centermb-12">Why Choose OurAIServices?</h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">{benefits.map((benefitindex) => (
             <divkey={index}className="text-center"><divclassName="w-16h-16bg-cyan-50 0/20rounded-full flex items-center justify-centermx-automb-4"><benefit.iconclassName="w-8 h-8text-cyan-400" /></di><h3className="text-xl font-boldtext-whitemb-2">{benefit.title}</h><pclassName="text-gray-300">{benefit.description}</p></di>))}
          </di></di></sectio>{/* CTASection */}
      <sectionclassName="text-center"><divclassName="bg-gradient-to-r from-cyan-90 0/50to-purple-90 0/50rounded-2xlp-8"><h2className="text-3 xl font-boldtext-whitemb-4">Ready to Transform Your BusinesswithAI?</h><spanclassName="text-gray-300mb-8 max-w-2xlmx-auto"></spa></className="text-gray-300mb-8 max-w-2xlmx-auto">Get a free consultation and discover how our AI solutions can revolutionize your operations and drive growth.
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="/contact"
               className="bg-gradient-to-r from-cyan-500to-purple-600text-white px-8 py-4 rounded-lg font-semiboldhover:from-cyan-600 hover:to-purple-700transition-all duration-300hover:scale-105"
              >Get Free Consultation</a><ahref="tel:+13024640950"
               className="border-2 border-cyan-400text-cyan-400px-8 py-3 rounded-lg font-semiboldhover:bg-cyan-400 hover:text-slate-900transition-allduration-300"
              >(30 2) 464-0950</a></di><divclassName="mt-8 text-smtext-gray-400"><p>📧 kleber@ziontechgroup.com | 📍 364E Main St STE1008, Middletown DE19709</p></di></di></sectio></mai><Footer /></di>
  );
};

export default AIServicesPage;