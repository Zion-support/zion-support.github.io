import React from 'react';
import Navigation from './Navigation';
const Header: React.FC = () => {
const Header: React.FC = () => {
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown, Brain, Cloud, Shield, Code, Users, Briefcase, BookOpen, MessageSquare, Target, Zap, Stethoscope, CreditCard, FileText, BarChart, Atom, Bot, Link as LinkIcon, Smartphone, Settings, Eye, Activity } from 'lucide-react';
const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigation = {
  const isActive = (path: string) => location.pathname === path;
export default Header;