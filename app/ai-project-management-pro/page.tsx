'use client';
<<<<<<< HEAD
import React from \'react\';
import { Helmet } from 'react-helmet-async';
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-7b79
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function AIProjectManagementProPage() {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      features: ['Basic project tracking', 'Team collaboration', 'Task management']
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      features: ['Advanced analytics', 'Custom workflows', 'Priority support']
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      features: ['Unlimited projects', 'Advanced integrations', 'Dedicated support']
    }
  ];

  return (
    <>
      <Helmet />
        <title />AI Project Management Pro - Zion Tech Group</title>
        <meta name="description" content="Professional AI project management services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="AI solutions, project management, IT services, Zion Tech Group" />
        <meta property="og:title" content="AI Project Management Pro - Zion Tech Group" />
        <meta property="og:description" content="Professional AI project management services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-project-management-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-16" />
        {/* Hero Section */}
        <section className="py-20" />
          <div className="container mx-autopx-4text-center" />
            <h1 className="text-5xl md:text-6xl font-boldtext-whitemb-6" />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent" />
                AI Project Management Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8max-w-3xlmx-auto" />
              Professional AI project management services by Zion Tech Group. Expert solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4justify-centermb-12" />
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup" />
                Get Started
                <ArrowRight className="ml-2group-hover:translate-x-1transition-transform" />
              </Link>
              <Link to="/contact" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />
                Learn More
              </Link>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Features Section */}
        <section className="py-20" />
          <div className="containermx-autopx-4" />
            <div className="text-centermb-16" />
              <h2 className="text-4xl font-boldtext-whitemb-6" />
                Why Choose Our AI Project Management?
              </h2>
              <p className="text-xl text-gray-300max-w-3xlmx-auto" />
                Our advanced AI technology helps you manage projects more efficiently
              </p>
            </div>
            
            <div className="grid grid-cols-1md:grid-cols-3gap-8" />
              {[
                {
                  icon: <Brain className="w-12h-12text-cyan-400" />,
                  title: "AI-Powered Planning",
                  description: "Advanced machine learning algorithms help optimize project timelines and resource allocation."
                },
                {
                  icon: <Zap className="w-12h-12text-purple-400" />,
                  title: "Real-time Tracking",
                  description: "Get instant insights into project progress and team performance with our comprehensive dashboard."
                },
                {
                  icon: <Shield className="w-12h-12text-green-400" />,
                  title: "Secure & Reliable",
                  description: "Enterprise-grade security ensures your project data is protected while maintaining 99.9% uptime."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center hover:border-cyan-500/50transition-allduration-300" />
                  <div className="flexjustify-centermb-4" />
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semiboldtext-whitemb-4" />{feature.title}</h3>
                  <p className="text-gray-300" />{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-7b79
        {/* Pricing Section */}
        <section className="py-20" />
          <div className="containermx-autopx-4" />
            <div className="text-centermb-16" />
              <h2 className="text-4xl font-boldtext-whitemb-6" />
                Choose Your Plan
              </h2>
<<<<<<< HEAD
              <p className="text-xl text-gray-300max-w-3xlmx-auto" />
                Flexible pricing options to fit your team's needs
=======
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Select the perfect plan for your business needs
>>>>>>> cursor/fix-errors-and-merge-to-main-7b79
              </p>
            </div>
            
            <div className="grid grid-cols-1md:grid-cols-3gap-8" />
              {pricingPlans.map((plan, index) => (
<<<<<<< HEAD
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50transition-allduration-300" />
                  <div className="text-centermb-8" />
                    <h3 className="text-2xl font-boldtext-whitemb-2" />{plan.name}</h3>
                    <div className="text-4xl font-boldtext-cyan-400mb-2" />
                      {plan.price}
                      <span className="text-lgtext-gray-400" />{plan.period}</span>
                    </div>
                    <p className="text-gray-300" />{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flexitems-centertext-gray-300" />
                        <CheckCircle className="w-5 h-5 text-green-400mr-3flex-shrink-0" />
=======
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-center justify-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
>>>>>>> cursor/fix-errors-and-merge-to-main-7b79
                        {feature}
                      </li>
                    ))}
                  </ul>
<<<<<<< HEAD
                  
                  <Link to="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-semibold text-center block hover:from-cyan-600 hover:to-purple-600transition-allduration-300" />
=======
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 inline-block"
                  >
>>>>>>> cursor/fix-errors-and-merge-to-main-7b79
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20" />
          <div className="containermx-autopx-4" />
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xlp-12text-center" />
              <h2 className="text-4xl font-boldtext-whitemb-6" />
=======
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
>>>>>>> cursor/fix-errors-and-merge-to-main-7b79
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8max-w-2xlmx-auto" />
                Contact us to learn more about our solutions and how we can help your business.
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center" />
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25" />
                  Contact Us
                </Link>
<<<<<<< HEAD
                <Link to="/services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />
                  View Services
=======
                <Link
                  to="/services"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  View All Services
>>>>>>> cursor/fix-errors-and-merge-to-main-7b79
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
<<<<<<< HEAD
};

export default Page;
;
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-7b79
