<<<<<<< HEAD
'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import {BookOpen, Users, BarChart, Zap, Shield, CheckCircle}}from 'lucide-react';
const OnlineLearningPlatformPage: React.FC = () => {,
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BookOpen, Users, BarChart, Zap, Shield, CheckCircle } from 'lucide-react'
const OnlineLearningPlatformPage: React.FC = () => {
>>>>>>> origin/main
  const features = [
<<<<<<< HEAD
    { icon: BookOpen, title: 'Course Management', description: 'Create, organize, and manage educational content with AI-powered course recommendations.'},
    {icon: Users, title: 'Student Analytics', description: 'Track student progress and engagement with detailed analytics and insights.' ,},
    {icon: BarChart, title: 'Performance Tracking', description: 'Monitor learning outcomes and identify areas for improvement.' ,},
    {icon: Zap, title: 'AI Tutoring', description: 'Personalized AI tutoring and adaptive learning experiences.' ,},
    {icon: Shield, title: 'Secure Platform', description: 'Secure, scalable platform with role-based access and data protection.'},
    {icon: CheckCircle, title: 'Certification', description: 'Automated certification and credential management system.' ,}]
  return(<React.Fragment>)</React.Fragment>
      <Helmet />
=======
    { icon: BookOpen, title: 'Course Management', description: 'Create, organize, and manage educational content with AI-powered course recommendations.' },
    { icon: Users, title: 'Student Analytics', description: 'Track student progress and engagement with detailed analytics and insights.' },
    { icon: BarChart, title: 'Performance Tracking', description: 'Monitor learning outcomes and identify areas for improvement.' },
    { icon: Zap, title: 'AI Tutoring', description: 'Personalized AI tutoring and adaptive learning experiences.' },
    { icon: Shield, title: 'Secure Platform', description: 'Secure, scalable platform with role-based access and data protection.' },
    { icon: CheckCircle, title: 'Certification', description: 'Automated certification and credential management system.' }
  ]
  return (
<<<<<<< HEAD
    <>
      <Helmet>
>>>>>>> origin/main
        <title>Online Learning Platform | Zion Tech Group - AI-Powered Education Platform</title>
=======
    <React.Fragment>
      </React><Helmet>
        </Helmet><title>Online Learning Platform | Zion Tech Group - AI-Powered Education Platform</title>
>>>>>>> origin/main
        <meta name="description" content="Create engaging online learning experiences with AI-powered education platform. Course management, student analytics, and personalized learning." />
        <meta name="keywords" content="online learning platform, e-learning, education technology, course management, student analytics, AI tutoring" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">Online Learning Platform</h1>,
=======
        </div><section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Online Learning Platform</h1>
>>>>>>> origin/main
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Create engaging online learning experiences with AI-powered education platform.</p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,</div>
              {features.map((feature, index) => (
<<<<<<< HEAD
                <div key={index}className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover: border-cyan-400/50 transition-all duration-300">,</div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
=======
                </div><div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  </div><div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    </div><feature.icon className="w-8 h-8 text-white" />
>>>>>>> origin/main
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description</p>}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default OnlineLearningPlatformPage
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Online Learning Platform
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Create engaging online learning experiences with AI-powered education platform.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}
                  <p className="text-gray-300">{feature.description}
              ))}
  )
}
export default OnlineLearningPlatformPage</div></div></div></div></div></div></p></p></h1></h3></section>
