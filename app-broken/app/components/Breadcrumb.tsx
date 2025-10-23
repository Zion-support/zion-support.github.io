'use client'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
const Breadcrumb: React.FC = () => {
const location = useLocation()
// Don't show breadcrumb on home page
if (location.pathname === '/') {
return null
}
const pathSegments = location.pathname.split('/').filter(segment => segment !== '')
const breadcrumbItems = [
{ name: 'Home', path: '/', icon: Home }
]
pathSegments.forEach((segment, index) => {
const path = '/' + pathSegments.slice(0, index + 1).join('/')
const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
breadcrumbItems.push({ name, path, icon: null })
})
return (
<nav aria-label=&quot;Breadcrumb&quot; className=&quot;bg-slate-800/50 backdrop-blur-sm border-b border-slate-700&quot;>
<div className=&quot;max-w-7xl mx-auto px-4 py-3&quot;></div>
<ol className=&quot;flex items-center space-x-2 text-sm&quot;>
{breadcrumbItems.map((item, index) => (
<li key={item.path} className=&quot;flex items-center&quot;>
{index > 0 && (
<ChevronRight className=&quot;w-4 h-4 text-gray-400 mx-2&quot; />
)}
<a
href={item.path}
className={`flex items-center space-x-1 transition-colors duration-200 ${
index === breadcrumbItems.length - 1
? 'text-cyan-400 font-medium'
: 'text-gray-300 hover:text-cyan-400'
}`}
>
{item.icon && <item.icon className=&quot;w-4 h-4&quot; />}
<span>{item.name}</span>
</a>
</li>
))}
</ol>
</div>
</nav>
)
}
export default Breadcrumb