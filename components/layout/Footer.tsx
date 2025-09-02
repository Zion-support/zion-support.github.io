<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
=======
React from
  'react';
import { Link } from
  'react-router-dom';'import { ;'  Brain, Mail,
  Phone, MapPin,
  Linkedin, Twitter,
  Github, Youtube,
  Instagram, ArrowRight,
  Heart, Globe,
  Shield, Users,
  Award, Star,
  Zap, Cloud,
  Database, Network,
  Target, CheckCircle,
  ExternalLink
} from
  'lucide-react';'{ Button } from
  '../ui/Button';
import { Badge } from
  '../ui/Badge';''const Footer: React.FC = () => {const currentYear = new Date().getFullYear();
>>>>>>> origin/main

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © 2025 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;