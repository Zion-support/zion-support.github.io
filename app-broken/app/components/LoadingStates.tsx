'use client'
import React from 'react'
import { Loader2 } from 'lucide-react'
export const PageLoader: React.FC = () => {
return (
<div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center&quot;></div>
<div className=&quot;text-center&quot;></div>
<div className=&quot;w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
<Loader2 className=&quot;w-8 h-8 text-slate-900 animate-spin&quot; />
</div>
<h2 className=&quot;text-xl font-semibold text-white mb-2&quot;>Loading...</h2>
<p className=&quot;text-gray-300&quot;>Please wait while we load the page</p>
</div>
</div>
)
}
export const ComponentLoader: React.FC = () => {
return (
<div className=&quot;flex items-center justify-center p-8&quot;></div>
<div className=&quot;flex items-center space-x-2 text-cyan-400&quot;></div>
<Loader2 className=&quot;w-5 h-5 animate-spin&quot; />
<span>Loading component...</span>
</div>
</div>
)
}
export const ServiceCardSkeleton: React.FC = () => {
return (
<div className=&quot;bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 animate-pulse&quot;></div>
<div className=&quot;w-12 h-12 bg-slate-700 rounded-lg mb-4&quot;></div>
<div className=&quot;h-6 bg-slate-700 rounded mb-3 w-3/4&quot;></div>
<div className=&quot;h-4 bg-slate-700 rounded mb-2&quot;></div>
<div className=&quot;h-4 bg-slate-700 rounded w-5/6 mb-4&quot;></div>
<div className=&quot;h-8 bg-slate-700 rounded w-1/2 mx-auto&quot;></div>
</div>
)
}
export const ContentSkeleton: React.FC = () => {
return (
<div className=&quot;bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 animate-pulse&quot;></div>
<div className=&quot;h-8 bg-slate-700 rounded mb-4 w-1/2&quot;></div>
<div className=&quot;h-4 bg-slate-700 rounded mb-2&quot;></div>
<div className=&quot;h-4 bg-slate-700 rounded mb-2&quot;></div>
<div className=&quot;h-4 bg-slate-700 rounded w-3/4&quot;></div>
</div>
)
}
export const LoadingSpinner: React.FC = () => (
<div className=&quot;flex items-center justify-center p-8&quot;></div>
<div className=&quot;w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin&quot;></div>
</div>
)