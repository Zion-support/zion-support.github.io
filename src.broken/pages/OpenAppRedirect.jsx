import React, { useState } from 'react',
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from 'react / jsx -runtime',

export default function Page() {
            else {
                // Not on mobile, redirect to mobile launch page
                setStatus('failed') ,
                setTimeout(() => {
                    router(fallbackUrl) ,
                }, 1500) ,
            }
            // Clear timeout if page visibility changes(meaning app opened successfully) document.addEventListener("visibilitychange", () => {
                if(document.hidden && timeout) {
                    clearTimeout(timeout) }
            }) },
        attemptAppOpen () }, [navigate]) ,
    return (_jsxs ("div", { className: "min - h-screen flex items - center justify - center bg-zion - blue", children[_jsx (SEO, { title: "Opening Zion App", description: "Redirecting to the Zion AI Marketplace mobile app" }) , _jsxs("div", { className: "text-center p - 8", children[_jsx ("div", { className: "w-16 h-16 border-4 border-zion - cyan border-t-transparent rounded-full animate - spin mx - auto mb-6" }) , status === 'redirecting' && (_jsxs(_Fragment, { children[_jsx ("h1", { className: "text-2xl font - bold mb-2", children: "Opening Zion App..." }) , _jsx("p", { className: "text-gray - 300", children: "If nothing happens, download the app first." }) ] }) ) , status === 'timeout' && (_jsxs(_Fragment, { children[_jsx ("h1", { className: "text-2xl font - bold mb-2", children: "App Not Installed" }) , _jsx("p", { className: "text-gray - 300 mb-6", children: "We're redirecting you to download the Zion app." }) ] }) ) , status === 'failed' && (_jsxs(_Fragment, { children[_jsx ("h1", { className: "text-2xl font - bold mb-2", children: "Opening App Failed" }) , _jsx("p", { className: "text-gray - 300 mb-6", children: "We're taking you to our mobile app page where you can download the app." }) , _jsx(Link, { to: "/mobile - launch", children: _jsx (Button, { className: "bg-zion - cyan hover:bg-zion - cyan / 80", children: "Go to Mobile App Page" }) }) ] }) ) ] }) ] }) ) },
}}}}}