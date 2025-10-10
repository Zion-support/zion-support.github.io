import React, { useState, useEffect, useCallback } from 'react';
import { performanceOptimizer } from '../utils/performanceOptimizer';
import { errorHandler } from '../utils/enhancedErrorHandler';
import { errorHandler } from '../utils/enhancedErrorHandler';
const _collectPerformanceMetrics = () => {
const calculatePerformanceScore = () => {if (!metrics) return 0;
const SystemMonitor: React.FC<SystemMonitorProps> = ({
  const [metrics, setMetrics] = useState<SystemMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const updateMetrics = useCallback(() => {
    try {// Get memory info// Get network infoconst newMetrics: SystemMetrics = {
    const initializeMonitoring = () => {
  const getMemoryInfo = () => {
      const used = memory.usedJSHeapSize / 1024 / 1024; // MB
      const total = memory.totalJSHeapSize / 1024 / 1024; // MB
      const limit = memory.jsHeapSizeLimit / 1024 / 1024; // MB
      const _percentage = (used / limit) * 100;
  const getNetworkInfo = () => {
      const _nav = navigator as NavigatorWithConnection;
      const _connection = nav.connection;
  const handleExport = () => {
    const exportData = {
    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
  const getPerformanceScoreColor = (score: number) => {
  const getSeverityColor = (severity: string) => {
export default SystemMonitor;