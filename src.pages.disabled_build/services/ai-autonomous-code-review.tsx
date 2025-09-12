import React from "react";
import { Code, Shield, Zap, Brain, Users, TrendingUp, CheckCircle, Star } from "lucide-react";
export default function AIAutonomousCodeReview() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      {/* comment */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
              <Code className="w-8 h-8 text-white"   />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Autonomous Code Review;
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionize your development workflow with AI-powered code analysis, security scanning, and automated quality assurance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a;
              href="https://ziontechgroup.com/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Get Started;
            </a>
            <a;
              href="#demo"
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300"
            >
              Watch Demo;
            </a>
          </div>
        </div>
      </section>
      {/* comment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Intelligent Code Analysis Features;
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:border-blue-500 transition-all duration-300">
              <div className="bg-blue-500/20 p-3 rounded-lg w-fit mb-4">
                <Brain className="w-6 h-6 text-blue-400"   />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Analysis</h3>
              <p className="text-gray-400">
                Advanced machine learning algorithms analyze code patterns, identify potential issues, and suggest optimizations.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:border-blue-500 transition-all duration-300">
              <div className="bg-green-500/20 p-3 rounded-lg w-fit mb-4">
                <Shield className="w-6 h-6 text-green-400"   />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Security Vulnerability Detection</h3>
              <p className="text-gray-400">
                Automatically scan for security flaws, SQL injection risks, and common vulnerability patterns.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:border-blue-500 transition-all duration-300">
              <div className="bg-purple-500/20 p-3 rounded-lg w-fit mb-4">
                <Zap className="w-6 h-6 text-purple-400"   />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Performance Optimization</h3>
              <p className="text-gray-400">
                Identify performance bottlenecks, memory leaks, and inefficient algorithms in your codebase.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:border-blue-500 transition-all duration-300">
              <div className="bg-yellow-500/20 p-3 rounded-lg w-fit mb-4">
                <CheckCircle className="w-6 h-6 text-yellow-400"   />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Code Quality Metrics</h3>
              <p className="text-gray-400">
                Comprehensive metrics including cyclomatic complexity, maintainability index, and code coverage analysis.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:border-blue-500 transition-all duration-300">
              <div className="bg-red-500/20 p-3 rounded-lg w-fit mb-4">
                <Users className="w-6 h-6 text-red-400"   />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Team Collaboration</h3>
              <p className="text-gray-400">
                Built-in code review workflows, commenting system, and approval processes for team collaboration.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:border-blue-500 transition-all duration-300">
              <div className="bg-indigo-500/20 p-3 rounded-lg w-fit mb-4">
                <TrendingUp className="w-6 h-6 text-indigo-400"   />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Continuous Integration</h3>
              <p className="text-gray-400">
                Seamless integration with CI/CD pipelines, GitHub, GitLab, and other development tools.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* comment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Transparent Pricing Plans;
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* comment */}
            <div className="bg-zinc-800/50 p-8 rounded-xl border border-zinc-700 hover:border-blue-500 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                <div className="text-4xl font-bold text-blue-400 mb-2">$49<span className="text-lg text-gray-400">/month</span></div>
                <p className="text-gray-400">Perfect for small teams and startups</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3"   />
                  Up to 5 developers
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3"   />
                  Basic code analysis
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3"   />
                  Security scanning
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3"   />
                  GitHub integration
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3"   />
                  Email support