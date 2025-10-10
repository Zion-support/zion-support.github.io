'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield } from 'lucide-react'
const MicroSaasPage: React.FC = () => {
  const products = [
    {
      name: 'AI Content Generator',
      description: 'Generate high-quality content using advanced AI technology',
      price: '$29/month',
      users: 'Up to 5 users',
      features: ['AI-powered content creation', 'Multiple content types', 'SEO optimization', 'Brand voice customization']}
    },
    {
      name: 'Data Analytics Dashboard',
      description: 'Real-time analytics and insights for your business',
      price: '$49/month',
      users: 'Up to 10 users',
      features: ['Real-time data visualization', 'Custom reports', 'API integration', 'Automated alerts']}
    },
    {
      icon: BarChart,
      title: 'Project Management Pro',
      description: 'AI-enhanced project management with intelligent task allocation and progress tracking.',
      features: ['Smart task management', 'Team collaboration', 'Progress analytics', 'Resource optimization']}
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react'
interface MicroSaasProduct {
  id: string
  icon: string
  title: string
  description: string
  features: string[]
  price: string
  users: string
  popular: boolean
  category: string}
}
const MicroSaasPage: React.FC = () => {
  const products: MicroSaasProduct[] = [
    {
      id: '1',
      icon: '📊',
      title: 'Analytics Dashboard Pro',
      description: 'Advanced business intelligence with real-time analytics and predictive insights',
      features: [
        'Real-time data visualization',
        'Custom report generation',
        'Predictive analytics',
        'Email alerts and notifications',
        'Multi-platform integration',
        'Advanced filtering options',
        'White-label reporting',
        'API access'
      ],
      price: '$49/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Analytics'}
    },
    {
      id: '2',
      icon: '💬',
      title: 'AI Customer Support Suite',
      description: 'Complete customer support solution with AI chatbot and live chat',
      features: [
        'AI chatbot with NLP',
        'Live chat support',
        'Ticket management system',
        'Multi-language support',
        'Sentiment analysis',
        'Knowledge base integration',
        'Analytics and reporting',
        'CRM integration'
      ],
      price: '$79/month',
      users: 'Up to 15 users',
      popular: true,
      category: 'Communication'}
    },
    {
      id: '3',
      icon: '🔐',
      title: 'Security Monitor Pro',
      description: 'Enterprise-grade security monitoring with threat detection and compliance',
      features: [
        'Real-time threat detection',
        'Automated security scans',
        'Compliance reporting (SOC2, GDPR)',
        'Incident response tools',
        'Security dashboard',
        'Vulnerability assessment',
        'Penetration testing',
        '24/7 monitoring'
      ],
      price: '$149/month',
      users: 'Up to 50 users',
      popular: false,
      category: 'Security'}
    },
    {
      id: '4',
      icon: '☁️',
      title: 'Cloud Backup Enterprise',
      description: 'Comprehensive cloud backup with disaster recovery and version control',
      features: [
        'Automated daily backups',
        'Cross-platform sync',
        'Version control',
        'Disaster recovery',
        'Encrypted storage (AES-256)',
        'Incremental backups',
        'Point-in-time recovery',
        'Compliance features'
      ],
      price: '$89/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Storage'}
    },
    {
      id: '5',
      icon: '📈',
      title: 'Performance Tracker Plus',
      description: 'Advanced application performance monitoring with AI-powered insights',
      features: [
        'Performance monitoring',
        'Error tracking and alerting',
        'Uptime monitoring',
        'Performance insights',
        'Alert management',
        'Custom dashboards',
        'API monitoring',
        'Mobile app monitoring'
      ],
      price: '$99/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Monitoring'}
    },
    {
      id: '6',
      icon: '🤖',
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation with AI-powered workflow optimization',
      features: [
        'Workflow automation',
        'AI-powered insights',
        'Task scheduling',
        'Integration capabilities',
        'Custom AI models',
        'Process mining',
        'Exception handling',
        'Performance analytics'
      ],
      price: '$199/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'AI'}
    },
    {
      id: '7',
      icon: '📧',
      title: 'Email Marketing Pro',
      description: 'Advanced email marketing automation with AI-powered personalization',
      features: [
        'Email automation workflows',
        'AI-powered personalization',
        'A/B testing',
        'Advanced segmentation',
        'Email templates',
        'Analytics and reporting',
        'CRM integration',
        'Compliance tools'
      ],
      price: '$69/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Marketing'}
    },
    {
      id: '8',
      icon: '📱',
      title: 'Social Media Manager',
      description: 'Complete social media management with AI content generation and scheduling',
      features: [
        'Multi-platform posting',
        'AI content generation',
        'Post scheduling',
        'Analytics and insights',
        'Hashtag optimization',
        'Engagement tracking',
        'Team collaboration',
        'Brand monitoring'
      ],
      price: '$59/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Support'}
    }
  ]
