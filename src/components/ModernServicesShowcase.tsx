import React, { useState } from 'react' import { motion, AnimatePresence   } from 'framer - motion';
import { Link   } from 'react - router - dom';
import { Brain, Cloud, Shield, Globe, Zap, Database, Cpu, Lock, Network, Rocket, Target, TrendingUp   } from 'lucide - react';
import { ModernCard   } from './ui / ModernCard';
import { ModernButton } from './ui / ModernButton'  interface Service {;
   id: string;
   title: string;
   description: string;
   icon: React.ComponentType < >
"
}