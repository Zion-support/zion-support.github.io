'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

interface BreadcrumbProps {
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">
        Breadcrumb
      </h2>
      <p className="text-gray-600">
        This component is under construction.
      </p>
    </div>
  );
};

export default BreadcrumbPage;
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
