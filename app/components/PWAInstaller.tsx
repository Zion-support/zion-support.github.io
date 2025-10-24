<<<<<<< HEAD
import React from 'react';

interface PWAInstallerProps {
  className?: string;
  children?: React.ReactNode;
}

const PWAInstaller: React.FC<PWAInstallerProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default PWAInstaller;
=======
'use client'

import React, { useState, useEffect } from 'react'

const PWAInstaller: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showInstall, setShowInstall] = useState(false)

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstall(true)
    })
  }, [])

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') {
        setShowInstall(false)
      }
    }
  }

  if (!showInstall) return null

  return (
    <button onClick={handleInstall} className="pwa-installer">
      Install App
    </button>
  )
}

export default PWAInstaller
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
