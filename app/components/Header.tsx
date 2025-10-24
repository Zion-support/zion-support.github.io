'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle, Star, Clock, Zap, Shield, Globe, Database, Users, Settings, Check } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

interface HeaderProps {;
  className?: string;
}

const Header: React.FC<HeaderProps>= ({className = '' }) =</ {
  return (
    <>
      <Helmet />
        <title>Header - Zion Tech Group</title />
        <meta name="description" content="Advanced Header solution for modern businesses." / />
        <meta name="keywords" content="AI, artificial intelligence, Header, AI solutions, intelligent automation" / />
      </Helmet />
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">

export default Header;