<<<<<<< HEAD
'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import {Truck, BarChart, Zap, Shield, CheckCircle, Target}}from 'lucide-react';
const SupplyChainOptimizerPage: React.FC = () => {,
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Truck, BarChart, Zap, Shield, CheckCircle, Target } from 'lucide-react'
const SupplyChainOptimizerPage: React.FC = () => {
>>>>>>> origin/main
  const features = [
<<<<<<< HEAD
    { icon: Truck, title: 'Logistics Optimization', description: 'AI-powered logistics optimization for efficient supply chain management.' ,},
    {icon: BarChart, title: 'Demand Forecasting', description: 'Accurate demand forecasting and inventory optimization using AI analytics.' ,},
    {icon: Zap, title: 'Process Automation', description: 'Automated supply chain processes and workflow optimization.' ,},
    {icon: Shield, title: 'Risk Management', description: 'Comprehensive risk assessment and mitigation strategies.' ,},
    {icon: CheckCircle, title: 'Quality Control', description: 'Automated quality control and compliance monitoring.' ,},
    {icon: Target, title: 'Performance Analytics', description: 'Real-time performance tracking and optimization recommendations.' ,}]
  return(<React.Fragment>)</React.Fragment>
      <Helmet />
=======
    { icon: Truck, title: 'Logistics Optimization', description: 'AI-powered logistics optimization for efficient supply chain management.' },
    { icon: BarChart, title: 'Demand Forecasting', description: 'Accurate demand forecasting and inventory optimization using AI analytics.' },
    { icon: Zap, title: 'Process Automation', description: 'Automated supply chain processes and workflow optimization.' },
    { icon: Shield, title: 'Risk Management', description: 'Comprehensive risk assessment and mitigation strategies.' },
    { icon: CheckCircle, title: 'Quality Control', description: 'Automated quality control and compliance monitoring.' },
    { icon: Target, title: 'Performance Analytics', description: 'Real-time performance tracking and optimization recommendations.' }
  ]
  return (
<<<<<<< HEAD
    <>
      <Helmet>
>>>>>>> origin/main
        <title>Supply Chain Optimizer | Zion Tech Group - AI-Powered Supply Chain Management</title>
=======
    <React.Fragment>
      </React><Helmet>
        </Helmet><title>Supply Chain Optimizer | Zion Tech Group - AI-Powered Supply Chain Management</title>
>>>>>>> origin/main
        <meta name="description" content="Optimize your supply chain with AI-powered tools. Logistics optimization, demand forecasting, and automated processes." />
        <meta name="keywords" content="supply chain optimization, logistics management, demand forecasting, supply chain AI, inventory optimization" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">Supply Chain Optimizer</h1>,
=======
        </div><section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Supply Chain Optimizer</h1>
>>>>>>> origin/main
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Optimize your supply chain with AI-powered tools.</p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,</div>
              {features.map((feature, index) => (
<<<<<<< HEAD
                <div key={index}className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover: border-cyan-400/50 transition-all duration-300">,</div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
=======
                </div><div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  </div><div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    </div><feature.icon className="w-8 h-8 text-white" />
>>>>>>> origin/main
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description</p>}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default SupplyChainOptimizerPage
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Supply Chain Optimizer
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Optimize your supply chain with AI-powered tools.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}
                  <p className="text-gray-300">{feature.description}
              ))}
  )
}
export default SupplyChainOptimizerPage</div></div></div></div></div></div></p></p></h1></h3></section>
