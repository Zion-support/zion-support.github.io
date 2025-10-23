"use client"
import React from "react"
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Brain, Target, Users, Award, CheckCircle, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with technology, always seeking new ways to solve complex problems.",
      icon: Brain
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service and project delivery.",
      icon: Award
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and work closely with our clients to understand their unique challenges and goals.",
      icon: Users
    },
    {
      title: "Impact",
      description: "We focus on delivering solutions that create real, measurable value for our clients and their businesses.",
      icon: Target
    }
  ]

  const stats = [
    { label: "Years of Experience", value: "10+" },
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "200+" },
    { label: "Team Members", value: "25+" }
  ]

  const timeline = [
    {
      year: "2014",
      title: "Company Founded",
      description: "Started as a small team with a vision to democratize AI and technology solutions."
    },
    {
      year: "2017",
      title: "First Major AI Project",
      description: "Successfully delivered our first enterprise AI solution, marking our entry into the AI space."
    },
    {
      year: "2020",
      title: "Cloud Migration Focus",
      description: "Expanded our services to include comprehensive cloud infrastructure and migration solutions."
    },
    {
      year: "2023",
      title: "SaaS Platform Launch",
      description: "Launched our first proprietary SaaS platform, serving thousands of users worldwide."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">About Us</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We are a team of passionate technologists dedicated to transforming businesses 
            through innovative AI and IT solutions. Our mission is to make advanced 
            technology accessible and impactful for organizations of all sizes.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To democratize access to cutting-edge AI and technology solutions, 
                enabling businesses of all sizes to compete and thrive in the digital age. 
                We believe that advanced technology should be accessible, understandable, 
                and beneficial to everyone.
              </p>
              <p className="text-lg text-gray-600">
                Our team combines deep technical expertise with a passion for solving 
                real-world problems. We work closely with our clients to understand 
                their unique challenges and develop customized solutions that drive 
                measurable results.
              </p>
            </div>
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg">
                To be the leading provider of AI and IT solutions that transform 
                how businesses operate, compete, and grow in an increasingly 
                digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our company&apos;s growth and evolution.
            </p>
          </div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{item.year}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s discuss how we can help transform your business with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              View Our Team
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}