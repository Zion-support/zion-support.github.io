      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"></div>
          <div className="text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI-Powered Micro SAAS</h1><p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">Transform your business with our comprehensive suite of AI-powered Micro SAAS solutions.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
            </p>
          </div>
        </div>
      </div>,
    </>,
  ),
},

export default MicroSaasPage,
import React, { useState, useMemo } from 'react',
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, FileText, Calendar, PieChart, TrendingDown, Activity, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot } from 'lucide-react',
import { Link } from 'react-router-dom';
'use client',

import React, { useState, useMemo } from 'react',
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, CheckCircle, DollarSign, Award, Lock, Download, Play, Code, Database, Cloud, Smartphone, Settings, FileText, Calendar, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, ExternalLink, ChevronRight, Crown, Rocket, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, Building, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot, Search as SearchIcon, FileText as FileTextIcon } from 'lucide-react',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233

const MicroSAASPage: React.FC = () => {
const [searchTerm, setSearchTerm] = useState(''),
const [selectedCategory, setSelectedCategory] = useState('all'),
const [sortBy, setSortBy] = useState('popularity'),

const microSAASServices = [
    },
    {
      id: 'inventory-manager',
      name: 'Smart Inventory Manager',
    }
  ],

const categories = [
  ],

const filteredServices = useMemo(() => {
    let filtered = microSAASServices,

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory),
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }

    // Sort services
    switch (sortBy) {
      case 'price-low':
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating),
      case 'users':
        return filtered.sort((a, b) => b.users - a.users),
      default:
        return filtered,
    }
  }, [searchTerm, selectedCategory, sortBy]),

  return (
    <>
      <Helmet>
            </div>
          </div>
        </div>
      </div>
    
  ),
},

export default MicroSAASPage,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
