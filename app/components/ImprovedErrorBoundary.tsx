'use client'
import React from 'react';'
import { Helmet } from 'react-helmet-async';'
'use client'
const ImprovedErrorBoundary: React.FC = () => { return (
    <div className="min-h-screen bg-white"
      <Helmet><title>Improved Error Boundary - Zion Tech Group</title><meta name="description" content="Professional improved error boundary services by Zion Tech Group."
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100"
        <div className="max-w-6xl mx-auto text-center"><h1 className="text-5xl font-bold text-gray-900 mb-6"
          <p className="text-xl text-gray-600 max-w-3xl mx-auto"
          <p className="text-xl text-gray-600 max-w-3xl mx-auto"
      <section className="py-16 px-4"
        <div className="max-w-6xl mx-auto"><div className="grid md:grid-cols-2 gap-12 items-center"
              <h2 className="text-3xl font-bold text-gray-900 mb-6"
              <p className="text-lg text-gray-600 mb-6"
import { AlertTriangle, RefreshCw, Home } from "
      errorInfo,"
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`"
    })import { AlertTriangle, RefreshCw, Home } from ";"
    // Log error to console in development"
    if (process.env.NODE_ENV === 'development'"