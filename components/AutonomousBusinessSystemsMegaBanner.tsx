import React from 'react';
import Link from 'next/link';

export default function AutonomousBusinessSystemsMegaBanner() {
  return (
    <div className="bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 left-16 w-24 h-24 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-24 w-20 h-20 bg-emerald-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-24 left-1/3 w-16 h-16 bg-teal-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-40 right-1/4 w-28 h-28 bg-green-300 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-lg font-bold animate-bounce">
              🤖 AUTONOMOUS 2026
            </span>
            <span className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white px-6 py-2 rounded-full text-lg font-bold">
              95% AUTOMATION
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent">
            AI Autonomous Business Systems
          </h1>
          
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto">
            Achieve <span className="font-bold text-yellow-300">95% operational automation</span> with 
            <span className="font-bold text-blue-300"> self-managing AI systems</span> that transform your enterprise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">95% Automation</h3>
            <p className="text-green-100">Complete operational autonomy with minimal human intervention</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-2">$3.2B Savings</h3>
            <p className="text-green-100">Annual operational cost reductions across all functions</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">24/7 Operations</h3>
            <p className="text-green-100">Continuous autonomous management without downtime</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-12 border border-white/20">
          <h2 className="text-2xl font-bold mb-6 text-center">Transform Your Business Operations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-200">Before Autonomous Systems</h3>
              <ul className="text-green-100 space-y-2">
                <li>• Manual processes: 85% of operations</li>
                <li>• Decision time: 2-5 days average</li>
                <li>• Operational efficiency: 67%</li>
                <li>• Error rate: 12%</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-200">After Autonomous Systems</h3>
              <ul className="text-green-100 space-y-2">
                <li>• Autonomous processes: 95% of operations</li>
                <li>• Decision time: Real-time</li>
                <li>• Operational efficiency: 94%</li>
                <li>• Error rate: 0.3%</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link 
              href="/blog/ai-autonomous-business-systems-2026"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Read Full Research Paper
            </Link>
            
            <Link 
              href="/case-studies/ai-autonomous-business-systems-success-2026"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Success Story
            </Link>
          </div>
          
          <div className="flex justify-center items-center gap-6 text-green-200">
            <Link href="/services/ai-autonomous-operations" className="hover:text-white transition-colors">
              Explore Autonomous Operations
            </Link>
            <span>•</span>
            <Link href="/services/ai-enterprise-transformation" className="hover:text-white transition-colors">
              Enterprise Transformation
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Get Started Today
            </Link>
          </div>
        </div>

        {/* Automation visualization */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-3 text-green-300">
            <div className="w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
            <div className="w-8 h-1 bg-green-400"></div>
            <div className="w-6 h-6 bg-green-400 rounded-full animate-pulse delay-300"></div>
            <div className="w-8 h-1 bg-green-400"></div>
            <div className="w-6 h-6 bg-green-400 rounded-full animate-pulse delay-700"></div>
            <div className="w-8 h-1 bg-green-400"></div>
            <div className="w-6 h-6 bg-green-400 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  );
}