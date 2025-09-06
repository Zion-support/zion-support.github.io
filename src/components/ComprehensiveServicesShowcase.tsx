import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
 from 'lucide-react'
  const [selectedCategory, setSelectedCategory] = useState<string>('all'
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all'
  const [searchTerm, setSearchTerm] = useState(''
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'aiScore' | 'delivery'>('name'
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'
      id: any
      description: 'Intelligent automation, predictive analytics, and custom AI solutions that transform your business operations.'
      category: any
        details: 'Starting from $2,500/
      path: any
        details: 'Starting from $1,800/
      path: any
        details: 'Starting from $2,200/
      path: any
        details: 'Starting from $2,800/
      path: any
    { icon: Rocket, value: any
    { icon: Star, value: any