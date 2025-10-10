import React from 'react;
'
import { Helmet } from 'react-helmet-async;
'
import {CheckCircle, Star, TrendingUp, Brain, Target, BarChart, Phone, Mail, MapPin} from 'lucide-react;

import React from react;

const AnalyticsToolsPage: React.FC = () => {;

const analyticsTools = [;;;

    {
      titl,'
    e: 'AI Business Intelligence,
      price: $399';
      descriptio,'
    n: 'Advanced business intelligence with AI-powered insights and predictive analytics.,'
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization', 'ROI tracking', 'Performance forecasting],'
      icon: '📊,
      category:     ,';
$4},'
      title: 'AI Web Analytics,
      price: $299';
      descriptio,'
    n: 'Comprehensive web analytics with AI-powered insights and user behavior analysis.,'
      features: ['User behavior tracking', 'Conversion analysis', 'Traffic insights', 'Performance metrics', 'Custom events', 'Real-time monitoring],'
      icon: '🌐,';
      category:       ,'
titletitle: 'AI Marketing Analytics,
      price: $249';
      descriptio,'
    n: 'Marketing performance analytics with AI-powered optimization recommendations.,'
      features: ['Campaign tracking', 'ROI analysis', 'Attribution modeling', 'Customer journey', 'Channel performance', 'Predictive insights],'
      icon: '📈,';
      category:       ,'
titletitle: 'AI Sales Analytics,
      price: $199';
      descriptio,'
    n: 'Sales performance analytics with AI-powered forecasting and optimization.,'
      features: ['Sales forecasting', 'Pipeline analysis', 'Performance tracking', 'Lead scoring', 'Conversion optimization', 'Revenue insights],'
      icon: '💰,';
      category:       ,'
titletitle: 'AI Customer Analytics,
      price: $179';
      descriptio,'
    n: 'Customer behavior analytics with AI-powered insights and personalization.,'
      features: ['Customer segmentation', 'Behavior analysis', 'Churn prediction', 'Lifetime value', 'Engagement tracking', 'Personalization insights],'
      icon: '👥,';
      category:       ,'
titletitle: 'AI Financial Analytics,
      price: $349';
      descriptio,'
    n: 'Financial performance analytics with AI-powered insights and risk assessment.,'
      features: ['Financial reporting', 'Risk analysis', 'Budget tracking', 'Cost optimization', 'Revenue analysis', 'Predictive modeling],'
      icon: '💳,
      category:     ,
$4}

  ];

  const benefits = [;;

      icon: TrendingUp,'
      title: 'Data-Driven Decisions,
      description:       ,';
icon$5: Target,'
      title: 'Predictive Insights,
      description:       ,';
icon$5: BarChart,'
      title: 'Real-Time Monitoring,
      description:       ,';
icon$5: Brain,'
      title: 'AI-Powered,'
      description: 'Leverage advanced AI algorithms for deeper insights and automation  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>

import { Link } from 'react-router-dom;
'
import Navigation from '../components/Navigation;
'
import Footer from '../components/Footer;

;

const PagePage: React.FC = () => {
  return (

          <div>Coming Soon</div>
  )
    ">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
      <Helmet>
        <title>Analytics Tools - Zion Tech Group</title>">
        <meta name="description" content="AI-powered analytics tools for business intelligence, web analytics, marketing analytics, and more. Starting at $179/month. />
        <meta name="keywords" content="analytics tools, business intelligence, web analytics, marketing analytics, sales analytics, ai analytics />
      </Helmet>
);

}

      {/* Hero Section */}

      <section className="pt-24 pb-16 px-4">        <div className="max-w-7xl mx-auto text-center>
          <h1 className=text-4xl sm: text-5xl m,
    d:text-6xl font-bold text-white mb-6>
            AI Analytics Tools
          <">
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto>
            Transform your data into actionable insights with AI-powered analytics tools for business intelligence, marketing, and performance tracking.

      {/* Hero Section *">
      <section className="pt-24 pb-16 px-4><">
        <div className="max-w-7xl mx-auto text-center><
          <h1 className=text-4xl,
  sm:text-5xl,
  md: text-6xl font-bold text-white mb-6><
/

          <">
          <p className="text-xl text-cyan-400 mb-8 font-medium>
            Coming Soon
          <
          {/* Stats *">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12>
            <div className=bg-white">
              <div className="text-3xl font-bold text-cyan-400 mb-2>6<">
              <div className="text-gray-300>Analytics Tools<
            <">
              <div className="text-3xl font-bold text-green-400 mb-2>$179<">
              <div className="text-gray-300>Starting Price<">
              <div className="text-3xl font-bold text-purple-400 mb-2>95%<">
              <div className="text-gray-300>Accuracy<">
              <div className="text-3xl font-bold text-orange-400 mb-2>Real-time<">
              <div className="text-gray-300>Monitoring<
          {/* Contact Info *">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12>
            <div className=flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 m,
    d:space-x-8>">
              <div className="flex items-center space-x-2>">
                <Phone className="w-5 h-5 ">
                <span className="text-white font-medium>+1 302 464 0950<">
                <Mail className="w-5 h-5 ">
                <span className="text-white font-medium>kleber@ziontechgroup.com<">
                <MapPin className="w-5 h-5 ">
                <span className="text-white font-medium>Middletown, DE<
      <
      {/* Analytics Tools Grid *">
      <section className="py-16 px-4>">
        <div className="max-w-7xl mx-auto>">
          <h2 className="text-3xl md: 'text-4xl font-bold text-white text-center mb-12 neon-text>
            Our Analytics Tools
          <',
          <div className=grid grid-cols-1 md:grid-cols-2 l,
    g: 'grid-cols-3 gap-8>',
            {analyticsTools.map((tool), index) => (<div key={index} className=bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white">
                <div className="text-center mb-6>">
                  <div className="text-5xl mb-4>{tool.icon}<">
                  <h3 className="text-xl font-bold text-white mb-2>{tool.title}<">
                  <p className="text-gray-300 text-sm mb-4>{tool.description}<">
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block mb-4>
                    {tool.category}
">
                <div className="mb-6>">
                  <h4 className="font-semibold text-white mb-3>Features: <">
                  <ul className="space-y-2>)">
                    {tool.features.map((feature), featureIndex) => (<li key={featureIndex} className="flex items-center text-sm text-gray-300>
                        ">
                  <div className="text-2xl font-bold text-cyan-400 mb-4>{tool.price}<
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${tool.title}}
">
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover: from-cyan-600 hover:to-blue-700 transition-all inline-block
                  >
                    Get Started
                  <
      {/* Benefits Section *
            Why Choose Our Analytics Tools?
          <div className=grid grid-cols-1 md:grid-cols-2 l,
    g: 'grid-cols-4 gap-8>',
            {benefits.map((benefit), index) => (<div key={index} className=bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4 ">
                <h3 className="text-xl font-bold text-white mb-3>{benefit.title}<">
                <p className="text-gray-300 text-sm>{benefit.description}<
">
              <div className="text-gray-300>Analytics Tools<
            <">
              <div className="text-3xl font-bold text-green-400 mb-2>$179<">
              <div className="text-gray-300>Starting Price<">
              <div className="text-3xl font-bold text-purple-400 mb-2>95%<">
              <div className="text-gray-300>Accuracy<">
              <div className="text-3xl font-bold text-orange-400 mb-2>Real-time<">
              <div className="text-gray-300>Monitoring<
          {/* Contact Info *">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12><
            <div className=flex flex-col,
  md:flex-row items-center justify-center space-y-4,
  md:space-y-0,
  md:space-x-8><">
              <div className="flex items-center space-x-2><">
                <Phone className="w-5 h-5 /><">
                <span className="text-white font-medium>+1 302 464 0950<">
                <Mail className="w-5 h-5 /><">
                <span className="text-white font-medium>kleber@ziontechgroup.com<">
                <MapPin className="w-5 h-5 /><">
                <span className="text-white font-medium>Middletown, DE<
      <
      {/* Analytics Tools Grid *">
      <section className="py-16 px-4><">
        <div className="max-w-7xl mx-auto><">
          <h2 className="text-3xl,
  md: 'text-4xl font-bold text-white text-center mb-12 neon-text><
/
          <',
          <div className=grid grid-cols-1,
  md:grid-cols-2,
  lg: 'grid-cols-3 gap-8><)',
            {analyticsTools.map((tool), index) => ()}

          <div key={index} className=bg-white
  hover:bg-white/20 transition-all duration-300><">
                <div className="text-center mb-6><">
                  <div className="text-5xl mb-4>{tool.icon}<">
                  <h3 className="text-xl font-bold text-white mb-2>{tool.title}<">
                  <p className="text-gray-300 text-sm mb-4>{tool.description}<">
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block mb-4><
                    {tool.category}
">
                <div className="mb-6><">
                  <h4 className="font-semibold text-white mb-3>Feature,
  s: <">
                  <ul className="space-y-2><
                    {tool.features.map((feature), featureIndex) => ()}
">
          <li key={featureIndex} className="flex items-center text-sm text-gray-300><">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 /><
                        {feature}

                      <
                    ))}

                  <">
                <div className="text-center><">
                  <div className="text-2xl font-bold text-cyan-400 mb-4>{tool.price}<
                  <a><
                    href={/* TODO: 'Fix JSX expression *',
  ,
    o:kleber@ziontechgroup.com?subject=Interest in ${tool.title}`}

                    className=w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium,
  hover:from-cyan-600,
  hover:to-blue-700 transition-all inline-block
/
/
          <
      {/* Benefits Section *
Why Choose Our Analytics Tools?
          <div className=grid grid-cols-1,
  md:grid-cols-2,
  lg: 'grid-cols-4 gap-8><',
            {benefits.map((benefit), index) => ()}

          <div key={index} className=bg-white
  hover:bg-white/20 transition-all duration-300><">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4 /><">
                <h3 className="text-xl font-bold text-white mb-3>{benefit.title}<">
                <p className="text-gray-300 text-sm>{benefit.description}<

      {/* CTA Section *">
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600>">
        <div className="max-w-4xl mx-auto text-center>">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-6>
            Ready to Unlock Your Data?">
          <p className="text-xl text-purple-100 mb-8>
            Get started with our AI analytics tools today and transform your data into actionable insights.">
          <div className="flex flex-col sm:flex-row gap-4 justify-center>">
              href="tel:+13024640950
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors
              Call (302) 464-0950">
              href="mailto:kleber@ziontechgroup.com
              className=bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hove,
    r: 'text-purple-600 transition-colors
              Email Us',
  )};

Ready to Unlock Your Data?
          <p className="text-xl text-purple-100 mb-8>
            Get started with our AI analytics tools today and transform your data into actionable insights.">
          <div className="flex flex-col sm: flex-row gap-4 justify-center>">
              href="tel:+13024640950" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors
Call (302) 464-0950;
">
              href="mailto:kleber@ziontechgroup.com" className=bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hove,
    r: 'text-purple-600 transition-colors

              Email Us;
',
  )};

export default AnalyticsToolsPage;
