try {
  console.log(' Testing component imports...');
  const React = require('react');
  console.log(' React import successful', React.version);
  const { motion } = require('framer-motion');
// Build Verification Script
// This script checks if our components can be imported without syntax errors
console.log(' Starting build verification...');
try {
  // Test component imports;
  console.log(' Testing component imports...');
  // Test basic React functionality;
  const React = require('react');
  console.log(' React import successful', React.version);
  // Test framer-motion;
  const { motion } = require('framer-motion');
  console.log(' Framer Motion import successful', typeof motion);
  // Test lucide-react icons;
  const {
    ArrowRight,
    CheckCircle,
    Brain,
    Cloud,
    Shield,
