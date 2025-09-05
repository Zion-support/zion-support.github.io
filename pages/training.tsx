import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Play, 
  Clock, 
  Star, 
  Users, 
  Award, 
  ArrowRight,
  CheckCircle,
  Target,
  Zap
} from 'lucide-react';
<<<<<<< HEAD
import Layout from './components/layout/MainLayout';

const courses = [
  {
    id: 1,
    title: 'AI Fundamentals for Business',
    description: 'Learn the basics of artificial intelligence and how to implement AI solutions in your business.',
    duration: '8 hours',
    level: 'Beginner',
    rating: 4.8,
    students: 1250,
    price: '$199',
    image: '/api/placeholder/400/300',
    instructor: 'Dr. Sarah Johnson',
    category: 'AI & Technology'
  },
  {
    id: 2,
    title: 'Cloud Infrastructure Management',
    description: 'Master cloud computing concepts and learn to manage scalable infrastructure solutions.',
    duration: '12 hours',
    level: 'Intermediate',
    rating: 4.9,
    students: 980,
    price: '$299',
    image: '/api/placeholder/400/300',
    instructor: 'Michael Chen',
    category: 'IT Services'
  },
  {
    id: 3,
    title: 'Micro SaaS Development',
    description: 'Build and launch your own micro SaaS products with modern development practices.',
    duration: '16 hours',
    level: 'Advanced',
    rating: 4.7,
    students: 750,
    price: '$399',
    image: '/api/placeholder/400/300',
    instructor: 'Emily Rodriguez',
    category: 'Micro SaaS'
  },
  {
    id: 4,
    title: 'Cybersecurity Best Practices',
    description: 'Protect your business with comprehensive cybersecurity strategies and implementation.',
    duration: '10 hours',
    level: 'Intermediate',
    rating: 4.8,
    students: 1100,
    price: '$249',
    image: '/api/placeholder/400/300',
    instructor: 'David Kim',
    category: 'Security'
  }
];

const categories = [
  { name: 'All', count: 25 },
  { name: 'AI & Technology', count: 8 },
  { name: 'IT Services', count: 6 },
  { name: 'Micro SaaS', count: 5 },
  { name: 'Security', count: 4 },
  { name: 'Business', count: 2 }
];

const features = [
  {
    icon: GraduationCap,
    title: 'Expert Instructors',
    description: 'Learn from industry experts with years of real-world experience'
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'Well-structured courses covering all aspects of modern technology'
  },
  {
    icon: Play,
    title: 'Hands-on Learning',
    description: 'Practical exercises and real-world projects to reinforce learning'
  },
  {
    icon: Award,
    title: 'Certification',
    description: 'Earn industry-recognized certificates upon course completion'
  }
];
=======
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Training Programs</h1>
          <p className="text-xl text-gray-600">Enhance your skills with our comprehensive training programs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-lg font-semibold">Technical Training</h3>
            </div>
            <p className="text-gray-600">Comprehensive technical skills development</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-green-500 mr-3" />
              <h3 className="text-lg font-semibold">Certification Programs</h3>
            </div>
            <p className="text-gray-600">Industry-recognized certifications</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-purple-500 mr-3" />
              <h3 className="text-lg font-semibold">Team Training</h3>
            </div>
            <p className="text-gray-600">Customized team development programs</p>
          </div>
        </div>
      </div>
    </div>
  );
}
