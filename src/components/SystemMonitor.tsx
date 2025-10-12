
export default function SystemMonitor() {
  const [isMonitoring, setIsMonitoring] = useState(false);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-white mb-4">System Monitor</h2>
      <div className="flex items-center mb-4">
        <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <span className="ml-2 text-white">
          {isMonitoring ? 'Monitoring' : 'Stopped'}
        </span>
      </div>
      <p className="text-gray-300">
        System monitoring dashboard will be implemented here.
      </p>
    </div>
  );
}