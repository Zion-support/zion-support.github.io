import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, TrendingUp, Shield, Zap, BarChart, Users, CreditCard, Smartphone, CheckCircle, ArrowRight, Phone } from 'lucide-react';

const AiFintechPage: React.FC = () => {
  const features = [
    {
      icon: DollarSign,
      title: 'AI Trading',
      description: 'Advanced AI algorithms for automated trading and investment management',
      benefits: ['Real-time market analysis', 'Automated trading decisions', 'Risk management']
    },
    {
      icon: Shield,
      title: 'Fraud Detection',
      description: 'AI-powered fraud detection and prevention systems',
      benefits: ['Real-time monitoring', 'Pattern recognition', 'Instant alerts']
    },
    {
      icon: BarChart,
      title: 'Risk Assessment',
      description: 'Intelligent risk assessment and credit scoring systems',
      benefits: ['Predictive analytics', 'Credit scoring', 'Portfolio optimization']
    }
  ];

  const useCases = [
    {
      title: 'Algorithmic Trading',
      description: 'Automated trading strategies powered by AI',
      icon: '📈'
    },
    {
      title: 'Credit Scoring',
      description: 'AI-driven credit assessment and approval',
      icon: '💳'
    },
    {
      title: 'Payment Processing',
      description: 'Intelligent payment processing and fraud prevention',
      icon: '💸'
    },
    {
      title: 'Wealth Management',
      description: 'AI-powered portfolio management and advisory',
      icon: '🏦'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Fintech
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Revolutionary Financial AI Solutions
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
            Transform your financial services with cutting-edge AI technology. 
            From automated trading to fraud detection, our AI fintech solutions 
            deliver unprecedented accuracy and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <Link
              to="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Key Features
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Our AI fintech solutions provide comprehensive financial technology capabilities
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="text-4xl mb-4 text-cyan-400">
                  <feature.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Use Cases
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Discover how AI fintech can transform your financial services
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-6 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Pricing
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Choose the perfect plan for your fintech needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Starter</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$1,499/month</div>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-300">Basic AI trading algorithms</li>
                <li className="text-gray-300">Fraud detection system</li>
                <li className="text-gray-300">Email support</li>
                <li className="text-gray-300">Basic analytics</li>
              </ul>
              <Link
                to="/contact"
                className="block w-full text-center bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
            
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border-2 border-cyan-400">
              <h3 className="text-xl font-bold text-white mb-4">Professional</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$2,999/month</div>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-300">Advanced AI trading</li>
                <li className="text-gray-300">Real-time fraud detection</li>
                <li className="text-gray-300">Priority support</li>
                <li className="text-gray-300">Advanced analytics</li>
                <li className="text-gray-300">Custom integrations</li>
              </ul>
              <Link
                to="/contact"
                className="block w-full text-center bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
            
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">Custom</div>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-300">Full AI fintech suite</li>
                <li className="text-gray-300">Custom development</li>
                <li className="text-gray-300">24/7 dedicated support</li>
                <li className="text-gray-300">Enterprise analytics</li>
                <li className="text-gray-300">Regulatory compliance</li>
              </ul>
              <Link
                to="/contact"
                className="block w-full text-center bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Fintech?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with AI fintech today and revolutionize your financial services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <Link
              to="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AiFintechPage;
