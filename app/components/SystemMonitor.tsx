

import React from 'react';

import { ArrowRight } from 'lucide-react';
'use client'

import { ArrowRight } from 'lucide-react';

  ];
    
              <span const className = "text-white">Solutions</span>
              Transform your business with our advanced systemmonitor solutions.
              Powered by cutting-edge AI technology and industry expertise.
    
                Get Started
    
                Learn More

  )}
export default SystemMonitorPage

interface SystemMonitorProps {
 void
  className?: string

const SystemMonitor: React.FC<SystemMonitorProps /> = ({
  onAlert,
  className = ''
  const [metrics, setMetrics] = useState<SystemMetrics />({
    cpu: 0,
    memory: 0,
    disk: 0,
    network: 0,
    battery: 100,
    uptime: 0
  })
  const [isMonitoring, setIsMonitoring] = useState(false)

    // Simulate system metrics
    const newMetrics = {
      cpu: Math.random() * 100,
      memory: Math.random() * 100,
      disk: Math.random() * 100,
      network: Math.random() * 100,
      battery: Math.random() * 100,
      uptime: Date.now() - performance.timing.navigationStart

    setMetrics(newMetrics)

    // Check for alerts
 90) {
      onAlert?.('High CPU usage detected')
 90) {
      onAlert?.('High memory usage detected')
 90) {
      onAlert?.('High disk usage detected')
  }, [onAlert])

    if (isMonitoring) {
      const interval = setInterval(updateMetrics, 1000)
 clearInterval(interval)
  }, [isMonitoring, updateMetrics])

    setIsMonitoring(!isMonitoring)
    if (!isMonitoring) {
      updateMetrics()

  };

