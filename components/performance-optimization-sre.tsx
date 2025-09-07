import React from 'react',
import Head from 'next/head';
import { Phone, Mail, MapPin, Check, ArrowRight, Activity  } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',
import Button from '../components/ui/Button';
import { extraServices } from '../data/extra-services';
export default function PerformanceOptimizationSREPage() {
export default function PerformanceOptimizationSREPage() {

  const service = extraServices.find(s =>
    s.link.endsWith('/performance-optimization-sre')
  );  if (!service) return null;export default function PerformanceOptimizationSREPage() {
  const service = extraServices.find(s => s.link.endsWith('/performance-optimization-sre'));
  if (!service) return null;

