'use client';

import React from 'react';
import Link from 'next/link'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
// Navigation removed - using Header from layout instead
// import Footer from '../components/Footer'

const ContactPage: React.FC = () => {
  return (
    <>
      {/* Navigation handled by layout */}
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-blue-100">
                Ready to transform your business? Let&apos;s discuss your project
              </p>
            </div>
          </div>
        </section>
        {/* Footer removed temporarily */}
      </main>
    </>
  )
}
