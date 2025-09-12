import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/LoadingSpinner';
import ThemeToggle from './components/ThemeToggle';
import { PerformanceMonitor } from './components/PerformanceMonitor';
import ProgressBar from './components/ProgressBar';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
// Lazy load components for better performance
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));
export default function AppMinimal() {
    return (_jsx(ThemeProvider, { children: _jsx(NotificationProvider, { children: _jsxs(ErrorBoundary, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Zion Tech Group - Advanced Technology Solutions" }), _jsx("meta", { name: 'description', content: 'Leading provider of AI, blockchain, cloud computing, and cybersecurity solutions for modern businesses.' }), _jsx("meta", { name: 'viewport', content: 'width=device-width, initial-scale=1' }), _jsx("meta", { property: 'og:title', content: 'Zion Tech Group' }), _jsx("meta", { property: 'og:description', content: 'Advanced Technology Solutions' }), _jsx("meta", { property: 'og:type', content: 'website' }), _jsx("link", { rel: 'canonical', href: 'https://zion.app' })] }), _jsxs("div", { className: 'app', children: [_jsx(ProgressBar, {}), _jsx("header", { className: 'app-header', children: _jsxs("nav", { className: 'main-navigation', children: [_jsx("div", { className: 'nav-brand', children: _jsx("h1", { children: "Zion Tech Group" }) }), _jsxs("ul", { className: 'nav-links', children: [_jsx("li", { children: _jsx("a", { href: '/', children: "Home" }) }), _jsx("li", { children: _jsx("a", { href: '/about', children: "About" }) }), _jsx("li", { children: _jsx("a", { href: '/services', children: "Services" }) }), _jsx("li", { children: _jsx("a", { href: '/contact', children: "Contact" }) })] }), _jsx("div", { className: 'nav-actions', children: _jsx(ThemeToggle, {}) })] }) }), _jsx("main", { className: 'app-main', children: _jsx(React.Suspense, { fallback: _jsx(LoadingSpinner, { text: 'Loading page...' }), children: _jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(HomePage, {}) }), _jsx(Route, { path: '/about', element: _jsx(AboutPage, {}) }), _jsx(Route, { path: '/services', element: _jsx(ServicesPage, {}) }), _jsx(Route, { path: '/contact', element: _jsx(ContactPage, {}) }), _jsx(Route, { path: '*', element: _jsx(NotFoundPage, {}) })] }) }) }), _jsx("footer", { className: 'app-footer', children: _jsxs("div", { className: 'footer-content', children: [_jsx("p", { children: "\u00A9 2024 Zion Tech Group. All rights reserved." }), _jsxs("div", { className: 'footer-links', children: [_jsx("a", { href: '/privacy', children: "Privacy Policy" }), _jsx("a", { href: '/terms', children: "Terms of Service" })] })] }) }), _jsx(ScrollToTop, {})] }), _jsx(PerformanceMonitor, {})] }) }) }));
}
