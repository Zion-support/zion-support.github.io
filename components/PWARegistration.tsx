import React, { useEffect, useState } from "react;
import { motion, AnimatePresence } from "framer-motion;
import { Download, X, Smartphone, Monitor } from "lucide-react;
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{;
    outcome: "accepted" | "dismissed;
    platform: string;"  }>;prompt(): Promise<void>;
const PWARegistration: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  useEffect(() => {
    // Check if app is already installed
if (window.matchMedia("(display-mode: standalone)").matches) {"      setIsInstalled(true);"      return;