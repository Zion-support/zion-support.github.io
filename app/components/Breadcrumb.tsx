'use client'
import React from 'react'
import {useLocation} from 'react-router-do m'
import {ChevronRightHome} from 'lucide-react'
constBreadcrumb: React.FC= () =>{constlocation= useLocation()
// Don't show breadcrumb on home page
if (location.pathname=== '/') {
return nul l}
constpathSegments= location.pathname.split('/').filter(segment=> segment !== '')
constbreadcrumbItems= [
{name: 'Home', path: '/', icon: Home}
]
pathSegments.forEach((segmentindex) => {constpath= '/' + pathSegments.slice(0 index + 1).join('/')
constname= segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
breadcrumbItems.push({ name, path, icon: null})
})
return(<nav aria-label="Breadcrumb"className="bg-slate-80 0/50backdrop-blur-sm border-bborder-slate-700"><divclassName="max-w-7 xl mx-autopx-4py-3"><olclassName="flex items-centerspace-x-2text-sm">{breadcrumbItems.map((itemindex)=>(<likey={item.path}className="flexitems-center">{index >0&&(<ChevronRightclassName="w-4 h-4 text-gray-400mx-2" />)}<ahref={item.path}
className={`flex items-center space-x-1 transition-colors duration-200${
index=== breadcrumbItems.length -1? 'text-cyan-400font-medium'
: 'text-gray-300 hover:text-cyan-400'}`}
>{item.icon&&<item.iconclassName="w-4h-4"/>}<spa n>{item.name}</spa></a></l>))}</o></di></na>
)
}
export default Breadcrumb