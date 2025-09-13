import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


import { emergingTechServicesEnhanced2025 } from '../data/2025-emerging-tech-services-enhanced';import { advancedAIAutomationServices } from '../data/2026-advanced-ai-automation-services';import { ;
import { emergingTechServicesEnhanced2025 } from '../data/2025-emerging-tech-services-enhanced';import { advancedAIAutomationServices } from '../data/2026-advanced-ai-automation-services';import {

import { ;
import { ;
import { ;





import { quantumCybersecurityServices } from '../data/2026-quantum-cybersecurity-services';
import { innovativeMicroSaasServices2026 } from '../data/2026-innovative-micro-saas-expansion';
import { specializedITSolutions2026 } from '../data/2026-specialized-it-solutions';
import { emergingTechServices2026 } from '../data/2026-emerging-tech-services';
import UltraFuturisticBackground2026 from './backgrounds/UltraFuturisticBackground2026';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import Link from 'next/link';


import {;
const Homepage2025: React.FC<Homepage2025Props> = ({;

import { 
  ArrowRight, 
  Star, 
  Shield,
  Globe,
  TrendingUp
} from 'lucide-react';




const Homepage2025: React.FC<Homepage2025Props> = ({ showInternalNav = true }) => {;

  const [activeSection, setActiveSection] = useState('hero');
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);










  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % innovativeRealMicroSaasServices2025.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };
  const allServices = [
    ...innovativeRealMicroSaasServices2025,
    ...innovativeAIServicesEnhanced2025,
    ...innovativeITServicesEnhanced2025,
    ...emergingTechServicesEnhanced2025,
    ...advancedAIAutomationServices,
    ...quantumCybersecurityServices,
    ...innovativeMicroSaasServices2026,
    ...specializedITSolutions2026,
    ...emergingTechServices2026
  ];
    <Layout>
          
                  <ArrowRight className="w-6 h-6" />
                <Play className="w-5 h-5 ml-2 inline" />
            
                  <UltraFuturisticServiceCard2026



















    <UltraFuturisticBackground2026 intensity='medium' theme='quantum'>;



    <UltraFuturisticBackground2026 intensity="medium" theme="quantum">;

    <UltraFuturisticBackground2026 intensity='medium' theme='quantum'>;
    <UltraFuturisticBackground2026 intensity="medium" theme="quantum">;






















              <AnimatePresence>;




</AnimatePresence>;







              <AnimatePresence>;
              </AnimatePresence>;





        <div className="text-center z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >

                <Star className="w-5 h-5" />
                <Link href="/comprehensive-services-showcase-2026">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/comprehensive-services-showcase-2025">
                </Link>
                <Link href="/get-started">
                </Link>

                <Link href='/comprehensive-services-showcase-2026'>;
                      <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />;
                </Link>;
                <Link href='/comprehensive-services-showcase-2025'>;
                </Link>;
                <Link href='/get-started'>;
                </Link>;
                <Star className="w-5 h-5" />;
                <Link href="/comprehensive-services-showcase-2026">;
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />;
                </Link>;
                <Link href="/comprehensive-services-showcase-2025">;
                </Link>;
                <Link href="/get-started">;
                </Link>;
































                <Star className='w - 5 h - 5' />;
                <Link href='/comprehensive - services - showcase - 2026'>;
                      <ArrowRight className='w - 5 h - 5 group - hover:translate - x-1 transition - transform' />;
                </Link>;
                <Link href='/comprehensive - services - showcase - 2025'>;
                </Link>;
                <Link href='/get - started'>;
                </Link>;
                <Star className="w - 5 h - 5" />;
                <Link href="/comprehensive - services - showcase - 2026">;
                      <ArrowRight className="w - 5 h - 5 group - hover:translate - x-1 transition - transform" />;
                </Link>;
                <Link href="/comprehensive - services - showcase - 2025">;
                </Link>;
                <Link href="/get - started">;
                </Link>;
                  <Shield className="w - 4 h - 4 text - green - 400" />;
                  <Globe className="w - 4 h - 4 text - blue - 400" />;
                  <Shield className='w - 4 h - 4 text - green - 400' />;
                  <Globe className='w - 4 h - 4 text - blue - 400' />;
                  <TrendingUp className='w - 4 h - 4 text - purple - 400' />                  <span > Proven Results</span>                <div className="flex items - center space - x-2">;
                  <TrendingUp className="w - 4 h - 4 text - purple - 400" />;
















                <Users className="w-8 h-8 text-cyan-400" />
                <Zap className="w-8 h-8 text-blue-400" />
                <Shield className="w-8 h-8 text-purple-400" />

                <Users className='w-8 h-8 text-cyan-400' />;
                <Zap className='w-8 h-8 text-blue-400' />;
                <Shield className='w-8 h-8 text-purple-400' />;
                <Users className="w-8 h-8 text-cyan-400" />;
                <Zap className="w-8 h-8 text-blue-400" />;
                <Shield className="w-8 h-8 text-purple-400" />;






    </UltraFuturisticBackground2026>);
export default Homepage2025);
export default Homepage2025;



