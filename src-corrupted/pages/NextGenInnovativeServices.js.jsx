<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import React, {useState, useMemo} from 'react';

import {Search, Filter, Grid, List, ExternalLink, Phone, Mail, Globe, Clock, Users, CheckCircle, TrendingUp, Award} from 'lucide-react';
import {NEXT_GEN_INNOVATIVE_SERVICES} from "../data/nextGenInnovativeServices";
export default function NextGenInnovativeServices
export {NextGenInnovativeServices}() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedService, setSelectedService] = useState(null);
    const [viewMode, setViewMode] = useState('grid');
    // Get unique categories
    const categories = useMemo(() => ['all', ...Array.from(new Set(NEXT_GEN_INNOVATIVE_SERVICES.map(s => s.category)))], []);
    // Filter services based on search and category
    const filteredServices = useMemo(() => {
        return NEXT_GEN_INNOVATIVE_SERVICES.filter(service => {
            const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
            return matchesCategory && matchesSearch})}, [searchTerm, selectedCategory]);
    const formatPrice = (props: any) => {
        return `${currency}${price.toLocaleString()}`};
    const getSupportLevelColor = (props: any) => {
        switch (level.toLowerCase()) {
            case 'enterprise': return 'bg-purple-600';
            case 'premium': return 'bg-blue-600';
            case 'standard': return 'bg-green-600';
            default: return 'bg-gray-600'}
    };
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const itemVariants = {
  hidden: { y: 20,
  opacity: 0 
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const NextGenInnovativeServices.js: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>NextGenInnovativeServices.js | Zion Tech Group</title>
        <meta name="description" content="NextGenInnovativeServices.js - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">NextGenInnovativeServices.js</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovativeServices.js;