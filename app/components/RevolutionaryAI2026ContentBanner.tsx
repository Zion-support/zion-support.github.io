'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Zap, Target, Rocket, Shield, Globe, TrendingUp } from 'lucide-react';


      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-pink-400 rounded-full opacity-10 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-purple-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-10 w-20 h-20 bg-yellow-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '3s' }} />
    </motion.section>
  );
}