'use client';
import React, {useState}from 'react';
import {Helmet}}from 'react-helmet-async';

const PartnersPage: React.FC = () => {,
  const partners = [
import {ExternalLink, Award, Handshake, Users, Star, CheckCircle, ArrowRight}}from 'lucide-react';

interface Partner {id: string;,}
  name: string;,
  logo: string;,
  description: string;,
  category: string;,
  website: string;,
  tier: 'preferred' | 'certified' | 'strategic';,}const PartnersPage: React.FC = () => {,
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTier, setSelectedTier] = useState('all');

  const partners: Partner[] = [,

    const matchesCategory = selectedCategory === 'all' || partner.category === selectedCategory;
    const matchesTier = selectedTier === 'all' || partner.tier === selectedTier;)
    return matchesCategory && matchesTier;)
  });

  const getTierColor = (tier: string) => {
    switch (tier) 
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
      case 'strategic':;
        return 'from-purple-500 to-pink-600';
      case 'preferred':
        return 'from-blue-500 to-purple-600';
      case 'certified':
        return 'from-green-500 to-blue-600';
      default: return 'from-gray-500 to-gray-600';,}};

  const getTierIcon = const getTierIcon = const getTierIcon = (tier: string) => {;
    switch (tier) {;

  );
};

export default PartnersPage;
