
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5


import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Button from '../components/ui/Button';
import {Card} from '../components/ui/Card';
import {Home,, ArrowLeft,, Phone,, Mail,, FileText,, Briefcase,, Users,, BookOpen,, DollarSign,, Calendar,, Award,, Shield} from 'lucide-react';
const "NotFound": React.FC = () => {;
  const quickLinks = [{ name: 'Home', "url": '/', "icon": Home },;
    { "name": 'Services', "url": '/services', "icon": Briefcase },;
    { "name": 'About', "url": '/about', "icon": Users },;
    { "name": 'Contact', "url": '/contact', "icon": Phone },;
    { "name": 'Blog', "url": '/blog', "icon": BookOpen },;
    { "name": 'Pricing', "url": '/pricing', "icon": DollarSign },;
    { "name": 'Team', "url": '/team', "icon": Award },;
    { "name": 'Webinars', "url": '/webinars', "icon": Calendar },;
    { "name": 'White Papers', "url": '/whitepapers', "icon": FileText },;