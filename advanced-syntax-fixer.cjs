#!/usr/bin/env node

const fs = require('fs'
const path = require('path'
console.log(' Starting advanced syntax fixer...'
  'pages/about.tsx'
  'pages/ai-services.tsx'
  'pages/blog.tsx'
  'pages/contact.tsx'
  'pages/index.tsx'
  'pages/it-services.tsx'
  'pages/micro-saas.tsx'
  'pages/services.tsx'
  'pages/talent.tsx'
  'components/layout/MainLayout.tsx'
  fixed = fixed.replace(/import\s+([^;]+);';,';,/g, 'import $1;'
  fixed = fixed.replace(/import\s+([^;]+);';,;,/g, 'import $1;'
  fixed = fixed.replace(/import\s+([^;]+);';,'"
  fixed = fixed.replace(/import React from 'react';';,';,/g, "
  fixed = fixed.replace(/import Head from 'next\/head';';,';,/g, "
  fixed = fixed.replace(/import Link from 'next\/link';';,;,/g, "
  fixed = fixed.replace(/import { motion\s+} from "framer-motion";';,'";,/g, 'import { motion } from "framer-motion"
  fixed = fixed.replace(/import { motion\s+} from "framer-motion";';,;,';,/g, 'import { motion } from "framer-motion"
  fixed = fixed.replace(/const\s+"([^"]+)"
  fixed = fixed.replace(/const\s+"([^"]+)"
  fixed = fixed.replace(/const\s+"([^"]+)"