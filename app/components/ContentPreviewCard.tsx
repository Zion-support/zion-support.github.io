import React from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import { CheckCircle, Brain, BarChart, Target, ArrowRight } from 'lucide-react'
const Page: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence'
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.'
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis'  ];
        }
    {
      icon: BarChart,
      title: 'Advanced Analytics'
      description: 'Comprehensive analytics dashboard with real-time data visualization.'
      benefits: ['Real-time monitoring', 'Custom dashboards', 'Data visualization', 'Performance metrics'  ];
        }
    {
      icon: Target,
      title: 'Precision Targeting'
      description: 'Target the right audience with AI-driven precision and accuracy.'
      benefits: ['Audience segmentation', 'Behavioral analysis', 'Conversion optimization', 'ROI tracking'  ];
    }
    ];
    return (
    <>
      <Navigation />
      <div className="...">
        <div className="...">
          <div className="...">
            <h1 className="...">
              ContentPreviewCard
            </h1>
            <p className="...">
              Advanced ContentPreviewCard solutions powered by artificial intelligence and machine learning.
            </p>
          </div>

          <div className="...">
            {features.map((feature, index) => (
              <div key={index} className="...">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xlfont-semiboldtext-whitemb-3">{feature.title}</h3>
                <p className="text-gray-300mb-4">{feature.description}</p>
                <ul className="...">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="...">
                      <CheckCircle className="w-4h-4text-emerald-400mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="...">
            <h2 className="text-3xlfont-boldtext-whitemb-8">Ready to Get Started?</h2>
            <p className="...">
              Transform your business with our cutting-edge AI solutions. Contact us today to learn more.
            </p>
            <a
              href="/contact"
              className="...">
              Get Started
              <ArrowRight className="w-5h-5ml-2" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )}
export default Page