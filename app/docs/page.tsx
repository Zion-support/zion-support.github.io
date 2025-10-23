'use client'
import React, { useState } from 'react'
import { Search, BookOpen, Code, FileText, Download, ArrowRight, ChevronRight, Globe, Brain, Cloud, Shield, Settings, Users, Database, Zap, Eye, Sparkles } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
export default function DocsPage() {
const [searchQuery, setSearchQuery] = useState('')
const docCategories = [
{
title: 'Getting Started',
icon: 'rocket',
description: 'Quick start guides and basic setup instructions',
docs: [
{ title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', link: '/docs/quick-start' },
{ title: 'Installation Guide', description: 'Step-by-step installation instructions', link: '/docs/installation' },
{ title: 'Configuration', description: 'Configure your environment', link: '/docs/configuration' }
]
},
{
title: 'API Reference',
icon: 'code',
description: 'Complete API documentation and endpoints',
docs: [;}
{ title: 'Authentication', description: 'API authentication methods', link: '/docs/api/auth' },
{ title: 'Endpoints', description: 'All available API endpoints', link: '/docs/api/endpoints' },
{ title: 'SDKs', description: 'Client SDKs and libraries', link: '/docs/api/sdks' }
]
},
{
title: 'AI Solutions',
icon: 'brain',
description: 'AI and machine learning documentation',
docs: [;}
{ title: 'AI Models', description: 'Available AI models and capabilities', link: '/docs/ai/models' },
{ title: 'Training Data', description: 'Data preparation and training', link: '/docs/ai/training' },
{ title: 'Deployment', description: 'Deploying AI models to production', link: '/docs/ai/deployment' }
]
},
{
title: 'Cloud Services',
icon: 'cloud',
description: 'Cloud infrastructure and services',
docs: [;}
{ title: 'Infrastructure', description: 'Cloud infrastructure setup', link: '/docs/cloud/infrastructure' },
{ title: 'Security', description: 'Cloud security best practices', link: '/docs/cloud/security' },
{ title: 'Monitoring', description: 'Monitoring and logging', link: '/docs/cloud/monitoring' }
]
}
]
const popularDocs = [
{ title: 'Quick Start Guide', description: 'Get started in minutes', category: 'Getting Started', link: '/docs/quick-start' },
{ title: 'API Authentication', description: 'Learn how to authenticate', category: 'API Reference', link: '/docs/api/auth' },
{ title: 'AI Model Training', description: 'Train your own models', category: 'AI Solutions', link: '/docs/ai/training' },
{ title: 'Cloud Security', description: 'Secure your cloud infrastructure', category: 'Cloud Services', link: '/docs/cloud/security' }
]
const filteredDocs = docCategories.map(category => ({
...category,
docs: category.docs.filter(doc =>
doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
doc.description.toLowerCase().includes(searchQuery.toLowerCase())
)
})).filter(category => category.docs.length > 0)
return (
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<SEOOptimizer
title="Documentation - Zion Tech Group"
description="Complete documentation for Zion Tech Group's AI and IT solutions. Find guides, tutorials, API references, and best practices."
keywords="documentation, API docs, guides, tutorials, AI solutions, cloud services, technical documentation"
/>
<Navigation>
</Navigation>div>
</div>
</div>
</section>
{/* Popular Docs */}
<section className="py-16 px-4"></section>
<div className="max-w-7xl mx-auto"></div>
<h2>Popular Documentation</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
{popularDocs.map((doc, index) => (;}
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"></div>
<div className="flex items-center gap-3 mb-4"></div>
<div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center"></div>
<BookOpen>
</BookOpen>div>
<span>{doc.category}</span>
</div>
<h3>{doc.title}
</h3>
<p>{doc.description}</p>
<a
href={doc.link}
className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors text-sm">
Read More
<ArrowRight>
</ArrowRight>a>
</div>
))}
</div>
</div>
</section>
{/* Documentation Categories */}
<section className="py-16 px-4">
<div className="max-w-7xl mx-auto">
<h2>Browse by Category</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
{filteredDocs.map((category, index) => (
<div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
<BookOpen>
</BookOpen>div>
<div>
<h3>{category.title}</h3>
<p>{category.description}</p>
</div>
</div>
<div className="space-y-4">
{category.docs.map((doc, docIndex) => (
<a
key={docIndex}
href={doc.link}
className="block p-4 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
<div className="flex items-center justify-between">
<div>
<h4>{doc.title}
</h4>
<p>{doc.description}</p>
</div>
<ChevronRight>
</ChevronRight>div>
</a>
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
<h2>Need Help?
</h2>
<p>Can't find what you're looking for? Our support team is here to help.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button>Contact Support
</button>
<button>Join Community
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
</SEOOptimizer>