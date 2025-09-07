import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { ;
  Check, Star, Zap, Shield, Rocket, Brain, Atom, ;
  Users, Globe, Code, Server, Cpu, ArrowRight,;
  TrendingUp, Award, Clock, DollarSign;
} from 'lucide-react',;
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
;
export default function PricingPage() {;
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly'),;
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null),;
;
  const pricingPlans = [;
    {;
      id: 'starter';,;
      name: 'Starter';,,
  description: 'Perfect for small businesses getting started with AI';,;
      monthlyPrice: 997;,;
      annualPrice: 9970;,;
      icon: Rocket;,;
      color: 'from-blue-500 to-cyan-500';,;
      textColor: 'text-blue-400';,;
      popular: false;,;
      features:[;
        'AI Business Intelligence BasicUp to 5 team members',;
        'Basic analytics dashboardEmail support',;
        '14-day free trialStandard integrations';
      ],;
      cta: 'Start Free Trial';,;
      ctaColor:'from-blue-500 to-cyan-600';
    },;
    {;
      id: 'professional';,;
      name: 'Professional';,,
  description: 'Advanced features for growing businesses';,;
      monthlyPrice: 2497;,;
      annualPrice: 24970;,;
      icon: Brain;,;
      color: 'from-purple-500 to-pink-500';,;
      textColor: 'text-purple-400';,;
      popular: true;,;
      features:[;
        'AI Business Intelligence ProAI Customer Experience',;
        'Up to 25 team membersAdvanced analytics & reporting',;
        'Priority support30-day free trial',;
        'Custom integrationsAdvanced AI models';
      ],;
      cta: 'Start Free Trial';,;
      ctaColor:'from-purple-500 to-pink-600';
    },;
    {;
      id: 'enterprise';,;
      name: 'Enterprise';,,
  description: 'Full-scale solutions for large organizations';,;
      monthlyPrice: 4997;,;
      annualPrice: 49970;,;
      icon: Shield;,;
      color: 'from-green-500 to-emerald-500';,;
      textColor: 'text-green-400';,;
      popular: false;,;
      features:[;
        'All Professional featuresQuantum Cybersecurity',;
        'Edge Computing OrchestrationUnlimited team members',;
        'Custom AI developmentDedicated support manager',;
        '60-day free trialWhite-label solutions',;
        'SLA guaranteesOn-premise deployment';
      ],;
      cta: 'Contact Sales';,;
      ctaColor:'from-green-500 to-emerald-600';
    },;
    {;
      id: 'custom';,;
      name: 'Custom';,,
  description: 'Tailored solutions for unique requirements';,;
      monthlyPrice: 'Custom';,;
      annualPrice: 'Custom';,;
      icon: Code;,;
      color: 'from-orange-500 to-red-500';,;
      textColor: 'text-orange-400';,;
      popular: false;,;
      features:[;
        'Fully customized solutionsSpace technology integration',;
        'Quantum computing accessDedicated development team',;
        '24/7 premium supportCustom trial period',;
        'Exclusive featuresStrategic partnership',;
        'ROI optimizationFuture technology access';
      ],;
      cta: 'Get Custom Quote';,;
      ctaColor:'from-orange-500 to-red-600';
    }
  ],;
;
  const addOns = [;
    {;
      name: 'AI Consulting';,,
  description: 'Strategic AI implementation guidance';,;
      monthlyPrice: 997;,;
      annualPrice: 9970;,;
      icon: Brain;,;
      color:'from-purple-500 to-pink-500';
    },;
    {;
      name: 'Quantum Computing';,,
  description: 'Access to quantum computing resources';,;
      monthlyPrice: 2997;,;
      annualPrice: 29970;,;
      icon: Atom;,;
      color:'from-cyan-500 to-blue-500';
    },;
    {;
      name: 'Space Technology';,,
  description: 'Space mining and satellite AI systems';,;
      monthlyPrice: 7997;,;
      annualPrice: 79970;,;
      icon: Rocket;,;
      color:'from-indigo-500 to-purple-500';
    },;
    {;
      name: 'Custom Development';,,
  description: 'Tailored AI solution development';,;
      monthlyPrice: 4997;,;
      annualPrice: 49970;,;
      icon: Code;,;
      color:'from-green-500 to-emerald-500';
    }
  ],;
;
  const savings = {;
    monthly: 0;,;
    annual:20;
  },;
;
  const handlePlanSelect = (planId:string) => {;
    setSelectedPlan(planId),;
    if (planId === 'custom') {;
      window.location.href = '/contact';
    } else {;
      window.location.href = '/contact',;
    }
  },;
;
  return (;
</string>
pr-12325
    <>;
      <Head>;

        <title>Pricing - Zion Tech Group | Transparent Pricing for Revolutionary Technology</title>;
        <meta name="description" content="Explore Zion Tech Group's transparent pricing for AI, quantum computing, and space technology solutions. Start with a free trial today!" />;"
</meta>"
        <meta name="keywords" content="pricing, AI services pricing, quantum computing cost, space technology pricing, Zion Tech Group pricing" />;"
        <meta property="og:title" content="Pricing - Zion Tech Group" />;"
        <meta property="og:description" content="Transparent pricing for revolutionary technology solutions." />;"
        <meta property="og:type" content="website" />;"
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />;"
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />;"
</link>
      <EnhancedNavigation />;
"
      <main className="min-h-screen bg-black text-white">;"
</main>"
        <section className="relative pt-32 pb-20 overflow-hidden">;"
</section>"
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />;"
</div>"
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]" />;"
          <div className="max-w-7xl mx-auto px-6 relative z-10">;"
