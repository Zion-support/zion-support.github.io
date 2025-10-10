'use client';

import React, { useState, useEffect, Suspense, memo } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ContentPromotionBanner } from './components/ContentPromotionBanner';

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-4 bg-gray-300 rounded mb-4"></div>
    <div className="h-3 bg-gray-300 rounded mb-2"></div>
    <div className="h-3 bg-gray-300 rounded"> </div>
  </div>
))
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

const HomePage: React.FC = () => {}
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {}
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handlePhoneClick = () => {}
    // Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {}
      window.gtag('event', 'phone_click', {}
        event_category: 'engagement',
        event_label: 'header_phone'
      });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <Navigation />
        
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        
        {/* Content Promotion Banner */}
        <Suspense fallback={<div>Loading...</div>}>
          <ContentPromotionBanner />
        </Suspense>
        
        <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section
            className={`text-center mb-16 transition-all duration-1000 ${}
              isLoaded && isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            aria-labelledby="hero-heading"
          >
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              >
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium" role="doc-subtitle">
                Advanced AI and IT Solutions
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
                Transform your business with our cutting-edge technology and achieve unprecedented growth.
              </p>
          {/* Micro SAAS Solutions Section */}
        <section className="mb-16" aria-labelledby="micro-saas-heading">
          <h2 id="micro-saas-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Micro SAAS Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
            Affordable, powerful AI-driven tools for modern businesses. 100+ ready-to-use applications with real market value.
          </p>
          {/* Productivity Tools */}
          <div className="mb-12"></div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text"></h3>
              Productivity & Business Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"></div>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4"></di>📝</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4"></h>AI Writing Assistant</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Advanced AI writing tool for blogs, emails, reports, and content creation with 50+ templates.
                </p>
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-blue-400 mb-2"></di>$29/month</div>
                  <a href="/ai-writing-assistant" className="text-blue-400 hover:text-blue-300 font-medium text-sm"></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4"></di>📊</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4"></h>Smart Analytics</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Real-time business analytics with AI insights, automated reports, and predictive forecasting.
                </p>
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-green-400 mb-2"></di>$49/month</div>
                  <a href="/smart-analytics" className="text-green-400 hover:text-green-300 font-medium text-sm"></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4"></di>📅</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4"></h>AI Scheduler</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Intelligent scheduling with calendar optimization, meeting coordination, and time management.
                </p>
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-purple-400 mb-2"></di>$19/month</div>
                  <a href="/ai-scheduler" className="text-purple-400 hover:text-purple-300 font-medium text-sm"></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4"></di>💰</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4"></h>Expense Tracker</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  AI-powered expense management with receipt scanning, categorization, and budget insights.
                </p>
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-yellow-400 mb-2"></di>$15/month</div>
                  <a href="/expense-tracker" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm"></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4"></di>🎯</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4"></h>Task Manager Pro</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Advanced task management with AI prioritization, team collaboration, and progress tracking.
                </p>
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-indigo-400 mb-2"></di>$39/month</div>
                  <a href="/task-manager-pro" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm"></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4"></di>📈</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4"></h>CRM Lite</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Lightweight CRM with AI lead scoring, contact management, and sales pipeline automation.
                </p>
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-pink-400 mb-2"></di>$59/month</div>
                  <a href="/crm-lite" className="text-pink-400 hover:text-pink-300 font-medium text-sm"></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4"></di>📧</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4"></h>Email Optimizer</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  AI-powered email optimization with subject line suggestions, send time optimization, and A/B testing.
                </p>
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-cyan-400 mb-2"></di>$25/month</div>
                  <a href="/email-optimizer" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm"></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4"></di>🔍</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4"></h>Social Media Manager</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  AI-driven social media management with content creation, scheduling, and performance analytics.
                </p>
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-orange-400 mb-2"></di>$45/month</div>
                  <a href="/social-media-manager" className="text-orange-400 hover:text-orange-300 font-medium text-sm"></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📋</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Project Management AI</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Intelligent project management with AI task prioritization, resource allocation, and timeline optimization.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-indigo-400 mb-2">$89/month</div>
                  <a href="/project-management-ai" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💬</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Meeting Assistant</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Automated meeting transcription, action item extraction, and intelligent follow-up scheduling.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400 mb-2">$67/month</div>
                  <a href="/ai-meeting-assistant" className="text-purple-400 hover:text-purple-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Financial Planner</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Personal and business financial planning with AI insights, budget optimization, and investment recommendations.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400 mb-2">$129/month</div>
                  <a href="/ai-financial-planner" className="text-green-400 hover:text-green-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
            </div>
          </div>
          {/* Marketing & Sales Tools */}
          <div className="mb-12"></div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text"></h3>
              Marketing & Sales Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"></div>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4"></di>🎨</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4"></h>AI Design Studio</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Create stunning graphics, logos, and marketing materials with AI-powered design tools.
                </p>
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-pink-400 mb-2"></di>$35/month</div>
                  <a href="/ai-design-studio" className="text-pink-400 hover:text-pink-300 font-medium text-sm"></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4"></di>📱</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4"></h>Landing Page Builder</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Build high-converting landing pages with AI optimization and A/B testing capabilities.
                </p>
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-blue-400 mb-2"></di>$29/month</div>
                  <a href="/landing-page-builder" className="text-blue-400 hover:text-blue-300 font-medium text-sm"></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4"></di>📊</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4"></h>SEO Optimizer</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  AI-powered SEO analysis and optimization with keyword research and content suggestions.
                </p>
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-green-400 mb-2"></di>$49/month</div>
                  <a href="/seo-optimizer" className="text-green-400 hover:text-green-300 font-medium text-sm"></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4"></di>📈</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4"></h>Ad Campaign Manager</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Automated ad campaign management with AI optimization across Google, Facebook, and LinkedIn.
                </p>
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-yellow-400 mb-2"></di>$79/month</div>
                  <a href="/ad-campaign-manager" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm"></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Lead Scoring AI</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Intelligent lead scoring and qualification with AI-powered prospect analysis and conversion prediction.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-pink-400 mb-2">$95/month</div>
                  <a href="/lead-scoring-ai" className="text-pink-400 hover:text-pink-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📧</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Email Sequence Builder</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  AI-powered email sequence creation with personalization, A/B testing, and automated follow-ups.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400 mb-2">$59/month</div>
                  <a href="/email-sequence-builder" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Conversion Rate Optimizer</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  AI-driven conversion optimization with heatmap analysis, user behavior tracking, and A/B testing.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400 mb-2">$149/month</div>
                  <a href="/conversion-rate-optimizer" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
            </div>
          </div>
          {/* Developer Tools */}
          <div className="mb-12"></div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text"></h3>
              Developer Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"></div>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4"></di>💻</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4"></h>Code Assistant</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  AI-powered code completion, debugging, and optimization for multiple programming languages.
                </p>
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-cyan-400 mb-2"></di>$39/month</div>
                  <a href="/code-assistant" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm"></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4"></di>🔧</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4"></h>API Builder</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Create and manage APIs with AI assistance, documentation generation, and testing tools.
                </p>
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-indigo-400 mb-2"></di>$59/month</div>
                  <a href="/api-builder" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm"></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4"></di>🐛</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4"></h>Bug Tracker Pro</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions.
                </p>
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-red-400 mb-2"></di>$25/month</div>
                  <a href="/bug-tracker-pro" className="text-red-400 hover:text-red-300 font-medium text-sm"></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4"></di>📚</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4"></h>Doc Generator</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Automatically generate technical documentation, API docs, and user guides from code.
                </p>
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-purple-400 mb-2"></di>$19/month</div>
                  <a href="/doc-generator" className="text-purple-400 hover:text-purple-300 font-medium text-sm"></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔧</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Code Review AI</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Automated code review with security analysis, performance optimization, and best practice suggestions.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-red-400 mb-2">$79/month</div>
                  <a href="/code-review-ai" className="text-red-400 hover:text-red-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚡</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Performance Monitor</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Real-time application performance monitoring with AI-powered insights and automated alerting.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400 mb-2">$99/month</div>
                  <a href="/performance-monitor" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔒</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Security Scanner</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Automated security vulnerability scanning with AI-powered threat detection and remediation suggestions.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-orange-400 mb-2">$129/month</div>
                  <a href="/security-scanner" className="text-orange-400 hover:text-orange-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
            </div>
          </div>
          {/* Healthcare & Medical Tools */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
              Healthcare & Medical Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏥</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Medical Records AI</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  AI-powered medical record management with automated data extraction and patient insights.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400 mb-2">$199/month</div>
                  <a href="/medical-records-ai" className="text-green-400 hover:text-green-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💊</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Drug Interaction Checker</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  AI-powered drug interaction analysis with real-time safety alerts and dosage recommendations.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400 mb-2">$149/month</div>
                  <a href="/drug-interaction-checker" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🩺</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Symptom Analyzer</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  AI-powered symptom analysis with preliminary diagnosis suggestions and healthcare provider recommendations.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400 mb-2">$179/month</div>
                  <a href="/symptom-analyzer" className="text-purple-400 hover:text-purple-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📋</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Appointment Scheduler</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Intelligent appointment scheduling with patient preferences, provider availability, and automated reminders.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400 mb-2">$89/month</div>
                  <a href="/appointment-scheduler" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
            </div>
          </div>
          {/* E-commerce & Retail Tools */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
              E-commerce & Retail Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🛒</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Inventory Optimizer</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  AI-powered inventory management with demand forecasting, stock optimization, and automated reordering.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-orange-400 mb-2">$159/month</div>
                  <a href="/inventory-optimizer" className="text-orange-400 hover:text-orange-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💰</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Dynamic Pricing AI</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Intelligent pricing optimization based on market conditions, competitor analysis, and demand patterns.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400 mb-2">$199/month</div>
                  <a href="/dynamic-pricing-ai" className="text-green-400 hover:text-green-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Customer Segmentation</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  AI-powered customer segmentation with behavioral analysis and personalized marketing recommendations.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-pink-400 mb-2">$129/month</div>
                  <a href="/customer-segmentation" className="text-pink-400 hover:text-pink-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Sales Forecasting</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Advanced sales forecasting with AI predictions, trend analysis, and revenue optimization insights.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400 mb-2">$179/month</div>
                  <a href="/sales-forecasting" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
            </div>
          </div>
          {/* Real Estate & Property Tools */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">
              Real Estate & Property Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏠</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Property Valuation AI</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  AI-powered property valuation with market analysis, comparable sales, and investment potential assessment.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-indigo-400 mb-2">$149/month</div>
                  <a href="/property-valuation-ai" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📋</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Lease Management</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Automated lease management with document processing, renewal tracking, and tenant communication.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400 mb-2">$99/month</div>
                  <a href="/lease-management" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔍</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Market Analysis</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  Comprehensive market analysis with neighborhood trends, price predictions, and investment opportunities.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400 mb-2">$179/month</div>
                  <a href="/market-analysis" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Virtual Tour Creator</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                  AI-powered virtual tour creation with 360° imaging, interactive floor plans, and immersive experiences.
                </p>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400 mb-2">$199/month</div>
                  <a href="/virtual-tour-creator" className="text-purple-400 hover:text-purple-300 font-medium text-sm">
                    Try Free →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* Statistics Section */}
        <Suspense fallback={<div></Suspense>}>
          <ContentStatistics />
        </Suspense>
        {/* Content Carousel */}
        <Suspense fallback={<div></Suspense>}>
          <ContentCarousel />
        </Suspense>
        {/* Dynamic Content Showcase */}
        <Suspense fallback={<div></Suspense>}>
          <DynamicContentShowcase />
        </Suspense>
        {/* Newsletter Signup */}
        <Suspense fallback={<div></Suspense>}>
          <ContentNewsletterSignup />
        </Suspense>
              
              {/* CTA Buttons */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  aria-label="Call us at (302) 464-0950"
                >
                  Call (302) 464-0950
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </section>
          
          {/* Services Section */}
          <section className="mb-16" aria-labelledby="services-heading">
            <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Comprehensive AI and IT solutions designed to transform your business operations
            </p>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12">
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🤖</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">AI Services</h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                  </p>
                </article>
              </Suspense>
              
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">⚡</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">IT Solutions</h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Complete IT infrastructure, cloud migration, cybersecurity, and digital transformation services.
                  </p>
                </article>
              </Suspense>
              
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🔒</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">Cybersecurity</h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Enterprise-grade security solutions to protect your data and infrastructure from threats.
                  </p>
                </article>
              </Suspense>
              
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🌐</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">Cloud Services</h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Scalable cloud infrastructure and migration services for modern business needs.
                  </p>
                </article>
              </Suspense>
            </div>
          </section>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;