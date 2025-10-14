import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, BarChart3, TrendingUp } from 'lucide-react'




const AI Business Intelligence Pro Page: React.FC = () => {
  return (
    <>
      <div>
      <Helmet>
        <title>A I Business Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced A I-powered business intelligence solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5 xlfont-boldtext-whitemb-6">
              AI Business Intelligence Pro
            </h1>
            <p>
          
              Transform your data into actionable insights with A I-powered business intelligence
            </p>
          </div>
          
          <div className="gridmd:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-smrounded-lg p-6borderborder-white/2 0">
              <Brain className="w-1 2 h-1 2 text-blue-4 0 0mb-4" />
              <h3 className="text-xlfont-semiboldtext-whitemb-3">AI Analytics</h3>
              <p className="text-gray-30 0">
                Advanced AI algorithms for deep data analysis and insights.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-smrounded-lg p-6borderborder-white/2 0">
              <BarChart3 className="w-1 2 h-1 2 text-blue-4 0 0mb-4" />
              <h3 className="text-xlfont-semiboldtext-whitemb-3">Real-time Dashboards</h3>
              <p className="text-gray-30 0">
                Live dashboards with real-time business metrics and KPIs.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-smrounded-lg p-6borderborder-white/2 0">
              <TrendingUp className="w-1 2 h-1 2 text-blue-4 0 0mb-4" />
              <h3 className="text-xlfont-semiboldtext-whitemb-3">Predictive Analytics</h3>
              <p className="text-gray-30 0">
                Forecast trends and make data-driven decisions.
              </p>
            </div>
        </div>
    </>
  )
  }
  )
export default AI;; Business Intelligence Pro Page
