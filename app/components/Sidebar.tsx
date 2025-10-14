<<<<<<< HEAD
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  PhoneIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CogIcon,
  ChevronDownIcon,
  GlobeAltIcon,
  CloudIcon,
  CpuChipIcon,
  SignalIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
interface SidebarProps {
  isOpen: "boolean;",onClose: "() => void;"
}

const Sidebar: "React.FC<SidebarProps> = ({ isOpen", onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const location = useLocation();

  const navigation = [
    { name: "'Home'", href: "'/'", icon: "HomeIcon"},'
    { name: "'About'", href: "'/about'", icon: "InformationCircleIcon"},'
    { 
      name: "'Services'",'
      href: "'/services'",'
      icon: "BriefcaseIcon",
      submenu: [
        { name: "'AI Services'", href: "'/ai-services'", icon: "CpuChipIcon"},'
        { name: "'IT Services'", href: "'/it-services'", icon: "CogIcon"},'
        { name: "'Cloud Infrastructure'", href: "'/cloud-infrastructure'", icon: "CloudIcon"},'
        { name: "'Cybersecurity'", href: "'/cybersecurity'", icon: "ShieldCheckIcon"}'
      ]
    },
    { 
      name: "'Solutions'",'
      href: "'/solutions'",'
      icon: "CogIcon",
      submenu: [
        { name: "'AI Solutions'", href: "'/ai-solutions'", icon: "CpuChipIcon"},'
        { name: "'Cybersecurity'", href: "'/cybersecurity'", icon: "ShieldCheckIcon"},'
        { name: "'Cloud Infrastructure'", href: "'/cloud-solutions'", icon: "CloudIcon"},'
        { name: "'Digital Transformation'", href: "'/digital-transformation'", icon: "CogIcon"},'
        { name: "'Micro SaaS'", href: "'/micro-saas'", icon: "GlobeAltIcon"},'
        { name: "'5G Solutions'", href: "'/5g-solutions'", icon: "SignalIcon"}'
      ]
    },
    { name: "'Blog'", href: "'/blog'", icon: "DocumentTextIcon"},'
    { name: "'Tutorials'", href: "'/tutorials'", icon: "AcademicCapIcon"},'
    { name: "'Demo'", href: "'/demo'", icon: "PlayIcon"},'
    { name: "'Support'", href: "'/support'", icon: "QuestionMarkCircleIcon"},'
    { name: "'Pricing'", href: "'/pricing'", icon: "CurrencyDollarIcon"},'
    { name: "'Contact'", href: "'/contact'", icon: "PhoneIcon"}'
  ];

  const additionalLinks = [
    { name: "'Privacy Policy'", href: "'/privacy'", icon: "ShieldCheckIcon"},'
    { name: "'Terms of Service'", href: "'/terms'", icon: "DocumentTextIcon"},'
    { name: "'Our Team'", href: "'/team'", icon: "UserGroupIcon"},'
    { name: "'Documentation'", href: "'/docs'", icon: "DocumentTextIcon"},'
    { name: "'Careers'", href: "'/careers'", icon: "BriefcaseIcon"}'
  ];

  const isActive = (path: "string) => {;"
    return location.pathname === path;
  };

  const toggleSection = (sectionName: "string) => {"
    setExpandedSections(prev => 
      prev.includes(sectionName);
        ? prev.filter(name => name !== sectionName);
        : [...prev, sectionName];
    );
  };

  const isExpanded = (sectionName: "string) => {;"
    return expandedSections.includes(sectionName);
  };

  if (!isOpen) return null;
=======
import React from "react";
>>>>>>> origin/main

const Sidebar = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Sidebar</h2>
      <p>This component is under construction.</p>
    </div>
  );
};

export default Sidebar;