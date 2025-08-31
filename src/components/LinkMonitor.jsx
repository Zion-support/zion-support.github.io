import React, { useState, useEffect } from 'react';
import { LinkValidator } from "../utils/linkValidator";

export const LinkMonitor = ({ onLinkIssue, autoFix = false, showStatus = true }) => {
    const [brokenLinks, setBrokenLinks] = useState([]);
    const [fixedLinks, setFixedLinks] = useState([]);
    const [isScanning, setIsScanning] = useState(false);
    const [scanProgress, setScanProgress] = useState(0);
    const [lastScanTime, setLastScanTime] = useState(null);

    // Scan all links on the current page
    const scanPageLinks = async () => {
        setIsScanning(true);
        setScanProgress(0);
        
        const links = Array.from(document.querySelectorAll('a[href]'));
        const results = [];
        
        for (let i = 0; i < links.length; i++) {
            const link = links[i];
            const href = link.getAttribute('href');
            
            if (href) {
                const result = LinkValidator.validateLink(href, window.location.pathname);
                
                if (result.status === 'broken') {
                    results.push(result);
                    
                    if (autoFix) {
                        await fixBrokenLink(href, result);
                    }
                }
            }
            
            // Update progress
            setScanProgress(((i + 1) / links.length) * 100);
            
            // Small delay to prevent overwhelming the browser
            await new Promise(resolve => setTimeout(resolve, 10));
        }
        
        setBrokenLinks(results);
        setLastScanTime(new Date());
        setIsScanning(false);
        
        // Notify parent component of issues
        results.forEach(result => {
            if (onLinkIssue) {
                onLinkIssue(result);
            }
        });
    };

    // Fix a broken link
    const fixBrokenLink = async (originalUrl, validationResult) => {
        if (validationResult.suggestedFix && validationResult.suggestedFix.startsWith('Redirect to:')) {
            const newUrl = validationResult.suggestedFix.replace('Redirect to: ', '');
            
            // Find and update the link
            const links = document.querySelectorAll(`a[href="${originalUrl}"]`);
            links.forEach(link => {
                link.href = newUrl;
                link.setAttribute('data-fixed', 'true');
                link.setAttribute('title', `Fixed: Redirected from ${originalUrl}`);
            });
            
            // Add to fixed links list
            const fix = {
                originalUrl,
                newUrl,
                type: 'redirect',
                reason: 'Automatically fixed broken internal link'
            };
            
            setFixedLinks(prev => [...prev, fix]);
        }
    };

    // Fix all broken links
    const fixAllBrokenLinks = async () => {
        for (const brokenLink of brokenLinks) {
            await fixBrokenLink(brokenLink.url, brokenLink);
        }
        setBrokenLinks([]);
    };

    // Generate redirect rules for server configuration
    const generateRedirectRules = () => {
        const rules = brokenLinks
            .filter(link => link.suggestedFix && link.suggestedFix.startsWith('Redirect to:'))
            .map(link => {
                const newUrl = link.suggestedFix.replace('Redirect to: ', '');
                return `Redirect 301 ${link.url} ${newUrl}`;
            })
            .join('\n');
        
        // Create and download file
        const blob = new Blob([rules], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'redirect-rules.txt';
        a.click();
        URL.revokeObjectURL(url);
    };

    // Export comprehensive report
    const exportReport = () => {
        const report = {
            scanTime: lastScanTime?.toISOString(),
            totalLinks: document.querySelectorAll('a[href]').length,
            brokenLinks: brokenLinks.length,
            fixedLinks: fixedLinks.length,
            brokenLinksDetails: brokenLinks,
            fixedLinksDetails: fixedLinks,
            recommendations: [
                'Fix broken internal links to improve user experience',
                'Set up 301 redirects for moved pages',
                'Regularly monitor external links for validity',
                'Update sitemap to exclude broken URLs'
            ]
        };
        
        const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'link-monitor-report.json';
        a.click();
        URL.revokeObjectURL(url);
    };

    // Auto-scan on mount if autoFix is enabled
    useEffect(() => {
        if (autoFix) {
            scanPageLinks();
        }
    }, [autoFix]);

    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Link Monitor
                </h2>
                <button
                    onClick={scanPageLinks}
                    disabled={isScanning}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                    {isScanning ? 'Scanning...' : 'Scan Links'}
                </button>
            </div>

            {/* Progress Bar */}
            {isScanning && (
                <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <span>Scanning links...</span>
                        <span>{Math.round(scanProgress)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${scanProgress}%` }}
                        />
                    </div>
                </div>
            )}

            {/* Status Summary */}
            {showStatus && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                            {brokenLinks.length}
                        </div>
                        <div className="text-sm text-red-600 dark:text-red-400">Broken Links</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                            {fixedLinks.length}
                        </div>
                        <div className="text-sm text-green-600 dark:text-green-400">Fixed Links</div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {lastScanTime ? lastScanTime.toLocaleTimeString() : 'Never'}
                        </div>
                        <div className="text-sm text-blue-600 dark:text-blue-400">Last Scan</div>
                    </div>
                </div>
            )}

            {/* Broken Links List */}
            {brokenLinks.length > 0 && (
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Broken Links Found
                        </h3>
                        <button
                            onClick={fixAllBrokenLinks}
                            className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
                        >
                            Fix All
                        </button>
                    </div>
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                        {brokenLinks.map((link, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                <div className="flex-1">
                                    <div className="text-sm font-medium text-red-800 dark:text-red-200">
                                        {link.url}
                                    </div>
                                    {link.parentPage && (
                                        <div className="text-xs text-red-600 dark:text-red-400">
                                            Found on: {link.parentPage}
                                        </div>
                                    )}
                                    {link.suggestedFix && (
                                        <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                                            {link.suggestedFix}
                                        </div>
                                    )}
                                </div>
                                <button
                                    onClick={() => fixBrokenLink(link.url, link)}
                                    className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700"
                                >
                                    Fix
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Fixed Links List */}
            {fixedLinks.length > 0 && (
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Recently Fixed Links
                    </h3>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                        {fixedLinks.slice(-5).map((fix, index) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                <div className="flex-1">
                                    <div className="text-sm text-green-800 dark:text-green-200">
                                        {fix.originalUrl} → {fix.newUrl}
                                    </div>
                                    <div className="text-xs text-green-600 dark:text-green-400">
                                        {fix.reason}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={generateRedirectRules}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                    Export Redirect Rules
                </button>
                <button
                    onClick={exportReport}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                >
                    Export Report
                </button>
            </div>

            {/* Recommendations */}
            {brokenLinks.length > 0 && (
                <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                        Recommendations
                    </h4>
                    <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                        <li>• Fix broken internal links to improve user experience</li>
                        <li>• Set up 301 redirects for moved pages</li>
                        <li>• Regularly monitor external links for validity</li>
                        <li>• Update sitemap to exclude broken URLs</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default LinkMonitor;