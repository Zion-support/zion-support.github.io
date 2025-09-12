import React from 'react';
import Link from 'next/link';
import './globals.css';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import ErrorBoundary from '../components/ErrorBoundary';
import NewContentBanner from '../components/NewContentBanner';
import EnhancedContentPromotionBanner from '../components/EnhancedContentPromotionBanner';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedNavigationWithContent from '../components/EnhancedNavigationWithContent';

export const metadata = {
	title: 'Zion Tech Group',
	description: 'AI & Technology Solutions',
	metadataBase: new URL('https://zion.tech'),
	applicationName: 'Zion Tech Group',
	generator: 'Next.js',
	authors: [{ name: 'Zion Tech Group' }],
	keywords: [
		'AI',
		'Artificial Intelligence',
		'Edge Computing',
		'Autonomous Systems',
		'Consulting',
		'Case Studies',
		'Implementation Guide',
	],
	openGraph: {
		title: 'Zion Tech Group — AI & Technology Solutions',
		description: 'Strategy, implementation, and measurable ROI from modern AI systems.',
		url: 'https://zion.tech',
		siteName: 'Zion Tech Group',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Zion Tech Group',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		creator: '@ZionTech',
		title: 'Zion Tech Group — AI & Technology Solutions',
		description: 'Strategy, implementation, and measurable ROI from modern AI systems.',
		images: ['/og-image.png'],
	},
	icons: {
		icon: [
			{ url: '/favicon.ico' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
		],
		apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
	},
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#ffffff' },
		{ media: '(prefers-color-scheme: dark)', color: '#0b1020' },
	],
	alternates: {
		canonical: 'https://zion.tech',
	},
};

