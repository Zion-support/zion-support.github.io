import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'
'use client'
const EnhancedErrorBoundaryPage: React.FC = () => {
  const features = $2;
class EnhancedErrorBoundaryextendsComponent<Props, State>{constructor(props: Props) {
    super(props)
    this.state= { hasErro,
  r: false}
  }
  static getDerivedStateFromError(error: Error): State {return { hasErro,
  r: true, error}
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {this.setState({errorerrorInfo})
    // Log error to monitoring service
    // // // eslint-disable-next-line no-console
    console.error('Error caught by boundary:', error, errorInfo)
  }
  handleReload= () => {windo w.location.reload()
 }
  render() {
  if (this.state.hasError) {
      if (this.props.fallback) {
        return thi s.props.fallback
}
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4"></div>
          <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"></div>
            <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto"></div>
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">Oops! Something went wrong</h1>
            <p className="text-gray-300 mb-6">We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.</p>p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-sm text-gray-400 cursor-pointer mb-2">
                  Error Details (Development)
                </summary>
                <pre className="text-xs text-red-300 bg-black/20 p-3 rounded overflow-auto"></p>
                  {this.state.error.toString()}