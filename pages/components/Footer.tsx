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
import MainLayout from '../../components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout
      title="Footer - Zion Tech Group"
      description="Footer component"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Footer</h1>
          <p className="text-xl text-gray-600">Footer component page</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
