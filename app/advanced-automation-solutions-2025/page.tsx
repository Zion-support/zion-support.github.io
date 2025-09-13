import React from 'react';
import { Metadata } from 'next';
import AdvancedAutomationSolutionsShowcase2025 from '../../components/AdvancedAutomationSolutionsShowcase2025';
import AdvancedAutomationSolutionsPromotionBanner2025 from '../../components/AdvancedAutomationSolutionsPromotionBanner2025';

export const metadata: Metadata = {
  title: 'Advanced Automation Solutions 2025 | Zion Tech Group',
  description: 'Transform your business with revolutionary automation solutions in 2025. Discover intelligent process automation, AI-driven operations, and achieve unprecedented efficiency and ROI.',
  keywords: [
    'automation solutions 2025',
    'intelligent process automation',
    'business automation',
    'AI automation',
    'workflow automation',
    'process optimization',
    'automation ROI',
    'digital transformation',
    'autonomous operations',
    'smart automation'
  ],
  openGraph: {
    title: 'Advanced Automation Solutions 2025',
    description: 'Revolutionary automation technologies transforming business operations',
    type: 'article',
    publishedTime: '2025-01-10T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['Automation', 'Business Solutions', 'AI', '2025']
  }
};

const AdvancedAutomationSolutions2025Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Promotion Banner */}
      <AdvancedAutomationSolutionsPromotionBanner2025 />
      
      {/* Main Content Showcase */}
      <AdvancedAutomationSolutionsShowcase2025 />
      
      {/* Additional Content Sections */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Automation Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our advanced automation solutions are designed to deliver measurable results from day one. 
              With proven methodologies and cutting-edge AI technology, we help businesses achieve unprecedented efficiency and ROI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2,500%</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Efficiency Gains</h3>
              <p className="text-gray-300">
                Our automation solutions deliver up to 2,500% improvement in operational efficiency.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">85%</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cost Reduction</h3>
              <p className="text-gray-300">
                Achieve up to 85% reduction in operational costs through intelligent automation.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">99.9%</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Accuracy Rate</h3>
              <p className="text-gray-300">
                Our automation systems achieve 99.9% accuracy in process execution and decision making.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">90%</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Time Savings</h3>
              <p className="text-gray-300">
                Save up to 90% of time on repetitive tasks and manual processes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedAutomationSolutions2025Page;