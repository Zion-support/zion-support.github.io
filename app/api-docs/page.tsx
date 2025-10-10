export default function APIDocsPage() {const [copiedCode, setCopiedCode] = useState<string | null>(null);
    )})).filter(category => category.endpoints.length > 0);
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>
      <SEOOptimizer;

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
      {/* Quick Start */} <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Start</h2>
          <div className="grid grid-cols-1 lg: grid-cols-3 gap-8">,</div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Key className="w-6 h-6 text-white" />
              <button className="text-purple-400 hover: text-purple-300 font-medium">,</button>
              <button className="text-purple-400 hover: text-purple-300 font-medium">,</button>
              <button className="text-purple-400 hover: text-purple-300 font-medium">,</button>
      {/* API Endpoints */} <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">API Endpoints</h2>
          <div className="space-y-8">{filteredEndpoints.map((category, categoryIndex) => (</div>
              <div key={categoryIndex}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300">{category.description</p>}</p>
                  </div>
                </div>
                <div className="space-y-6">{category.endpoints.map((endpoint, endpointIndex) => (</div>
                    <div key={endpointIndex}className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            endpoint.method === 'POST' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-blue-500/20 text-blue-400'}`}>{endpoint.method</span>} </span>
                          <code className="text-purple-400 font-mono">{endpoint.path}</code>
                        </div>
                        <button;
                          onClick={() =>copyToClipboard(endpoint.code, `${categoryIndex)</button>}-${endpointIndex}`)}
                          className="flex items-center gap-2 text-gray-400 hover: text-white transition-colors">,
                            <React.Fragment>
                              <Copy className="w-4 h-4" />
                              Copy;
                      <p className="text-gray-300 mb-4">{endpoint.description</p>}</p>
                      <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-gray-300 text-sm">
                          <code>{endpoint.code}</code>
      {/* CTA Section */} <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,</h2>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">Start building with our APIs today and create amazing applications.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover: bg-gray-100 transition-colors">,</button>
              Get API Key;
  </
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover: bg-white hover:text-purple-600 transition-colors">,</button>
              View SDKs;
