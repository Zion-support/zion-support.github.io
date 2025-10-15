<<<<<<< HEAD

const APIDocsPage: React.FC = () => {}
  const [selectedAPI, setSelectedAPI] = useState('ai-chatbot');""
  const [searchTerm, setSearchTerm] = useState('');""
  const  apis = [
    {}
      id= 'ai-chatbot'
      name: 'AI Chatbot API'
      description: 'Integrate our AI chatbot into your applications'
      version: 'v2.1'
      status: 'Active'
      endpoints: 12,
  icon: <MessageSquare: className ="w-6 h-6 text-cyan-400" />"
    }
    {},
      id= 'ai-analytics',"
      name: 'AI Analytics API',"
      description: 'Access advanced analytics and insights',"
      version: 'v1.8',"
      status: 'Active',"
      endpoints: 8,
      icon: <className="w-6 h-6 text-blue-400" />""

      id= 'content-generation',""
      name: 'Content Generation API',""
      description: 'Generate high-quality content with AI',""
      version: 'v3.0',""
      status: 'Active',""
      endpoints: 15,
      icon: <FileText: className ="w-6 h-6 text-purple-400" />""

      id= 'computer-vision',""
      name: 'Computer Vision API',""
      description: 'Image and video analysis capabilities',""
      version: 'v2.5',""
      status: 'Active',""
      endpoints: 10,
      icon: <Globe: className ="w-6 h-6 text-green-400" />""

      id= 'data-processing',""
      name: 'Data Processing API',""
      description: 'Process and transform data at scale',""
      version: 'v1.3',""
      status: 'Active',""
      endpoints: 6,
      icon: <className="w-6 h-6 text-orange-400" />""

      id= 'mobile-sdk',""
      name: 'Mobile SDK',""
      description: 'Native mobile app integration',""
      version: 'v4.2',""
      status: 'Active',""
      endpoints: 20,
      icon: <className="w-6 h-6 text-pink-400" />""

  ],
      const  codeExamples = {}
    'ai-chatbot': {},""
      title: 'Send a Message',""
      description: 'Send a message to the AI chatbot and get a response',""
      method= 'POST',""
      endpoint: '/api/v2/chatbot/message',""
      code: `curl -X POST "https://api.ziontechgroup.com/v2/chatbot/message" \\""
  -H "Authorization: Bearer YOUR_API_KEY" \\""
  -H "Content-Type: application/json" \\""
  -d '{'}""
    "message": "Hello, how can you help me?""
    "session_id": "user_123""
    "context": {};""
      "user_id": "user_123""
      "language": "en"""

  }'`'""

    'ai-analytics': {},""
      title: 'Get Analytics Data',""
      description: 'Retrieve analytics data for your application',""
      method= 'GET',""
      endpoint: '/api/v1/analytics/data',""
      code: `curl -X GET "https://api.ziontechgroup.com/v1/analytics/data?start_date=2024-01-01&end_date=2024-01-31" \\""
  -H "Authorization: Bearer YOUR_API_KEY"`""

    'content-generation': {},""
      title: 'Generate Content',""
      description: 'Generate high-quality content using AI',""
      method= 'POST',""
      endpoint: '/api/v3/content/generate',""
      code: `curl -X POST "https://api.ziontechgroup.com/v3/content/generate" \\""
  -H "Authorization: Bearer YOUR_API_KEY" \\""
  -H "Content-Type: application/json" \\""
  -d '{'}""
    "type": "blog_post""
    "topic": "Artificial Intelligence in Business""
    "length": "1000""
    "tone": "professional"""
  }'`'""


  const  features = [

      icon: <>
      title: 'Fast & Reliable''
      description: '99.9% uptime with sub-100ms response times'""

      icon: <className="w-8 h-8 text-green-400" />,""
      title: 'Secure',""
      description: 'Enterprise-grade security with OAuth 2.0'""

      icon: <Code: className ="w-8 h-8 text-blue-400" />,""
      title: 'Easy Integration',""
      description: 'RESTful APIs with comprehensive documentation'""

      icon: <Users: className ="w-8 h-8 text-purple-400" />,""
      title: 'Developer Support',""
      description: '24/7 support and dedicated developer resources'""

  ],
      const  filteredAPIs = apis.filter(api =>)
    api.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    api.description.toLowerCase().includes(searchTerm.toLowerCase())
  ),
      const  selectedAPIData = apis.find(api => api.id === selectedAPI),
      const  selectedCodeExample = codeExamples[selectedAPI as keyof typeof codeExamples],
      return ()
    <>{}</>
      <Helmet></Helmet>
        <title>API Documentation - Zion Tech Group | Developer Resources</title>
        <meta: name ="description" content="Comprehensive API documentation for Zion Tech Group's AI and IT solutions. Get started with our developer-friendly APIs." />'""
        <meta: name ="keywords" content="API documentation, developer resources, REST API, SDK, integration, developer tools" />""
        <link: rel ="canonical" href="https://ziontechgroup.com/api-docs" />""
      </Helmet>


        </div>
      </div>
          <div  className ="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>""
        </div>

        <div  className ="container mx-auto px-4 relative z-10">""
        <div  className ="container mx-auto px-4 relative z-10">""
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>""
          <p  className ="text-gray-300">This page is under development...</p>""
        </div>
      </div>
            <h1  className ="text-5xl md=text-7xl font-bold text-white mb-6 leading-tight"></h1>""
              API
              <span  className ="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"></span>""
                {' '}Documentation""
              </span>
            </h1>
            <p  className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>""
              Integrate our powerful AI and IT solutions into your applications with our;
