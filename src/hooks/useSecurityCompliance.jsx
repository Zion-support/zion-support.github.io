<<<<<<< HEAD
import { useState, useEffect, useCallback, useRef } from 'react' import { useAnalytics } from './useAnalytics' export const useSecurityCompliance = (_initialConfig) => { const { trackEvent } = useAnalytics({ enableTracking: true, enableUserBehaviorTracking: true }) const [securityEvents, setSecurityEvents] = useState([]) const [complianceRules, setComplianceRules] = useState([]) const [securityMetrics, setSecurityMetrics] = useState({ totalEvents: 0, criticalEvents: 0, highSeverityEvents: 0, complianceScore: 100, threatLevel: 'low', averageResponseTime: 0, falsePositiveRate: 0 }) const [isMonitoring, setIsMonitoring] = useState(false) const [isComplianceChecking, setIsComplianceChecking] = useState(false) const monitoringIntervalRef = useRef() const complianceCheckIntervalRef = useRef()'"'"
=======
<<<<<<< HEAD
import { useState, useEffect, useCallback, useRef } from 'react' import { useAnalytics } from './useAnalytics' export const useSecurityCompliance = (_initialConfig) => { const { trackEvent } = useAnalytics({ enableTracking: true, enableUserBehaviorTracking: true }) const [securityEvents, setSecurityEvents] = useState([]) const [complianceRules, setComplianceRules] = useState([]) const [securityMetrics, setSecurityMetrics] = useState({ totalEvents: 0, criticalEvents: 0, highSeverityEvents: 0, complianceScore: 100, threatLevel: 'low', averageResponseTime: 0, falsePositiveRate: 0 }) const [isMonitoring, setIsMonitoring] = useState(false) const [isComplianceChecking, setIsComplianceChecking] = useState(false) const monitoringIntervalRef = useRef() const complianceCheckIntervalRef = useRef();"'""
=======
<<<<<<< HEAD
;
import {useState, useEffect, useCallback, useRef } from 'react' import {useAnalytics } from './useAnalytics' export const useSecurityCompliance = (_initialConfig) => {const { trackEvent } = useAnalytics({enableTracking: true, enableUserBehaviorTracking: true }) const [securityEvents, setSecurityEvents] = useState([]) const [complianceRules, setComplianceRules] = useState([]) const [securityMetrics, setSecurityMetrics] = useState({totalEvents: 0, criticalEvents: 0, highSeverityEvents: 0, complianceScore: 100, threatLevel: 'low', averageResponseTime: 0, falsePositiveRate: 0 }) const [isMonitoring, setIsMonitoring] = useState(false) const [isComplianceChecking, setIsComplianceChecking] = useState(false) const monitoringIntervalRef = useRef() const complianceCheckIntervalRef = useRef()';"'"
=======
<<<<<<< HEAD
import { useState, useEffect, useCallback, useRef } from &apos;react&apos; import { useAnalytics } from &apos;./useAnalytics&apos;&apos;' export const useSecurityCompliance = (_initialConfig) => {} const { trackEvent } = useAnalytics({ enableTracking: true, enableUserBehaviorTracking: true }) const [securityEvents, setSecurityEvents] = useState([]) const [complianceRules, setComplianceRules] = useState([]) const;const [securityMetrics, setSecurityMetrics] = useState({ totalEvents: 0, criticalEvents: 0, highSeverityEvents: 0, complianceScore: 100, threatLevel: &apos;low&apos;, averageResponseTime: 0, falsePositiveRate: 0 })&apos; const [isMonitoring, setIsMonitoring] = useState(false) const [isComplianceChecking, setIsComplianceChecking] = useState(false) const;const;const monitoringIntervalRef = useRef() ;const complianceCheckIntervalRef = useRef()';&quot;&quot;"
=======
<<<<<<< HEAD
import { useState, useEffect, useCallback, useRef } from 'react' import { useAnalytics } from './useAnalytics' export const useSecurityCompliance = (_initialConfig) => { const { trackEvent } = useAnalytics({ enableTracking: true, enableUserBehaviorTracking: true }) const [securityEvents, setSecurityEvents] = useState([]) const [complianceRules, setComplianceRules] = useState([]) const [securityMetrics, setSecurityMetrics] = useState({ totalEvents: 0, criticalEvents: 0, highSeverityEvents: 0, complianceScore: 100, threatLevel: 'low', averageResponseTime: 0, falsePositiveRate: 0 }) const [isMonitoring, setIsMonitoring] = useState(false) const [isComplianceChecking, setIsComplianceChecking] = useState(false) const monitoringIntervalRef = useRef() const complianceCheckIntervalRef = useRef()';"'"
<<<<<<< HEAD
""
}
=======
=======
import { useState, useEffect, useCallback, useRef } from 'react' import { useAnalytics }  from './useAnalytics';export const useSecurityCompliance = (_initialConfig) => { const { trackEvent } = useAnalytics({ enableTracking: true, enableUserBehaviorTracking: true }) const [securityEvents, setSecurityEvents] = useState([]) const [complianceRules, setComplianceRules] = useState([]) const [securityMetrics, setSecurityMetrics] = useState({ totalEvents: 0, criticalEvents: 0, highSeverityEvents: 0, complianceScore: 100, threatLevel: 'low', averageResponseTime: 0, falsePositiveRate: 0 }) const [isMonitoring, setIsMonitoring] = useState(false) const [isComplianceChecking, setIsComplianceChecking] = useState(false) const monitoringIntervalRef = useRef() const complianceCheckIntervalRef = useRef()'"
"
}
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
