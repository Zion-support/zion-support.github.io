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
<Helmet>
<title>Demo - Zion Tech Group | See Our AI Solutions in Action</title>
<meta name=&quot;description&quot; content=&quot;Experience our AI and IT solutions through interactive demos. See how our technology can transform your business.&quot; />
<meta name=&quot;keywords&quot; content=&quot;demo, AI demo, technology demo, interactive demo, AI solutions demo&quot; />
</Helmet>
<div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
<section className=&quot;py-20 px-4&quot;>
<div className=&quot;max-w-7xl mx-auto text-center&quot;></div>
<h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6&quot;>
See Our <span className=&quot;text-cyan-400&quot;>Solutions</span> in Action

<p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
Experience our AI and IT solutions through interactive demos. See how our technology can transform your business.
</p>
</div>
</section>
<section className=&quot;py-16 px-4&quot;>
<div className=&quot;max-w-7xl mx-auto&quot;></div>
<div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
{demos.map((demo, index) => (
<div key={index} className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300&quot;></div>
<div className=&quot;flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-lg mb-4&quot;></div>
<Play className=&quot;w-8 h-8 text-cyan-400&quot; />
</div>
<h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{demo.title}</h3>
<p className=&quot;text-gray-300 mb-4&quot;>{demo.description}</p>
<div className=&quot;text-sm text-cyan-400 mb-4&quot;>Duration: {demo.duration}</div>
<ul className=&quot;space-y-2 mb-6&quot;>
{demo.features.map((feature, featureIndex) => (
<li key={featureIndex} className=&quot;flex items-center text-sm text-gray-300&quot;>
<CheckCircle className=&quot;w-4 h-4 text-cyan-400 mr-2 flex-shrink-0&quot; />
{feature}
</li>
))}
</ul>
<button className=&quot;w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center&quot;>
<Play className=&quot;w-4 h-4 mr-2&quot; />
Watch Demo

</div>
))}
</div>
</div>
</section>
<section className=&quot;py-16 px-4&quot;>
<div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
<div className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20&quot;></div>
<h2 className=&quot;text-2xl font-semibold text-white mb-4&quot;>Ready to See More?</h2>
<p className=&quot;text-gray-300 mb-6&quot;>
Schedule a personalized demo with our experts to see how our solutions can address your specific business needs.
</p>
<a
href=&quot;/contact&quot;
className=&quot;inline-flex items-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors&quot;>
Schedule Demo
<ArrowRight className=&quot;w-4 h-4 ml-2&quot; />
</a>
</div>
</div>
</section>
</div>
</>
)
}
export default DemoPage
</button>
</h1>