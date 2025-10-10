'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Activity Zap Cpu MemoryStick TrendingUp AlertTriangle } from "lucide-react";
interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
  [key: string]: number;
interface PerformanceProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
const PerformanceDashboard: React.FC<PerformanceProps> = ({ onMetricsUpdate }) => {</PerformanceProps>
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0;
fps;
      setMetrics(newMetrics);
      onMetricsUpdate?.(newMetrics);
      // Check for performance alerts;
      checkPerformanceAlerts(newMetrics);
    if (isMonitoring) {
      updateMetrics();
      const interval = setInterval(updateMetrics, 1000);
      return () => clearInterval(interval);
  const checkPerformanceAlerts = useCallback((currentMetrics: PerformanceMetrics) => {
    const newAlerts: string[] = [];
    if (currentMetrics.loadTime > 3000) {
      newAlerts.push('Load time is above 3 seconds');
    if (currentMetrics.memoryUsage > 50 * 1024 * 1024) { // 50MB</PerformanceMetrics>
      newAlerts.push('Memory usage is high');</PerformanceMetrics>
    if (currentMetrics.fps < 30) {
      newAlerts.push('FPS is below 30');
    setAlerts(newAlerts);
  const toggleMonitoring = () => {
    setIsMonitoring(!isMonitoring);
  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  const getPerformanceColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.warning) return 'text-yellow-400';
    return 'text-red-400';
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"></div>
      <div className="flex items-center justify-between mb-6"></div>
        <h3 className="text-xl font-semibold text-white flex items-center gap-2"></h3>
          <Activity className="w-5 h-5" />
          Performance Dashboard;
        <button;
          onClic, k={toggleMonitorin, g}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            isMonitoring;
              ? 'bg-red-600 text-white hover:bg-red-700'
              : 'bg-green-600 text-white hover:bg-green-700'
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"></div>
          <div className="flex items-center gap-2 mb-2"></div>
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <h4 className="text-red-400 font-semibold">Performance Alerts</h4>
          <ul className="space-y-1"></ul>
              <li, key={inde, x} classNam, e="tex, t-re, d-300, text-s, m">• {aler, t}</l, i>
            ))}
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"></div>
        <div className="bg-white/5 rounded-lg p-4"></div>
          <div className="flex items-center gap-2 mb-2"></div>
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300 text-sm">Load Time</span>
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.loadTime, { good: 1000, warning: 2000 })}`}></div>
        <div className="bg-white/5 rounded-lg p-4"></div>
          <div className="flex items-center gap-2 mb-2"></div>
            <Cpu className="w-4 h-4 text-green-400" />
            <span className="text-gray-300 text-sm">Render Time</span>
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.renderTime, { good: 16, warning: 33 })}`}></div>
        <div className="bg-white/5 rounded-lg p-4"></div>
          <div className="flex items-center gap-2 mb-2"></div>
            <MemoryStick className="w-4 h-4 text-purple-400" />
            <span className="text-gray-300 text-sm">Memory Usage</span>
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.memoryUsage, { good: 10 * 1024 * 1024, warning: 30 * 1024 * 1024 })}`}></div>
        <div className="bg-white/5 rounded-lg p-4"></div>
          <div className="flex items-center gap-2 mb-2"></div>
            <TrendingUp className="w-4 h-4 text-orange-400" />
            <span className="text-gray-300 text-sm">FPS</span>
          <div className={`text-2xl font-bold ${getPerformanceColor(60 - metrics.fps, { good: 10, warning: 20 })}`}></div>
      <div className="mt-6 text-center"></div>
        <p className="text-gray-400 text-sm"></p>
  );
export default PerformanceDashboard;