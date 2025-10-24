'use client'
import { Metadata } from 'next';
import Footer from './Footer'
import Navigation from './Navigation'
import React from 'react'
import { ArrowRight, Brain } from 'lucide-react'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
import { Phone, Mail, ArrowRight } from 'lucide-react'
<<<<<<< HEAD

interface SEOEnhancerProps {
  className?: string;
}

const SEOEnhancer: React.FC<SEOEnhancerProps>= ({className = '' }) =</ {
  return (
    <>
      
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight"></h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">SEO Enhancer</h1 />
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed" />
              Professional SEO Enhancer services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center" />
                Get Started;
                <ArrowRight className="ml-2 h-5 w-5" / />
              </button />
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200" />Learn More</button />
            </div />
          </div />
        </section />
        {/* Features Section  */
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2 />
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" />Powerful SEO enhancement features designed to boost your search rankings</p />
            </div />
            <div className="$1"></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Brain className="h-12 w-12 text-emerald-400 mb-4" / />
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered SEO</h3 />
                <p className="text-gray-300 mb-4">Advanced AI algorithms that optimize your content for search engines</p />
                <ul className="space-y-2" />
                  <li className="flex items-center text-sm text-gray-300" />
                    <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" / />Keyword optimization</li />
                  <li className="flex items-center text-sm text-gray-300" />
                    <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" / />Content analysis</li />
                </ul />
              </div />
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Zap className="h-12 w-12 text-emerald-400 mb-4" / />
                <h3 className="text-xl font-semibold text-white mb-3">Fast Results</h3 />
                <p className="text-gray-300 mb-4">See improvements in your search rankings quickly</p />
                <ul className="space-y-2" />
                  <li className="flex items-center text-sm text-gray-300" />
                    <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" / />Quick implementation</li />
                  <li className="flex items-center text-sm text-gray-300" />
                    <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" / />Real-time monitoring</li />
                </ul />
              </div />
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Shield className="h-12 w-12 text-emerald-400 mb-4" / />
                <h3 className="text-xl font-semibold text-white mb-3">Safe & Compliant</h3 />
                <p className="text-gray-300 mb-4">White-hat SEO techniques that comply with search engine guidelines</p />
                <ul className="space-y-2" />
                  <li className="flex items-center text-sm text-gray-300" />
                    <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" / />Google compliant</li />
                  <li className="flex items-center text-sm text-gray-300" />
                    <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" / />Long-term results</li />
                </ul />
              </div />
            </div />
          </div />
        </section />
        {/* CTA Section  */
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Boost Your SEO?</h2 />
            <p className="text-xl text-gray-300 mb-8" />Join thousands of businesses already using our SEO enhancement solutions</p />
            <div className="$1"></div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200" />Start Free Trial</button />
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200" />Contact Sales</button />
            </div />
          </div />
        </section />
      </div />
      <Footer / />
    </ />
  )
}

export default SEOEnhancer;
=======
'use client';
const "SEOEnhancer": React.FC<SEOEnhancerProps> = ({ className = ' }) => {
>>>>>>> origin/main
