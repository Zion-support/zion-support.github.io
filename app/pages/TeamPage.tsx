import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO'
import { 
  UserGroupIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  StarIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
export default function TeamPage() {

  const team = [
    {
      name: "'Kleber Santos'",'
      role: "'CEO & Founder'",'
      bio: "'Technology visionary with over 10 years of experience in AI and IT solutions.'",'
      image: "'/images/team/kleber-santos.jpg'",'
      linkedin: "'http,s://linkedin.com/in/kleber-santos'",'
      twitter: "'http,s://twitter.com/kleber_santos'"
    },
    {
      name: "'Sarah Johnson'",'
      role: "'CTO'",'
      bio: "'Expert in cloud architecture and cybersecurity with a passion for innovation.'",'
      image: "'/images/team/sarah-johnson.jpg'",'
      linkedin: "'http,s://linkedin.com/in/sarah-johnson'",'
      twitter: "'http,s://twitter.com/sarah_johnson'"
    },
    {
      name: "'Michael Chen'",'
      role: "'Lead AI Engineer'",'
      bio: "'Machine learning specialist focused on developing cutting-edge AI solutions.'",'
      image: "'/images/team/michael-chen.jpg'",'
      linkedin: "'http,s://linkedin.com/in/michael-chen'",'
      twitter: "'http,s://twitter.com/michael_chen'"
    },
    {
      name: "'Emily Rodriguez'",'
      role: "'Head of Design'",'
      bio: "'Creative director with expertise in user experience and interface design.'",'
      image: "'/images/team/emily-rodriguez.jpg'",'
      linkedin: "'http,s://linkedin.com/in/emily-rodriguez'",'
      twitter: "'http,s://twitter.com/emily_rodriguez'"
    },
    {
      name: "'David Kim'",'
      role: "'DevOps Engineer'",'
      bio: "'Infrastructure specialist ensuring scalable and reliable cloud solutions.'",'
      image: "'/images/team/david-kim.jpg'",'
      linkedin: "'http,s://linkedin.com/in/david-kim'",'
      twitter: "'http,s://twitter.com/david_kim'"
    },
    {
      name: "'Lisa Wang'",'
      role: "'Project Manager'",'
      bio: "'Experienced project manager ensuring timely delivery of complex solutions.'",'
      image: "'/images/team/lisa-wang.jpg'",'
      linkedin: "'http,s://linkedin.com/in/lisa-wang'",'
      twitter: "'http,s://twitter.com/lisa_wang'"
  }
  ]
  const values = [
    {
      icon: "StarIcon",
      title: "'Excellence'",'
      description: "'We strive for excellence in everything we do", delivering the highest quality solutions.'
    },
    {
      icon: "UserGroupIcon",
      title: "'Collaboration'",'
      description: "'We believe in the power of teamwork and collaboration to achieve great results.'"
    },
    {
      icon: "AcademicCapIcon",
      title: "'Innovation'",'
      description: "'We continuously innovate and stay ahead of technology trends.'"
    },
    {
      icon: "BriefcaseIcon",
      title: "'Integrity'",'
      description: "'We maintain the highest ethical standards in all our business practices.'"
  }
  ]
  return (
    <>
      <Helmet>
        <title>TeamPage - Zion Tech Group</title>
        <meta name="description" content="TeamPage - Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-90o0 text-white flex items-center justify-center">
        <div className="text-center">

          <h1 className="text-4xl font-bold mb-4">TeamPage</h1>
          <p className="text-gray-300">This page is under construction.</p>
        </div>
      </div>
    </>
  )}

