

'use client';
import React from 'react';

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, BarChart3 } from 'lucide-react';

        {/* Hero Section */}
    
                AI Project Management Pro

              Professional AI project management services by Zion Tech Group. Expert solutions tailored to your business needs.
    
                Get Started

                Learn More

        {/* Features Section */}
    
                Why Choose Our AI Project Management?

                Our advanced AI technology helps you manage projects more efficiently

              {[
                  icon: <Brain className="w-12h-12text-cyan-400" />,
                  title: "AI-Powered Planning",
                  description: "Advanced machine learning algorithms help optimize project timelines and resource allocation."
                },
                  icon: <Zap className="w-12h-12text-purple-400" />,
                  title: "Real-time Tracking",
                  description: "Get instant insights into project progress and team performance with our comprehensive dashboard."
                },
                  icon: <Shield className="w-12h-12text-green-400" />,
                  title: "Secure & Reliable",
                  description: "Enterprise-grade security ensures your project data is protected while maintaining 99.9% uptime."
 (

                    {feature.icon}

                  <h3 className="text-xl font-semiboldtext-whitemb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>

              ))}

        {/* Pricing Section */}
    
                Choose Your Plan

                Flexible pricing options to fit your team's needs

 (
    
                    <h3 className="text-2xl font-boldtext-whitemb-2">{plan.name}</h3>

                      {plan.price}
    
                      <span className="text-lgtext-gray-400">{plan.period}</span>

                    <p className="text-gray-300">{plan.description}</p>

 (

                        {feature}
                    ))}
                  
                    Get Started

              ))}
    
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Clock, Target, BarChart3 } from 'lucide-react';

export default function AIProjectManagementPro() {
  const features = [
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Project Planning',
      description: 'Intelligent project planning with automated resource allocation and timeline optimization'
    },

      icon: <Clock className="w-6 h-6 text-purple-400" />,
      title: 'Real-time Tracking',
      description: 'Monitor project progress, deadlines, and team performance in real-time'
    },
      icon: <Target className="w-6 h-6 text-yellow-400" />,
      title: 'Smart Scheduling',
      description: 'Automatically optimize schedules and identify potential bottlenecks'

    },
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: 'Advanced Analytics',

      description: 'Comprehensive reporting and insights to improve project outcomes'
  ]

  const pricingPlans = [
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 projects',
        'Basic AI features',
        'Standard templates',
        'Email support',
        'Basic analytics',
        'Team collaboration'
      ],
      popular: false
    },
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing teams',
      features: [
        'Up to 25 projects',
        'Advanced AI features',
        'Custom workflows',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Integrations'
      ],
      popular: true
    },
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited projects',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee'
      ],
      popular: false
  ]

  const testimonials = [
      name: 'Sarah Johnson',
      company: 'Tech Startup',
      content: 'AI Project Management Pro helped us increase productivity by 40% and reduce project delays by 60%.',
      rating: 5
    },
      name: 'Michael Chen',
      company: 'Consulting Firm',
      content: 'The AI-powered insights and automated scheduling have transformed how we manage our projects.',
      rating: 5
    },
      name: 'Emily Rodriguez',
      company: 'Software Company',
      content: 'Our team collaboration and project visibility have improved dramatically since using this platform.',
      rating: 5
  ]

  return (
    
        <title>AI Project Management Pro - Zion Tech Group</title>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Project Management Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your project management with AI-powered tools. 
              Streamline workflows, boost productivity, and deliver projects on time and within budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                View All Services

              </Link>
            </div>
        </section>

        {/* Features Section */}

        {/* Hero Section */}
                AI Project Management Pro
              Professional AI project management services by Zion Tech Group. Expert solutions tailored to your business needs.
                Get Started
                Learn More

        {/* Features Section */}
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Powerful AI capabilities for superior project management</p>
 (
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
              ))}

        {/* Pricing Section */}
              <h2 className="text-4xl font-bold text-white mb-4">Pricing Plans</h2>
              <p className="text-xl text-gray-300">Choose the perfect plan for your team</p>
 (
                  {plan.popular && (
                        Most Popular
                  )}
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
 (

                        {feature}
                    ))}

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Powerful Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>

                </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using our AI-powered project management solutions to achieve better results.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>

          </div>
        </section>
      </div>
    </>
  );

}

                    Get Started
              ))}

        {/* Testimonials Section */}
              <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-300">Real results from real teams</p>
 (
 (
                    ))}
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-cyan-400">{testimonial.company}</p>
              ))}

        {/* CTA Section */}

                Ready to Get Started?

                Ready to Transform Your Project Management?
                Contact us to learn more about our AI project management solutions and how we can help your team succeed.

                Contact us to learn more about our solutions and how we can help your business.

                  Contact Us
    
                  View Services

  );

