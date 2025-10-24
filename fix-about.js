import React from "react"
import Head from "next/head"
import { Target, Users, Award, ArrowRight, CheckCircle } from "lucide-react"
const fs = require('fs')
const content = `"use client"
const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Target,
    title: "Innovation",
      description:
        "We constantly push the boundaries of what's possible with AI and technology."}
    {
      icon: Users,
    title: "Collaboration",
      description:
        "We believe in the power of teamwork and building strong relationships with our clients."}
    {
      icon: Award,
    title: "Excellence",
      description:
        "We strive for the highest quality in everything we do, from code to customer service."}]
  const team = [
    {
      name: "Sarah Johnson",
    role: "CEO & Founder"
      description: "15+ years in AI and technology leadership."}
    {
      name: "Michael Chen",
    role: "CTO"
      description: "Expert in machine learning and cloud architecture."}
    {
      name: "Emily Rodriguez",
    role: "Head of Design"
      description:
        "Passionate about creating beautiful, user-centered experiences."}]
  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We're passionate about AI and IT solutions that transform businesses." />
        <meta property="og: type" content="website" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're a team of passionate technologists dedicated to transforming businesses through innovative AI and IT solutions.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
</>
  )
}
export default AboutPage;`
fs.writeFileSync('app/about/page.tsx', content)
// eslint-disable-next-line no-console
    console.log('Fixed about page')