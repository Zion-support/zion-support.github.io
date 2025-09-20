<<<<<<< HEAD

export default LinkHealthMonitor;
=======
import React, {useState, useEffect} from 'react';'''
import {motion} from 'framer-motion';
import { Link, ExternalLink, AlertTriangle, CheckCircle, RefreshCw, Zap const LinkHealthMonitor = (props: any) => {}
    const [isOpen, setIsOpen] = useState(false);
    const [isMonitoring, setIsMonitoring] = useState(false);'
    const [linkStatuses, setLinkStatuses] = useState([]);''
    const [report, setReport] = useState(null);'''
    const [selectedFilter, setSelectedFilter] = useState('all');
    // Sample data based on the analysis report;
    const sampleLinks = []
        {}
'
''
'''
            url: 'https://linkedin.com/company/ziontechgroup','''
            status: 'broken',
            statusCode: 404,'
            responseTime: 1200,''
            lastChecked: new Date(),'''
            parentPage: 'Homepage','''
            linkText: 'LinkedIn'
        },
        {}
'
''
'''
            url: 'https://twitter.com/ziontechgroup','''
            status: 'external',
            statusCode: 200,'
            responseTime: 800,''
            lastChecked: new Date(),'''
            parentPage: 'Homepage','''
            linkText: 'Twitter'
        },
        {}
'
''
'''
            url: 'tel:+1 302 464 0950','''
            status: 'healthy',
            statusCode: 200,'
            responseTime: 50,''
            lastChecked: new Date(),'''
            parentPage: 'Contact','''
            linkText: 'Phone Number'
        },
        {}
'
''
'''
            url: 'mailto:kleber@ziontechgroup.com','''
            status: 'healthy',
            statusCode: 200,'
            responseTime: 50,''
            lastChecked: new Date(),'''
            parentPage: 'Contact','''
            linkText: 'Email'

export default LinkHealthMonitor;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
