import React, { memo } from "react";
import SEOHead from "../components/SEOHead";

const ZionIoTSolutionsPage: React.FC = memo(() => {
  return (
    <>
      <SEOHead
        title="Zion IoT Development & Integration - Connect and Manage IoT Devices"
        description="Internet of Things solutions including device development, data collection, analytics, and cloud integration for smart connected systems."
        keywords="IoT development, Internet of Things, smart devices, IoT integration, connected systems, IoT analytics"
        canonicalUrl="https://ziontechgroup.com/zion-iot-solutions"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Zion IoT Development & Integration
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Coming Soon - Connect and manage IoT devices with smart solutions
              and analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transform"
              >
                Contact Us
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transform"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

ZionIoTSolutionsPage.displayName = "ZionIoTSolutionsPage";

export default ZionIoTSolutionsPage;
