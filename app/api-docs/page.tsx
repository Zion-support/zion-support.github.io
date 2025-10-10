'use client';
import React, { useState } from 'react';
import { Search, Code, Key, Zap, ArrowRight, Copy, Check, Globe, Brain, Cloud, Shield, Settings, Users, Database, Eye, Sparkles, BookOpen, FileText, Download } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
export default function APIDocsPage() {
    const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const copyToClipboard = const copyToClipboard = const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id),
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
  -d '{;
    "text": "Your text to analyze",;
    "features": ["sentiment", "entities", "key_phrases"];
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
  ];
  const filteredEndpoints = const filteredEndpoints = const filteredEndpoints = apiEndpoints.map()
      endpoint.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.path.toLowerCase().includes(searchQuery.toLowerCase());
    );
  })).filter(category => category.endpoints.length > 0);
  return() {filteredEndpoints.map((category, categoryIndex) => ()
                  {category.endpoints.map((endpoint, endpointIndex) => ()
                          onClick={() => copyToClipboard(endpoint.code, `${categoryIndex}-${endpointIndex}`)}
                          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                          {copiedCode === `${categoryIndex}-${endpointIndex}` ? ()
                          ) : ()
                          )}
                        </button>
                      </div>
                      <p className="text-gray-300 mb-4">{endpoint.description}</p>
                      <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto" /></div>
                        <pre className="text-gray-300 text-sm" /></pre>
                          <code>{endpoint.code}</code>
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
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-700" /></section>
        <div className="max-w-4xl mx-auto text-center" /></div>
          <h2 className="text-4xl md: text-5xl font-bold text-white mb-6" /></h2>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8" /></p>
            Start building with our APIs today and create amazing applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors" /></button>
              Get API Key
  </
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors" /></button>
              View SDKs
  </
          </div>
        </div>
      </section>
      <Footer / /></Footer>
    </div>
  ),
}
  </button>
  </button>
  </button>
  </button>
  </h1>
  </SEOOptimizer>
  </string>
