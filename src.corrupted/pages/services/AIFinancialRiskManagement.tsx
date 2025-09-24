import React from "react"
import { motion } from "framer-motion"
import { Shield, BarChart3, AlertTriangle, TrendingUp, CheckCircle, ArrowRight, Brain, Zap, Target, Globe, Lock, Clock, DollarSign, Star, Rocket, Cpu, Cloud, Database, Network, FileText, Search, Filter, Activity, Sparkles, Award, GitFork, Atom, Leaf, Gamepad2, Coins, Satellite, MessageCircle, Server, ShoppingCart, Smartphone, Users, Eye, Heart, Building, Car, Plane, Ship, Truck, CreditCard, PiggyBank, Calculator, PieChart, LineChart, Activity as ActivityIcon, TrendingDown, AlertCircle, CheckCircle2, XCircle, Info, HelpCircle, Settings, RefreshCw, Download, Upload, Share2, ExternalLink, ArrowUpRight, ChevronRight, ChevronDown, ChevronUp, Minus, Plus, Equal, Divide, Percent, Hash, AtSign, Hash as HashIcon, AtSign as AtSignIcon } from "lucide-react"
const AIFinancialRiskManagement = () => {;
  const features = [;
    {;
      icon: Brain,title: 'AI-Powered Risk Assessment',description: 'Advanced machine learning algorithms that analyze financial data in real-time to identify potential risks and predict market volatility.',benefits: ['Real-time risk monitoringPredictive risk modeling', 'Automated risk scoringMulti-factor analysis']
    },;
    {;
      icon: Shield,title: 'Comprehensive Risk Coverage',description: 'Cover all types of financial risks including market risk, credit risk, operational risk, liquidity risk, and compliance risk.',;
      benefits: ['360-degree risk viewIntegrated risk framework', 'Regulatory complianceRisk aggregation']
    },;
    {;
      icon: BarChart3,title: 'Predictive Analytics',description: 'Forecast potential financial losses and market movements using historical data analysis and machine learning models.',benefits: ['Loss forecastingMarket trend prediction', 'Scenario analysisStress testing']
    },;
    {;
      icon: AlertTriangle,title: 'Real-time Risk Alerts',description: 'Instant notifications when risk thresholds are exceeded, enabling proactive risk management and rapid response.',;
      benefits: ['Instant alertsCustomizable thresholds', 'Escalation workflowsMobile notifications']
    },;
    {;
      icon: TrendingUp,title: 'Portfolio Risk Optimization',description: 'AI-driven portfolio optimization that balances risk and return while maintaining compliance with investment mandates.',benefits: ['Risk-adjusted returnsPortfolio rebalancing', 'Asset allocation optimizationPerformance tracking']
    },;
    {;
      icon: Lock,title: 'Regulatory Compliance',description: 'Automated compliance monitoring for Basel III, Solvency II, IFRS 9, and other regulatory frameworks.',;
      benefits: ['Automated reportingRegulatory updates', 'Audit trailsCompliance dashboards']
    };
  ],;

  const pricing = [;
    {;
      name: 'Professional',price: '$3,500',;
      period: '/month',description: 'Perfect for financial institutions',features: [;
        'Up to $100M portfolio valueBasic risk assessment'
        'Standard compliance reportingEmail support',;
        'Basic risk alerts'
      ],;
      cta: 'Get Started',popular: false;
    };
    {;
      name: 'Enterprise',price: '$8,500',;
      period: '/month',description: 'Ideal for large financial organizations',features: [;
        'Up to $1B portfolio valueAdvanced AI risk modeling'
        'Full compliance automationPriority support',;
        'Custom risk frameworksAPI access',;
        'Real-time monitoring'
      ],;
      cta: 'Start Free Trial',popular: true;
    };
    {;
      name: 'Institutional',price: '$18,000',;
      period: '/month',description: 'For major financial institutions',features: [;
        'Unlimited portfolio valueCustom AI models'
        'White-label solutions24/7 dedicated support',;
        'Advanced integrationsCustom workflows',;
        'On-premise deployment'
      ],;
      cta: 'Contact Sales',popular: false;
    };
  ];
  const useCases = [;
    {;
      title: 'Investment Management',description: 'Optimize portfolio risk-return profiles and ensure compliance with investment mandates and regulatory requirements.',icon: PieChart,benefits: ['Portfolio optimizationRisk-adjusted returns', 'Compliance monitoringPerformance attribution']
    },;
    {;
      title: 'Commercial Banking',description: 'Manage credit risk, market risk, and operational risk across lending portfolios and trading operations.',;
      icon: Building,benefits: ['Credit risk assessmentMarket risk monitoring', 'Operational risk managementRegulatory reporting']
    },;
    {;
      title: 'Insurance & Reinsurance',description: 'Assess underwriting risk, investment risk, and catastrophe risk while maintaining solvency requirements.',;
      icon: Shield,benefits: ['Underwriting risk analysisInvestment risk management', 'Catastrophe modelingSolvency monitoring']
    },;
    {;
      title: 'Corporate Treasury',description: 'Manage financial risk exposure including interest rate risk, foreign exchange risk, and commodity price risk.',;
      icon: Calculator,benefits: ['Interest rate riskFX risk management', 'Commodity hedgingCash flow optimization']
    };
  ],;

  const riskTypes = [;
    {;
      title: 'Market Risk',description: 'Risk of losses due to changes in market prices, interest rates, and exchange rates.',;
      icon: TrendingUp,examples: ['Equity price riskInterest rate risk', 'Foreign exchange riskCommodity price risk']
    },;
    {;
      title: 'Credit Risk',description: 'Risk of losses due to borrowers or counterparties failing to meet their financial obligations.',icon: Users,examples: ['Default riskCounterparty risk', 'Concentration riskSettlement risk']
    },;
    {;
      title: 'Operational Risk',description: 'Risk of losses due to inadequate or failed internal processes, people, and systems.',;
      icon: Settings,examples: ['Technology failuresHuman errors', 'Process inefficienciesExternal events']
    },;
    {;
      title: 'Liquidity Risk',description: 'Risk of being unable to meet financial obligations when they come due.',icon: Activity,examples: ['Funding liquidity riskMarket liquidity risk', 'Asset liquidity riskContingent liquidity risk']
    };
  ],;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      {/* Hero Section */};
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-medium mb-6">;
              <[^>]*/>
              AI-Powered Financial Risk Management;
            </[^>]*>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              Intelligent Financial;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">;
                Risk Management;
              </[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Protect your financial assets with AI-driven risk management that provides real-time ;
              insights, predictive analytics, and automated compliance monitoring across all risk types.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                Start Free Trial;
                <[^>]*/>
              </[^>]*>
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                Schedule Demo;
                <[^>]*/>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Risk Types Section */};
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Comprehensive Risk Coverage;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our platform covers all major types of financial risk with AI-powered analysis ;
              and real-time monitoring capabilities.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {riskTypes.map((riskType, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="flex items-start mb-4">;
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">;
                    <[^>]*/>
                  </[^>]*>
                  <div>;
                    <h3 className="text-xl font-semibold text-white mb-2">{riskType.title}</[^>]*>
                    <p className="text-gray-300 mb-3">{riskType.description}</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="space-y-2">;
                  <h4 className="text-sm font-semibold text-red-400 mb-2">Examples:</[^>]*>
                  <ul className="space-y-1">;
                    {riskType.examples.map((example, idx) => (;
                      <li key={idx} className="flex items-center text-sm text-gray-400">;
                        <[^>]*/>
                        {example};
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Features Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Advanced AI-Powered Features;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our platform combines cutting-edge AI with comprehensive risk management to deliver ;
              actionable insights and automated compliance.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {features.map((feature, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</[^>]*>
                <p className="text-gray-300 mb-4">{feature.description}</[^>]*>
                <ul className="space-y-2">;
                  {feature.benefits.map((benefit, idx) => (;
                    <li key={idx} className="flex items-center text-sm text-gray-400">;
                      <[^>]*/>
                      {benefit};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Pricing Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Transparent Pricing;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Choose the plan that fits your financial risk management needs. ;
              All plans include our core AI-powered features.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {pricing.map((plan, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${;
                  plan.popular ;
                    ? 'border-red-500/50 ring-2 ring-red-500/20' ;
                    : 'border-gray-700'
                } hover:border-red-500/50 transition-all duration-300`};
              >;
                {plan.popular && (;&& (; (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">;
                      Most Popular;
                    </[^>]*>
                  </[^>]*>
                )};
                ;
                <div className="text-center mb-6">;
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</[^>]*>
                  <div className="flex items-baseline justify-center">;
                    <span className="text-4xl font-bold text-white">{plan.price}</[^>]*>
                    <span className="text-gray-400 ml-1">{plan.period}</[^>]*>
                  </[^>]*>
                  <p className="text-gray-300 mt-2">{plan.description}</[^>]*>
                </[^>]*>

                <ul className="space-y-3 mb-8">;
                  {plan.features.map((feature, idx) => (;
                    <li key={idx} className="flex items-center text-gray-300">;
                      <[^>]*/>
                      {feature};
                    </[^>]*>
                  ))};
                </[^>]*>

                <motion.button
                  whileHover={{ scale: 1.02 }};
                  whileTap={{ scale: 0.98 }};
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${;
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`};
                >;
                  {plan.cta};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Use Cases Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Industry Use Cases;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Our AI Financial Risk Management platform is trusted across the financial ;
              industry to protect assets and ensure regulatory compliance.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {useCases.map((useCase, index) => (;
              <motion.div
                key={index};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="flex items-start mb-4">;
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">;
                    <[^>]*/>
                  </[^>]*>
                  <div>;
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</[^>]*>
                    <p className="text-gray-300">{useCase.description}</[^>]*>
                  </[^>]*>
                </[^>]*>
                <ul className="space-y-2">;
                  {useCase.benefits.map((benefit, idx) => (;
                    <li key={idx} className="flex items-center text-sm text-gray-400">;
                      <[^>]*/>
                      {benefit};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/20 to-orange-900/20">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
              Ready to Protect Your Financial Assets?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8">;
              Join leading financial institutions that trust our AI-powered platform to ;
              manage risk and ensure compliance at scale.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                Start Free Trial;
                <[^>]*/>
              </[^>]*>
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="[^"]*"
              >;
                Contact Sales;
                <[^>]*/>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default AIFinancialRiskManagement;