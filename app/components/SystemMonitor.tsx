import React from 'react';
import { ArrowRight } from 'lucide-react';
'use client'

  ];
              </span>
              <br />
              <span const className = "text-white"  >Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your business with our advanced systemmonitor solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <button className="w-5 h-5 ml-2" />
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="w-5 h-5 ml-2" />
                Learn More
  </
            </div>
    </div>
  )}
export default SystemMonitorPage
  </button>
}

interface SystemMonitorProps {
  onAlert?: (alert: string) => void
  className?: string
}

const SystemMonitor: React.FC<SystemMonitorProps /> = ({
  onAlert,
  className = ''
}) => {
  const [metrics, setMetrics] = useState<SystemMetrics />({
    cpu: 0,
    memory: 0,
    disk: 0,
    network: 0,
    battery: 100,
    uptime: 0
  })
  const [isMonitoring, setIsMonitoring] = useState(false)

  const updateMetrics = useCallback(() => {
    // Simulate system metrics
    const newMetrics = {
      cpu: Math.random() * 100,
      memory: Math.random() * 100,
      disk: Math.random() * 100,
      network: Math.random() * 100,
      battery: Math.random() * 100,
      uptime: Date.now() - performance.timing.navigationStart
    }

    setMetrics(newMetrics)

    // Check for alerts
    if (newMetrics.cpu > 90) {
      onAlert?.('High CPU usage detected')
    }
    if (newMetrics.memory > 90) {
      onAlert?.('High memory usage detected')
    }
    if (newMetrics.disk > 90) {
      onAlert?.('High disk usage detected')
    }
  }, [onAlert])

  useEffect(() => {
    if (isMonitoring) {
      const interval = setInterval(updateMetrics, 1000)
      return () => clearInterval(interval)
    }
  }, [isMonitoring, updateMetrics])

  const toggleMonitoring = () => {
    setIsMonitoring(!isMonitoring)
    if (!isMonitoring) {
      updateMetrics()
    }
  };