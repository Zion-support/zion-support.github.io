import {  import { motion, AnimatePresence  } from 'framer-motion';
 from 'lucide-react';

interface SecurityThreat {
  id: string;
  type: 'critical' | 'high' | 'medium' | 'low';
  severity: number;
  description: string;
  source: string;
  timestamp: Date;
  status: 'active' | 'resolved' | 'investigating';
  affectedSystems: string[];
  recommendations: string[]}

interface VulnerabilityAssessment {
  id: string;
  category: 'network' | 'application' | 'infrastructure' | 'data';
  risk: 'critical' | 'high' | 'medium' | 'low';
  score: number;
  description: string;
  cveId?: string;
  affectedComponents: string[];
  remediation: string;
  estimatedTime: string}
interface ComplianceStatus {
  framework: string;
  status: 'compliant' | 'non-compliant' | 'partial';
  score: number;
  lastAudit: Date;
  nextAudit: Date;
  requirements: {

    total: number;
    compliant: number;
    nonCompliant: number;
    pending: number}}
interface SecurityMonitoringSystemProps {
  // Add your props here

  enabled?: boolean;
  showRealTime?: boolean;
  autoScan?: boolean;
  onThreatDetected?: threat: SecurityThreat void;
export function SecurityMonitoringSystem({

  enabled = true,
  showRealTime = true,
  autoScan = true,
  onThreatDetected}: SecurityMonitoringSystemProps) {

  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [threats, setThreats] = useState<SecurityThreat[]>([]);
  const [vulnerabilities, setVulnerabilities] = useState<
    VulnerabilityAssessment[]
  >([]);
  const [complianceStatus, setComplianceStatus] = useState<ComplianceStatus[]>(
    []
  );
  const [selectedView, setSelectedView] = useState<'
    'threats' | 'vulnerabilities' | 'compliance''
  >('threats');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [securityScore, setSecurityScore] = useState(0);
  const [targetScore, setTargetScore] = useState(95);

  // Generate sample security threats

    const newThreats: SecurityThreat[] = threatTypes.map((type, index) => ({

      id: `threat-${index}`,
      type: type as any,
      severity: Math.floor(Math.random() * 100) + 1,`
      description: `Security ${type} threat detected from ${threatSources[Math.floor(Math.random() * threatSources.length)]}`,
      source: threatSources[Math.floor(Math.random() * threatSources.length)],
      timestamp: new Date(Date.now() - Math.random() * 86400000),
      status:
        Math.random() > 0.7'
          ? 'resolved'
          : Math.random() > 0.5'
            ? 'investigating''
            : 'active',
      affectedSystems: systems.slice(0, Math.floor(Math.random() * 3) + 1),
      recommendations: ['
        'Implement additional authentication layers',Update security policies',Conduct security training',Review access controls',
      ]}));

    setThreats(newThreats)}, []);

  // Generate vulnerability assessments

    const newVulnerabilities: VulnerabilityAssessment[] = categories.map()
      (category, index) => ({
`
        id: `vuln-${index}`,
        category: category as any,
        risk: risks[Math.floor(Math.random() * risks.length)] as any,
        score: Math.floor(Math.random() * 10) + 1,`
        description: `${category} vulnerability detected in ${components[Math.floor(Math.random() * components.length)]}`,`
        cveId: `CVE-2025-${Math.floor(Math.random() * 9999)
          .toString()'`
          .padStart(4,0')}`,
        affectedComponents: components.slice()
          0,
          Math.floor(Math.random() * 2) + 1
        ),`
        remediation: `Update ${category} security configurations and apply latest patches`,`
        estimatedTime: `${Math.floor(Math.random() * 4) + 1} hours`})
    );

    setVulnerabilities(newVulnerabilities)}, []);

  // Generate compliance status
  
    const newCompliance: ComplianceStatus[] = frameworks.map()
      (framework, index) => {

        return {

          framework,
          status:
            score >= 95'
              ? 'compliant'
              : score >= 80'
                ? 'partial''
                : 'non-compliant',
          score,
          lastAudit: new Date(Date.now() - Math.random() * 2592000000),
          nextAudit: new Date(Date.now() + Math.random() * 2592000000),
          requirements: {

            total,
            compliant,
            nonCompliant: total - compliant,
            pending: Math.floor(Math.random() * 10)}}}
    );

    setComplianceStatus(newCompliance)}, []);
  // Start security scan
  
    setScanComplete(false);

    // Simulate scan process
    setTimeout(() => {
      generateSecurityThreats();
      generateVulnerabilities();
      generateComplianceStatus();
      setIsScanning(false);
      setScanComplete(true);

      // Calculate overall security score

      setSecurityScore(overallScore)}, 3000)}, [generateSecurityThreats,
    generateVulnerabilities,
    generateComplianceStatus,
    complianceStatus,
    threats,
    vulnerabilities,
  ]);
  // Auto-scan when component opens
  useEffect(() => {
    if(autoScan && isOpen && !scanComplete) {

      startSecurityScan()}
  }, [autoScan, isOpen, scanComplete, startSecurityScan]) ;
  // Setup real - time updates
  useEffect(() => {
    if(showRealTime && isOpen && scanComplete) {

      scanIntervalRef.current = setInterval(() => {
        generateSecurityThreats();
        generateVulnerabilities();
        generateComplianceStatus()}, 60000); // Update every minute

      return () => {
        if(scanIntervalRef.current) {

          clearInterval(scanIntervalRef.current)}
      }}
  }, [showRealTime,
    isOpen,
    scanComplete,
    generateSecurityThreats,
    generateVulnerabilities,
    generateComplianceStatus,
  ]);

  // Get threat color
  
    return colors[type as keyof typeof colors] || colors.low};

  // Get status icon
  const getStatusIcon = (status: string) => {

    const icons = {

      active: <AlertTriangle className="w-4 h-4 text-red-500"  />,"
      investigating: <Eye className="w-4 h-4 text-yellow-500"  />,"
      resolved: <CheckCircle className="w-4 h-4 text-green-500"  />};"
    return icons[status as keyof typeof icons] || <Info className="w-4 h-4"  />};

  // Get compliance color
  
    return colors[status as keyof typeof colors] || colors.partial};
  if(!enabled) return null;

  return ()
    <>
      {/* Floating Security Monitoring Button */}
      <motion.button
        onClick={() => setIsOpen(true)}"
        className="fixed bottom-6 right-48 z-50 bg-gradient-to-r from-red-600 to-orange-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >"
        <Shield className="w-6 h-6"  />"        <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
      </motion.button>

      {/* Security Monitoring Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div`
              className={`bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden ${isFullscreen ? 'w-full h-full' : 'w-full max-w-7xl max-h-[90vh]'`
              }`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Header */}"
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">"
                <div className="flex items-center space-x-3">"
                  <Shield className="w-8 h-8 text-red-600"  />
                  <div>"                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Security Monitoring System
                    </h2>"
                    <p className="text-gray-600 dark:text-gray-400">
                      Real-time threat detection and security compliance
                      monitoring
                    </p>
                  </div>
                </div>
