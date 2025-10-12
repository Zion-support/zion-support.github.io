'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
        </d iv>
        {/* Hero Section */}

        <s ection class Name="p y-20" />
          <d iv class Name="c ontainer mx-autopx-4text-center">
        </d iv>
            <h1 c lass Name="t ext-5xl md:text-6xl font-boldtext-whitemb-6" />
              <s pan class Name="b g-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent" />

                A I Project Management Pro

              </s pan>
            </h1>
            <p c lass Name="t ext-xl text-gray-300 mb-8max-w-3xlmx-auto" />

              Professional A I project management services by Zion Tech Group. Expert solutions tailored to your business needs.

            </p>
            <d iv class Name="f lex flex-col sm:flex-row gap-4justify-centermb-12">
        </d iv>
              <L ink to="/contact" class Name="b g-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup" />

                Get Started

                <A rrow Right class Name="m l-2group-hover:translate-x-1transition-transform" />
              </L ink>
              <L ink to="/contact" class Name="b order border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />

                Learn More

              </L ink>
            </d iv>
        </s ection>

        {/* Features Section */}

        <s ection class Name="p y-20" />
          <d iv class Name="c ontainermx-autopx-4">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-4xl font-boldtext-whitemb-6" />

                Why Choose Our A I Project Management?

              </h2>
              <p c lass Name="t ext-xl text-gray-300max-w-3xlmx-auto" />

                Our advanced A I technology helps you manage projects more efficiently

              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1md:grid-cols-3gap-8">
        </d iv>
              {[
                {
                  icon: <B rain class Name="w-12h-12t ext-cyan-400" />,
                  title: "A I-Powered Planning",
                  description: "Advanced machine learning algorithms help optimize project timelines and resource allocation."
                },
                {
                  icon: <Z ap class Name="w-12h-12t ext-purple-400" />,
                  title: "Real-time Tracking",
                  description: "Get instant insights into project progress and team performance with our comprehensive dashboard."
                },
                {
                  icon: <S hield class Name="w-12h-12t ext-green-400" />,
                  title: "Secure & Reliable",
                  description: "Enterprise-grade security ensures your project data is protected while maintaining 99.9% uptime."
                }
              ].map((feature, index) => (

                <d iv key={index} class Name="b g-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center hover:border-cyan-500/50transition-allduration-300" />
                  <d iv class Name="f lexjustify-centermb-4">
        </d iv>

                    {feature.icon}

                  </d iv>
                  <h3 c lass Name="t ext-xl font-semiboldtext-whitemb-4">{feature.title}</h3>
                  <p c lass Name="t ext-gray-300">{feature.description}</p>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Pricing Section */}

        <s ection class Name="p y-20" />
          <d iv class Name="c ontainermx-autopx-4">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-4xl font-boldtext-whitemb-6" />

                Choose Your Plan

              </h2>
              <p c lass Name="t ext-xl text-gray-300max-w-3xlmx-auto" />

                Flexible pricing options to fit your team's needs

              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1md:grid-cols-3gap-8">
        </d iv>
              {pricing Plans.map((plan, index) => (

                <d iv key={index} class Name="b g-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50transition-allduration-300" />
                  <d iv class Name="t ext-centermb-8">
        </d iv>
                    <h3 c lass Name="t ext-2xl font-boldtext-whitemb-2">{plan.name}</h3>
                    <d iv class Name="t ext-4xl font-boldtext-cyan-400mb-2">
        </d iv>

                      {plan.price}

                      <s pan class Name="t ext-lgtext-gray-400">{plan.period}</s pan>
                    </d iv>
                    <p c lass Name="t ext-gray-300">{plan.description}</p>
                  </d iv>

                  <u l class Name="s pace-y-4mb-8" />
                    {plan.features.map((feature, feature Index) => (

                      <l i key={feature Index} class Name="f lexitems-centertext-gray-300" />
                        <C heck Circle class Name="w-5 h-5 t ext-green-400mr-3flex-shrink-0" />

                        {feature}
                      </l i>
                    ))}
                  </u l>
                  
                  <L ink to="/contact" class Name="w-f ull bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-semibold text-center block hover:from-cyan-600 hover:to-purple-600transition-allduration-300" />
                    Get Started

                  </L ink>
                </d iv>

              ))}

import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Clock, Target, Bar Chart3 } from 'lucide-react';

export default function A IProject Management Pro() {
  const features = [
    {
      icon: <B rain class Name="w-6 h-6 t ext-cyan-400" />,
      title: 'A I-Powered Planning',
      description: 'Intelligent project planning and resource allocation using advanced A I algorithms'
    },
    {
      icon: <C lock class Name="w-6 h-6 t ext-purple-400" />,
      title: 'Real-time Tracking',
      description: 'Monitor project progress, deadlines, and team performance in real-time'
    },
    {
      icon: <T arget class Name="w-6 h-6 t ext-yellow-400" />,
      title: 'Smart Scheduling',
      description: 'Automatically optimize schedules and identify potential bottlenecks'
    },
    {
      icon: <B ar Chart3 class Name="w-6 h-6 t ext-green-400" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive reporting and insights to improve project outcomes'
    }
  ]

  const pricing Plans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 projects',
        'Basic A I features',
        'Standard templates',
        'Email support',
        'Basic analytics',
        'Team collaboration'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing teams',
      features: [
        'Up to 25 projects',
        'Advanced A I features',
        'Custom workflows',
        'Priority support',
        'Advanced analytics',
        'A PI access',
        'Integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited projects',
        'Custom A I training',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced security',
        'S LA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Tech Startup',
      content: 'A I Project Management Pro helped us increase productivity by 40% and reduce project delays by 60%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Consulting Firm',
      content: 'The A I-powered insights and automated scheduling have transformed how we manage our projects.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Software Company',
      content: 'Our team collaboration and project visibility have improved dramatically since using this platform.',
      rating: 5
    }
  ]

  return (

      <H elmet>
        <t itle>A I Project Management Pro - Zion Tech Group</t itle>
        <m eta name="description" content="Professional A I project management services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <m eta name="keywords" content="A I project management, team collaboration, productivity, Zion Tech Group" />
        <m eta property="og:title" content="A I Project Management Pro - Zion Tech Group" />
        <m eta property="og:description" content="Professional A I project management services by Zion Tech Group. Expert solutions tailored to your business needs." />
export default function A IProject Management Pro() {
  return (

      <H elmet>
        <t itle>A I Project Management Pro - Zion Tech Group | Advanced Project Management Solutions</t itle>
        <m eta name="description" content="Transform your project management with A I-powered tools. Streamline workflows, track progress, and deliver projects on time with our advanced platform." />
        <m eta name="keywords" content="A I project management, project tracking, team collaboration, workflow automation, project analytics" />
        <m eta property="og:title" content="A I Project Management Pro - Zion Tech Group" />
        <m eta property="og:description" content="Transform your project management with A I-powered tools. Streamline workflows, track progress, and deliver projects on time with our advanced platform." />
        <m eta property="og:type" content="website" />
        <m eta property="og:url" content="https://ziontechgroup.com/ai-project-management-pro" />
      </H elmet>

      <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <s ection class Name="p y-20">
          <d iv class Name="c ontainer mx-auto px-4 text-center">
            <h1 c lass Name="t ext-5xl md:text-6xl font-bold text-white mb-6">
              <s pan class Name="b g-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                A I Project Management Pro
              </s pan>
            </h1>
            <p c lass Name="t ext-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your project management with A I-powered tools that streamline workflows, 
              track progress, and deliver projects on time with intelligent automation.
            </p>
            <d iv class Name="f lex flex-col sm:flex-row gap-4 justify-center mb-12">
              <L ink 
                to="/contact"
                class Name="b g-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
              >
                Get Started
                <A rrow Right class Name="m l-2 group-hover:translate-x-1 transition-transform" />
              </L ink>
              <L ink 
                to="/contact"
                class Name="b order border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </L ink>

  const pricing Plans = [
    {
      name: 'Starter',
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
                </d iv>
              ))}
            </d iv>
          </d iv>
        </s ection>

        {/* Features Section */}
        <s ection class Name="p y-20">
          <d iv class Name="c ontainer mx-auto px-4">
            <d iv class Name="t ext-center mb-16">
              <h2 c lass Name="t ext-4xl font-bold text-white mb-4">Key Features</h2>
              <p c lass Name="t ext-xl text-gray-300">Powerful A I capabilities for superior project management</p>
            </d iv>
            <d iv class Name="g rid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <d iv key={index} class Name="b g-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <d iv class Name="m b-4">{feature.icon}</d iv>
                  <h3 c lass Name="t ext-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p c lass Name="t ext-gray-300">{feature.description}</p>
                </d iv>
              ))}
            </d iv>
          </d iv>
        </s ection>

        {/* Pricing Section */}
        <s ection class Name="p y-20">
          <d iv class Name="c ontainer mx-auto px-4">
            <d iv class Name="t ext-center mb-16">
              <h2 c lass Name="t ext-4xl font-bold text-white mb-4">Pricing Plans</h2>
              <p c lass Name="t ext-xl text-gray-300">Choose the perfect plan for your team</p>
            </d iv>
            <d iv class Name="g rid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing Plans.map((plan, index) => (
                <d iv key={index} class Name={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 relative ${plan.popular ? 'border-cyan-500 scale-105' : 'border-slate-700'}`}>
                  {plan.popular && (
                    <d iv class Name="a bsolute -top-4 left-1/2 transform -translate-x-1/2">
                      <s pan class Name="b g-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </s pan>
                    </d iv>
                  )}
                  <d iv class Name="t ext-center mb-6">
                    <h3 c lass Name="t ext-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <d iv class Name="f lex items-baseline justify-center">
                      <s pan class Name="t ext-4xl font-bold text-white">{plan.price}</s pan>
                      <s pan class Name="t ext-gray-400 ml-1">{plan.period}</s pan>
                    </d iv>
                    <p c lass Name="t ext-gray-300 mt-2">{plan.description}</p>
                  </d iv>
                  <u l class Name="s pace-y-3 mb-8">
                    {plan.features.map((feature, feature Index) => (
                      <l i key={feature Index} class Name="f lex items-center text-gray-300">
                        <C heck Circle class Name="w-4 h-4 t ext-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </l i>
                    ))}
                  </u l>
                  <L ink
                    to="/contact"
                    class Name={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                        : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                  >
                    Get Started
                  </L ink>
                </d iv>
              ))}
            </d iv>
          </d iv>
        </s ection>

        {/* Testimonials Section */}
        <s ection class Name="p y-20">
          <d iv class Name="c ontainer mx-auto px-4">
            <d iv class Name="t ext-center mb-16">
              <h2 c lass Name="t ext-4xl font-bold text-white mb-4">What Our Clients Say</h2>
              <p c lass Name="t ext-xl text-gray-300">Real results from real teams</p>
            </d iv>
            <d iv class Name="g rid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <d iv key={index} class Name="b g-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <d iv class Name="f lex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <S tar key={i} class Name="w-5 h-5 t ext-yellow-400 fill-current" />
                    ))}
                  </d iv>
                  <p c lass Name="t ext-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <d iv>
                    <p c lass Name="f ont-semibold text-white">{testimonial.name}</p>
                    <p c lass Name="t ext-cyan-400">{testimonial.company}</p>
                  </d iv>
                </d iv>
              ))}
            </d iv>
        </s ection>

        {/* C TA Section */}

        <s ection class Name="p y-20" />
          <d iv class Name="c ontainermx-autopx-4">
        </d iv>
            <d iv class Name="b g-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xlp-12text-center">
        </d iv>
              <h2 c lass Name="t ext-4xl font-boldtext-whitemb-6" />

                Ready to Get Started?

              </h2>
        <s ection class Name="p y-20">
          <d iv class Name="c ontainer mx-auto px-4">
            <d iv class Name="b g-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center">
              <h2 c lass Name="t ext-4xl font-bold text-white mb-6">
                Ready to Transform Your Project Management?
              </h2>
              <p c lass Name="t ext-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us to learn more about our A I project management solutions and how we can help your team succeed.
              </p>
              <d iv class Name="f lex flex-col sm:flex-rowgap-4justify-center">
              <p c lass Name="t ext-xl text-gray-300 mb-8max-w-2xlmx-auto" />

                Contact us to learn more about our solutions and how we can help your business.

              </p>
              <d iv class Name="f lex flex-col sm:flex-rowgap-4justify-center">
        </d iv>
                <L ink to="/contact" class Name="b g-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25" />

                  Contact Us

                </L ink>
                <L ink to="/services" class Name="b order border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />

                  View Services

                </L ink>
              </d iv>
            </d iv>
          </d iv>
        </s ection>
      </d iv>

  );
};

export default Page;

            </d iv>
          </d iv>
        </s ection>
      </d iv>

  );
}
}
