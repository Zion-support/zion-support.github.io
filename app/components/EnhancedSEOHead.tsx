import React from "react";
'use client'''import { Helmet } from 'react-helmet-async''import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react''import Navigation from '../components/Navigation''import Footer from '../components/Footer'';import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react';
interface EnhancedSEOHeadProps {;  className?: string;}'const EnhancedSEOHead="React.FC<EnhancedSEOHeadProps>= ({className = '' }) =</ {
  return (
    <>
      <Helmet></Helmet>
        <title>{title}</title />        <meta name: "description content=Zion Tech Group" / />"        <meta name: keywords content="AI", artificial intelligence, EnhancedSEOHead, AI solutions, intelligent automation / />      </Helmet />      <Navigation></Navigation>      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"></div /></div>;export default EnhancedSEOHeadPage;  )}"'
export default EnhancedSEOHead;

export default ;
function Page() {
  return <div>Page content</div>;
}