function Header() {
  return (
    <header className="border-b border-gray-200 sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="flex items-center justify-between px-4 py-3 max-w-6xl mx-auto" role="navigation" aria-label="Main navigation">
        <Link 
          href="/" 
          className="font-bold text-lg text-gray-900 hover:text-blue-600 transition-colors focus-visible:focus"
          aria-label="Zion Tech Group - Home"
        >
          Zion Tech Group
        </Link>
        <div className="hidden md:flex gap-6">
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus font-semibold relative flex items-center">
              AI 2026
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                NEW
              </span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <Link href="/blog/ai-2025-revolutionary-breakthroughs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🚀 AI 2025 Revolutionary Breakthroughs (BREAKTHROUGH)
                </Link>
                <Link href="/case-studies/ai-2025-fortune-500-transformation-breakthrough" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🏆 Fortune 500: 1500% ROI Success (BREAKTHROUGH)
                </Link>
                <Link href="/resources/ai-2025-ultimate-implementation-master-guide" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  📚 Ultimate Implementation Master Guide (BREAKTHROUGH)
                </Link>
                <div className="border-t border-gray-200 my-2"></div>
                <Link href="/blog/ai-2025-ultimate-trends-predictions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🔮 AI 2025 Ultimate Trends (NEW)
                </Link>
                <Link href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🏆 1200% ROI Success Story (NEW)
                </Link>
                <Link href="/resources/ai-2025-ultimate-implementation-toolkit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🛠️ Ultimate Implementation Toolkit (NEW)
                </Link>
                <div className="border-t border-gray-200 my-2"></div>
                <Link href="/ai-2026-advanced-technology-showcase" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🔮 Advanced Technology Showcase
                </Link>
                <Link href="/ai-2026-technology-showcase" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🚀 Technology Showcase
                </Link>
                <Link href="/blog/ai-2026-revolutionary-breakthroughs-future" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🔮 Revolutionary Breakthroughs
                </Link>
                <Link href="/blog/ai-2029-quantum-computing-revolution" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🔮 AI 2029 Quantum Revolution (BREAKTHROUGH)
                </Link>
                <Link href="/blog/ai-2025-enterprise-automation-mastery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🚀 Enterprise Automation Mastery (NEW)
                </Link>
                <Link href="/blog/ai-2027-future-trends-predictions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🔮 AI 2027 Future Trends (BREAKTHROUGH)
                </Link>
                <Link href="/blog/ai-2026-ultimate-trends-predictions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🔮 Ultimate Trends & Predictions
                </Link>
                <Link href="/blog/ai-2026-revolutionary-trends-predictions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  📈 Revolutionary Trends & Predictions
                </Link>
                <Link href="/resources/ai-2026-complete-implementation-master-guide" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  📚 Master Implementation Guide
                </Link>
                <Link href="/resources/ai-2029-implementation-master-guide" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  📚 AI 2029 Master Guide (BREAKTHROUGH)
                </Link>
                <Link href="/resources/ai-2025-ultimate-implementation-toolkit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🛠️ Ultimate Implementation Toolkit (NEW)
                </Link>
                <Link href="/resources/ai-2027-ultimate-implementation-master-guide" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  📚 AI 2027 Ultimate Master Guide (BREAKTHROUGH)
                </Link>
                <Link href="/resources/ai-2026-ultimate-implementation-toolkit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🛠️ Implementation Toolkit 2026
                </Link>
                <Link href="/resources/ai-2026-implementation-toolkit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🛠️ Implementation Toolkit
                </Link>
                <Link href="/tools/ai-roi-calculator-2026" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  💰 ROI Calculator
                </Link>
                <Link href="/case-studies/ai-2029-enterprise-transformation-breakthrough" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  💰 AI 2029 Enterprise Breakthrough (4000% ROI) (BREAKTHROUGH)
                </Link>
                <Link href="/case-studies/ai-2027-financial-services-revolution" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  💰 AI 2027 Financial Revolution (2000% ROI) (BREAKTHROUGH)
                </Link>
                <Link href="/case-studies/quantum-ai-financial-optimization-breakthrough-2026" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  ⚛️ Quantum AI Breakthrough
                </Link>
                <Link href="/blog/ai-2026-enterprise-automation-revolution" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🚀 Enterprise Automation Revolution
                </Link>
                <Link href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🏢 Global Enterprise Success (1200% ROI) (NEW)
                </Link>
                <Link href="/case-studies/ai-2026-global-tech-transformation-breakthrough" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🏢 Global Tech Breakthrough (900% ROI)
                </Link>
                <Link href="/case-studies/ai-2026-global-enterprise-transformation-success" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🏢 Global Enterprise Success (800% ROI)
                </Link>
                <Link href="/case-studies/ai-2026-global-retail-transformation-success" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🏪 Global Retail Success (600% ROI)
                </Link>
                <Link href="/blog/ai-2026-advanced-autonomous-systems" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🤖 Advanced Autonomous Systems
                </Link>
                <Link href="/resources/ai-2026-enterprise-implementation-master-guide" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  📖 Enterprise Implementation Guide
                </Link>
                <Link href="/case-studies/ai-2026-global-retail-transformation-success" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🏆 Global Retail Success Story
                </Link>
                <Link href="/blog/ai-2026-neural-interface-breakthrough" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🧠 Neural Interfaces
                </Link>
                <Link href="/blog/ai-2025-multimodal-revolution" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🎯 Multimodal AI Revolution
                </Link>
                <Link href="/blog/ai-2025-quantum-machine-learning-breakthrough" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  ⚛️ Quantum ML Breakthrough
                </Link>
                <Link href="/blog/ai-2025-edge-computing-revolution" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🌐 Edge Computing Revolution
                </Link>
                <div className="border-t border-gray-200 my-2"></div>
                <Link href="/blog/ai-2028-future-predictions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🔮 AI 2028 Future Predictions (BREAKTHROUGH)
                </Link>
                <Link href="/case-studies/ai-2028-automotive-transformation-breakthrough" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🚗 AI 2028 Automotive Breakthrough (3000% ROI)
                </Link>
                <Link href="/resources/ai-2028-ultimate-implementation-master-guide" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  📚 AI 2028 Ultimate Master Guide (BREAKTHROUGH)
                </Link>
                <Link href="/blog/ai-2027-future-predictions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🔮 AI 2027 Future Predictions (NEW)
                </Link>
                <Link href="/case-studies/ai-2027-automotive-transformation-breakthrough" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🚗 Automotive AI Breakthrough (NEW)
                </Link>
                <Link href="/resources/ai-2027-implementation-master-guide" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  📚 AI 2027 Master Guide (NEW)
                </Link>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus font-semibold relative flex items-center">
              Content Library
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <Link href="/blog/ai-2025-revolutionary-breakthroughs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🚀 AI 2025 Revolutionary Breakthroughs (BREAKTHROUGH)
                </Link>
                <Link href="/case-studies/ai-2025-fortune-500-transformation-breakthrough" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🏆 Fortune 500: 1500% ROI Success (BREAKTHROUGH)
                </Link>
                <Link href="/resources/ai-2025-ultimate-implementation-master-guide" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  📚 Ultimate Implementation Master Guide (BREAKTHROUGH)
                </Link>
                <div className="border-t border-gray-200 my-2"></div>
                <Link href="/blog/ai-2025-ultimate-trends-predictions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🔮 AI 2025 Ultimate Trends (NEW)
                </Link>
                <Link href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🏆 1200% ROI Success Story (NEW)
                </Link>
                <Link href="/resources/ai-2025-ultimate-implementation-toolkit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🛠️ Ultimate Implementation Toolkit (NEW)
                </Link>
                <div className="border-t border-gray-200 my-2"></div>
                <Link href="/blog/ai-2027-future-trends-predictions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🔮 AI 2027 Future Trends (BREAKTHROUGH)
                </Link>
                <Link href="/case-studies/ai-2027-financial-services-revolution" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  💰 2000% ROI Financial Revolution (BREAKTHROUGH)
                </Link>
                <Link href="/resources/ai-2027-ultimate-implementation-master-guide" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  📚 AI 2027 Ultimate Master Guide (BREAKTHROUGH)
                </Link>
                <Link href="/mega-content-showcase-2026" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🚀 Mega Content Showcase 2026
                </Link>
                <Link href="/blog/ai-2025-enterprise-automation-mastery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🚀 Enterprise Automation Mastery (NEW)
                </Link>
                <Link href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  📈 1200% ROI Success Story (NEW)
                </Link>
                <Link href="/resources/ai-2025-ultimate-implementation-toolkit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🛠️ Ultimate AI Toolkit (NEW)
                </Link>
                <Link href="/blog/ai-2026-ultimate-trends-predictions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🔮 Ultimate AI Trends 2026
                </Link>
                <Link href="/case-studies/ai-2026-fortune-500-transformation-breakthrough" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  📊 Fortune 500 Case Study (NEW)
                </Link>
                <Link href="/resources/ai-2026-implementation-toolkit-ultimate" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🛠️ Ultimate Implementation Toolkit (NEW)
                </Link>
                <Link href="/tools/ai-roi-calculator-2026" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  🧮 AI ROI Calculator 2026 (NEW)
                </Link>
                <Link href="/content-showcase" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  📚 All Content
                </Link>
                <Link href="/revolutionary-content-showcase-2026" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  ⭐ Featured Content
                </Link>
                <div className="border-t border-gray-200 my-2"></div>
                <Link href="/blog/ai-2028-future-predictions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🔮 AI 2028 Predictions (BREAKTHROUGH)
                </Link>
                <Link href="/case-studies/ai-2028-automotive-transformation-breakthrough" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🚗 AI 2028 Automotive Case Study (3000% ROI)
                </Link>
                <Link href="/resources/ai-2028-ultimate-implementation-master-guide" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  📚 AI 2028 Ultimate Master Guide (BREAKTHROUGH)
                </Link>
                <Link href="/blog/ai-2027-future-predictions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🔮 AI 2027 Predictions (NEW)
                </Link>
                <Link href="/case-studies/ai-2027-automotive-transformation-breakthrough" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🚗 Automotive AI Case Study (NEW)
                </Link>
                <Link href="/resources/ai-2027-implementation-master-guide" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  📚 AI 2027 Master Guide (NEW)
                </Link>
              </div>
            </div>
          </div>
          <Link 
            href="/blog" 
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus"
          >
            Blog
          </Link>
          <Link 
            href="/case-studies" 
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus"
          >
            Case Studies
          </Link>
          <Link 
            href="/resources" 
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus"
          >
            Resources
          </Link>
          <Link 
            href="/webinars" 
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus"
          >
            Webinars
          </Link>
          <Link 
            href="/services" 
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus"
          >
            Services
          </Link>
          <Link 
            href="/contact" 
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus"
          >
            Contact
          </Link>
        </div>
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors focus-visible:focus" 
          aria-label="Toggle menu"
          aria-expanded="false"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-10 py-6 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Services</h3>
            <div className="space-y-2">
              <Link 
                href="/services" 
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                All Services
              </Link>
              <Link 
                href="/services/micro-saas" 
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                Micro SaaS
              </Link>
              <Link 
                href="/services/ai-services" 
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                AI Services
              </Link>
              <Link 
                href="/services/it-services" 
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                IT Services
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
            <div className="space-y-2">
              <Link 
                href="/" 
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                Home
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                Contact
              </Link>
              <a 
                href="https://ziontechgroup.com" 
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
                target="_blank"
                rel="noopener noreferrer"
              >
                Main Site
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Contact Info</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <div>Mobile: +1 302 464 0950</div>
              <div>
                Email: <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="hover:text-blue-600 transition-colors focus-visible:focus"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                Address: 364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-6 pt-4 text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900 font-sans">
        <ErrorBoundary>
          <EnhancedContentPromotionBanner />
          <EnhancedNavigationWithContent />
          <main className="max-w-6xl mx-auto px-4 py-6 min-h-screen" role="main">
            {children}
          </main>
          <Footer />
          
          {/* Development Tools */}
          <PerformanceMonitor />
          <AccessibilityEnhancer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
