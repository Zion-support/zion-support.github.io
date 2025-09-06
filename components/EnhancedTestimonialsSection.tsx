import React from 'react';
import { Star, Quote, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';
interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  category: string
}

const EnhancedTestimonialsSection: React.FC;
