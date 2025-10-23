<<<<<<< HEAD
"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Brain, Globe, Shield, Zap } from "lucide-react";
const AiSupplyChainOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced Technology",
      description:
        "Cutting-edge solutions powered by the latest technology and AI.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description:
        "Optimized for speed and efficiency with real-time processing capabilities.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level security with end-to-end encryption and compliance standards.",
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description:
        "Scale effortlessly across multiple regions with automatic load balancing.",
    },
  ];
=======
import React from "react";
import { Helmet } from "react-helmet-async";
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630

  return (
    <React.Fragment>
      <Helmet>
<<<<<<< HEAD
        <title>
          Ai Supply Chain Optimizer - Zion Tech Group | Advanced AI and IT
          Solutions
        </title>
        <meta
          name="description"
          content="Professional aisupplychainoptimizer solutions powered by advanced AI and cutting-edge technology."
        />
        <meta
          name="keywords"
          content="aisupplychainoptimizer, AI solutions, IT services, automation, technology, business solutions"
=======
        <title>AI Supply Chain Optimizer - Zion Tech Group</title>
        <meta
          name="description"
          content="Advanced AI-powered supply chain optimization for logistics, inventory management, and demand forecasting. Streamline your supply chain operations."
        />
        <meta
          name="keywords"
          content="AI supply chain optimizer, logistics AI, inventory management, demand forecasting, supply chain automation"
        />
        <link
          rel="canonical"
          href="https://ziontechgroup.com/ai-supply-chain-optimizer"
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ai Supply Chain Optimizer
            </h1>
<<<<<<< HEAD
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional aisupplychainoptimizer solutions powered by advanced
              AI and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
=======
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Optimize your supply chain operations with AI-powered logistics
              management. Reduce costs, improve efficiency, and enhance
              visibility across your entire supply network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Inventory Optimization
              </h3>
              <p className="text-gray-300">
                Optimize inventory levels and reduce carrying costs with
                AI-powered demand forecasting.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Logistics Planning
              </h3>
              <p className="text-gray-300">
                Plan optimal routes, schedules, and transportation modes for
                maximum efficiency.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Demand Forecasting
              </h3>
              <p className="text-gray-300">
                Predict future demand with high accuracy using machine learning
                and historical data.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Risk Management
              </h3>
              <p className="text-gray-300">
                Identify and mitigate supply chain risks with AI-powered risk
                assessment tools.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Real-time Tracking
              </h3>
              <p className="text-gray-300">
                Monitor shipments and inventory in real-time with comprehensive
                visibility tools.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Cost Optimization
              </h3>
              <p className="text-gray-300">
                Reduce operational costs through intelligent optimization of
                resources and processes.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Optimize Your Supply Chain?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 neon-glow"
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
              >
                Get Started
              </a>
              <a
<<<<<<< HEAD
                href="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
=======
                href="/pricing"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
              >
                View All Services
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-lg text-gray-300">
                Everything you need for success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-2xl p-8 backdrop-blur-lg border border-white/10 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let us help you implement this solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Project
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

<<<<<<< HEAD
export default AiSupplyChainOptimizerPage;
=======
export default AISupplyChainOptimizerPage;
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
