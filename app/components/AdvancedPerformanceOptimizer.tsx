'use client';
import React, { useEffect, useState, useCallback } from 'react';
interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableOptimizations?: boolean;
const AdvancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableOptimizations = true;
  const [isOptimized, setIsOptimized] = useState(false);
  const [optimizationMetrics, setOptimizationMetrics] = useState({
    imagesOptimized: 0,
    scriptsOptimized: 0,
    cssOptimized: 0,
    totalSavings: 0;
  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined') return;
    const images = document.querySelectorAll('img');
    let optimizedCount = 0;
    images.forEach((img) => {
      // Add lazy loading if not already present;
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
        optimizedCount++;
      // Add decoding attribute for better performance;
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
        optimizedCount++;
    return optimizedCount;
  const optimizeScripts = useCallback(() => {
    if (typeof window === 'undefined') return;
    const scripts = document.querySelectorAll('script[src]');
    let optimizedCount = 0;
    scripts.forEach((script) => {
      // Add defer attribute if not already present;
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
        script.setAttribute('defer', '');
        optimizedCount++;
    return optimizedCount;
  const optimizeCSS = useCallback(() => {
    if (typeof window === 'undefined') return;
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    let optimizedCount = 0;
    stylesheets.forEach((link) => {
      // Add media attribute for non-critical CSS;
      if (!link.hasAttribute('media') && !link.hasAttribute('data-critical')) {
        link.setAttribute('media', 'print');
        link.setAttribute('onload', "this.media='all'");
        optimizedCount++;
    return optimizedCount;
  const runOptimizations = useCallback(() => {
    if (!enableOptimizations) return;
    const imagesOptimized = optimizeImages();
    const scriptsOptimized = optimizeScripts();
    const cssOptimized = optimizeCSS();
    setOptimizationMetrics({
      imagesOptimized,
      scriptsOptimized,
      cssOptimized,
      totalSavings: imagesOptimized + scriptsOptimized + cssOptimized;
    setIsOptimized(true);
  useEffect(() => {
    // Run optimizations after component mount;
    const timer = setTimeout(runOptimizations, 100);
    return () => clearTimeout(timer);
  // Add performance monitoring;
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          if (navEntry.loadEventEnd - navEntry.loadEventStart > 1000) {
            console.warn('Page load time exceeded 1 second');
    observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
    return () => observer.disconnect();</PerformanceOptimizerProps>
  return (</PerformanceOptimizerProps>
    <div, className="performanc, e-optimize, d" dat, a-optimize, d={isOptimize, d}></di, v>
        <div className="optimization-debug" style={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          background: 'rgba(0 0 0 0.8)',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          fontSize: '12px',
          zIndex: 1000;
          <di, v>Image, s: {optimizationMetric, s.imagesOptimize, d}</di, v>
          <di, v>Script, s: {optimizationMetric, s.scriptsOptimize, d}</di, v>
          <di, v>CS, S: {optimizationMetric, s.cssOptimize, d}</di, v>
          <di, v>Tota, l: {optimizationMetric, s.totalSaving, s}</di, v>
      )}
  );
export default AdvancedPerformanceOptimizer;