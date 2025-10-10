


interface PerformanceMetrics {





}
interface PerformanceProps {

}
const PerformanceDashboard: React.FC<PerformanceProps> = ({ onMetricsUpdate }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0

fps



      // Check for performance alerts


    if (isMonitoring) {



    }

  const checkPerformanceAlerts = useCallback((currentMetrics: PerformanceMetrics) => {

    if (currentMetrics.loadTime > 3000) {

    }
    if (currentMetrics.memoryUsage > 50 * 1024 * 1024) { // 50MB

    }
    if (currentMetrics.fps < 30) {

    }


  const toggleMonitoring = () => {


  const formatBytes = (bytes: number) => {






  const getPerformanceColor = (value: number, thresholds: { good: number; warning: number }) => {




  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
          <Activity className="w-5 h-5" />
          Performance Dashboard
          </h3>
          </h3>
        <button
          onClick={toggleMonitoring}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            isMonitoring
              ? 'bg-red-600 text-white hover:bg-red-700'
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
        </button>
      </div>
      {alerts.length > 0 && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <h4 className="text-red-400 font-semibold">Performance Alerts</h4>
          </div>
          <ul className="space-y-1">
            {alerts.map((alert, index) => (
              <li key={index} className="text-red-300 text-sm">• {alert}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300 text-sm">Load Time</span>
          </div>
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.loadTime, { good: 1000, warning: 2000 })}`}>
            {metrics.loadTime.toFixed(0)}ms
          </div>
          </div>
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Cpu className="w-4 h-4 text-green-400" />
            <span className="text-gray-300 text-sm">Render Time</span>
          </div>
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.renderTime, { good: 16, warning: 33 })}`}>
            {metrics.renderTime.toFixed(2)}ms
          </div>
          </div>
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <MemoryStick className="w-4 h-4 text-purple-400" />
            <span className="text-gray-300 text-sm">Memory Usage</span>
          </div>
          <div className={`text-2xl font-bold ${getPerformanceColor(metrics.memoryUsage, { good: 10 * 1024 * 1024, warning: 30 * 1024 * 1024 })}`}>
            {formatBytes(metrics.memoryUsage)}
          </div>
        </div>
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-orange-400" />
            <span className="text-gray-300 text-sm">FPS</span>
          </div>
          <div className={`text-2xl font-bold ${getPerformanceColor(60 - metrics.fps, { good: 10, warning: 20 })}`}>
            {metrics.fps}
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-400 text-sm">
          {isMonitoring ? 'Monitoring performance metrics...' : 'Click "Start Monitoring" to begin tracking performance'}
        </p>
      </div>
    </div>
  )
          </p>
}
          </p>
export default PerformanceDashboard
          </p>
  </div>
  </h3>
  </div>
  </PerformanceMetrics>
  </PerformanceProps>