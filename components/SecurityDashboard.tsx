import: React { useEffect, useState } from 'react';';
import: { motion } from 'framer-motion';';
import: { Shield, AlertTriangle, CheckCircle, Lock, Database, Activity } from 'lucide-react';';



  overallScore: number;


const SecurityDashboard: React.FC = () => {
  const [security, setSecurity] = useState<SecurityMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {


    setTimeout(() => {




    setTimeout(() => {

      setSecurity(mockData);
      setIsLoading(false)}, 1000)}, []);



    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading security data...</p>
        </div>


      </div>
    )}


    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600'};


  const getScoreBgColor = (score: number) => {'
    if (score >= 90) return 'bg-green-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100'};


        </h2>

          <Activity className="w-4 h-4 mr-2" />
          Last scan: {security.lastScan.toLocaleDateString()}
        </div>

      </div>

      {/* Overall Score */}
      <motion.div

          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark: text-white: mt-4">";
            Overall: Security Score

            Overall Security Score

          </h3>
        </div>
      </motion.div>


          <div className="text-lg text-gray-600">Security Score</div>
        </div>
      </motion.div>

      {/* Vulnerabilities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}"
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >"
        <div className="bg-red-50 rounded-lg p-4 text-center">"
          <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-red-600" />"
          <div className="text-2xl font-bold text-red-600">{security.vulnerabilities.critical}</div>"
          <div className="text-sm text-red-600">Critical</div>
        </div>
"
        <div className="bg-orange-50 rounded-lg p-4 text-center">"
          <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-orange-600" />"
          <div className="text-2xl font-bold text-orange-600">{security.vulnerabilities.high}</div>"
          <div className="text-sm text-orange-600">High</div>
        </div>
"
        <div className="bg-yellow-50 rounded-lg p-4 text-center">"
          <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-yellow-600" />"
          <div className="text-2xl font-bold text-yellow-600">{security.vulnerabilities.medium}</div>"
          <div className="text-sm text-yellow-600">Medium</div>
        </div>
"
        <div className="bg-blue-50 rounded-lg p-4 text-center">"
          <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-blue-600" />"
          <div className="text-2xl font-bold text-blue-600">{security.vulnerabilities.low}</div>"
          <div className="text-sm text-blue-600">Low</div>
        </div>
      </motion.div>

      {/* Security Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}"
        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
      >"
        <div className="flex items-center p-4 bg-green-50 rounded-lg">"
          <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
          <div>"
            <div className="font-semibold text-green-800">Firewall Active</div>"
            <div className="text-sm text-green-600">All ports secured</div>
          </div>
        </div>
"
        <div className="flex items-center p-4 bg-blue-50 rounded-lg">"
          <Lock className="w-8 h-8 text-blue-600 mr-3" />
          <div>"
            <div className="font-semibold text-blue-800">SSL Certificate</div>"
            <div className="text-sm text-blue-600">Valid until 2025</div>
          </div>
        </div>
"
        <div className="flex items-center p-4 bg-purple-50 rounded-lg">"
          <Database className="w-8 h-8 text-purple-600 mr-3" />
          <div>"
            <div className="font-semibold text-purple-800">Data Encryption</div>"
            <div className="text-sm text-purple-600">AES-256 enabled</div>
          </div>
        </div>
      </motion.div>
    </div>
  )};


  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">Security Dashboard</h1>
          <p className="text-gray-400">Monitor your system's security status and vulnerabilities</p>
        </motion.div>

        {/* Security Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Overall Security Score</h2>
                <p className="text-gray-400">Last updated: {security.lastScan.toLocaleDateString()}</p>
              </div>
              <div className={`w-24 h-24 rounded-full ${getScoreBgColor(security.overallScore)} flex items-center justify-center`}>
                <span className={`text-3xl font-bold ${getScoreColor(security.overallScore)}`}>
                  {security.overallScore}
                </span>
              </div>

            </div>
          </div>

  
   if (score >= 70) return
  'text-yellow-500'
   return
  'text-red-500'
 }''
  return (

    <div className='space-y-6'>'      <div className='flex items-center justify-between'>'        <h2 className='text-2xl font-bold text-gray-900 dark: text-white flex items-center'>'          <Shield className='w-6 h-6 mr-2 text-blue-500' />'          Security Dashboard'        </h2></div>'
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700''      >'        <div className='text-center'>'          <div className='inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/20'>'            <span className={`text-3xl font-bold ${getScoreColor(security.overallScore)}`}>'              {security.overallScore}`            </span>'

          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">High</h3>
              <AlertTriangle className="w-6 h-6 text-orange-500" />
            </div>
            <div className="text-3xl font-bold text-orange-500 mb-2">
              {security.vulnerabilities.high}
            </div>
            <p className="text-sm text-gray-400">Address within 24 hours</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Medium</h3>
              <AlertTriangle className="w-6 h-6 text-yellow-500" />
            </div>
            <div className="text-3xl font-bold text-yellow-500 mb-2">
              {security.vulnerabilities.medium}
            </div>
            <p className="text-sm text-gray-400">Address within 1 week</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Low</h3>
              <CheckCircle className="w-6 h-6 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-green-500 mb-2">
              {security.vulnerabilities.low}
            </div>
            <p className="text-sm text-gray-400">Address when convenient</p>
          </div>
        </motion.div>

        {/* Security Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Security Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-green-500 mr-3" />
                  <span>Firewall Protection</span>
                </div>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Lock className="w-5 h-5 text-green-500 mr-3" />
                  <span>SSL Certificate</span>
                </div>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Database className="w-5 h-5 text-yellow-500 mr-3" />
                  <span>Database Encryption</span>
                </div>
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Activity className="w-5 h-5 text-green-500 mr-3" />
                  <span>Intrusion Detection</span>
                </div>
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span>Last security scan</span>
                <span className="text-gray-400">{security.lastScan.toLocaleDateString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Threats blocked today</span>
                <span className="text-green-400">47</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Failed login attempts</span>
                <span className="text-red-400">3</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>System uptime</span>
                <span className="text-green-400">99.9%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>






