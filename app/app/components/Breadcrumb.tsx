"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Breadcrumb() {
  const pathname = usePathname()
  
  // Simple breadcrumb implementation
  const segments = pathname.split('/').filter(Boolean)
  
  return (
    <nav style={{ padding: '1rem 0', color: '#666', fontSize: '0.9rem' }}>
      <Link href="/">Home</Link>
      {segments.map((segment, index) => {
        const isLast = index === segments.length - 1
        const segmentPath = '/' + segments.slice(0, index + 1).join('/')
        
        return (
          <>
            <span> › </span>
            {isLast ? (
              <span>{segment.replace(/-/g, ' ')}</span>
            ) : (
              <Link href={segmentPath} key={segment}>
                {segment.replace(/-/g, ' ')}
              </Link>
            )}
          </>
        )
      })}
    </nav>
  )
}
