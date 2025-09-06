import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
 from 'lucide-react'
import Button from '../ui/
    { id: 'low', name: any
    { id: 'medium', name: any
    { id: 'high', name: any
    { id: 'premium', name: any
                          (selectedPriceRange = = 'low' && parseFloat(service.price.replace(/[$]/
                          (selectedPriceRange = = 'medium' && parseFloat(service.price.replace(/[$]/g, '') >= 1000 && parseFloat(service.price.replace(/[$]/
                          (selectedPriceRange = = 'high' && parseFloat(service.price.replace(/[$]/g, '') >= 5000 && parseFloat(service.price.replace(/[$]/
                          (selectedPriceRange = = 'premium' && parseFloat(service.price.replace(/[$]/
          const aROI = parseInt(a.roi.match(/\d+/
          const bROI = parseInt(b.roi.match(/\d+/
        filtered.sort(a, b) => parseFloat(a.price.replace(/[$]/g, '') - parseFloat(b.price.replace(/[$]/
        filtered.sort(a, b) => parseFloat(b.price.replace(/[$]/g, '') - parseFloat(a.price.replace(/[$]/
    { label: 'Average Rating', value: (services.reduce(sum, s) => sum + (s.rating || 0), 0) /