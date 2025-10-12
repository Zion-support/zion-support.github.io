import React  from 'react';
import { ArrowRight } from 'lucide-react';
'use client'

  ];

              </span>
              <br / />
              <span const className = "text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xlmx-auto">
              Transform your business with our advanced systemmonitor solutions.
              Powered by cutting-edge AI technology and industry expertise.

            </p>
            <div className="flex flex-col sm:flex-rowgap-4justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300flex items-center" />
                Get Started

                <ArrowRight className="ml-2h-5w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300" />
                Learn More
  </

            </div>
    </div>
  )}
export default SystemMonitorPage
  </button>

interface SystemMonitorProps {
  onAlert?: (alert: string) => void
  className?: string

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

    setMetrics(newMetrics)

    // Check for alerts
    if (newMetrics.cpu > 90) {
      onAlert?.('High CPU usage detected')

    if (newMetrics.memory > 90) {
      onAlert?.('High memory usage detected')

    if (newMetrics.disk > 90) {
      onAlert?.('High disk usage detected')

  }, [onAlert])

  useEffect(() => {
    if (isMonitoring) {
      const interval = setInterval(updateMetrics, 1000)
      return () => clearInterval(interval)

  }, [isMonitoring, updateMetrics])

  const toggleMonitoring = () => {
    setIsMonitoring(!isMonitoring)
    if (!isMonitoring) {
      updateMetrics()

  };
