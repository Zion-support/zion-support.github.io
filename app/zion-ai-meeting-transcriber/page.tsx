import React from "react";
=======
import React from "react";
import { ArrowRight, CheckCircle, Mic, Video, Calendar } from 'lucide-react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEOOptimizer from "../components/SEOOptimizer";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Search } from 'lucide-react';
import { Star } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { Mic } from 'lucide-react';

export default function ZionAIMeetingTranscriber() {
  const features = [
    "Real-time meeting transcription with 99.5% accuracy",
    "Multi-language support (100+ languages)",
    "Speaker identification and diarization",
    "Automatic action item extraction",
    "Meeting summary generation",
    "Integration with Zoom, Teams, Google Meet",
    "Custom vocabulary and industry terms",
    "Timestamp and chapter markers",
    "Searchable transcript database",
    "Export to multiple formats (PDF, Word, SRT)",
    "AI-powered insights and analytics",
    "Secure cloud storage and backup"
  ];

  const benefits = [
    "Save 2+ hours per meeting on note-taking",
    "Never miss important details again",
    "Improve meeting productivity by 60%",
    "Create searchable knowledge base",
    "Generate actionable follow-ups automatically",
    "Ensure compliance with meeting records"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$19",
      period: "month",
      description: "Perfect for small teams",
      features: ["Up to 10 hours/month", "Basic transcription", "Email support", "1 user", "Standard accuracy"],
      popular: false
    },
    {
      name: "Professional",
      price: "$49",
      period: "month",
      description: "Ideal for growing businesses",
      features: ["Up to 50 hours/month", "Advanced AI features", "Priority support", "5 users", "Speaker identification", "Action items"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "month",
      description: "For large organizations",
      features: ["Unlimited hours", "Custom integrations", "Dedicated support", "Unlimited users", "Advanced analytics", "White-labeling"],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion AI Meeting Transcriber has revolutionized our team meetings. We never miss important details and our productivity has increased dramatically.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      company: "Consulting Firm",
      role: "Partner",
      content: "The speaker identification feature is incredible. It's like having a professional secretary in every meeting.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      company: "Marketing Agency",
      role: "Director",
      content: "The automatic action item extraction saves us hours of follow-up work. Highly recommended!",
      rating: 5
    }
  ];

export default function ZionAiMeetingTranscriberPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Ai Meeting Transcriber - Zion Tech Group</title>
        <meta name="description" content="Zion Ai Meeting Transcriber solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Zion Ai Meeting Transcriber</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive zion ai meeting transcriber solutions designed to meet your business needs.
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

}