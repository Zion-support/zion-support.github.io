<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react'; interface SecurityThreat { id: string; type: "malware" | "phishing" | "ddos" | "brute-force" | "sql-injection" | "xss"; severity: "low" | "medium" | "high" | "critical"; source: string; target: string; timestamp: string; status: "active" | "blocked" | "investigating" | "resolved"; description: string; impact: string; } interface SecurityMetric { id: string; name: string; value: number; unit: string; change: number; changeType: "increase" | "decrease"; status: "secure" | "warning" | "critical"; icon: React.ComponentType<any>; } interface EnhancedSecurityDashboardProps { // Add your props here title?: string; subtitle?: string; showThreats?: boolean; autoRefresh?: boolean; const EnhancedSecurityDashboard: React.FC<EnhancedSecurityDashboardProps> = ({ title = "Enhanced Security Dashboard", " subtitle = "Real-time threat monitoring and security analytics for comprehensive protection", showThreats = true, autoRefresh = true; }) => { const [threats, setThreats] = useState<SecurityThreat[]>([ { id: "1", type: "ddos", severity: "high", source: "192.168.1.100", target: "Web Server", timestamp: "2024-01-15 14:30:00", status: "blocked", description: "Distributed Denial of Service attack detected", impact: "High traffic volume from multiple sources" }, { id: "2", type: "phishing", severity: "medium", source: "suspicious-email@domain.com", target: "User Accounts", timestamp: "2024-01-15 13:45:00", status: "investigating", description: "Phishing attempt targeting user credentials", impact: "Potential credential compromise" }, { id: "3", type: "brute-force", severity: "low", source: "203.45.67.89", target: "SSH Service", timestamp: "2024-01-15 12:20:00", status: "blocked", description: "Multiple failed login attempts detected", impact: "Account lockout protection activated" } ]); const [metrics, setMetrics] = useState<SecurityMetric[]>([ { id: "threats-blocked", name: "Threats Blocked", value: 127, unit: ", change: -15.2, changeType: "decrease", status: "secure", icon: Shield }, { id: "response-time", name: "Response Time", value: 45, unit: "ms", change: -8.5, changeType: "decrease", status: "secure", icon: Zap }, { id: "vulnerabilities", name: "Vulnerabilities", value: 3, unit: ", change: -25.0, changeType: "decrease", status: "warning", icon: AlertTriangle }, { id: "security-score", name: "Security Score", value: 94, unit: "/100", change: 2.1, changeType: "increase", status: "secure", icon: CheckCircle } ]); const [selectedThreat, setSelectedThreat] = useState<string | null>(null); const [timeRange, setTimeRange] = useState<"1h" | "6h" | "24h" | "7d">("24h"); useEffect(: unknown { if (!autoRefresh) return; const interval = setInterval(: unknown { // Simulate new threats if (Math.random() > 0.7) { const threatTypes = ["malware", phishing",ddos", brute-force"] as const; const severityLevels = ["low", medium",high"] as const; const targetSystems = ["Web Server", Database",API Gateway"]; const newThreat: SecurityThreat = { id: Date.now().toString(), type: threatTypes[Math.floor(Math.random() * threatTypes.length)] || "malware", severity: severityLevels[Math.floor(Math.random() * severityLevels.length)] || "medium", source: `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`, target: targetSystems[Math.floor(Math.random() * targetSystems.length)] || "Web Server", timestamp: new Date().toISOString().replace("T",).substring(0, 19), status: "active", description: "New security threat detected", impact: "Under investigation" }; setThreats(prev => [newThreat, ...prev.slice(0, 9)]); } }, 10000); return : unknown clearInterval(interval); }, [autoRefresh]); const getThreatTypeIcon = (type: string) => { switch (type) { " case "malware": return <Bug className="w-5 h-5" />" case "phishing": return <Mail className="w-5 h-5" />" case "ddos": return <Activity className="w-5 h-5" />" case "brute-force": return <Key className="w-5 h-5" />" case "sql-injection": return <Database className="w-5 h-5" />" case "xss": return <Code className="w-5 h-5" />" default: return <AlertTriangle className="w-5 h-5" /> } }; const getSeverityColor = (severity: string) => { switch (severity) { case "critical": return "text-red-600 bg-red-100 border-red-200"; case "high": return "text-orange-600 bg-orange-100 border-orange-200"; case "medium": return "text-yellow-600 bg-yellow-100 border-yellow-200"; case "low": return "text-blue-600 bg-blue-100 border-blue-200"; default: return "text-gray-600 bg-gray-100 border-gray-200"; } }; const getStatusColor = (status: string) => { switch (status) { case "active": return "text-red-600 bg-red-100"; case "blocked": return "text-green-600 bg-green-100"; case "investigating": return "text-yellow-600 bg-yellow-100"; case "resolved": return "text-blue-600 bg-blue-100"; default: return "text-gray-600 bg-gray-100"; } }; const getMetricStatusColor = (status: string) => { switch (status) { case "secure": return "text-green-600 bg-green-100"; case "warning": return "text-yellow-600 bg-yellow-100"; case "critical": return "text-red-600 bg-red-100"; default: return "text-gray-600 bg-gray-100"; } }; const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2}}}; const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5, " ease: "easeOut"}}}; return (" <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">" <div className="container mx-auto px-4"> <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}" className="text-center mb-16" >" <h2 className="text-4xl md:text-5xl font-bold mb-6"> {title} </h2>" <p className="text-xl text-gray-300 max-w-3xl mx-auto"> {subtitle} </p> </motion.div> {/* Security Metrics Overview */} <motion.div variants={containerVariants}" initial="hidden" whileInView="visible" viewport={{ once: true }}" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" > {metrics.map((metric) => { const IconComponent = metric.icon; return() <motion.div key={metric.id} variants={itemVariants} whileHover={{ scale: 1.02, y: -5 }}" className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 hover:bg-gray-800/70 transition-all duration-300" >" <div className="flex items-center justify-between mb-4">" <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">" <IconComponent className="w-6 h-6 text-blue-400" /> </div>` <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getMetricStatusColor(metric.status)}`}> {metric.status} </div> </div> " <h3 className="text-lg font-semibold text-gray-200 mb-2"> {metric.name} </h3> " <div className="flex items-end gap-2 mb-3">" <span className="text-3xl font-bold text-white"> {metric.value} </span>" <span className="text-lg text-gray-400 mb-1"> {metric.unit} </span> </div> " <div className="flex items-center gap-2"> {metric.changeType === "increase" ? (" <TrendingUp className="w-4 h-4 text-green-400" /> ) : (" <TrendingDown className="w-4 h-4 text-red-400" /> )}` <span className={`text-sm font-medium ${ metric.changeType === "increase" ? "text-green-400" : "text-red-400"` }`}> {Math.abs(metric.change).toFixed(1)}% </span>" <span className="text-sm text-gray-500">vs last period</span> </div> </motion.div> ); })} </motion.div> {/* Time Range Selector */} <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}" className="flex justify-center mb-12" >" <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50"> {(["1h",6h", 24h",7d"] as const).map((range) => ( <button key={range} onClick={() => setTimeRange(range)}` className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${ timeRange === range" ? "bg-blue-600 text-white shadow-lg" : "text-gray-300 hover:text-white hover:bg-gray-700/50"` }`} > {range} </button> ))} </div> </motion.div> {/* Security Threats */} {showThreats && <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}" className="mb-16" >" <div className="flex items-center justify-between mb-8">" <h3 className="text-2xl font-bold">Active Security Threats</h3>" <div className="flex items-center gap-4">" <div className="flex items-center gap-2">" <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>" <span className="text-sm text-gray-400">Live Monitoring</span> </div> </div> </div> " <div className="space-y-4"> {threats.map((threat <motion.div key={threat.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}" className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer" onClick={() => setSelectedThreat(selectedThreat === threat.id ? null : threat.id)} >" <div className="flex items-start justify-between">" <div className="flex items-start gap-4">` <div className={`w-12 h-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center border ${getSeverityColor(threat.severity)}`}> {getThreatTypeIcon(threat.type)} </div> " <div className="flex-1">" <div className="flex items-center gap-3 mb-2">" <h4 className="text-lg font-semibold text-white capitalize"> {threat.type.replace("-",)} Attack </h4>` <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(threat.severity)}`}> {threat.severity} </div>` <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(threat.status)}`}> {threat.status} </div> </div> " <p className="text-gray-300 mb-3">{threat.description}</p> " <div className="grid grid-cols-2 md: grid-cols-4 gap-4 text-sm"> <div>" <span className="text-gray-400">Source:</span>" <span className="text-white ml-2 font-mono">{threat.source}</span> </div> <div>" <span className="text-gray-400">Target:</span>" <span className="text-white ml-2">{threat.target}</span> </div> <div>" <span className="text-gray-400">Time:</span>" <span className="text-white ml-2">{threat.timestamp}</span> </div> <div>" <span className="text-gray-400">Impact:</span>" <span className="text-white ml-2">{threat.impact}</span> </div> </div> </div> </div> </div> {/* Expanded Threat Details */} <AnimatePresence> {selectedThreat === threat.id && ( <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}" className="mt-6 pt-6 border-t border-gray-700/50" >" <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> <div>" <h5 className="font-semibold text-gray-200 mb-3">Recommended Actions</h5>" <ul className="space-y-2 text-sm text-gray-300">" <li className="flex items-center gap-2">" <CheckCircle className="w-4 h-4 text-green-400" /> Block source IP address </li>" <li className="flex items-center gap-2">" <CheckCircle className="w-4 h-4 text-green-400" /> Update firewall rules </li>" <li className="flex items-center gap-2">" <CheckCircle className="w-4 h-4 text-green-400" /> Monitor for similar patterns </li> </ul> </div> <div>" <h5 className="font-semibold text-gray-200 mb-3">Security Metrics</h5>" <div className="space-y-2 text-sm">" <div className="flex justify-between">" <span className="text-gray-400">Risk Score:</span>" <span className="text-white">8.5/10</span> </div>" <div className="flex justify-between">" <span className="text-gray-400">Confidence:</span>" <span className="text-white">95%</span> </div>" <div className="flex justify-between">" <span className="text-gray-400">Response Time:</span>" <span className="text-white">2.3s</span> </div> </div> </div> </div> </motion.div> )} </AnimatePresence> </motion.div> ))} </div> </motion.div> )} {/* Security Summary */} <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}" className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl border border-blue-500/30 p-8 text-center" >" <h3 className="text-2xl font-bold mb-6"> Security Status Overview </h3>" <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> <div>" <div className="text-3xl font-bold mb-2 text-green-400"> {threats.filter(t => t.status === "blocked").length} </div>" <div className="text-blue-200">Threats Blocked</div> </div> <div>" <div className="text-3xl font-bold mb-2 text-yellow-400"> {threats.filter(t => t.status === "investigating").length} </div>" <div className="text-blue-200">Under Investigation</div> </div> <div>" <div className="text-3xl font-bold mb-2 text-blue-400"> {metrics.find(m => m.id === "security-score")?.value}% </div>" <div className="text-blue-200">Security Score</div> </div> </div> </motion.div> </div> </section> ); }; export default EnhancedSecurityDashboard;"` 
=======
<<<<<<< HEAD
import React from 'react'; interface SecurityThreat { id: string; type: "malware" | "phishing" | "ddos" | "brute-force" | "sql-injection" | "xss"; severity: "low" | "medium" | "high" | "critical"; source: string; target: string; timestamp: string; status: "active" | "blocked" | "investigating" | "resolved"; description: string; impact: string; } interface SecurityMetric { id: string; name: string; value: number; unit: string; change: number; changeType: "increase" | "decrease"; status: "secure" | "warning" | "critical"; icon: React.ComponentType<any>; } interface EnhancedSecurityDashboardProps { // Add your props here title?: string; subtitle?: string; showThreats?: boolean; autoRefresh?: boolean; const EnhancedSecurityDashboard: React.FC<EnhancedSecurityDashboardProps> = ({ title = "Enhanced Security Dashboard", " subtitle = "Real-time threat monitoring and security analytics for comprehensive protection", showThreats = true, autoRefresh = true; }) => { const [threats, setThreats] = useState<SecurityThreat[]>([ { id: "1", type: "ddos", severity: "high", source: "192.168.1.100", target: "Web Server", timestamp: "2024-01-15 14:30:00", status: "blocked", description: "Distributed Denial of Service attack detected", impact: "High traffic volume from multiple sources" }, { id: "2", type: "phishing", severity: "medium", source: "suspicious-email@domain.com", target: "User Accounts", timestamp: "2024-01-15 13:45:00", status: "investigating", description: "Phishing attempt targeting user credentials", impact: "Potential credential compromise" }, { id: "3", type: "brute-force", severity: "low", source: "203.45.67.89", target: "SSH Service", timestamp: "2024-01-15 12:20:00", status: "blocked", description: "Multiple failed login attempts detected", impact: "Account lockout protection activated" } ]); const [metrics, setMetrics] = useState<SecurityMetric[]>([ { id: "threats-blocked", name: "Threats Blocked", value: 127, unit: ", change: -15.2, changeType: "decrease", status: "secure", icon: Shield }, { id: "response-time", name: "Response Time", value: 45, unit: "ms", change: -8.5, changeType: "decrease", status: "secure", icon: Zap }, { id: "vulnerabilities", name: "Vulnerabilities", value: 3, unit: ", change: -25.0, changeType: "decrease", status: "warning", icon: AlertTriangle }, { id: "security-score", name: "Security Score", value: 94, unit: "/100", change: 2.1, changeType: "increase", status: "secure", icon: CheckCircle } ]); const [selectedThreat, setSelectedThreat] = useState<string | null>(null); const [timeRange, setTimeRange] = useState<"1h" | "6h" | "24h" | "7d">("24h"); useEffect(: unknown { if (!autoRefresh) return; const interval = setInterval(: unknown { // Simulate new threats if (Math.random() > 0.7) { const threatTypes = ["malware", phishing",ddos", brute-force"] as const; const severityLevels = ["low", medium",high"] as const; const targetSystems = ["Web Server", Database",API Gateway"]; const newThreat: SecurityThreat = { id: Date.now().toString(), type: threatTypes[Math.floor(Math.random() * threatTypes.length)] || "malware", severity: severityLevels[Math.floor(Math.random() * severityLevels.length)] || "medium", source: `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`, target: targetSystems[Math.floor(Math.random() * targetSystems.length)] || "Web Server", timestamp: new Date().toISOString().replace("T",).substring(0, 19), status: "active", description: "New security threat detected", impact: "Under investigation" }; setThreats(prev => [newThreat, ...prev.slice(0, 9)]); } }, 10000); return : unknown clearInterval(interval); }, [autoRefresh]); const getThreatTypeIcon = (type: string) => { switch (type) { " case "malware": return <Bug className="w-5 h-5" />;" case "phishing": return <Mail className="w-5 h-5" />;" case "ddos": return <Activity className="w-5 h-5" />;" case "brute-force": return <Key className="w-5 h-5" />;" case "sql-injection": return <Database className="w-5 h-5" />;" case "xss": return <Code className="w-5 h-5" />;" default: return <AlertTriangle className="w-5 h-5" />; } }; const getSeverityColor = (severity: string) => { switch (severity) { case "critical": return "text-red-600 bg-red-100 border-red-200"; case "high": return "text-orange-600 bg-orange-100 border-orange-200"; case "medium": return "text-yellow-600 bg-yellow-100 border-yellow-200"; case "low": return "text-blue-600 bg-blue-100 border-blue-200"; default: return "text-gray-600 bg-gray-100 border-gray-200"; } }; const getStatusColor = (status: string) => { switch (status) { case "active": return "text-red-600 bg-red-100"; case "blocked": return "text-green-600 bg-green-100"; case "investigating": return "text-yellow-600 bg-yellow-100"; case "resolved": return "text-blue-600 bg-blue-100"; default: return "text-gray-600 bg-gray-100"; } }; const getMetricStatusColor = (status: string) => { switch (status) { case "secure": return "text-green-600 bg-green-100"; case "warning": return "text-yellow-600 bg-yellow-100"; case "critical": return "text-red-600 bg-red-100"; default: return "text-gray-600 bg-gray-100"; } }; const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2}}}; const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5, " ease: "easeOut"}}}; return (" <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">" <div className="container mx-auto px-4"> <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}" className="text-center mb-16" >" <h2 className="text-4xl md:text-5xl font-bold mb-6"> {title} </h2>" <p className="text-xl text-gray-300 max-w-3xl mx-auto"> {subtitle} </p> </motion.div> {/* Security Metrics Overview */} <motion.div variants={containerVariants}" initial="hidden" whileInView="visible" viewport={{ once: true }}" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" > {metrics.map((metric) => { const IconComponent = metric.icon; return() <motion.div key={metric.id} variants={itemVariants} whileHover={{ scale: 1.02, y: -5 }}" className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 hover:bg-gray-800/70 transition-all duration-300" >" <div className="flex items-center justify-between mb-4">" <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">" <IconComponent className="w-6 h-6 text-blue-400" /> </div>` <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getMetricStatusColor(metric.status)}`}> {metric.status} </div> </div> " <h3 className="text-lg font-semibold text-gray-200 mb-2"> {metric.name} </h3> " <div className="flex items-end gap-2 mb-3">" <span className="text-3xl font-bold text-white"> {metric.value} </span>" <span className="text-lg text-gray-400 mb-1"> {metric.unit} </span> </div> " <div className="flex items-center gap-2"> {metric.changeType === "increase" ? (" <TrendingUp className="w-4 h-4 text-green-400" /> ) : (" <TrendingDown className="w-4 h-4 text-red-400" /> )}` <span className={`text-sm font-medium ${ metric.changeType === "increase" ? "text-green-400" : "text-red-400"` }`}> {Math.abs(metric.change).toFixed(1)}% </span>" <span className="text-sm text-gray-500">vs last period</span> </div> </motion.div> ); })} </motion.div> {/* Time Range Selector */} <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}" className="flex justify-center mb-12" >" <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50"> {(["1h",6h", 24h",7d"] as const).map((range) => ( <button key={range} onClick={() => setTimeRange(range)}` className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${ timeRange === range" ? "bg-blue-600 text-white shadow-lg" : "text-gray-300 hover:text-white hover:bg-gray-700/50"` }`} > {range} </button> ))} </div> </motion.div> {/* Security Threats */} {showThreats && <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}" className="mb-16" >" <div className="flex items-center justify-between mb-8">" <h3 className="text-2xl font-bold">Active Security Threats</h3>" <div className="flex items-center gap-4">" <div className="flex items-center gap-2">" <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>" <span className="text-sm text-gray-400">Live Monitoring</span> </div> </div> </div> " <div className="space-y-4"> {threats.map((threat <motion.div key={threat.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}" className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer" onClick={() => setSelectedThreat(selectedThreat === threat.id ? null : threat.id)} >" <div className="flex items-start justify-between">" <div className="flex items-start gap-4">` <div className={`w-12 h-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center border ${getSeverityColor(threat.severity)}`}> {getThreatTypeIcon(threat.type)} </div> " <div className="flex-1">" <div className="flex items-center gap-3 mb-2">" <h4 className="text-lg font-semibold text-white capitalize"> {threat.type.replace("-",)} Attack </h4>` <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(threat.severity)}`}> {threat.severity} </div>` <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(threat.status)}`}> {threat.status} </div> </div> " <p className="text-gray-300 mb-3">{threat.description}</p> " <div className="grid grid-cols-2 md: grid-cols-4 gap-4 text-sm"> <div>" <span className="text-gray-400">Source:</span>" <span className="text-white ml-2 font-mono">{threat.source}</span> </div> <div>" <span className="text-gray-400">Target:</span>" <span className="text-white ml-2">{threat.target}</span> </div> <div>" <span className="text-gray-400">Time:</span>" <span className="text-white ml-2">{threat.timestamp}</span> </div> <div>" <span className="text-gray-400">Impact:</span>" <span className="text-white ml-2">{threat.impact}</span> </div> </div> </div> </div> </div> {/* Expanded Threat Details */} <AnimatePresence> {selectedThreat === threat.id && ( <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}" className="mt-6 pt-6 border-t border-gray-700/50" >" <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> <div>" <h5 className="font-semibold text-gray-200 mb-3">Recommended Actions</h5>" <ul className="space-y-2 text-sm text-gray-300">" <li className="flex items-center gap-2">" <CheckCircle className="w-4 h-4 text-green-400" /> Block source IP address </li>" <li className="flex items-center gap-2">" <CheckCircle className="w-4 h-4 text-green-400" /> Update firewall rules </li>" <li className="flex items-center gap-2">" <CheckCircle className="w-4 h-4 text-green-400" /> Monitor for similar patterns </li> </ul> </div> <div>" <h5 className="font-semibold text-gray-200 mb-3">Security Metrics</h5>" <div className="space-y-2 text-sm">" <div className="flex justify-between">" <span className="text-gray-400">Risk Score:</span>" <span className="text-white">8.5/10</span> </div>" <div className="flex justify-between">" <span className="text-gray-400">Confidence:</span>" <span className="text-white">95%</span> </div>" <div className="flex justify-between">" <span className="text-gray-400">Response Time:</span>" <span className="text-white">2.3s</span> </div> </div> </div> </div> </motion.div> )} </AnimatePresence> </motion.div> ))} </div> </motion.div> )} {/* Security Summary */} <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}" className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl border border-blue-500/30 p-8 text-center" >" <h3 className="text-2xl font-bold mb-6"> Security Status Overview </h3>" <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> <div>" <div className="text-3xl font-bold mb-2 text-green-400"> {threats.filter(t => t.status === "blocked").length} </div>" <div className="text-blue-200">Threats Blocked</div> </div> <div>" <div className="text-3xl font-bold mb-2 text-yellow-400"> {threats.filter(t => t.status === "investigating").length} </div>" <div className="text-blue-200">Under Investigation</div> </div> <div>" <div className="text-3xl font-bold mb-2 text-blue-400"> {metrics.find(m => m.id === "security-score")?.value}% </div>" <div className="text-blue-200">Security Score</div> </div> </div> </motion.div> </div> </section> ); }; export default EnhancedSecurityDashboard;"` 
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
<<<<<<< HEAD
  AlertTriangle,
  Activity,
  Zap,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Bug,
  Mail,
  Key,
  Database,
  Code
=======
  Zap,
  AlertTriangle,
  CheckCircle,
  Bug,
  Mail,
  Activity,
  Key,
  Database,
  Code,
  TrendingUp,
<<<<<<< HEAD
  TrendingDown
=======
  TrendingDown'
>>>>>>> main
>>>>>>> main
} from 'lucide-react';

