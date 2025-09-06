import React, { useState, useEffect } from 'react',
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket;
  Loader2, ChevronDown, Zap, Globe, Target, Lightbulb, Code, Database;
  Cloud, Lock, ChartBar, Cpu, Atom, Satellite, Gamepad2, Palette
 } from 'lucide-react';
import UltraFuturisticBackground2035 from './ui/UltraFuturisticBackground2035',
import UltraFuturisticServiceCard2035 from './ui/UltraFuturisticServiceCard2035';
import { innovative2025MicroSaasBatch  } from '../data/innovative-2025-micro-saas-batch';
import { innovative2025ITEnterpriseBatch  } from '../data/innovative-2025-it-enterprise-batch';
import { innovative2025AIServicesBatch } from '../data/innovative-2025-ai-services-batch';
// Loading fallback component
const LoadingFallback = null;