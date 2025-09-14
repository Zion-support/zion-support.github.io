"use client";
import React{ useStateuseEffect } from 'react';
ShieldAlertTriangleCheckCircleLockEyeZapGlobeDatabase

const SecurityMonitoringSystem = () => {
  const [securityStatusetSecurityStatus] = useState({
    overallScore: 0,
    threatsBlocked: 0,
    vulnerabilitiesFixed: 0,
    securityEvents: [],
    complianceStatus: 'excellent',
    lastScan: new Date(),
    activeThreats: 0,
    protectedAssets: 0
  });

  const [isScanningsetIsScanning] = useState(false);

  useEffect(() => {
    // Simulate security data loading
    const loadSecurityData = () => {
      setSecurityStatus({
        overallScore: 98,
        threatsBlocked: 1247,
        vulnerabilitiesFixed: 23,
        securityEvents: [
          { type: 'success'message: 'SSL Certificate renewed'time: '2 hours ago' },
          { type: 'info'message: 'Security scan completed'time: '4 hours ago' },
          { type: 'success'message: 'Firewall rules updated'time: '6 hours ago' },
          { type: 'warning'message: 'Unusual traffic pattern detected'time: '8 hours ago' }
        ],
        complianceStatus: 'excellent',
        lastScan: new Date(),
        activeThreats: 0,
        protectedAssets: 156
      });
    };

    loadSecurityData();
  }[]);

  const runSecurityScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setSecurityStatus(prev => ({
        ...prev,
        overallScore: 99,
        threatsBlocked: prev.threatsBlocked + 3,
        lastScan: new Date()
      }));
      setIsScanning(false);
    }3000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 95) return 'text-green-400';
    if (score >= 80) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'error': return <AlertTriangle className="w-4 h-4 text-red-400" />;
      default: return <Eye className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Advanced Security Monitoring
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enterprise-Grade
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"> Security</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive security monitoring and threat protection to keep your data safe and secure
          </p>
        </div>

        {/* Security Score */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12">
          <div className="text-center">
            <div className="text-6xl font-bold mb-4">
              <span className={getScoreColor(securityStatus.overallScore)}>{securityStatus.overallScore}</span>
              <span className="text-white text-2xl">/100</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Security Score</h3>
            <p className="text-gray-300 mb-6">
              {securityStatus.overallScore >= 95 ? 'Excellent security posture!' : 
               securityStatus.overallScore >= 80 ? 'Good security with room for improvement' : 
               'Security needs immediate attention'}
            </p>
            <button
              onClick={runSecurityScan}
              disabled={isScanning}
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 disabled:opacity-50"
            >
              {isScanning ? 'Scanning...' : 'Run Security Scan'}
            </button>
          </div>
        </div>

        {/* Security Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <Shield className="w-8 h-8 text-green-400" />
              <span className="text-2xl font-bold text-white">{securityStatus.threatsBlocked.toLocaleString()}</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Threats Blocked</h3>
            <p className="text-gray-300 text-sm">Malicious attempts prevented</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <CheckCircle className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">{securityStatus.vulnerabilitiesFixed}</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Vulnerabilities Fixed</h3>
            <p className="text-gray-300 text-sm">Security issues resolved</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <AlertTriangle className="w-8 h-8 text-red-400" />
              <span className="text-2xl font-bold text-white">{securityStatus.activeThreats}</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Active Threats</h3>
            <p className="text-gray-300 text-sm">Current security alerts</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <Database className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">{securityStatus.protectedAssets}</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Protected Assets</h3>
            <p className="text-gray-300 text-sm">Secured resources</p>
          </div>
        </div>

        {/* Security Events */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Recent Security Events</h3>
          
          <div className="space-y-4">
            {securityStatus.securityEvents.map((eventindex) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                <div className="flex items-center">
                  {getEventIcon(event.type)}
                  <div className="ml-4">
                    <div className="text-white font-semibold">{event.message}</div>
                    <div className="text-gray-300 text-sm">{event.time}</div>
                  </div>
                </div>
                <div className="text-gray-400 text-sm">
                  {event.type === 'success' ? 'Resolved' : 
                   event.type === 'warning' ? 'Monitoring' : 'Info'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">End-to-End Encryption</h4>
              <p className="text-gray-300">All data encrypted in transit and at rest using AES-256</p>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Real-time Monitoring</h4>
              <p className="text-gray-300">24/7 threat detection and automated response systems</p>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Global Compliance</h4>
              <p className="text-gray-300">GDPRCCPASOC 2and ISO 27001 compliant</p>
            </div>
          </div>
        </div>

        {/* Compliance Status */}
        <div className="mt-12 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Compliance Status</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-white font-semibold mb-1">GDPR</div>
              <div className="text-gray-300 text-sm">Data Protection</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-white font-semibold mb-1">CCPA</div>
              <div className="text-gray-300 text-sm">Privacy Rights</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-white font-semibold mb-1">SOC 2</div>
              <div className="text-gray-300 text-sm">Security Controls</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-white font-semibold mb-1">ISO 27001</div>
              <div className="text-gray-300 text-sm">Information Security</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityMonitoringSystem;