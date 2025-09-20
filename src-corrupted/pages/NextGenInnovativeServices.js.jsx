import React, {useState, useMemo} from 'react';
import {motion} from 'framer-motion';
import {Search, Filter, Grid, List, ExternalLink, Phone, Mail, Globe, Clock, Users, CheckCircle, TrendingUp, Award} from 'lucide-react';
import {NEXT_GEN_INNOVATIVE_SERVICES} from "../data/nextGenInnovativeServices";
export default function NextGenInnovativeServices
export {NextGenInnovativeServices}() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedService, setSelectedService] = useState(null);
    const [viewMode, setViewMode] = useState('grid');
    // Get unique categories
    const categories = useMemo(() => ['all', ...Array.from(new Set(NEXT_GEN_INNOVATIVE_SERVICES.map(s => s.category)))], []);
    // Filter services based on search and category
    const filteredServices = useMemo(() => {
        return NEXT_GEN_INNOVATIVE_SERVICES.filter(service => {
            const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
            return matchesCategory && matchesSearch})}, [searchTerm, selectedCategory]);
    const formatPrice = (props: any) => {
        return `${currency}${price.toLocaleString()}`};
    const getSupportLevelColor = (props: any) => {
        switch (level.toLowerCase()) {
            case 'enterprise': return 'bg-purple-600';
            case 'premium': return 'bg-blue-600';
            case 'standard': return 'bg-green-600';
            default: return 'bg-gray-600'}
    };
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const itemVariants = {
  hidden: { y: 20,
  opacity: 0 

},
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };
    return (<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div initial = {
  { opacity: 0,
  y: 20 

}} animate = {
  { opacity: 1,
  y: 0 

}} transition={{ duration: 0.8 }} className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Next-Generation Innovative Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our cutting-edge AI-powered solutions across industries. 
              Transform your business with services that leverage the latest advancements in artificial intelligence.
            </p>
            
            {/* Service Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-blue-400/30">
                <div className="text-3xl font-bold text-blue-400 mb-2">{NEXT_GEN_INNOVATIVE_SERVICES.length}</div>
                <div className="text-gray-300">Innovative Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-400/30">
                <div className="text-3xl font-bold text-purple-400 mb-2">{categories.length - 1}</div>
                <div className="text-gray-300">Technology Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/30">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Expert Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-green-400/30">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-blue-400/30">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Ready to Transform Your Business?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-blue-400 text-2xl mb-2">📱</div>
                  <p className="font-semibold">Mobile</p>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                <div>
                  <div className="text-purple-400 text-2xl mb-2">✉️</div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div>
                  <div className="text-cyan-400 text-2xl mb-2">🌐</div>
                  <p className="font-semibold">Website</p>
                  <p className="text-gray-300">https://ziontechgroup.com</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-300">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default NextGenInnovativeServices.js;