import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
                    </div>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                    Download
                  </button>
                </div>
=======
        {/* Upcoming Webinars */}
        {upcomingWebinars.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Upcoming Webinars
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Register for our upcoming educational sessions.
                </p>
              </motion.div>

              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {upcomingWebinars.map((webinar, index) => (
                    <motion.div
                      key={webinar.id}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative">
                        <img
                          src={webinar.image}
                          alt={webinar.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          UPCOMING
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{webinar.title}</h3>
                        <p className="text-gray-600 mb-4">{webinar.description}</p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{new Date(webinar.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{webinar.time} ({webinar.duration})</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Users className="w-4 h-4 mr-2" />
                            <span>{webinar.speaker} - {webinar.speakerTitle}</span>
                          </div>
                        </div>

                        <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 font-semibold">
                          Register Now
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
  );
}