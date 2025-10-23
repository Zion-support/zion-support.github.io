'use client'
import React from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
interface ServiceCardProps {
title: string
description: string
features: string[]
price?: string
popular?: boolean
onSelect?: () => void
className?: string
}
const ServiceCard: React.FC<ServiceCardProps> = ({
title,
description,
features,
price,
popular = false,
onSelect,
className = ''
}) => {
return (
<div className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group ${className} ${
popular ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : ''
}`}></div>
{popular && (
<div className=&quot;flex items-center gap-2 mb-4&quot;></div>
<div className=&quot;w-2 h-2 bg-purple-400 rounded-full&quot;></div>
<span className=&quot;text-purple-400 text-sm font-semibold&quot;>Most Popular</span>
</div>
)}
<div className=&quot;mb-4&quot;></div>
<h3 className=&quot;text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors&quot;>
{title}
</h3>
<p className=&quot;text-gray-300 text-sm&quot;>{description}</p>
</div>
<div className=&quot;space-y-2 mb-6&quot;></div>
{features.map((feature, index) => (
<div key={index} className=&quot;flex items-center gap-2&quot;></div>
<CheckCircle className=&quot;w-4 h-4 text-green-400 flex-shrink-0&quot; />
<span className=&quot;text-gray-300 text-sm&quot;>{feature}</span>
</div>
))}
</div>
{price && (
<div className=&quot;mb-6&quot;></div>
<div className=&quot;text-3xl font-bold text-white mb-1&quot;>{price}</div>
<div className=&quot;text-gray-400 text-sm&quot;>per month</div>
</div>
)}
{onSelect && (
<button
onClick={onSelect}
className=&quot;w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group&quot;>
Get Started
<ArrowRight className=&quot;w-4 h-4 group-hover:translate-x-1 transition-transform&quot; />
</button>
)}
</div>
)
}
export default ServiceCard
</ServiceCardProps>