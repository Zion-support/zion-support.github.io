import React from 'react';

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default SystemMonitorPage;
'use client'
  ];
              </span>
              <br /></br>
              <span const className = "text-white"  >Solutions</span>
            </h1>
            <p className="w-5h-5ml-2">Transform your business with our advanced systemmonitor solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <button className="w-5h-5ml-2" /></button>;
                Get Started;
                <ArrowRight className = "w-5h-5ml-2" /></ArrowRight>
              </button>
              <button className="w-5h-5ml-2" /></button>;
                Learn More;
  </            </div>
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
    battery: 100,;
    uptime: 0;
  })
  const [isMonitoring, setIsMonitoring] = useState(false)
  const updateMetrics = useCallback(() => {;
    // Simulate system metrics;
const newMetrics = {
      cpu: Math.random() * 100,
      memory: Math.random() * 100,
      disk: Math.random() * 100,
      network: Math.random() * 100,
      battery: Math.random() * 100,;
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
export default function SystemMonitor() {
      <Helmet>
        <title>Components - Zion Tech Group</title>
        <meta name="description" content="Professional components services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Components</h1>
          <p className="text-lg text-gray-300 mb-8">Professional components services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>;
  );
}
