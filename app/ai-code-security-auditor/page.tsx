'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Code, AlertTriangle, CheckCircle, XCircle, Eye, Lock, Unlock, FileText, Search, Filter, Download, Upload, Settings, Zap, Star, Users, Clock, Globe, Phone, Mail, MapPin, ArrowRight, Brain, BarChart3, DollarSign, Calendar, MessageSquare, Activity, TrendingUp, Target, Award, Sparkles } from 'lucide-react';

const AICodeSecurityAuditorPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Vulnerability Detection',
      description: 'Automatically scan code for security vulnerabilities and potential threats.',
      benefits: ['OWASP Top 10 detection', 'Custom vulnerability patterns', 'Real-time scanning', 'Comprehensive reports']
    },
    {
      icon: Code,
      title: 'Code Analysis',
      description: 'Deep analysis of code structure, patterns, and potential security issues.',
      benefits: ['Static code analysis', 'Dynamic analysis', 'Pattern recognition', 'Risk assessment']
    },
    {
      icon: AlertTriangle,
      title: 'Threat Assessment',
      description: 'Evaluate potential security threats and provide risk mitigation strategies.',
      benefits: ['Threat modeling', 'Risk scoring', 'Mitigation recommendations', 'Priority ranking']
    },
    {
      icon: Lock,
      title: 'Security Compliance',
      description: 'Ensure code meets security standards and regulatory compliance requirements.',
      benefits: ['Compliance checking', 'Standards validation', 'Audit trails', 'Certification support']
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Machine learning algorithms that learn from security patterns and provide intelligent recommendations.',
      benefits: ['Pattern learning', 'Predictive analysis', 'Smart recommendations', 'Continuous improvement']
    },
    {
      icon: BarChart3,
      title: 'Security Reporting',
      description: 'Comprehensive security reports with detailed analysis and remediation guidance.',
      benefits: ['Detailed reports', 'Visual dashboards', 'Trend analysis', 'Executive summaries']
export default function CodeSecurityAuditor({ className = '' }: CodeSecurityAuditorProps) {}
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState<any[]>([]);</any></<<<any>const</any></any> [selectedFile, setSelectedFile] = useState<string | null>(null);</string></<<<string>const</string></string> [codeContent, setCodeContent] = useState('');
  const [vulnerabilities, setVulnerabilities] = useState<any[]>([]);</any></<<<any>const</any></any> [isAnalyzing, setIsAnalyzing] = useState(false);

  const securityIssues = [
    {
      id: 1,
      type: 'SQL Injection'
      severity: 'High'
      file: 'user-controller.js'
      line: 45,
    {}
      id: 1,
      type: 'SQL Injection',
      severity: 'High',
      file: 'user-controller.js',
      line: 45,
      description: 'Potential SQL injection vulnerability in user authentication query',
      recommendation: 'Use parameterized queries or prepared statements',
      status: 'Open'},
    {
      id: 2,
      type: 'XSS Vulnerability'
      severity: 'Medium'
      file: 'dashboard.html'
      line: 23,
    {}
      id: 2,
      type: 'XSS Vulnerability',
      severity: 'Medium',
      file: 'dashboard.html',
      line: 23,
      description: 'Unescaped user input in HTML output',
      recommendation: 'Sanitize user input before rendering',
      status: 'Open'},
    {
      id: 3,
      type: 'Hardcoded Password'
      severity: 'Critical'
      file: 'config.js'
      line: 12,
    {}
      id: 3,
      type: 'Hardcoded Password',
      severity: 'Critical',
      file: 'config.js',
      line: 12,
      description: 'Hardcoded database password found',
      recommendation: 'Use environment variables for sensitive data',
      status: 'Fixed'},
    {
      id: 4,
      type: 'Insecure Random'
      severity: 'Medium'
      file: 'auth-service.js'
      line: 67,
    {}
      id: 4,
      type: 'Insecure Random',
      severity: 'Medium',
      file: 'auth-service.js',
      line: 67,
      description: 'Using Math.random() for cryptographic purposes',
      recommendation: 'Use crypto.randomBytes() for secure random generation',
      status: 'Open'},
    {
      id: 5,
      type: 'Missing CSRF Protection'
      severity: 'High'
      file: 'api-routes.js'
      line: 89,
    {}
      id: 5,
      type: 'Missing CSRF Protection',
      severity: 'High',
      file: 'api-routes.js',
      line: 89,
      description: 'API endpoints lack CSRF protection',
      recommendation: 'Implement CSRF tokens for state-changing operations',
      status: 'Open'}
  ];

  const features = [
    {}
      title: "Automated Vulnerability Scanning",
      description: "AI-powered detection of security vulnerabilities in your codebase",
      icon: Shield,
      price: "Included"},
    {}
      title: "Code Quality Analysis",
      description: "Comprehensive analysis of code quality and best practices",
      icon: Code,
      price: "Included"},
    {}
      title: "Compliance Checking",
      description: "Ensure compliance with security standards (OWASP, PCI-DSS, etc.)",
      icon: CheckCircle,
      price: "Included"},
    {}
      title: "Auto-fix Suggestions",
      description: "Get automated suggestions to fix security issues",
      icon: Zap,
      price: "Included"},
    {}
      title: "Real-time Monitoring",
      description: "Continuous monitoring of your codebase for new vulnerabilities",
      icon: Activity,
      price: "Pro Feature"},
    {}
      title: "Custom Rules Engine",
      description: "Create custom security rules for your specific requirements",
      icon: Settings,
      price: "Enterprise"}
  ];

  const pricingPlans = [
    {
      name: "Developer"
    {}
      name: "Developer",
      price: "$49",
      period: "/month",
      description: "Perfect for individual developers and small projects",
      features: [,
        "Up to 5 repositories",
        "100 scans/month",
        "Basic vulnerability detection",
        "Email support",
        "PDF reports"
      ],
      popular: false,
    },
    {
      name: "Team"
    {}
      name: "Team",
      price: "$149",
      period: "/month",
      description: "Ideal for development teams and growing companies",
      features: [,
        "Up to 25 repositories",
        "Unlimited scans",
        "Advanced vulnerability detection",
        "Priority support",
        "API access",
        "Team collaboration",
        "Custom rules"
      ],
      popular: true,
    },
    {
      name: "Enterprise"
    {}
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations with complex security needs",
      features: [,
        "Unlimited repositories",
        "Unlimited scans",
        "Full vulnerability detection",
        "24/7 support",
        "Custom integration",
        "SLA guarantee",
        "Security consulting",
        "Compliance reporting"
      ],
      popular: false,
    }
  ];

  const benefits = [
    'Reduce security vulnerabilities by 90%',
    'Improve code security by 85%',
    'Lower security risks by 80%',
    'Increase compliance by 95%',
    'Enable automated security testing',
    'Accelerate security audits',
    'Scale security across teams',
    'Enhance security awareness'
  ];

  const useCases = [
    {
      title: 'Application Security',
      description: 'Secure web and mobile applications with comprehensive security auditing',
      icon: '🔒'
    },
    {
      title: 'Code Review',
      description: 'Automate security code reviews and identify potential vulnerabilities',
      icon: '🔍'
    },
    {
      title: 'Compliance Auditing',
      description: 'Ensure compliance with security standards and regulations',
      icon: '📋'
    },
    {
      title: 'Penetration Testing',
      description: 'Identify security weaknesses through automated penetration testing',
      icon: '🎯'
    },
    {
      title: 'Security Training',
      description: 'Educate developers on secure coding practices and common vulnerabilities',
      icon: '📚'
    },
    {
      title: 'Risk Management',
      description: 'Assess and manage security risks across the development lifecycle',
      icon: '⚠️'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Code Security Auditor - Zion Tech Group</title>
        <meta name="description" content="Secure your code with our AI Code Security Auditor. Automated vulnerability detection, security analysis, and compliance checking for better code security." />
        <meta name="keywords" content="AI code security, security auditing, vulnerability detection, code analysis, security compliance, secure coding" />
      </Helmet>
  return(<div className={`min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 ${className}`}>
  return (</div>
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 ${className}`}></div>
      <Helmet>
        <title>AI Code Security Auditor Pro - Automated Security Analysis | Zion Tech Group</title>
        <meta name="description" content="Automated code security analysis with AI Code Security Auditor Pro. Detect vulnerabilities, ensure compliance, and get auto-fix suggestions for your codebase." />
        <meta name="keywords" content="code security, vulnerability scanning, security audit, code analysis, OWASP, compliance, security testing" />)
        <link rel="canonical" href="https: //ziontechgroup.com/ai-code-security-auditor" />)
      </Helmet>)
),
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden"></div>
      <div className="relative py-20 overflow-hidden"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http: //www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-8">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Code Security Auditor

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent neon-text">
              Automated Security Analysis;</h1>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Secure your code with our AI Code Security Auditor. Automated vulnerability detection, 
              security analysis, and compliance checking for better code security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
                Start Auditing
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-red-400 text-red-300 px-8 py-4 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300">
                View Demo
              </button>

            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center mb-12"></div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"></div>
              <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
                <span className="relative z-10">Start Free Scan</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="$2" /></div>
              </button>

              <button className="group inline-flex items-center px-8 py-4 border-2 border-red-400 text-red-400 font-semibold rounded-xl hover:bg-red-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo;
              </button>,
            </div>,
,
            {/* Stats */}
            <div className="grid grid-cols-2 md: grid-cols-4 gap-8 max-w-4xl mx-auto"></div>
              <div className="text-center"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"></div>
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-red-400 mb-2">99.9%</div>
                <div className="text-gray-400">Detection Rate</div>
              </div>
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
                <div className="text-gray-400">Vulnerability Types</div>
              </div>
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">10s</div>
                <div className="text-gray-400">Scan Time</div>
              </div>
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-400">Monitoring</div>
              </div>
            </div>,
          </div>,
        </div>,
      </div>,
,
      {/* Security Scanner Interface */}
      <div className="py-20 bg-gradient-to-br from-slate-800 via-red-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
              Security Scanner;
      <div className="py-20 bg-gradient-to-br from-slate-800 via-red-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Security Scanner
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Upload your code or connect your repository for instant security analysis;
            </p>
          </div>
,
          <div className="max-w-6xl mx-auto">,</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">,
              {/* Code Input Section */}</div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">

          <div className="max-w-6xl mx-auto"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"></div>
              {/* Code Input Section */}</div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center"></h3>
                  <Code className="w-8 h-8 text-red-400 mr-3" />
                  Code Analysis;
                </h3>

                <div className="space-y-6"></div>
                  {/* File Upload */}</div>
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Upload Code Files;
                    </label>
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover: border-red-400 transition-colors cursor-pointer">,</div>
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />,
                      <p className="text-gray-400">Click to upload or drag and drop</p>,
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-red-400 transition-colors cursor-pointer"></div>
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400">Click to upload or drag and drop</p>
                      <p className="text-gray-500 text-sm">JS, TS, Python, Java, C++, etc.</p>
                    </div>
                  </div>

                  {/* Code Input */}
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Or Paste Code;
                    </label>
                    <textarea;
                      value={codeContent}
                      onChange={(e) => setCodeContent(e.target.value)}
                      placeholder="Paste your code here for analysis..."
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 resize-none font-mono text-sm",
                      rows={8}
                    />
                  </div>

                  {/* Scan Button */}
                  <button;
                    onClick={handleAnalyzeCode}
                    disabled={!codeContent.trim() || isAnalyzing}
                    className="w-full bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold py-4 px-6 rounded-lg hover: from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isAnalyzing ? (}
                      <>
                        <RefreshCw className="w-5 h-5 mr-2 animate-spin inline" />
                        Analyzing Code...
                      </>
                    ) : (,
                      <>,
                        <Search className="w-5 h-5 mr-2 inline" />,
                        Analyze Code;
                      </>)}
                  </button>
                </div>
              </div>

              {/* Results Section */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center"></h3>
                  <Shield className="w-8 h-8 text-red-400 mr-3" />
                  Security Results;
                </h3>

                <div className="space-y-4">
                  {vulnerabilities.length > 0 ? (</div>
                    vulnerabilities.map((vuln, index) => (</div>
                      <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10"></div>
                        <div className="flex items-center justify-between mb-2"></div>
                  {vulnerabilities.length > 0 ? (}
                    vulnerabilities.map((vuln, index) => (
                      <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10"></div>
                        <div className="flex items-center justify-between mb-2"></div>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getSeverityColor(vuln.severity)}`}>
                            {vuln.severity}
                          </span>
                          <span className="text-gray-400 text-sm">Line {vuln.line}</spa>
                        </div>
                        <h4 className="text-white font-semibold mb-1">{vuln.type}</h>
                        <p className="text-gray-300 text-sm mb-2">{vuln.description}</p>
                        <p className="text-green-400 text-sm">{vuln.recommendation}</p>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8"></div>
                      <Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-400">No vulnerabilities detected</p>
                      <p className="text-gray-500 text-sm">Upload code to start analysis</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Security Auditing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI Code Security Auditor combines cutting-edge technology with security expertise
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
      {/* Security Issues Dashboard */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
              Security Dashboard;
      <div className="py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Security Dashboard
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor and manage security issues across your codebase;
            </p>
          </div>

          <div className="max-w-6xl mx-auto"></div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
              <div className="flex items-center justify-between mb-6">,</div>
                <h3 className="text-2xl font-bold text-white">Security Issues</h3>,
                <button;
          <div className="max-w-6xl mx-auto"></div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
              <div className="flex items-center justify-between mb-6"></div>
                <h3 className="text-2xl font-bold text-white">Security Issues</h3>
                <button
                  onClick={handleStartScan}
                  disabled={isScanning}
                  className="bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold py-2 px-6 rounded-lg hover: from-red-600 hover:to-orange-700 transition-all duration-300 disabled:opacity-50"
                >
                  {isScanning ? (}
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin inline" />
                      Scanning...
                    </>
                  ) : (,
                    <>,
                      <Search className="w-4 h-4 mr-2 inline" />,
                      Start Scan;
                    </>)}
                </button>
              </div>

              <div className="space-y-4">
                {securityIssues.map((issue) => (</div>
                  <div key={issue.id} className="bg-white/5 rounded-lg p-4 border border-white/10 hover: bg-white/10 transition-colors">,</div>
                    <div className="flex items-center justify-between mb-2">,</div>
                      <div className="flex items-center space-x-3">,</div>
                {securityIssues.map((issue) => (</div>
                  <div key={issue.id} className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors"></div>
                    <div className="flex items-center justify-between mb-2"></div>
                      <div className="flex items-center space-x-3"></div>
                {securityIssues.map((issue) => (}
                  <div key={issue.id} className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors"></div>
                    <div className="flex items-center justify-between mb-2"></div>
                      <div className="flex items-center space-x-3"></div>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getSeverityColor(issue.severity)}`}>
                          {issue.severity}
                        </span>
                        <span className="text-white font-semibold">{issue.type}</spa>
                        <span className="text-gray-400 text-sm">{issue.file}:{issue.line}</spa>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${}
                        issue.status === 'Fixed'
                          ? 'text-green-400 bg-green-400/10'}
                          : 'text-yellow-400 bg-yellow-400/10'}
                      }`}>
                        {issue.status}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-2">{issue.description}</p>
                    <p className="text-green-400 text-sm">{issue.recommendation}</p>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From startups to enterprises, our AI Code Security Auditor serves diverse needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
      {/* Features Section */}
      <div className="py-20 bg-gradient-to-br from-slate-800 via-red-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
              Security Features;
      <div className="py-20 bg-gradient-to-br from-slate-800 via-red-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security analysis tools for modern development;
            </p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">,
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover: bg-white/10 hover:border-red-400/50 transition-all duration-300 transform hover:scale-105">,</div>
                <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-600 rounded-lg flex items-center justify-center mb-4">,</div>
                  <feature.icon className="w-6 h-6 text-white" />,
                </div>,
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-red-400/50 transition-all duration-300 transform hover:scale-105"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-600 rounded-lg flex items-center justify-center mb-4"></div>
            {features.map((feature, index) => (}
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-red-400/50 transition-all duration-300 transform hover:scale-105"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-600 rounded-lg flex items-center justify-center mb-4"></div>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Code Security Auditor?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of code security with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
      {/* Pricing Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
              Security Plans;
      <div className="py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Security Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security plan that fits your development needs;
            </p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">,
            {pricingPlans.map((plan, index) => (</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
            {pricingPlans.map((plan, index) => (</div>
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-red-400/50 ring-2 ring-red-400/30' : 'border-white/10'}`}></div>
                {plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
            {pricingPlans.map((plan, index) => (}
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-red-400/50 ring-2 ring-red-400/30' : 'border-white/10'}`}>
                {plan.popular && (}</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-red-400 to-orange-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                      Most Popular;
                    </span>
                  </div>
                )}

                <div className="text-center mb-8"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center"></div>
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Secure Your Code?
              </h2>
              <p className="text-xl text-red-100 mb-8">
                Join thousands of developers who are already using our AI Code Security Auditor
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
                  Schedule Demo
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-gradient-to-br from-slate-800 via-red-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
              Secure Your Code Today;
      <div className="py-20 bg-gradient-to-br from-slate-800 via-red-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Secure Your Code Today
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact our security experts to discuss your code security needs;
            </p>
          </div>

          <div className="max-w-4xl mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4"></div>
                  <div className="flex items-center"></div>
                    <Phone className="w-5 h-5 text-red-400 mr-3" />
                    <a href="tel:+13024640950" className="text-gray-300 hover:text-red-400 transition-colors">
                      +1 (302) 464-0950;
                    </a>
                  </div>
                  <div className="flex items-center"></div>
                    <Mail className="w-5 h-5 text-red-400 mr-3" />
                    <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-red-400 transition-colors">
                      kleber@ziontechgroup.com;
                    </a>
                  </div>
                  <div className="flex items-start"></div>
                    <MapPin className="w-5 h-5 text-red-400 mr-3 mt-1" />,
                    <div className="text-gray-300">,</div>
                      <div>364 E Main St STE 1008</div>,
                  <div className="flex items-start"></div>
                    <MapPin className="w-5 h-5 text-red-400 mr-3 mt-1" />
                    <div className="text-gray-300"></div>
                      <div>364 E Main St STE 1008</div>
                      <div>Middletown, DE 19709</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6">Get Started</h3>
                <div className="space-y-4"></div>
                  <div className="flex items-center"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Free security scan</span>
                  </div>
                  <div className="flex items-center"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">No credit card required</span>
                  </div>
                  <div className="flex items-center"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Instant results</span>
                  </div>
                  <div className="flex items-center"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Expert support</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold py-4 px-6 rounded-lg hover: from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Scan;
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AICodeSecurityAuditorPage;
