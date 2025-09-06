import React, { useState, useEffect, useMemo } from 'react'
 from 'lucide-react'
  relevance: any
const ContentCategorizer: React.FC = () => {const [searchTerm, setSearchTerm] = useState(''
  const [selectedCategory, setSelectedCategory] = useState('all'
  const [selectedSubcategory, setSelectedSubcategory] = useState('all'
  const [selectedType, setSelectedType] = useState('all'
  const [selectedDateRange, setSelectedDateRange] = useState('all'
  const [selectedRelevance, setSelectedRelevance] = useState('all'
  const [sortBy, setSortBy] = useState<'date' | 'relevance' | 'title'>('date'
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc'
      id: any