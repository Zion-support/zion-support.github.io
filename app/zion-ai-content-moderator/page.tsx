import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ZionAiContentModeratorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Content Moderator - Zion Tech Group</title>
        <meta name="description" content="AI-powered content moderation solution. Automatically detect and filter inappropriate content across text, images, and videos." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-6">
            Zion AI Content Moderator
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            AI-powered content moderation solution that automatically detects and filters inappropriate content across text, images, and videos.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Multi-modal Detection</h3>
              <p className="text-gray-300">Detect inappropriate content in text, images, and videos.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Real-time Processing</h3>
              <p className="text-gray-300">Process and moderate content in real-time at scale.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Customizable Rules</h3>
              <p className="text-gray-300">Configure moderation rules based on your platform needs.</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}  };

export default ZionAiContentModeratorPage;
