<<<<<<< HEAD
import React, { useState } from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button',
import { Code, CheckCircle, AlertTriangle, Zap, BarChart3, ArrowRight, Play, Shield, Clock, TrendingUp } from 'lucide-react',

export default function CodeQualityCheckerPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false),
  const [analysisResults, setAnalysisResults] = useState(null),
  const [codeInput, setCodeInput] = useState(''),
=======
import React, {_useState} from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function CodeQualityCheckerPage() {_const [isAnalyzing, _setIsAnalyzing] = useState(false);
  const [analysisResults, _setAnalysisResults] = useState(null);
  const [codeInput, _setCodeInput] = useState('');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _features = [
    {
<<<<<<< HEAD
      icon: <Code className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Multi-Language Support',
      description: 'Support for JavaScript, TypeScript, Python, Java, C++, Go, and many more programming languages.',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      gradient: 'from-teal-400 to-cyan-500'},
    {
      icon: <CheckCircle className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Code Quality Metrics',
      description: 'Comprehensive analysis including complexity, maintainability, test coverage, and security vulnerabilities.',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      gradient: 'from-green-400 to-emerald-500'},
    {
      icon: <Zap className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Real-Time Analysis',
      description: 'Instant code quality feedback with detailed explanations and improvement suggestions.',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      gradient: 'from-orange-400 to-red-500'},
    {
      icon: <Shield className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Security Scanning',
      description: 'Automated detection of security vulnerabilities, dependency issues, and best practice violations.',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      gradient: 'from-purple-400 to-indigo-500'}],

  const supportedLanguages = [
    { name: 'JavaScript/TypeScript', icon: '⚡', features: ['ESLint rulesTypeScript checksReact best practices'] },
    { name: 'Python', icon: '🐍', features: ['PEP 8 complianceType hintsSecurity scanning'] },
    { name: 'Java', icon: '☕', features: ['PMD rulesCheckstyleSonarQube integration'] },
    { name: 'C++', icon: '⚙️', features: ['Clang-tidyStatic analysisMemory leak detection'] },
    { name: 'Go', icon: '🟢', features: ['Golangci-lintGo vetPerformance analysis'] },
    { name: 'PHP', icon: '🐘', features: ['PHPStanPHP CS FixerSecurity analysis'] }
  ],

  const pricing = [
    {
      name: 'Developer',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual developers and small projects',
      features: [
        '100 code analyses/monthBasic quality metrics5 programming languagesEmail supportBasic reportingCommunity rules'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$79',
      period: '/month',
      description: 'Ideal for development teams and growing companies',
      features: [
        '500 code analyses/monthAdvanced quality metricsAll programming languagesPriority supportAdvanced reportingCustom rulesTeam collaborationAPI access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with complex codebases',
      features: [
        'Unlimited analysesEnterprise metricsCustom language support24/7 dedicated supportCustom reportingWhite-label optionsOn-premise deploymentCustom integrations'
      ],
      popular: false
    }
  ],

  const handleAnalyzeCode = async () => {
    if (!codeInput.trim()) return,
=======
      icon: <Code className="w-8 h-8 text-white" />, _title: 'Multi-Language Support', _description: 'Support for JavaScript, _TypeScript, _Python, _Java, _C++, _Go, _and many more programming languages.', _color: 'bg-gradient-to-br from-teal-500 to-cyan-600', _gradient: 'from-teal-400 to-cyan-500'},
    {_icon: <CheckCircle className="w-8 h-8 text-white" />, _title: 'Code Quality Metrics', _description: 'Comprehensive analysis including complexity, _maintainability, _test coverage, _and security vulnerabilities.', _color: 'bg-gradient-to-br from-green-500 to-emerald-600', _gradient: 'from-green-400 to-emerald-500'},
    {_icon: <Zap className="w-8 h-8 text-white" />, _title: 'Real-Time Analysis', _description: 'Instant code quality feedback with detailed explanations and improvement suggestions.', _color: 'bg-gradient-to-br from-orange-500 to-red-600', _gradient: 'from-orange-400 to-red-500'},
    {_icon: <Shield className="w-8 h-8 text-white" />, _title: 'Security Scanning', _description: 'Automated detection of security vulnerabilities, _dependency issues, _and best practice violations.', _color: 'bg-gradient-to-br from-purple-500 to-indigo-600', _gradient: 'from-purple-400 to-indigo-500'}];

  const _supportedLanguages = [
    {_name: 'JavaScript/TypeScript', _icon: '⚡', _features: ['ESLint rules', _'TypeScript checks', _'React best practices']},
    {_name: 'Python', _icon: '🐍', _features: ['PEP 8 compliance', _'Type hints', _'Security scanning']},
    {_name: 'Java', _icon: '☕', _features: ['PMD rules', _'Checkstyle', _'SonarQube integration']},
    {_name: 'C++', _icon: '⚙️', _features: ['Clang-tidy', _'Static analysis', _'Memory leak detection']},
    {_name: 'Go', _icon: '🟢', _features: ['Golangci-lint', _'Go vet', _'Performance analysis']},
    {_name: 'PHP', _icon: '🐘', _features: ['PHPStan', _'PHP CS Fixer', _'Security analysis']}
  ];

  const _pricing = [
    {_name: 'Developer', _price: '$29', _period: '/month', _description: 'Perfect for individual developers and small projects', _features: [
        '100 code analyses/month', _'Basic quality metrics', _'5 programming languages', _'Email support', _'Basic reporting', _'Community rules'
      ], _popular: false},
    {_name: 'Team', _price: '$79', _period: '/month', _description: 'Ideal for development teams and growing companies', _features: [
        '500 code analyses/month', _'Advanced quality metrics', _'All programming languages', _'Priority support', _'Advanced reporting', _'Custom rules', _'Team collaboration', _'API access'
      ], _popular: true},
    {_name: 'Enterprise', _price: '$199', _period: '/month', _description: 'For large organizations with complex codebases', _features: [
        'Unlimited analyses', _'Enterprise metrics', _'Custom language support', _'24/7 dedicated support', _'Custom reporting', _'White-label options', _'On-premise deployment', _'Custom integrations'
      ], _popular: false}
  ];

  const _handleAnalyzeCode = async () => {_if (!codeInput.trim()) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setIsAnalyzing(true),
    // Simulate code analysis
    setTimeout__(() => {
      setAnalysisResults({
        language: 'JavaScript', _qualityScore: 85, _issues: [
          { type: 'warning', _message: 'Consider using const instead of let for variables that are not reassigned', _line: 5, _severity: 'medium'},
          {_type: 'info', _message: 'Function is quite long (25 lines). Consider breaking it into smaller functions', _line: 12, _severity: 'low'},
          {_type: 'error', _message: 'Missing semicolon at end of statement', _line: 18, _severity: 'high'}
        ],
        metrics: {_complexity: 'Medium', _maintainability: 'Good', _testCoverage: '85%', _securityScore: '92%'},
        recommendations: [
          'Use const for immutable variables to improve code clarityBreak down large functions into smaller, more focused functionsAdd proper error handling for better robustnessConsider adding JSDoc comments for better documentation'
        ]
      }),
      setIsAnalyzing(false)
    }, 3000)
  },

  return (
    <>
      <Head>
        <title>Code Quality Checker - Zion Tech Group | Professional Code Analysis & Improvement Tool</title>
        <meta name=&quot;description&quot; content=&quot;Analyze and improve your code quality with our comprehensive checker. Support for multiple languages, security scanning, and detailed improvement recommendations.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Code Quality Checker - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Professional code quality analysis tool with multi-language support and security scanning.&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
      </Head>

<<<<<<< HEAD
      {/* Hero Section */}
      <section className=&quot;relative section-padding bg-gradient-cursor overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.08),transparent_50%)]&quot; />
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.06),transparent_50%)]&quot; />
        <div className=&quot;absolute inset-0 bg-grid opacity-10&quot; />
