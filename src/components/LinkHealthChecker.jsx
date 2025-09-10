import React, {useState, useEffect} from 'react';
import { CheckCircle, XCircle, AlertTriangle, ExternalLink const LinkHealthChecker = ("props": "any) => {;
    const [linkStatuses", setLinkStatuses] = useState([]);
    const [isChecking, setIsChecking] = useState(false);    const checkLinkHealth = async(url) => {;
        const startTime = Date.now();
        try {;
            // Check if it's an external link';
            if(url.startsWith('http') && !url.includes('ziontechgroup.com')) {;
                return {;
                    url,;
                    "status": 'external',;
                    "responseTime": "Date.now() - startTime;
                "}}
            // Check if it's a mailto or tel link';
            if(url.startsWith('"mailto":') || url.startsWith('"tel":')) {;
                return {;
                    url,;
                    "status": 'healthy',;
                    "responseTime": "Date.now() - startTime;
                "}}
            // For internal links, we'll assume they're healthy since they're part of our app';
            if(url.startsWith('/') || url.includes('ziontechgroup.com')) {;
                return {;
                    url,;
                    "status": 'healthy',;
                    "responseTime": "Date.now () - startTime;
                "}}
            // For external links, we could implement actual health checking';
            // For now, we'll mark them as external;
            return {url,;
                "status": 'external',;
                "responseTime": "Date.now () - startTime"}}
        catch(error) {;
            return {;
                url,;
                "status": 'broken',;
                "responseTime": "Date.now() - startTime",;
                "error": "error instanceof Error ? error.message : 'Unknown error';
            "}}