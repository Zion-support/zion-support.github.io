'use client';

export default function SelfHealingV2() {
  const [activeIssits, setActiveIssits] = React.useState([]);
  const [healingInProgress, setHealingInProgress] = React.useState(false);
  const [resolutionTime, setResolutionTime] = React.useState(null);

  // Simulate autonomous healing processes
  React.useEffect(() => {
    if (!healingInProgress) return;

    const interval = setInterval(() => {
      const now = new Date();
      const resolution = new Date(Date.now() + 3000); // 3 second mock resolution
      setResolutionTime(now.toLocaleTimeString());
      setActiveIssits(prev => prev.filter(issue => !issue.resolved));
      
      if (prev.length === 0) {
        clearInterval(interval);
        setHealingInProgress(false);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [healingInProgress]);

  const startHealing = () => {
    if (healingInProgress) return;
    setHealingInProgress(true);
    setActiveIssits([
      {
        id: 'issue-001',
        description: 'High memory usage in background workers',
        severity: 'warning',
        resolved: false
      },
      {
        id: 'issue-002',
        description: 'Cache hit rate below optimal threshold',
        severity: 'medium',
        resolved: false
      }
    ]);
    setResolutionTime(null);
    setTimeout(() => {
      setHealingInProgress(false);
      setActiveIssits(prev => prev.map(issue => 
        issue.resolved ? { ...issue, resolved: false } : { ...issue, resolved: true })
      )
    }, 8000);
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'bg-red-500 text-white';
      case 'warning': return 'bg-yellow-500 text-black';
      case 'medium': return 'bg-orange-500 text-black';
      case 'low': return 'bg-green-500 text-white';
      default: return 'bg-gray-300 text-gray-700';
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-indigo-100">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-indigo-800">
            <span>🛡️</span> Self-Healing System v2.0
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Autonomous detection and resolution of system anomalies
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={startHealing}
            disabled={healingInProgress || activeIssits.some(i => !i.resolved)}
            className={`px-4 py-2 rounded bg-indigo-600 text-white transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed ${
              healingInProgress ? 'opacity-70' : ''
            }`}
            aria-disabled={healingInProgress}
          >
            {healingInProgress 
              ? 'Healing...' 
              : 'Initiate Auto-Recovery'
            </button>
        </div>
      </div>

      {healingInProgress && (
        <div className="mt-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-2 mr-2">
              <div className="h-2 rounded-full bg-indigo-500 rounded-full h-2" style={{ width: '40%' }} />
            </div>
            <span className="text-sm text-gray-600">Healing Progress</span>
          </div>
          <div className="mt-2">
            <span className="text-sm text-gray-600">
              Resolving issues automatically without human intervention
            </span>
          </div>
        </div>
      )}

      {activeIssits.length > 0 && (
        <div className="mt-6 bg-yellow-50 rounded-lg p-4 border border-yellow-200">
          <h3 className="font-semibold text-yellow-800 mb-2">
            🚨 Active Issues Requiring Resolution
          </h3>
          <ul className="text-sm text-yellow-700 space-y-1">
            {activeIssits.map(issue => (
              <li key={issue.id} className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full mr-2">
                  <div className={`h-2 rounded-full ${getSeverityColor(issue.severity)}`} style={{ width: '100%' }} />
                </div>
                <div className="ml-2 text-sm text-gray-800">
                  {issue.description}
                  <span className="text-xs text-gray-500 ml-2">
                    ({issue.severity} severity)
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {resolutionTime && (
        <div className="mt-4 p-2 bg-green-50 rounded-lg border border-green-200">
          <h3 className="font-medium text-green-700">
            ✅ Self-Healing Complete at {resolutionTime}
          </h3>
          <p className="text-xs text-green-600">
            Autonomous systems have resolved detected anomalies and restored optimal performance.
          </p>
        </div>
      )}

      <div className="mt-6 bg-gray-50 rounded-lg p-4">
        <h3 className="font-sm text-gray-600">Self-Healing Architecture</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Autonomous anomaly detection across all services</li>
          <li>• Context-aware remediation strategies</li>
          <li>• Automatic resource reallocation</li>
          <li>• Prevention of issue recurrence through pattern learning</li>
          <li>• Seamless integration with PM2 auto-scaling</li>
        </ul>
      </div>
    </div>
  );
}