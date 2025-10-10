'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const CookiesPage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group
        <meta name="description" content="Cookie Policy for Zion Tech Group. Learn about how we use cookies on our website." />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Cookie Policy
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8">}
                  Last updated: {new Date().toLocaleDateString()}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies
                <p className="text-gray-700 mb-6">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website.
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies
                <p className="text-gray-700 mb-6">
                  We use cookies to improve your experience on our website, analyze site traffic, and personalize content.
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies
                <p className="text-gray-700 mb-6">
                  You can control and/or delete cookies as you wish through your browser settings.
        <Footer />
  )
};
export default CookiesPage;