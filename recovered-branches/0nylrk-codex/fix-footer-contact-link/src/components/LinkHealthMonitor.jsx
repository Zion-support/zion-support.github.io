<<<<<<< HEAD
import React from 'react';
=======
import React, { useState, useEffect } from 'react';

import { Link, ExternalLink, AlertTriangle, CheckCircle, RefreshCw, Zap } from 'lucide-react';
const LinkHealthMonitor = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMonitoring, setIsMonitoring] = useState(false);
    const [linkStatuses, setLinkStatuses] = useState([]);
    const [report, setReport] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState('all');
    // Sample data based on the analysis report
    const sampleLinks = [
        {
            url: 'https://linkedin.com/company/ziontechgroup',
            status: 'broken',
            statusCode: 404,
            responseTime: 1200,
            lastChecked: new Date(),
            parentPage: 'Homepage',
            linkText: 'LinkedIn'
        },
        {
            url: 'https://twitter.com/ziontechgroup',
            status: 'external',
            statusCode: 200,
            responseTime: 800,
            lastChecked: new Date(),
            parentPage: 'Homepage',
            linkText: 'Twitter'
        },
        {
            url: 'tel:+1 302 464 0950',
            status: 'healthy',
            statusCode: 200,
            responseTime: 50,
            lastChecked: new Date(),
            parentPage: 'Contact',
            linkText: 'Phone Number'
        },
        {
            url: 'mailto:kleber@ziontechgroup.com',
            status: 'healthy',
            statusCode: 200,
            responseTime: 50,
            lastChecked: new Date(),
            parentPage: 'Contact',
            linkText: 'Email'
        }
    ];
    useEffect(() => {
        setLinkStatuses(sampleLinks);
        generateReport(sampleLinks);
    }, []);
    const generateReport = (links) => {
        const totalLinks = links.length;
        const healthyLinks = links.filter(l => l.status === 'healthy').length;
        const brokenLinks = links.filter(l => l.status === 'broken').length;
        const externalLinks = links.filter(l => l.status === 'external').length;
        const avgResponseTime = links.reduce((sum, l) => sum + (l.responseTime || 0), 0) / totalLinks;
        setReport({
            totalLinks,
            healthyLinks,
            brokenLinks,
            externalLinks,
            averageResponseTime: avgResponseTime,
            lastUpdated: new Date()
        });
    };
    const startMonitoring = async () => {
        setIsMonitoring(true);
        // Simulate link checking
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsMonitoring(false);
    };
    const getStatusIcon = (status) => {
        switch (status) {
            case 'healthy':
                return <CheckCircle className="w-4 h-4 text-green-400"/>;
            case 'broken':
                return <AlertTriangle className="w-4 h-4 text-red-400"/>;
            case 'external':
                return <ExternalLink className="w-4 h-4 text-blue-400"/>;
            default:
                return <RefreshCw className="w-4 h-4 text-yellow-400"/>;
        }
    };
    const getStatusColor = (status) => {
        switch (status) {
            case 'healthy':
                return 'text-green-400';
            case 'broken':
                return 'text-red-400';
            case 'external':
                return 'text-blue-400';
            default:
                return 'text-yellow-400';
        }
    };
    const filteredLinks = linkStatuses.filter(link => {
        if (selectedFilter === 'all')
            return true;
        return link.status === selectedFilter;
    });
    return (<>
      {/* Floating Action Button */}
      <motion.button onClick={() => setIsOpen(true)} className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link className="w-6 h-6"/>
      </motion.button>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const LinkHealthMonitor: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">LinkHealthMonitor</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default LinkHealthMonitor;