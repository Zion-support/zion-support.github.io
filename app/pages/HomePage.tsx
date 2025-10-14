<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import { 
  ArrowRightIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  CpuChipIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
    RocketLaunchIcon,
    SparklesIcon,
    BoltIcon
} from '@heroicons/react/24/outline'
import FuturisticBackground from '../components/FuturisticBackground'
import NeonButton from '../components/NeonButton'
import AnimatedCard from '../components/AnimatedCard'
import { services } from '../data/servicesData'
export default function HomePage() {
=======
import React from 'react';
>>>>>>> origin/main

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to Zion Tech Group</h1>
          <p className="text-gray-300 text-xl mb-8">Advanced AI and IT Solutions</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
