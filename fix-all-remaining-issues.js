import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'
const fs = $2;
const problematicFiles = execSync('find app -name "*.tsx" -type f', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.trim() !== '')
// eslint-disable-next-line no-console
    console.log(`Found ${problematicFiles.length} files to check`)
let fixedCount = 0
problematicFiles.forEach(file => {
  // Skip files that are already working
  if (file.includes('ai-agricultural-intelligence-pro') ||
      file.includes('components/Navigation') ||
      file.includes('components/Footer')) {
    return
}
  if (rewriteFile(file)) {
  fixedCount++
}
})
// eslint-disable-next-line no-console
    console.log(`Rewrote ${fixedCount} out of ${problematicFiles.length} files`)