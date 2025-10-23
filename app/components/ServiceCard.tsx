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
}`}>
{popular && (
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 bg-purple-400 rounded-full"></div>
<span>Most Popular</span>
</div>
)}
<div className="mb-4">
<h3>{title}
</h3>
<p>{description}</p>
</div>
<div className="space-y-2 mb-6">
{features.map((feature, index) => (
<div key={index} className="flex items-center gap-2">
<CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
<span>{feature}</span>
</div>
))}
</div>
{price && (
<div className="mb-6">
<div>{price}</div>
<div>per month</div>
</div>
)}
{onSelect && (
<button
onClick={onSelect}
className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group">
Get Started
<ArrowRight>
</ArrowRight>button>
)}
</div>
)
}
export default ServiceCard
</ServiceCardProps>