import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import {
  Target, Brain, Rocket, Shield, Zap, Atom, Cpu
  Lock, Cloud, Settings, Eye, Award, Clock, Heart
  Lightbulb, Search, Grid, List, TrendingUp
  User, ShoppingCart, Bell, HelpCircle, FileText
  Video, Headphones, Code, Database, Network, Server
  Monitor, Smartphone, Camera, Gamepad2, Palette
  Music, Film, BookOpenCheck, Building, MessageCircle
  Sparkles, ArrowRight, CheckCircle, Star, Globe, Briefcase, BarChart3
} from 'lucide-react'
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import { expandedMicroSaasServices } from '../data/expanded-micro-saas-services';
import React from 'react',
import Layout from '../components / layout / Layout',
import SEO from '../components / SEO',
import { motion } from 'framer-motion',
import {
  Target, Brain, Rocket, Shield, Zap, Atom, Cpu,
  Lock, Cloud, Settings, Eye, Award, Clock, Heart,
  Lightbulb, Search, Grid, List, TrendingUp,
  User, ShoppingCart, Bell, HelpCircle, FileText,
  Video, Headphones, Code, Database, Network, Server,
  Monitor, Smartphone, Camera, Gamepad2, Palette,
  Music, Film, BookOpenCheck, Building, MessageCircle,
  Sparkles, ArrowRight, CheckCircle, Star, Globe, Briefcase, BarChart3;
} from 'lucide-react',
import UltraAdvancedFuturisticBackground from '../components / ui / UltraAdvancedFuturisticBackground',
import { expandedMicroSaasServices } from '../data / expanded - micro - saas - services',
const Solutions: NextPage = () => {
  const industry_solutions = [;
    {
        {/* Hero Section */}
        <section className="min - h-[60vh] flex items - center justify - center px - 4 py - 20">;
          <div className="text - center max - w-4xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
        {/* Solution Capabilities */}
        <section className="py - 20 px - 4 bg - gradient - to - b from - black to - gray - 900">;
          <div className="max - w-6xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
                  key={capability.title}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg - gradient - to - br from - gray - 800 to - gray - 900 p - 6 rounded - xl border border - gray - 700 hover:border - orange - 500 transition - all duration - 300";
                >;
                  <div className="flex items - center mb - 4">;
                    <div className="p - 2 bg - orange - 500 / 20 rounded - lg mr - 3">;
                      {capability.icon}
        {/* Industry Solutions */}
        <section className="py - 20 px - 4">;
          <div className="max - w-6xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
                  key={solution.id}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  }`}
                >;
                  {solution.popular && (
                      {solution.icon}
                    </div>;
                    <h3 className="text - 2xl font - bold text - white mb - 2">{solution.name}</h3>;
                    <p className="text - gray - 300 mb - 4">{solution.description}</p>;
                    <div className="text - 3xl font - bold text - orange - 400 mb - 2">;
                      {solution.price}
        {/* CTA Section */}
        <section className="py - 20 px - 4 bg - gradient - to - b from - gray - 900 to - black">;
          <div className="max - w-4xl mx - auto text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
export default Solutions;

            >;
              <h2 className="text - 4xl md: text - 5xl font - bold mb - 6 bg - gradient - to - r from - orange - 400 to - red - 500 bg - clip - text text - transparent">;
                Ready for Industry Transformation?;
              </h2>;
              <p className="text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto">;
                Partner with us to build industry - specific solutions that drive your business forward;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <a;
                  href="/contact";
                  className="px - 8 py - 4 bg - gradient - to - r from - orange - 500 to - red - 600 text - white font - semibold rounded - lg hover:from - orange - 600 hover:to - red - 700 transition - all duration - 300 transform hover:scale - 105";
                >;
                  Start Your Transformation;
                </a>;
                <a;
                  href="/contact";
                  className="px - 8 py - 4 border - 2 border - orange - 400 text - orange - 400 font - semibold rounded - lg hover:bg - orange - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105";
                >;
                  Schedule Consultation;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </UltraAdvancedFuturisticBackground>);
},
export default Solutions,
;
