import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const AiQuantumComputingPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  const quantumAdvantages = [
    {
      metric: '1000 x',
      description: 'Faster optimization for complex problems',
      icon: Zap;
    },
    {
      metric: '99.9%',
      description: 'Security improvement over classical encryption',
      icon: Shield;
    },
    {
      metric: '50%',
      description: 'Reduction in computational time for simulations',
      icon: Clock3;
    },
    {
      metric: '10 x',
      description: 'Better accuracy in pattern recognition',
      icon: Target;
    }
  ];

  const pricingPlans = [
    {
      name: 'Quantum Starter',
      price: '$2,999/month',
      description: 'For research institutions and startups',
      features: [
        'Up to 10 quantum algorithms',
        'Basic quantum simulation',
        'Standard optimization',
        'Email support',
        'Cloud quantum access',
        'Documentation & tutorials'
      ],
      popular: false;
    },
    {
      name: 'Quantum Professional',
      price: '$9,999/month',
      description: 'For enterprises and advanced research',
      features: [
        'Unlimited quantum algorithms',
        'Advanced quantum simulation',
        'Custom optimization solutions',
        'Priority support',
        'Dedicated quantum hardware',
        'Custom integrations',
        'Training & consultation',
        'API access'
      ],
      popular: true;
    },
    {
      name: 'Quantum Enterprise',
      price: 'Custom',
      description: 'For large-scale quantum computing needs',
      features: [
        'Custom quantum algorithms',
        'On-premise quantum hardware',
        'Dedicated quantum team',
        '24/7 support',
        'White-label solutions',
        'Advanced security features',
        'Custom reporting',
        'Quantum consulting services'
      ],
      popular: false;
    }
  ];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4"></section>
        <div className="container mx-auto max-w-6xl"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
              <Cpu className="w-4 h-4" />
              <span>Next-Generation Quantum AI</span>
            </div>
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6"></h1>
              AI Quantum <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Computing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Harness the power of quantum computing with AI to solve complex problems that are impossible for classical computers.
              Experience exponential speedup and breakthrough capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a href="/contact" className="cyber-button px-8 py-4 text-lg"></a>
                Explore Quantum AI;
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg"></a>
                Schedule Demo;
              </a>
            </div>,
          </div>)
)
          {/* Quantum Advantages */})
          <div className="grid grid-cols-2 md: grid-cols-4 gap-6 mb-16">),
            {quantumAdvantages.map((advantage, index) => (
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4"></div>
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <advantage.icon className="w-8 h-8 text-cyan-400" />
                <div className="text-3xl font-bold text-cyan-400 mb-2">{advantage.metric}</div><div className="text-gray-300">{advantage.description}</div>
              </div>
            ))}
          </div>
        </section>

      {/* Features Section */}
      <section className="py-16 px-4"></section>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Revolutionary Quantum AI Features</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Our quantum computing platform combines the power of quantum mechanics with artificial intelligence</p>
              to deliver unprecedented computational capabilities.<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-colors"></div>
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4"></div>
                  <feature.icon className="w-6 h-6 text-cyan-400" />
            <h2 className="text-4xl font-bold text-white mb-6"></h2>
              Revolutionary Quantum AI Features;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Our quantum computing platform combines the power of quantum mechanics with artificial intelligence;
              to deliver unprecedented computational capabilities.
            </p>
          </div>

          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover: border-cyan-400/40 transition-colors">,
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4">,
                  <feature.icon className="w-6 h-6 text-cyan-400" />,
                </div>,
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p><ul className="space-y-2">{feature.benefits.map((benefit, idx) => (</ul>
                    <li key={idx} className="flex items-center text-sm text-gray-300"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" >{benefit}</CheckCircle>
                    </CheckCircle>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4 bg-slate-800/30"></section>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Quantum AI Applications</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Discover how quantum AI is transforming industries and solving previously impossible problems.</p><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{applications.map((app, index) => (</div>
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover:border-purple-400/40 transition-colors"></div>
                <div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mb-4"></div>
                  <app.icon className="w-6 h-6 text-purple-400" />
            <h2 className="text-4xl font-bold text-white mb-6"></h2>
              Quantum AI Applications;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Discover how quantum AI is transforming industries and solving previously impossible problems.
            </p>
          </div>

          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {applications.map((app, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover: border-purple-400/40 transition-colors">,
                <div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mb-4">,
                  <app.icon className="w-6 h-6 text-purple-400" />,
                </div>,
                <h3 className="text-xl font-semibold text-white mb-3">{app.title}</h3>
                <p className="text-gray-300 mb-4">{app.description}</p><div className="space-y-2">{app.useCases.map((useCase, idx) => (</div>
                    <div key={idx} className="flex items-center text-sm text-purple-300"></div>
                      <Target className="w-4 h-4 mr-2" >{useCase}</Target>
                    </Target>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Pricing Section */}
      <section className="py-16 px-4"></section>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Quantum Computing Plans</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Access cutting-edge quantum computing resources with flexible pricing options.</p><div className="grid md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</div><div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 ${
                plan.popular
                  ? 'border-cyan-400/40 ring-2 ring-cyan-400/20'
                  : 'border-gray-600/50'
              }`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
            <h2 className="text-4xl font-bold text-white mb-6"></h2>
              Quantum Computing Plans;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Access cutting-edge quantum computing resources with flexible pricing options.
            </p>
          </div>
        </section>

          <div className="grid md: grid-cols-3 gap-8">,
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 ${
                plan.popular;
                  ? 'border-cyan-400/40 ring-2 ring-cyan-400/20'}
                  : 'border-gray-600/50'}
              }`}></div>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium"></span>
                      Most Popular;
                    </span>
                  </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div><p className="text-gray-300">{plan.description}</p><ul className="space-y-3 mb-8">{plan.features.map((feature, idx) => (</ul>
                    <li key={idx} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" >{feature}</CheckCircle>
                    </CheckCircle>
                  ))}
                <a href="/contact" className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular;
                    ? 'bg-cyan-400 text-slate-900 hover: bg-cyan-300'}
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'}
                }`}></a>
                  Get Started;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-800/30"></section>
        <div className="container mx-auto max-w-4xl text-center"></section>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience Quantum AI?</h2><p className="text-xl text-gray-300 mb-8">Join the quantum revolution and unlock the power of quantum computing with AI.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg">Start Quantum Journey</a>
              <ArrowRight className="w-5 h-5 ml-2" /></ArrowRigh>
            <a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">Schedule Consultation</a>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg"></a>
              Start Quantum Journey;
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg"></a>
              Schedule Consultation;
            </a>
          </div>
        </div>
      </section>

      <Footer />,
    </div>);
};

  return null;
};

export default function AiQuantumComputingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Quantum Computing - Zion Tech Group</title>
        <meta name="description" content="Ai Quantum Computing solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Quantum Computing</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai quantum computing solutions designed to meet your business needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
  return null;
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function AiquantumcomputingPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Ai Quantum Computing - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Ai Quantum Computing</h1>
        <p className="text-lgtext-gray-300mb-8">Professional ai quantum computing services coming soon.</p>
          Contact Us

  );

import React from 'react';
import { Helmet } from 'react-helmet-async';
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AiquantumcomputingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title>Ai Quantum Computing - Zion Tech Group</title>
        <meta name="description" content="Professional ai quantum computing services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Quantum Computing</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai quantum computing services coming soon.</p>
          
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
      </div>
    </div>
  );
}
