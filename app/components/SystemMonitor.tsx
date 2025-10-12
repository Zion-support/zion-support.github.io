

import React from 'react';
<<<<<<< HEAD

=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
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

=======
export default function SystemMonitor() {
  return (
    <>
      <Helmet>
        <title>System Monitor - Zion Tech Group</title>
        <meta name="description" content="Professional system monitor by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">System Monitor</h1>
          <p className="text-lg text-gray-300 mb-8">Professional system monitor coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
