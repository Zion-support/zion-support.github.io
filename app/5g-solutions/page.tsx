<<<<<<< HEAD
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Wifi, CheckCircle, ArrowRight, Network, Cpu, Smartphone } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-13a9

import { Helmet } from 'react-helmet-async';
import { Wifi, Shield, CheckCircle, ArrowRight, Clock, Network, Cpu, Smartphone, BarChart3 } from 'lucide-react';
=======
import { Wifi, CheckCircle, Network, Cpu, Smartphone } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c

const FiveGSolutionsPage: React.FC = () => {};
  const solutions = [
    {};
      name: "5G Implementation";
      description: "Complete 5G network deployment with zero-downtime migration and comprehensive testing.";
      features: ["Network planning & design", "Equipment installation", "Performance testing", "Compliance certification", "24/7 monitoring", "Maintenance support"];
      price: "From $5,999";
      marketPrice: "$12,999-49,999";
      popular: true;
      icon: <Wifi className="w-8 h-8" />;
      benefits: "Deploy 5G networks 60% faster than industry average"
    };
    {};
      name: "5G Network Infrastructure";
      description: "Robust 5G infrastructure with advanced tower installation and fiber optic connectivity.";
      features: ["Tower installation", "Fiber optics deployment", "Coverage optimization", "Signal boosting", "Maintenance contracts", "Performance monitoring"];
      price: "From $4,999";
      marketPrice: "$9,999-39,999";
      popular: false;
      icon: <Network className="w-8 h-8" />;
      benefits: "Achieve 99.9% network uptime with our infrastructure"
    };
    {};
      name: "5G IoT Solutions";
      description: "Comprehensive IoT connectivity solutions powered by 5G for smart devices and sensors.";
      features: ["Device connectivity", "Data analytics", "Real-time monitoring", "Edge computing", "Security protocols", "Scalable architecture"];
      price: "From $3,999";
      marketPrice: "$7,999-29,999";
      popular: true;
      icon: <Cpu className="w-8 h-8" />;
      benefits: "Connect up to 1M devices per square kilometer"
<<<<<<< HEAD
    };
    {};
      name: "5G Mobile Solutions";
      description: "Advanced mobile applications and services optimized for 5G networks.";
      features: ["App optimization", "Low latency streaming", "AR/VR integration", "Real-time collaboration", "Cloud integration", "Performance tuning"];
      price: "From $2,999";
      marketPrice: "$5,999-19,999";
      popular: false;
      icon: <Smartphone className="w-8 h-8" />;
=======
    },
    {
      name: "5G Mobile Solutions",
      description: "Advanced mobile applications and services optimized for 5G networks.",
      features: ["App optimization", "Low latency streaming", "AR/VR integration", "Real-time collaboration", "Cloud integration", "Performance tuning"],
      price: "From $2,999",
      marketPrice: "$5,999-19,999",
      popular: false,
      icon: <Smartphone className="w-8 h-8" />,
<<<<<<< HEAD
      benefits: "Deliver ultra-low latency experiences to mobile users"
=======
      benefits: "Deliver ultra-low latency mobile experiences"
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
    }
  ];

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>5G Solutions - Zion Tech Group | Next-Gen Connectivity</title>
        <meta name="description" content="Transform your business with our comprehensive 5G solutions. From network deployment to IoT connectivity, we deliver cutting-edge 5G technology." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              5G <span className="text-cyan-400">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unlock the full potential of 5G technology with our comprehensive solutions. 
              From network deployment to IoT connectivity, we deliver next-generation connectivity.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="text-cyan-400 mr-4">{solution.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{solution.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Features</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-white">{solution.price}</span>
                      <span className="text-sm text-gray-400 ml-2 line-through">{solution.marketPrice}</span>
                    </div>
                    {solution.popular && (
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-cyan-400 mb-6">{solution.benefits}</p>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
=======
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G solutions including network implementation, infrastructure, IoT, and mobile applications." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">5G Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with cutting-edge 5G technology solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 relative">
                {solution.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-blue-400 mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{solution.name}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-green-400">{solution.price}</div>
                  <div className="text-sm text-gray-400 line-through">{solution.marketPrice}</div>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-blue-300 font-semibold">{solution.benefits}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
      </div>
    </>
  );
};

export default FiveGSolutionsPage;
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-13a9
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-c92c
