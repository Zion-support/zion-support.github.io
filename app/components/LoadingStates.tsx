'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

interface LoadingStatesProps {
  className?: string;
}

const LoadingStates: React.FC<LoadingStatesProps> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">
        LoadingStates
      </h2>
      <p className="text-gray-600">
        This component is under construction.
      </p>
    </div>
  );
};

export default LoadingStatesPage;
