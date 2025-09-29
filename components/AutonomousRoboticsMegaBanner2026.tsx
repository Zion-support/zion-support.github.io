import React from 'react';
import Link from 'next/link';
import { Bot, Cpu, Shield, ArrowRight } from 'lucide-react';

export default function AutonomousRoboticsMegaBanner2026() {
  return (
    <section className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  AI Autonomous Robotics 2026
                </h2>
                <p className="text-lg opacity-90">
                  The Future of Intelligent Automation and Robotic Systems
                </p>
              </div>
            </div>
            
            <p className="text-xl mb-8 opacity-90">
              Revolutionary autonomous robots achieving 99.9% operational accuracy, 500% efficiency gains, 
              and $300M+ ROI through intelligent automation operating 24/7 without human intervention.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm opacity-90">Operational Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">$300M+</div>
                <div className="text-sm opacity-90">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-90">Continuous Operation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">500%</div>
                <div className="text-sm opacity-90">Efficiency Gain</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-autonomous-robotics-2026"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg inline-flex items-center justify-center"
              >
                Explore Autonomous Robotics <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                View Success Stories
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-8 h-8 text-yellow-400" />
                <h3 className="text-lg font-bold">Neural Processing</h3>
              </div>
              <p className="text-sm opacity-90 mb-3">
                Advanced AI processors enabling real-time decision-making and learning with superhuman accuracy.
              </p>
              <div className="text-2xl font-bold text-yellow-400">99.9%</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-cyan-400" />
                <h3 className="text-lg font-bold">Safety Systems</h3>
              </div>
              <p className="text-sm opacity-90 mb-3">
                Advanced safety protocols ensuring zero accidents and continuous operation in high-risk environments.
              </p>
              <div className="text-2xl font-bold text-cyan-400">0</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Bot className="w-8 h-8 text-green-400" />
                <h3 className="text-lg font-bold">Industry Applications</h3>
              </div>
              <p className="text-sm opacity-90 mb-3">
                Manufacturing, healthcare, logistics, and service sectors achieving unprecedented automation 
                with autonomous robotic systems.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">0%</div>
                  <div className="text-xs opacity-90">Defect Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">500%</div>
                  <div className="text-xs opacity-90">Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">$200M</div>
                  <div className="text-xs opacity-90">Annual Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}