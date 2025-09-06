import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, Target;
  ArrowRight, Check, Star, BarChart3;
  Globe, Zap, Shield, Crown, Brain, Atom
 } from 'lucide-react';
import Link from 'next/link';
export default function MarketPricing() {
  const [selectedMarket, setSelectedMarket] = useState('ai-consciousness');
  const markets = null;
