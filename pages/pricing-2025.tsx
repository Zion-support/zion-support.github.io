>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  ArrowRight, Check, Star, Users, Zap, Shield, Globe
  TrendingUp, Award, Clock, CheckCircle, ExternalLink
} from 'lucide-react'
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import { innovative2025MicroSaasExpansionV3 } from '../data/2025-innovative-micro-saas-expansion-v3';
export default function Pricing2025() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')
  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀' }
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: '🧠' }
    { id: 'Cybersecurity & Quantum', name: 'Cybersecurity & Quantum', icon: '🔒' }
    { id: 'Edge Computing & IoT', name: 'Edge Computing & IoT', icon: '🌐' }
    { id: 'Space Technology & Innovation', name: 'Space Technology & Innovation', icon: '🚀' }
    { id: 'Neural Technology & BCI', name: 'Neural Technology & BCI', icon: '🧬' }
  ]
  const filteredServices = innovative2025MicroSaasExpansionV3.filter(service =>
    selectedCategory === 'all' |service.category.includes(selectedCategory)
  )
  const getAnnualPrice = (monthlyPrice: string) => {
    const price = parseFloat(monthlyPrice.replace('$', ''))
    const annualPrice = price * 12 * 0.8, // 20% discount for annual
    return `$${Math.round(annualPrice)}`
  }
  const containerVariants = {
    hidden: { opacity: 0 }
=======
import React, { useState } from 'react',
import Head from 'next / head',
import { motion } from 'framer-motion',
import {
  ArrowRight, Check, Star, Users, Zap, Shield, Globe,
  TrendingUp, Award, Clock, CheckCircle, ExternalLink;
} from 'lucide-react',
import EnhancedNavigation from '../components / EnhancedNavigation',
import EnhancedFooter from '../components / EnhancedFooter',
import { innovative2025MicroSaasExpansionV3 } from '../data / 2025 - innovative - micro - saas - expansion - v3',
export default /**
 * Pricing2025 - Function description
 */
function Pricing2025() {
  const [selected_category, setSelectedCategory] = useState ('all'),
  const [billing_cycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly'),
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀' },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: '🧠' },
    { id: 'Cybersecurity & Quantum', name: 'Cybersecurity & Quantum', icon: '🔒' },
    { id: 'Edge Computing & IoT', name: 'Edge Computing & IoT', icon: '🌐' },
    { id: 'Space Technology & Innovation', name: 'Space Technology & Innovation', icon: '🚀' },
    { id: 'Neural Technology & BCI', name: 'Neural Technology & BCI', icon: '🧬' }
  ],
  const filtered_services = innovative2025MicroSaasExpansionV3.filter (service =>;
    selected_category === 'all' || service.category.includes (selected_category)),
  const getAnnualPrice = (monthly_price: string) =>: any {
    const price = parse_float (monthly_price.replace ('$', '')),
    const annual_price = price * 12 * 0.8, // 20% discount for annual;
    return `$${Math.round (annual_price)}`;
  },
  const container_variants = {
    hidden: { opacity: 0 },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    visible: {
      opacity: 1
      transition: {
        stagger_children: 0.1;
      }
    }
      transition: {
        duration: 0.5;
      }
    }
      {/* Hero Section */}
      <section className="relative py - 20 px - 6">;
        <div className="max - w-7xl mx - auto text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            {/* Billing Toggle */}
            <div className="flex items - center justify - center gap - 4 mb - 12">;
              <span className={`text - lg ${billing_cycle === 'monthly' ? 'text - white' : 'text - white / 60'}`}>;
                Monthly;
              </span>;
              <button;
                on_click={() => setBillingCycle (billing_cycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative w - 16 h - 8 rounded - full transition - all duration - 300 ${
                  billing_cycle === 'annual' ? 'bg - cyan - 500' : 'bg - white / 20';
                }`}
      {/* Category Filter */}
      <section className="py - 8 px - 6 bg - gradient - to - r from - white / 5 to - white / 10">;
        <div className="max - w-7xl mx - auto">;
          <div className="flex flex - wrap justify - center gap - 4">;
            {categories.map ((category) => (
              <button;
                key={category.id}
                on_click={() => setSelectedCategory (category.id)}
                className={`px - 6 py - 3 rounded - lg text - lg font - medium transition - all duration - 300 flex items - center gap - 2 ${
                  selected_category === category.id;
                    ? 'bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white';
                    : 'bg - white / 10 text - white / 70 hover:bg - white / 20 hover:text - white';
                }`}
              >;
                <span>{category.icon}</span>;
                {category.name}
      {/* Pricing Grid */}
      <section className="py - 16 px - 6">;
        <div className="max - w-7xl mx - auto">;
          <motion.div;
            variants={container_variants}
            initial="hidden";
            animate="visible";
            className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8";
          >;
            {filtered_services.map ((service, index) => (
              <motion.div;
                key={service.id}
                variants={item_variants}
                className={`group relative p - 8 rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - xl hover:border - cyan - 400 / 30 transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl ${
                  service.popular ? 'ring - 2 ring - cyan - 400 / 50' : '';
                }`}
              >;
                {/* Popular Badge */}
                {service.popular && (
                {/* Service Header */}
                <div className="text - center mb - 8">;
                  <div className={`w - 20 h - 20 rounded - 2xl bg - gradient - to - br ${service.color} p - 5 mx - auto mb - 4 flex items - center justify - center text - 3xl`}>;
                    {service.icon}
                {/* Rating */}
                <div className="flex items - center justify - center gap - 2 mb - 6">;
                  <div className="flex items - center gap - 1">;
                    {[...Array (5)].map ((_, i) => (
                      <Star;
                        key={i}
                        className={`w - 4 h - 4 ${
                          i < Math.floor (service.rating) ? 'text - yellow - 400 fill - current' : 'text - white / 20';
                        }`}
                {/* Features */}
                <div className="mb - 8">;
                  <h4 className="text - white font - semibold mb - 4 text - center">Key Features:</h4>;
                  <div className="space - y-3">;
                    {service.features.slice (0, 5).map ((feature, idx) => (
                      <div key={idx} className="flex items - center gap - 3 text - sm text - white / 80">;
                        <CheckCircle className="w - 4 h - 4 text - cyan - 400 flex - shrink - 0" />;
                        <span>{feature}</span>;
                      </div>))}
                    {service.features.length > 5 && (
                {/* Action Buttons */}
                <div className="space - y-3">;
                  <a;
                    href={service.link}
      {/* Enterprise Solutions */}
      <section className="py - 20 px - 6 bg - gradient - to - r from - white / 5 to - white / 10">;
        <div className="max - w-4xl mx - auto text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
      {/* FAQ Section */}
      <section className="py - 20 px - 6">;
        <div className="max - w-4xl mx - auto">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
              }
            ].map ((faq, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
=======
                className="p - 6 rounded - xl border border - white / 10 bg - gradient - to - r from - white / 5 to - white / 10 backdrop - blur - xl";
              >;
                <h3 className="text - xl font - bold text - white mb - 3">{faq.question}</h3>;
                <p className="text - white / 70 leading - relaxed">{faq.answer}</p>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      <EnhancedFooter />;
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
