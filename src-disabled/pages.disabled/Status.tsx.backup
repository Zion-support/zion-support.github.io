import React, { useState, useEffect } from 'react' import { motion    } from 'framer-motion' import { SEO } from '../components/SEO' import {  CheckCircle, AlertTriangle, XCircle, Clock, Activity, Server, Database, Globe, Zap, RefreshCw, TrendingUp, BarChart3, Calendar, AlertCircle, Info, ExternalLink    } from 'lucide-react'  export default function Status() { const [lastUpdated, setLastUpdated] = useState(new Date()) const [isRefreshing, setIsRefreshing] = useState(false) ;""
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
}

const FALLBACK_SERVICES: ServiceStatus[] = [
  {
    name: "Marketplace API",
    status: "operational",
    description: "Product listings and search functionality",
    lastChecked: new Date().toISOString()
  },
  {
    name: "Authentication Service", 
    status: "operational",
    description: "User login and registration",
    lastChecked: new Date().toISOString()
  },
  {
    name: "Payment Processing",
    status: "operational", 
    description: "Checkout and payment handling",
    lastChecked: new Date().toISOString()
  },
  {
    name: "Talent Directory",
    status: "operational",
    description: "AI talent profiles and matching",
    lastChecked: new Date().toISOString()

  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
const FALLBACK_SERVICES: ServiceStatus[] = [
  {
    name: "Marketplace API",
    status: "operational",
    description: "Product listings and search functionality",
    lastChecked: new Date().toISOString()
  },
  {
    name: "Authentication Service", 
    status: "operational",
    description: "User login and registration",
    lastChecked: new Date().toISOString()
  },
  {
    name: "Payment Processing",
    status: "operational", 
    description: "Checkout and payment handling",
    lastChecked: new Date().toISOString()
  },
  {
    name: "Talent Directory",
    status: "operational",
    description: "AI talent profiles and matching",
    lastChecked: new Date().toISOString()
  }
],

export default function Status() {
  const [externalStatusLoaded, setExternalStatusLoaded] = useState(false),
  const [showFallback, setShowFallback] = useState(false),
  const [uptime, setUptime] = useState<number | null>(null),
  const statusUrl = process.env.NEXT_PUBLIC_STATUS_PAGE_URL || "https: //status.ziontechgroup.com",

  useEffect(() => {
    // Try to load external status page, fallback after timeout
    const timeout = setTimeout(() => {
      if (!externalStatusLoaded) {
        setShowFallback(true)
import { SEO } from "@/components/SEO",;
import { useState, useEffect } from "react",;
import { AlertCircle, CheckCircle, Clock, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import Link from "next/link",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { logWarn } from '@/utils/productionLogger',;
interface ServiceStatus {;
  name: string,;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance',;
  description: string,;
  lastChecked: string;
}
;
const FALLBACK_SERVICES: ServiceStatus[] = [;
  {;
    name: "Marketplace API",;
    status: "operational",;
    description: "Product listings and search functionality",;
    lastChecked: new Date().toISOString();
  },;
  {;
    name: "Authentication Service",;
    status: "operational",;
    description: "User login and registration",;
    lastChecked: new Date().toISOString();
  },;
  {;
    name: "Payment Processing",;
    status: "operational",;
    description: "Checkout and payment handling",;
    lastChecked: new Date().toISOString();
  },;
  {;
    name: "Talent Directory",;
    status: "operational",;
    description: "AI talent profiles and matching",;
    lastChecked: new Date().toISOString();
  }
],;
export default function Status() {;
  const [externalStatusLoaded, setExternalStatusLoaded] = useState(false),;,
  const [showFallback, setShowFallback] = useState(false),;,
  const [externalStatusLoaded, setExternalStatusLoaded] = useState(false),;
  const [showFallback, setShowFallback] = useState(false),;
  const [uptime, setUptime] = useState<number | null>(null),;
  const statusUrl = process.env.NEXT_PUBLIC_STATUS_PAGE_URL || "https: //status.ziontechgroup.com",;
  useEffect(() => {;
    // Try to load external status page, fallback after timeout;
    const timeout = setTimeout(() => {;
      if (!externalStatusLoaded) {;
        setShowFallback(true);
      }
    }, 5000), // 5 second timeout;
    return () => clearTimeout(timeout);
  }, [externalStatusLoaded]),;
  useEffect(() => {;
    async function fetchUptime() {;
      try {;
        const res = await fetch('/api/health'),;
        if (!res.ok) return,;
        const data = await res.json(),;
        if (typeof data.uptime === 'number') {;
          setUptime(data.uptime);
        }
      } catch (err) {;
        logWarn('Failed to fetch uptime', { data: err });
      }
    fetchUptime()
  }, []),
  const getStatusIcon = (status: ServiceStatus['status']) => {',
    switch (status) {
      case 'operational':'
        return <CheckCircle className="h-5 w-5 text-green-500" />,"
      case 'degraded':'
        return <Clock className="h-5 w-5 text-yellow-500" />,"
      case 'outage':'
        return <AlertCircle className="h-5 w-5 text-red-500" />,"
      case 'maintenance':'
        return <Clock className="h-5 w-5 text-blue-500" />,"
      default:,
        return <AlertCircle className="h-5 w-5 text-gray-500" />"
    fetchUptime();
  }, []),;,
  const getStatusIcon = (status: ServiceStatus['status']) => {;',

  const getStatusIcon = (status: ServiceStatus['status']) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="h-5 w-5 text-green-500" />,
      case 'degraded':
        return <Clock className="h-5 w-5 text-yellow-500" />,
      case 'outage':
        return <AlertCircle className="h-5 w-5 text-red-500" />,
      case 'maintenance':
        return <Clock className="h-5 w-5 text-blue-500" />,
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />
    fetchUptime();
  }, []),;
  const getStatusIcon = (status: ServiceStatus['status']) => {;
    switch (status) {;
      case 'operational':;
        return <CheckCircle className="h-5 w-5 text-green-500" />,;
      case 'degraded':;
        return <Clock className="h-5 w-5 text-yellow-500" />,;
      case 'outage':;
        return <AlertCircle className="h-5 w-5 text-red-500" />,;
      case 'maintenance':;
        return <Clock className="h-5 w-5 text-blue-500" />,;
      default:;,
        return <AlertCircle className="h-5 w-5 text-gray-500" />}"
import React, { useState, useEffect } from 'react'; import { motion  } from 'framer-motion'; import { SEO } from '../components/SEO'; import {CheckCircle, AlertTriangle, XCircle, Clock, Activity, Server, Database, Globe, Zap, RefreshCw, TrendingUp, BarChart3, Calendar, AlertCircle, Info, ExternalLink } from 'lucide-react'; export default function Status() { const [lastUpdated, setLastUpdated] = useState(new Date()); const [isRefreshing, setIsRefreshing] = useState(false)'
}
  const formatUptime = (seconds:,  number) => {,

<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/pages/Status.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  )
import { SEO } from '@/components/SEO';
import { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';
import { logWarn } from '@/utils/productionLogger';
interface ServiceStatus {
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
  );

};
switch (status) {';
  case 'operational': return 'Operational';';
case 'degraded': return 'Degraded Performance';';
case 'outage': return 'Service Outage';';
case 'maintenance': return 'Scheduled Maintenance';';
default: const getStatusColor = (status: ServiceStatus['status']) => {;
  switch (status) {';
  case 'operational': return 'text-green-500';';
case 'degraded': return 'text-yellow-500';';
case 'outage': return 'text-red-500';';
case 'maintenance': return 'text-blue-500';";
default: return (<> <SEO title="API Status" description="View real-time service availability and uptime statistics." canonical="https://app.ziontechgroup.com/status" /> <main className="min-h-screen bg-zion-blue pt-24 pb-20" > <div className="container mx-auto px-4" > <div className="text-center mb-8" > <h1 className="text-4xl font-bold text-white mb-4" >System Status</h1> <p className="text-zion-slate-light text-lg" > Real-time monitoring of Zion platform services </p> <CardHeader> <CardTitle className="text-white flex items-center gap-2" > <ExternalLink className="h-5 w-5" /> Live Status Dashboard </CardTitle> <CardDescription> Loading detailed status information... </CardDescription> </CardHeader> <CardContent> <iframe src= {;
  statusUrl ";
}/> <div className="mt-4 text-center" > <Button > View Simplified Status </Button> </div> </CardContent> </Card> </div>) ";
}<CardHeader> <CardTitle className="text-white" >Service Status Overview</CardTitle> <CardDescription> Current status of core platform services </CardDescription> </CardHeader> <CardContent className="space-y-4" > {;
  FALLBACK SERVICES.map ( (service) => (</div> </div> </div>) ) ";
}</CardContent> </Card> </div> <div className="text-center" > <p className="text-zion-slate-light mb-4" > For detailed incident history and real-time updates: </p> <Button variant="outline" asChild className="text-zion-cyan border-zion-cyan hover:bg-zion-cyan/10" > <a > <ExternalLink className="h-4 w-4" /> Visit Full Status Page </Link> </Button> </div> </>) '";
}<div className="mt-12 text-center" > <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> <CardTitle className="text-white" >Need Help?</CardTitle> </CardHeader> <CardContent className="space-y-4" > <p className="text-zion-slate-light" > If you're experiencing issues not reflected here, please contact our support team. </p> <Button variant="outline" asChild className="text-zion-cyan border-zion-cyan hover:bg-zion-cyan/10" > <Link href="/contact" >Contact Support</Link> </Button> <Button variant="outline" asChild className="text-zion-purple border-zion-purple hover:bg-zion-purple/10" > <a href="https://twitter.com/ZionTechGroup" target="blank" rel="noopener noreferrer" > @ZionTechGroup </Link> </Button> </div> </CardContent> </Card> </div> </div> </main> </>) ;
}'"
  )
}
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/pages/Status.tsx
=======
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
origin/cursor/automate-test-improve-and-merge-code-2533
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
