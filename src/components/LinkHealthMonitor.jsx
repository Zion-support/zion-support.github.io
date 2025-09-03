import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
        if (selectedFilter === 'all') return true;
        return link.status === selectedFilter;
    });

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isOpen ? 1 : 0 }}
                className="bg-gray-900 border border-gray-700 rounded-lg shadow-2xl w-96 max-h-96 overflow-hidden"
            >
                <div className="p-4 border-b border-gray-700">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">Link Health Monitor</h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-white"
                        >
                            ×
                        </button>
                    </div>
                </div>

                <div className="p-4 space-y-4">
                    {report && (
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="bg-gray-800 p-3 rounded">
                                <div className="text-gray-400">Total Links</div>
                                <div className="text-white font-semibold">{report.totalLinks}</div>
                            </div>
                            <div className="bg-gray-800 p-3 rounded">
                                <div className="text-gray-400">Healthy</div>
                                <div className="text-green-400 font-semibold">{report.healthyLinks}</div>
                            </div>
                            <div className="bg-gray-800 p-3 rounded">
                                <div className="text-gray-400">Broken</div>
                                <div className="text-red-400 font-semibold">{report.brokenLinks}</div>
                            </div>
                            <div className="bg-gray-800 p-3 rounded">
                                <div className="text-gray-400">External</div>
                                <div className="text-blue-400 font-semibold">{report.externalLinks}</div>
                            </div>
                        </div>
                    )}

                    <div className="flex space-x-2">
                        {['all', 'healthy', 'broken', 'external'].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setSelectedFilter(filter)}
                                className={`px-3 py-1 rounded text-xs ${
                                    selectedFilter === filter
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    <div className="max-h-48 overflow-y-auto space-y-2">
                        {filteredLinks.map((link, index) => (
                            <div key={index} className="bg-gray-800 p-3 rounded text-sm">
                                <div className="flex items-center space-x-2 mb-1">
                                    {getStatusIcon(link.status)}
                                    <span className={`font-medium ${getStatusColor(link.status)}`}>
                                        {link.status}
                                    </span>
                                    <span className="text-gray-400 text-xs">
                                        {link.statusCode}
                                    </span>
                                </div>
                                <div className="text-white truncate">{link.url}</div>
                                <div className="text-gray-400 text-xs">
                                    {link.parentPage} • {link.responseTime}ms
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={startMonitoring}
                        disabled={isMonitoring}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-2 px-4 rounded flex items-center justify-center space-x-2"
                    >
                        {isMonitoring ? (
                            <RefreshCw className="w-4 h-4 animate-spin" />
                        ) : (
                            <Zap className="w-4 h-4" />
                        )}
                        <span>{isMonitoring ? 'Checking...' : 'Check Links'}</span>
                    </button>
                </div>
            </motion.div>

            {!isOpen && (
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
                >
                    <Link className="w-5 h-5" />
                </motion.button>
            )}
        </div>
    );
};

export default LinkHealthMonitor;