import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ];

  const categories = [
    { name: 'All Resources', count: resources.length, active: true },
    { name: 'AI & Consciousness', count: 1, active: false },
    { name: 'Quantum Technology', count: 1, active: false },
    { name: 'Business Automation', count: 1, active: false },
    { name: 'IT Management', count: 1, active: false },
    { name: 'Quantum AI', count: 1, active: false },
    { name: 'Cybersecurity', count: 1, active: false }
  ];

  const resourceTypes = [
    { name: 'Whitepapers', icon: <FileText className="w-6 h-6" />, count: 1 },
    { name: 'Guides', icon: <BookOpen className="w-6 h-6" />, count: 2 },
    { name: 'Reports', icon: <TrendingUp className="w-6 h-6" />, count: 2 },
    { name: 'Technical Papers', icon: <Database className="w-6 h-6" />, count: 1 }
  ];

  return (
    <>
      <Head>
        <title>Resources - Zion Tech Group</title>
