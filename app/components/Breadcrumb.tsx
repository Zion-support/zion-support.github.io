import React from "react";
import { ChevronRight, Home } from "lucide-react";
const Breadcrumb: React.FC = () => {
  const location = useLocation()";
import { ChevronRight, Home } from "lucide-react";
const Breadcrumb: React.FC = () => {
  const location = useLocation();    return null;
  }

  const getBreadcrumbName = (pathname: string) => {
    const nameMap: Record<string, string> = {";
    };
    return nameMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);
  };
  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-white/10 py-2" aria-label="Breadcrumb"></nav>"
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-cyan-500/20 py-3">              <Home className="w-4 h-4" /></Home>"
              <span className="sr-only">Home</span>"
            </Link>
          </li> 
          {pathSegments.map((segment, index) => (
            <li key={segment.path} className="flex items-center"></li>"
              <ChevronRight className="w-4 h-4 text-gray-500 mx-2" /></ChevronRight>"
              {segment.isLast ? (
                <span className="text-cyan-400 font-medium"
'