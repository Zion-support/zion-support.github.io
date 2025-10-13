'use client'
import { useEffect } from 'react';
const CriticalResourcePreloader = () => {
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Critical fonts
      const criticalFonts = [
        {
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
          as: 'style',
          crossorigin: 'anonymous'
        },
        {
          href: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        }
      ]
      // Critical CSS
      const criticalCSS = [
        '/styles/critical.css',
        '/styles/animations.css'
      ]
      // Critical JavaScript
      const criticalJS = [
        '/scripts/performance.js',
        '/scripts/analytics.js'
      ]
      // Critical images
      const criticalImages = [
        '/images/logo.svg',
        '/images/hero-bg.webp',
        '/images/cta-bg.webp'
      ]
      // Preload fonts
      criticalFonts.forEach(font => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = font.href
        link.as = font.as
        if (font.type) link.type = font.type
        if (font.crossorigin) link.crossOrigin = font.crossorigin
        document.head.appendChild(link)
      })
      // Preload CSS
      criticalCSS.forEach(css => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = css
        link.as = 'style'
        document.head.appendChild(link)
      })
      // Preload JavaScript
      criticalJS.forEach(js => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = js
        link.as = 'script'
        document.head.appendChild(link)
      })
      // Preload images
      criticalImages.forEach(img => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = img
        link.as = 'image'
        document.head.appendChild(link)
      })
    }
    // Preconnect to external domains
    const preconnectDomains = () => {
      const domains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com',
        'https://www.googletagmanager.com',
        'https://cdn.jsdelivr.net'
      ]
      domains.forEach(domain => {
        const link = document.createElement('link')
        link.rel = 'preconnect'
        link.href = domain
        link.crossOrigin = 'anonymous'
        document.head.appendChild(link)
      })
    }
    // DNS prefetch for additional domains
    const dnsPrefetchDomains = () => {
      const domains = [
        'https://api.ziontechgroup.com',
        'https://cdn.ziontechgroup.com',
        'https://analytics.ziontechgroup.com'
      ]
      domains.forEach(domain => {
        const link = document.createElement('link')
        link.rel = 'dns-prefetch'
        link.href = domain
        document.head.appendChild(link)
      })
    }
    // Initialize preloading
    preloadCriticalResources()
    preconnectDomains()
    dnsPrefetchDomains()
    // Preload next page resources on hover
    const preloadOnHover = () => {
      const links = document.querySelectorAll('a[href^="/"]')
      
      links.forEach(link => {
        link.addEventListener('mouseenter', () => {
          const href = link.getAttribute('href')
          if (href && !document.querySelector(`link[href="${href}"]`)) {
            const preloadLink = document.createElement('link')
            preloadLink.rel = 'prefetch'
            preloadLink.href = href
            document.head.appendChild(preloadLink)
          }
        })
      })
    }
    // Initialize hover preloading after a delay
    setTimeout(preloadOnHover, 2000)
  }, [])
  return null
}
export default CriticalResourcePreloader