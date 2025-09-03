import React from 'react'
import ModernHeader from './ModernHeader'
import ModernFooter from './ModernFooter'

type LayoutProps = { children: React.ReactNode }

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <ModernHeader />
      <main className="flex-1 pt-16">{children}</main>
      <ModernFooter />
    </div>
  )
}