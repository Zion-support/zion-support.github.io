import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CreditCard, Shield, TrendingUp, CheckCircle, DollarSign, Zap, Target } from 'lucide-react';

export default function AiFintechPage() {
  const features = [
    {
      icon: <CreditCard className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Payments',
      description: 'Secure, intelligent payment processing with fraud detection and risk assessment.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Advanced Security',
      description: 'Bank-grade security with AI-powered threat detection and prevention.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: 'Smart Analytics',
      description: 'Real-time financial analytics and insights for better decision making.'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'Instant Processing',
      description: 'Lightning-fast transaction processing with minimal latency.'
    }
  ];

  const benefits = [
    "Reduce transaction costs by 40%",
    "Improve fraud detection by 95%",
    "Process payments 10x faster",
    "Enhance customer experience",
    "Ensure regulatory compliance",
    "Scale globally with ease"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Fintech Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered fintech solutions. Secure payments, smart analytics, and advanced financial services powered by artificial intelligence." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">AI Fintech Solutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your financial services with our AI-powered fintech platform. 
            Secure payments, smart analytics, and advanced financial solutions for the modern world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
              <DollarSign className="mr-2 w-5 h-5" />
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Revolutionary Fintech Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge AI technology for modern financial services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Platform?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI fintech platform combines cutting-edge technology with financial expertise 
                to deliver solutions that drive growth and innovation.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
              <div className="text-center">
                <Target className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform?</h3>
                <p className="text-gray-300 mb-6">
                  Join financial institutions using our platform to revolutionize their services.
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Start Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Revolutionize Your Financial Services</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't let outdated systems hold you back. Embrace the future of fintech 
              with our AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}</CreditCard></Shield></TrendingUp></Zap></meta></ArrowRight></ArrowRight></ArrowRight></DollarSign></CheckCircle></Target>