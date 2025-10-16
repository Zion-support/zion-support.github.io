import React from "react";
import SEOHead from "../components/SEOHead";

const IoTSolutionsProPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Zion IoT Solutions Pro - Complete IoT Platform & Device Management"
        description="Transform your business with our comprehensive IoT platform. Device management, data analytics, and real-time monitoring for connected devices."
        keywords="IoT platform, device management, IoT analytics, connected devices, industrial IoT, smart devices, IoT monitoring"
        canonicalUrl="https://ziontechgroup.com/iot-solutions-pro"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Zion IoT Solutions Pro
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                End-to-end IoT platform with device management, data analytics,
                and real-time monitoring capabilities for connected devices
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#features"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Features
                </a>
                <a
                  href="/contact?service=iot-solutions-pro"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div
          id="features"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive IoT Platform Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our IoT platform provides everything you need to connect, manage,
              and analyze your devices and data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Device Management
              </h3>
              <p className="text-gray-600">
                Connect, configure, and manage thousands of IoT devices from a
                single platform
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Real-time Monitoring
              </h3>
              <p className="text-gray-600">
                Monitor device status, performance, and health in real-time with
                instant alerts
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Data Analytics
              </h3>
              <p className="text-gray-600">
                Advanced analytics and insights from your IoT data to drive
                business decisions
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Edge Computing
              </h3>
              <p className="text-gray-600">
                Process data at the edge for faster response times and reduced
                bandwidth usage
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Cloud Integration
              </h3>
              <p className="text-gray-600">
                Seamless integration with cloud platforms and services for
                scalable solutions
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Security Management
              </h3>
              <p className="text-gray-600">
                Enterprise-grade security with encryption, authentication, and
                access control
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-lg text-gray-600">
                Choose the plan that fits your IoT needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  $999<span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Up to 100
                    devices
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Basic
                    monitoring
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Data storage
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Email support
                  </li>
                </ul>
                <a
                  href="/contact?service=iot-solutions-pro&plan=basic"
                  className="w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </a>
              </div>

              <div className="bg-blue-600 text-white p-8 rounded-xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <div className="text-4xl font-bold mb-4">
                  $2,999<span className="text-lg opacity-75">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span> Up to 1,000
                    devices
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span> Advanced
                    monitoring
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span> Data
                    analytics
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span> Edge
                    computing
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span> API
                    integration
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span> Priority
                    support
                  </li>
                </ul>
                <a
                  href="/contact?service=iot-solutions-pro&plan=pro"
                  className="w-full bg-white text-blue-600 text-center py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </a>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Enterprise
                </h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  $7,999<span className="text-lg text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Unlimited
                    devices
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> All features
                    included
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Custom
                    development
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Advanced
                    analytics
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 24/7
                    monitoring
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 24/7
                    dedicated support
                  </li>
                </ul>
                <a
                  href="/contact?service=iot-solutions-pro&plan=enterprise"
                  className="w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Use Cases
              </h2>
              <p className="text-lg text-gray-600">
                See how our IoT solutions can transform your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Smart Cities
                </h3>
                <p className="text-gray-600">
                  Connect and manage city infrastructure including traffic
                  lights, parking meters, and environmental sensors.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Industrial Monitoring
                </h3>
                <p className="text-gray-600">
                  Monitor industrial equipment, production lines, and safety
                  systems in real-time.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Healthcare Devices
                </h3>
                <p className="text-gray-600">
                  Connect medical devices, patient monitors, and health tracking
                  systems for better care.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Agriculture
                </h3>
                <p className="text-gray-600">
                  Monitor soil conditions, weather, and crop health for
                  precision agriculture.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Fleet Management
                </h3>
                <p className="text-gray-600">
                  Track vehicles, monitor driver behavior, and optimize routes
                  for better efficiency.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Energy Monitoring
                </h3>
                <p className="text-gray-600">
                  Monitor energy consumption, optimize usage, and manage
                  renewable energy systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Connect Your World?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of businesses already using our IoT platform to
              connect, monitor, and optimize their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact?service=iot-solutions-pro"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IoTSolutionsProPage;
