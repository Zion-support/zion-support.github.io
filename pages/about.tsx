import React from "react"
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Brain,
  Users,
  Award,
  Target,
  Heart,
  Globe,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Building,
  Rocket,
  Lightbulb,
  Handshake
} from 'lucide-react'
import Layout from '../components/Layout'
const values = [{
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly push the boundaries of what\'s possible with technology, always seeking new and better ways to solve problems.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We conduct business with the highest ethical standards, building trust through transparency and honest communication.'
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, delivering solutions that exceed expectations and drive real results.'
  },
  {
    icon: Handshake,
    title: 'Client Success',
    description: 'Our success is measured by our clients\' success. We are committed to being true partners in their growth journey.'
  }]
const team = [{
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    image: '/team/sarah-chen.jpg',
    bio: 'Leading AI research and development with 15+ years of experience in machine learning and quantum computing.',
    expertise: ['AI/ML', 'Quantum Computing', 'Research']
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Cloud Architecture',
    image: '/team/michael-rodriguez.jpg',
    bio: 'Expert in scalable cloud solutions and infrastructure design with a focus on security and performance.',
    expertise: ['Cloud Architecture', 'DevOps', 'Security']
  },
  {
    name: 'Emily Johnson',
    role: 'Lead Developer',
    image: '/team/emily-johnson.jpg',
    bio: 'Full-stack developer specializing in modern web technologies and microservices architecture.',
    expertise: ['Full-Stack Development', 'Microservices', 'Web Technologies']
  },
  {
    name: 'David Kim',
    role: 'AI Solutions Architect',
    image: '/team/david-kim.jpg',
    bio: 'Designing intelligent systems that solve complex business problems using cutting-edge AI technologies.',
    expertise: ['AI Solutions', 'System Design', 'Business Intelligence']
  }]
const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Team Members' },
  { number: '10+', label: 'Years Experience' }]
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to provide cutting-edge technology solutions and our team of expert professionals." />
        <meta name="keywords" content="about us, team, mission, values, company history, technology experts" />
      </Head>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity:0, y:30 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We are a leading technology solutions provider dedicated to transforming businesses through innovative AI, cloud architecture, and cutting-edge development services.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:true }}>
            <h2
              Our Foundation></h2>
            <p
              Built on strong values and a clear vision for the future of technology.></p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center"
              initial={{ opacity: 0, y:30 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8, delay:0.1 }}
              viewport={{ once:true }}>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              <h3Our Mission></h3>
              <p
                To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation in the digital age.></p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center"
              initial={{ opacity:0, y:30 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8, delay:0.2 }}
              viewport={{ once:true }}>
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-purple-600" />
              <h3Our Vision></h3>
              <p
                To be the global leader in AI-powered technology solutions, setting the standard for innovation and excellence.></p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center"
              initial={{ opacity:0, y:30 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8, delay:0.3 }}
              viewport={{ once:true }}>
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-pink-600" />
              <h3Our Values></h3>
              <p
                Innovation, integrity, excellence, and client success are the core values that guide everything we do.></p>
            </motion.div>
      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:true }}>
            <h2
              Our Core Values></h2>
            <p
              The principles that guide our work and define our culture.></p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, y:30 }}
                  whileInView={{ opacity:1, y:0 }}
                  transition={{ duration:0.8, delay:index * 0.1 }}
                  viewport={{ once:true }}>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  <h3
                    {value.title}></h3>
                  <p
                    {value.description}></p>
                </motion.div>
              )
            })}>>
      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:true }}>
            <h2
              Meet Our Team></h2>
            <p
              Expert professionals dedicated to delivering exceptional technology solutions.></p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.8, delay:index * 0.1 }}
                viewport={{ once:true }}>
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span n[0]).join('')}>></span>
                <h3
                  {member.name}></h3>
                <p
                  {member.role}></p>
                <p
                  {member.expertise}></p>
                <p
                  {member.experience}></p>
              </motion.div>
            ))}>>
      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:true }}>
            <h2
              Our Achievements></h2>
            <p
              Recognition and results that speak to our commitment to excellence.></p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity:0, y:30 }}
                  whileInView={{ opacity:1, y:0 }}
                  transition={{ duration:0.8, delay:index * 0.1 }}
                  viewport={{ once:true }}>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  <div
                    {achievement.stat}></div>
                  <h3
                    {achievement.title}></h3>
                  <p
                    {achievement.description}></p>
                </motion.div>
              )
            })}>>
      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:true }}>
            <h2
              Our Journey></h2>
            <p
              Key milestones in our company&apos;s growth and evolution.></p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-6"
                  initial={{ opacity:0, "x": -30 }}
                  whileInView={{ opacity:1, "x": 0 }}
                  transition={{ duration:0.8, delay:index * 0.1 }}
                  viewport={{ once:true }}>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span{item.year}></span>
                  <div className="flex-1">
                    <h3
                      {item.title}></h3>
                    <p
                      {item.description}>></p>
                </motion.div>
              ))}>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:true }}>
            <h2
              Ready to Work With Us?></h2>
            <p
              Let&apos;s discuss how our team can help transform your business with cutting-edge technology solutions.></p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get in Touch>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                View Our Services>
          </motion.div>
  )
}