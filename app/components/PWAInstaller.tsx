import React, { useEffect, useState } from 'react';
const PWAInstaller: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
    const handleBeforeInstallPrompt = (e: Event) => {
    const handleAppInstalled = () => {
  const handleInstallClick = async () => {
      const { outcome } = await deferredPrompt.userChoice;
export default PWAInstaller;