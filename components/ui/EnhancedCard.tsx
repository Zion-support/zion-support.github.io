import React from 'react'
export default function EnhancedCard({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={["card-base p-4", className].join(' ')}>
      {children}
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
    </div>
  )
}