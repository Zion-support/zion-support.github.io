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
import {BarChart, TrendingUp, Users, ShoppingCart, DollarSign, Target, CheckCircle, ArrowRight} from 'lucide-react';
const EcommerceAnalyticsProPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Track sales, conversions, and customer behavior in real-time with advanced analytics dashboards.'},
    {icon: TrendingUp,
      title: 'Revenue Optimization',
      description: 'Identify trends and opportunities to maximize revenue and improve profit margins.'},
    {icon: Users,
      title: 'Customer Insights',
      description: 'Understand customer segments, preferences, and purchasing patterns for targeted marketing.'},
    {icon: ShoppingCart,
      title: 'Inventory Management',
      description: 'Optimize stock levels and predict demand with AI-powered inventory analytics.'},
    {icon: DollarSign,
      title: 'Pricing Intelligence',
      description: 'Dynamic pricing recommendations based on market conditions and competitor analysis.'},
    {icon: Target,
      title: 'Conversion Tracking',
      description: 'Monitor and optimize conversion funnels to increase sales and reduce cart abandonment.'}]
  return (<React.Fragment>
      <Helmet />
    <>
      <Helmet>
        <title>E-commerce Analytics Pro | Zion Tech Group - Advanced E-commerce Intelligence</title>
    <React.Fragment>
      </React><Helmet>
        </Helmet><title>E-commerce Analytics Pro | Zion Tech Group - Advanced E-commerce Intelligence</title>
        <meta name="description" content="Transform your e-commerce business with AI-powered analytics. Track sales, optimize inventory, and maximize revenue with our comprehensive analytics platform." />
        <meta name="keywords" content="e-commerce analytics, sales tracking, inventory optimization, revenue analytics, customer insights, e-commerce intelligence" />
      <div className="min-h-screenbg-gradient-to-brfrom-slate-900via-purple-900 to-slate-900">
        <section className="py-20px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xlmd:text-6xlfont-bold text-white mb-6">,</h1>
                E-commerce Analytics Pro,
  </
              <p className="text-xltext-gray-300mb-8max-w-3xl mx-auto">Transform your e-commerce business with AI-powered analytics that drive growth, optimize operations, and maximize revenue.</p>
            </div>
            <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-3 gap-8">,</div>
              {features.map((feature, index) => (
                <div;
                  key={index}className="bg-white/5backdrop-blur-lgrounded-2xlp-8 border border-white/10 hover: border-cyan-400/50 transition-all duration-300">,</div>
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
  )};

<<<<<<< HEAD
export default PagePage;
=======
export default EcommerceAnalyticsProPage;
  </h1>
  )
}
export default EcommerceAnalyticsProPage
  </h1>
                <$2 />
                  key={index}
                  className="bg-white/5backdrop-blur-lgrounded-2xlp-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-16h-16bg-gradient-to-rfrom-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8h-8text-white" />
                  <h3 className="text-xlfont-boldtext-whitemb-4">{feature.title}
                  <p className="text-gray-300">{feature.description}
              ))}
  )
}
export default EcommerceAnalyticsProPage</div></div></div></p></p></h1></h3></section>
>>>>>>> cursor/fix-errors-and-merge-to-main-28a5
