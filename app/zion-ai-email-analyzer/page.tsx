import React from "react";
const Page = () => {
  return (
<>    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Page - Zion Tech Group" /></meta>
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
Zion AI Email Analyzer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced AI-powered email analysis and management solutions for modern businesses.
          </p>805
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Email Analysis</h3>
            <p className="text-gray-300 mb-4">
AI-powered email content analysis and sentiment detection.
            </p>1259
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Sentiment analysis</li>
              <li>• Content categorization</li>
              <li>• Priority detection</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Smart Filtering</h3>
            <p className="text-gray-300 mb-4">
              Intelligent email filtering and organization capabilities.
            </p>1797
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Spam detection</li>
              <li>• Auto-categorization</li>
              <li>• Smart routing</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Response Suggestions</h3>
            <p className="text-gray-300 mb-4">
              AI-generated response suggestions and templates.
            </p>2342
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Smart replies</li>
              <li>• Template suggestions</li>
              <li>• Tone optimization</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Email Management?</h2>
            <p className="text-gray-300 mb-6">
Our AI email analyzer experts are ready to help you optimize your email workflow.
            </p>2971
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
              Get Started Today
            </button>3118
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
