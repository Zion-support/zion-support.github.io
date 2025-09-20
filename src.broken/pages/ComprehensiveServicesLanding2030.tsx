import React, { useState } from 'react',
export default React.memo(function ComprehensiveServicesLanding2030 (...args[]) :  {
import { ArrowRight,
import { COMPREHENSIVE_PRICING_GUIDE_2030, PRICING_ANALYSIS_2030, PAYMENT_OPTIONS_2030, PRICING_CONTACT_2030 } from '../data/comprehensivePricingGuide2030',

export default function Page() {
) ,

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'AI & Business Intelligence': <Brain className="w-6 h-6" />,
      'AI & Healthcare': <Heart className="w-6 h-6" />,
      'AI & FinTech': <TrendingUp className="w-6 h-6" />,
      'IT Infrastructure': <Database className="w-6 h-6" />,
      'Emerging Technology': <Rocket className="w-6 h-6" />,
      'AI & Research': <Search className="w-6 h-6" />,
      'AI & Metaverse': <Globe className="w-6 h-6" />,
      'AI & Space Tech': <Rocket className="w-6 h-6" />,
      'AI & Development': <Zap className="w-6 h-6" />,
      'AI & Education': <Users className="w-6 h-6" />,
      'AI & Entertainment': <Star className="w-6 h-6" />,
      'Cybersecurity': <Shield className="w-6 h-6" />,
      'Cloud & DevOps': <Cloud className="w-6 h-6" />,
      'Quantum Computing': <Zap className="w-6 h-6" />,
      'IoT & Edge Computing': <Database className="w-6 h-6" />,
      'Blockchain & Web3': <Lock className="w-6 h-6" />,
      'Digital Twin': <Globe className="w-6 h-6" />,
      'Space Technology': <Rocket className="w-6 h-6" />,
      'Sustainable Technology': <Heart className="w-6 h-6" />,
    },
    return icons[category] || <Rocket className="w-6 h-6" />},

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'AI & Business Intelligence': 'from - purple - 500 to - pink - 500AI & Healthcare': 'from - pink - 500 to - red - 500AI & FinTech': 'from - emerald - 500 to - green - 500IT Infrastructure': 'from - slate - 500 to - gray - 500Emerging Technology': 'from - violet - 500 to - purple - 500AI & Research': 'from - purple - 500 to - violet - 500AI & Metaverse': 'from - purple - 500 to - indigo - 500AI & Space Tech': 'from - indigo - 500 to - purple - 500AI & Development': 'from - cyan - 500 to - blue - 500AI & Education': 'from - blue - 500 to - indigo - 500AI & Entertainment': 'from - purple - 500 to - pink - 500Cybersecurity': 'from - red - 500 to - orange - 500Cloud & DevOps': 'from - blue - 500 to - cyan - 500Quantum Computing': 'from - indigo - 500 to - purple - 500IoT & Edge Computing': 'from - teal - 500 to - cyan - 500Blockchain & Web3': 'from - yellow-500 to - orange - 500Digital Twin': 'from - blue - 500 to - indigo - 500Space Technology': 'from - purple - 500 to - pink - 500Sustainable Technology': 'from - green - 500 to - teal - 500',
    },
    return colors[category] || 'from - gray - 500 to - slate - 500'},

  const resetFilters = () => {,
    setActiveCategory('all') ,
    setSearchTerm('') ,
    setSortBy('rating') ,
    setPriceRange([0, 50000]) ,
    setAiScoreRange([80, 100]) },

            </motion.div>,
          </motion.div>,) },
      </div>,
    </>,) ,
}
