import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar
  Clock
  Users
  CheckCircle
  ArrowRight
  Phone
  Mail
  MapPin
  Video
  MessageSquare
  Building
} from "lucide-react";
const timeSlots = [
  { time: "9:00 AM", available: true, type: "Video Call" }
  { time: "9:30 AM", available: true, type: "Phone Call" }
  { time: "10:00 AM", available: false, type: "Video Call" }
  { time: "10:30 AM", available: true, type: "In-Person" }
  { time: "11:00 AM", available: true, type: "Video Call" }
  { time: "11:30 AM", available: true, type: "Phone Call" }
  { time: "1:00 PM", available: true, type: "Video Call" }
  { time: "1:30 PM", available: false, type: "In-Person" }
  { time: "2:00 PM", available: true, type: "Video Call" }
  { time: "2:30 PM", available: true, type: "Phone Call" }
  { time: "3:00 PM", available: true, type: "In-Person" }
  { time: "3:30 PM", available: true, type: "Video Call" }
  { time: "4:00 PM", available: false, type: "Phone Call" }
  { time: "4:30 PM", available: true, type: "Video Call" }
  { time: "5:00 PM", available: true, type: "Phone Call" }
];
const consultationTypes = [
  {
    title: "Free Discovery Call"
    duration: "30 minutes"
    description:
      "Discuss your project requirements and explore how we can help"
    price: "Free"
    icon: MessageSquare
    features: [
      "Project assessment"
      "Solution recommendations"
      "Timeline discussion"
      "Budget estimation"
    ]
  }
  {
    title: "Technical Consultation"
    duration: "60 minutes"
    description:
      "Deep dive into technical requirements and architecture planning"
    price: "$200"
    icon: Building
    features: [
      "Technical architecture review"
      "Technology stack recommendations"
      "Implementation planning"
      "Risk assessment"
    ]
  }
  {
    title: "Strategy Session"
    duration: "90 minutes"
    description:
      "Comprehensive business strategy and digital transformation planning"
    price: "$500"
    icon: Users
    features: [
      "Business analysis"
      "Digital strategy planning"
      "ROI projections"
      "Implementation roadmap"
    ]
  }
];
const teamMembers = [
  {
    name: "Sarah Johnson"
    role: "CEO & Founder"
    expertise: "Strategic Planning, AI Strategy"
    image: "/images/team/sarah-johnson.jpg"
    available: true
  }
  {
    name: "Michael Chen"
    role: "CTO"
    expertise: "Cloud Architecture, Quantum Computing"
    image: "/images/team/michael-chen.jpg"
    available: true
  }
  {
    name: "Dr. Emily Rodriguez"
    role: "Head of AI Research"
    expertise: "Machine Learning, AI Research"
    image: "/images/team/emily-rodriguez.jpg"
    available: false
  }
  {
    name: "David Kim"
    role: "Head of Cybersecurity"
    expertise: "Cybersecurity, Risk Management"
    image: "/images/team/david-kim.jpg"
    available: true
  }
];
export default function CalendarPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Calendar
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional Calendar services to help your business grow and succeed.
        </p>
      </div>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Coming Soon
        </h2>
        <p className="text-lg text-gray-600 text-center">
          This service is currently under development. Please contact us for more information.
        </p>
      </div>
      <div className="text-center">
        <a
          href="mailto:kleber@ziontechgroup.com?subject=Calendar Inquiry"
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
