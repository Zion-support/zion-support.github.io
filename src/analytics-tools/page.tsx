import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, Star, TrendingUp, Brain, Target, BarChart, Phone, Mail, MapPin } from 'lucide-react';

const AnalyticsToolsPage: React.FC = () => {
  const analyticsTools = [
    {
  title: 'AI Business Intelligence',
      price: '$399/month',
      description: 'Advanced business intelligence with AI-powered insights and predictive analytics.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization', 'ROI tracking', 'Performance forecasting'],
      icon: '',
      category: 'Business Intelligence'
    },
      title: 'AI Web Analytics',
      price: '$299/month',
      description: 'Comprehensive web analytics with AI-powered insights and user behavior analysis.',
      features: ['User behavior tracking', 'Conversion analysis', 'Traffic insights', 'Performance metrics', 'Custom events', 'Real-time monitoring'],
      icon: '',
      category: 'Web Analytics',

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const PagePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Page

          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Coming Soon
          </p>

          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            This page is under development. Please check back soon for updates.
          </p>
        </section>
      </main>
      <Footer />
    </div>

  )
};

export default PagePage