return (
    <React.Fragment>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group - 50+ AI-Powered Tools
        <meta name="description" content="Discover our comprehensive suite of 50+ micro SaaS solutions powered by AI. From analytics to security, find the perfect tool for your business needs." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, analytics dashboard, project management, security monitoring" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1>Micro SaaS Solutions
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive suite of 50+ AI-powered micro SaaS tools designed to solve specific business challenges.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {microSaasTools.map((tool, index) => (
                <div}
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <tool.icon className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-bold text-white mb-4">{tool.title}
                  <p className="text-gray-300 mb-6">{tool.description}
                  <ul className="space-y-2 mb-6">
                    {tool.features.map((feature, featureIndex) => (}
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                    ))}
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
              ))}
            <div>
  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Infrastructure', 'Marketing', 'Support']
  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '10K+', label: 'Active Users' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '100%', label: 'Secure' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '5min', label: 'Setup Time' }
  ]
  return (
    <React.Fragment>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to solve specific business problems. Quick setup, affordable pricing, powerful features." />
        <meta name="keywords" content="micro SaaS, business tools, analytics, customer chat, security, cloud backup, performance monitoring" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SaaS</span> Solutions
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Ready-to-use business tools that solve specific problems. No complex setup, no long-term commitments - just powerful solutions that work.
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (}
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}
                  <div className="text-gray-600">{stat.label}
              ))}
        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button}
                  key={category}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    category === 'All'
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'}
                  }`}
                >
                  {category}
              ))}
        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Micro SaaS Products
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of specialized business tools designed to solve specific challenges.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product) => (
                <div}
                  key={product.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    product.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'}
                  } hover:border-purple-400 transition-all duration-300 group`}
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star>Most Popular}
                  )}
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{product.icon}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.title}
                    <p className="text-gray-600 mb-4">{product.description}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-3xl font-bold text-gray-900">{product.price}
                      <div className="text-sm text-gray-500">
                        <Users className="w-4 h-4 inline mr-1" />
                        {product.users}
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, index) => (}
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}
                    ))}
                  <div className="flex flex-col gap-3">
                    <button
                      Start Free Trial>
                    <button
                      Learn More>
              ))}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found in this category.}
            )}
        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Micro SaaS Solutions?
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've designed our micro SaaS products to be simple, powerful, and accessible to businesses of all sizes.
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (}
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}
                ))}
        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">How It Works
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Getting started with our micro SaaS solutions is simple and straightforward.
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1
                <h3 className="text-xl font-bold text-white mb-4">Choose Your Solution
                <p className="text-gray-300">Browse our collection and select the micro SaaS product that fits your needs.
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2
                <h3 className="text-xl font-bold text-white mb-4">Start Free Trial
                <p className="text-gray-300">Sign up for a free trial and explore all features without any commitment.
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3
                <h3 className="text-xl font-bold text-white mb-4">Scale & Grow
                <p className="text-gray-300">Upgrade when you're ready and scale your usage as your business grows.
        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
Choose the micro SaaS solution that fits your business needs. Start with a free trial and scale as you grow.
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center">
                  <Zap>Start Free Trial
                <Link>View All Plans
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Micro SaaS?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (}
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Micro SaaS?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (}
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}
              ))}
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?
            <p className="text-xl mb-8 text-blue-100">
              Choose from our collection of micro SaaS solutions and start solving your business problems today.
            <button
              View All Plans>
      <Footer />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
              >
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              <Link
                to="/pricing"
                className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                View Pricing
  )
};
export default MicroSaasPage;