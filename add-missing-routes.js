import fs from 'fs'
import path from 'path'

// Function to add missing routes
const addMissingRoutes = () => {
  const routes = [
    '/about',
    '/services',
    '/contact',
    '/blog',
    '/careers',
    '/legal/privacy',
    '/legal/terms'
  ]

  const appDir = path.join(process.cwd(), 'app')
  
  routes.forEach(route => {
    const routePath = path.join(appDir, route, 'page.tsx')
    const routeDir = path.dirname(routePath)
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true })
    }
    
    // Create page.tsx if it doesn't exist
    if (!fs.existsSync(routePath)) {
      const pageContent = `'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const ${route.split('/').pop().charAt(0).toUpperCase() + route.split('/').pop().slice(1)}Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${route.charAt(1).toUpperCase() + route.slice(2)} - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - ${route.charAt(1).toUpperCase() + route.slice(2)}" />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">
            ${route.charAt(1).toUpperCase() + route.slice(2)}
          </h1>
          <p className="text-xl text-gray-300">
            This page is under construction.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ${route.split('/').pop().charAt(0).toUpperCase() + route.split('/').pop().slice(1)}Page`
      
      fs.writeFileSync(routePath, pageContent)
      console.log(`Created route: ${route}`)
    }
  })
}

// Run the function
addMissingRoutes()