=======
      {_/* Hero Section */}
      <section className="relative section-padding bg-gradient-cursor overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
        <div className=&quot;relative z-10 container-cursor text-center&quot;>
          <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6&quot;>
            <Code className=&quot;w-4 h-4 mr-2&quot; />
            Professional Code Analysis
          </div>
          <h1 className=&quot;text-responsive-xl font-black mb-8 gradient-text text-shadow-lg&quot;>
            Code Quality Checker
          </h1>
          <p className=&quot;text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12&quot;>
            Analyze and improve your code quality with our comprehensive checker. Support for multiple programming languages, 
            security scanning, and detailed improvement recommendations. Write better, safer, and more maintainable code.
          </p>
          
<<<<<<< HEAD
          {/* Code Input Form */}
          <div className=&quot;max-w-4xl mx-auto mb-8&quot;>
            <textarea
              placeholder=&quot;Paste your code here for analysis... (Supports JavaScript, TypeScript, Python, Java, C++, Go, PHP, and more)&quot;
              value={codeInput}
              onChange={(e) => setCodeInput(e.target.value)}
              className=&quot;w-full h-32 px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent font-mono text-sm&quot;
            />
            <Button
              onClick={handleAnalyzeCode}
              size=&quot;lg&quot;
              className=&quot;w-full mt-4 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white shadow-2xl hover-glow&quot;
              disabled={isAnalyzing || !codeInput.trim()}
