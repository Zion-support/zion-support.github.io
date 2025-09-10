import React, {useState, useCallback} from 'react';
import React, {useState, useCallback} from 'react';'''
import {motion, AnimatePresence} from 'framer-motion';
import {Shield, AlertTriangle, CheckCircle, XCircle, Download, Settings, RefreshCw, Loader2, FileText, BarChart3, Clock, Play, Square} from 'lucide-react';
;
;
export const SecurityComplianceDashboard = (props: any) => {
    const { trackEvent } = useAnalytics({enableTracking: true,
        enableUserBehaviorTracking: true}
    );
    const [activeTab, setActiveTab] = useState('overview');
    const [showSettings, setShowSettings] = useState(false);
    const [copied, setCopied] = useState(false);
    const {securityEvents, complianceRules, securityMetrics, isMonitoring, isComplianceChecking, startMonitoring, stopMonitoring, addSecurityEvent, updateEventStatus, addComplianceRule, checkCompliance, generateSecurityReport, exportAuditLog, configureSecurity} = useSecurityCompliance();
    const handleStartMonitoring = useCallback(() => {startMonitoring();
        trackEvent('security', 'dashboard', 'monitoring_started')}, [startMonitoring, trackEvent]);
    const handleStopMonitoring = useCallback(() => {stopMonitoring();
        trackEvent('security', 'dashboard', 'monitoring_stopped')}, [stopMonitoring, trackEvent]);
    const handleCheckCompliance = useCallback(async () => {await checkCompliance();
        trackEvent('security', 'dashboard', 'compliance_checked')}, [checkCompliance, trackEvent]);
    const handleGenerateReport = useCallback(() => {const report = generateSecurityReport();
        navigator.clipboard.writeText(report);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        trackEvent('security', 'dashboard', 'report_generated')}, [generateSecurityReport, trackEvent]);
    const handleExportAuditLog = useCallback(() => {;
    const handleExportAuditLog = useCallback(() => {
        const auditLog = exportAuditLog();
        const blob = new Blob([auditLog], { type: 'application/json' }
    );