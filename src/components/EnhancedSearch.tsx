import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
        <AnimatePresence>
          {isFocused && searchTerm && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 max-h-80 overflow-y-auto"
            >
              {filteredSuggestions.length > 0 ? (
                <div className="p-2">
                  {filteredSuggestions.map((suggestion, index) => (
                    <motion.div
      {/* Quick Access Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mt-6"
      >
        {[
          { label: "AI Revolution", icon: "🤖", color: "from-purple-600 to-pink-600" },
          { label: "Quantum Computing", icon: "⚡", color: "from-cyan-600 to-blue-600" },
          { label: "Neural Interfaces", icon: "🧠", color: "from-emerald-600 to-teal-600" },
          { label: "Reality Tech", icon: "🌟", color: "from-orange-600 to-red-600" }
        ].map((button, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`bg-gradient-to-r ${button.color} text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300`}
          >
            <span className="mr-2">{button.icon}</span>
            {button.label}
          </motion.button>
        ))}
      </motion.div>
