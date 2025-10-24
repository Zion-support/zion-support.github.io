import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { Users } from 'lucide-react';
import { Award } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { Hand } from 'lucide-react';
import { Cloud } from 'lucide-react';

export default function Community() {

  const stats = [
    { number: "10K+", label: "Active Members", icon: <Users className="w-8 h-8" /> },
    { number: "500+", label: "Events Hosted", icon: <Calendar className="w-8 h-8" /> },
    { number: "50+", label: "Countries", icon: <Globe className="w-8 h-8" /> },
    { number: "24/7", label: "Support", icon: <MessageCircle className="w-8 h-8" /> }
  ];

  const events = [
    {
      title: "AI Innovation Summit 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Virtual Event",
      description: "Join industry leaders as we explore the latest trends in artificial intelligence and machine learning.",
      attendees: 500
    },
    {
      title: "Tech Talk: Cloud Security Best Practices",
      date: "March 22, 2024",
      time: "2:00 PM - 3:00 PM",
      location: "Online Webinar",
      description: "Learn about the latest cloud security strategies and how to protect your digital assets.",
      attendees: 150
    },
    {
      title: "Developer Workshop: React & TypeScript",
      date: "March 29, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Zion Tech Office",
      description: "Hands-on workshop covering advanced React patterns and TypeScript best practices.",
      attendees: 25
  ];

  const initiatives = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Tech Mentorship Program",
      description: "Connect with experienced professionals and get guidance on your career journey.",
      participants: "200+ mentees"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Developer Forums",
      description: "Join our active community forums to discuss technology trends and share knowledge.",
      participants: "1,500+ members"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Innovation Challenges",
      description: "Participate in hackathons and coding challenges to showcase your skills.",
      participants: "500+ participants"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Open Source Projects",
      description: "Contribute to our open source initiatives and make a global impact.",
      participants: "100+ contributors"
  ];
export default function CommunityPage() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Community - Zion Tech Group</title>
        <meta name="description" content="Community solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Community</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive community solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}