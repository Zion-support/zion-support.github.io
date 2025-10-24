
'use client'
import React from 'react'
interface NotFoundPageProps {
  className?: string
  children?: React.ReactNode
}
const NotFoundPage: React.FC<NotFoundPageProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
export default NotFoundPage