interface SecurityThreat {
  id: string;
  type: "malware" | "phishing" | "ddos" | "brute-force" | "sql-injection" | "xss";
  severity: "low" | "medium" | "high" | "critical";
  source: string;
  target: string;
  timestamp: string;
<<<<<<< HEAD
  status: "active" | "blocked" | "investigating" | "resolved";
  description: string;
  impact: string;
=======
<<<<<<< HEAD
  status: "active" | "blocked" | "investigating" | "resolved";
  description: string;
  impact: string;
=======
<<<<<<< HEAD
  status: 'active' | 'blocked' | 'investigating' | 'resolved';
  descriptio,
    n: string;
  impac,
    t: string;
=======
  status: "active" | "blocked" | "investigating" | "resolved";
  description: string;
  impact: string;
>>>>>>> main
>>>>>>> main
>>>>>>> main
}

interface SecurityMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  change: number;
<<<<<<< HEAD
  changeType: "increase" | "decrease";
  status: "secure" | "warning" | "critical";
  icon: React.ComponentType<any>;
=======
<<<<<<< HEAD
  changeType: "increase" | "decrease";
  status: "secure" | "warning" | "critical";
  icon: React.ComponentType<any>;
=======
<<<<<<< HEAD
  changeType: 'increase' | 'decrease';
  statu,
    s: 'secure' | 'warning' | 'critical';
  ico,
    n: React.ComponentType<any>;
