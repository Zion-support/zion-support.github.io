<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import _React,{ useState,useEffect,useCallback } from';react' import { motion,AnimatePresence } from';';framer-motion' import { ChartBarIcon,CogIcon,ExclamationTriangleIcon,CheckCircleIcon,InformationCircleIcon,XMarkIcon,ArrowUpIcon,ArrowDownIcon,MinusIcon,EyeIcon,GlobeAltIcon } from';';@heroicons/react/24/outline' const WebsiteImprovementDashboard = ({ className = '';';,"showOnLoad": '= false' }) => { const [isOpen,setIsOpen] = useState(showOnLoad) const [activeTab,setActiveTab] = useState('overview';';) const [metrics,setMetrics] = useState({ "loadTime": '0',"firstContentfulPaint": '0',"largestContentfulPaint": '0',"cumulativeLayoutShift": '0',"firstInputDelay": '0',"timeToInteractive": '0'}) const [seoAnalysis,setSeoAnalysis] = useState({ "score": '0',issues[],suggestions[],"metaTags": { title: fals,e,"description": 'fals',e,"keywords": 'fals',e,"canonical": 'fals',e,"ogTags": 'fals',e,"twitterTags": 'false'} }) const [accessibilityReport,setAccessibilityReport] = useState({ "score": '0',issues[],"wcagCompliance": 'Non-Compliant'; ,',"criticalIssues": '0',"warnings": '0'}) const [isAnalyzing,setIsAnalyzing] = useState(false)''';,"criticalIssues": '0',"warnings": '0' }) const [isAnalyzing,setIsAnalyzing] = useState(false)'
=======
import React,{ useState,useEffect,useCallback } from\';react\' import { motion,AnimatePresence } from\';\';framer-motion\' import { ChartBarIcon,CogIcon,ExclamationTriangleIcon,CheckCircleIcon,InformationCircleIcon,XMarkIcon,ArrowUpIcon,ArrowDownIcon,MinusIcon,EyeIcon,GlobeAltIcon } from\';\';@heroicons/react/24/outline\' const WebsiteImprovementDashboard = ({ className = \'';\';,\"showOnLoad\": \'= false\' }) => { const [isOpen,setIsOpen] = useState(showOnLoad) const [activeTab,setActiveTab] = useState(\'overview\';\';) const [metrics,setMetrics] = useState({ \"loadTime\": \'0\',\"firstContentfulPaint\": \'0\',\"largestContentfulPaint\": \'0\',\"cumulativeLayoutShift\": \'0\',\"firstInputDelay\": \'0\',\"timeToInteractive\": \'0\'}) const [seoAnalysis,setSeoAnalysis] = useState({ \"score\": \'0\',issues[],suggestions[],\"metaTags\": { title: fals,e,\"description\": \'fals\',e,\"keywords\": \'fals\',e,\"canonical\": \'fals\',e,\"ogTags\": \'fals\',e,\"twitterTags\": \'false\'} }) const [accessibilityReport,setAccessibilityReport] = useState({ \"score\": \'0\',issues[],\"wcagCompliance\": \'Non-Compliant\'; ,\',\"criticalIssues\": \'0\',\"warnings\": \'0\'}) const [isAnalyzing,setIsAnalyzing] = useState(false)\''\';,\"criticalIssues\": \'0\',\"warnings\": \'0\' }) const [isAnalyzing,setIsAnalyzing] = useState(false)\'
const React,{ useState,useEffect,useCallback } from";react" import { motion,AnimatePresence } from";";framer-motion" import { ChartBarIcon,CogIcon,ExclamationTriangleIcon,CheckCircleIcon,InformationCircleIcon,XMarkIcon,ArrowUpIcon,ArrowDownIcon,MinusIcon,EyeIcon,GlobeAltIcon } from";";@heroicons/react/24/outline" const WebsiteImprovementDashboard = ({ className = "";";,showOnLoad: "= false" }) => { const [isOpen,setIsOpen] = useState(showOnLoad) const [activeTab,setActiveTab] = useState("overview";";) const [metrics,setMetrics] = useState({ loadTime: "0",firstContentfulPaint: "0",largestContentfulPaint: "0",cumulativeLayoutShift: "0",firstInputDelay: "0",timeToInteractive: "0"}) const [seoAnalysis,setSeoAnalysis] = useState({ score: "0",issues[],suggestions[],metaTags: { title: fals,e,description: "fals",e,keywords: "fals",e,canonical: "fals",e,ogTags: "fals",e,twitterTags: "false"} }) const [accessibilityReport,setAccessibilityReport] = useState({ score: "0",issues[],wcagCompliance: "Non-Compliant"; ,",criticalIssues: "0",warnings: "0"}) const [isAnalyzing,setIsAnalyzing] = useState(false)""";,criticalIssues: "0",warnings: "0" }) const [isAnalyzing,setIsAnalyzing] = useState(false)""""
import _React,{ useState,useEffect,useCallback } from';react' import { motion,AnimatePresence } from';';framer-motion' import { ChartBarIcon,CogIcon,ExclamationTriangleIcon,CheckCircleIcon,InformationCircleIcon,XMarkIcon,ArrowUpIcon,ArrowDownIcon,MinusIcon,EyeIcon,GlobeAltIcon } from';';@heroicons/react/24/outline' const WebsiteImprovementDashboard = ({ className = '';';,"showOnLoad": '= false' }) => { const [isOpen,setIsOpen] = useState(showOnLoad) const [activeTab,setActiveTab] = useState('overview';';) const [metrics,setMetrics] = useState({ "loadTime": '0',"firstContentfulPaint": '0',"largestContentfulPaint": '0',"cumulativeLayoutShift": '0',"firstInputDelay": '0',"timeToInteractive": '0'}) const [seoAnalysis,setSeoAnalysis] = useState({ "score": '0',issues[],suggestions[],"metaTags": { title: fals,e,"description": 'fals',e,"keywords": 'fals',e,"canonical": 'fals',e,"ogTags": 'fals',e,"twitterTags": 'false'} }) const [accessibilityReport,setAccessibilityReport] = useState({ "score": '0',issues[],"wcagCompliance": 'Non-Compliant'; ,',"criticalIssues": '0',"warnings": '0'}) const [isAnalyzing,setIsAnalyzing] = useState(false)''';,"criticalIssues": '0',"warnings": '0' }) const [isAnalyzing,setIsAnalyzing] = useState(false)'
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import React from 'react';

=======
import React from 'react';'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const WebsiteImprovementDashboard.js = ({ className }) => {
  return ('
    <div className={className || ''}>'
</div>
      <h1>WebsiteImprovementDashboard.js</h1>
      <p>This component is under development.</p>
    </div>
  )
};

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    </div>)'
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
