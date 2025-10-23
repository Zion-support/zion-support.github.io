import React from 'react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIProjectManagerPage: React.FC = () => {
  const features = [
    'AI-powered project planning and resource allocation',
    'Intelligent timeline prediction and risk assessment',
    'Smart task management with priority optimization',
    'Real-time collaboration and team coordination',
    'Predictive analytics for project success',
    'Automated progress tracking and reporting',
    'Budget optimization and cost forecasting',
    'Integration with popular project management tools'
  ];

  const benefits = [
    '40% increase in project delivery speed',
    '70% reduction in project delays',
    '85% improvement in planning accuracy',
    '30% cost reduction through optimization',
    '95% team productivity boost',
    '50% faster decision making'
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$199',
      period: '/month',
      features: ['Up to 5 projects', '10 team members', 'Basic AI planning', 'Email support'],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$399',
      period: '/month',
      features: ['Unlimited projects', '50 team members', 'Advanced AI features', 'Priority support', 'Custom integrations'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: 'Custom',
      period: '',
      features: ['Unlimited everything', 'Custom AI training', 'Dedicated support', 'On-premise deployment', 'SLA guarantee'],
      popular: false
    }
  ];

  return (
    <>
      <Navigation /><>
</Navigation />
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div><>
<//div>
<main className="container mx-auto px-4 py-16 pt-24"></main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16"><>
</section className="text-center mb-16">
<h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text"></h1><//h1>
              AI Project Manager Pro</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl text-cyan-400 mb-8"></p><//p>
              Intelligent project planning with AI-powered resource optimization</p><>
<//p>
</p><>
<//p>
<p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8"></p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your project management with our advanced AI system that predicts timelines, </p><//p>
              optimizes resources, and ensures project success through intelligent automation.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              ></a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Get Started Today
              </a><>
<//a>
<a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              ><>
</a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
<Phone className="w-5 h-5" /></Phone className="w-5 h-5" />
                +1 302 464 0950
              </a><>
<//a>
</div><>
<//div>
</section><//section>
          {/* Features Section */}
          <section className="mb-16"><>
</section className="mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text"></h1><//h1>
              Powerful AI Features</h1><>
<//h1>
</h2><>
<//h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div><//div>
              {features.map((feature, index) => (</div><>
<//div>
<div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300"></div><>
<//div>
<CheckCircle className="w-8 h-8 text-green-400 mb-4" /><>
</CheckCircle className="w-8 h-8 text-green-400 mb-4" />
<h3 className="text-lg font-semibold text-white mb-2">{feature}</h3><>
<//h3>
</div><//div>
              ))}
            </div><>
<//div>
</section><//section>
          {/* Benefits Section */}
          <section className="mb-16"><>
</section className="mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text"></h1><//h1>
              Proven Results</h1><>
<//h1>
</h2><>
<//h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div><//div>
              {benefits.map((benefit, index) => (</div><>
<//div>
<div key={index} className="quantum-card p-6 text-center hover:scale-105 transition-all duration-300"></div><>
<//div>
<TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-4" /><>
</TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
<p className="text-lg text-white font-semibold">{benefit}</p><>
<//p>
</div><//div>
              ))}
            </div><>
<//div>
</section><//section>
          {/* Pricing Section */}
          <section className="mb-16"><>
</section className="mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text"></h1><//h1>
              Choose Your Plan</h1><>
<//h1>
</h2><>
<//h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"></div><//div>
              {pricing.map((plan, index) => (</div><>
<//div>
<div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}></div><//div>
                  {plan.popular && (</div><>
<//div>
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div><>
<//div>
<div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold"></div><//div>
                        Most Popular</div><>
<//div>
</div><>
<//div>
</div><//div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3><>
<//h3>
<div className="mb-6"></div><>
<//div>
<span className="text-4xl font-bold text-cyan-400">{plan.price}</span><>
<//span>
<span className="text-gray-300">{plan.period}</span><>
<//span>
</div><>
<//div>
<ul className="space-y-3 mb-8"></ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300"><>
</li key={featureIndex} className="flex items-center text-gray-300">
<CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" /></CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li><//li>
                    ))}
                  </ul><>
<//ul>
<a
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  ></a
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a><>
<//a>
</div><//div>
              ))}
            </div><>
<//div>
</section><//section>
          {/* Contact Section */}
          <section className="text-center"><>
</section className="text-center">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text"></h1><//h1>
              Ready to Transform Your Project Management?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"></p><//p>
              Contact us today to learn more about AI Project Manager Pro and how it can revolutionize your project management processes.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              ></a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Contact Us
              </a><>
<//a>
<a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              ><>
</a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
<Phone className="w-5 h-5" /></Phone className="w-5 h-5" />
                +1 302 464 0950
              </a><>
<//a>
</div><>
<//div>
</section><>
<//section>
</main><>
<//main>
<Footer /><>
</Footer />
</div><>
<//div>
</><//>
  );
};

export default AIProjectManagerPage;