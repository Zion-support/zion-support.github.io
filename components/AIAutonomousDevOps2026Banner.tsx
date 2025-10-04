import React from 'react';
import { Link } from 'react-router-dom';

export default function AIAutonomousDevOps2026Banner() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                🔧 REVOLUTIONARY 2026
              </span>
              <span className="text-blue-200 text-sm">Autonomous DevOps</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              AI Autonomous DevOps 2026:
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                {' '}Self-Healing Infrastructure
              </span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Transform your infrastructure with AI-powered autonomous DevOps that delivers 99.9% uptime, 
              self-healing systems, and zero-touch operations. See how Fortune 500 companies achieved 
              $10M+ savings with autonomous infrastructure management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/blog/ai-autonomous-devops-2026"
                className="bg-green-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-300 transition-colors shadow-lg hover:shadow-xl"
              >
                Learn Autonomous DevOps →
              </Link>
              <Link
                href="/services/ai-autonomous-devops"
                className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-400 hover:text-blue-900 transition-colors"
              >
                Get DevOps AI Services
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-green-400">99.9%</div>
                <div className="text-sm text-blue-200">Uptime Achieved</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">$10M+</div>
                <div className="text-sm text-blue-200">Annual Savings</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">90%</div>
                <div className="text-sm text-blue-200">Faster Resolution</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-800 to-indigo-800 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Self-Healing Systems</h3>
                <p className="text-blue-200">Autonomous infrastructure management</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-blue-100">Intelligent monitoring</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-blue-100">Self-healing systems</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-blue-100">Predictive analytics</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-blue-100">Autonomous scaling</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-blue-100">Zero-touch operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}