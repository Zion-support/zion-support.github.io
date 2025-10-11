'use client';
import React from 'react';
import React, { memo, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  Menu, 
  Home, 
  Users, 
  Settings, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  ChevronDown, 
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock;)
>>>>>>> main
} from 'lucide-react';
;
const Sidebar: React.FC = () => {const [isOpen, setIsOpen] = useState(false);
const [expandedSections, setExpandedSections] = useState<Set<string></Set>>(new Set(['ai-services', 'micro-saas', 'it-services']));
const location = useLocation();
=======
  Clock]
    } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1

      if (window.innerWidth >= 1024) {
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section)]
    } else {
      newExpanded.add(section)]
    }
    setExpandedSections(newExpanded)]
    };

  const navigationSections = [
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
    {
      title: 'Main',
      items: [
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
    {
      title: 'AI Services',
      key: 'ai-services',
      items: [
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
    {
      title: 'Micro SaaS',
      key: 'micro-saas',
      items: [
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
    {
      title: 'IT Services',
      key: 'it-services',
      items: [
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
  ];
;
const contactInfo = {
    phone: '(302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown, DE 19709',
  return (
    <React.Fragment>
      {/* Mobile Menu Button */}
      <button
        onClick={() =></button> setIsOpen(true);
        className="lg:hidden fixed top-4 left-4 z-50 bg-slate-800/90 backdrop-blur-lg text-white p-3 rounded-lg border border-cyan-400/20 hover:bg-slate-700/90 transition-all"
>>>>>>> main
        aria-label="Open sidebar"
      >
        <Menu className="w-6 h-6" 
      <

};
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b

Sidebar.displayName = 'Sidebar';

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
export default Sidebar;