import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Github, 
  Heart, 
  ArrowUp 
} from 'lucide-react';
import { FooterNewsletter } from './FooterNewsletter';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

const Footer: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">Footer</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default Footer;
