import React, { useState } from 'react';'
import { Link } from 'react-router-dom';
import { advancedInnovativeServices2025V3, advancedITServices2025, advancedAIServices2025 } from "../../data/2025-advanced-innovative-services-expansion-v3";
const AdvancedInnovativeServicesShowcase2025 = () => {
'
    const [selectedCategory, setSelectedCategory] = useState('all');'
    const [searchTerm, setSearchTerm] = useState('');'
    const [sortBy, setSortBy] = useState('name');'
    const categories = [''
        'all',Legal Tech & Compliance',Quantum Computing & Security',Healthcare & Biotech',Energy & Sustainability',Cybersecurity',Fintech & Trading',Quantum Computing & AI',Supply Chain & Logistics',Edge Computing & IoT',Marketing & Automation',Quantum Technology',AI & Machine Learning',AI & Analytics',AI & Customer Experience'
    ];'
    const allServices = [''
        ...advancedInnovativeServices2025V3.map(service => ({ ...service, type: 'Micro SAAS' })),'
        ...advancedITServices2025.map(service => ({ ...service, type: 'IT Service' })),'
        ...advancedAIServices2025.map(service => ({ ...service, type: 'AI Service' }))
    ];
    const filteredServices = allServices;'
        .filter(service => selectedCategory === 'all' || service.category === selectedCategory)
        .filter(service => service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features?.some((feature) => feature.toLowerCase().includes(searchTerm.toLowerCase())))
        .sort((a, b) => {

        switch (sortBy) {
'
            case 'price':''
                return parseFloat(a.price?.replace(/[^0-9.]/g,) || '0') - parseFloat(b.price?.replace(/[^0-9.]/g,) || '0');'
            case 'category':
                return a.category.localeCompare(b.category);'
            case 'name':
            default:
                return a.name.localeCompare (b.name) }
    }) ;
    const getCategoryIcon = (category) => {
        const icons = {
'"
  'Legal Tech & Compliance': '⚖️',Quantum Computing & Security': '🔐',Healthcare & Biotech': '🏥',Energy & Sustainability': '🌱',Cybersecurity': '🛡️',Fintech & Trading': '📈',Quantum Computing & AI': '🔮',Supply Chain & Logistics': '🚚',Edge Computing & IoT': '🌐',Marketing & Automation': '📢',Quantum Technology': '🔮',AI & Machine Learning': '🧠',AI & Analytics': '📊',"'"
