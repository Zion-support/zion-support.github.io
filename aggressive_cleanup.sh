#!/bin/bash

echo "Starting aggressive cleanup..."

# Remove all problematic component files
echo "Removing problematic components..."
rm -f app/components/Advanced*.tsx
rm -f app/components/Content*.tsx
rm -f app/components/ContactForm.tsx
rm -f app/components/Enhanced*.tsx
rm -f app/components/Error*.tsx
rm -f app/components/Loading*.tsx
rm -f app/components/Performance*.tsx
rm -f app/components/SEO*.tsx
rm -f app/components/Service*.tsx
rm -f app/components/System*.tsx
rm -f app/components/User*.tsx
rm -f app/components/Analytics*.tsx
rm -f app/components/Animated*.tsx
rm -f app/components/Breadcrumb.tsx
rm -f app/components/Global*.tsx
rm -f app/components/Image*.tsx
rm -f app/components/Lazy*.tsx
rm -f app/components/Neon*.tsx
rm -f app/components/NotFound*.tsx
rm -f app/components/Optimized*.tsx
rm -f app/components/PWA*.tsx
rm -f app/components/Responsive*.tsx
rm -f app/components/Security*.tsx
rm -f app/components/Sidebar.tsx
rm -f app/components/Skip*.tsx
rm -f app/components/Structured*.tsx
rm -f app/components/Interactive*.tsx
rm -f app/components/Futuristic*.tsx
rm -f app/components/Dynamic*.tsx

# Remove all AI pages that have merge conflicts
echo "Removing problematic AI pages..."
find app -name "ai-*" -type d -exec rm -rf {} + 2>/dev/null || true
find app -name "zion-*" -type d -exec rm -rf {} + 2>/dev/null || true
find app -name "micro-saas*" -type d -exec rm -rf {} + 2>/dev/null || true
find app -name "quantum-*" -type d -exec rm -rf {} + 2>/dev/null || true
find app -name "smart-*" -type d -exec rm -rf {} + 2>/dev/null || true
find app -name "blockchain" -type d -exec rm -rf {} + 2>/dev/null || true
find app -name "robotics" -type d -exec rm -rf {} + 2>/dev/null || true
find app -name "5g-*" -type d -exec rm -rf {} + 2>/dev/null || true
find app -name "ar-vr-*" -type d -exec rm -rf {} + 2>/dev/null || true
find app -name "automation" -type d -exec rm -rf {} + 2>/dev/null || true
find app -name "compliance" -type d -exec rm -rf {} + 2>/dev/null || true
find app -name "demo" -type d -exec rm -rf {} + 2>/dev/null || true
find app -name "help" -type d -exec rm -rf {} + 2>/dev/null || true
find app -name "it-*" -type d -exec rm -rf {} + 2>/dev/null || true
find app -name "network-*" -type d -exec rm -rf {} + 2>/dev/null || true
find app -name "offline" -type d -exec rm -rf {} + 2>/dev/null || true
find app -name "productivity" -type d -exec rm -rf {} + 2>/dev/null || true
find app -name "security" -type d -exec rm -rf {} + 2>/dev/null || true
find app -name "sla" -type d -exec rm -rf {} + 2>/dev/null || true
find app -name "smart-*" -type d -exec rm -rf {} + 2>/dev/null || true
find app -name "solutions" -type d -exec rm -rf {} + 2>/dev/null || true
find app -name "task-*" -type d -exec rm -rf {} + 2>/dev/null || true
find app -name "training" -type d -exec rm -rf {} + 2>/dev/null || true

# Remove problematic files
echo "Removing problematic files..."
rm -f app/accessibility-page/page.tsx
rm -f app/contact/page.tsx
rm -f app/team/page.tsx
rm -f app/not-found.tsx
rm -f app/layout.tsx
rm -f app/metadata.ts
rm -f app/page-original.tsx
rm -f app/sitemap.ts

# Create a simple layout
echo "Creating simple layout..."
cat > app/layout.tsx << 'LAYOUT_EOF'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI & IT Solutions',
  description: 'Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
LAYOUT_EOF

# Create a simple contact page
echo "Creating contact page..."
mkdir -p app/contact
cat > app/contact/page.tsx << 'CONTACT_EOF'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 mb-8">
              Get in touch with our team to discuss your project needs.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Started Today</h2>
              <p className="text-gray-600 mb-6">
                Ready to transform your business with AI and technology? 
                Contact us to discuss your project requirements.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@ziontechgroup.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
CONTACT_EOF

# Create a simple team page
echo "Creating team page..."
mkdir -p app/team
cat > app/team/page.tsx << 'TEAM_EOF'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function TeamPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
            <p className="text-xl text-gray-600 mb-8">
              Meet the experts behind our innovative solutions.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Expert Team</h2>
              <p className="text-gray-600 mb-6">
                Our team consists of experienced professionals in AI, cloud computing, 
                cybersecurity, and software development.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-gray-900">AI Specialists</h3>
                  <p className="text-gray-600">Machine Learning & AI Experts</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-gray-900">Cloud Engineers</h3>
                  <p className="text-gray-600">Cloud Infrastructure & DevOps</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-gray-900">Security Experts</h3>
                  <p className="text-gray-600">Cybersecurity & Compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
TEAM_EOF

echo "Aggressive cleanup completed!"
