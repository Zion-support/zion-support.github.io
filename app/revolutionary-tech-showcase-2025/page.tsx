import React from 'react';
import SEO from '../../components/SEO';
import RevolutionaryTechShowcase2025 from '../../components/RevolutionaryTechShowcase2025';
import EnterpriseSuccessBanner from '../../components/EnterpriseSuccessBanner';
import FutureTechPreviewBanner from '../../components/FutureTechPreviewBanner';
import NewContentPromotionBanner2025 from '../../components/NewContentPromotionBanner2025';

export default function RevolutionaryTechShowcasePage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Revolutionary Technology Showcase 2025 - Zion Tech Group"
        description="Discover cutting-edge AI, cloud infrastructure, and digital transformation solutions that are reshaping the future of business and technology."
        keywords="revolutionary technology, AI solutions, cloud infrastructure, digital transformation, enterprise technology, innovation"
        url="/revolutionary-tech-showcase-2025"
      />
      
      {/* Hero Banner */}
      <NewContentPromotionBanner2025 />
      
      {/* Main Technology Showcase */}
      <RevolutionaryTechShowcase2025 />
      
      {/* Enterprise Success Stories */}
      <EnterpriseSuccessBanner />
      
      {/* Future Technology Preview */}
      <FutureTechPreviewBanner />
      
      {/* Additional Content Sections */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver 
              transformative solutions that drive real business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation First</h3>
              <p className="text-gray-600">
                We stay ahead of the curve with the latest technologies and methodologies, 
                ensuring your business is always equipped with cutting-edge solutions.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rapid Implementation</h3>
              <p className="text-gray-600">
                Our agile approach ensures quick deployment and immediate results, 
                minimizing disruption to your business operations.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600">
                With hundreds of successful implementations, we have a track record 
                of delivering measurable ROI and business transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}