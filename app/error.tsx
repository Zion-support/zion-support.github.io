<<<<<<< HEAD
<<<<<<< HEAD
'use client'.
=======
'use client';
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
import React from 'react'.
import {Helmet}}from 'react-helmet-async'.
import Navigation from '../components/Navigation'.
import Footer from '../components/Footer'.
import {CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings}}from 'lucide-react'.
const ErrorPage: React.FC = () => {,
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']},'
    {icon: BarChart,
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']},'
    {icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']},'
    {icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']},'
  ]
      <Helmet />
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
    <React.Fragment>
      <Helmet>
=======
'use client';
import React from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">Oops!</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Something went wrong</h2>
          <p className="text-gray-600 mb-8">
            We encountered an unexpected error. Please try again or contact support if the problem persists.
          </p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={reset}
            className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="w-full border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
          >
            Go Home
          </button>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
              Error Details (Development)
            </summary>
            <pre className="mt-2 p-4 bg-gray-100 rounded text-xs overflow-auto">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-9cbf
=======
    <>
      <Helmet>"
        <title>Error - Zion Tech Group</title>""
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">{/* Hero Section */</main>} <section className="relative py-20 px-4 sm: px-6 lg:px-8">,</section>"""
          <div className="max-w-7xl mx-auto">"""
            <div className="text-center">"""
              <h1 className="text-4xl md: text-6xl font-bold text-gray-900 mb-6">,</h1>
                Error."
  </""
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Error page.</p>"
              </p>""
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>""";
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover: bg-blue-700 transition-colors">,</button>;
                  Get Started;"
  </""
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover: bg-blue-50 transition-colors">,</button>"""
        {/* Features Section */} <section className="py-20 px-4 sm: px-6 lg:px-8">,</section>"""
                <div key={index}className="bg-white p-6 rounded-xl shadow-lg hover: shadow-xl transition-shadow">,</div>"""
                  <div className="flex items-center mb-4">"""
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />"""
                      <li key={benefitIndex}className="flex items-center text-sm text-gray-600">"""
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit} </li>
            </div>
          </div>"
        </section>""
        {/* CTA Section */} <section className="py-20 px-4 sm: px-6 lg:px-8 bg-blue-600">,</section>"""
          <div className="max-w-4xl mx-auto text-center">"""
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">,</h2>
              Ready to Get Started?"
            </h2>""
            <p className="text-xl text-blue-100 mb-8">Contact us today to learn more about our services.</p>"
            </p>""
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover: bg-gray-100 transition-colors font-semibold">,</button>
              Contact Us;
  </
};
"
export default ErrorPage;""
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
