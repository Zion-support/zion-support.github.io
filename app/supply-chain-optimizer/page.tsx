'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Truck, BarChart, Zap, Shield, CheckCircle, Target } from 'lucide-react'
const SupplyChainOptimizerPage: React.FC = () => {
const features = [
{ icon: Truck, title: 'Logistics Optimization', description: 'AI-powered logistics optimization for efficient supply chain management.' },
{ icon: BarChart, title: 'Demand Forecasting', description: 'Accurate demand forecasting and inventory optimization using AI analytics.' },
{ icon: Zap, title: 'Process Automation', description: 'Automated supply chain processes and workflow optimization.' },
{ icon: Shield, title: 'Risk Management', description: 'Comprehensive risk assessment and mitigation strategies.' },
{ icon: CheckCircle, title: 'Quality Control', description: 'Automated quality control and compliance monitoring.' },
{ icon: Target, title: 'Performance Analytics', description: 'Real-time performance tracking and optimization recommendations.' }
]
return (
<>
<Head>
        <title>Supply Chain Optimizer | Zion Tech Group - AI-Powered Supply Chain Management</title>
<meta name="description" content="Optimize your supply chain with AI-powered tools. Logistics optimization, demand forecasting, and automated processes." />
</Head>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<section className="py-20 px-4">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h1>Supply Chain Optimizer</h1>
<p>Optimize your supply chain with AI-powered tools.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{features.map((feature, index) => (
<div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
<div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
<feature>
</feature>
<h3>{feature.title}</h3>
<p>{feature.description}</p>
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