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
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<SEOOptimizer
title="API Documentation - Zion Tech Group"
description="Complete API documentation for Zion Tech Group's AI and IT solutions. Explore endpoints, authentication, and integration guides."
keywords="API documentation, REST API, AI API, cloud API, integration, developer tools, API reference"
/>
<Navigation />
{/* Hero Section */}
<section className="py-20 px-4">
<div className="max-w-7xl mx-auto text-center">
<h1>API Documentation
</h1>
<p>Complete API documentation for Zion Tech Group's AI and IT solutions.
Explore endpoints, authentication, and integration guides.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
<Code>Get Started
</Code>h1>
<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
<Download>Download SDK
</Download>h1>
</div>
</div>
</section>
{/* Quick Start */}
<section className="py-16 px-4">
<div className="max-w-7xl mx-auto">
<h2>Quick Start</h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
<Key>
</Key>div>
<h3>1. Get API Key</h3>
<p>Sign up and get your API key from the dashboard</p>
<button>Get API Key →
</button>
</div>
<div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
<Code>
</Code>div>
<h3>2. Make Request</h3>
<p>Use our REST API with your preferred language</p>
<button>View Examples →
</button>
</div>
<div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
<Zap>
</Zap>div>
<h3>3. Integrate</h3>
<p>Build amazing applications with our APIs</p>
<button>Start Building →
</button>
</div>
</div>
</div>
</section>
{/* API Endpoints */}
<section className="py-16 px-4">
<div className="max-w-7xl mx-auto">
<h2>API Endpoints</h2>
<div className="space-y-8">
{filteredEndpoints.map((category, categoryIndex) => (
<div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
<category>
</category>div>
<div>
<h3>{category.title}</h3>
<p>{category.description}</p>
</div>
</div>
<div className="space-y-6">
{category.endpoints.map((endpoint, endpointIndex) => (
<div key={endpointIndex} className="bg-white/5 rounded-xl p-6 border border-white/10">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-4">
<span>{endpoint.method}
</span>
<code>{endpoint.path}</code>
</div>
<button
onClick={() => copyToClipboard(endpoint.code, `${categoryIndex}-${endpointIndex}`)}
className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
{copiedCode === `${categoryIndex}-${endpointIndex}` ? (
<>
<Check>Copied!
</Check>>
) : (
<>
<Copy>Copy
</Copy>>
)}
</button>
</div>
<p>{endpoint.description}</p>
<div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
<pre className="text-gray-300 text-sm">
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
<section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-700">
<div className="max-w-4xl mx-auto text-center">
<h2>Ready to Get Started?
</h2>
<p>Start building with our APIs today and create amazing applications.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button>Get API Key
</button>
<button>View SDKs
</button>
</div>
</div>
</section>
<Footer>
</Footer>div>
)
}
</button>
</button>
</button>
</button>
</h1>
</SEOOptimizer>
</string>