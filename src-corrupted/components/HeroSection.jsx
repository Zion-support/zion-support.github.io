<<<<<<< HEAD
import React from 'react';
=======
import React, {useRef} from 'react';

import {ArrowRight, Sparkles, Star, Zap, Shield, Users, Clock, Target, TrendingUp, Award} from 'lucide-react';
import {Button} from '@/components/ui/button';"
import {GradientHeading} from '@/components/GradientHeading';"
import {Link} from 'react-router-dom';"
import {useTranslation} from 'react-i18next';"
"
import {ArrowRight, Sparkles, Zap, Users, Star, TrendingUp, Shield} from 'lucide-react';"
import {useRef} from 'react';
import {useTranslation} from 'react -i18next';
 from 'react';
import {Button} from '@/components / ui / button';
import {GradientHeading} from '@/components / GradientHeading';
 from 'framer-motion';

>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const HeroSection: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">HeroSection</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default HeroSection;