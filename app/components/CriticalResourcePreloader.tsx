'use client'
import React from 'react';

// Critical resource preloader component

interface CriticalResourcePreloaderProps {
interface CriticalresourcepreloaderProps {
  className?: string;
  children?: React.ReactNode;
import { Link } from 'react-router-dom';
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
          href: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2',
          as: 'font',
          type: 'font/woff2',
        }
      ]

      // Critical CSS
      const criticalCSS = [
        '/styles/critical.css',
        '/styles/animations.css'

      // Critical JavaScript
      const criticalJS = [
        '/scripts/performance.js',
        '/scripts/analytics.js'

      // Critical images
      const criticalImages = [
        '/images/logo.svg',
        '/images/hero-bg.webp',
        '/images/cta-bg.webp'

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
        link.href = css
        link.as = 'style'

      // Preload JavaScript
      criticalJS.forEach(js => {
        link.href = js
        link.as = 'script'

      // Preload images
      criticalImages.forEach(img => {
        link.href = img
        link.as = 'image'

    // Preconnect to external domains
    const preconnectDomains = () => {
      const domains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com',
        'https://www.googletagmanager.com',
        'https://cdn.jsdelivr.net'

      domains.forEach(domain => {
        link.rel = 'preconnect'
        link.href = domain
        link.crossOrigin = 'anonymous'

    // DNS prefetch for additional domains
    const dnsPrefetchDomains = () => {
        'https://api.ziontechgroup.com',
        'https://cdn.ziontechgroup.com',
        'https://analytics.ziontechgroup.com'

        link.rel = 'dns-prefetch'

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

    // Initialize hover preloading after a delay
    setTimeout(preloadOnHover, 2000)


  }, [])

  return null

export default function CriticalResourcePreloader({ className = '', children }: CriticalResourcePreloaderProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );

export default function CriticalResourcePreloader({ className = '', children, ...props }: CriticalResourcePreloaderProps) {
        <div className="component" {...props}>
export default CriticalResourcePreloader

export default function Criticalresourcepreloader({ className = '', children, ...props }: CriticalresourcepreloaderProps) {
