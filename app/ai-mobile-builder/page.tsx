import { Helmet } from 'react-helmet-async';

export default function AIMobileBuilder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Mobile Builder | Zion Tech Group</title>
        <meta name="description" content="Build mobile apps with AI assistance. Professional mobile app development services by Zion Tech Group." />
        <meta name="keywords" content="AI mobile builder, mobile app development, AI development, Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Mobile <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Builder</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build powerful mobile applications with the assistance of AI technology. Create, deploy, and scale your mobile apps efficiently.
          </p>
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Build Your Mobile App?</h2>
            <p className="text-gray-300 mb-6">
              Our AI-powered mobile development platform helps you create professional mobile applications quickly and efficiently.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
              Start Building
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
