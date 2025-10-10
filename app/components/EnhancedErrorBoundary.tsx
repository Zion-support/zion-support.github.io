'use client'
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    this.setState({ error, errorInfo })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <Helmet>
            <title>Error - Zion Tech Group</title>
            <meta name="description" content="An error occurred while loading the page" />

          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-red-500/20">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-red-400" />

              <h1 className="text-4xl font-bold text-white mb-4">
                Oops! Something went wrong

              <p className="text-xl text-gray-300 mb-8">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.

              <div className="space-y-4 mb-8">
                <button
                  onClick={() => window.location.reload()}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center mx-auto"
                >
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Try Again

                <button
                  onClick={() => window.history.back()}
                  className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 hover:text-white transition-all duration-300"
                >
                  Go Back


              <div className="text-sm text-gray-400">
                <p>If this problem persists, please contact our support team:</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                  <a
                    href="tel:+15550123"
                    className="flex items-center justify-center text-cyan-400 hover:text-cyan-300"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    +1 (555) 0123

                  <a
                    href="mailto:support@ziontechgroup.com"
                    className="flex items-center justify-center text-cyan-400 hover:text-cyan-300"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    support@ziontechgroup.com






      )
    }

    return this.props.children
  }
}

export default EnhancedErrorBoundary