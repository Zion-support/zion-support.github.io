import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, MessageCircle, Phone, Mail, Clock;
  BookOpen, Video, FileText, Search, Filter;
  CheckCircle, ArrowRight, Brain, Atom, Rocket;
  Shield, Zap, Users, Star, TrendingUp, Code
 } from 'lucide-react';
export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const supportCategories = null;