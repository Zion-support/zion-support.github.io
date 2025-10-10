import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Code, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Zap, 
  Eye, 
  FileText, 
  Lock, 
  Bug, 
  ArrowRight,
  Upload,
  Download,
  Settings,
  BarChart3,
  Clock,
  Star,
  Users,
  Globe,
  Database,
  Server,
  Terminal,
  Search,
  Filter,
  RefreshCw,
  Play,
  Pause,
  Stop
} from 'lucide-react';

const AICodeSecurityAuditorPage: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanResults, setScanResults] = useState<any>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const securityIssues = [
    {
      type: 'Critical',
      count: 3,
      color: 'text-red-400',
      bgColor: 'bg-red-400/10',
      borderColor: 'border-red-400/30'
    },
    {
      type: 'High',
      count: 7,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      borderColor: 'border-orange-400/30'
    },
    {
      type: 'Medium',
      count: 12,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/30'
    },
    {
      type: 'Low',
      count: 5,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Automated Vulnerability Detection',
      description: 'AI-powered scanning identifies security vulnerabilities, code smells, and potential exploits in real-time'
    },
    {
      icon: Code,
      title: 'Multi-Language Support',
      description: 'Supports 25+ programming languages including Python, JavaScript, Java, C++, Go, and Rust'
    },
    {
      icon: Bug,
      title: 'Smart Bug Detection',
      description: 'Advanced pattern recognition detects complex bugs, memory leaks, and performance issues'
    },
    {
      icon: Lock,
      title: 'Security Compliance',
      description: 'Ensures compliance with OWASP Top 10, SANS Top 25, and industry security standards'
    },
    {
      icon: BarChart3,
      title: 'Detailed Analytics',
      description: 'Comprehensive reports with risk scores, remediation suggestions, and security trends'
    },
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: 'Continuous monitoring of code changes with instant security alerts and notifications'
    }
  ];

  const pricingPlans = [
    {
      name: 'Developer',
      price: '$49',
      period: '/month',
      description: 'Perfect for individual developers and small projects',
      features: [
        'Up to 10,000 lines of code',
        '5 scans per month',
        'Basic vulnerability detection',
        'Email support',
        'PDF reports',
        'GitHub integration'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$149',
      period: '/month',
      description: 'Ideal for development teams and growing companies',
      features: [
        'Up to 100,000 lines of code',
        'Unlimited scans',
        'Advanced vulnerability detection',
        'Priority support',
        'Detailed analytics',
        'CI/CD integration',
        'Team collaboration',
        'Custom rules'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations with complex security needs',
      features: [
        'Unlimited code scanning',
        'Unlimited scans',
        'Full security suite',
        '24/7 dedicated support',
        'Custom security rules',
        'API access',
        'White-label solution',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const startScan = () => {
    if (!selectedFile) return;
    
    setIsScanning(true);
    setScanProgress(0);
    
    // Simulate scanning progress
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          setScanResults({
            totalLines: 15420,
            vulnerabilities: securityIssues,
            scanTime: '2.3s',
            filesScanned: 45
          });
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <>
      <Helmet>
        <title>AI Code Security Auditor Pro - Zion Tech Group</title>
        <meta name="description" content="Automated code security analysis and vulnerability detection. AI-powered scanning for 25+ programming languages with real-time monitoring and compliance checking." />
        <meta name="keywords" content="code security, vulnerability detection, security audit, code analysis, AI security, OWASP, SANS" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-code-security-auditor" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-red-400/10 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Security & Compliance
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent neon-text">
                AI Code Security Auditor Pro
              </h1>
              
              <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Protect your codebase with AI-powered security analysis. Detect vulnerabilities, 
                ensure compliance, and maintain code quality with automated scanning and monitoring.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
                  <span className="relative z-10">Start Free Scan</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group inline-flex items-center px-8 py-4 border-2 border-red-400 text-red-400 font-semibold rounded-xl hover:bg-red-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Interactive Scanner */}
            <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Upload Your Code for Analysis</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Upload Code Files
                  </label>
                  <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-red-400/50 transition-colors">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-300 mb-2">Drag and drop your code files here</p>
                    <p className="text-sm text-gray-400 mb-4">or click to browse</p>
                    <input
                      type="file"
                      multiple
                      accept=".js,.ts,.py,.java,.cpp,.go,.rs,.php,.rb,.cs"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="inline-flex items-center px-4 py-2 bg-red-500/20 text-red-400 rounded-lg cursor-pointer hover:bg-red-500/30 transition-colors"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Choose Files
                    </label>
                  </div>
                  
                  {selectedFile && (
                    <div className="mt-4 p-3 bg-green-500/10 border border-green-400/30 rounded-lg">
                      <div className="flex items-center text-green-400">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {selectedFile.name} selected
                      </div>
                    </div>
                  )}
                  
                  <button
                    onClick={startScan}
                    disabled={isScanning || !selectedFile}
                    className="w-full mt-6 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isScanning ? (
                      <>
                        <RefreshCw className="w-5 h-5 mr-2 animate-spin inline" />
                        Scanning... {scanProgress}%
                      </>
                    ) : (
                      <>
                        <Shield className="w-5 h-5 mr-2 inline" />
                        Start Security Scan
                      </>
                    )}
                  </button>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Scan Results
                  </label>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 h-64">
                    {isScanning ? (
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <RefreshCw className="w-8 h-8 text-white animate-spin" />
                        </div>
                        <p className="text-gray-300 mb-2">Analyzing your code...</p>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-red-400 to-orange-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${scanProgress}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-400 mt-2">{scanProgress}% complete</p>
                      </div>
                    ) : scanResults ? (
                      <div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">{scanResults.totalLines.toLocaleString()}</div>
                            <div className="text-sm text-gray-400">Lines Scanned</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">{scanResults.filesScanned}</div>
                            <div className="text-sm text-gray-400">Files Analyzed</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {securityIssues.map((issue, index) => (
                            <div key={index} className={`flex items-center justify-between p-2 rounded ${issue.bgColor} ${issue.borderColor} border`}>
                              <span className={`font-medium ${issue.color}`}>{issue.type}</span>
                              <span className="text-white font-bold">{issue.count}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center text-gray-400 h-full flex items-center justify-center">
                        <div>
                          <Shield className="w-12 h-12 mx-auto mb-2 opacity-50" />
                          <p>Scan results will appear here</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent neon-text">
                Advanced Security Analysis
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered security auditor uses machine learning to identify vulnerabilities 
                and security issues that traditional tools might miss.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-red-400/50 transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20 bg-gradient-to-r from-slate-800/50 to-red-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent neon-text">
                Secure Your Code Today
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security plan that fits your development needs. All plans include 
                automated scanning and detailed vulnerability reports.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-red-400/50 ring-2 ring-red-400/30' : 'border-white/10'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-400 to-orange-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700 transform hover:scale-105'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl p-12 border border-red-400/20">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text">
                Don't Let Vulnerabilities Compromise Your Code
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of developers and organizations using AI Code Security Auditor Pro 
                to maintain secure, compliant codebases.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
                  <span className="relative z-10">Start Free Scan</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="flex items-center space-x-6 text-gray-300">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-red-400 mr-2" />
                    <span>Free 7-day trial</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 text-red-400 mr-2" />
                    <span>No setup required</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AICodeSecurityAuditorPage;