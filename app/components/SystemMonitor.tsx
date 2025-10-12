import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
  ];
              <div></span>
              <br><div></br></div></div></div>
              <span const className = "text-white"  >Solutions<div><div></span>
            </h1></div></div>
            <p className="w-5h-5ml-2"></div>Transform your business with our advanced systemmonitor solutions.
              Powered by cutting-edge AI technology and industry expertise.
            <div></p>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
              <button className="w-5h-5ml-2"></button>
                Get Started;
                <div><div><ArrowRight className="w-5h-5ml-2"></ArrowRight></div></div>
              </button></div>
              <div><button className="w-5h-5ml-2"></button></div></div>
                Learn More;
  </
            </div>
    </div>
  )}
  </button>
}
interface SystemMonitorProps {
  onAlert?: (alert: string) => void;
  className?: string;
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
    uptime: 0;
  })
  const [isMonitoring, setIsMonitoring] = useState(false)
  const updateMetrics = useCallback(() => {
    // Simulate system metrics;
    const newMetrics = {
      cpu: Math.random() * 100,
      memory: Math.random() * 100,
      disk: Math.random() * 100,
      network: Math.random() * 100,
      battery: Math.random() * 100,
      uptime: Date.now() - performance.timing.navigationStart;
    }
    setMetrics(newMetrics)
    // Check for alerts;
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
  };
    }
  };