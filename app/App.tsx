"use client"
import { Suspense, lazy } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import ErrorBoundary from "./components/ErrorBoundary"
import PerformanceMonitor from "./components/PerformanceMonitor"
import AccessibilityEnhancer from "./components/AccessibilityEnhancer"
import LoadingSpinner from "./components/LoadingSpinner"
import CriticalResourcePreloader from "./components/CriticalResourcePreloader"
import CacheManager from "./components/CacheManager"
import AdvancedPerformanceMonitor from "./components/AdvancedPerformanceMonitor"

// Lazy load pages for better performance
const HomePage = lazy(() => import("./page"))
const AboutPage = lazy(() => import("./about/page"))
const ContactPage = lazy(() => import("./contact/page"))
const ServicesPage = lazy(() => import("./services/page"))
const PricingPage = lazy(() => import("./pricing/page"))
const CaseStudiesPage = lazy(() => import("./case-studies/page"))
const BlogPage = lazy(() => import("./blog/page"))
const TeamPage = lazy(() => import("./team/page"))
const CareersPage = lazy(() => import("./careers/page"))
const PrivacyPage = lazy(() => import("./privacy/page"))
const TermsPage = lazy(() => import("./terms/page"))
const CookiesPage = lazy(() => import("./cookies/page"))

// 5G Solutions Pages
const FiveGDataAnalyticsPage = lazy(() => import("./5g-data-analytics/page"));
const FiveGEdgeComputingPage = lazy(() => import("./5g-edge-computing/page"));
const FiveGImplementationPage = lazy(() => import("./5g-implementation/page"));
const FiveGIoTSolutionsPage = lazy(() => import("./5g-iot-solutions/page"));
const FiveGMobileApplicationsPage = lazy(() => import("./5g-mobile-applications/page"));
const FiveGNetworkInfrastructurePage = lazy(() => import("./5g-network-infrastructure/page"));
const FiveGPrivateNetworksPage = lazy(() => import("./5g-private-networks/page"));
const FiveGSmartCitySolutionsPage = lazy(() => import("./5g-smart-city-solutions/page"));
const FiveGSolutionsPage = lazy(() => import("./5g-solutions/page"));

// Main App Component
