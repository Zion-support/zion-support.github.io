<<<<<<< HEAD
import React from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> origin/merge-new-content-1757989975
import { Helmet } from 'react-helmet-async';
const AdvancedIoTPlatform2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>AdvancedIoTPlatform2026 | Zion Tech Group</title>
        <meta name="description" content="AdvancedIoTPlatform2026 - Revolutionary technology solutions" />
      </Helmet>
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">AdvancedIoTPlatform2026</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
=======

      <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm"></div>
          <div className="container mx-auto relative z-10">
            <div
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full text-white text-sm font-bold mb-6">
                🌐 IOT REVOLUTION • 2026
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                Advanced IoT Platform 2026
              </h1>
              <p className="text-2xl text-green-100 max-w-4xl mx-auto mb-8">
                Connect, manage, and optimize millions of devices with our revolutionary IoT platform. 
                Transform your business with real-time insights and intelligent automation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Connect Your Devices →
                </button>
                <button className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg hover:bg-green-400 hover:text-white transition-colors font-semibold">
                  View Platform Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Real-time Metrics */}
        <section className="py-20 px-4 bg-gradient-to-br from-teal-900/50 to-blue-900/50">
          <div className="container mx-auto">
            <div
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-green-300">📊 Real-time Platform Metrics</h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Live data from our global IoT network
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
              {industryMetrics.map((metric, index) => (
                <div
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-br from-green-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30 text-center"
                >
                  <div className="text-3xl font-bold text-green-400 mb-2">{metric.value}</div>
                  <div className="text-sm text-green-200 mb-2">{metric.metric}</div>
                  <div className="text-xs text-green-300">{metric.trend}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Device Types */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-green-300">🔌 Device Types</h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Support for all types of connected devices and applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {Object.entries(deviceTypes).map(([key, device], index) => (
                <div
                  key={key}
                  whileInView={{ opacity: 1, y: 0 }}
                  className={`bg-gradient-to-br from-green-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 cursor-pointer transition-all duration-300 hover:scale-105 ${
                    activeDevice === key ? 'ring-2 ring-green-400' : ''
                  }`}
                  onClick={() => setActiveDevice(key)}
                >
                  <div className="text-5xl mb-6 text-center">{device.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-green-300">{device.title}</h3>
                  <p className="text-green-100 mb-6 text-center text-sm">{device.description}</p>
                  <div className="text-center">
                    <div className="text-sm text-green-200 mb-2">Connected Devices:</div>
                    <div className="text-lg font-bold text-green-400">{device.devices}</div>
                    <div className="text-sm text-green-300 mt-2">Efficiency: +{device.efficiency}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Active Device Details */}
              <div
                key={activeDevice}
                className="bg-gradient-to-r from-green-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{deviceTypes[activeDevice as keyof typeof deviceTypes].icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold text-green-300 mb-2">
                      {deviceTypes[activeDevice as keyof typeof deviceTypes].title}
                    </h3>
                    <p className="text-green-100">
                      {deviceTypes[activeDevice as keyof typeof deviceTypes].description}
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-green-300 mb-4">Key Features:</h4>
                    <ul className="space-y-2">
                      {deviceTypes[activeDevice as keyof typeof deviceTypes].features.map((feature, index) => (
                        <li key={index} className="flex items-center text-green-100">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-6">
                      <div className="text-green-200 text-sm mb-2">Connected Devices</div>
                      <div className="text-3xl font-bold text-white">
                        {deviceTypes[activeDevice as keyof typeof deviceTypes].devices}
                      </div>
                      <div className="text-green-200 text-sm mt-2">
                        Efficiency: +{deviceTypes[activeDevice as keyof typeof deviceTypes].efficiency}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 px-4 bg-gradient-to-br from-teal-900/50 to-blue-900/50">
          <div className="container mx-auto">
            <div
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-teal-300">⚡ Platform Features</h2>
              <p className="text-xl text-teal-100 max-w-3xl mx-auto">
                Comprehensive IoT platform capabilities for any use case
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {platformFeatures.map((feature, index) => (
                <div
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-br from-teal-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/30"
                >
                  <div className="text-5xl mb-6 text-center">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-teal-300">{feature.category}</h3>
                  <ul className="space-y-2 mb-6">
                    {feature.features.map((feat, featIndex) => (
                      <li key={featIndex} className="text-teal-100 text-sm">
                        • {feat}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <div className="text-sm text-teal-200 mb-2">Capability:</div>
                    <div className="text-sm font-bold text-teal-300">{feature.capability}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Flow Visualization */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-green-300">📈 Real-time Data Flow</h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Visualize data flowing through our IoT network in real-time
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">📱</div>
                  <h3 className="text-xl font-bold text-green-300 mb-2">Devices</h3>
                  <div className="text-2xl font-bold text-green-400">2M+</div>
                  <div className="text-sm text-green-200">Connected</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-4">☁️</div>
                  <h3 className="text-xl font-bold text-green-300 mb-2">Cloud</h3>
                  <div className="text-2xl font-bold text-green-400">50TB</div>
                  <div className="text-sm text-green-200">Data/day</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-4">🧠</div>
                  <h3 className="text-xl font-bold text-green-300 mb-2">AI Processing</h3>
                  <div className="text-2xl font-bold text-green-400">99.9%</div>
                  <div className="text-sm text-green-200">Accuracy</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-green-300 mb-2">Analytics</h3>
                  <div className="text-2xl font-bold text-green-400">Real-time</div>
                  <div className="text-sm text-green-200">Insights</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600">
          <div className="container mx-auto text-center">
            <div
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-4xl font-bold mb-6">Connect Your World Today</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Join thousands of organizations using our IoT platform to transform their operations
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Start Your IoT Journey →
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-green-600 transition-colors font-semibold">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
>>>>>>> origin/merge-new-content-1757989975
      </div>
    </div>
  );

};


export default AdvancedIoTPlatform2026;
