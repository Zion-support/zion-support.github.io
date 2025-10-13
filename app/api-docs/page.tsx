'use client';
import Link from 'next/link';
import React from 'react'
;
const ApiDocsPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };
  const apiEndpoints = [
    {
      title: 'AI Services',
      description: 'Access our AI-powered services through RESTful APIs',
      endpoints: [
    ...category,
    endpoints: category.endpoints.filter(endpoint => ,)
      endpoint.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.path.toLowerCase().includes(searchQuery.toLowerCase())
)
  </
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Complete API documentation for Zion Tech Group's AI and IT solutions.</p>
            Explore endpoints, authentication, and integration guides.
          </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">,</button>
              <Code className="mr-2 h-5 w-5" />
              Get Started;
  </
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">,</button>
              <Download className="mr-2 h-5 w-5" />
 cursor/fix-errors-and-merge-to-main-6ce7;
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4" /><Key className="w-6 h-6 text-white" />
 cursor/fix-errors-and-merge-to-main-e1a2;
              </div>
              <h3 className="text-xl font-semibold text-white mb-3" />1. Get API Key</h3>
              <p className="text-gray-300 mb-4">Sign up and get your API key from the dashboard</p>
<button className="text-purple-400 hover:text-purple-300 font-medium" /> cursor/fix-errors-and-merge-to-main-e1a2;
                Get API Key →
<div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              </div>
              <h3 className="text-xl font-semibold text-white mb-3" />2. Make Request</h3>
              <p className="text-gray-300 mb-4">Use our REST API with your preferred language</p>
<button className="text-purple-400 hover:text-purple-300 font-medium" /> cursor/fix-errors-and-merge-to-main-e1a2;
                View Examples →
<div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              </div>
              <h3 className="text-xl font-semibold text-white mb-3" />3. Integrate</h3>
              <p className="text-gray-300 mb-4">Build amazing applications with our APIs</p>
<button className="text-purple-400 hover:text-purple-300 font-medium" /> cursor/fix-errors-and-merge-to-main-e1a2;
                Start Building →
{/* API Endpoints */}
          <h2 className="text-3xl font-bold text-white mb-12 text-center">API Endpoints</h2>
          <div className="space-y-8">{filteredEndpoints.map((category, categoryIndex) => (</div>
              <div key={categoryIndex}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10" /><div className="flex items-center gap-4 mb-8" /><div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
return (
    <>
      </div><div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900" /><Navigation />
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          </div><section className="text-center mb-16 relative overflow-hidden" /><div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl" />
            <div className="relative z-10 py-16 px-4" /><h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" /><span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  API Documentation</span>
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Integrate with our powerful AI and IT services through our comprehensive REST API.</p>
              </p>
            </div>
          </section>
          {/* API Endpoints */}
          <section className="mb-16" /><h2 className="text-3xl font-bold text-white mb-8 text-center">API Endpoints</h2>
            <div className="space-y-6">
              {apiEndpoints.map((endpoint) => (
                </div><div key={endpoint.id} className="bg-gray-800 rounded-lg p-6" /><div className="flex items-center justify-between mb-4" /><div className="flex items-center space-x-4" /><span className={`px-3 py-1 rounded text-sm font-semibold ${
                        endpoint.method === 'POST' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                      }`}>
                        {endpoint.method}</span>
                      </span>
                      <code className="text-cyan-400 font-mono">{endpoint.endpoint}</code>
                    </div>
                    <button;
                      onClick={() => copyToClipboard(endpoint.example, endpoint.id)}
                      className="flex items-center space-x-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm transition-colors"
                    >
                      {copiedCode === endpoint.id ? </button><Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedCode === endpoint.id ? 'Copied!' : 'Copy'}</span>
                  </div>
                  <div /><h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300">{category.description</p>}</p>
                  </div>
                </div>
<div className="space-y-6">
                  {category.endpoints.map((endpoint, endpointIndex) => (
                    </div><div key={endpointIndex} className="bg-white/5 rounded-xl p-6 border border-white/10">
                      </div><div className="flex items-center justify-between mb-4" /><div className="flex items-center gap-4" /><span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            endpoint.method === 'POST' 
                              ? 'bg-green-500/20 text-green-400' 
: 'bg-blue-500/20 text-blue-400'
                          }`}>
                          </span><code className="text-purple-400 font-mono">{endpoint.path}</code>
                        </div>
                        <button;
                          onClick={() =>copyToClipboard(endpoint.code, `${categoryIndex)</button>}-${endpointIndex}`)}
                          className="flex items-center gap-2 text-gray-400 hover: text-white transition-colors">,
 cursor/fix-errors-and-merge-to-main-e1a2;
                          {copiedCode === `${categoryIndex}-${endpointIndex}` ? (
<React .Fragment /><Check className="w-4 h-4" />
                              Copied!
                            </React.Fragment>
                          ) : (
                              </React><Copy className="w-4 h-4" />
                              Copy;
 cursor/fix-errors-and-merge-to-main-e1a2;
                            </React.Fragment>
                          )}
                        </button>
                      </div>
<p className="text-gray-300 mb-4">{endpoint.description}</p>
                      <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto" /><pre className="text-gray-300 text-sm" /><code>{endpoint.code}</code>
 cursor/fix-errors-and-merge-to-main-e1a2;
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
</div>
      </section>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" /><a;
              href="mailto:dev@ziontechgroup.com"
              className="cyber-button"
            >
              Email Support</a>
            </a>
            <a;
              href="/contact"
              className="cyber-button"
            >
              Contact Us</a>
            </a>
          </div>
        </section>
      </main>
      <Footer />
;