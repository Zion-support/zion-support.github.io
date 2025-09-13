import React from 'react';
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, Play, Download, Share2, Star } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Future Predictions 2025 Webinar | Zion Tech Group',
  description: 'Join our exclusive webinar on AI future predictions for 2025. Expert insights on emerging trends, technologies, and business opportunities.',
  keywords: 'AI webinar, AI predictions 2025, AI future trends, AI expert insights, AI business opportunities',
  openGraph: {
    title: 'AI Future Predictions 2025 Webinar',
    description: 'Expert insights on AI trends and future predictions',
    type: 'website',
  },
};

const webinarDetails = {
  title: 'AI Future Predictions 2025: What to Expect',
  description: 'Join leading AI experts as they share their predictions for AI developments in 2025, including emerging technologies, market trends, and business opportunities.',
  date: 'January 25, 2025',
  time: '2:00 PM - 3:30 PM EST',
  duration: '90 minutes',
  speakers: [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief AI Scientist, TechCorp',
      expertise: 'Machine Learning & Neural Networks',
      image: '/api/placeholder/100/100'
    },
    {
      name: 'Michael Rodriguez',
      title: 'VP of AI Strategy, InnovateLabs',
      expertise: 'AI Business Applications',
      image: '/api/placeholder/100/100'
    },
    {
      name: 'Dr. Emily Watson',
      title: 'Research Director, AI Future Institute',
      expertise: 'Quantum AI & Advanced Computing',
      image: '/api/placeholder/100/100'
    }
  ],
  agenda: [
    { time: '2:00 PM', topic: 'Welcome & Introduction', duration: '10 min' },
    { time: '2:10 PM', topic: 'AI Technology Trends 2025', duration: '25 min' },
    { time: '2:35 PM', topic: 'Business Impact & Opportunities', duration: '25 min' },
    { time: '3:00 PM', topic: 'Q&A Session', duration: '20 min' },
    { time: '3:20 PM', topic: 'Closing Remarks', duration: '10 min' }
  ],
  keyTopics: [
    'Generative AI Evolution',
    'Quantum Computing Integration',
    'Edge AI Advancements',
    'AI Ethics & Governance',
    'Enterprise AI Adoption',
    'AI-Powered Automation',
    'Neural Interface Technologies',
    'AI in Healthcare & Finance'
  ],
  benefits: [
    'Exclusive insights from industry leaders',
    'Early access to 2025 AI predictions',
    'Networking opportunities with peers',
    'Q&A with AI experts',
    'Downloadable resources and materials',
    'Recording access for 30 days'
  ]
};

const relatedWebinars = [
  {
    title: 'AI Implementation Best Practices',
    date: 'February 1, 2025',
    duration: '60 min',
    speakers: 2,
    attendees: 1250,
    rating: 4.8
  },
  {
    title: 'Quantum AI Revolution 2025',
    date: 'February 15, 2025',
    duration: '75 min',
    speakers: 3,
    attendees: 2100,
    rating: 4.9
  },
  {
    title: 'AI Ethics & Responsible Innovation',
    date: 'March 1, 2025',
    duration: '60 min',
    speakers: 2,
    attendees: 1800,
    rating: 4.7
  }
];

export default function AIWebinarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white">
              🎥 Live Webinar
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              AI Future Predictions 2025
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join leading AI experts for an exclusive deep dive into the future of artificial intelligence. 
              Discover emerging trends, technologies, and business opportunities that will shape 2025.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-5 h-5" />
                <span>{webinarDetails.date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-5 h-5" />
                <span>{webinarDetails.time}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-5 h-5" />
                <span>{webinarDetails.duration}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700">
                <Play className="w-5 h-5 mr-2" />
                Register for Free
              </Button>
              <Button size="lg" variant="outline">
                <Download className="w-5 h-5 mr-2" />
                Download Agenda
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Speakers
            </h2>
            <p className="text-lg text-gray-600">
              Industry leaders sharing their insights and predictions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {webinarDetails.speakers.map((speaker, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
                  <p className="text-gray-600 mb-2">{speaker.title}</p>
                  <Badge variant="outline" className="bg-indigo-50 text-indigo-700">
                    {speaker.expertise}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Webinar Agenda
            </h2>
            <p className="text-lg text-gray-600">
              What you'll learn during this 90-minute session
            </p>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="space-y-4">
                {webinarDetails.agenda.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg border">
                    <div className="flex-shrink-0 w-16 text-sm font-semibold text-indigo-600">
                      {item.time}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{item.topic}</h4>
                    </div>
                    <div className="flex-shrink-0 text-sm text-gray-500">
                      {item.duration}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Topics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Topics Covered
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive coverage of AI trends and predictions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {webinarDetails.keyTopics.map((topic, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{topic}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You'll Get
            </h2>
            <p className="text-lg text-gray-600">
              Exclusive benefits for webinar attendees
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {webinarDetails.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Webinars */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Related Webinars
            </h2>
            <p className="text-lg text-gray-600">
              Don't miss our other AI-focused webinars
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedWebinars.map((webinar, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="bg-indigo-50 text-indigo-700">
                      {webinar.date}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{webinar.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{webinar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {webinar.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {webinar.attendees}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Reserve Your Spot Today
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Limited seats available. Join industry leaders for this exclusive AI predictions webinar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Register Now - Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
              <Share2 className="w-5 h-5 mr-2" />
              Share with Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}