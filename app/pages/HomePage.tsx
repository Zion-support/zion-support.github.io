import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { 
  ArrowRightIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  CpuChipIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  RocketLaunchIcon,
  SparklesIcon,
  BoltIcon
} from '@heroicons/react/24/outline';
import FuturisticBackground from '../components/FuturisticBackground';
import NeonButton from '../components/NeonButton';
import AnimatedCard from '../components/AnimatedCard';
import { services } from '../data/servicesData';

export default function HomePage()  {

  const structuredData = {
export default function HomePage() {
const structuredData = {
      title: "@context": "https: //schema.org"
    "@type": "WebSite"
    "name": "Zion Tech Group"
    "url": "https: //ziontechgroup.com"
    "description": "Advanced AI and IT solutions provider specializing in cybersecurity, cloud infrastructure, and digital transformation."
    "potentialAction": {
      title: "
      "@type": "
      "target": "
      "query-input": "
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide."
        keywords="AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions"
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
        <div className="relative z-10 container mx-auto px-4 text-center"
          <div className="max-w-5xl mx-auto"
            <div className="mb-8"
              <h1 className="text-7xl md: text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent animate-pulse"
              <div className="flex items-center justify-center gap-4 mb-4"
                <SparklesIcon className="w-8 h-8 text-purple-400 animate-bounce"
                <BoltIcon className="w-8 h-8 text-cyan-400 animate-bounce delay-100"
                <RocketLaunchIcon className="w-8 h-8 text-pink-400 animate-bounce delay-200"
            <p className="text-2xl md: text-3xl text-gray-300 mb-8 leading-relaxed font-light"
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
            <div className="flex flex-col sm: flex-row gap-6 justify-center items-center"
              <NeonButton to="/contact" variant="primary" size="lg"
                <ArrowRightIcon className="w-5 h-5 ml-2"
              <NeonButton to="/services" variant="secondary" size="lg"
                <ArrowRightIcon className="w-5 h-5 ml-2"
      <section className="py-20 relative"
        <div className="container mx-auto px-4"
          <div className="text-center mb-16"
            <h2 className="text-5xl md: text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          <div className="grid md: grid-cols-2 lg: grid-cols-3 gap-8 max-w-7xl mx-auto"
              <AnimatedCard key={service.id
    } glowColor={service.glowColor} className="group"
                <div className="text-center mb-6"
                  <div className="text-6xl mb-4"
                  <h3 className="text-2xl font-bold text-white mb-3"
                  <p className="text-gray-300 mb-4 leading-relaxed"
                <div className="space-y-3 mb-6"
                    <div key={featureIndex} className="flex items-center text-gray-300"
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mr-3"><span className="text-sm"
                <div className="mb-6"
                  <div className="text-center"
                    <span className="text-3xl font-bold text-white"
                    <span className="text-gray-400 text-sm ml-2"
                  <p className="text-gray-400 text-sm text-center mt-1"
                <div className="flex flex-col gap-3"
                  <NeonButton to={service.href} variant="primary" size="sm"
                    <ArrowRightIcon className="w-4 h-4 ml-2"
                  <NeonButton to="/contact" variant="secondary" size="sm"
          <div className="text-center mt-12"
            <NeonButton to="/services" variant="primary" size="lg"
              <ArrowRightIcon className="w-5 h-5 ml-2"
      <section className="py-20 relative"
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-purple-900/50 to-slate-900"><div className="container mx-auto px-4 relative z-10"
          <div className="max-w-6xl mx-auto"
            <div className="text-center mb-16"
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
              <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto"
            <div className="grid md:grid-cols-3 gap-8 mb-16"
              <AnimatedCard glowColor="purple" className="text-center"
                <div className="text-6xl font-bold text-purple-400 mb-4 animate-pulse"
                <div className="text-xl text-gray-300 mb-2"
                <div className="text-gray-400 text-sm"
              <AnimatedCard glowColor="cyan" className="text-center"
                <div className="text-6xl font-bold text-cyan-400 mb-4 animate-pulse"
                <div className="text-xl text-gray-300 mb-2"
                <div className="text-gray-400 text-sm"
              <AnimatedCard glowColor="green" className="text-center"
                <div className="text-6xl font-bold text-green-400 mb-4 animate-pulse"
                <div className="text-xl text-gray-300 mb-2"
                <div className="text-gray-400 text-sm"
            <div className="text-center"
              <NeonButton to="/about" variant="primary" size="lg"
                <ArrowRightIcon className="w-5 h-5 ml-2"
      <section className="py-20 relative"
        <div className="absolute inset-0 bg-slate-900"><div className="container mx-auto px-4 relative z-10"
          <div className="max-w-6xl mx-auto"
            <div className="text-center mb-16"
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
              <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            <div className="grid md:grid-cols-3 gap-8 mb-16"
              <AnimatedCard glowColor="purple" className="text-center"
                <PhoneIcon className="w-12 h-12 text-purple-400 mx-auto mb-4"
                <h3 className="text-xl font-bold text-white mb-2"
                <p className="text-gray-300 text-lg"
                <p className="text-gray-400 text-sm mt-2"
              <AnimatedCard glowColor="cyan" className="text-center"
                <EnvelopeIcon className="w-12 h-12 text-cyan-400 mx-auto mb-4"
                <h3 className="text-xl font-bold text-white mb-2"
                <p className="text-gray-300 text-lg"
                <p className="text-gray-400 text-sm mt-2"
              <AnimatedCard glowColor="green" className="text-center"
                <MapPinIcon className="w-12 h-12 text-green-400 mx-auto mb-4"
                <h3 className="text-xl font-bold text-white mb-2"
                <p className="text-gray-300 text-lg"
                <p className="text-gray-400 text-sm mt-2"
            <div className="flex flex-col sm:flex-row gap-6 justify-center"
              <NeonButton to="/contact" variant="primary" size="lg"
                <ArrowRightIcon className="w-5 h-5 ml-2"
              <NeonButton to="/demo" variant="secondary" size="lg"
                <ArrowRightIcon className="w-5 h-5 ml-2"