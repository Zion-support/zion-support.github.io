'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const PagePage: React.FC = () => {
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']} ,
    
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']} ,
    
      benefits: ['Predictive analytics', 'Trend analysis', 'Performance metrics', 'Growth forecasting']} ,
    
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']} ]
  const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Page
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional page services to help your business succeed and grow.
            </p>
          </div>
<Footer />
    </>
        </section>
      </div>
      
      <Footer />
    </>
  );
}  </div>
    </main>


export default PagePage;