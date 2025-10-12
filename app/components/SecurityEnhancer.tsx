'use client'
import React, { useState } from 'react'
import { Shield, CheckCircle, ArrowRight, AlertTriangle, Lock, Eye } from 'lucide-react'

interface SecurityEnhancerProps {
  className?: string
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({ className = '' }) => {
  const [isScanning, setIsScanning] = useState(false)
  const [scanComplete, setScanComplete] = useState(false)
  const [securityScore, setSecurityScore] = useState(0)
  const [vulnerabilities, setVulnerabilities] = useState<string[]>([])

  const securityFeatures = [
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: 'Threat Detection',
      description: 'Advanced threat detection and prevention systems.'
    },
    {
      icon: <Lock className="w-6 h-6 text-green-500" />,
      title: 'Data Encryption',
      description: 'End-to-end encryption for all data transmission.'
    },
    {
      icon: <Eye className="w-6 h-6 text-purple-500" />,
      title: 'Monitoring',
      description: 'Real-time security monitoring and alerting.'
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
      title: 'Vulnerability Assessment',
      description: 'Comprehensive vulnerability scanning and assessment.'
    }
  ]

  const handleSecurityScan = async () => {
    setIsScanning(true)
    setVulnerabilities([])
    
    // Simulate security scan
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // Generate random security score between 70-95
    const score = Math.floor(Math.random() * 25) + 70
    setSecurityScore(score)
    
    // Generate some mock vulnerabilities
    const mockVulnerabilities = [
      'Outdated dependencies detected',
      'Missing security headers',
      'Weak password policies',
      'Insecure API endpoints'
    ].slice(0, Math.floor(Math.random() * 3) + 1)
    
    setVulnerabilities(mockVulnerabilities)
    setScanComplete(true)
    setIsScanning(false)
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 80) return 'text-yellow-600'
    if (score >= 70) return 'text-orange-600'
    return 'text-red-600'
  }

  return (
    <div className={`bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 ${className}`}>
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Security Enhancer
        </h2>
        <p className="text-gray-600">
          Scan and enhance your application security with our advanced security tools.
        </p>
      </div>

      {!scanComplete && (
        <div className="space-y-4">
          <button
            onClick={handleSecurityScan}
            disabled={isScanning}
            className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isScanning ? (
              <>
                <Shield className="w-5 h-5 mr-2 animate-spin" />
                Scanning...
              </>
            ) : (
              <>
                <Shield className="w-5 h-5 mr-2" />
                Start Security Scan
              </>
            )}
          </button>
        </div>
      )}

      {scanComplete && (
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">
              Security Score: <span className={getScoreColor(securityScore)}>{securityScore}/100</span>
            </div>
            <p className="text-gray-600">
              {securityScore >= 90 ? 'Excellent security posture!' : 
               securityScore >= 80 ? 'Good security with minor improvements needed.' :
               securityScore >= 70 ? 'Fair security. Consider addressing vulnerabilities.' :
               'Poor security. Immediate action required.'}
            </p>
          </div>

          {vulnerabilities.length > 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="text-sm font-medium text-yellow-800 mb-2">
                Vulnerabilities Found:
              </h3>
              <ul className="space-y-1">
                {vulnerabilities.map((vulnerability, index) => (
                  <li key={index} className="flex items-center text-sm text-yellow-700">
                    <AlertTriangle className="w-4 h-4 mr-2 flex-shrink-0" />
                    {vulnerability}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center space-x-3">
                  {feature.icon}
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                setScanComplete(false)
                setSecurityScore(0)
                setVulnerabilities([])
              }}
              className="bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center mx-auto"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              Scan Again
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SecurityEnhancer