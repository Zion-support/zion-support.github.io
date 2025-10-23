import React from 'react';
import { CheckCircle, Phone, TrendingUp, Check } from 'lucide-react';
import {CheckCircle, Phone, TrendingUp} from 'lucide-react';
import React from 'react';

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Phone, TrendingUp } from 'lucide-react';
import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';

constAIProjectManagerPage: React.FC= () =>{constfeatures= [
    'AI-powered project planning and resource allocation',
    'Intelligent timeline prediction and risk assessment',
    'Smart task management with priority optimization',
    'Real-time collaboration and team coordination',
    'Predictive analytics for project success',
    'Automated progress tracking and reporting',
    'Budget optimization and cost forecasting',
    'Integration with popular project management tools'
  ]

  const benefits = [
    '40% increase in project delivery speed',
    '70% reduction in project delays',
    '85% improvement in planning accuracy',
    '30% cost reduction through optimization',
    '95% team productivity boost',
    '50% faster decision making'
  ]
  constbenefits= [
    '4 0% increase in project delivery speed',
    '7 0% reduction in project delays',
    '8 5% improvement in planning accuracy',
    '3 0% cost reduction through optimization',
    '9 5% team productivity boost',
    '5 0% faster decision making'
  ];

  constpricing= [
    {
      plan: 'Starter',
      price: '$19 9',
      period: '/month',
      features: ['Up to5projects', '10team members', 'Basic AI planning', 'Email support'],
      popular: false;
   },
    {plan: 'Professional',
      price: '$39 9',
      period: '/month',
      features: ['Unlimited projects', '50team members', 'Advanced AI features', 'Priority support', 'Custom integrations'],
      popular: true;
   },
    {plan: 'Enterprise',
      price: 'Custom',
      period: '',
      features: ['Unlimited everything', 'Custom AI training', 'Dedicated support', 'On-premise deployment', 'SLA guarantee'],
      popular: false;
    }
  ]

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Project Manager Pro</h1>
            <p className="text-xl text-cyan-400 mb-8">
              Intelligent project planning with AI-powered resource optimization</p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your project management with our advanced AI system that predicts timelines,
              optimizes resources, and ensures project success through intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a;
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Get Started Today</a>
              <a;
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950</a>
            </div>
          </section>
          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Powerful AI Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </section>
          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Proven Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="quantum-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <p className="text-lg text-white font-semibold">{benefit}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular</div>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a;
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular;
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started</a>
                </div>
              ))}
            </div>
          </section>
          {/* Contact Section */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about AI Project Manager Pro and how it can revolutionize your project management processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a;
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Contact Us</a>
              <a;
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950</a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
   }
  ];

  return (
  <><Navigation /><divclassName="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900"><mainclassName="container mx-autopx-4py-16pt-24">{/* HeroSection */}
        <sectionclassName="text-centermb-16"><spanclassName="text-5 xlmd:text-6 xl font-bold text-whitemb-6neon-text"></className="text-5 xlmd:text-6 xl font-bold text-whitemb-6neon-text">AI Project Manager Pro</h><spanclassName="text-xl text-cyan-400mb-8"></className="text-xl text-cyan-400mb-8">Intelligent project planning with AI-powered resource optimization</p><spanclassName="text-lg text-gray-300max-w-4 xlmx-automb-8"></className="text-lg text-gray-300max-w-4 xlmx-automb-8">Transform your project management with our advanced AI system that predicts timelines, 
              optimizes resources, and ensures project success through intelligent automation.
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="/contact"
               className="cyber-button px-8 py-4text-lgfont-semibold"
              >Get Started Today</a><ahref="tel:+13024640950"
               className="flex items-center gap-2 border-2 border-cyan-400text-cyan-400px-8 py-4 rounded-lg font-semiboldhover:bg-cyan-400 hover:text-slate-900transition-allduration-300"
              ><PhoneclassName="w-5h-5" />+1 3024640950</a></di></sectio>{/* FeaturesSection */}
        <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-8text-centerneon-text"></className="text-3 xlmd:text-4 xl font-bold text-white mb-8text-centerneon-text">Powerful AI Features</h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-6">{features.map((featureindex) => (
             <divkey={index}className="cyber-card p-6 hover:scale-105transition-allduration-300"><CheckCircleclassName="w-8 h-8 text-green-400mb-4" /><h3className="text-lg font-semiboldtext-whitemb-2">{feature}</h></di>))}
          </di></sectio>{/* BenefitsSection */}
        <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-8text-centerneon-text"></className="text-3 xlmd:text-4 xl font-bold text-white mb-8text-centerneon-text">Proven Results</h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-6">{benefits.map((benefitindex) => (
             <divkey={index}className="quantum-card p-6 text-centerhover:scale-105transition-allduration-300"><TrendingUpclassName="w-12h-1 2text-cyan-400mx-automb-4" /><pclassName="text-lgtext-whitefont-semibold">{benefit}</p></di>))}
          </di></sectio>{/* PricingSection */}
        <sectionclassName="mb-16"><spanclassName="text-3 xlmd:text-4 xl font-bold text-white mb-8text-centerneon-text"></className="text-3 xlmd:text-4 xl font-bold text-white mb-8text-centerneon-text">Choose Your Plan</h><divclassName="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xlmx-auto">{pricing.map((planindex) => (
             <divkey={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-40 0':''}`}>{plan.popular && (
                  <divclassName="absolute -top-4 left-1/2transform-translate-x-1/2"><divclassName="bg-cyan-400text-slate-900px-4 py-1 rounded-fulltext-smfont-semibold">Most Popular</di></di>)}
                <h3className="text-2 xl font-boldtext-whitemb-2">{plan.plan}</h><divclassName="mb-6"><spanclassName="text-4 xl font-boldtext-cyan-400">{plan.price}</spa><spanclassName="text-gray-300">{plan.period}</spa></di><ulclassName="space-y-3mb-8">{plan.features.map((featurefeatureIndex) => (
                   <likey={featureIndex}className="flex items-centertext-gray-300"><CheckCircleclassName="w-5 h-5text-green-400mr-3flex-shrink-0" />{feature}
                    </l>))}
                </u><ahref="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300${
                      plan.popular;
                        ? 'bg-cyan-400text-slate-900 hover:bg-cyan-30 0'
                         : 'border-2 border-cyan-400text-cyan-400 hover:bg-cyan-400 hover:text-slate-90 0'
                  }`}
                  >Get Started</a></di>))}
          </di></sectio>{/* ContactSection */}
        <sectionclassName="text-center"><spanclassName="text-3 xlmd:text-4 xl font-bold text-whitemb-8neon-text"></spa></className="text-3 xlmd:text-4 xl font-bold text-whitemb-8neon-text">Ready to Transform Your Project Management?
          </h><spanclassName="text-lg text-gray-300mb-8 max-w-2xlmx-auto"></spa></className="text-lg text-gray-300mb-8 max-w-2xlmx-auto">Contact us today to learn more about AI Project Manager Pro and how it can revolutionize your project management processes.
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="/contact"
               className="cyber-button px-8 py-4text-lgfont-semibold"
              >Contact Us</a><ahref="tel:+13024640950"
               className="flex items-center gap-2 border-2 border-cyan-400text-cyan-400px-8 py-4 rounded-lg font-semiboldhover:bg-cyan-400 hover:text-slate-900transition-allduration-300"
              ><PhoneclassName="w-5h-5" />+1 30 24640950</a></di></sectio></mai><Footer /></di></>
  );
};

export default AIProjectManagerPage;