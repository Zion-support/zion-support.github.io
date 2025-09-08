
import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
  Home,
  ArrowLeft,
  Phone,
  Mail,
  FileText,
  Briefcase,
  Users,
  BookOpen,
  DollarSign,
  Calendar,
  Award,
  Shield} from 'lucide-react';
const "NotFound": NextPage = () => {
  const quickLinks = [{ name: 'Home', "url": '/', "icon": Home },
    { "name": 'Services', "url": '/services', "icon": Briefcase },
    { "name": 'About', "url": '/about', "icon": Users },
    { "name": 'Contact', "url": '/contact', "icon": Phone },
    { "name": 'Blog', "url": '/blog', "icon": BookOpen },
    { "name": 'Pricing', "url": '/pricing', "icon": DollarSign },
    { "name": 'Team', "url": '/team', "icon": Award },
    { "name": 'Webinars', "url": '/webinars', "icon": Calendar },
    { "name": 'White Papers', "url": '/whitepapers', "icon": FileText },
    { "name": 'Solutions', "url": '/solutions', "icon": Award },
    { "name": 'Careers', "url": '/careers', "icon": Briefcase },
    { "name": 'Help Center', "url": '/support', "icon": FileText },
