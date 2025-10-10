'use client'
import React, {useState} from 'react'
import {Search, Code, Key, Zap, ArrowRight, Copy, Check, Globe, Brain, Cloud, Shield, Settings, Users, Database, Eye, Sparkles, BookOpen, FileText, Download} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer   from '../components/SEOOptimizer'
;
  const [searchQuery, setSearchQuery] = useState('');
  const copyToClipboard = (code: string, id: string) => {,
    navigator.clipboard.writeText(code);
    setCopiedCode(id),;
    setTimeout(() => setCopiedCode(null), 2000)}const apiEndpoints = [
    {title: 'AI Services',
      description: 'Artificial Intelligence and Machine Learning APIs',
      icon: Brain,
      endpoints: [,
        {;
          name: 'Text Analysis',
          method: 'POST',
          path: '/api/ai/text-analysis',
          description: 'Analyze text sentiment, entities, and key phrases',
          code: `curl -X POST "https://api.ziontechgroup.com/ai/text-analysis" \\,
  -H "Authorization: Bearer YOUR_API_KEY" \\,
  -H "Content-Type: application/json" \\,
  -d '{;
    "text": "Your text to analyze",
    "features": ["sentiment", "entities", "key_phrases"]}'`
        },
        {name: 'Image Recognition',
          method: 'POST',
          path: '/api/ai/image-recognition',
          description: 'Identify objects, faces, and scenes in images',
          code: `curl -X POST "https://api.ziontechgroup.com/ai/image-recognition" \\,
  -H "Authorization: Bearer YOUR_API_KEY" \\,
  -H "Content-Type: application/json" \\,
  -d '{;
    "image_url": "https: //example.com/image.jpg",
    "features": ["objects", "faces", "text"]}'`
        }
      ]
    },
    {title: 'Cloud Services',
      description: 'Cloud infrastructure and deployment APIs',
      icon: Cloud,
      endpoints: [,
        {;
          name: 'Deploy Application',
          method: 'POST',
          path: '/api/cloud/deploy',
          description: 'Deploy applications to cloud infrastructure',
          code: `curl -X POST "https://api.ziontechgroup.com/cloud/deploy" \\,
  -H "Authorization: Bearer YOUR_API_KEY" \\,
  -H "Content-Type: application/json" \\,
  -d '{;
    "app_name": "my-app",
    "environment": "production",
    "config": {;
      "cpu": "2",
      "memory": "4GB",
      "instances": 3;}}'`
        }
      ]
    },
    {title: 'Data Analytics',
      description: 'Data processing and analytics APIs',
      icon: Database,
      endpoints: [,
        {;
          name: 'Process Data',
          method: 'POST',
          path: '/api/analytics/process',
          description: 'Process and analyze large datasets',
          code: `curl -X POST "https://api.ziontechgroup.com/analytics/process" \\,
  -H "Authorization: Bearer YOUR_API_KEY" \\,
  -H "Content-Type: application/json" \\,
  -d '{;
    "dataset_id": "dataset_123",
    "operations": ["aggregate", "filter", "transform"],
    "output_format": "json"}'`
        }
      ]
    }
  ]
  const filteredEndpoints = apiEndpoints.map(category => ({);
    ...category,;
    endpoints: category.endpoints.filter(endpoint => ,);
      endpoint.name.toLowerCase().includes(searchQuery.toLowerCase()) ||;
      endpoint.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
      endpoint.path.toLowerCase().includes(searchQuery.toLowerCase());
        title="API Documentation - Zion Tech Group"
        description="Complete API documentation for Zion Tech Group's AI and IT solutions. Explore endpoints, authentication, and integration guides."
        keywords="API documentation, REST API, AI API, cloud API, integration, developer tools, API reference"
      /></SEOOptimizer>
      <Navigation /></Navigation>
      {/* Hero Section */}
<section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">API Documentation;</h1>
  </;
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Complete API documentation for Zion Tech Group's AI and IT solutions.</p>
            Explore endpoints, authentication, and integration guides.;
          </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"></button>
              <Code className="mr-2 h-5 w-5" />
              Get Started;
  </;
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"></button>
              <Download className="mr-2 h-5 w-5" />
              Download SDK;
  </;
          </div>
        </div>
      </section>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3"></h>1. Get API Key</h3>
              <p className="text-gray-300 mb-4">Sign up and get your API key from the dashboard</p>
                Get API Key →;
              </button>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4"></div>
                <Code className="w-6 h-6 text-white" /></Code>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3"></h>2. Make Request</h3>
              <p className="text-gray-300 mb-4">Use our REST API with your preferred language</p>
                View Examples →
              </button>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"></div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4"></div>
                <Zap className="w-6 h-6 text-white" /></Zap>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3"></h>3. Integrate</h3>
              <p className="text-gray-300 mb-4">Build amazing applications with our APIs</p>
                Start Building →
              </button>
            </div>
          </div>
        </div>
      </section>
                          {copiedCode === `${categoryIndex}-${endpointIndex}` ? (;
                            <React.Fragment></React>
                              <Check className="w-4 h-4" /></Check>
                              Copied!;
                            </React.Fragment>
                          ) : (;
                            </React.Fragment>
                          )}
                        </button>
                      </div>
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
  </;
          </div>
        </div>
      </section>
      <Footer /></Footer>
    </div>
  ),;
}
  </button>
  </button>
  </button>
  </button>
  </h1>
  </SEOOptimizer>
  </string>