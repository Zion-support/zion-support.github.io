import React, { useEffect, useState } from "react;
interface PerformanceMetrics {fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
if (typeof window === "undefined") return;
    // Only show in development or for admin users
    const isDev = process.env.NODE_ENV === "development;
    const isAdmin = localStorage.getItem("admin_mode") === "true;
    "    if (!isDev && !isAdmin) return;