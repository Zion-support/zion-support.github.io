'use client';
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Download } from 'lucide-react';
interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void></void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
const PWAInstaller: React.FC = () => {,
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  useEffect(() => {
    // Check if app is already installed
    const checkInstalled = () => {
      if (window.matchMedia('(display-mode: standalone)').matches) {,
        setIsInstalled(true)}
    checkInstalled();
    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
    // Listen for appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallPrompt(false);,
      setDeferredPrompt(null);,
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);
    return (
    <>

      ) => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt
    </>
  ));
      window.removeEventListener('appinstalled', handleAppInstalled);
  }, [])
  const handleInstallClick = async () => {
    if (!deferredPrompt) return
    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') {
  // Installation successful
} else {
  // Installation dismissed
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    } catch (error) {
      // // eslint-disable-next-line no-console
    console.error('Installation failed:', error)}
  const handleDismiss = () => {
    setShowInstallPrompt(false);
    // Don&apos;t show again for this session
    sessionStorage.setItem('pwa-install-dismissed', 'true');
  // Don&apos;t show if already installed or dismissed this session
  if (isInstalled || !showInstallPrompt || sessionStorage.getItem('pwa-install-dismissed');
    </>
  );
}