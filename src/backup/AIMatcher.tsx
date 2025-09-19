import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "../components/GradientHeading";

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
              Discover the perfect AI solution for your business needs
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-zion-blue-dark border border-zion-cyan rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Find Your Perfect AI Solution</h2>
              <p className="text-zion-slate-light mb-8">
                Our AI Matcher analyzes your business requirements and recommends the most suitable AI solutions from our comprehensive portfolio.
              </p>
              
              <div className="space-y-6">
                <div className="bg-zion-blue p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-4">How It Works</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-zion-cyan text-zion-blue-dark w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-bold">1</span>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">Answer Questions</h4>
                      <p className="text-zion-slate-light text-sm">Tell us about your business needs and challenges</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-zion-cyan text-zion-blue-dark w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-bold">2</span>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">AI Analysis</h4>
                      <p className="text-zion-slate-light text-sm">Our AI analyzes your requirements and matches solutions</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-zion-cyan text-zion-blue-dark w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-bold">3</span>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">Get Recommendations</h4>
                      <p className="text-zion-slate-light text-sm">Receive personalized AI solution recommendations</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <button className="bg-zion-cyan text-zion-blue-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zion-cyan-light transition-colors">
                    Start AI Matching
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}