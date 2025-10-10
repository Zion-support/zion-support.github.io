'use client';
import React from 'react';
import { useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation()  // Don't show breadcrumb on home page
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
            </li>
          ))};
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumb