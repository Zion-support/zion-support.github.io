import React  from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Shield, BarChart3, Users} from 'lucide-react';
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Shield, BarChart3, Users} from 'lucide-react';

>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
const AiEcommerceOptimizerProPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Optimization',
      description: 'Advanced machine learning algorithms to optimize your e-commerce performance.'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and insights to track your business growth.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with full compliance and data protection.'
    },
    {
      icon: Users,
      title: 'Customer Insights',
      description: 'Deep customer behavior analysis to improve conversion rates.'

  ];
import { ArrowRight, CheckCircle, Zap, Shield, Brain } from 'lucide-react';

const Page: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing e-commerce businesses',
      features: [
        'Up to 10,000 products',
        'Basic AI optimization',
        'Analytics dashboard',
        'Email support'
      ]
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Perfect for established online stores',
      features: [
        'Up to 50,000 products',
        'Advanced AI optimization',
        'Real-time analytics',
        'Priority support',
        'Custom integrations'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale e-commerce operations',
      features: [
        'Unlimited products',
        'Full AI suite',
        'Dedicated support',
        'Custom development',
        'SLA guarantee'
      ]

  ];
  return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-50to-blue-50">
      <Helmet />
        <title />AI E-commerce Optimizer Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered e-commerce optimization solutions. Boost sales, improve conversion rates, and maximize your online store performance." />
        <meta name="keywords" content="AI e-commerce, e-commerce optimization, AI solutions, online store optimization, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}

      <section className="relative py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-7xlmx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6 xl font-boldtext-gray-900mb-6" />
              AI E-commerce <span className="text-blue-600"   />Optimizer Pro</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xlmx-auto">
              Transform your e-commerce business with advanced AI optimization solutions that boost sales,
              improve conversion rates, and maximize your online store performance.

            </p>
            <div className="flex flex-col sm:flex-rowgap-4justify-center">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lghover:bg-blue-700transition-colors" >
          Get Started

          <ArrowRight className="ml-2h-5w-5"  />
        </Link>
              <Link to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lghover:bg-blue-50transition-colors"
    < >

          <Helmet  />
        </Link>
        <title />AI E-commerce Optimizer Pro - Zion Tech Group</title>
        <meta name="description" content="Professional AI e-commerce optimization services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="AI e-commerce, optimization, Zion Tech Group" />
        <meta property="og:title" content="AI E-commerce Optimizer Pro - Zion Tech Group" />
        <meta property="og:description" content="Professional AI e-commerce optimization services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-ecommerce-optimizer-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-16">
        {/* Hero Section */}

        <section className="py-20" />
          <div className="container mx-autopx-4text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent" />
                AI E-commerce Optimizer Pro

              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8max-w-3xlmx-auto">
              Professional AI e-commerce optimization services by Zion Tech Group. Expert solutions tailored to your business needs.

            </p>
            <div className="flex flex-col sm:flex-row gap-4justify-centermb-12">
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup" >
          Get Started

          <ArrowRight className="ml-2group-hover:translate-x-1transition-transform"  />
        </Link>
              <Link to="/contact" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />
                Learn More
                />View All Services
              </Link>
            </div>
        </div>
      </section>

        {/* Features Section */}

        <section className="py-20" />
          <div className="containermx-autopx-4">
            <div className="text-centermb-16">
              <h2 className="text-4xl font-bold text-white mb-6" />
                Why Choose Our AI E-commerce Optimizer?

              </h2>
              <p className="text-xl text-gray-300max-w-3xlmx-auto">
              Our advanced AI technology helps you maximize your e-commerce potential
              </p>
            </div>

            <div className="grid grid-cols-1md:grid-cols-3gap-8">
              {[
                {
                  icon: <Brain className="w-12h-12text-cyan-400" />,
                  title: "AI-Powered Optimization",
                  description: "Advanced machine learning algorithms optimize your product listings, pricing, and recommendations."
                },
                {
                  icon: <Zap className="w-12h-12text-purple-400" />,
                  title: "Real-time Analytics",
                  description: "Get instant insights into customer behavior and sales performance with our comprehensive dashboard."
                },
                {
                  icon: <Shield className="w-12h-12text-green-400" />,
                  title: "Secure & Reliable",
                  description: "Enterprise-grade security ensures your data is protected while maintaining 99.9% uptime."

              ].map((feature, index) => (

                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center hover:border-cyan-500/50transition-allduration-300" />
                  <div className="flexjustify-centermb-4">
                    {feature.icon}

                  </div>
                  <h3 className="text-xl font-semiboldtext-white mb-4" />{feature.title}</h3>
                  <p className="text-gray-300">
              {feature.description}</p>
                </div>
              ))}

                Choose Your Plan

              </h2>
              <p className="text-xl text-gray-300max-w-3xlmx-auto">
              Flexible pricing options to fit your business needs
              </p>
            </div>

            <div className="grid grid-cols-1md:grid-cols-3gap-8">
              {pricingPlans.map((plan, index) => (

                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50transition-allduration-300" />
                  <div className="text-centermb-8">
                    <h3 className="text-2xl font-bold text-white mb-2" />{plan.name}</h3>
                    <div className="text-4xl font-boldtext-cyan-400mb-2">
                      {plan.price}

                      <span className="text-lgtext-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">
              {plan.description}</p>
                  </div>

                  <ul className="space-y-4mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300" />
                        <CheckCircle className="w-5 h-5 text-green-400mr-3flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-semibold text-center block hover:from-cyan-600 hover:to-purple-600transition-allduration-300" />
                    Get Started

                  </Link>
                </div>
              ))}

            </div>
        </div>
      </section>

        {/* CTA Section */}

        <section className="py-20" />
          <div className="containermx-autopx-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xlp-12text-center">
              <h2 className="text-4xl font-bold text-white mb-6" />
                Ready to Get Started?

              </h2>
              <p className="text-xl text-gray-300 mb-8max-w-2xlmx-auto">
              Contact us to learn more about our solutions and how we can help your business.
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25" />
                  Contact Us

                </Link>
                <Link to="/services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />
                  View Services

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

  );
};

export default Page;
