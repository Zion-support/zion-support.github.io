'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Zap,
  Settings,
  CheckCircle,
  BarChart,
  Clock,
  Users,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Brain,
  Globe,
  Lock,
  Activity,
  TrendingUp,
  Target,
  Eye,
  Database,
  Workflow,

} from 'lucide-react';
;
const ProcessAutomationPage: React.FC = () => {const features = [
    {
      ico,
    n: Zap,
      title: 'Workflow Automation',
      description: 'Streamline your business processes with intelligent automation that reduces manual work and errors.'
    },
    {
      icon: Bot,
      title: 'AI-Powered Automation',
      description: 'Leverage artificial intelligence to create smart, adaptive automation solutions for complex processes.'
    },
    {
      icon: Settings,
      title: 'Custom Integration',
      description: 'Seamlessly integrate with your existing systems and tools for a unified automation experience.'
    },
    {
      icon: BarChart,
      title: 'Performance Monitoring',
      description: 'Track and optimize your automated processes with real-time analytics and reporting.'
    }
  ];
;
const benefits = [
    'Reduce manual work and human errors',
    'Increase operational efficiency',
    'Lower operational costs',
    'Improve process consistency',
    'Scale your business operations',
    'Enhance employee productivity',
    '24
    'Custom automation solutions'
  ];


      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section *
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Process Automation Services
              <
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Streamline your business operations with intelligent automation solutions. 
                Reduce costs, improve efficiency, and scale your business with AI-powered process automation.
              <
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Automation Solutions
              <
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide comprehensive process automation services to transform your business operations.
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
                Transform your business with our comprehensive process automation services.
              <
            <


        {/* CTA Section *
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Automate Your Processes?
              <
              <p className="text-xl text-purple-100 mb-8">
                Contact our automation experts to discuss your process optimization needs.
              <
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hove,
    r:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  
                  <Mail className="mr-2 h-5 w-5" 
                  Email Us
export default ProcessAutomationPage;