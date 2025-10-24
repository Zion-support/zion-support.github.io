<<<<<<< HEAD
=======
'use client';
>>>>>>> cursor/delete-records-30ea
import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { CheckCircle, ArrowRight, Brain, BarChart, Target } from 'lucide-react';

<<<<<<< HEAD
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              EnhancedLoadingStates
            </h1>
            <p className="text-xl text-emerald-400 max-w-3xl mx-auto">
              Advanced EnhancedLoadingStates solutions powered by artificial intelligence and machine learning.
            </p>
          </div>
=======
interface LoadingSpinnerProps {size?: 'sm' | 'md' | 'lg';}
  text?: string;}export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({,
  size = 'md', 
  text = 'Loading...'}) => {const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',}return(<div className="flex flex-col items-center justify-center p-8">)</div>
      <Loader2 className={`${sizeClasses[size]}animate-spin text-blue-500`} />
      {text && (
        <p className="mt-2 text-sm text-gray-500">{text</p>}</p>
      )}
    </div>
  )
}
>>>>>>> cursor/delete-records-30ea

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg">
                <feature.icon className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your business with our cutting-edge AI solutions. Contact us today to learn more.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <Footer />
    </>
  );
};

export default Page;
=======
      <h2 className="text-xl font-semibold text-white mb-2">Zion Tech Group</h2>
      <p className="text-gray-300">Loading amazing content...</p>
    </div>
  </div>
);

export const ServiceCardSkeleton: React.FC = () => (,
  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 animate-pulse">
    </div><div className="w-16 h-16 bg-gray-600 rounded-2xl mb-6"></div>
    <div className="h-6 bg-gray-600 rounded mb-4"></div>
    <div className="h-4 bg-gray-600 rounded mb-4"></div>
    <div className="space-y-2">
      </div><div className="h-3 bg-gray-600 rounded"></div>
      <div className="h-3 bg-gray-600 rounded"></div>
      <div className="h-3 bg-gray-600 rounded w-3/4"></div>
    </div>
  </div>
);

export const StatsSkeleton: React.FC = () => (,
  <div className="grid grid-cols-2 md: grid-cols-4 gap-8">,</div>
    {Array.from({ length: 4 ,)}).map((_, index) => (
      <div key={index}className="text-center animate-pulse">
        <div className="h-8 bg-gray-600 rounded mb-2"></div>
        <div className="h-4 bg-gray-600 rounded w-3/4 mx-auto"></div>
      </div>
    ))}
  </div>
);

export const ContentSkeleton: React.FC = () => (,
  <div className="space-y-6 animate-pulse">
    </div><div className="h-8 bg-gray-600 rounded w-3/4"></div>
    <div className="space-y-2">
      </div><div className="h-4 bg-gray-600 rounded"></div>
      <div className="h-4 bg-gray-600 rounded"></div>
      <div className="h-4 bg-gray-600 rounded w-2/3"></div>
    </div>
  </div>
)
>>>>>>> cursor/delete-records-30ea
