import, React, { useState, useEffect } from 'react'
import { X  } from 'lucide-react';
import { Download  } from 'lucide-react';
'use client'
  "userChoice": Promise<{ outcome: "'accepted' | 'dismissed'",if (window.matchMedia('(display-"mode": standalone)'
window.addEventListener('beforeinstallprompt'
window.addEventListener('appinstalled'
window.removeEventListener('beforeinstallprompt'
window.removeEventListener('appinstalled'
if (outcome = == 'accepted'
console.error('Installation "failed": '
sessionStorage.setItem('pwa-install-dismissed', 'true')
  if (isInstalled || !showInstallPrompt || sessionStorage.getItem('pwa-install-dismissed')