=======
  changeType: "increase" | "decrease";
  status: "secure" | "warning" | "critical";
  icon: React.ComponentType<any>;
>>>>>>> main
>>>>>>> main
>>>>>>> main
}

interface EnhancedSecurityDashboardProps {
  title?: string;
  subtitle?: string;
  showThreats?: boolean;
  autoRefresh?: boolean;
}

<<<<<<< HEAD
const EnhancedSecurityDashboard: React.FC<EnhancedSecurityDashboardProps> = ({
  title = "Enhanced Security Dashboard",
  subtitle = "Real-time threat monitoring and security analytics for comprehensive protection",
=======
<<<<<<< HEAD
const EnhancedSecurityDashboard: React.FC<EnhancedSecurityDashboardProps> = ({
  title = "Enhanced Security Dashboard",
  subtitle = "Real-time threat monitoring and security analytics for comprehensive protection",
=======
<<<<<<< HEAD
const EnhancedSecurityDashboard: React.FC<EnhancedSecurityDashboardProps> = ({'
  title = 'Enhanced Security Dashboard',
  subtitle = 'Real-time threat monitoring and security analytics for comprehensive protection',
=======
const EnhancedSecurityDashboard: React.FC<EnhancedSecurityDashboardProps> = ({
  title = "Enhanced Security Dashboard",
  subtitle = "Real-time threat monitoring and security analytics for comprehensive protection",
>>>>>>> main
>>>>>>> main
>>>>>>> main
  showThreats = true,
  autoRefresh = true
}) => {
  const [threats, setThreats] = useState<SecurityThreat[]>([
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    {'
      id: '1',
      type: 'ddos',
      severity: 'high',
      source: '192.168.1.100',
      target: 'Web Server',
      timestamp: '2024-01-15 1,
    4:3,
    0:00',
      status: 'blocked',
      description: 'Distributed Denial of Service attack detected',
      impact: 'High traffic volume from multiple sources'
    },
    {'
      id: '2',
      type: 'phishing',
      severity: 'medium',
      source: 'suspicious-email@domain.com',
      target: 'User Accounts',
      timestamp: '2024-01-15 1,
    3:4,
    5:00',
      status: 'investigating',
      description: 'Phishing attempt targeting user credentials',
      impact: 'Potential credential compromise'
    },
    {'
      id: '3',
      type: 'brute-force',
      severity: 'low',
      source: '203.45.67.89',
      target: 'SSH Service',
      timestamp: '2024-01-15 1,
    2:2,
    0:00',
      status: 'blocked',
      description: 'Multiple failed login attempts detected',
      impact: 'Account lockout protection activated'
=======
>>>>>>> main
>>>>>>> main
    {
      id: "1",
      type: "ddos",
      severity: "high",
      source: "192.168.1.100",
      target: "Web Server",
      timestamp: "2024-01-15 14:30:00",
      status: "blocked",
      description: "Distributed Denial of Service attack detected",
      impact: "High traffic volume from multiple sources"
    },
    {
      id: "2",
      type: "phishing",
      severity: "medium",
      source: "suspicious-email@domain.com",
      target: "User Accounts",
      timestamp: "2024-01-15 13:45:00",
      status: "investigating",
      description: "Phishing attempt targeting user credentials",
      impact: "Potential credential compromise"
    },
    {
      id: "3",
      type: "brute-force",
      severity: "low",
      source: "203.45.67.89",
      target: "SSH Service",
      timestamp: "2024-01-15 12:20:00",
      status: "blocked",
      description: "Multiple failed login attempts detected",
      impact: "Account lockout protection activated"
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
    }
  ]);

  const [metrics, setMetrics] = useState<SecurityMetric[]>([
<<<<<<< HEAD
    {
      id: "threats-blocked",
      name: "Threats Blocked",
=======
<<<<<<< HEAD
    {
      id: "threats-blocked",
      name: "Threats Blocked",
=======
<<<<<<< HEAD
    {'
      id: 'threats-blocked',
      name: 'Threats Blocked',
=======
    {
      id: "threats-blocked",
      name: "Threats Blocked",
>>>>>>> main
>>>>>>> main
>>>>>>> main
      value: 127,
      unit: "",
      change: -15.2,
      changeType: "decrease",
      status: "secure",
      icon: Shield
    },
<<<<<<< HEAD
    {
      id: "response-time",
      name: "Response Time",
=======
<<<<<<< HEAD
    {
      id: "response-time",
      name: "Response Time",
=======
<<<<<<< HEAD
    {'
      id: 'response-time',
      name: 'Response Time',
=======
    {
      id: "response-time",
      name: "Response Time",
>>>>>>> main
>>>>>>> main
>>>>>>> main
      value: 45,
      unit: "ms",
      change: -8.5,
      changeType: "decrease",
      status: "secure",
      icon: Zap
    },
<<<<<<< HEAD
    {
      id: "vulnerabilities",
      name: "Vulnerabilities",
=======
<<<<<<< HEAD
    {
      id: "vulnerabilities",
      name: "Vulnerabilities",
=======
<<<<<<< HEAD
    {'
      id: 'vulnerabilities',
      name: 'Vulnerabilities',
=======
    {
      id: "vulnerabilities",
      name: "Vulnerabilities",
>>>>>>> main
>>>>>>> main
>>>>>>> main
      value: 3,
      unit: "",
      change: -25.0,
      changeType: "decrease",
      status: "warning",
      icon: AlertTriangle
    },
<<<<<<< HEAD
    {
      id: "security-score",
      name: "Security Score",
=======
<<<<<<< HEAD
    {
      id: "security-score",
      name: "Security Score",
=======
<<<<<<< HEAD
    {'
      id: 'security-score',
      name: 'Security Score',
=======
    {
      id: "security-score",
      name: "Security Score",
>>>>>>> main
>>>>>>> main
>>>>>>> main
      value: 94,
      unit: "/100",
      change: 2.1,
      changeType: "increase",
      status: "secure",
      icon: CheckCircle
    }
  ]);

  const [selectedThreat, setSelectedThreat] = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState<"1h" | "6h" | "24h" | "7d">("24h");

  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      // Simulate new threats
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
      if (Math.random() > 0.7) {'
        const threatTypes = ['malware', 'phishing', 'ddos', 'brute-force'] as const;
        const severityLevels = ['low', 'medium', 'high'] as const;
        const targetSystems = ['Web Server', 'Database', 'API Gateway'];

        const newThreat: SecurityThreat = {
          i,
    d: Date.now().toString(),
          type: threatTypes[Math.floor(Math.random() * threatTypes.length)] || 'malware',
          severity: severityLevels[Math.floor(Math.random() * severityLevels.length)] || 'medium',
          source: `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,`
          target: targetSystems[Math.floor(Math.random() * targetSystems.length)] || 'Web Server',
          timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
          status: 'active',
          description: 'New security threat detected',
          impact: 'Under investigation'
=======
>>>>>>> main
>>>>>>> main
      if (Math.random() > 0.7) {
        const threatTypes = ["malware", "phishing", "ddos", "brute-force"] as const;
        const severityLevels = ["low", "medium", "high"] as const;
        const targetSystems = ["Web Server", "Database", "API Gateway"];
<<<<<<< HEAD
        
=======

>>>>>>> main
        const newThreat: SecurityThreat = {
          id: Date.now().toString(),
          type: threatTypes[Math.floor(Math.random() * threatTypes.length)] || "malware",
          severity: severityLevels[Math.floor(Math.random() * severityLevels.length)] || "medium",
          source: `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
          target: targetSystems[Math.floor(Math.random() * targetSystems.length)] || "Web Server",
          timestamp: new Date().toISOString().replace("T", " ").substring(0, 19),
          status: "active",
          description: "New security threat detected",
          impact: "Under investigation"
<<<<<<< HEAD
        };
        
=======
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
        };

>>>>>>> main
        setThreats(prev => [newThreat, ...prev.slice(0, 9)]);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [autoRefresh]);

  const getThreatTypeIcon = (type: string) => {
<<<<<<< HEAD
    switch (type) {
      case "malware": return <Bug className="w-5 h-5" />;
      case "phishing": return <Mail className="w-5 h-5" />;
      case "ddos": return <Activity className="w-5 h-5" />;
      case "brute-force": return <Key className="w-5 h-5" />;
      case "sql-injection": return <Database className="w-5 h-5" />;
      case "xss": return <Code className="w-5 h-5" />;
      default: return <AlertTriangle className="w-5 h-5" />;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    switch (type) {'
      case 'malware':'
        return <Bug className="w-5 h-5" />;"
      case 'phishing':'
        return <Mail className="w-5 h-5" />;"
      case 'ddos':'
        return <Activity className="w-5 h-5" />;"
      case 'brute-force':'
        return <Key className="w-5 h-5" />;"
      case 'sql-injection':'
        return <Database className="w-5 h-5" />;"
      case 'xss':'
=======
>>>>>>> main
    switch (type) {
      case "malware":
        return <Bug className="w-5 h-5" />;
      case "phishing":
        return <Mail className="w-5 h-5" />;
      case "ddos":
        return <Activity className="w-5 h-5" />;
      case "brute-force":
        return <Key className="w-5 h-5" />;
      case "sql-injection":
        return <Database className="w-5 h-5" />;
      case "xss":
<<<<<<< HEAD
        return <Code className="w-5 h-5" />;
      default:
=======
>>>>>>> main
        return <Code className="w-5 h-5" />;
      defaul,
    t:"
>>>>>>> main
        return <AlertTriangle className="w-5 h-5" />;
>>>>>>> main
    }
  };

  const getSeverityColor = (severity: string) => {
<<<<<<< HEAD
    switch (severity) {
      case "critical": return "text-red-600 bg-red-100 border-red-200";
      case "high": return "text-orange-600 bg-orange-100 border-orange-200";
      case "medium": return "text-yellow-600 bg-yellow-100 border-yellow-200";
      case "low": return "text-blue-600 bg-blue-100 border-blue-200";
      default: return "text-gray-600 bg-gray-100 border-gray-200";
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    switch (severity) {"
      case 'critical':'
        return 'text-red-600 bg-red-100 border-red-200';
      case 'high':'
        return 'text-orange-600 bg-orange-100 border-orange-200';
      case 'medium':'
        return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'low':'
        return 'text-blue-600 bg-blue-100 border-blue-200';
      defaul,
    t:'
        return 'text-gray-600 bg-gray-100 border-gray-200';
=======
>>>>>>> main
    switch (severity) {
      case "critical":
        return "text-red-600 bg-red-100 border-red-200";
      case "high":
        return "text-orange-600 bg-orange-100 border-orange-200";
      case "medium":
        return "text-yellow-600 bg-yellow-100 border-yellow-200";
      case "low":
        return "text-blue-600 bg-blue-100 border-blue-200";
      default:
        return "text-gray-600 bg-gray-100 border-gray-200";
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
    }
  };

  const getStatusColor = (status: string) => {
<<<<<<< HEAD
    switch (status) {
      case "active": return "text-red-600 bg-red-100";
      case "blocked": return "text-green-600 bg-green-100";
      case "investigating": return "text-yellow-600 bg-yellow-100";
      case "resolved": return "text-blue-600 bg-blue-100";
      default: return "text-gray-600 bg-gray-100";
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    switch (status) {'
      case 'active':'
        return 'text-red-600 bg-red-100';
      case 'blocked':'
        return 'text-green-600 bg-green-100';
      case 'investigating':'
        return 'text-yellow-600 bg-yellow-100';
      case 'resolved':'
        return 'text-blue-600 bg-blue-100';
      defaul,
    t:'
        return 'text-gray-600 bg-gray-100';
=======
>>>>>>> main
    switch (status) {
      case "active":
        return "text-red-600 bg-red-100";
      case "blocked":
        return "text-green-600 bg-green-100";
      case "investigating":
        return "text-yellow-600 bg-yellow-100";
      case "resolved":
        return "text-blue-600 bg-blue-100";
      default:
        return "text-gray-600 bg-gray-100";
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
    }
  };

  const getMetricStatusColor = (status: string) => {
<<<<<<< HEAD
    switch (status) {
      case "secure": return "text-green-600 bg-green-100";
      case "warning": return "text-yellow-600 bg-yellow-100";
      case "critical": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    switch (status) {'
      case 'secure':'
        return 'text-green-600 bg-green-100';
      case 'warning':'
        return 'text-yellow-600 bg-yellow-100';
      case 'critical':'
        return 'text-red-600 bg-red-100';
      defaul,
    t:'
        return 'text-gray-600 bg-gray-100';
=======
>>>>>>> main
    switch (status) {
      case "secure":
        return "text-green-600 bg-green-100";
      case "warning":
        return "text-yellow-600 bg-yellow-100";
      case "critical":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
    }
  };

  const containerVariants = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
<<<<<<< HEAD
=======
=======
    hidden: { opacit,
    y: 0 },
    visible: {
      opacit,
    y: 1,
      transition: {
        staggerChildre,
    n: 0.1,
>>>>>>> main
>>>>>>> main
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
<<<<<<< HEAD
=======
=======
    hidden: { ,
    y: 20, opacity: 0 },
    visible: {
      ,
    y: 0,
      opacity: 1,
      transition: {
<<<<<<< HEAD
        duratio,
    n: 0.5,
        ease: 'easeOut'
=======
        duration: 0.5,
        ease: "easeOut"
>>>>>>> main
>>>>>>> main
>>>>>>> main
      }
    }
  };

<<<<<<< HEAD
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
=======
<<<<<<< HEAD
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
=======
  return ('
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">"
>>>>>>> main
>>>>>>> main
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h2>
<<<<<<< HEAD
=======
=======
          viewport={{ once: true }}"
          className="text-center mb-16"
        >"
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h2>"
>>>>>>> main
>>>>>>> main
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Security Metrics Overview */}
        <motion.div
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
<<<<<<< HEAD
        >
          {metrics.map((metric) => {
            const IconComponent = metric.icon;
=======
=======
          variants={containerVariants}"
          initial="hidden""
          whileInView="visible"
          viewport={{ once: true }}"
          className="grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-4 gap-6 mb-16"
>>>>>>> main
        >
          {metrics.map((metric) => {
            const IconComponent = metric.icon;

>>>>>>> main
            return (
              <motion.div
                key={metric.id}
                variants={itemVariants}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-blue-400" />
                  </div>
<<<<<<< HEAD
=======
=======
                whileHover={{ scale: 1.02, y: -5 }}"
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 hover:bg-gray-800/70 transition-all duration-300"
              >"
                <div className="flex items-center justify-between mb-4">"
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">"
                    <IconComponent className="w-6 h-6 text-blue-400" />
                  </div>"
>>>>>>> main
>>>>>>> main
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getMetricStatusColor(metric.status)}`}>
                    {metric.status}
                  </div>
                </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main

                <h3 className="text-lg font-semibold text-gray-200 mb-2">
                  {metric.name}
                </h3>

                <div className="flex items-end gap-2 mb-3">
                  <span className="text-3xl font-bold text-white">
                    {metric.value}
                  </span>
<<<<<<< HEAD
=======
=======
`
                <h3 className="text-lg font-semibold text-gray-200 mb-2">
                  {metric.name}
                </h3>
"
                <div className="flex items-end gap-2 mb-3">"
                  <span className="text-3xl font-bold text-white">
                    {metric.value}
                  </span>"
>>>>>>> main
>>>>>>> main
                  <span className="text-lg text-gray-400 mb-1">
                    {metric.unit}
                  </span>
                </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main

                <div className="flex items-center gap-2">
                  {metric.changeType === "increase" ? (
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-400" />
                  )}
                  <span className={`text-sm font-medium ${
                    metric.changeType === "increase" ? "text-green-400" : "text-red-400"
                  }`}>
                    {Math.abs(metric.change).toFixed(1)}%
                  </span>
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
"
                <div className="flex items-center gap-2">"
                  {metric.changeType === 'increase' ? ('
=======

                <div className="flex items-center gap-2">
                  {metric.changeType === "increase" ? (
>>>>>>> main
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  ) : ("
                    <TrendingDown className="w-4 h-4 text-red-400" />
<<<<<<< HEAD
                  )}"
                  <span className={`text-sm font-medium ${`
                    metric.changeType === 'increase' ? 'text-green-400' : 'text-red-400''
=======
                  )}
                  <span className={`text-sm font-medium ${
                    metric.changeType === "increase" ? "text-green-400" : "text-red-400"
>>>>>>> main
                  }`}>
                    {Math.abs(metric.change).toFixed(1)}%
                  </span>`
>>>>>>> main
>>>>>>> main
                  <span className="text-sm text-gray-500">vs last period</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Time Range Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50">
            {(["1h", "6h", "24h", "7d"] as const).map((range) => (
<<<<<<< HEAD
=======
=======
          viewport={{ once: true }}"
          className="flex justify-center mb-12"
<<<<<<< HEAD
        >"
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50">"
            {(['1h', '6h', '24h', '7d'] as const).map((range) => (
=======
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50">
            {(["1h", "6h", "24h", "7d"] as const).map((range) => (
>>>>>>> main
>>>>>>> main
>>>>>>> main
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
<<<<<<< HEAD
                  timeRange === range
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-gray-700/50"
=======
<<<<<<< HEAD
                  timeRange === range
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-gray-700/50"
=======
<<<<<<< HEAD
                  timeRange === range`
                    ? 'bg-blue-600 text-white shadow-lg''
                    : 'text-gray-300 hover:text-white hove,
    r:bg-gray-700/50''
=======
                  timeRange === range
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-gray-700/50"
>>>>>>> main
>>>>>>> main
>>>>>>> main
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Security Threats */}
        {showThreats && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">Active Security Threats</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
<<<<<<< HEAD
=======
=======
            viewport={{ once: true }}`
            className="mb-16"
          >"
            <div className="flex items-center justify-between mb-8">"
              <h3 className="text-2xl font-bold">Active Security Threats</h3>"
              <div className="flex items-center gap-4">"
                <div className="flex items-center gap-2">"
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>"
>>>>>>> main
>>>>>>> main
                  <span className="text-sm text-gray-400">Live Monitoring</span>
                </div>
              </div>
            </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
"
>>>>>>> main
>>>>>>> main
            <div className="space-y-4">
              {threats.map((threat) => (
                <motion.div
                  key={threat.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedThreat(selectedThreat === threat.id ? null : threat.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center border ${getSeverityColor(threat.severity)}`}>
                        {getThreatTypeIcon(threat.type)}
                      </div>
<<<<<<< HEAD
=======
=======
                  transition={{ duration: 0.5 }}"
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedThreat(selectedThreat === threat.id ? null : threat.id)}
                >"
                  <div className="flex items-start justify-between">"
                    <div className="flex items-start gap-4">"
                      <div className={`w-12 h-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center border ${getSeverityColor(threat.severity)}`}>
                        {getThreatTypeIcon(threat.type)}
                      </div>
<<<<<<< HEAD
`
                      <div className="flex-1">"
                        <div className="flex items-center gap-3 mb-2">"
                          <h4 className="text-lg font-semibold text-white capitalize">"
                            {threat.type.replace('-', ' ')} Attack
                          </h4>'
=======
>>>>>>> main
>>>>>>> main

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-semibold text-white capitalize">
                            {threat.type.replace("-", " ")} Attack
                          </h4>
<<<<<<< HEAD
                          <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(threat.severity)}`}>
                            {threat.severity}
                          </div>
=======
<<<<<<< HEAD
                          <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(threat.severity)}`}>
                            {threat.severity}
                          </div>
=======
>>>>>>> main
                          <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(threat.severity)}`}>
                            {threat.severity}
                          </div>`
>>>>>>> main
>>>>>>> main
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(threat.status)}`}>
                            {threat.status}
                          </div>
                        </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main

                        <p className="text-gray-300 mb-3">{threat.description}</p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">Source:</span>
                            <span className="text-white ml-2 font-mono">{threat.source}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Target:</span>
                            <span className="text-white ml-2">{threat.target}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Time:</span>
                            <span className="text-white ml-2">{threat.timestamp}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Impact:</span>
<<<<<<< HEAD
=======
=======
`
                        <p className="text-gray-300 mb-3">{threat.description}</p>
"
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>"
                            <span className="text-gray-400">Sourc,
    e:</span>"
                            <span className="text-white ml-2 font-mono">{threat.source}</span>
                          </div>
                          <div>"
                            <span className="text-gray-400">Target:</span>"
                            <span className="text-white ml-2">{threat.target}</span>
                          </div>
                          <div>"
                            <span className="text-gray-400">Time:</span>"
                            <span className="text-white ml-2">{threat.timestamp}</span>
                          </div>
                          <div>"
                            <span className="text-gray-400">Impact:</span>"
>>>>>>> main
>>>>>>> main
                            <span className="text-white ml-2">{threat.impact}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Threat Details */}
                  <AnimatePresence>
                    {selectedThreat === threat.id && (
                      <motion.div
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-gray-700/50"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold text-gray-200 mb-3">Recommended Actions</h5>
                            <ul className="space-y-2 text-sm text-gray-300">
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                Block source IP address
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                Update firewall rules
                              </li>
                              <li className="flex items-center gap-2">
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
                        initial={{ opacity: 0, height: 0 }}"
                        animate={{ opacity: 1, height: 'auto' }}
=======
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
>>>>>>> main
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-gray-700/50"
                      >"
                        <div className="grid grid-cols-1 md: grid-cols-2 gap-6">
                          <div>"
                            <h5 className="font-semibold text-gray-200 mb-3">Recommended Actions</h5>"
                            <ul className="space-y-2 text-sm text-gray-300">"
                              <li className="flex items-center gap-2">"
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                Block source IP address
                              </li>"
                              <li className="flex items-center gap-2">"
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                Update firewall rules
                              </li>"
                              <li className="flex items-center gap-2">"
>>>>>>> main
>>>>>>> main
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                Monitor for similar patterns
                              </li>
                            </ul>
                          </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
                          <div>
                            <h5 className="font-semibold text-gray-200 mb-3">Security Metrics</h5>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-400">Risk Score:</span>
                                <span className="text-white">8.5/10</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Confidence:</span>
                                <span className="text-white">95%</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-400">Response Time:</span>
<<<<<<< HEAD
=======
=======
                          <div>"
                            <h5 className="font-semibold text-gray-200 mb-3">Security Metrics</h5>"
                            <div className="space-y-2 text-sm">"
                              <div className="flex justify-between">"
                                <span className="text-gray-400">Risk Score:</span>"
                                <span className="text-white">8.5/10</span>
                              </div>"
                              <div className="flex justify-between">"
                                <span className="text-gray-400">Confidenc,
    e:</span>"
                                <span className="text-white">95%</span>
                              </div>"
                              <div className="flex justify-between">"
                                <span className="text-gray-400">Response Tim,
    e:</span>"
>>>>>>> main
>>>>>>> main
                                <span className="text-white">2.3s</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Security Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
<<<<<<< HEAD
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl border border-blue-500/30 p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">
            Security Status Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
=======
<<<<<<< HEAD
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl border border-blue-500/30 p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Security Status Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
=======
          viewport={{ once: true }}"
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl border border-blue-500/30 p-8 text-center"
        >"
          <h3 className="text-2xl font-bold mb-6">Security Status Overview</h3>"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<<<<<<< HEAD
            <div>"
              <div className="text-3xl font-bold mb-2 text-green-400">"
                {threats.filter(t => t.status === 'blocked').length}
              </div>'
              <div className="text-blue-200">Threats Blocked</div>
            </div>
            <div>"
              <div className="text-3xl font-bold mb-2 text-yellow-400">"
                {threats.filter(t => t.status === 'investigating').length}
              </div>'
              <div className="text-blue-200">Under Investigation</div>
            </div>
            <div>"
              <div className="text-3xl font-bold mb-2 text-blue-400">"
                {metrics.find(m => m.id === 'security-score')?.value}%
              </div>'
=======
>>>>>>> main
>>>>>>> main
            <div>
              <div className="text-3xl font-bold mb-2 text-green-400">
                {threats.filter(t => t.status === "blocked").length}
              </div>
              <div className="text-blue-200">Threats Blocked</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-yellow-400">
                {threats.filter(t => t.status === "investigating").length}
              </div>
              <div className="text-blue-200">Under Investigation</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-blue-400">
                {metrics.find(m => m.id === "security-score")?.value}%
              </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
              <div className="text-blue-200">Security Score</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default EnhancedSecurityDashboard;
=======
<<<<<<< HEAD
export default EnhancedSecurityDashboard;
=======
<<<<<<< HEAD
export default EnhancedSecurityDashboard;"
=======
export default EnhancedSecurityDashboard;
=======
import React from 'react'; interface SecurityThreat { id: string; type: "malware" | "phishing" | "ddos" | "brute-force" | "sql-injection" | "xss"; severity: "low" | "medium" | "high" | "critical"; source: string; target: string; timestamp: string; status: "active" | "blocked" | "investigating" | "resolved"; description: string; impact: string; } interface SecurityMetric { id: string; name: string; value: number; unit: string; change: number; changeType: "increase" | "decrease"; status: "secure" | "warning" | "critical"; icon: React.ComponentType<any>; } interface EnhancedSecurityDashboardProps { // Add your props here title?: string; subtitle?: string; showThreats?: boolean; autoRefresh?: boolean; const EnhancedSecurityDashboard: React.FC<EnhancedSecurityDashboardProps> = ({ title = "Enhanced Security Dashboard, subtitle = "Real-time threat monitoring and security analytics for comprehensive protection", showThreats = true, autoRefresh = true; }) => { const [threats, setThreats] = useState<SecurityThreat[]>([ { id: "1", type: "ddos", severity: "high", source: "192.168.1.100", target: "Web Server", timestamp: "2024-01-15 14:30:00", status: "blocked", description: "Distributed Denial of Service attack detected", impact: "High traffic volume from multiple sources" }, { id: "2", type: "phishing", severity: "medium", source: "suspicious-email@domain.com", target: "User Accounts", timestamp: "2024-01-15 13:45:00", status: "investigating", description: "Phishing attempt targeting user credentials", impact: "Potential credential compromise" }, { id: "3", type: "brute-force", severity: "low", source: "203.45.67.89", target: "SSH Service", timestamp: "2024-01-15 12:20:00", status: "blocked", description: "Multiple failed login attempts detected", impact: "Account lockout protection activated" } ]); const [metrics, setMetrics] = useState<SecurityMetric[]>([ { id: "threats-blocked", name: "Threats Blocked", value: 127, unit: ", change: -15.2, changeType: "decrease", status: "secure", icon: Shield }, { id: "response-time", name: "Response Time", value: 45, unit: "ms", change: -8.5, changeType: "decrease", status: "secure", icon: Zap }, { id: "vulnerabilities", name: "Vulnerabilities", value: 3, unit: ", change: -25.0, changeType: "decrease", status: "warning", icon: AlertTriangle }, { id: "security-score", name: "Security Score", value: 94, unit: "/100", change: 2.1, changeType: "increase", status: "secure", icon: CheckCircle } ]); const [selectedThreat, setSelectedThreat] = useState<string | null>(null); const [timeRange, setTimeRange] = useState<"1h" | "6h" | "24h" | "7d">("24h"); useEffect(: unknown { if (!autoRefresh) return; const interval = setInterval(: unknown { // Simulate new threats if (Math.random() > 0.7) { const threatTypes = ["malware",phishing",ddos",brute-force"] as const; const severityLevels = ["low",medium",high"] as const; const targetSystems = ["Web Server",Database",API Gateway"]; const newThreat: SecurityThreat = { id: Date.now().toString(), type: threatTypes[Math.floor(Math.random() * threatTypes.length)] || "malware", severity: severityLevels[Math.floor(Math.random() * severityLevels.length)] || "medium", source: `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`, target: targetSystems[Math.floor(Math.random() * targetSystems.length)] || "Web Server", timestamp: new Date().toISOString().replace("T",).substring(0, 19), status: "active", description: "New security threat detected", impact: "Under investigation" }; setThreats(prev => [newThreat, ...prev.slice(0, 9)]); } }, 10000); return : unknown clearInterval(interval); }, [autoRefresh]); const getThreatTypeIcon = (type: string) => { switch (type) { " case "malware": return <Bug className="w-5 h-5" />" case "phishing": return <Mail className="w-5 h-5" />" case "ddos": return <Activity className="w-5 h-5" />" case "brute-force": return <Key className="w-5 h-5" />" case "sql-injection": return <Database className="w-5 h-5" />" case "xss": return <Code className="w-5 h-5" />" default: return <AlertTriangle className="w-5 h-5" /> } }; const getSeverityColor = (severity: string) => { switch (severity) { case "critical": return "text-red-600 bg-red-100 border-red-200"; case "high": return "text-orange-600 bg-orange-100 border-orange-200"; case "medium": return "text-yellow-600 bg-yellow-100 border-yellow-200"; case "low": return "text-blue-600 bg-blue-100 border-blue-200"; default: return "text-gray-600 bg-gray-100 border-gray-200"; } }; const getStatusColor = (status: string) => { switch (status) { case "active": return "text-red-600 bg-red-100"; case "blocked": return "text-green-600 bg-green-100"; case "investigating": return "text-yellow-600 bg-yellow-100"; case "resolved": return "text-blue-600 bg-blue-100"; default: return "text-gray-600 bg-gray-100"; } }; const getMetricStatusColor = (status: string) => { switch (status) { case "secure": return "text-green-600 bg-green-100"; case "warning": return "text-yellow-600 bg-yellow-100"; case "critical": return "text-red-600 bg-red-100"; default: return "text-gray-600 bg-gray-100"; } }; const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2}}}; const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5," ease: "easeOut"}}}; return (" <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">" <div className="container mx-auto px-4"> <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}" className="text-center mb-16" >" <h2 className="text-4xl md:text-5xl font-bold mb-6"> {title} </h2>" <p className="text-xl text-gray-300 max-w-3xl mx-auto"> {subtitle} </p> </motion.div> {/* Security Metrics Overview */} <motion.div variants={containerVariants}" initial="hidden" whileInView="visible" viewport={{ once: true }}" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" > {metrics.map((metric) => { const IconComponent = metric.icon; return() <motion.div key={metric.id} variants={itemVariants} whileHover={{ scale: 1.02, y: -5 }}" className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 hover:bg-gray-800/70 transition-all duration-300" >" <div className="flex items-center justify-between mb-4">" <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">" <IconComponent className="w-6 h-6 text-blue-400" /> </div>` <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getMetricStatusColor(metric.status)}`}> {metric.status} </div> </div> " <h3 className="text-lg font-semibold text-gray-200 mb-2"> {metric.name} </h3> " <div className="flex items-end gap-2 mb-3">" <span className="text-3xl font-bold text-white"> {metric.value} </span>" <span className="text-lg text-gray-400 mb-1"> {metric.unit} </span> </div> " <div className="flex items-center gap-2"> {metric.changeType === "increase" ? (" <TrendingUp className="w-4 h-4 text-green-400" /> ) : (" <TrendingDown className="w-4 h-4 text-red-400" /> )}` <span className={`text-sm font-medium ${ metric.changeType === "increase" ? "text-green-400" : "text-red-400"` }`}> {Math.abs(metric.change).toFixed(1)}% </span>" <span className="text-sm text-gray-500">vs last period</span> </div> </motion.div> ); })} </motion.div> {/* Time Range Selector */} <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}" className="flex justify-center mb-12" >" <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50"> {(["1h",6h",24h",7d"] as const).map((range) => ( <button key={range} onClick={() => setTimeRange(range)}` className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${ timeRange === range" ? "bg-blue-600 text-white shadow-lg" : "text-gray-300 hover:text-white hover:bg-gray-700/50"` }`} > {range} </button> ))} </div> </motion.div> {/* Security Threats */} {showThreats && <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}" className="mb-16" >" <div className="flex items-center justify-between mb-8">" <h3 className="text-2xl font-bold">Active Security Threats</h3>" <div className="flex items-center gap-4">" <div className="flex items-center gap-2">" <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>" <span className="text-sm text-gray-400">Live Monitoring</span> </div> </div> </div> " <div className="space-y-4"> {threats.map((threat <motion.div key={threat.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}" className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer" onClick={() => setSelectedThreat(selectedThreat === threat.id ? null : threat.id)} >" <div className="flex items-start justify-between">" <div className="flex items-start gap-4">` <div className={`w-12 h-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center border ${getSeverityColor(threat.severity)}`}> {getThreatTypeIcon(threat.type)} </div> " <div className="flex-1">" <div className="flex items-center gap-3 mb-2">" <h4 className="text-lg font-semibold text-white capitalize"> {threat.type.replace("-",)} Attack </h4>` <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(threat.severity)}`}> {threat.severity} </div>` <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(threat.status)}`}> {threat.status} </div> </div> " <p className="text-gray-300 mb-3">{threat.description}</p> " <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm"> <div>" <span className="text-gray-400">Source:</span>" <span className="text-white ml-2 font-mono">{threat.source}</span> </div> <div>" <span className="text-gray-400">Target:</span>" <span className="text-white ml-2">{threat.target}</span> </div> <div>" <span className="text-gray-400">Time:</span>" <span className="text-white ml-2">{threat.timestamp}</span> </div> <div>" <span className="text-gray-400">Impact:</span>" <span className="text-white ml-2">{threat.impact}</span> </div> </div> </div> </div> </div> {/* Expanded Threat Details */} <AnimatePresence> {selectedThreat === threat.id && ( <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}" className="mt-6 pt-6 border-t border-gray-700/50" >" <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> <div>" <h5 className="font-semibold text-gray-200 mb-3">Recommended Actions</h5>" <ul className="space-y-2 text-sm text-gray-300">" <li className="flex items-center gap-2">" <CheckCircle className="w-4 h-4 text-green-400" /> Block source IP address </li>" <li className="flex items-center gap-2">" <CheckCircle className="w-4 h-4 text-green-400" /> Update firewall rules </li>" <li className="flex items-center gap-2">" <CheckCircle className="w-4 h-4 text-green-400" /> Monitor for similar patterns </li> </ul> </div> <div>" <h5 className="font-semibold text-gray-200 mb-3">Security Metrics</h5>" <div className="space-y-2 text-sm">" <div className="flex justify-between">" <span className="text-gray-400">Risk Score:</span>" <span className="text-white">8.5/10</span> </div>" <div className="flex justify-between">" <span className="text-gray-400">Confidence:</span>" <span className="text-white">95%</span> </div>" <div className="flex justify-between">" <span className="text-gray-400">Response Time:</span>" <span className="text-white">2.3s</span> </div> </div> </div> </div> </motion.div> )} </AnimatePresence> </motion.div> ))} </div> </motion.div> )} {/* Security Summary */} <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}" className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl border border-blue-500/30 p-8 text-center" >" <h3 className="text-2xl font-bold mb-6"> Security Status Overview </h3>" <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> <div>" <div className="text-3xl font-bold mb-2 text-green-400"> {threats.filter(t => t.status === "blocked").length} </div>" <div className="text-blue-200">Threats Blocked</div> </div> <div>" <div className="text-3xl font-bold mb-2 text-yellow-400"> {threats.filter(t => t.status === "investigating").length} </div>" <div className="text-blue-200">Under Investigation</div> </div> <div>" <div className="text-3xl font-bold mb-2 text-blue-400"> {metrics.find(m => m.id === "security-score")?.value}% </div>" <div className="text-blue-200">Security Score</div> </div> </div> </motion.div> </div> </section> ); }; export default EnhancedSecurityDashboard;"` 
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
