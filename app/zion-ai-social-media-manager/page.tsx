import { Link } from "react-router-dom";

export default function ZionAISocialMediaManager() {
  return (
    <>
      <Helmet>
        <title>Zion AI Social Media Manager - Zion Tech Group</title>
        <meta name="description" content="AI-powered social media management solution. Automate posting, engagement, and analytics across all social platforms." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-6">
            Zion AI Social Media Manager
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            AI-powered social media management solution that automates posting, engagement, and analytics across all social platforms.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Auto Posting</h3>
              <p className="text-gray-300">Schedule and automate posts across multiple platforms.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Content Generation</h3>
              <p className="text-gray-300">AI generates engaging content tailored to your audience.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Analytics & Insights</h3>
              <p className="text-gray-300">Comprehensive analytics and performance insights.</p>
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
}