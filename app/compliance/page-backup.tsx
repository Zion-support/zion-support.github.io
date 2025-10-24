'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
const PageBackupPage: React.FC = () => {
  const features = [
    {
      ico
  n: Brain
    title: 'AI-Powered Analysis'
      description: 'Advanced AI algorithms provide intelligent insights and recommendations.'
    benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
}
  {
    icon: BarChart
    title: 'Advanced Analytics'
      description: 'Comprehensive analytics dashboard with real-time data visualization.'
    benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
}
  {
    icon: Target
    title: 'Precision Targeting'
      description: 'Target specific goals and objectives with precision and accuracy.'
    benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
}
  {
    icon: TrendingUp
    title: 'Growth Optimization'
      description: 'Optimize your business growth with data-driven strategies.'
    benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
  ]
  return (
    <div></div>
      <Helmet></Helmet>
        <title>Page Backup - Zion Tech Group</title>
        <meta name="description" content="Advanced page backup solutions powered by AI technology." /></meta>
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" /></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">Page Backup</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">Advanced page backup solutions powered by AI technology.</p>p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover: from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Get Started</button>
              <button className="border border-purple-400 text-purple-400 hover: bg-purple-400 hove
  r:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Learn More</button>
            
          
        </section>
        {/* Features Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Powerful AI technology that drives results</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 l
  g:grid-cols-4 gap-8">{features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hove
  r: scale-110 transition-transform"></div>
                    <feature.icon className="w-8 h-8 text-white" /></feature>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2"></ul>
                      {feature.benefits.map((benefit, idx) => (</ul>
                        <li key={idx} className="flex items-center text-sm text-gray-400"></li>
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                          {benefit}</CheckCircle>
                        </li>
                      ))}
                    </ul>
                  
                </div>
              
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">Contact our experts to discuss your requirements and get started today.</p>p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover: from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Contact Us</button>
                <button className="border border-purple-400 text-purple-400 hover: bg-purple-400 hove
  r:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Learn More</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      </Footer>
</div>;
  );
};

export default PageBackupPage
})))

}
}