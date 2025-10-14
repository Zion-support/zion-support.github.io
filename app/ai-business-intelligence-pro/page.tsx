import React, { Suspense } from 'react';
import { Helmet, Brain, BarChart-3, TrendingUp } from 'react-helmet-async';

const AIBusiness IntelligenceProPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AIBusiness Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered business intelligence solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-9-via-purple-9-to-slate-9">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-126">
            <h-1 className="text-5-xlfont-boldtext-whitemb-6">
              AIBusiness Intelligence Pro
            </h-1>
            <p className="text-xl text-gray-300 mb-8">
              Transformyourdata intoactionableinsights with AI-powered business intelligence
            </p>
          </div>
          <div className="gridmd:grid-cols-3-gap-8">
            <div className="bg-white/10-backdrop-blur-smrounded-lgp-6-borderborder-white/2 0">
              <BrainclassNam e="w-1-h-1 text-blue-4-mb-4" />
              <h-3 className="text-xlfont-semiboldtext-whitemb-3">AIAnalytics</h-3>
              <p className="text-gray-30">
                Advanced AI algorithmsfordeep dataanalysisand insights.
              </p>
            </div>
            <div className="bg-white/10-backdrop-blur-smrounded-lgp-6-borderborder-white/2 0">
              <Bar Chart-3-className="w-1-h-1 text-blue-4-mb-4" />
              <h-3 className="text-xlfont-semiboldtext-whitemb-3">Real-time Dashboards</h-3>
              <p className="text-gray-30">
                Livedashboardswith real-timebusinessmetrics and KPIs.
              </p>
            </div>
            <div className="bg-white/10-backdrop-blur-smrounded-lgp-6-borderborder-white/2 0">
              <Trending UpclassName="w-1-h-1 text-blue-4-mb-4" />
              <h-3 className="text-xlfont-semiboldtext-whitemb-3">Predictive Analytics</h-3>
              <p className="text-gray-30">
                Forecasttrendsand make data-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  };

exportdefault AIBusiness Intelligence Pro Page;