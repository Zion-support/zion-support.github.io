'use client';

import React from 'react';
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const PagePage: React.FC = () => {
  return (
    <>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Page
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-gray-300 mb-6">
                We provide comprehensive Page solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Service 1</h3>
                  <p className="text-gray-300">Description of service 1</p>
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-28a5
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Service 2</h3>
                  <p className="text-gray-300">Description of service 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
<<<<<<< HEAD
  );
};

export default PagePage;
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-28a5
