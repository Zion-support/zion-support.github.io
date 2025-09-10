import React, { useState, useEffect } from "react";
import { _Link, useLocation } from "react-router-dom";
import { _Menu, X, Phone, Mail, MapPin, ChevronDown, Search, User, ShoppingCart } from "lucide-react";
import { _motion, AnimatePresence } from "framer-motion";

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const _location = useLocation();
  useEffect(() => {
    const _handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);