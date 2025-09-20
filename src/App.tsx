import React from 'react'
import Link from 'next/link'

// Simple placeholder components
const Header = () => (
  <header className="bg-white shadow-sm border-b border-gray-200 p-4">
    <h1 className="text-2xl font-bold text-zion-purple">Zion Tech Group</h1>
  </header>
)

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 mt-auto">
    <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
  </footer>
)

const Sidebar = () => (
  <aside className="hidden lg:block w-80 bg-gray-100 p-4">
    <nav>
      <ul className="space-y-2">
        <li><Link href="/" className="block p-2 hover:bg-gray-200 rounded">Home</Link></li>
        <li><Link href="/about" className="block p-2 hover:bg-gray-200 rounded">About</Link></li>
        <li><Link href="/services" className="block p-2 hover:bg-gray-200 rounded">Services</Link></li>
        <li><Link href="/contact" className="block p-2 hover:bg-gray-200 rounded">Contact</Link></li>
      </ul>
    </nav>
  </aside>
)

const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

const HomePage = () => (
  <div className="p-8">
    <h1 className="text-4xl font-bold mb-4">Welcome to Zion Tech Group</h1>
    <p className="text-xl text-gray-600">Advanced AI, Quantum Computing & Technology Solutions</p>
  </div>
)

const AboutPage = () => (
  <div className="p-8">
    <h1 className="text-4xl font-bold mb-4">About Us</h1>
    <p className="text-xl text-gray-600">Leading the future of technology</p>
  </div>
)

const ContactPage = () => (
  <div className="p-8">
    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
    <p className="text-xl text-gray-600">Get in touch with our team</p>
  </div>
)

const ServicesPage = () => (
  <div className="p-8">
    <h1 className="text-4xl font-bold mb-4">Our Services</h1>
    <p className="text-xl text-gray-600">Comprehensive technology solutions for your business</p>
  </div>
)

const PricingPage = () => (
  <div className="p-8">
    <h1 className="text-4xl font-bold mb-4">Pricing</h1>
    <p className="text-xl text-gray-600">Flexible pricing plans for every need</p>
  </div>
)

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 lg:ml-80">
            <HomePage />
          </main>
        </div>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}