import React, { useState } from 'react';'''
import { motion } from 'framer-motion';'''
import { Star, CheckCircle, Clock, Users, TrendingUp, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { advancedRealServices2025 } from "../data/2025-advanced-real-services-expansion";""""
import { specializedITServices2025 } from "../data/2025-specialized-it-ai-services";""""
import SEOHead from "../components/SEOHead";
const AdvancedServicesShowcase2025 = () => {
'
''
'''
    const [selectedCategory, setSelectedCategory] = useState('all');'''
    const [searchTerm, setSearchTerm] = useState('');'''
    const [sortBy, setSortBy] = useState('name');'
    // Combine all services''
    const allServices = [...advancedRealServices2025, ...specializedITServices2025];'''
    const categories = [''''
        'all',AI & Machine Learning',Cybersecurity',Healthcare Technology',Blockchain & Supply Chain',Financial Technology',Edge Computing & IoT',Marketing Technology',Quantum Computing',Human Resources Technology',Energy & Sustainability',Legal Technology',Neuromorphic Computing',Privacy AI',AI Governance',DevOps & Automation',Data Quality & Analytics',API Management',Network Security''
    ];''
    const filteredServices = allServices;'''
        .filter(service => selectedCategory === 'all' || service.category === selectedCategory)
        .filter(service => service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {

        switch (sortBy) {
'
''
'''
            case 'price':''''
                return parseFloat(a.price.replace('$',).replace(',,)) - parseFloat(b.price.replace('$',).replace(',,));'''
            case 'rating':''
                return b.rating - a.rating;'''
            case 'category':''
                return a.category.localeCompare(b.category);'''
            case 'name':
            default:
                return a.name.localeCompare (b.name) }
    }) ;
    const getCategoryIcon = (category) => {

        const icons = {
'"
'"'"
'"'"'"
  'AI & Machine Learning': '🤖',Cybersecurity': '🔐',Healthcare Technology': '🏥',Blockchain & Supply Chain': '⛓️',Financial Technology': '💰',Edge Computing & IoT': '🌐',Marketing Technology': '📢',Quantum Computing': '🔮',Human Resources Technology': '👥',Energy & Sustainability': '🌱',Legal Technology': '⚖️',Neuromorphic Computing': '🧠',Privacy AI': '🔒',AI Governance': '⚖️',DevOps & Automation': '⚡',Data Quality & Analytics': '📊',API Management': '🔌',"'"'"
'"'"