import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { FaRocket;
  FaBrain;
  FaCloud;
  FaShieldAlt;
  FaChartLine;
  FaCogs;
  FaLightbulb;
  FaGlobe;
  FaMobile;
  FaDatabase;
  FaNetworkWired;
  FaRobot;
  FaSearch
 } from 'react-icons/fa';
import { SiNextdotjs;
  SiReact;
  SiTypescript;
  SiTailwindcss;
  SiPrisma;
  SiSupabase;
  SiVercel;
  SiDocker;
  SiKubernetes;
  SiAws;
  SiGooglecloud;
  SiMicrosoftazure
 } from 'react-icons/si';

interface Service {
  id: string;
  title: string;
  description: string;
    starter: number;
    professional: number;



interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;

}

  color: string;  id: string;,
  name: string;,
  description: string;,
  icon: React.ReactNode;,
  color: string;
}


const serviceCategories: ServiceCategory[] = [
  {


    id: 'ai-ml';
    name: 'AI & Machine Learning';
    description: 'Cutting-edge artificial intelligence and machine learning solutions';
    icon: <FaBrain className;
export default EnhancedServicesShowcase2025;

