import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Activity, Server, Shield, Users, TrendingUp, BarChart3, PieChart, LineChart, TrendingDown, Clock3, RefreshCw, Loader2} from 'lucide-react';
;
export const EnterpriseDashboard = (props: any) => {;
    const { trackEvent } = useAnalytics({enableTracking: true,;
        enableUserBehaviorTracking: true;});';
import React, {useState, useEffect, useCallback, useMemo} from 'react';'''
import {motion, AnimatePresence} from 'framer-motion';'''
import {Activity, Server, Shield, Users, TrendingUp, BarChart3, PieChart, LineChart, TrendingDown, Clock3, RefreshCw, Loader2} from 'lucide-react';
;
export const EnterpriseDashboard = (props: any) => {
    const { trackEvent } = useAnalytics({enableTracking: true,
        enableUserBehaviorTracking: true;}
    );'
    const [activeTab, setActiveTab] = useState('overview');