import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function AIMatcher() {
  return (
    <>
      <SEO 
        title="AI Matcher - Zion Tech Group" 
        description="Find the perfect AI solution for your business needs with our intelligent matching system." 
        keywords="AI matcher, AI solutions, business AI, intelligent matching, Zion Tech Group"
        url="https://ziontechgroup.com/ai-matcher"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>AI Matcher</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Discover the perfect AI solution for your business needs with our intelligent matching system
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-zion-blue-dark border border-zion-cyan rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Find Your Perfect AI Solution</h2>
              <p className="text-zion-slate-light mb-6">
                Our AI Matcher analyzes your business requirements and recommends the most suitable AI solutions 
                from our comprehensive suite of services.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Business Type</h3>
                  <select className="w-full p-3 bg-zion-blue border border-zion-blue-light text-white rounded-lg focus:outline-none focus:border-zion-cyan">
                    <option>Select your business type</option>
                    <option>Startup</option>
                    <option>Small Business</option>
                    <option>Medium Enterprise</option>
                    <option>Large Corporation</option>
                  </select>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Industry</h3>
                  <select className="w-full p-3 bg-zion-blue border border-zion-blue-light text-white rounded-lg focus:outline-none focus:border-zion-cyan">
                    <option>Select your industry</option>
                    <option>Technology</option>
                    <option>Healthcare</option>
                    <option>Finance</option>
                    <option>Manufacturing</option>
                    <option>Retail</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-white mb-4">What are you looking to achieve?</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <label className="flex items-center space-x-2 text-zion-slate-light">
                    <input type="checkbox" className="rounded" />
                    <span>Automation</span>
                  </label>
                  <label className="flex items-center space-x-2 text-zion-slate-light">
                    <input type="checkbox" className="rounded" />
                    <span>Analytics</span>
                  </label>
                  <label className="flex items-center space-x-2 text-zion-slate-light">
                    <input type="checkbox" className="rounded" />
                    <span>Customer Service</span>
                  </label>
                  <label className="flex items-center space-x-2 text-zion-slate-light">
                    <input type="checkbox" className="rounded" />
                    <span>Content Creation</span>
                  </label>
                  <label className="flex items-center space-x-2 text-zion-slate-light">
                    <input type="checkbox" className="rounded" />
                    <span>Security</span>
                  </label>
                  <label className="flex items-center space-x-2 text-zion-slate-light">
                    <input type="checkbox" className="rounded" />
                    <span>Optimization</span>
                  </label>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button className="bg-zion-cyan text-zion-blue-dark px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">
                  Find My AI Solutions
                </button>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-6">Popular AI Solutions</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">AI Automation</h3>
                  <p className="text-zion-slate-light mb-4">
                    Streamline your business processes with intelligent automation
                  </p>
                  <a href="#" className="text-zion-cyan hover:text-zion-cyan-light font-medium">
                    Learn More →
                  </a>
                </div>
                
                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">AI Analytics</h3>
                  <p className="text-zion-slate-light mb-4">
                    Gain insights from your data with advanced AI analytics
                  </p>
                  <a href="#" className="text-zion-cyan hover:text-zion-cyan-light font-medium">
                    Learn More →
                  </a>
                </div>
                
                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">AI Security</h3>
                  <p className="text-zion-slate-light mb-4">
                    Protect your business with AI-powered security solutions
                  </p>
                  <a href="#" className="text-zion-cyan hover:text-zion-cyan-light font-medium">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}