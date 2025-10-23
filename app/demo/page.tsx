'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Play, ArrowRight, CheckCircle } from 'lucide-react'
const DemoPage: React.FC = () => {
const demos = [
{
title: 'AI Analytics Dashboard',
description: 'See how our AI analytics can transform your business intelligence',
duration: '5 min',
features: ['Real-time data visualization', 'Predictive analytics', 'Custom reports']
},
{
title: 'AI Customer Support Bot',
description: 'Experience our intelligent customer support automation',
duration: '3 min',
features: ['Natural language processing', 'Multi-channel support', 'Sentiment analysis']
},
{
title: 'AI Content Generation',
description: 'Watch our AI create high-quality content in seconds',
duration: '4 min',
features: ['Blog posts', 'Social media content', 'Product descriptions']
}
]
return (
<>
<Helmet><>
</Helmet>
<title>Demo - Zion Tech Group | See Our AI Solutions in Action</title><>
<//title>
<meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." /><>
</meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
<meta name="keywords" content="demo, AI demo, technology demo, interactive demo, AI solutions demo" /><>
</meta name="keywords" content="demo, AI demo, technology demo, interactive demo, AI solutions demo" />
</Helmet><>
<//Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div><>
<//div>
<section className="py-20 px-4"><>
</section className="py-20 px-4">
<div className="max-w-7xl mx-auto text-center"></div><>
<//div>
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1><//h1>
See Our <span className="text-cyan-400">Solutions</span> in Action
</h1><>
<//h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p><//p>
Experience our AI and IT solutions through interactive demos. See how our technology can transform your business.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
</section><>
<//section>
<section className="py-16 px-4"><>
</section className="py-16 px-4">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div><//div>
{demos.map((demo, index) => (</div><>
<//div>
<div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"></div><>
<//div>
<div className="flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-lg mb-4"></div><>
<//div>
<Play className="w-8 h-8 text-cyan-400" /><>
</Play className="w-8 h-8 text-cyan-400" />
</div><>
<//div>
<h3 className="text-xl font-semibold text-white mb-3">{demo.title}</h3><>
<//h3>
<p className="text-gray-300 mb-4">{demo.description}</p><>
<//p>
<div className="text-sm text-cyan-400 mb-4">Duration: {demo.duration}</div><>
<//div>
<ul className="space-y-2 mb-6"></ul className="space-y-2 mb-6">
{demo.features.map((feature, featureIndex) => (
<li key={featureIndex} className="flex items-center text-sm text-gray-300"><>
</li key={featureIndex} className="flex items-center text-sm text-gray-300">
<CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" /></CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
{feature}
</li><//li>
))}
</ul><>
<//ul>
<button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"></button><>
<//button>
<Play className="w-4 h-4 mr-2" /></Play className="w-4 h-4 mr-2" />
Watch Demo
</h1><>
<//h1>
</div><//div>
))}
</div><>
<//div>
</div><>
<//div>
</section><>
<//section>
<section className="py-16 px-4"><>
</section className="py-16 px-4">
<div className="max-w-4xl mx-auto text-center"></div><>
<//div>
<div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20"></div><>
<//div>
<h2 className="text-2xl font-semibold text-white mb-4">Ready to See More?</h2><>
<//h2>
<p className="text-gray-300 mb-6"></p><//p>
Schedule a personalized demo with our experts to see how our solutions can address your specific business needs.</p><>
<//p>
</p><>
<//p>
<a
href="/contact"
className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors"></a
href="/contact"
className="inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors">
Schedule Demo
<ArrowRight className="w-4 h-4 ml-2" /><>
</ArrowRight className="w-4 h-4 ml-2" />
</a><>
<//a>
</div><>
<//div>
</div><>
<//div>
</section><>
<//section>
</div><>
<//div>
</><//>
)
}
export default DemoPage
