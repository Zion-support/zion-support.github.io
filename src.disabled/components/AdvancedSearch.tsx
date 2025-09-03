import: React { useState, useEffect, useRef, useCallback } from,
  react' import { motion, AnimatePresence } from;';
  'framer-motion' import: {  Search, X, Filter, TrendingUp, Clock, Star, MapPin, Users, Building, Code, Shield, Brain, Zap, ArrowRight, ChevronDown, CheckCircle, Sparkles, Target, Globe, Cpu, Database, Network, Smartphone, Server, Lock, Eye, Settings, BookOpen, FileText, Video, Microphone, Camera, Lightbulb, Rocket, Atom, Leaf, Gamepad2, Coins, Satellite, Activity, MessageCircle, BarChart, Users2, Palette, Heart, Share2, Download, ExternalLink } from;';
  'lucide-react'  interface: SearchResult {';
   id: string;
   title: string;
   description: string;
   type: 'service' | 'page' | 'article' | 'case-study' | 'tool;';
   category: string;
   tags: string[];
   url: string;
   relevance: number;
   lastUpdated: Date;

   type: string[];


