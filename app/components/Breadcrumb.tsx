'use client'
import React from 'react'
import { Home, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface BreadcrumbItem {
  name: string
  path: string
  icon?: React.ComponentType<{ className?: string }>
}

const Breadcrumb: React.FC = () => {
  // For Next.js, we'll use a simple breadcrumb implementation
  // In a real app, you'd get the current path from usePathname or useRouter
  
  const breadcrumbItems: BreadcrumbItem[] = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services' },
    { name: 'AI Solutions', path: '/ai-solutions' }
  ]

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={item.path}>
          {index > 0 && (
            <ChevronRight className="w-4 h-4 text-gray-400" />
          )}
          <Link
            href={item.path}
            className="flex items-center space-x-1 hover:text-gray-700 transition-colors"
          >
            {item.icon && <item.icon className="w-4 h-4" />}
            <span>{item.name}</span>
          </Link>
        </React.Fragment>
      ))}
    </nav>
  )
}

export default Breadcrumb