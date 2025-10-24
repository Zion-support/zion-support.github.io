'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
const PageBackupPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis'
      description: 'Advanced AI algorithms provide intelligent insights and recommendations.'
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis'  ];
        }
    {
      icon: BarChart,
      title: 'Advanced Analytics'
      description: 'Comprehensive analytics dashboard with real-time data visualization.'
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics'  ];
        }
    {
      icon: Target,
      title: 'Precision Targeting'
      description: 'Target specific goals and objectives with precision and accuracy.'
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics'  ];
        }
    {
      icon: TrendingUp,
      title: 'Growth Optimization'
      description: 'Optimize your business growth with data-driven strategies.'
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization'  ];
    }
    ];
    return (
    <>
      <Navigation />
      <div className="...">
        {/* Hero Section */}
        <section className="...">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="...">
            <h1 className="...">
              Page Backup
            </h1>
            <p className="...">
              Advanced page backup solutions powered by AI technology.
            </p>
            <div className="...">
              <button className="...">
                Get Started
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
              <h2 className="...">
                Key Features
              </h2>
              <p className="...">
                Powerful AI technology that drives results
              </p>
            </div>
            <div className="...">
              {features.map((feature, index) => (
                <div key={index} className="...">
                  <div className="...">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="...">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="...">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="...">
          <div className="...">
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
          </div>
        </section>
      </div>
      <Footer />
      )
}
export default PageBackupPage