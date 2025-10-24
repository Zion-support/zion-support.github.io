'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {Home, Users, DollarSign, BarChart, Shield, Zap} from 'lucide-react';
const PropertyManagementAIPage: React.FC = () => {
  const features = [
    { icon: Home, title: 'Property Portfolio Management', description: 'Comprehensive management of multiple properties with AI insights.' },
    {icon: Users, title: 'Tenant Management', description: 'Automated tenant screening, communication, and relationship management.'},
    {icon: DollarSign, title: 'Rent Optimization', description: 'AI-powered rent pricing and revenue optimization strategies.' },
    {icon: BarChart, title: 'Financial Analytics', description: 'Advanced financial reporting and property performance analytics.' },
    {icon: Shield, title: 'Maintenance Tracking', description: 'Predictive maintenance and automated work order management.' },
    {icon: Zap, title: 'Automation', description: 'Automated rent collection, lease renewals, and property operations.'}]
  return (<React.Fragment>
      <Helmet />
    <>
      <Helmet>
        <title>Property Management AI | Zion Tech Group - Intelligent Real Estate Management</title>
    <React.Fragment>
      </React><Helmet>
        </Helmet><title>Property Management AI | Zion Tech Group - Intelligent Real Estate Management</title>
        <meta name="description" content="Transform your property management with AI-powered tools. Optimize rent, manage tenants, and maximize property value." />
        <meta name="keywords" content="property management AI, real estate software, tenant management, rent optimization, property analytics" />
      <div className="min-h-screenbg-gradient-to-brfrom-slate-900via-purple-900 to-slate-900">
        <section className="py-20px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xlmd:text-6xlfont-bold text-white mb-6">Property Management AI</h1>,
              <p className="text-xltext-gray-300mb-8max-w-3xl mx-auto">Transform your property management with AI-powered tools.</p>
            </div>
            <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-3 gap-8">,</div>
              {features.map((feature, index) => (
                <div key={index}className="bg-white/5backdrop-blur-lgrounded-2xlp-8 border border-white/10 hover: border-cyan-400/50 transition-all duration-300">,</div>
                  <div className="w-16h-16bg-gradient-to-rfrom-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8h-8text-white" />
                  </div>
                  <h3 className="text-xlfont-boldtext-whitemb-4">{feature.title}</h3>
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
export default PropertyManagementAIPage
        <section className="py-20px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xlmd:text-6xlfont-boldtext-white mb-6">Property Management AI
              <p className="text-xltext-gray-300mb-8max-w-3xl mx-auto">Transform your property management with AI-powered tools.
            <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5backdrop-blur-lgrounded-2xlp-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-16h-16bg-gradient-to-rfrom-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8h-8text-white" />
                  <h3 className="text-xlfont-boldtext-whitemb-4">{feature.title}
                  <p className="text-gray-300">{feature.description}
              ))}
  )
}
export default PropertyManagementAIPage</div></div></div></p></p></h1></h3></section>