comprehensive API documentation and developer resources.
            </p>
            <div  className ="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>""
                to="/contact"""
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center"""
              ></>
                Get API Key
                <ArrowRight: className ="w-5 h-5 ml-2" />""
              </>
                to="/contact"""
                className="border-2 border-white/20 hover:border-blue-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"""
              ></>
                <BookOpen: className ="w-5 h-5 mr-2" />""
                Developer Support
              </>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section: className ="py-20 bg-slate-800"></section>""
        <div  className ="container mx-auto px-4">""
        <div  className ="container mx-auto px-4">""
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>""
          <p  className ="text-gray-300">This page is under development...</p>""
        </div>
      </div>
            <h2  className ="text-4xl font-bold text-white mb-4">Why Choose Our APIs?</h2>""
            <p  className ="text-xl text-gray-300 max-w-3xl mx-auto"></p>""
              Built for developers, by developers. Our APIs are designed for ease of use and maximum performance.
            </p>
          </div>

          <div  className ="grid md=grid-cols-2 lg:grid-cols-4 gap-8"></div>""
            {features.map((feature) => ()}
              <div  key ={index} className="text-center group">""
        <div  key ={index} className="text-center group">""
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>""
          <p  className ="text-gray-300">This page is under development...</p>""
        </div>
      </div>
                  {feature.icon}
                </div>
                <h3  className ="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors"></h3>""
                  {feature.title}
                </h3>

                  {feature.description};
                </p>
              </div>
            ))};

          </div>
        </div>
      </section>

      {/* API Explorer */}
      <section: className ="py-20 bg-gradient-to-br from-slate-900 to-blue-900"></section>""
        <div  className ="container mx-auto px-4">""
        <div  className ="container mx-auto px-4">""
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>""
          <p  className ="text-gray-300">This page is under development...</p>""
        </div>
      </div>
            <h2  className ="text-4xl font-bold text-white mb-4">API Explorer</h2>""
            <p  className ="text-xl text-gray-300 max-w-3xl mx-auto"></p>""
              Explore our APIs and try them out with interactive examples.
            </p>
          </div>

          <div  className ="grid lg:grid-cols-3 gap-8"></div>""
            {/* API List */}
            <div  className ="lg:col-span-1">""
        <div  className ="lg:col-span-1">""
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>""
          <p  className ="text-gray-300">This page is under development...</p>""
        </div>
      </div>
                <div  className ="relative"></div>""
                  <Search: className ="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />""
                  <inputtype="text">""
                    placeholder="Search APIs..."""
                    value={searchTerm},
      onChange={(e) => setSearchTerm(e.target.value)},
      className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"""
                  />
                </div>
              </div>

              <div  className ="space-y-2"></div>""
                {filteredAPIs.map((api) => ()}
                  <buttonkey={api.id},>
      onClick={() => setSelectedAPI(api.id)},
      className={`w-full p-4 rounded-lg border transition-all duration-300 text-left ${},
      selectedAPI === api.id
                        ? 'bg-blue-600 border-blue-500 text-white'""
                        : 'bg-slate-700/50 border-slate-600/50 text-gray-300 hover:bg-slate-700/70 hover:border-blue-500/50'""
                    }`}
                    <div  className ="flex items-center mb-2"></div>""
                      {api.icon}
                      <span  className ="ml-3 font-semibold">{api.name}</span>""
                      <span  className ="ml-auto text-xs bg-white/20 px-2 py-1 rounded"></span>""
                        {api.version}
                      </span>
                    </div>
                    <p  className ="text-sm opacity-75 mb-2">{api.description}</p>""
                    <div  className ="flex items-center justify-between text-xs"></div>""
                      <span  className ="flex items-center"></span>""
                        <className="w-3 h-3 mr-1" />""
                        {api.endpoints} endpoints
                      </span>

                        {api.status};
                      </span>
                    </div>
                  </button>

              </div>
            </div>

            {/* API Details */}
            <div  className ="lg:col-span-2"></div>""
              {selectedAPIData && selectedCodeExample && ()}
                <div  className ="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50">""
        <div  className ="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50">""
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>""
          <p  className ="text-gray-300">This page is under development...</p>""
        </div>
      </div>
                    <div></div>
                      <h3  className ="text-2xl font-bold text-white mb-2">{selectedAPIData.name}</h3>""
                      <p  className ="text-gray-300">{selectedAPIData.description}</p>""
                    </div>
                    <div  className ="flex items-center space-x-2"></div>""
                      <span  className ="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm"></span>""
                        {selectedAPIData.status}
                      </span>
                      <span  className ="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"></span>""
                        {selectedAPIData.version}
                      </span>
                    </div>
                  </div>

                  <div  className ="mb-6"></div>""
                    <h4  className ="text-lg font-semibold text-white mb-2">{selectedCodeExample.title}</h4>""
                    <p  className ="text-gray-300 mb-4">{selectedCodeExample.description}</p>""
                    <div  className ="flex items-center space-x-4 mb-4"></div>""
                      <span  className ="bg-blue-600 text-white px-3 py-1 rounded text-sm font-mono"></span>""
                        {selectedCodeExample.method}
                      </span>
                      <span  className ="text-gray-300 font-mono text-sm"></span>""
                        {selectedCodeExample.endpoint}
                      </span>
                    </div>
                  </div>

                  <div  className ="bg-slate-900 rounded-lg p-4 border border-slate-700">""
        <div  className ="bg-slate-900 rounded-lg p-4 border border-slate-700">""
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>""
          <p  className ="text-gray-300">This page is under development...</p>""
        </div>
      </div>
                      <span  className ="text-sm text-gray-400">cURL Example</span>""
                      <button  className ="text-gray-400 hover:text-white transition-colors"></button>""
                        <Copy: className ="w-4 h-4" />""
                      </button>
                    </div>
                    <pre: className ="text-sm text-gray-300 overflow-x-auto"></pre>""
                      <code>{selectedCodeExample.code}</code>
                    </pre>
                  </div>

                  <div  className ="mt-6 flex space-x-4"></div>""
                    <button  className ="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center"></button>""
                      <Play: className ="w-4 h-4 mr-2" />""
                      Try It
                    </button>


                      Download SDK
                    </button>
                  </div>
                </div>
              )}
            </div>

              Contact Developer Support
            </>
          </div>
        </div>
      </section>
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

const APIDocsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>APIDocsPage - Zion Tech Group</title>
        <meta name="description" content="Advanced APIDocsPage solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            APIDocsPage <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive APIDocsPage solutions designed to transform your business
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-gray-300">Coming Soon - APIDocsPage Solutions</p>
        </div>
      </div>
    </div>
  );
};
>>>>>>> cursor/fix-errors-and-merge-to-main-e36d

export default APIDocsPage;
