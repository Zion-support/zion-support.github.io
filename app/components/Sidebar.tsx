import React, { memo, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['ai-services', 'micro-saas', 'it-services']));
  const location = useLocation();
    const handleResize = () => {
  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
  const navigationSections = [
  const contactInfo = {
export default Sidebar;