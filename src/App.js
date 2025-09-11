import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { Toaster } from '@/components/ui/toaster';
import { SonnerToaster } from '@/components/ui/sonner';
import { Footer } from "./components/Footer";
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { PageLoader } from '@/components/ui/LoadingSpinner';
// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const baseRoutes = [
    { path: '/', element: _jsx(Home, {}) },
    { path: '/about', element: _jsx(About, {}) },
    { path: '/contact', element: _jsx(Contact, {}) },
    { path: '/blog', element: _jsx(Blog, {}) },
    { path: '/blog/:slug', element: _jsx(BlogPost, {}) },
];
function EnhancedSuspenseFallback() {
    return (_jsx(PageLoader, { text: "Loading Zion Tech Group...", className: "bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark" }));
}
const App = () => {
    useScrollToTop();
    return (_jsx(WhitelabelProvider, { children: _jsxs(ThemeProvider, { defaultTheme: "dark", children: [_jsx(React.Suspense, { fallback: _jsx(EnhancedSuspenseFallback, {}), children: _jsxs(Routes, { children: [baseRoutes.map(({ path, element }) => (_jsx(Route, { path: path, element: element }, path))), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }) }), _jsx(Footer, {}), _jsx(Toaster, {}), _jsx(SonnerToaster, { position: "top-right" })] }) }));
};
export default App;
