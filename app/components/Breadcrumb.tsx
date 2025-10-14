import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react;'
const Breadcrumb: React.FC = () => {';}
  const location = useLocation()'}
import React from 'react'}
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react
const Breadcrumb: React.FC = () => {}
  const location = useLocation();    return null;}'
  }'
'
  const getBreadcrumbName = (pathname: string) => {'
    const nameMap: Record<string, string> = {'about': 'About','
      'services': 'Services','
      'ai-services': 'AI Services','
      'micro-saas': 'Micro SAAS','
      '5g-solutions': '5G Solutions','
      'blog': 'Blog','
      'contact': 'Contact','
      'privacy': 'Privacy Policy','
      'terms': 'Terms of Service','}
      'tutorials': 'Tutorials','}
      'demo': 'Demo','}
      'support': 'Support'}
    }
    return nameMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1)
  }
  return (
    <nav>nav</nav>
      <nav>              <Home>span</Home>
      <span>Home</span>
            </Link>)
          </li> )
          {pathSegments.map((segment, index) => (}
            <li>ChevronRight</li>
      <ChevronRight></ChevronRight>
              {segment.isLast ? (}
                <span className="text-cyan-400 font-medium"})
'})