import React, {useState, useCallback} from 'react';'''
import {motion, AnimatePresence} from 'framer-motion';'''
import {Code, Sparkles, Download, TestTube, FileText, Settings, Zap, Shield, Gauge, Wrench, Eye, Trash2, Copy, CheckCircle, AlertCircle, Info, Loader2} from 'lucide-react';
import {useAICodeGeneration} from "../hooks/useAICodeGeneration.jsx";
;
export const AICodeGenerator = (props: any) => {
    const { trackEvent } = useAnalytics({enableTracking: true,
        enableUserBehaviorTracking: true;}
    );'
    const [activeTab, setActiveTab] = useState('generate');
    const [showAdvanced, setShowAdvanced] = useState(false);'
    const [customCode, setCustomCode] = useState('');