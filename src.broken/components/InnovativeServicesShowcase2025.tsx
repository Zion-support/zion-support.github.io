import React, { useState, useEffect } from 'react';
import { INNOVATIVE_SERVICES_2025, INNOVATIVE_SERVICE_CATEGORIES_2025, INNOVATIVE_SERVICE_SUBCATEGORIES_2025, INNOVATIVE_PRICING_TIERS_2025, INNOVATIVE_CONTACT_INFO_2025, INNOVATIVE_SERVICE_GUARANTEES_2025 } from '@/data / innovativeServices2025';

export default function Page() {
    if(sortOrder === 'asc') {

      return aValue > bValue ? 1 : -1} else {

      return aValue < bValue ? 1 : -1}
  }) ;

  const getCategoryIcon = (category: anystring) => {
    if(category === 'all') return < Rocket className="w-6 h-6" />;
    return INNOVATIVE_SERVICE_CATEGORIES_2025[category]?.icon ?
      <span className="text-2xl">{INNOVATIVE_SERVICE_CATEGORIES_2025[category].icon}</span> :
      <Rocket className="w-6 h-6" />;
  };
  const closeModal = () => {
    setShowModal(false) ;
    setSelectedService(null) ;
  };

  return (<div  className="min - h-screen futuristic -bg">
      {/* Matrix Rain Background Effect */}
      <div  className="matrix -rain"></div>

      {/* Hero Section */}
      <div  className="relative overflow-hidden">
        <div  className="absolute inset - 0 bg-gradient - to - r from - blue - 600 / 20 to - purple -600 / 20"></div>
        <div  className="relative max - w-7xl mx - auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            className="text-center"
                type="text"
                placeholder="Search services..."

                      <div  className="flex items - center justify -between">
                        <span className="text-sm text-gray -400">Market Price:</span>
                        <span className="text-sm text-green -400">{service.marketPrice}</span>
                      </div>

                      <div  className="flex items - center justify -between">
                        <span className="text-sm text-gray -400">ROI:</span>
                        <span className="text-sm text-yellow-400">{service.roi}</span>

                    <div  className="flex -1">
                      <div  className="flex items - center gap-4 mb-2">
                        <h3 className="text-xl font - bold text-white">{service.title}</h3>
                        <span className="text-sm text-gray -400 capitalize">{service.category}</span>
                        <div  className="flex items - center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill -current" />
                          <span className="text-sm text-gray -300">{service.rating}</span>

                    <div  className="text-right">
                      <div  className="text-2xl font - bold text-cyan - 400 mb-3">
                        {service.currency}{service.price.toLocaleString () }

                <div  className="grid grid - cols - 1 lg:grid - cols - 2 gap-8">
                  <div>
                    <h3 className="text-xl font - bold text-white mb-4">Service Overview</h3>
                    <p className="text-gray - 300 mb-6">{selectedService.description}</p>

                    <div  className="space - y-4 mb-6">
                      <div  className="flex items - center justify -between">
                        <span className="text-gray -400">AI Score:</span>
                        <div  className="flex items - center gap-2">
                          <div  className="w-24 bg-gray - 700 rounded-full h-3">
                            <div  className="bg-gradient - to - r from - cyan - 500 to - blue - 500 h-3 rounded-full"

                      <div  className="flex items - center justify -between">
                        <span className="text-gray -400">Market Price:</span>
                        <span className="text-green - 400 font -semibold">{selectedService.marketPrice}</span>
                      </div>

                      <div  className="flex items - center justify -between">
                        <span className="text-gray -400">ROI:</span>
                        <span className="text-yellow-400 font -semibold">{selectedService.roi}</span>
                      </div>

                      <div  className="flex items - center justify -between">
                        <span className="text-gray -400">Setup Time:</span>
                        <span className="text-white">{selectedService.setupTime}</span>
                  <div>
                    <div  className="mb-6">
                      <h3 className="text-2xl font - bold text-cyan - 400 mb-2">
                        {selectedService.currency}{selectedService.price.toLocaleString () }
                      </h3>
                      <p className="text-gray - 400 mb-4">One - time setup fee</p>

                      <div  className="space - y-3">

        <div  className="grid grid - cols - 1 md: anygrid - cols - 2 lg:grid - cols - 3 gap-6">
          {Object.entries(INNOVATIVE_SERVICE_GUARANTEES_2025) .map(([key, value]) => (<motion.div

          <div  className="flex flex - col sm:flex - row gap-4 justify -center">
            <motion.a

            <motion.a

          <div  className="mt-8 text-center">
            <p className="text-gray - 400 mb-2">{INNOVATIVE_CONTACT_INFO_2025.hours}</p>
            <p className="text-cyan - 400 font -semibold">{INNOVATIVE_CONTACT_INFO_2025.emergency}</p>
