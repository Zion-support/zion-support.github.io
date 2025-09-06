  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,;


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
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {;
  Mail,;
  Phone,;
  MapPin,;
  Facebook,;
  Twitter,;
  Linkedin,;
  Instagram,;
  Github,;

} from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
import React from 'react';
