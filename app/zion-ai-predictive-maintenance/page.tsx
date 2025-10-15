import React from "react";
import { Helmet } from "react-helmet-async"; const ZionAiPredictiveMaintenancePage: React.FC = () => { return ( <> <Helmet> <title>Zion Ai Predictive Maintenance</title> <meta name="description" content="Professional zion ai predictive maintenance solutions and services" /> <meta name="keywords" content="zion, ai, predictive, maintenance" /> </Helmet> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">
              Zion Ai Predictive Maintenance
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional zion ai predictive maintenance solutions and services
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-300 text-xs md:text-sm">Prediction Accuracy</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">60%</div>
              <div className="text-gray-300 text-xs md:text-sm">Downtime Reduction</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">40%</div>
              <div className="text-gray-300 text-xs md:text-sm">Cost Savings</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">30</div>
              <div className="text-gray-300 text-xs md:text-sm">Days Advance Warning</div>
            </div>
          </div>
        </div>
      </div>
    </>
  ); };
export default ZionAiPredictiveMaintenancePage;
