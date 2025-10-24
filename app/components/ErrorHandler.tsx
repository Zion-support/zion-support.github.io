import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { CheckCircle, Brain, BarChart } from 'lucide-react';

const Page: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time monitoring', 'Custom dashboards', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target the right audience with AI-driven precision and accuracy.',
      benefits: ['Audience segmentation', 'Behavioral analysis', 'Conversion optimization', 'ROI tracking']
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screenbg-gradient-to-brfrom-slate-900via-emerald-900 to-slate-900">
        <div className="containermx-autopx-4py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xlmd:text-7xlfont-boldtext-white mb-6">
              ErrorHandler
            </h1>
            <p className="text-xltext-emerald-400max-w-3xlmx-auto">
              Advanced ErrorHandler solutions powered by artificial intelligence and machine learning.
            </p>
          </div>

          <div className="gridgrid-cols-1md:grid-cols-3gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800p-6rounded-lg">
                <feature.icon className="w-12h-12text-emerald-400mb-4" />
                <h3 className="text-xlfont-semiboldtext-whitemb-3">{feature.title}</h3>
                <p className="text-gray-300mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flexitems-centertext-gray-300">
                      <CheckCircle className="w-4h-4text-emerald-400mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xlfont-boldtext-whitemb-8">Ready to Get Started?</h2>
            <p className="text-gray-300mb-8max-w-2xlmx-auto">
              Transform your business with our cutting-edge AI solutions. Contact us today to learn more.
            </p>
            <a
              href="/contact"
              className="inline-flexitems-centerbg-gradient-to-rfrom-emerald-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-5h-5ml-2" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )};

export default Page;