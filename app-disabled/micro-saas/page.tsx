import react;
import { Helmet } from  from 'react;
import { Helmet } from 'react-helmet-async;
import { } from 'react-router-dom;
import { Circle, Right, Star, 3, } from 'lucide-react;
import React from 'react';
import { Circle, ChevronRight,  } from 'lucide-react'
import { Helmet } from 'react-helmet-async';
import { } from 'react-router-dom';
import { ChevronRight, Circle, Star,  } from 'lucide-react';





interface MicroSaasProduct {
  // Add properties here
}
  id: string;

  icon: .ComponentType<any>;

  title: string;

  description: string;

  features: string[];

  price: string;

  users: string;

  popular: boolean;

  category: string;

}

const MicroSaasPage: React.FC = () => {}
  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1,
      icon: '📊,
      title: 'AI Analytics Dashboard,
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses,
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration],
      price: '$99/month,
      users: 'Up to 50 users,

const MicroSaasPage: React.FC = () => {

      users: 'Up to 50 users',
      popular: true,
      category: 'Analytics
      category: 'Analytics});)},
    {
      id: '2,
      icon: '👥,
      title: 'AI-Powered CRM,
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions,
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'Custom fields],
      price: '$149/month,
      users: 'Up to 100 users,
      category: 'CRM});)},
    {
      id: '3,
      icon: '🔒,
      title: 'Monitoring Suite,
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses,
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response],
      price: '$199/month,
      users: 'Up to 200 users,
      category: '});)},
    {
      id: '4,
      icon: '☁️,
      title: 'Infrastructure Manager,
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments,
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support', 'Backup management],
      price: '$299/month,
      users: 'Unlimited users,
    {
      id: '5,
    {
      id: '6,
  const benefits = [    'No upfront costs or setup fees,;
    'Quick deployment in 24-48 hours,
    'Scalable solutions that grow with you,
    'Regular updates and new features,
    '24/7 technical support,
    'Easy integration with existing tools,
    'Free trial for all products,
    Cancel anytime, no long-term contracts
    {
    {}
      icon: value: '10,000+,
      label: 'Active description: Growing community of satisfied customers
    },
    {}
      icon: value: '99.9%,
      label: 'Uptime,
      description: Reliable service you can count on
    },
    {}
      icon: Star,
      value: '4.8/5,
      label: 'Rating,
      description: Highly rated by our customers
    },
    {}
      icon: value: '24/7,
      label: 'Support,
      description: Get up and running in minutes with our streamlined onboarding process
    },
    {
      icon: title: 'Focused Solutions,
      description: Each micro SaaS is designed to solve specific business challenges effectively
    },
    {
      icon: Rocket,
      title: 'Rapid Innovation,
      description: Frequent updates and new features based on user feedback and market needs
    }

  ];


    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed for small to medium businesses. AI-powered tools for analytics, CRM, security, and more. />
        <meta name="keywords" content="micro SaaS, business tools, AI analytics, CRM, security monitoring, cloud management, small business software />
      </Helmet>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto>
              {stats.map((stat, index) => (

                <div key={index} className="text-center>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center>
                    <stat.icon className="w-8 h-8 text-slate-900 />
        {/* Category Filter */}

        <section className="py-8 px-4>
          <div className="max-w-7xl mx-auto>
            <div className="flex flex-wrap justify-center gap-4>
              {categories.map((category) => (

                <button
                  key={category}

                  className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <div className="text-center mb-16>
              <h2 className="text-3xl font-bold text-white mb-6>Our Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto>
                Choose from our collection of specialized business tools designed to solve specific challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8>
              {microSaasProducts.map((product) => (

                <div
                  key={product.id}

                  className={relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group ${
                    product.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20 : border-slate-700
                  }}

                >
                  {product.popular && (

                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2>
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2>
                        <Star className="w-4 h-4 fill-current />                        Most Popular
                  <ul className="space-y-3 mb-8>
                    {product.features.map((feature, index) => (

                      <li key={index} className="flex items-center text-gray-300 text-sm>
                        <Circle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0 />
                        {feature}                      </li>

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <div className="text-center mb-16>
              <h2 className="text-3xl font-bold text-white mb-6>Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto>
                Weve designed our micro SaaS products to be simple, powerful, and accessible to businesses of all sizes.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6>
                {benefits.map((benefit, index) => (

                  <div key={index} className="flex items-start space-x-3>
                    <Circle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />                    <span className="text-gray-300>{benefit}</span>
                  to="/contact
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105
                >
                  <className="w-5 h-5 />
                  Start Free Trial
                </>
                <to="/pricing
                  className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300
    </>
  );

export default MicroSaasPage;
