import React, { useState, useEffect } from 'react', import { motion  } from 'framer-motion',
import { SEO } from '../components/SEO', import { , CheckCircle, AlertTriangle, XCircle, Clock, Activity, Server, Database, Globe, Zap, RefreshCw, TrendingUp, BarChart3, Calendar, AlertCircle, Info, ExternalLink  } from 'lucide-react', export default function Status(props: any) {, const [lastUpdated, setLastUpdated] = useState<any>(new Date()), const [isRefreshing, setIsRefreshing] = useState<any>(false), ,
</any>,
</any>
}