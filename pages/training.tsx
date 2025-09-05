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
