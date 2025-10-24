'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import {CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings} from 'lucide-react'
const AiCybersecurityPage: React.FC = () => {

    {
      icon: BarChart,
      title: 'Advanced Analytics'
      description: 'Comprehensive analytics dashboard with real-time data visualization.'
    ];
return (
    <>)
      
        <title>Ai Cybersecurity - Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      
      <Navigation />
      <div className="...">
        {/* Hero Section */}
        <section>
        <div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="...">
            <h1 className="...">
              Ai Cybersecurity
            </h1>
            <p>Advanced AI-powered ai cybersecurity solution for modern businesses.</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <button>Get Started;</button>
              </button>
              <button>View Demo,</button>
              </button>
            </div>
        </div>
      </section>

        {/* Features Section */}
        <section>
        <section>
        <div>
          <div>
            <h2>Section Title</h2>
            <p>Section description</p>
          </div>
        </div>
      </section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Key Features;</h2>
              </h2>
              <p>Advanced AI technology that drives results;</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {features.map((feature, index) => (
                <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform"></div>
                    <feature />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description</p>}</p>
                  {feature.benefits && (
                    <ul>
                      {feature.benefits.map((benefit, idx) => (} <li>
                          <CheckCircle />

                          {benefit} </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

            </div>
        </div>
      </section>

        {/* Benefits Section */}
        <section>
        <section>
        <div>
          <div>
            <h2>Section Title</h2>
            <p>Section description</p>
          </div>
        </div>
      </section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Why Choose Our Solution?</h2>
              </h2>
              <p>Proven results that drive business growth and efficiency;</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {benefits.map((benefit, index) => (
                <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform"></div>
                    <CheckCircle />
                  <p className="text-lg text-white font-medium">{benefit</p>}</p>
                </div>
              ))}
            </div>
          ))
        </section>

        {/* CTA Section */}
        <section>
        <div>
            <div className="...">
              <h2 className="...">
                Ready to Get Started?
              </h2>
              <p className="...">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="...">
                <button className="...">
                  Contact Us
                </button>
                <button className="...">
                  Learn More
                </button>
              </div>
            </div>
          ))
        </section>
      </div>
      <Footer />

  )
}
const AICybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions'
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
        }
    {
      icon: Zap,
      title: 'High Performance'
      description: 'Lightning-fast processing and real-time analytics for optimal results'
        }
    {
      icon: Shield,
      title: 'Enterprise Security'
      description: 'Bank-level security with encryption and compliance standards'
        }
    {
      icon: Globe,
      title: 'Global Reach'
      description: 'Worldwide deployment and support for international businesses'
    }
    ];
  const benefits = [
    'Advanced AI technology integration'
    'Real-time processing and analytics'
    'Enterprise-grade security and compliance'
    'Scalable and flexible solutions'
    '24/7 technical support'
    'Easy integration with existing systems'
    'Cost-effective pricing plans'
    'Proven track record of success'
    ];
  return (
    <div className="...">
      <Navigation />
      
      {/* Hero Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h1 className="...">
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Cybersecurity</span>
            </h1>
            <p className="...">
              Protect your business with advanced AI-powered cybersecurity solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h2 className="...">
              Advanced Security Features
            </h2>
            <p className="...">
              Stay ahead of threats with our cutting-edge AI cybersecurity solutions.
            </p>
          </div>
          
          <div className="...">
            {features.map((feature, index) => (
              <div key={index} className="...">
                <div className="...">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h2 className="...">
              Key Benefits
            </h2>
            <p className="...">
              Experience the power of our page solutions for your business.
            </p>
          </div>

          <div className="...">
            {benefits.map((benefit, index) => (
              <div key={index} className="...">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="...">
        <div className="...">
          <h2 className="...">
            Secure Your Business
          </h2>
          <p className="...">
            Get started with our AI-powered cybersecurity solutions today.
          </p>
          <button className="...">
            <ArrowRight className="w-5 h-5 mr-2" />
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PagePage