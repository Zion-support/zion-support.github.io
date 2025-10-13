import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function webinars() {
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Play } from 'lucide-react';
import { Cloud } from 'lucide-react';

const WebinarsPage = () => {
  const upcomingWebinars = [
    {
      title: "AI-Powered Business Transformation",
      date: "2024-01-15",
      time: "2:00 PM EST",
      duration: "60 minutes",
      speaker: "Dr. Sarah Johnson",
      description: "Learn how AI can transform your business operations and drive growth",
      icon: <Brain className="w-6 h-6" />
    },
      title: "Cybersecurity Best Practices 2024",
      date: "2024-01-22",
      time: "3:00 PM EST",
      duration: "45 minutes",
      speaker: "Michael Chen",
      description: "Essential cybersecurity strategies to protect your business",
      icon: <Shield className="w-6 h-6" />
      title: "Cloud Migration Strategies",
      date: "2024-01-29",
      time: "1:00 PM EST",
      duration: "90 minutes",
      speaker: "Emily Rodriguez",
      description: "Step-by-step guide to successful cloud migration",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const pastWebinars = [
      title: "Introduction to AI Analytics",
      date: "2023-12-15",
      views: "2,500+",
      icon: <Play className="w-6 h-6" />
      title: "5G Technology Overview",
      date: "2023-12-08",
      views: "1,800+",
      title: "Micro SAAS Solutions",
      date: "2023-12-01",
      duration: "50 minutes",
      views: "3,200+",

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>Webinars - Zion Tech Group</title>
        <meta name="description" content="Join our expert-led webinars on AI, cybersecurity, cloud technology, and digital transformation. Learn from industry leaders and stay ahead of technology trends." />
        <meta name="keywords" content="webinars, online training, technology education, AI webinars, cybersecurity training, cloud webinars" />
        <link rel="canonical" href="https://ziontechgroup.com/webinars" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Webinars</h1>
          <p className="text-xl text-gray-300 mb-8">
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <meta name="description" content="Advanced webinars solutions by Zion Tech Group" />

      <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Webinars
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.

    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Webinars</h1>
            Advanced AI and IT solutions for your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        </section>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Expert-Led Learning</span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            </span>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Learn from industry experts in our comprehensive webinar series.
            Stay ahead of technology trends with insights from leading professionals.

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Register for Webinars
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              Watch Past Webinars
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
              Advanced technology integration and optimization.

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
              Scalable and secure implementation.

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>

      {/* Upcoming Webinars Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Upcoming Webinars
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join our upcoming expert-led webinars and learn from industry leaders

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingWebinars.map((webinar, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {webinar.icon}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {webinar.title}
                    </h3>
                    <p className="text-cyan-400 text-sm">{webinar.speaker}</p>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {webinar.description}
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{webinar.date}</span>
                  <span>{webinar.time}</span>
                <div className="mt-4">
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                    Register Now
            ))}

      {/* Past Webinars Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Past Webinars
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Catch up on our previous webinars and learn from industry experts

            {pastWebinars.map((webinar, index) => (
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    <p className="text-gray-400 text-sm">{webinar.date}</p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>{webinar.duration}</span>
                  <span>{webinar.views} views</span>
                <button className="w-full border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Watch Now

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">



        <div className="max-w-4xl mx-auto text-center">
            Stay Updated with Our Webinars
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Get notified about upcoming webinars and never miss an opportunity to learn
            from industry experts and technology leaders.

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              Subscribe to Updates
              Request a Topic
  );
};

export default WebinarsPage;



export default $1;
