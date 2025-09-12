import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Shield, Award, Zap, Cloud, Target, Search,
  Filter, Grid, List, DollarSign, Users, Clock, Eye, Heart
} from 'lucide-react';
import Link from 'next/link';

import { comprehensiveRealServices2025 } from '../data/2025-comprehensive-real-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

    const matchesCategory = selectedCategory === 'all' || 
      service.category?.toLowerCase().includes(selectedCategory.replace('-', ' ')) ||
      service.tags?.some(tag => tag.toLowerCase().includes(selectedCategory.replace('-', ' ')));
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
