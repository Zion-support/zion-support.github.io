import React, { memo } from "react";
import SEOHead from "../components/SEOHead";

const ZionAIVideoGeneratorPage: React.FC = memo(() => {
  return (
    <>
      <SEOHead
        title="Zion AI Video Generator Pro - Create Professional Videos with AI"
        description="Create professional videos from text, images, and audio using advanced AI technology for marketing and content creation."
        keywords="AI video generator, video creation, AI video, marketing videos, content creation"
        canonicalUrl="https://ziontechgroup.com/zion-ai-video-generator"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Zion AI Video Generator Pro
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Coming Soon - Create professional videos with AI technology for
              marketing and content creation.
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

ZionAIVideoGeneratorPage.displayName = "ZionAIVideoGeneratorPage";

export default ZionAIVideoGeneratorPage;
