import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, Users, Shield, Clock, TrendingUp, BarChart3, Database, Smartphone, Globe, Target, Lightbulb, Rocket, Award, Phone, Mail, MapPin, Zap, Code, Eye, MessageSquare, Cpu, Network, FileText, Settings, CreditCard, Lock, Cloud, Wifi, Monitor, Server, Key, Search, Filter, Download, Upload, Share, Edit, Trash, Plus, Minus, Refresh, Play, Pause, Stop, SkipBack, SkipForward, RotateCcw, RotateCw, Shuffle, Repeat, Repeat1, Shuffle2, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Diamond, Star as StarIcon, Moon, Sun, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Timer, Stopwatch, Hourglass } from 'lucide-react';

const PageComponent: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Financial Analytics Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered financial analytics platform for comprehensive business intelligence and predictive insights." />
        <meta name="keywords" content="technology, solutions, services" />
        <meta property="og:title" content="AI Financial Analytics Pro - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI-powered financial analytics platform for comprehensive business intelligence and predictive insights." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Financial Analytics Pro - Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered financial analytics platform for comprehensive business intelligence and predictive insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageComponent;