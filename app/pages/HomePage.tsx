import React from 'react';

import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
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
} from '@heroicons/react/24/outline';
import FuturisticBackground from '../components/FuturisticBackground';
import NeonButton from '../components/NeonButton';
import AnimatedCard from '../components/AnimatedCard';
import { services } from '../data/servicesData';

export default function HomePage() {

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>HomePage - Zion Tech Group</title>
        <meta name="description" content="Advanced AI and IT solutions by Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-8">HomePage</h1>
          <p className="text-gray-300 text-center">Coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;