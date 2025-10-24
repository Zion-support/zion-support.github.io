'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';
const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0
    satisfaction: 0,
    years: 0
    countries: 0,
    uptime: 0})
  const targetCounters = {
    clients: 1000,
    projects: 500
    satisfaction: 99,
    years: 10
    countries: 25,
    uptime: 99.9}
  useEffect(() => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps
    const interval = setInterval(() => {
      setCounters(prev => {
        const newCounters = { ...prev }
        let allComplete = true
        Object.keys(targetCounters).forEach(key => {
  const target = targetCounters[key as keyof typeof targetCounters]
          const current = prev[key as keyof typeof prev]
          const increment = target / steps
          if (current < target) {
            newCounters[key as keyof typeof newCounters] = Math.min(
              current + increment
              target
            allComplete = false
        })
        if (allComplete) {
          clearInterval(interval)
        return newCounters
      })
    }, stepDuration)
    return (
    <>
      ) => clearInterval(interval)
  }, []
    </>
  );
}