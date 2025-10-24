'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight } from 'lucide-react'
const Ai3dModelGeneratorPage: React.FC = () => {
  const features = [
    {
      icon: 'Brain'
    title: 'AI-Powered Intelligence'
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.'
    benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis'  ];
    }
  {
    icon: 'BarChart'
    title: 'Advanced Analytics'
      description: 'Comprehensive analytics dashboard with real-time data visualization.'
    ];
  const benefits = [
    'Increase efficiency by up to 50%'
    'Reduce costs by 30% with automation'
    'Improve decision-making with AI insights'
    'Scale operations without proportional staff increases'
    'Gain competitive advantage with advanced technology'
    ];
    return (
    <>
      <Navigation />
      <div className="...">
        {/* Hero Section */}
        <section className="...">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="...">
            <h1 className="...">
              Page
            </h1>
            <p className="...">
              Generate 3D models using AI technology. Create high-quality 3D assets with our advanced AI-powered model generator.
            </p>
            <div className="...">
              <button className="...">
                Get Started
                <ArrowRight className="w-8 h-8" />
              </button>
              <button className="...">
                Learn More
              </button>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="...">
          <div className="...">
            <div className="...">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="...">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="...">
              {features.map((feature, index) => (
                <div key={index} className="...">
                  <div className="...">
                    <div className="h-12 w-12">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="...">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="...">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="...">
          <div className="...">
            <div className="...">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="...">
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="...">
              {benefits.map((benefit, index) => (
                <div key={index} className="...">
                  <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="...">
          <div className="...">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="...">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="...">
              <button className="...">
                Start Free Trial
              </button>
              <button className="...">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
</>
  )
}
export default Ai3dModelGeneratorPage
}