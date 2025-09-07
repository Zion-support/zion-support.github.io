import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Service | Zion Tech Group',
  description: 'Professional services for your business needs.',
  keywords: 'services, business, technology',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Service | Zion Tech Group',
    description: 'Professional services for your business needs.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group',
  },}
interface FeatureCardProps {
  title: string
  description: string
  icon: string
const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)
const ContactSection: React.FC = () => (
  <section className="py-12 bg-green-600 rounded-lg text-white text-center">
    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
    <p className="text-xl mb-8 max-w-2xl mx-auto">
      Let's discuss how our AI Financial Analytics can help your business succeed.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="mailto:kleber@ziontechgroup.com?subject=AI Financial Analytics Inquiry"
        className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        Get Free Consultation
      </a>
      <a
        href="tel:+13024640950"
        className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
      >
        Call +1 302 464 0950
      </a>
    </div>
    <div className="mt-8 text-sm">
      <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      <p>📧 kleber@ziontechgroup.com</p>
    </div>
  </section>
)
export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Professional services for your business needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            This service page is under development. Please contact us for more information.          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>    </div>
  )
