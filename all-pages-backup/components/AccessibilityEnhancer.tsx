<<<<<<< HEAD:all-pages-backup/components/AccessibilityEnhancer.tsx
"use client"

import React, { useEffect } from 'react'

interface AccessibilityEnhancerProps {
  children: React.ReactNode
}

export default function AccessibilityEnhancer({ children }: AccessibilityEnhancerProps) {
  useEffect(() => {
    // Accessibility enhancements
    if (typeof window !== 'undefined') {
      // Add skip to content link
      const skipLink = document.createElement('a')
      skipLink.href = '#main-content'
      skipLink.textContent = 'Skip to main content'
      skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'
      document.body.insertBefore(skipLink, document.body.firstChild)

      // Add main content ID
      const main = document.querySelector('main')
      if (main && !main.id) {
        main.id = 'main-content'
      }

      return () => {
        const existingSkipLink = document.querySelector('a[href="#main-content"]')
        if (existingSkipLink) {
          existingSkipLink.remove()
        }
      }
    }
  }, [])
;
  return <>{children}</>};
'use client';
import { useEffect } from 'react';
<<<<<<< HEAD:all-pages-backup/components/AccessibilityEnhancer.tsx
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content with Alt + M
      if (e.altKey && e.key === 'm') {;
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' })}
      }

      // Skip to navigation with Alt + N
      if (e.altKey && e.key === 'n') {
        e.preventDefault();
        const navigation = document.querySelector('nav');
        if (navigation) {
          const firstLink = navigation.querySelector('a') as HTMLElement
          if (firstLink) {
            firstLink.focus()}
<<<<<<< HEAD:all-pages-backup/components/AccessibilityEnhancer.tsx
      document.removeEventListener('keydown', handleKeyDown)}}, []);
<<<<<<< HEAD:all-pages-backup/components/AccessibilityEnhancer.tsx
      *:focus {
        outline: 2px solid #8b5cf6 !important
        outline-offset: 2px !important
<<<<<<< HEAD:all-pages-backup/components/AccessibilityEnhancer.tsx
          * {
            border-color: currentColor !important
<<<<<<< HEAD:all-pages-backup/components/AccessibilityEnhancer.tsx
      document.head.removeChild(style)}}, []);
<<<<<<< HEAD:all-pages-backup/components/AccessibilityEnhancer.tsx
  useEffect(() => {
    // Add ARIA landmarks
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main')}
<<<<<<< HEAD:all-pages-backup/components/AccessibilityEnhancer.tsx
  return <>{children}</>};

export default AccessibilityEnhancer
