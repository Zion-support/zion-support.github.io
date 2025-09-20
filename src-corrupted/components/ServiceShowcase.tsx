import React, { useState, useMemo } from 'react', import { motion, AnimatePresence  } from 'framer-motion', import { allServices, contactInfo } from '../data/services', const ServiceShowcase: Reac t.FC = React.memo(() => {, const [selectedCategory, setSelectedCategory] = useState<string>('all'), const [sortBy, setSortBy] = useState<'name' | 'price' | 'popularity'>('popularity'), ,
</string>
})