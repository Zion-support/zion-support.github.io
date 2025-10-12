<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
'use client';
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code } from 'lucide-react';

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Professional Services - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="AI solutions, IT services, Zion Tech Group" />
        <meta property="og:title" content=" - Zion Tech Group" />
        <meta property="og:description" content="Professional services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-expense-tracker" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Professional Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional  services by Zion Tech Group. Expert solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us to learn more about our solutions and how we can help your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Contact Us
                </Link>
                <Link
                  to="/services"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
>>>>>>> cursor/fix-errors-and-merge-to-main-7ceb
import React from 'react'
import { Receipt, ArrowRight, Bot, RotateCcw, RotateCw } from 'lucide-react'
import { Link } from 'react-router-dom'
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
import React  from 'react';
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Brain, TrendingUp } from 'lucide-react';

const Page: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-12h-12text-cyan-400" />,
      title: "AI-Powered Analysis",
      description: "Advanced AI algorithms analyze your spending patterns and provide intelligent insights."
    },
    {
      icon: <TrendingUp className="w-12h-12text-purple-400" />,
      title: "Real-time Tracking",
      description: "Track your expenses in real-time with automatic categorization and smart notifications."
    },
    {
      icon: <Shield className="w-12h-12text-green-400" />,
      title: "Secure & Private",
      description: "Bank-level security ensures your financial data is protected and private."
    }
  ];

  return (
    <>
    <>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>AI Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="Professional AI expense tracking services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="AI expense tracking, financial management, Zion Tech Group" />
        <meta property="og:title" content="AI Expense Tracker - Zion Tech Group" />
        <meta property="og:description" content="Professional AI expense tracking services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-expense-tracker" />
      </Helmet>
    </>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-16">
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
        {/* Hero Section */}
    <>
        <section className="py-20" />
          <div className="container mx-autopx-4text-center">
<<<<<<< HEAD
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" />
=======
        </div>
            <h1 className="text-5xl md:text-6xl font-boldtext-whitemb-6" />
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent" />
    </>
                AI Expense Tracker
    <>
              </span>
            </h1>
<<<<<<< HEAD
            <p className="text-xl text-gray-300 mb-8max-w-3xlmx-auto">
=======
            <p className="text-xl text-gray-300 mb-8max-w-3xlmx-auto" />
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              Professional AI expense tracking services by Zion Tech Group. Expert solutions tailored to your business needs.
    <>
            </p>
            <div className="flex flex-col sm:flex-row gap-4justify-centermb-12">
<<<<<<< HEAD
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup" >
          Get Started
                
          <ArrowRight className="ml-2group-hover:translate-x-1transition-transform"  />
        </Link>
=======
        </div>
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup" />
    </>
                Get Started
    <>
                <ArrowRight className="ml-2group-hover:translate-x-1transition-transform" />
              </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              <Link to="/contact" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />
    </>
                Learn More
    <>
              </Link>
            </div>
        </section>
    </>

        {/* Features Section */}
    <>
        <section className="py-20" />
          <div className="containermx-autopx-4">
<<<<<<< HEAD
            <div className="text-centermb-16">
              <h2 className="text-4xl font-bold text-white mb-6" />
=======
        </div>
            <div className="text-centermb-16">
        </div>
              <h2 className="text-4xl font-boldtext-whitemb-6" />
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                Why Choose Our AI Expense Tracker?
    <>
              </h2>
<<<<<<< HEAD
              <p className="text-xl text-gray-300max-w-3xlmx-auto">
              Our advanced AI technology helps you manage your finances more efficiently
=======
              <p className="text-xl text-gray-300max-w-3xlmx-auto" />
    </>
                Our advanced AI technology helps you manage your finances more efficiently
    <>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              </p>
            </div>
    </>
            
            <div className="grid grid-cols-1md:grid-cols-3gap-8">
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              {features.map((feature, index) => (
    <>
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center hover:border-cyan-500/50transition-allduration-300" />
                  <div className="flexjustify-centermb-4">
<<<<<<< HEAD
=======
        </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                    {feature.icon}
    <>
                  </div>
<<<<<<< HEAD
                  <h3 className="text-xl font-semiboldtext-white mb-4" />{feature.title}</h3>
                  <p className="text-gray-300">
              {feature.description}</p>
=======
                  <h3 className="text-xl font-semiboldtext-whitemb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                </div>
    </>
              ))}
    <>
            </div>
        </section>
    </>

        {/* CTA Section */}
    <>
        <section className="py-20" />
          <div className="containermx-autopx-4">
<<<<<<< HEAD
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xlp-12text-center">
              <h2 className="text-4xl font-bold text-white mb-6" />
=======
        </div>
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xlp-12text-center">
        </div>
              <h2 className="text-4xl font-boldtext-whitemb-6" />
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                Ready to Get Started?
    <>
              </h2>
<<<<<<< HEAD
              <p className="text-xl text-gray-300 mb-8max-w-2xlmx-auto">
              Contact us to learn more about our solutions and how we can help your business.
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
=======
              <p className="text-xl text-gray-300 mb-8max-w-2xlmx-auto" />
    </>
                Contact us to learn more about our solutions and how we can help your business.
    <>
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25" />
    </>
                  Contact Us
    <>
                </Link>
                <Link to="/services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />
    </>
                  View All Services
    <>
                </Link>
              </div>
          </div>
        </section>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>
    </>
  );
<<<<<<< HEAD
};
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-7ceb

export default Page;
=======
}
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Shield, Zap, CheckCircle, ArrowRight, Star, Users, Award, Brain, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom'

export default function AIExpenseTracker() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="Professional AI expense tracking services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">AI Expense Tracker</h1>
        <p className="text-lg text-gray-300 mb-8">Professional AI expense tracking services coming soon.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-33de
