'use client'
import React, { useState } from 'react'
import { Search, Code, Key, Zap, ArrowRight, Copy, Check, Globe, Brain, Cloud, Shield, Settings, Users, Database, Eye, Sparkles, BookOpen, FileText, Download } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
export default function APIDocsPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }
  const apiEndpoints = [
    {
      title: 'AI Services',
      description: 'Artificial Intelligence and Machine Learning APIs',
      icon: Brain,
      endpoints: [
        {
          name: 'Text Analysis',
          method: 'POST',
          path: '/api/ai/text-analysis',
          description: 'Analyze text sentiment, entities, and key phrases',
          code: `curl -X POST "https://api.ziontechgroup.com/ai/text-analysis" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Your text to analyze",
    "features": ["sentiment", "entities", "key_phrases"]
  }'`
        },
        {
          name: 'Image Recognition',
          method: 'POST',
          path: '/api/ai/image-recognition',
          description: 'Identify objects, faces, and scenes in images',
          code: `curl -X POST "https://api.ziontechgroup.com/ai/image-recognition" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "image_url": "https://example.com/image.jpg",
    "features": ["objects", "faces", "text"]
  }'`
        }
      ]
    },
    {
      title: 'Cloud Services',
      description: 'Cloud infrastructure and deployment APIs',
      icon: Cloud,
      endpoints: [
        {
          name: 'Deploy Application',
          method: 'POST',
          path: '/api/cloud/deploy',
          description: 'Deploy applications to cloud infrastructure',
          code: `curl -X POST "https://api.ziontechgroup.com/cloud/deploy" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "app_name": "my-app",
    "environment": "production",
    "config": {
      "cpu": "2",
      "memory": "4GB",
      "instances": 3
    }
  }'`
        }
      ]
    },
    {
      title: 'Data Analytics',
      description: 'Data processing and analytics APIs',
      icon: Database,
      endpoints: [
        {
          name: 'Process Data',
          method: 'POST',
          path: '/api/analytics/process',
          description: 'Process and analyze large datasets',
          code: `curl -X POST "https://api.ziontechgroup.com/analytics/process" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "dataset_id": "dataset_123",
    "operations": ["aggregate", "filter", "transform"],
    "output_format": "json"
  }'`
        }
      ]
    }
  ]
  const filteredEndpoints = apiEndpoints.map(category => ({
    ...category,
    endpoints: category.endpoints.filter(endpoint => 
      endpoint.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.path.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.endpoints.length > 0)
  return (
    <div> </div><SEOOptimizer> </SEOOptimizer><Navigation>{/* Hero Section */}
</Navigation><section> </section><div> </div><h1>API Documentation>
          </h1><p>Complete API documentation for Zion Tech Group's AI and IT solutions. 
            Explore endpoints, authentication, and integration guides.
          </p></p>
          <div> </div><button> </button><Code>Get Started>
            </Code><button> </button><Download>Download SDK>
          </Download></div>
        </div>
      </section>
      {/* Quick Start */}
      <section> </section><div> </div><h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Start</h2>
          <div> </div><div> </div><div> </div><Key> </Key></div>
              <h3 className="text-xl font-semibold text-white mb-3">1. Get API Key</h3>
              <p className="text-gray-300 mb-4">Sign up and get your API key from the dashboard</p>
              <button>Get API Key →
              </button></button>
            </div>
            <div> </div><div> </div><Code> </Code></div>
              <h3 className="text-xl font-semibold text-white mb-3">2. Make Request</h3>
              <p className="text-gray-300 mb-4">Use our REST API with your preferred language</p>
              <button>View Examples →
              </button></button>
            </div>
            <div> </div><div> </div><Zap> </Zap></div>
              <h3 className="text-xl font-semibold text-white mb-3">3. Integrate</h3>
              <p className="text-gray-300 mb-4">Build amazing applications with our APIs</p>
              <button>Start Building →
              </button></button>
            </div>
          </div>
        </div>
      </section>
      {/* API Endpoints */}
      <section> </section><div> </div><h2 className="text-3xl font-bold text-white mb-12 text-center">API Endpoints</h2>
          <div>{filteredEndpoints.map((category, categoryIndex) => (
              </div><div> </div><div> </div><div> </div><category> </category></div>
                  <div> </div><h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                <div>{category.endpoints.map((endpoint, endpointIndex) => (
                    </div><div> </div><div> </div><div> </div><span>{endpoint.method}
                          </span></span>
                          <code className="text-purple-400 font-mono">{endpoint.path}</code>
                        </div>
                        <button
                          onClick={() => copyToClipboard(endpoint.code, `${categoryIndex}-${endpointIndex}`)}
                          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                          {copiedCode === `${categoryIndex}-${endpointIndex}` ? (
                            <React> </React><Check>Copied!
                            </Check></React.Fragment>
                          ) : (
                            <React> </React><Copy>Copy
                            </Copy></React.Fragment>
                          )}
                        </button>
                      </div>
                      <p className="text-gray-300 mb-4">{endpoint.description}</p>
                      <div> </div><pre> </pre><code>{endpoint.code}</code>
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
      {/* CTA Section */}
      <section> </section><div> </div><h2>Ready to Get Started?
          </h2></h2>
          <p>Start building with our APIs today and create amazing applications.
          </p></p>
          <div> </div><button>Get API Key>
            </button><button>View SDKs>
          </button></div>
        </div>
      </section>
      <Footer> </Footer></div>
  )
}
  </button>
  </button>
  </button>
  </button>
  </h1>
  </SEOOptimizer>
  </string>