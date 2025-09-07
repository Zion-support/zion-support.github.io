import React from 'react';
import Layout from '../components/layout/MainLayout';
import {
  Calendar,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Video,
  MessageSquare
} from 'lucide-react';

export default function CalendarPage() {
  const meetingTypes = [
    {
      title: "Initial Consultation",
      duration: "30 minutes",
      description: "Discuss your project requirements and goals"
    },
    {
      title: "Technical Consultation",
      duration: "60 minutes",
      description: "Deep dive into technical specifications and solutions"
    },
    {
      title: "Project Review",
      duration: "45 minutes",
      description: "Review project progress and next steps"
    }
  ];

  return (
    <Layout
      title="Schedule a Meeting - Zion Tech Group"
      description="Schedule a consultation with our team to discuss your project needs."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Schedule a Meeting</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule a consultation with our team to discuss your project needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {meetingTypes.map((meeting, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">{meeting.title}</h3>
                </div>
                <div className="flex items-center mb-2">
                  <Clock className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">{meeting.duration}</span>
                </div>
                <p className="text-gray-600 mb-4">{meeting.description}</p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Schedule Meeting
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}