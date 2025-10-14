import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, BarChart3, TrendingUp } from 'lucide-react'
const AIBusinessIntelligenceProPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Business Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered business intelligence solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="containermx-autopx-4py-16">
          <div className="text-centermb-16">
            <h1 className="text-5xlfont-boldtext-whitemb-6">
              AI Business Intelligence Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your data into actionable insights with AI-powered business intelligence
            </p>
          </div>
          
          <div className="gridmd:grid-cols-3gap-8">
            <div className="bg-white/10backdrop-blur-smrounded-lgp-6borderborder-white/20">
              <Brain className="w-12h-12text-blue-400mb-4" />
              <h3 className="text-xlfont-semiboldtext-whitemb-3">AI Analytics</h3>
              <p className="text-gray-300">
                Advanced AI algorithms for deep data analysis and insights.
              </p>
            </div>
            <div className="bg-white/10backdrop-blur-smrounded-lgp-6borderborder-white/20">
              <BarChart3 className="w-12h-12text-blue-400mb-4" />
              <h3 className="text-xlfont-semiboldtext-whitemb-3">Real-time Dashboards</h3>
              <p className="text-gray-300">
                Live dashboards with real-time business metrics and KPIs.
              </p>
            </div>
            <div className="bg-white/10backdrop-blur-smrounded-lgp-6borderborder-white/20">
              <TrendingUp className="w-12h-12text-blue-400mb-4" />
              <h3 className="text-xlfont-semiboldtext-whitemb-3">Predictive Analytics</h3>
              <p className="text-gray-300">
                Forecast trends and make data-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AIBusinessIntelligenceProPage