=======
          {_/* Code Input Form */}
          <div className="max-w-4xl mx-auto mb-8">
            <textarea
              placeholder="Paste your code here for analysis... (Supports JavaScript, TypeScript, Python, Java, C++, Go, PHP, and more)"
              value={_codeInput}
              onChange={_(_e) => setCodeInput(e.target.value)}
              className="w-full h-32 px-6 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent font-mono text-sm"
            />
            <Button
              onClick={_handleAnalyzeCode}
              size="lg"
              className="w-full mt-4 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white shadow-2xl hover-glow"
              disabled={_isAnalyzing || !codeInput.trim()}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              {_isAnalyzing ? (
                <>
                  <div className=&quot;animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2&quot; />
                  Analyzing Code...
                </>
              ) : (
                <>
                  <Play className=&quot;w-5 h-5 mr-2&quot; />
                  Analyze Code Quality
                </>
              )}
            </Button>
          </div>

          <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center&quot;>
            <Button
              href=&quot;#pricing&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white shadow-2xl&quot;
            >
              View Pricing
            </Button>
            <Button
              href=&quot;/contact&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-gray-500 text-gray-400 hover:bg-gray-500 hover:text-white shadow-2xl&quot;
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */}
      <section className=&quot;section-padding bg-gradient-cursor-accent&quot;>
        <div className=&quot;container-cursor&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>
