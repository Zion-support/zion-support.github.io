
import React, { useState, useEffect } from 'react',
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket;
  Loader2, ChevronDown, Zap, Globe, Lock, Cpu, Database, Cloud, Palette, Heart;
  Phone, Mail, MapPin, Search, Grid, List, Atom, Target, Sparkles
 } from 'lucide-react';
import Link from 'next/link';
// Import our new innovative services
import { innovative2040FuturisticServices  } from '../data/innovative-2040-futuristic-services';
import { innovative2040ITServices  } from '../data/innovative-2040-it-services';
import { revolutionary2043AdvancedServices  } from '../data/revolutionary-2043-advanced-services';
import { revolutionary2044FuturisticServices } from '../data/revolutionary-2044-futuristic-services';
// Loading fallback component
const LoadingFallback = null;

