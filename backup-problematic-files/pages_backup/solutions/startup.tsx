import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Zap, DollarSign, TrendingUp, Users } from 'lucide-react';
import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';
import { Rocket, Zap, DollarSign, Users, ArrowRight, CheckCircle, Clock, Target, TrendingUp } from 'lucide-react';
import Layout from "../../components/Layout";";

const Startup: React.FC<StartupProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Startup</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Startup;
