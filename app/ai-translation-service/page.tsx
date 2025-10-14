import React from 'react';
import { Helmet  } from "react-helmet-async";
import { Languages, Brain, FileText, Clock, Target, CheckCircle, Globe, Zap  } from "lucide-react";
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

export default function AITranslationServicePage() {
  const features = [
    {
      icon: <Languages className="w-6 h-6 text-blue-400" />,
      title: "100+ Languages",
      description: "Support for over 100 languages with high accuracy translation",
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      title: "AI-Powered",
      description: "Advanced neural machine translation with context understanding",
    },
    {
      icon: <FileText className="w-6 h-6 text-green-400" />,
      title: "Document Translation",
      description: "Translate documents while preserving original formatting",
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-400" />,
      title: "Real-time Translation",
      description: "Instant translation for live conversations and content",
    }
  ];

  const translationTypes = [
    {
      category: "Translation Types",
      items: ['Text Translation', 'Document Translation', 'Website Translation', 'Audio Translation', 'Video Subtitles', 'Live Translation']
    },
    {
      category: "Languages",
      items: ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Arabic', 'Portuguese', 'Russian', 'Italian']
    },
    {
      category: "Industries",
      items: ['Legal', 'Medical', 'Technical', 'Business', 'Marketing', 'E-commerce', 'Education', 'Entertainment']
    },
    {
      category: "Features",
      items: ['Context Awareness', 'Industry-Specific Models', 'Quality Assurance', 'Human Review', 'API Integration', 'Batch Processing']
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and small projects",
      features: [
        'Up to 100,000 words/month',
        '50+ languages',
        'Basic document translation',
        'Email support',
        'Standard accuracy'
      ]
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for businesses and teams",
      features: [
        'Up to 500,000 words/month',
        '100+ languages',
        'All document types',
        'Priority support',
        'API access',
        'Custom glossaries'
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations",
      features: [
        'Unlimited words',
        'All languages',
        'Custom models',
        '24/7 support',
        'Dedicated account manager',
        'SLA guarantee'
      ]
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-green-400" />,
      title: "Industry-Specific Translation",
      description: "Specialized translation models for legal, medical, technical, and business content",
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: "Lightning Fast",
      description: "Get translations in seconds with our optimized AI models",
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      title: "Global Reach",
      description: "Expand your business to new markets with accurate translations",
    }
  ];

ursor/fix-errors-and-merge-to-main-94 a7
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet >
        <title>AI Translation Service - Zion Tech Group</>
        <meta name="description" content="Professional AI-powered translation services supporting 100+ languages with industry-specific models and real-time translation." />
        <meta name="keywords" content="AI translation, machine translation, document translation, multilingual, language services" />
      </>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div></>
          <ResponsiveContainer >
            <div className="relative z-10 text-center">
              <h1 >
                AI Translation Service
              </>
              <p >
                Break language barriers with our advanced AI-powered translation service supporting 100+ languages.
              </>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton className="bg-blue-600 hover:bg-blue-700">
                  Start Translating
                </>
                <FuturisticButton variant="outline">
                  View Demo
                </>
              </>
            </>
          </>
        </>
        {/* Features Section */}
        <section className="py-20">
          <ResponsiveContainer >
            <div className="text-center mb-16">
              <h2 className="text-4 xl font-bold text-white mb-4">Powerful Translation Features</>
              <p >
                Our AI translation service provides comprehensive language solutions for all your needs.
              </>
            </>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div >
                    {feature.icon}
                  </>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</>
                  <p>{feature.description}</>
                </>
              ))}
            </>
          </>
        </>
        {/* Translation Types Section */}
        <section className="py-20 bg-white/5">
          <ResponsiveContainer >
            <div className="text-center mb-16">
              <h2 className="text-4 xl font-bold text-white mb-4">Translation Capabilities</>
              <p >
                Comprehensive translation services for every type of content and industry.
              </>
            </>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {translationTypes.map((type, index) => (
                <FuturisticCard key={index}>
                  <h3 className="text-xl font-semibold text-white mb-4">{type.category}</>
                  <ul className="space-y-2">
                    {type.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </>
                    ))}
                  </>
                </>
              ))}
            </>
          </>
        </>
        {/* Benefits Section */}
        <section className="py-20">
          <ResponsiveContainer >
            <div className="text-center mb-16">
              <h2 className="text-4 xl font-bold text-white mb-4">Why Choose Our Translation Service?</>
              <p >
                Experience the benefits of AI-powered translation technology.
              </>
            </>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div >
                    {benefit.icon}
                  </>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</>
                  <p>{benefit.description}</>
                </>
              ))}
            </>
          </>
        </>
        {/* Pricing Section */}
        <section className="py-20 bg-white/5">
          <ResponsiveContainer >
            <div className="text-center mb-16">
              <h2 className="text-4 xl font-bold text-white mb-4">Pricing Plans</>
              <p >
                Choose the perfect plan for your translation needs.
              </>
            </>
            <div className="grid md:grid-cols-3 gap-8 max-w-6 xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard key={index} className={`${plan.popular ? 'ring-2 ring-blue-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </>
                    </>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2 xl font-bold text-white mb-2">{plan.name}</>
                    <div className="text-4 xl font-bold text-blue-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</>
                    </>
                    <p>{plan.description}</>
                  </>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </>
                    ))}
                  </>
                  <FuturisticButton className="w-full justify-center">
                    Get Started
                  </>
                </>
              ))}
            </>
          </>
        </>
        {/* CTA Section */}
        <section className="py-20">
          <ResponsiveContainer >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2 xl p-12 text-center">
              <h2 className="text-4 xl font-bold text-white mb-4">Ready to Break Language Barriers?</>
              <p >
                Start translating your content today with our advanced AI translation service.
              </>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton className="bg-white text-blue-600 hover:bg-gray-100">
                  Start Free Trial
                </>
                <FuturisticButton variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Contact Sales
                </>
              </>
            </>
          </>
        </>
ursor/fix-errors-and-merge-to-main-94 a7
      </>
    </>
  );
}
ursor/fix-errors-and-merge-to-main-94 a7
