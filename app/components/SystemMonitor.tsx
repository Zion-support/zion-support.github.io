
interface SystemMonitorProps {
  showDetails?: boolean
  refreshInterval?: number
  className?: string


interface SystemStats {
  cpu: number
  memory: number
  disk: number
  network: number
  battery?: number


const SystemMonitor: React.FC<SystemMonitorProps> = ({
  _showDetails = true,
  refreshInterval = 1000,
  className = '',
}) => {
  const [stats, setStats] = useState<SystemStats>({
    cpu: 0,
    memory: 0,
    disk: 0,
    network: 0,
  })

  useEffect(() => {
    const updateStats = () => {
      // Simulate system stats (in a real app, you'd get these from an API)
      setStats({
        cpu: Math.random() * 100,
        memory: Math.random() * 100,
        disk: Math.random() * 100,
        network: Math.random() * 100,
        battery: Math.random() * 100,
      })
    }

    updateStats()
    const interval = setInterval(updateStats, refreshInterval)

    return () => clearInterval(interval)
  }, [refreshInterval])

  const _getStatusColor = (value: number) => {
    if (value < 50) return 'text-green-500'
    if (value < 80) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getStatusBgColor = (value: number) => {
    if (value < 50) return 'bg-green-500'
    if (value < 80) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (


      <div className="grid grid-cols-2 md:grid-cols-4 gap-4"></div>
        {/* CPU */
        <div className="text-center"></div>
          <div className="flex items-center justify-center mb-2"></div>
            <Cpu className="w-5 h-5 text-blue-500 mr-1" />
            <span className="text-sm font-medium text-gray-700">CPU</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {stats.cpu.toFixed(0)}%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2"></div>
            <div
              className={`h-2 rounded-full ${getStatusBgColor(stats.cpu)}`
              style={{ width: `${stats.cpu}%` }
            ></div>
          </div>
        </div>

        {/* Memory */
        <div className="text-center"></div>
          <div className="flex items-center justify-center mb-2"></div>
            <HardDrive className="w-5 h-5 text-green-500 mr-1" />
            <span className="text-sm font-medium text-gray-700">Memory</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {stats.memory.toFixed(0)}%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2"></div>
            <div
              className={`h-2 rounded-full ${getStatusBgColor(stats.memory)}`
              style={{ width: `${stats.memory}%` }
            ></div>
          </div>
        </div>

        {/* Disk */
        <div className="text-center"></div>
          <div className="flex items-center justify-center mb-2"></div>
            <HardDrive className="w-5 h-5 text-purple-500 mr-1" />
            <span className="text-sm font-medium text-gray-700">Disk</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {stats.disk.toFixed(0)}%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2"></div>
            <div
              className={`h-2 rounded-full ${getStatusBgColor(stats.disk)}`
              style={{ width: `${stats.disk}%` }
            ></div>
          </div>
        </div>

        {/* Network */
        <div className="text-center"></div>
          <div className="flex items-center justify-center mb-2"></div>
            <Wifi className="w-5 h-5 text-orange-500 mr-1" />
            <span className="text-sm font-medium text-gray-700">Network</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {stats.network.toFixed(0)}%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2"></div>
            <div
              className={`h-2 rounded-full ${getStatusBgColor(stats.network)}`
              style={{ width: `${stats.network}%` }
            ></div>
          </div>
        </div>
      </div>

      {/* Battery (if available) */
      {stats.battery !== undefined && (
        <div className="mt-4 pt-4 border-t"></div>
          <div className="flex items-center justify-between"></div>
            <div className="flex items-center"></div>
              <Battery className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">Battery</span>
            </div>
            <div className="flex items-center"></div>
              <span className="text-sm font-medium text-gray-900 mr-2">
                {stats.battery.toFixed(0)}%
              </span>
              <div className="w-16 bg-gray-200 rounded-full h-2"></div>
                <div
                  className={`h-2 rounded-full ${getStatusBgColor(stats.battery)}`
                  style={{ width: `${stats.battery}%` }
                ></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

    </div>
  )
}

}

export default SystemMonitor;}