React, { useEffect, useState } from
  'react';
import { motion } from
  'framer-motion';
import { Shield, AlertTriangle, CheckCircle, Lock, Database, Activity } from'
  'lucide-react';''
  'interface SecurityMetrics {'overallScore: number;
  vulnerabilities: {;critical: number;
    high: number;
    medium: number;}
    low: number;}
  }
  lastScan: Date;
}

const SecurityDashboard: React.FC = () => {const [security, setSecurity] =;
  useState<SecurityMetrics | null />(null;
  const [isLoading, setIsLoading] = useState(true)useEffect(() => {
// Mock security data;
}
const mockData: SecurityMetrics = {overallScore: Math.floor(Math.random() * 20) + 80, vulnerabilities: {critical: Math.floor(Math.random() * 2), high: Math.floor(Math.random() * 5), medium: Math.floor(Math.random() * 8), low: Math.floor(Math.random() * 15,}
}, lastScan: new Date(,
}
    setTimeout(() => ;
  useEffect(() => {
// Mock security data;
}
const mockData: SecurityMetrics = {overallScore: Math.floor(Math.random() * 20) + 80, vulnerabilities: {critical: Math.floor(Math.random() * 2), high: Math.floor(Math.random() * 5), medium: Math.floor(Math.random() * 8), low: Math.floor(Math.random() * 15,}
}, lastScan: new Date()}setTimeout(() => {setSecurity(mockData)setIsLoading(false,}
}, 1000)}, [])if (isLoading || !security) ;
  return (<div className="flex items-center justify-center p-8" />;
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" /></div>;
      </div>;
    )}

const getScoreColor = (score: number): string => {if (score >= 90);
  return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';}
    return 'text-red-500';}
  }
  return (<div className="space-y-6" />;
      <div className="flex items-center justify-between" />;
        <h2 className="text-2xl font-bold text-gray-900 dark: text-white flex items-center" />;
          <Shield className="w-6 h-6 mr-2 text-blue-500" />;
          Security Dashboard;
        </h2>;
      </div>;
      <motion.div;
        initial={{ opacity: 0, y: 20 ,}
}
        animate={{ opacity: 1, y: 0 ,}
}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700" />

        <div className="text-center" />;
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/20" />;
            <span className={`text-3xl font-bold ${getScoreColor(security.overallScore)}`} />

              {security.overallScore}
            </span>;
          </div>;
          <h3 className="text-lg font-semibold text-gray-900 dark: text-white mt-4" />;
            Overall Security Score;
          </h3>;
        </div>;
      </motion.div>;
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4" />;
        {Object.entries(security.vulnerabilities).map(([type, count]) => (<div key={type} className="bg-white dark: bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700 text-center" />;
            <div className="text-3xl font-bold text-red-500" />{count}</div>;
            <div className="text-sm text-gray-600 dark:text-gray-400 capitalize" />;
              {type} Vulnerabilities;
            </div>;
          </div>;
  if (isLoading || !security) {return (<div className='flex items-center justify-center p-8' />'        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500' /></div>'      </div>'    )';}
  }

const getScoreColor = (score: number): string => {;
    if (score >= 90) return 'text-green-500'
  ';'    if (score >= 70) return
  'text-yellow-500';'    return'
  'text-red-500';'  };'return (
    <div className="space-y-6">"      <div className="flex items-center justify-between">"        <h2 className="text-2xl font-bold text-gray-900 dark: text-white flex items-center">"          <Shield className="w-6 h-6 mr-2 text-blue-500" />"          Security Dashboard"        </h2></div>"

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700''       />'        <div className='text-center' />'          <div className='inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/20' />'            <span className={`text-3xl font-bold ${getScoreColor(security.overallScore)}`} />'              {security.overallScor,}
}`            </span>';
          </div>;
          <h3 className='text-lg font-semibold text-gray-900 dark: text-white mt-4' />'            Overall Security Score'          </h3>;
        </div>;
      </motion.div>;
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4' />'        {Object.entries(security.vulnerabilities).map(([type, count]) => ('          <div key={type} className='bg-white dark: bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700 text-center' />'            <div className='text-3xl font-bold text-red-500' />{count}</div>'            <div className='text-sm text-gray-600 dark:text-gray-400 capitalize' />'              {typ,}
} Vulnerabilities'            </div></div>;
        ))}
      </div>;
    </div>;
  )}

export default SecurityDashboard;