</div>
            <motion.div;
              initial={{ opacity: 0;, y: 30 ;}}
              animate={{ opacity: 1;, y: 0 ;}}
              transition={{ duration: 0.8 ;}}"
              className="text-center";"
            >;
</motion>"
              <h1 className="text-5xl md:text-7xl font-bold mb-8">;"
</h1>"
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;"
</span>
                </span>;
              </h1>;"
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">;"
</p>
              </p>;"
              <div className="flex items-center justify-center space-x-4 mb-8">;"
                <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' :'text-gray-400'}`}>;
                <button;
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' :'monthly')}
</button>
                  <div;`;
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${;
                      billingCycle === 'annual' ? 'translate-x-8' :'translate-x-1';`;
                    }`}
                  />;
                </button>;`;
                <span className={`text-lg ${billingCycle === 'annual' ? 'text-white' :'text-gray-400'}`}>;
                    <span className="ml-2 text-sm bg-green-500 text-white px-2 py-1 rounded-full">;"
              </div>;"
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">;"
                <div className="text-center">;"
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">;"
                    <Check className="w-6 h-6 text-white" />;"

                  <div className="text-white font-semibold mb-2">Free Trials</div>;""
                  <div className="text-gray-400 text-sm">Start with no commitment</div>;"
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">;"
                    <Shield className="w-6 h-6 text-white" />;"

                  <div className="text-white font-semibold mb-2">No Hidden Fees</div>;""
                  <div className="text-gray-400 text-sm">Transparent pricing</div>;"
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">;"
                    <Users className="w-6 h-6 text-white" />;"

                  <div className="text-white font-semibold mb-2">24/7 Support</div>;""
                  <div className="text-gray-400 text-sm">Always here to help</div>;"
                </div>;
            </motion.div>;
        </section>;"
        <section className="py-20 relative">;"
          <div className="max-w-7xl mx-auto px-6">;"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;"
                  key={plan.id}
                  whileInView={{ opacity: 1;, y: 0 ;}}
                  transition={{ duration: 0.6;, delay: index * 0.1 ;}}
                  viewport={{ once: true ;}}`;
                  className={`relative ${;"
                    plan.popular ? 'lg:scale-105' :;`;
</motion>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;"
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">;"
                    </div>;`;
                  <div className={`p-8 rounded-3xl border transition-all duration-300 hover:scale-105 h-full flex flex-col ${;
                    plan.popular;"
                      ? 'border-purple-500 bg-gradient-to-br from-purple-500/10 to-pink-500/10';
                      :'border-gray-700 bg-gradient-to-br from-gray-900/50 to-gray-800/50 hover:border-gray-600';`;
                  }`}>;
                    <div className="text-center mb-8">;"
</div>`;
                      <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>;
                        <plan.icon className="w-8 h-8 text-white" />;"
</plan>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>;""
                      <p className="text-gray-400 text-sm leading-relaxed">{plan.description}</p>;"
                      <div className="mb-2">;"
                        <span className="text-4xl font-bold text-white">;"
                        </span>;"
                          <span className="text-gray-400 text-lg">/month</span>;"
                        <div className="text-sm text-green-400">;"
                    <div className="flex-grow mb-8">;"
                      <ul className="space-y-3">;"
</ul>"
                          <li key={idx} className="flex items-start space-x-3">;"
</li>"
                            <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />;"
                            <span className="text-gray-300 text-sm">{feature}</span>;"
                          </li>;
                      </ul>;
                      onClick={() => handlePlanSelect(plan.id)}
                    </button>;
              ))}
        <section className="py-20 relative bg-gradient-to-r from-gray-900/50 to-gray-800/50">;"
              transition={{ duration: 0.8 ;}}
              viewport={{ once: true ;}}"
              className="text-center mb-16";"
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;"
</h2>
              </h2>;"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;"
              </p>;
;"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;"
                  key={addon.name}
                  initial={{ opacity: 0;, y: 20 ;}}
                  className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-gray-600 transition-all duration-300";"
</motion>`;
                  <div className={`w-12 h-12 bg-gradient-to-br ${addon.color} rounded-xl flex items-center justify-center mb-4`}>;
                    <addon.icon className="w-6 h-6 text-white" />;"
</addon>
                  <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>;""
                  <p className="text-gray-400 text-sm mb-4">{addon.description}</p>;""
                    <div className="text-2xl font-bold text-white mb-2">;"
                    <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">;"
          <div className="max-w-4xl mx-auto px-6">;"
              <p className="text-xl text-gray-300">;"
            <div className="space-y-6">;"
                  key={index}
                  className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-6";"
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>;""
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>;"
              <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/20 rounded-3xl p-16">;"
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">;"
                <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">;"
                <div className="flex flex-col sm:flex-row gap-6 justify-center">;"
                  <a;"
                    href="/contact";""
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40";"
</a>
                  </a>;
                    href="tel:+13024640950";""
                    className="border-2 border-cyan-500/50 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm";"
                <div className="mt-10 text-sm text-gray-400">;"
                  <p>Questions? <a href="/contact" className="text-cyan-400 hover:text-cyan-300 underline">Contact our team</a> for personalized guidance.</p>;"
        </section>;
      </main>;
      <EnhancedFooter />;

    </>;
  );
}
"`;