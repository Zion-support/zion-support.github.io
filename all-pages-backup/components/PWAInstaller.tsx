<<<<<<< HEAD
<<<<<<< HEAD:all-pages-backup/components/PWAInstaller.tsx
          <button
            onClick={handleDismiss}
            className=&quot;text-gray-400 hover:text-white transition-colors&quot
            aria-label=&quot;Dismiss install prompt&quot
<<<<<<< HEAD:all-pages-backup/components/PWAInstaller.tsx
          <button
            onClick={handleInstallClick}
            className=&quot;w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-sm font-medium&quot
          >
            Install Now
          </button>
          <button
            onClick={handleDismiss}
            className=&quot;w-full bg-transparent border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-slate-700 hover:text-white transition-all duration-300 text-sm&quot
=======
'use client'
import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Download } from 'lucide-react'
  "userChoice": Promise<{ outcome: 'accepted' | 'dismissed',
      if (window.matchMedia('(display-"mode": standalone)',
    window.addEventListener('beforeinstallprompt'
    window.addEventListener('appinstalled'
      window.removeEventListener('beforeinstallprompt'
      window.removeEventListener('appinstalled'
      if (outcome === 'accepted'
      // console.error('Installation "failed": ');
    sessionStorage.setItem('pwa-install-dismissed', 'true';
  if (isInstalled || !showInstallPrompt || sessionStorage.getItem('pwa-install-dismissed'
>>>>>>> origin/main
