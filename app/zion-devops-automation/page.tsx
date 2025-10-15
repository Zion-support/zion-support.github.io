import React, { memo } from 'react';
import SEOHead from '../components/SEOHead';

const ZionDevOpsAutomationPage: React.FC = memo(() => {
  return (
    <>
      <SEOHead
        title="Zion DevOps Automation & CI/CD Pipeline - Automate Development Processes"
        description="Complete DevOps automation services including CI/CD pipeline setup, infrastructure as code, and automated deployment solutions for modern development workflows."
        keywords="DevOps automation, CI/CD pipeline, infrastructure as code, deployment automation, development automation"
        canonical="https://ziontechgroup.com/zion-devops-automation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Zion DevOps Automation & CI/CD Pipeline
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Coming Soon - Complete DevOps automation services for modern development workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="mailto:kleber@ziontechgroup.com" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transform">
                Contact Us
              </a>
              <a href="tel:+13024640950" className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transform">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

ZionDevOpsAutomationPage.displayName = 'ZionDevOpsAutomationPage';

export default ZionDevOpsAutomationPage;