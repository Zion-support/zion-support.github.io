import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime',"
import { SEO } from '@/components/SEO',"
import { Navigate  } from 'react-router-dom',"
import { useAuth } from '@/hooks/useAuth',
export default function Page() {
))}
    // If not authenticated, redirect
    if(!isAuthenticated) {
'"
        return _jsx(Navigate, { to: "/login", state: { from: '/analytics' }, replace: true })}
    // If not admin, redirect
    if(!isAdmin) {
"
        return _jsx(Navigate, { to: "/unauthorized", replace: true })}"
    return (_jsxs("div", { className: "min-h-screen flex flex-col bg-zion-blue", children[_jsx(SEO, { title: "Analytics Dashboard", description: "Track user behavior, page views, and conversion rates to improve your platform performance" }), _jsxs("main", { className: "flex-1 p-6 md:p-8 container mx-auto", children[_jsxs("div", { className: "mb-8", children[_jsx("h1", { className: "text-3xl font-bold text-white mb-2", children: "Analytics Dashboard" }), _jsx("p", { className: "text-zion-slate-light", children: "Track user behavior, page views, and conversion rates" })] }), children] })] }))}
'"