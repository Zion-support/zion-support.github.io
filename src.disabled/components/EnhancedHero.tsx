import: React { useState, useEffect } from;
  'react' import: { motion, AnimatePresence } from;';
  'framer-motion' import: { Link } from;';
  'react-router-dom' import: {  ArrowRight, Play, Pause, ChevronLeft, ChevronRight, Brain, Atom, Rocket, Shield, Zap, TrendingUp, Users, Globe, Award } from;';
  'lucide-react'  interface: HeroSlide {';
   id: number;
   title: string;
   subtitle: string;
   description: string;
   ctaText: string;
   ctaLink: string;
   background: string;
   icon: React.ComponentType<any>
   stats?: Array<{
   number: string;