"
                <div className="flex items-center space-x-2">
                  <button
                    onClick={startSecurityScan}
                    disabled={isScanning}"
                    className="p-2 text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
                  >
                    <RefreshCw'`
                      className={`w-5 h-5 ${isScanning ? 'animate-spin' : ''}`}
                    />                  </button>

                  <button
                    onClick={() => setIsFullscreen(!isFullscreen)}"
                    className="p-2 text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
                  >
                    {isFullscreen ? ("
                      <Minimize2 className="w-5 h-5" />
                    ) : ("
                      <Maximize2 className="w-5 h-5" />
                    )}
                  </button>

                  <button
                    onClick={() => setIsOpen(false)}"
                    className="p-2 text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
                  >"
                    <X className="w-5 h-5"  />                  </button>
                </div>
              </div>

              {/* Content */}"
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                {isScanning ? ("
                  <div className="text-center py-12">"
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-600 mx-auto mb-4"></div>"
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Security scan in progress...
                    </h3>"
                    <p className="text-gray-600 dark:text-gray-400">
                      Analyzing systems for threats and vulnerabilities
                    </p>
                  </div>
                ) : scanComplete ? ("
                  <div className="space-y-6">
                    {/* Overall Security Score */}"
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-red-200 dark:border-red-700">"
                      <div className="flex items-center justify-between mb-4">"
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Overall Security Score
                        </h3>"
                        <Shield className="w-6 h-6 text-red-600"  />                      </div>
"
                      <div className="flex items-center space-x-6">"
                        <div className="text-center">
                          <div`
                            className={`text-4xl font-bold mb-2 ${securityScore >= 90'
                                ? 'text-green-600'
                                : securityScore >= 70'
                                  ? 'text-yellow-600''
                                  : 'text-red-600'`
                            }`}
                          >
                            {securityScore}/100
                          </div>"
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Security Score
                          </div>
                        </div>
"
                        <div className="flex-1">"
                          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                            <span>Target: {targetScore}/100</span>
                            <span>
                              {Math.round((securityScore / targetScore) * 100)}%
                            </span>
                          </div>"
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                            <div`
                              className={`h-3 rounded-full transition-all duration-500 ${securityScore >= 90'
                                  ? 'bg-green-500'
                                  : securityScore >= 70'
                                    ? 'bg-yellow-500''
                                    : 'bg-red-500'`
                              }`}
                              style={{
`
                                width: `${Math.min((securityScore / targetScore) * 100, 100)}%`}}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Tabs */}"
                    <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                      {[{

                          key: 'threats',
                          label: 'Threats',
                          icon: AlertTriangle,
                          count: threats.length},
                        {

                          key: 'vulnerabilities',
                          label: 'Vulnerabilities',
                          icon: Zap,
                          count: vulnerabilities.length},
                        {

                          key: 'compliance',
                          label: 'Compliance',
                          icon: CheckCircle,
                          count: complianceStatus.length},
                      ].map(({ key, label, icon: Icon, count }) => (
                        <button
                          key={key}
                          onClick={() => setSelectedView(key as any)}`
                          className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${selectedView === key'
                              ? 'bg-white dark:bg-gray-700 text-red-600 dark:text-red-400 shadow-sm''
                              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'`
                          }`}
                        >"
                          <Icon className="w-4 h-4"  />
                          <span>{label}</span>"                          <span className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                            {count}
                          </span>
                        </button>) ) }
                    </div>

                    {/* Threats View */}
                    {selectedView === 'threats' && ("
                      <div className="space-y-4">"
                        <div className="flex items-center justify-between">"
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Active Security Threats
                          </h3>
                          <button
                            onClick={() => setShowAdvanced(!showAdvanced)}"
                            className="px-3 py-1 text-sm bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                          >
                            {showAdvanced ? 'Hide' : 'Show'} Advanced
                          </button>
                        </div>
"
                        <div className="grid gap-4">
                          {threats.map((threat, index) => (
                            <motion.div
                              key={threat.id}"
                              className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                              whileHover={{ y: -2 }}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >"
                              <div className="flex items-start justify-between">"
                                <div className="flex-1">"
                                  <div className="flex items-center space-x-3 mb-2">
                                    <div`
                                      className={`px-2 py-1 rounded-full text-xs font-medium ${getThreatColor(threat.type)}`}
                                    >
                                      {threat.type.toUpperCase()}
                                    </div>"
                                    <div className="flex items-center space-x-2">
                                      {getStatusIcon(threat.status)}"
                                      <span className="text-sm text-gray-500 dark:text-gray-400">
                                        {threat.status}
                                      </span>
                                    </div>
                                  </div>
"
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                                    {threat.description}
                                  </h4>
"
                                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                    <span>Source: {threat.source}</span>
                                    <span>Severity: {threat.severity}/100</span>
                                    <span>
                                      Affected: {threat.affectedSystems.length}{' '}
                                      systems
                                    </span>
                                  </div>

                                  {showAdvanced && ("
                                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">"
                                      <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                                        Recommendations:
                                      </h5>"
                                      <ul className="space-y-1">
                                        {threat.recommendations.map()
                                          (rec, idx) => (
                                            <li
                                              key={idx}"
                                              className="text-sm text-gray-600 dark:text-gray-400 flex items-center space-x-2"
                                            >"
                                              <CheckCircle className="w-3 h-3 text-green-500"  />
                                              <span>{rec}</span>
                                            </li>
                                          )
                                        )}                                      </ul>
                                    </div>) }
                                </div>
"
                                <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                                  <div>
                                    {threat.timestamp.toLocaleTimeString()}
                                  </div>
                                  <div>
                                    {threat.timestamp.toLocaleDateString()}
                                  </div>
                                </div>
                              </div>
                            </motion.div>) ) }
                        </div>
                      </div>) }

                    {/* Vulnerabilities View */}
                    {selectedView === 'vulnerabilities' && ("
                      <div className="space-y-4">"
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Vulnerability Assessment
                        </h3>
"
                        <div className="grid gap-4">
                          {vulnerabilities.map((vuln, index) => (
                            <motion.div
                              key={vuln.id}"
                              className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                              whileHover={{ y: -2 }}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >"
                              <div className="flex items-start justify-between">"
                                <div className="flex-1">"
                                  <div className="flex items-center space-x-3 mb-2">
                                    <div`
                                      className={`px-2 py-1 rounded-full text-xs font-medium ${getThreatColor(vuln.risk)}`}
                                    >
                                      {vuln.risk.toUpperCase()}
                                    </div>"
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                      CVSS: {vuln.score}/10
                                    </div>
                                  </div>
"
                                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                                    {vuln.description}
                                  </h4>
"
                                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                    <span>Category: {vuln.category}</span>
                                    <span>CVE: {vuln.cveId}</span>
                                    <span>
                                      Time to fix: {vuln.estimatedTime}
                                    </span>
                                  </div>
"
                                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">"
                                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                                      Remediation:
                                    </h5>"
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                      {vuln.remediation}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </motion.div>) ) }
                        </div>
                      </div>) }

                    {/* Compliance View */}
                    {selectedView === 'compliance' && ("
                      <div className="space-y-4">"
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Compliance Status
                        </h3>
"
                        <div className="grid gap-4">
                          {complianceStatus.map((compliance, index) => (
                            <motion.div
                              key={compliance.framework}"
                              className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                              whileHover={{ y: -2 }}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >"
                              <div className="flex items-center justify-between mb-4">"
                                <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                                  {compliance.framework}
                                </h4>
                                <div`
                                  className={`px-3 py-1 rounded-full text-sm font-medium ${getComplianceColor(compliance.status)}`}
                                >
                                  {compliance.status.replace('-',)}
                                </div>
                              </div>
"
                              <div className="grid grid-cols-2 gap-4 mb-4">"
                                <div className="text-center">"
                                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {compliance.score}%
                                  </div>"
                                  <div className="text-sm text-gray-500 dark:text-gray-400">
                                    Compliance Score
                                  </div>
                                </div>
"
                                <div className="text-center">"
                                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {compliance.requirements.compliant}/
                                    {compliance.requirements.total}
                                  </div>"
                                  <div className="text-sm text-gray-500 dark:text-gray-400">
                                    Requirements Met
                                  </div>
                                </div>
                              </div>
"
                              <div className="space-y-2">"
                                <div className="flex items-center justify-between text-sm">"
                                  <span className="text-gray-600 dark:text-gray-400">
                                    Last Audit:
                                  </span>"
                                  <span className="text-gray-900 dark:text-white">
                                    {compliance.lastAudit.toLocaleDateString()}
                                  </span>
                                </div>"
                                <div className="flex items-center justify-between text-sm">"
                                  <span className="text-gray-600 dark:text-gray-400">
                                    Next Audit:
                                  </span>"
                                  <span className="text-gray-900 dark:text-white">
                                    {compliance.nextAudit.toLocaleDateString()}
                                  </span>
                                </div>
                              </div>
                            </motion.div>) ) }
                        </div>
                      </div>) }

                    {/* Action Buttons */}"
                    <div className="flex items-center justify-center space-x-4 pt-6">"
                      <button className="flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">"
                        <Download className="w-4 h-4"  />
                        <span>Export Report</span>
                      </button>
"
                      <button className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">"
                        <Shield className="w-4 h-4"  />                        <span>Run Full Scan</span>
                      </button>
"
                      <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">"
                        <Share2 className="w-4 h-4" />
                        <span>Share Report</span>
                      </button>
                    </div>
                  </div>
                ) : ("
                  <div className="text-center py-12">"
                    <Shield className="w-16 h-16 text-red-600 mx-auto mb-4"  />"                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Ready to monitor security?
                    </h3>"
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Click the scan button to start security monitoring
                    </p>
                    <button
                      onClick={startSecurityScan}"
                      className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Start Security Scan
                    </button>
                  </div>) }
              </div>
            </motion.div>
          </motion.div>) }
      </AnimatePresence>
    </>
  )}
'"`