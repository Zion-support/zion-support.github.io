import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {;
  MessageCircle,;
  X,;
  ArrowRight,;
  Phone,;
  Mail,;
  Calendar,;
  Clock,;
  Users,;
  Star,;
  Shield,;
  Brain,;
  Cloud,;
  Zap,;
  Globe,;
  Cpu,;
  Database,;
  Network,;
  Lock,;
  Code,;
  BarChart3,;
  FileImage,;
  TrendingUp,;
  Video,;
  FileText,;
  Heart,;
  ShoppingCart,;
  Settings,;
  HelpCircle,;
  BookOpen,;
  Briefcase,;
  Award,;
  Target,;
  Lightbulb,;
  ShieldCheck,;
  Server,;
  Smartphone,;
  Monitor,;
  Wifi,;
  Bluetooth,;
  Satellite,;
  Atom,;
  Dna,;
  Microscope,;
  Flask,;
  TestTube,;
  Syringe,;
  Stethoscope,;
  HeartPulse,;
  BrainCircuit,;
  Eye,;
  Ear,;
  Hand,;
  Foot,;
  Bone,;
  Tooth,;
  Pill,;
  Bandage,;
  Thermometer,;
  Scale,;
  Calculator,;
  ChartBar,;
  PieChart,;
  LineChart,;
  Activity,;
  TrendingDown,;
  Minus,;
  Plus,;
  Equal,;
  Divide,;
  Percent,;
  DollarSign,;
  Euro,;
  Pound,;
  Yen,;
  Bitcoin,;
  Ethereum,;
  CreditCard,;
  Wallet,;
  Banknote,;
  Coins,;
  PiggyBank,;
  Safe,;
  Vault,;
  LockKeyhole,;
  Key,;
  Fingerprint,;
  QrCode,;
  Barcode,;
  Scan,;
  Camera,;
  VideoOff,;
  Mic,;
  MicOff,;
  Volume2,;
  VolumeX;
} from "lucide-react"
export function FloatingCTA() {;
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <>;
      {/* Floating Action Button */};
      <motion.div
        className="[^"]*"
        initial={{ scale: 0 }};
        animate={{ scale: 1 }};
        transition={{ duration: 0.3, delay: 2 }};
      >;
        <div className="relative">;
          {/* Main Button */};
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)};
            className="[^"]*"
            whileHover={{ scale: 1.1 }};
            whileTap={{ scale: 0.9 }};
          >;
            {isExpanded ? '✕' : '💬'}
          </[^>]*>

          {/* Expanded Menu */};
          <AnimatePresence>;
            {isExpanded && (;&& (; (
              <motion.div
                className="[^"]*"
                initial={{ opacity: 0, scale: 0.8, y: 10 }};
                animate={{ opacity: 1, scale: 1, y: 0 }};
                exit={{ opacity: 0, scale: 0.8, y: 10 }};
                transition={{ duration: 0.2 }};
              >;
                <div className="space-y-3">;
                  <Link;
                    to="/contact"
                    className="[^"]*"
                    onClick={() => setIsExpanded(false)};
                  >;
                    <span className="text-xl">📞</[^>]*>
                    <div>;
                      <div className="font-semibold">Contact Us</[^>]*>
                      <div className="text-sm text-gray-400">Get in touch</[^>]*>
                    </[^>]*>
                  </[^>]*>
                  ;
                  <Link;
                    to="/services"
                    className="[^"]*"
                    onClick={() => setIsExpanded(false)};
                  >;
                    <span className="text-xl">🚀</[^>]*>
                    <div>;
                      <div className="font-semibold">Our Services</[^>]*>
                      <div className="text-sm text-gray-400">Explore solutions</[^>]*>
                    </[^>]*>
                  </[^>]*>
                  ;
                  <Link;
                    to="/quote"
                    className="[^"]*"
                    onClick={() => setIsExpanded(false)};
                  >;
                    <span className="text-xl">💰</[^>]*>
                    <div>;
                      <div className="font-semibold">Get Quote</[^>]*>
                      <div className="text-sm text-gray-400">Request pricing</[^>]*>
                    </[^>]*>
                  </[^>]*>
                  ;
                  <div className="border-t border-slate-600 pt-3">;
                    <div className="text-center text-sm text-gray-400 mb-2">;
                      Available 24/7;
                    </[^>]*>
                    <div className="flex items-center justify-center gap-2">;
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></[^>]*>
                      <span className="text-green-400 text-sm font-semibold">Online Now</[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            )};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Backdrop */};
      <AnimatePresence>;
        {isExpanded && (;&& (; (
          <motion.div
            className="[^"]*"
            initial={{ opacity: 0 }};
            animate={{ opacity: 1 }};
            exit={{ opacity: 0 }};
            onClick={() => setIsExpanded(false)};
          />;
        )};
      </[^>]*>
    </[^>]*>
  );
};