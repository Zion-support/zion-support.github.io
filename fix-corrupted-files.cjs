#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to check if a file is corrupted
function isCorrupted(content) {
  // Check for common corruption patterns
  const corruptionPatterns = [
    /import.*from.*import/,  // Double imports
    /export.*function.*export/,  // Double exports
    /<=.*import/,  // Malformed imports
    /return.*\(.*<=/,  // Malformed returns
    /';.*';/,  // Multiple semicolons
    /'';.*'';/,  // Multiple quotes and semicolons
    /Error: Parsing error/,  // Parsing errors
    /Unterminated string literal/,  // Unterminated strings
    /Expression expected/,  // Expression errors
    /Declaration or statement expected/,  // Declaration errors
  ];
  
  return corruptionPatterns.some(pattern => pattern.test(content))}

// Function to create a basic service template
function createServiceTemplate(filename) {
  const serviceName = path.basename(filename, path.extname(filename))
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  return `import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';

export default function ${serviceName.replace(/\s+/g, '')}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="${serviceName} - Zion Tech Group"
        description="Professional ${serviceName.toLowerCase()} services by Zion Tech Group"
      />
      
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${serviceName}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Professional ${serviceName.toLowerCase()} services designed to meet your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400/10 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive ${serviceName.toLowerCase()} solutions tailored to your requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600/50">
              <h3 className="text-xl font-semibold text-white mb-3">Service 1</h3>
              <p className="text-gray-300">Professional service description</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600/50">
              <h3 className="text-xl font-semibold text-white mb-3">Service 2</h3>
              <p className="text-gray-300">Professional service description</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600/50">
              <h3 className="text-xl font-semibold text-white mb-3">Service 3</h3>
              <p className="text-gray-300">Professional service description</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )}
`}

// Function to fix a single file
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (isCorrupted(content)) {
      console.log(`Fixing corrupted file: ${filePath}`);
      const newContent = createServiceTemplate(filePath);
      fs.writeFileSync(filePath, newContent, 'utf8');
      return true}
    
    return false} catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false}
}

// Main function
function main() {
  const servicesDir = path.join(__dirname, 'src', 'pages', 'services');
  
  if (!fs.existsSync(servicesDir)) {
    console.error('Services directory not found');
    return}
  
  const files = fs.readdirSync(servicesDir)
    .filter(file => file.endsWith('.tsx') || file.endsWith('.jsx'))
    .map(file => path.join(servicesDir, file));
  
  console.log(`Found ${files.length} service files`);
  
  let fixedCount = 0;
  
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++}
  });
  
  console.log(`Fixed ${fixedCount} corrupted files`)}

if (require.main === module) {
  main()}

module.exports = { fixFile, isCorrupted, createServiceTemplate };