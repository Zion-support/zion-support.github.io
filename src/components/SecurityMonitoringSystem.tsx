import React, { useState, useEffect, useCallback, useRef } from 'react';
export function SecurityMonitoringSystem ({
import {
import { motion, AnimatePresence } from 'framer - motion';

  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  Lock,
  Activity,
  Zap,
  Target,
  AlertCircle,
  Info,
  Settings,
  RefreshCw,
  Download,
  Share2,
  Maximize2,
  Minimize2,
  X,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Clock,
  Database,
  Network,
  Server,
  Smartphone,
  Globe,
} from 'lucide - react';

interface SecurityThreat {
  id: string;
  type: 'critical' | 'high' | 'medium' | 'low';
  severity: number;
  description: string;
  source: string;
  timestamp: Date;
  status: 'active' | 'resolved' | 'investigating';
  affectedSystems: string[];
  recommendations: string[];
}

interface VulnerabilityAssessment {
  id: string;
  category: 'network' | 'application' | 'infrastructure' | 'data';
  risk: 'critical' | 'high' | 'medium' | 'low';
  score: number;
  description: string;
  cveId?: string;
  affectedComponents: string[];
  remediation: string;
  estimatedTime: string;
}

interface ComplianceStatus {
  framework: string;
  status: 'compliant' | 'non - compliant' | 'partial';
  score: number;
  lastAudit: Date;
  nextAudit: Date;
  requirements: {
    total: number;
    compliant: number;
    nonCompliant: number;
    pending: number;
  };
}

interface SecurityMonitoringSystemProps {
  enabled?: boolean;
  showRealTime?: boolean;
  autoScan?: boolean;
  onThreatDetected?: (threat: SecurityThreat) => void;
}

  enabled = true,
  showRealTime = true,
  autoScan = true,
  onThreatDetected,
}: SecurityMonitoringSystemProps) {
  const [isOpen, setIsOpen] = useState (false) ;
  const [isFullscreen, setIsFullscreen] = useState (false) ;
  const [isScanning, setIsScanning] = useState (false) ;
  const [scanComplete, setScanComplete] = useState (false) ;
  const [threats, setThreats] = useState < SecurityThreat[]> ([]) ;
  const [vulnerabilities, setVulnerabilities] = useState < VulnerabilityAssessment[]
  > ([]) ;
  const [complianceStatus, setComplianceStatus] = useState < ComplianceStatus[]> ([]) ;
  const [selectedView, setSelectedView] = useState<
    'threats' | 'vulnerabilities' | 'compliance'
  > ('threats') ;
  const [showAdvanced, setShowAdvanced] = useState (false) ;
  const [securityScore, setSecurityScore] = useState (0) ;
  const [targetScore, setTargetScore] = useState (95) ;

  const scanIntervalRef = useRef < NodeJS.Timeout | null> (null) ;

  // Generate sample security threats
  const generateSecurityThreats = useCallback ( () => {
    const threatTypes = ['critical', 'high', 'medium', 'low'];
    const threatSources = [
      'External Attack',
      'Internal Breach',
      'Malware',
      'Phishing',
      'DDoS',
    ];
    const systems = [
      'Web Server',
      'Database',
      'API Gateway',
      'Load Balancer',
      'CDN',
    ];

    const newThreats: SecurityThreat[] = threatTypes.map ( (type, index) => ({
      id: `threat-${index}`,
      type: type as any,
      severity: Math.floor (Math.random () * 100) + 1,
      description: `Security ${type} threat detected from ${threatSources[Math.floor (Math.random () * threatSources.length) ]}`,
      source: threatSources[Math.floor (Math.random () * threatSources.length) ],
      timestamp: new Date (Date.now () - Math.random () * 86400000) ,
      status:
        Math.random () > 0.7
          ? 'resolved'
          : Math.random () > 0.5
            ? 'investigating'
            : 'active',
      affectedSystems: systems.slice (0, Math.floor (Math.random () * 3) + 1) ,
      recommendations: [
        'Implement additional authentication layers',
        'Update security policies',
        'Conduct security training',
        'Review access controls',
      ],
    }) ) ;

    setThreats (newThreats) ;
  }, []) ;

  // Generate vulnerability assessments
  const generateVulnerabilities = useCallback ( () => {
    const categories = ['network', 'application', 'infrastructure', 'data'];
    const risks = ['critical', 'high', 'medium', 'low'];
    const components = [
      'Firewall',
      'Web App',
      'Database',
      'API',
      'Load Balancer',
    ];

    const newVulnerabilities: VulnerabilityAssessment[] = categories.map ( (category, index) => ({
        id: `vuln-${index}`,
        category: category as any,
        risk: risks[Math.floor (Math.random () * risks.length) ] as any,
        score: Math.floor (Math.random () * 10) + 1,
        description: `${category} vulnerability detected in ${components[Math.floor (Math.random () * components.length) ]}`,
        cveId: `CVE - 2025-${Math.floor (Math.random () * 9999) .toString () .padStart (4, '0') }`,
        affectedComponents: components.slice (0,
          Math.floor (Math.random () * 2) + 1) ,
        remediation: `Update ${category} security configurations and apply latest patches`,
        estimatedTime: `${Math.floor (Math.random () * 4) + 1} hours`,
      }) ) ;

    setVulnerabilities (newVulnerabilities) ;
  }, []) ;

  // Generate compliance status
  const generateComplianceStatus = useCallback ( () => {
    const frameworks = ['SOC 2', 'ISO 27001', 'GDPR', 'HIPAA', 'PCI DSS'];

    const newCompliance: ComplianceStatus[] = frameworks.map ( (framework, index) => {
        const score = Math.floor (Math.random () * 30) + 70;
        const total = Math.floor (Math.random () * 50) + 100;
        const compliant = Math.floor ( (score / 100) * total) ;

        return {
          framework,
          status:
            score >= 95
              ? 'compliant'
              : score >= 80
                ? 'partial'
                : 'non - compliant',
          score,
          lastAudit: new Date (Date.now () - Math.random () * 2592000000) ,
          nextAudit: new Date (Date.now () + Math.random () * 2592000000) ,
          requirements: {
            total,
            compliant,
            nonCompliant: total - compliant,
            pending: Math.floor (Math.random () * 10) ,
          },
        };
      }) ;

    setComplianceStatus (newCompliance) ;
  }, []) ;

  // Start security scan
  const startSecurityScan = useCallback ( () => {
    setIsScanning (true) ;
    setScanComplete (false) ;

    // Simulate scan process
    setTimeout ( () => {
      generateSecurityThreats () ;
      generateVulnerabilities () ;
      generateComplianceStatus () ;
      setIsScanning (false) ;
      setScanComplete (true) ;

      // Calculate overall security score
      const avgCompliance = complianceStatus.reduce ( (sum, item) => sum + item.score, 0) /
        complianceStatus.length;
      const threatScore = Math.max (0,
        100 - threats.filter (t => t.status === 'active') .length * 10) ;
      const vulnScore = Math.max (0,
        100 - vulnerabilities.filter (v => v.risk === 'critical' || v.risk === 'high') .length * 15) ;

      const overallScore = Math.round ( (avgCompliance + threatScore + vulnScore) / 3) ;
      setSecurityScore (overallScore) ;
    }, 3000) ;
  }, [
    generateSecurityThreats,
    generateVulnerabilities,
    generateComplianceStatus,
    complianceStatus,
    threats,
    vulnerabilities,
  ]) ;

  // Auto - scan when component opens
  useEffect ( () => {
    if (autoScan && isOpen && !scanComplete) {
      startSecurityScan () ;
    }
  }, [autoScan, isOpen, scanComplete, startSecurityScan]) ;

  // Setup real - time updates
  useEffect ( () => {
    if (showRealTime && isOpen && scanComplete) {
      scanIntervalRef.current = setInterval ( () => {
        generateSecurityThreats () ;
        generateVulnerabilities () ;
        generateComplianceStatus () ;
      }, 60000) ; // Update every minute

      return () => {
        if (scanIntervalRef.current) {
          clearInterval (scanIntervalRef.current) ;
        }
      };
    }
  }, [
    showRealTime,
    isOpen,
    scanComplete,
    generateSecurityThreats,
    generateVulnerabilities,
    generateComplianceStatus,
  ]) ;

  // Get threat color
  const getThreatColor = (type: string) => {
    const colors = {
      critical: 'text - red - 600 bg - red - 100 dark:bg - red - 900 / 30 dark:text - red - 400',
      high: 'text - orange - 600 bg - orange - 100 dark:bg - orange - 900 / 30 dark:text - orange - 400',
      medium:
        'text - yellow - 600 bg - yellow - 100 dark:bg - yellow - 900 / 30 dark:text - yellow - 400',
      low: 'text - green - 600 bg - green - 100 dark:bg - green - 900 / 30 dark:text - green - 400',
    };
    return colors[type as keyof typeof colors] || colors.low;
  };

  // Get status icon
  const getStatusIcon = (status: string) => {
    const icons = {
      active: <AlertTriangle className="w - 4 h - 4 text - red - 500" />,
      investigating: <Eye className="w - 4 h - 4 text - yellow - 500" />,
      resolved: <CheckCircle className="w - 4 h - 4 text - green - 500" />,
    };
    return icons[status as keyof typeof icons] || <Info className="w - 4 h - 4" />;
  };

  // Get compliance color
  const getComplianceColor = (status: string) => {
    const colors = {
      compliant:
        'text - green - 600 bg - green - 100 dark:bg - green - 900 / 30 dark:text - green - 400',
      partial:
        'text - yellow - 600 bg - yellow - 100 dark:bg - yellow - 900 / 30 dark:text - yellow - 400',
      'non - compliant':
        'text - red - 600 bg - red - 100 dark:bg - red - 900 / 30 dark:text - red - 400',
    };
    return colors[status as keyof typeof colors] || colors.partial;
  };

  if (!enabled) return null;

  return (<>
      {/* Floating Security Monitoring Button */}
      <motion.button
        onClick={ () => setIsOpen (true) }
        className="fixed bottom - 6 right - 48 z - 50 bg - gradient - to - r from - red - 600 to - orange - 600 text - white p - 4 rounded - full shadow - lg hover:shadow - xl transition - all duration - 300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <Shield className="w - 6 h - 6" />
        <div role="button" className="absolute - top - 2 -right - 2 w - 3 h - 3 bg - green - 500 rounded - full animate - pulse" />
      </motion.button>

      {/* Security Monitoring Modal */}
      <AnimatePresence>
        {isOpen && (<motion.div
            className="fixed inset - 0 z - 50 flex items - center justify - center p - 4 bg - black / 50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={`bg - white dark:bg - gray - 900 rounded - 2xl shadow - 2xl overflow - hidden ${
                isFullscreen ? 'w - full h - full' : 'w - full max - w-7xl max - h-[90vh]'
              }`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Header */}
              <div role="button" className="flex items - center justify - between p - 6 border - b border - gray - 200 dark:border - gray - 700 bg - gradient - to - r from - red - 50 to - orange - 50 dark:from - red - 900 / 20 dark:to - orange - 900 / 20">
                <div role="button" className="flex items - center space - x-3">
                  <Shield className="w - 8 h - 8 text - red - 600" />
                  <div>
                    <h2 className="text - 2xl font - bold text - gray - 900 dark:text - white">
                      Security Monitoring System
                    </h2>
                    <p className="text - gray - 600 dark:text - gray - 400">
                      Real - time threat detection and security compliance
                      monitoring
                    </p>
                  </div>
                </div>

                <div role="button" className="flex items - center space - x-2">
                  <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" onClick={startSecurityScan}
                    disabled={isScanning}
                    className="p - 2 text - gray - 600 hover:text - red - 600 dark:text - gray - 400 dark:hover:text - red - 400 transition - colors"
                  >
                    <RefreshCw
                      className={`w - 5 h - 5 ${isScanning ? 'animate - spin' : ''}`}
                    />
                  </button>

                  <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" onClick={ () => setIsFullscreen (!isFullscreen) }
                    className="p - 2 text - gray - 600 hover:text - red - 600 dark:text - gray - 400 dark:hover:text - red - 400 transition - colors"
                  >
                    {isFullscreen ? (<Minimize2 className="w - 5 h - 5" />) : (<Maximize2 className="w - 5 h - 5" />) }
                  </button>

                  <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" onClick={ () => setIsOpen (false) }
                    className="p - 2 text - gray - 600 hover:text - red - 600 dark:text - gray - 400 dark:hover:text - red - 400 transition - colors"
                  >
                    <X className="w - 5 h - 5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div role="button" className="p - 6 overflow - y-auto max - h-[calc (90vh - 200px) ]">
                {isScanning ? (<div role="button" className="text - center py - 12">
                    <div role="button" className="animate - spin rounded - full h - 16 w - 16 border - b-2 border - red - 600 mx - auto mb - 4"></div>
                    <h3 className="text - xl font - semibold text - gray - 900 dark:text - white mb - 2">
                      Security scan in progress...
                    </h3>
                    <p className="text - gray - 600 dark:text - gray - 400">
                      Analyzing systems for threats and vulnerabilities
                    </p>
                  </div>) : scanComplete ? (<div role="button" className="space - y-6">
                    {/* Overall Security Score */}
                    <div role="button" className="bg - gradient - to - r from - red - 50 to - orange - 50 dark:from - red - 900 / 20 dark:to - orange - 900 / 20 rounded - xl p - 6 border border - red - 200 dark:border - red - 700">
                      <div role="button" className="flex items - center justify - between mb - 4">
                        <h3 className="text - lg font - semibold text - gray - 900 dark:text - white">
                          Overall Security Score
                        </h3>
                        <Shield className="w - 6 h - 6 text - red - 600" />
                      </div>

                      <div role="button" className="flex items - center space - x-6">
                        <div role="button" className="text - center">
                          <div role="button" className={`text - 4xl font - bold mb - 2 ${
                              securityScore >= 90
                                ? 'text - green - 600'
                                : securityScore >= 70
                                  ? 'text - yellow - 600'
                                  : 'text - red - 600'
                            }`}
                          >
                            {securityScore}/100
                          </div>
                          <div role="button" className="text - sm text - gray - 600 dark:text - gray - 400">
                            Security Score
                          </div>
                        </div>

                        <div role="button" className="flex - 1">
                          <div role="button" className="flex items - center justify - between text - sm text - gray - 600 dark:text - gray - 400 mb - 2">
                            <span > Target: {targetScore}/100</span>
                            <span>
                              {Math.round ( (securityScore / targetScore) * 100) }%
                            </span>
                          </div>
                          <div role="button" className="w - full bg - gray - 200 dark:bg - gray - 700 rounded - full h - 3">
                            <div role="button" className={`h - 3 rounded - full transition - all duration - 500 ${
                                securityScore >= 90
                                  ? 'bg - green - 500'
                                  : securityScore >= 70
                                    ? 'bg - yellow - 500'
                                    : 'bg - red - 500'
                              }`}
                              style={{
                                width: `${Math.min ( (securityScore / targetScore) * 100, 100) }%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Tabs */}
                    <div role="button" className="flex space - x-1 bg - gray - 100 dark:bg - gray - 800 rounded - lg p - 1">
                      {[
                        {
                          key: 'threats',
                          label: 'Threats',
                          icon: AlertTriangle,
                          count: threats.length,
                        },
                        {
                          key: 'vulnerabilities',
                          label: 'Vulnerabilities',
                          icon: Zap,
                          count: vulnerabilities.length,
                        },
                        {
                          key: 'compliance',
                          label: 'Compliance',
                          icon: CheckCircle,
                          count: complianceStatus.length,
                        },
                      ].map ( ({ key, label, icon: Icon, count }) => (<button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" key={key}
                          onClick={ () => setSelectedView (key as any) }
                          className={`flex items - center space - x-2 px - 4 py - 2 rounded - md transition - colors ${
                            selectedView === key
                              ? 'bg - white dark:bg - gray - 700 text - red - 600 dark:text - red - 400 shadow - sm'
                              : 'text - gray - 600 dark:text - gray - 400 hover:text - gray - 900 dark:hover:text - white'
                          }`}
                        >
                          <Icon className="w - 4 h - 4" />
                          <span>{label}</span>
                          <span className="bg - gray - 200 dark:bg - gray - 600 text - gray - 700 dark:text - gray - 300 px - 2 py - 1 rounded - full text - xs">
                            {count}
                          </span>
                        </button>) ) }
                    </div>

                    {/* Threats View */}
                    {selectedView === 'threats' && (<div role="button" className="space - y-4">
                        <div role="button" className="flex items - center justify - between">
                          <h3 className="text - lg font - semibold text - gray - 900 dark:text - white">
                            Active Security Threats
                          </h3>
                          <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" onClick={ () => setShowAdvanced (!showAdvanced) }
                            className="px - 3 py - 1 text - sm bg - red - 600 text - white rounded - md hover:bg - red - 700 transition - colors"
                          >
                            {showAdvanced ? 'Hide' : 'Show'} Advanced
                          </button>
                        </div>

                        <div role="button" className="grid gap - 4">
                          {threats.map ( (threat, index) => (<motion.div
                              key={threat.id}
                              className="bg - white dark:bg - gray - 800 p - 4 rounded - xl border border - gray - 200 dark:border - gray - 700 hover:shadow - lg transition - all duration - 300"
                              whileHover={{ y: -2 }}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div role="button" className="flex items - start justify - between">
                                <div role="button" className="flex - 1">
                                  <div role="button" className="flex items - center space - x-3 mb - 2">
                                    <div role="button" className={`px - 2 py - 1 rounded - full text - xs font - medium ${getThreatColor (threat.type) }`}
                                    >
                                      {threat.type.toUpperCase () }
                                    </div>
                                    <div role="button" className="flex items - center space - x-2">
                                      {getStatusIcon (threat.status) }
                                      <span className="text - sm text - gray - 500 dark:text - gray - 400">
                                        {threat.status}
                                      </span>
                                    </div>
                                  </div>

                                  <h4 className="font - medium text - gray - 900 dark:text - white mb - 2">
                                    {threat.description}
                                  </h4>

                                  <div role="button" className="flex items - center space - x-4 text - sm text - gray - 500 dark:text - gray - 400 mb - 3">
                                    <span > Source: {threat.source}</span>
                                    <span > Severity: {threat.severity}/100</span>
                                    <span > Affected: {threat.affectedSystems.length}{' '}
                                      systems
                                    </span>
                                  </div>

                                  {showAdvanced && (<div role="button" className="bg - gray - 50 dark:bg - gray - 700 rounded - lg p - 3">
                                      <h5 className="font - medium text - gray - 900 dark:text - white mb - 2">
                                        Recommendations:
                                      </h5>
                                      <ul className="space - y-1">
                                        {threat.recommendations.map ( (rec, idx) => (<li
                                              key={idx}
                                              className="text - sm text - gray - 600 dark:text - gray - 400 flex items - center space - x-2"
                                            >
                                              <CheckCircle className="w - 3 h - 3 text - green - 500" />
                                              <span>{rec}</span>
                                            </li>) ) }
                                      </ul>
                                    </div>) }
                                </div>

                                <div role="button" className="text - right text - sm text - gray - 500 dark:text - gray - 400">
                                  <div>
                                    {threat.timestamp.toLocaleTimeString () }
                                  </div>
                                  <div>
                                    {threat.timestamp.toLocaleDateString () }
                                  </div>
                                </div>
                              </div>
                            </motion.div>) ) }
                        </div>
                      </div>) }

                    {/* Vulnerabilities View */}
                    {selectedView === 'vulnerabilities' && (<div role="button" className="space - y-4">
                        <h3 className="text - lg font - semibold text - gray - 900 dark:text - white">
                          Vulnerability Assessment
                        </h3>

                        <div role="button" className="grid gap - 4">
                          {vulnerabilities.map ( (vuln, index) => (<motion.div
                              key={vuln.id}
                              className="bg - white dark:bg - gray - 800 p - 4 rounded - xl border border - gray - 200 dark:border - gray - 700 hover:shadow - lg transition - all duration - 300"
                              whileHover={{ y: -2 }}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div role="button" className="flex items - start justify - between">
                                <div role="button" className="flex - 1">
                                  <div role="button" className="flex items - center space - x-3 mb - 2">
                                    <div role="button" className={`px - 2 py - 1 rounded - full text - xs font - medium ${getThreatColor (vuln.risk) }`}
                                    >
                                      {vuln.risk.toUpperCase () }
                                    </div>
                                    <div role="button" className="text - sm text - gray - 500 dark:text - gray - 400">
                                      CVSS: {vuln.score}/10
                                    </div>
                                  </div>

                                  <h4 className="font - medium text - gray - 900 dark:text - white mb - 2">
                                    {vuln.description}
                                  </h4>

                                  <div role="button" className="flex items - center space - x-4 text - sm text - gray - 500 dark:text - gray - 400 mb - 3">
                                    <span > Category: {vuln.category}</span>
                                    <span > CVE: {vuln.cveId}</span>
                                    <span > Time to fix: {vuln.estimatedTime}
                                    </span>
                                  </div>

                                  <div role="button" className="bg - gray - 50 dark:bg - gray - 700 rounded - lg p - 3">
                                    <h5 className="font - medium text - gray - 900 dark:text - white mb - 2">
                                      Remediation:
                                    </h5>
                                    <p className="text - sm text - gray - 600 dark:text - gray - 400">
                                      {vuln.remediation}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </motion.div>) ) }
                        </div>
                      </div>) }

                    {/* Compliance View */}
                    {selectedView === 'compliance' && (<div role="button" className="space - y-4">
                        <h3 className="text - lg font - semibold text - gray - 900 dark:text - white">
                          Compliance Status
                        </h3>

                        <div role="button" className="grid gap - 4">
                          {complianceStatus.map ( (compliance, index) => (<motion.div
                              key={compliance.framework}
                              className="bg - white dark:bg - gray - 800 p - 4 rounded - xl border border - gray - 200 dark:border - gray - 700 hover:shadow - lg transition - all duration - 300"
                              whileHover={{ y: -2 }}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <div role="button" className="flex items - center justify - between mb - 4">
                                <h4 className="text - lg font - medium text - gray - 900 dark:text - white">
                                  {compliance.framework}
                                </h4>
                                <div role="button" className={`px - 3 py - 1 rounded - full text - sm font - medium ${getComplianceColor (compliance.status) }`}
                                >
                                  {compliance.status.replace ('-', ' ') }
                                </div>
                              </div>

                              <div role="button" className="grid grid - cols - 2 gap - 4 mb - 4">
                                <div role="button" className="text - center">
                                  <div role="button" className="text - 2xl font - bold text - gray - 900 dark:text - white">
                                    {compliance.score}%
                                  </div>
                                  <div role="button" className="text - sm text - gray - 500 dark:text - gray - 400">
                                    Compliance Score
                                  </div>
                                </div>

                                <div role="button" className="text - center">
                                  <div role="button" className="text - 2xl font - bold text - gray - 900 dark:text - white">
                                    {compliance.requirements.compliant}/
                                    {compliance.requirements.total}
                                  </div>
                                  <div role="button" className="text - sm text - gray - 500 dark:text - gray - 400">
                                    Requirements Met
                                  </div>
                                </div>
                              </div>

                              <div role="button" className="space - y-2">
                                <div role="button" className="flex items - center justify - between text - sm">
                                  <span className="text - gray - 600 dark:text - gray - 400">
                                    Last Audit:
                                  </span>
                                  <span className="text - gray - 900 dark:text - white">
                                    {compliance.lastAudit.toLocaleDateString () }
                                  </span>
                                </div>
                                <div role="button" className="flex items - center justify - between text - sm">
                                  <span className="text - gray - 600 dark:text - gray - 400">
                                    Next Audit:
                                  </span>
                                  <span className="text - gray - 900 dark:text - white">
                                    {compliance.nextAudit.toLocaleDateString () }
                                  </span>
                                </div>
                              </div>
                            </motion.div>) ) }
                        </div>
                      </div>) }

                    {/* Action Buttons */}
                    <div role="button" className="flex items - center justify - center space - x-4 pt - 6">
                      <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" className="flex items - center space - x-2 px - 6 py - 3 bg - red - 600 text - white rounded - lg hover:bg - red - 700 transition - colors">
                        <Download className="w - 4 h - 4" />
                        <span > Export Report</span>
                      </button>

                      <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" className="flex items - center space - x-2 px - 6 py - 3 bg - green - 600 text - white rounded - lg hover:bg - green - 700 transition - colors">
                        <Shield className="w - 4 h - 4" />
                        <span > Run Full Scan</span>
                      </button>

                      <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" className="flex items - center space - x-2 px - 6 py - 3 bg - blue - 600 text - white rounded - lg hover:bg - blue - 700 transition - colors">
                        <Share2 className="w - 4 h - 4" />
                        <span > Share Report</span>
                      </button>
                    </div>
                  </div>) : (<div role="button" className="text - center py - 12">
                    <Shield className="w - 16 h - 16 text - red - 600 mx - auto mb - 4" />
                    <h3 className="text - xl font - semibold text - gray - 900 dark:text - white mb - 2">
                      Ready to monitor security?
                    </h3>
                    <p className="text - gray - 600 dark:text - gray - 400 mb - 6">
                      Click the scan button to start security monitoring
                    </p>
                    <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" onClick={startSecurityScan}
                      className="px - 6 py - 3 bg - red - 600 text - white rounded - lg hover:bg - red - 700 transition - colors"
                    >
                      Start Security Scan
                    </button>
                  </div>) }
              </div>
            </motion.div>
          </motion.div>) }
      </AnimatePresence>
    </>) ;
}
