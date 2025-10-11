'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Shield,
  Search,
  AlertTriangle,
  CheckCircle,
  BarChart,
  Clock,
  Users,
  Zap,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Brain,
  Globe,
  Lock,
  Activity,
  TrendingUp,
  Settings,
  Database,
  Target,

} from 'lucide-react';
;
const PenetrationTestingPage: React.FC = () => {const features = [
    {
      ico,
    n: Search,
      title: 'Comprehensive Vulnerability Assessment',
      description: 'Thorough testing of your systems to identify security weaknesses and potential attack vectors.'
    },
    {
      icon: Target,
      title: 'Simulated Attack Scenarios',
      description: 'Real-world attack simulations to test your defenses and response capabilities.'
    },
    {
      icon: BarChart,
      title: 'Detailed Security Reports',
      description: 'Comprehensive reports with prioritized recommendations and remediation guidance.'
    },
    {
      icon: Zap,
      title: 'Expert Security Analysis',
      description: 'Professional security experts conduct thorough testing using industry-standard methodologies.'
    }
  ];
;
const benefits = [
    'Identify security vulnerabilities before attackers do',
    'Comply with industry regulations and standards',
    'Improve your security posture and defenses',
    'Receive detailed remediation recommendations',
    'Test incident response procedures',
    'Validate security controls effectiveness',
    'Expert analysis and reporting',
    'Ongoing security improvement guidance'
  ];


      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section *
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">
                Penetration Testing Services
              <
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Identify and fix security vulnerabilities before attackers exploit them. 
                Our expert penetration testing services help secure your systems and protect your business.
              <
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Penetration Testing Approach
              <
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use industry-standard methodologies and cutting-edge tools to thoroughly assess your security posture.
              <
            <

            <div className="grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-4 gap-8">
              {features.map((feature, index) => (<div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">

        {/* Benefits Section *
        <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits
              <
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Strengthen your security defenses with our comprehensive penetration testing services.
              <
            <


        {/* CTA Section *
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Test Your Security?
              <
              <p className="text-xl text-purple-100 mb-8">
                Contact our security experts to schedule a comprehensive penetration test for your systems.
              <
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hove,
    r:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  
                  <Mail className="mr-2 h-5 w-5" 
                  Email Us
export default PenetrationTestingPage;