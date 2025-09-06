import React from "react";
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import {
  Users, 
  MapPin, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Heart,
  Zap,
  Globe,
  Award,
  Coffee,
  Laptop,
  BookOpen,
  Target
} from 'lucide-react';

const benefits = [
  {
    title: "Competitive Compensation",
    description: "Above-market salaries and performance bonuses",
    icon: Award
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance",
    icon: Heart
  },
  {
    title: "Flexible Work",
    description: "Remote work options and flexible schedules",
    icon: Laptop
  },
  {
    title: "Learning & Development",
    description: "Professional development budget and training opportunities",
    icon: BookOpen
  },
  {
    title: "Innovation Time",
    description: "Dedicated time for personal projects and innovation",
    icon: Zap
  }
];

export default function CareersPage() {
  return (
    <MainLayout
      title="Careers - Zion Tech Group"
      description="Join our team and help build the future of technology. Explore career opportunities at Zion Tech Group."
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Help us build the future of technology
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work With Us
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer competitive benefits and a supportive work environment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="text-green-600 mb-4">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}