'use client'
import React from 'react'
import { Loader2, Brain, Cloud, Shield, Code } from 'lucide-react'
interface LoadingSpinnerProps {
size?: 'sm' | 'md' | 'lg'
text?: string
}
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
size = 'md',
text = 'Loading...'
}) => {
const sizeClasses = {
sm: 'w-4 h-4',
md: 'w-8 h-8',
lg: 'w-12 h-12'
}
return (
<div className=&quot;flex flex-col items-center justify-center p-8&quot;></div>
<Loader2 className={`${sizeClasses[size]} animate-spin text-blue-500`} />
{text && (
<p className=&quot;mt-2 text-sm text-gray-500&quot;>{text}</p>
)}
</div>
)
}
export const PageLoader: React.FC = () => (
<div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center&quot;></div>
<div className=&quot;text-center&quot;></div>
<div className=&quot;w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto animate-pulse&quot;></div>
<Brain className=&quot;w-8 h-8 text-white&quot; />
</div>
<h2 className=&quot;text-xl font-semibold text-white mb-2&quot;>Zion Tech Group</h2>
<p className=&quot;text-gray-300&quot;>Loading amazing content...</p>
</div>
</div>
)
export const ServiceCardSkeleton: React.FC = () => (
<div className=&quot;bg-white/5 backdrop-blur-sm rounded-2xl p-8 animate-pulse&quot;></div>
<div className=&quot;w-16 h-16 bg-gray-600 rounded-2xl mb-6&quot;></div>
<div className=&quot;h-6 bg-gray-600 rounded mb-4&quot;></div>
<div className=&quot;h-4 bg-gray-600 rounded mb-4&quot;></div>
<div className=&quot;space-y-2&quot;></div>
<div className=&quot;h-3 bg-gray-600 rounded&quot;></div>
<div className=&quot;h-3 bg-gray-600 rounded&quot;></div>
<div className=&quot;h-3 bg-gray-600 rounded w-3/4&quot;></div>
</div>
</div>
)
export const StatsSkeleton: React.FC = () => (
<div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8&quot;></div>
{Array.from({ length: 4 }).map((_, index) => (
<div key={index} className=&quot;text-center animate-pulse&quot;></div>
<div className=&quot;h-8 bg-gray-600 rounded mb-2&quot;></div>
<div className=&quot;h-4 bg-gray-600 rounded w-3/4 mx-auto&quot;></div>
</div>
))}
</div>
)
export const ContentSkeleton: React.FC = () => (
<div className=&quot;space-y-6 animate-pulse&quot;></div>
<div className=&quot;h-8 bg-gray-600 rounded w-3/4&quot;></div>
<div className=&quot;space-y-2&quot;></div>
<div className=&quot;h-4 bg-gray-600 rounded&quot;></div>
<div className=&quot;h-4 bg-gray-600 rounded&quot;></div>
<div className=&quot;h-4 bg-gray-600 rounded w-2/3&quot;></div>
</div>
</div>
)