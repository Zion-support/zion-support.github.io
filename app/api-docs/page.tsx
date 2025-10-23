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
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" loading="lazy">
<SEOOptimizer
title="API Documentation - Zion Tech Group"
description="Complete API documentation for Zion Tech Group's AI and IT solutions. Explore endpoints, authentication, and integration guides."
keywords="API documentation, REST API, AI API, cloud API, integration, developer tools, API reference"
/>
<Navigation />
{/* Hero Section */}
<section className="py-20 px-4" loading="lazy">
<div className="max-w-7xl mx-auto text-center" loading="lazy">
<h1 className="text-5xl font-bold text-white mb-6" loading="lazy">API Documentation</h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" loading="lazy">Complete API documentation for Zion Tech Group's AI and IT solutions.</p>
Explore endpoints, authentication, and integration guides.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
<button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center" loading="lazy" aria-label="Action button">
<Code className="mr-2 h-5 w-5" loading="lazy" />
Get Started
</
<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center" loading="lazy" aria-label="Action button">
<Download className="mr-2 h-5 w-5" loading="lazy" />
Download SDK
</
</div>
</div>
</section>
{/* Quick Start */}
<section className="py-16 px-4" loading="lazy">
<div className="max-w-7xl mx-auto" loading="lazy">
<h2 className="text-3xl font-bold text-white mb-8 text-center" loading="lazy">Quick Start</h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8" loading="lazy">
<div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10" loading="lazy">
<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4" loading="lazy">
<Key className="w-6 h-6 text-white" loading="lazy" />
</div>
<h3 className="text-xl font-semibold text-white mb-3" loading="lazy">1. Get API Key</h3>
<p className="text-gray-300 mb-4" loading="lazy">Sign up and get your API key from the dashboard</p>
<button className="text-purple-400 hover:text-purple-300 font-medium" loading="lazy" aria-label="Action button">Get API Key →</button>
</div>
<div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10" loading="lazy">
<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4" loading="lazy">
<Code className="w-6 h-6 text-white" loading="lazy" />
</div>
<h3 className="text-xl font-semibold text-white mb-3" loading="lazy">2. Make Request</h3>
<p className="text-gray-300 mb-4" loading="lazy">Use our REST API with your preferred language</p>
<button className="text-purple-400 hover:text-purple-300 font-medium" loading="lazy" aria-label="Action button">View Examples →</button>
</div>
<div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10" loading="lazy">
<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4" loading="lazy">
<Zap className="w-6 h-6 text-white" loading="lazy" />
</div>
<h3 className="text-xl font-semibold text-white mb-3" loading="lazy">3. Integrate</h3>
<p className="text-gray-300 mb-4" loading="lazy">Build amazing applications with our APIs</p>
<button className="text-purple-400 hover:text-purple-300 font-medium" loading="lazy" aria-label="Action button">Start Building →</button>
</div>
</div>
</div>
</section>
{/* API Endpoints */}
<section className="py-16 px-4" loading="lazy">
<div className="max-w-7xl mx-auto" loading="lazy">
<h2 className="text-3xl font-bold text-white mb-12 text-center" loading="lazy">API Endpoints</h2>
<div className="space-y-8" loading="lazy">{filteredEndpoints.map((category, categoryIndex) => (</div>
<div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10" loading="lazy">
<div className="flex items-center gap-4 mb-8" loading="lazy">
<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center" loading="lazy">
<category.icon className="w-6 h-6 text-white" loading="lazy" />
</div>
<div>
<h3 className="text-2xl font-bold text-white mb-2" loading="lazy">{category.title}</h3>
<p className="text-gray-300" loading="lazy">{category.description}</p>
</div>
</div>
<div className="space-y-6" loading="lazy">{category.endpoints.map((endpoint, endpointIndex) => (</div>
<div key={endpointIndex} className="bg-white/5 rounded-xl p-6 border border-white/10" loading="lazy">
<div className="flex items-center justify-between mb-4" loading="lazy">
<div className="flex items-center gap-4" loading="lazy">
<span className={`px-3 py-1 rounded-full text-sm font-medium ${
endpoint.method === 'POST'
? 'bg-green-500/20 text-green-400'
: 'bg-blue-500/20 text-blue-400'
}`}>{endpoint.method}</span>
<code className="text-purple-400 font-mono" loading="lazy">{endpoint.path}</code>
</div>
<button
onClick={() = aria-label="Action button">copyToClipboard(endpoint.code, `${categoryIndex}-${endpointIndex}`)}</button>
className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors" loading="lazy">
{copiedCode === `${categoryIndex}-${endpointIndex}` ? (
<>
<Check className="w-4 h-4" loading="lazy" />
Copied!
</>
) : (
<>
<Copy className="w-4 h-4" loading="lazy" />
Copy
</>
)}
</button>
</div>
<p className="text-gray-300 mb-4" loading="lazy">{endpoint.description}</p>
<div className="bg-slate-900 rounded-lg p-4 overflow-x-auto" loading="lazy">
<pre className="text-gray-300 text-sm" loading="lazy">
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
<section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-700" loading="lazy">
<div className="max-w-4xl mx-auto text-center" loading="lazy">
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6" loading="lazy">Ready to Get Started?</h2>h2>
<p className="text-xl text-purple-100 mb-8" loading="lazy">Start building with our APIs today and create amazing applications.</p>p>
<div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
<button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors" loading="lazy" aria-label="Action button">Get API Key</button>
<button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors" loading="lazy" aria-label="Action button">View SDKs</button>
</div>
</div>
</section>
<Footer />
</div>
)
}
</button>
</button>
</button>
</button>
</h1>
</SEOOptimizer>
</string>
