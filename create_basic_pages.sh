#!/bin/bash

# Create a basic page template
create_basic_page() {
    local page_path="$1"
    local page_name="$2"
    local title="$3"
    local description="$4"
    
    mkdir -p "$(dirname "$page_path")"
    
    cat > "$page_path" << PAGE_EOF
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code } from 'lucide-react'

export default function ${page_name}() {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${title}, AI solutions, IT services, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                ${title}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              ${description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/about"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-gray-300 mb-8">
                We're working on bringing you comprehensive ${title} solutions. 
                Contact us to learn more about our services.
              </p>
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
PAGE_EOF
}

# Create basic pages for all routes
create_basic_page "/workspace/app/about/page.tsx" "AboutPage" "About Us" "Learn about Zion Tech Group's mission, vision, and team of experts in AI and IT solutions."
create_basic_page "/workspace/app/services/page.tsx" "ServicesPage" "Our Services" "Comprehensive AI and IT solutions designed to transform your business."
create_basic_page "/workspace/app/pricing/page.tsx" "PricingPage" "Pricing" "Transparent pricing for our AI and IT services. Choose the plan that fits your business needs."
create_basic_page "/workspace/app/blog/page.tsx" "BlogPage" "Blog" "Latest insights, trends, and updates in AI and IT technology."
create_basic_page "/workspace/app/case-studies/page.tsx" "CaseStudiesPage" "Case Studies" "Real-world success stories from our AI and IT implementations."
create_basic_page "/workspace/app/careers/page.tsx" "CareersPage" "Careers" "Join our team of experts and help shape the future of AI and IT solutions."
create_basic_page "/workspace/app/team/page.tsx" "TeamPage" "Our Team" "Meet the experts behind Zion Tech Group's innovative solutions."
create_basic_page "/workspace/app/partners/page.tsx" "PartnersPage" "Partners" "Strategic partnerships that enhance our AI and IT capabilities."
create_basic_page "/workspace/app/status/page.tsx" "StatusPage" "System Status" "Real-time status of our services and infrastructure."
create_basic_page "/workspace/app/faq/page.tsx" "FaqPage" "FAQ" "Frequently asked questions about our AI and IT services."
create_basic_page "/workspace/app/docs/page.tsx" "DocsPage" "Documentation" "Comprehensive documentation for our AI and IT solutions."
create_basic_page "/workspace/app/api-docs/page.tsx" "ApiDocsPage" "API Documentation" "Complete API reference for developers."
create_basic_page "/workspace/app/community/page.tsx" "CommunityPage" "Community" "Join our community of AI and IT professionals."
create_basic_page "/workspace/app/compliance/page.tsx" "CompliancePage" "Compliance" "Our commitment to security, privacy, and regulatory compliance."
create_basic_page "/workspace/app/support/page.tsx" "SupportPage" "Support" "Get help with our AI and IT solutions."
create_basic_page "/workspace/app/consultation/page.tsx" "ConsultationPage" "Free Consultation" "Schedule a free consultation with our experts."
create_basic_page "/workspace/app/demo/page.tsx" "DemoPage" "Demo" "See our AI and IT solutions in action."
create_basic_page "/workspace/app/privacy/page.tsx" "PrivacyPage" "Privacy Policy" "How we protect and handle your personal information."
create_basic_page "/workspace/app/terms/page.tsx" "TermsPage" "Terms of Service" "Terms and conditions for using our services."
create_basic_page "/workspace/app/cookies/page.tsx" "CookiesPage" "Cookie Policy" "Information about how we use cookies."
create_basic_page "/workspace/app/sitemap/page.tsx" "SitemapPage" "Sitemap" "Complete sitemap of our website."

echo "Basic pages created successfully"
