import { Helmet } from "react-helmet-async";
import { Brain } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { Target } from 'lucide-react';
import { Zap } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Star } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Users } from 'lucide-react';
import { Database } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Link } from "react-router-dom";

function AIBusinessIntelligencePro() {
  return (
    <>
      <Helmet>
        <title>AI Business Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Professional AI Business Intelligence Pro solutions and services" />
        <meta name="keywords" content="ai, business intelligence, analytics, data" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">AI Business Intelligence Pro</h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional AI Business Intelligence Pro solutions and services
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge AI business intelligence solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored implementations for your specific business requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your AI business intelligence needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AIBusinessIntelligencePro;