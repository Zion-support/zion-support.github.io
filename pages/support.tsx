
import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout
      title="Support - Zion Tech Group"
      description="Get support for our services"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Support</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import {
  HelpCircle, MessageCircle, Phone, Mail, Clock
  BookOpen, Video, FileText, Search, Filter
  CheckCircle, ArrowRight, Brain, Atom, Rocket
  Shield, Zap, Users, Star, TrendingUp, Code
} from 'lucide-react'
export default function Support() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const supportCategories = [
    {
      id: 'ai-services'
      name: 'AI Services'
      icon: <Brain className="w-8 h-8 text-cyan-400" />
      description: 'Support for AI consciousness and autonomous systems'
import React, { useState } from 'react',;
import { motion } from 'framer-motion',;
import { 
  HelpCircle, MessageCircle, Phone, Mail, Clock, 
import React, { useState } from 'react',;
import { motion } from 'framer-motion',;
import {
  HelpCircle, MessageCircle, Phone, Mail, Clock,

  BookOpen, Video, FileText, Search, Filter,
  CheckCircle, ArrowRight, Brain, Atom, Rocket,

  Shield, Zap, Users, Star, TrendingUp, Code
} from 'lucide-react',
export default function Support() {

