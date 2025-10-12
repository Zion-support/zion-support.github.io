<<<<<<< HEAD
import React  from 'react';
=======
'use client';
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Shield, Brain } from 'lucide-react';

const Page: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        'Up to 10 projects',
        'Basic task management',
        'Email support',
        'Basic analytics'
      ]
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Perfect for growing teams',
      features: [
        'Up to 50 projects',
        'Advanced project management',
        'Priority support',
        'Advanced analytics',
        'Team collaboration tools'
      ]
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited projects',
        'Custom workflows',
        '24/7 dedicated support',
        'Custom integrations',
        'White-label options'
      ]
    }
  ];

  return (
    <>
    <>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>AI Project Management Pro - Zion Tech Group</title>
        <meta name="description" content="Professional AI project management services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="AI project management, productivity, Zion Tech Group" />
        <meta property="og:title" content="AI Project Management Pro - Zion Tech Group" />
        <meta property="og:description" content="Professional AI project management services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-project-management-pro" />
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
                AI Project Management Pro
    <>
              </span>
            </h1>
<<<<<<< HEAD
            <p className="text-xl text-gray-300 mb-8max-w-3xlmx-auto">
=======
            <p className="text-xl text-gray-300 mb-8max-w-3xlmx-auto" />
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              Professional AI project management services by Zion Tech Group. Expert solutions tailored to your business needs.
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
                Why Choose Our AI Project Management?
    <>
              </h2>
<<<<<<< HEAD
              <p className="text-xl text-gray-300max-w-3xlmx-auto">
              Our advanced AI technology helps you manage projects more efficiently
=======
              <p className="text-xl text-gray-300max-w-3xlmx-auto" />
    </>
                Our advanced AI technology helps you manage projects more efficiently
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

        {/* Pricing Section */}
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
                Choose Your Plan
    <>
              </h2>
<<<<<<< HEAD
              <p className="text-xl text-gray-300max-w-3xlmx-auto">
              Flexible pricing options to fit your team's needs
=======
              <p className="text-xl text-gray-300max-w-3xlmx-auto" />
    </>
                Flexible pricing options to fit your team's needs
    <>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              </p>
            </div>
    </>
            
            <div className="grid grid-cols-1md:grid-cols-3gap-8">
<<<<<<< HEAD
              {pricingPlans.map((plan, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50transition-allduration-300" />
                  <div className="text-centermb-8">
                    <h3 className="text-2xl font-bold text-white mb-2" />{plan.name}</h3>
                    <div className="text-4xl font-boldtext-cyan-400mb-2">
=======
        </div>
              {pricingPlans.map((plan, index) => (
    <>
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50transition-allduration-300" />
                  <div className="text-centermb-8">
        </div>
                    <h3 className="text-2xl font-boldtext-whitemb-2">{plan.name}</h3>
                    <div className="text-4xl font-boldtext-cyan-400mb-2">
        </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                      {plan.price}
    <>
                      <span className="text-lgtext-gray-400">{plan.period}</span>
                    </div>
<<<<<<< HEAD
                    <p className="text-gray-300">
              {plan.description}</p>
=======
                    <p className="text-gray-300">{plan.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                  </div>
    </>
                  
                  <ul className="space-y-4mb-8" />
                    {plan.features.map((feature, featureIndex) => (
<<<<<<< HEAD
                      <li key={featureIndex} className="flex items-center text-gray-300" />
                        <CheckCircle className="w-5 h-5 text-green-400mr-3flex-shrink-0" />
=======
    <>
                      <li key={featureIndex} className="flexitems-centertext-gray-300" />
                        <CheckCircle className="w-5 h-5 text-green-400mr-3flex-shrink-0" />
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-semibold text-center block hover:from-cyan-600 hover:to-purple-600transition-allduration-300" />
                    Get Started
    <>
                  </Link>
                </div>
    </>
              ))}
    <>
            </div>
        </section>
    </>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20" />
          <div className="containermx-autopx-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xlp-12text-center">
              <h2 className="text-4xl font-bold text-white mb-6" />
=======
    <>
        <section className="py-20" />
          <div className="containermx-autopx-4">
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
                  View Services
<<<<<<< HEAD
=======
    <>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
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
};

export default Page;
;
<<<<<<< HEAD
=======
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
