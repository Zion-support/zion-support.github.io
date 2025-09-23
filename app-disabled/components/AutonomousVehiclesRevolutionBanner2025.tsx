import React from 'react';
import Link from 'next/link';

const AutonomousVehiclesRevolutionBanner2025: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-green-900 via-teal-900 to-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚗 AUTONOMOUS VEHICLES REVOLUTION 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Future of Transportation is Autonomous
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the revolutionary advances in self-driving technology that are transforming logistics, 
            delivery, and transportation across industries. Level 5 autonomy is here.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-2xl font-bold">Level 5 Autonomy</h3>
            </div>
            <p className="text-lg opacity-90 mb-6">
              True autonomous driving with 99.97% safety record and zero human intervention required for 99.9% of trips.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                360-degree perception with 8K resolution cameras
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Advanced sensor fusion with LiDAR and radar
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Real-time decision making in complex scenarios
              </li>
            </ul>
          </div>

          <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold">Logistics Transformation</h3>
            </div>
            <p className="text-lg opacity-90 mb-6">
              Global logistics companies are achieving unprecedented efficiency with autonomous vehicles.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-400">380%</div>
                <div className="text-sm opacity-90">ROI Achieved</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-400">85%</div>
                <div className="text-sm opacity-90">Efficiency Gain</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-400">95%</div>
                <div className="text-sm opacity-90">Accident Reduction</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-3xl font-bold text-purple-400">$89M</div>
                <div className="text-sm opacity-90">Annual Savings</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm mb-8">
          <h3 className="text-2xl font-bold text-center mb-6">Revolutionary Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚛</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Freight & Logistics</h4>
              <p className="text-sm opacity-90">24/7 autonomous trucking with 90% reduction in delivery times</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚌</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Public Transit</h4>
              <p className="text-sm opacity-90">Autonomous buses with fixed-route optimization and accessibility features</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Last-Mile Delivery</h4>
              <p className="text-sm opacity-90">Micro-mobility solutions for urban delivery and emergency response</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2025-autonomous-vehicles-revolution-ultimate-guide"
              className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
            >
              Read the Ultimate Guide
            </Link>
            <Link
              href="/case-studies/ai-2025-autonomous-vehicles-logistics-transformation-ultimate-success"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-all duration-300"
            >
              View Success Story
            </Link>
          </div>
          <p className="text-sm opacity-75">
            Transform your transportation operations with autonomous vehicle technology
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutonomousVehiclesRevolutionBanner2025;