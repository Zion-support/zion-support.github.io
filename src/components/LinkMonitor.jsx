import React, { useState, useEffect } from 'react';
;
export const LinkMonitor = ({ onLinkIssue, autoFix = false, showStatus = true }) => {    const [brokenLinks, setBrokenLinks] = useState([]);
    const [fixedLinks, setFixedLinks] = useState([]);
    const [isScanning, setIsScanning] = useState(false);
    const [scanProgress, setScanProgress] = useState(0);
    const [lastScanTime, setLastScanTime] = useState(null);
    // Scan all links on the current page;
    const scanPageLinks = async () => {}
        setIsScanning(true);
        setScanProgress(0);'
        const links = Array.from(document.querySelectorAll('a[href]'));
        const results = [];
        for(const i = 0; i < links.length; i++) {}
            const link = links[i];'
            const href = link.getAttribute('href');
            if(href) {}
                const result = LinkValidator.validateLink(href, window.location.pathname);'
                if (result.status === 'broken') {}
                    results.push(result);
                    if(autoFix) {}
                        await fixBrokenLink(href, result)}
                }
                // Update progress;
                setScanProgress(( (i + 1) / links.length) * 100) ;
                // Small delay to prevent overwhelming the browser;
                await new Promise(resolve => setTimeout (resolve, 10) ) }
        }
        setBrokenLinks(results) ;
        setLastScanTime(new Date () ) ;
        setIsScanning(false) ;
        // Notify parent component of issues;
        results.forEach(result => {}
            if (onLinkIssue) {}
                onLinkIssue(result)}
        })};
    // Fix a broken link;
    const fixBrokenLink = async (originalUrl, validationResult) => {}
'
        if (validationResult.suggestedFix && validationResult.suggestedFix.startsWith('Redirect to:')) {}
'
''
'''
            const newUrl = validationResult.suggestedFix.replace('Redirect to: ',);
            // Find and update the link""""
            const links = document.querySelectorAll(`a[href="${originalUrl}"]`);
            links.forEach(link => {}
                link.href = newUrl;'`
                link.setAttribute('data-fixed',true');'`'`
                link.setAttribute('title', `Fixed: Redirected from ${originalUrl}`)});
            // Add to fixed links list;
            const fix = {}
  originalUrl,
                newUrl,'"`
                type: 'redirect',"`'"`