=======
      {_/* Features Section */}
      <section className="section-padding bg-gradient-cursor-accent">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Powerful Analysis Features
            </h2>
            <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Our code quality checker provides comprehensive analysis and improvement suggestions for better code.
            </p>
          </div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {features.map((feature, index) => (
              <Card
                key={index}
                className=&quot;card-hover group border-gradient-teal&quot;
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className=&quot;flex items-start space-x-6&quot;>
                  <div className=&quot;relative&quot;>
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${feature.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
=======
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {_features.map(_(feature, _index) => (
              <Card
                key={index}
                className="card-hover group border-gradient-teal"
                style={_{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className={_`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${feature.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {_feature.icon}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                    <div className={_`absolute -inset-2 bg-gradient-to-r from-transparent via-${feature.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                  </div>
<<<<<<< HEAD
                  <div className=&quot;flex-1&quot;>
                    <h3 className=&quot;text-2xl font-bold mb-4 text-white&quot;>
                      {feature.title}
                    </h3>
                    <p className=&quot;text-gray-400 leading-relaxed&quot;>
                      {feature.description}
=======
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {_feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {_feature.description}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Supported Languages Section */}
      <section className=&quot;section-padding bg-gradient-cursor&quot;>
        <div className=&quot;container-cursor&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>
=======
      {_/* Supported Languages Section */}
      <section className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Multi-Language Support
            </h2>
            <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              We support a wide range of programming languages with language-specific analysis rules and best practices.
            </p>
          </div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
            {supportedLanguages.map((language, index) => (
              <Card
                key={index}
                className=&quot;card-hover border-gradient-teal&quot;
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className=&quot;text-center mb-4&quot;>
                  <div className=&quot;text-4xl mb-3&quot;>{language.icon}</div>
                  <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{language.name}</h3>
                </div>
                <ul className=&quot;space-y-2&quot;>
                  {language.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center text-gray-300 text-sm&quot;>
                      <CheckCircle className=&quot;w-4 h-4 text-teal-400 mr-3 flex-shrink-0&quot; />
                      {feature}
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {_supportedLanguages.map(_(language, _index) => (_<Card
                key={index}
                className="card-hover border-gradient-teal"
                style={_{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{_language.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{_language.name}</h3>
                </div>
                <ul className="space-y-2">
                  {_language.features.map((feature, _featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-teal-400 mr-3 flex-shrink-0" />
                      {_feature}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Demo Analysis Results */}
      {analysisResults && (
        <section className=&quot;section-padding bg-gradient-cursor-accent&quot;>
          <div className=&quot;container-cursor&quot;>
            <div className=&quot;text-center mb-12&quot;>
              <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>
=======
      {_/* Demo Analysis Results */}
      {_analysisResults && (
        <section className="section-padding bg-gradient-cursor-accent">
          <div className="container-cursor">
            <div className="text-center mb-12">
              <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Code Quality Analysis Results
              </h2>
              <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
                Here's a sample code quality analysis. Get comprehensive insights for your own code.
              </p>
            </div>
            
            <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8&quot;>
              {/* Quality Score */}
<<<<<<< HEAD
              <Card className=&quot;border-gradient-teal text-center&quot;>
                <h3 className=&quot;text-2xl font-bold mb-6 text-white&quot;>Overall Quality Score</h3>
                <div className=&quot;text-6xl font-bold text-teal-400 mb-4&quot;>{analysisResults.qualityScore}/100</div>
                <div className=&quot;w-32 h-32 mx-auto mb-6&quot;>
                  <svg className=&quot;w-full h-full transform -rotate-90&quot; viewBox=&quot;0 0 36 36&quot;>
                    <path
                      d=&quot;M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831&quot;
                      fill=&quot;none&quot;
                      stroke=&quot;currentColor&quot;
                      strokeWidth=&quot;2&quot;
                      strokeDasharray={`${(analysisResults.qualityScore / 100) * 100}, 100`}
                      className=&quot;text-teal-500&quot;
=======
              <Card className="border-gradient-teal text-center">
                <h3 className="text-2xl font-bold mb-6 text-white">Overall Quality Score</h3>
                <div className="text-6xl font-bold text-teal-400 mb-4">{_analysisResults.qualityScore}/100</div>
                <div className="w-32 h-32 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray={_`${(analysisResults.qualityScore / 100) * 100}, 100`}
                      className="text-teal-500"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    />
                  </svg>
                </div>
                <p className=&quot;text-gray-400&quot;>Good code quality with room for improvement</p>
              </Card>

<<<<<<< HEAD
              {/* Issues Found */}
              <Card className=&quot;border-gradient-teal&quot;>
                <h3 className=&quot;text-2xl font-bold mb-6 text-white&quot;>Issues Found</h3>
                <div className=&quot;space-y-3&quot;>
                  {analysisResults.issues.map((issue, index) => (
                    <div key={index} className=&quot;flex items-start space-x-3&quot;>
                      {issue.type === 'error' ? (
                        <AlertTriangle className=&quot;w-5 h-5 text-red-400 mt-1 flex-shrink-0&quot; />
=======
              {_/* Issues Found */}
              <Card className="border-gradient-teal">
                <h3 className="text-2xl font-bold mb-6 text-white">Issues Found</h3>
                <div className="space-y-3">
                  {_analysisResults.issues.map(_(issue, _index) => (
                    <div key={index} className="flex items-start space-x-3">
                      {_issue.type === 'error' ? (
                        <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      ) : issue.type === 'warning' ? (
                        <AlertTriangle className=&quot;w-5 h-5 text-yellow-400 mt-1 flex-shrink-0&quot; />
                      ) : (
                        <CheckCircle className=&quot;w-5 h-5 text-blue-400 mt-1 flex-shrink-0&quot; />
                      )}
                      <div>
<<<<<<< HEAD
                        <span className=&quot;text-gray-300 text-sm&quot;>{issue.message}</span>
                        <div className=&quot;text-xs text-gray-500 mt-1&quot;>
                          Line {issue.line} • Severity: {issue.severity}
=======
                        <span className="text-gray-300 text-sm">{_issue.message}</span>
                        <div className="text-xs text-gray-500 mt-1">
                          Line {_issue.line} • Severity: {_issue.severity}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

<<<<<<< HEAD
              {/* Quality Metrics */}
              <Card className=&quot;border-gradient-teal&quot;>
                <h3 className=&quot;text-2xl font-bold mb-6 text-white&quot;>Quality Metrics</h3>
                <div className=&quot;space-y-4&quot;>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span className=&quot;text-gray-400&quot;>Complexity</span>
                    <span className=&quot;text-orange-400 font-bold&quot;>{analysisResults.metrics.complexity}</span>
                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span className=&quot;text-gray-400&quot;>Maintainability</span>
                    <span className=&quot;text-green-400 font-bold&quot;>{analysisResults.metrics.maintainability}</span>
                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span className=&quot;text-gray-400&quot;>Test Coverage</span>
                    <span className=&quot;text-blue-400 font-bold&quot;>{analysisResults.metrics.testCoverage}</span>
                  </div>
                  <div className=&quot;flex justify-between items-center&quot;>
                    <span className=&quot;text-gray-400&quot;>Security Score</span>
                    <span className=&quot;text-green-400 font-bold&quot;>{analysisResults.metrics.securityScore}</span>
=======
              {_/* Quality Metrics */}
              <Card className="border-gradient-teal">
                <h3 className="text-2xl font-bold mb-6 text-white">Quality Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Complexity</span>
                    <span className="text-orange-400 font-bold">{_analysisResults.metrics.complexity}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Maintainability</span>
                    <span className="text-green-400 font-bold">{_analysisResults.metrics.maintainability}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Test Coverage</span>
                    <span className="text-blue-400 font-bold">{_analysisResults.metrics.testCoverage}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Security Score</span>
                    <span className="text-green-400 font-bold">{_analysisResults.metrics.securityScore}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                </div>
              </Card>
            </div>

<<<<<<< HEAD
            {/* Recommendations */}
            <Card className=&quot;border-gradient-teal&quot;>
              <h3 className=&quot;text-2xl font-bold mb-6 text-white&quot;>Improvement Recommendations</h3>
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
                {analysisResults.recommendations.map((rec, index) => (
                  <div key={index} className=&quot;flex items-start space-x-3&quot;>
                    <CheckCircle className=&quot;w-5 h-5 text-teal-400 mt-1 flex-shrink-0&quot; />
                    <span className=&quot;text-gray-300&quot;>{rec}</span>
=======
            {_/* Recommendations */}
            <Card className="border-gradient-teal">
              <h3 className="text-2xl font-bold mb-6 text-white">Improvement Recommendations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {_analysisResults.recommendations.map(_(rec, _index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{_rec}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>
      )}

<<<<<<< HEAD
      {/* Pricing Section */}
      <section id=&quot;pricing&quot; className=&quot;section-padding bg-gradient-cursor&quot;>
        <div className=&quot;container-cursor&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>
=======
      {_/* Pricing Section */}
      <section id="pricing" className="section-padding bg-gradient-cursor">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-responsive-lg font-bold mb-8 gradient-text text-shadow">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Simple Pricing
            </h2>
            <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Choose the code quality analysis plan that best fits your development needs.
            </p>
          </div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            {pricing.map((plan, index) => (
=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {_pricing.map(_(plan, _index) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <Card
                key={index}
                className={_`card-hover border-gradient-teal ${plan.popular ? 'ring-2 ring-teal-500 scale-105' : ''}`}
                style={_{ animationDelay: `${index * 0.1}s` }}
              >
<<<<<<< HEAD
                {plan.popular && (
                  <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;>
                    <span className=&quot;bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium&quot;>
=======
                {_plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      Most Popular
                    </span>
                  </div>
                )}
                
<<<<<<< HEAD
                <div className=&quot;text-center mb-8&quot;>
                  <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{plan.name}</h3>
                  <div className=&quot;mb-6&quot;>
                    <span className=&quot;text-4xl font-bold text-white&quot;>{plan.price}</span>
                    <span className=&quot;text-gray-400&quot;>{plan.period}</span>
                  </div>
                  <p className=&quot;text-gray-400&quot;>{plan.description}</p>
                </div>

                <ul className=&quot;space-y-4 mb-8&quot;>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-teal-400 mr-3 flex-shrink-0&quot; />
                      {feature}
=======
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{_plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{_plan.price}</span>
                    <span className="text-gray-400">{_plan.period}</span>
                  </div>
                  <p className="text-gray-400">{_plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {_plan.features.map(_(feature, _featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                      {_feature}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </li>
                  ))}
                </ul>

                <Button
<<<<<<< HEAD
                  href=&quot;/contact&quot;
                  size=&quot;lg&quot;
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
=======
                  href="/contact"
                  size="lg"
                  className={_`w-full ${plan.popular ? 'bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700' : 'bg-gray-700 hover:bg-gray-600'} text-white`}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Get Started
                  <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className=&quot;section-padding bg-gradient-to-r from-teal-600 to-cyan-700 relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10&quot; />
        <div className=&quot;container-cursor text-center relative z-10&quot;>
          <h2 className=&quot;text-responsive-lg font-bold text-white mb-8 text-shadow-lg&quot;>
=======
      {_/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-teal-600 to-cyan-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size: 20px_20px] opacity-10" />
        <div className="container-cursor text-center relative z-10">
          <h2 className="text-responsive-lg font-bold text-white mb-8 text-shadow-lg">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            Ready to Improve Your Code Quality?
          </h2>
          <p className=&quot;text-responsive-md text-teal-100 mb-12 max-w-4xl mx-auto leading-relaxed&quot;>
            Join thousands of developers using our code quality checker to write better, safer, and more maintainable code.
          </p>
<<<<<<< HEAD
          <div className="flex flex-col sm: flex-row gap-6 justify-center">
=======
          <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            <Button
              href=&quot;/contact&quot;
              size=&quot;lg&quot;
              className=&quot;bg-white text-teal-600 hover:bg-gray-100 shadow-2xl&quot;
            >
              Start Free Trial
              <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
            </Button>
            <Button
              href=&quot;/contact&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-white text-white hover:bg-white hover:text-teal-600 shadow-2xl&quot;
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}