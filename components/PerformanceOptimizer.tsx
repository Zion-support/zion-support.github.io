import React, { useEffect } from "react;
import Head from "next/head;
interface PerformanceOptimizerProps {preloadImages?: string[];
  preloadFonts?: string[];
  criticalCSS?: string;
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
preloadImages = [], preloadFonts = [
    "https: //fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap
  ], criticalCSS"}) => {
  useEffect(() => {
    // Performance monitoring
    if (typeof window !== "undefined" && "performance" in window) {"      // Monitor Core Web Vitals"      const observer = new PerformanceObserver((list) => {;