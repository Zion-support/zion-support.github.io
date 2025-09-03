<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  Zap, 
  Activity, 
  BarChart3, 
  Database, 
  Users, 
  ArrowUpRight, 
  ArrowDownRight 
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
=======
<<<<<<< HEAD
import React from 'react'; interface PerformanceMetric { id: string; name: string; value: number; unit: string; change: number; changeType: "increase" | "decrease"; target: number; status: "excellent" | "good" | "warning" | "critical"; icon: React.ComponentType<any>; description: string; } interface PerformanceMetricsProps { // Add your props here title?: string; subtitle?: string; showCharts?: boolean; autoRefresh?: boolean; const EnhancedPerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ title = "Real-Time Performance Metrics", " subtitle = "Monitor your system&quot;s performance with live data and intelligent insights", showCharts = true, autoRefresh = true; }) => { const [metrics, setMetrics] = useState<PerformanceMetric[]>([ { id: "response-time", name: "Response Time", value: 127, unit: "ms", change: -12.5, changeType: "decrease", target: 150, status: "excellent", icon: Clock, description: "Average API response time across all endpoints" }, { id: "throughput", name: "Throughput", value: 15420, unit: "req/s", change: 8.3, changeType: "increase", target: 12000, status: "excellent", icon: Zap, description: "Requests processed per second" }, { id: "error-rate", name: "Error Rate", value: 0.23, unit: "%", change: -15.2, changeType: "decrease", target: 1.0, status: "excellent", icon: Activity, description: "Percentage of failed requests" }, { id: "cpu-usage", name: "CPU Usage", value: 67.8, unit: "%", change: 5.1, changeType: "increase", target: 80, status: "good", icon: BarChart3, description: "Current CPU utilization across all cores" }, { id: "memory-usage", name: "Memory Usage", value: 82.3, unit: "%", change: 2.8, changeType: "increase", target: 85, status: "warning", icon: Database, description: "RAM utilization percentage" }, { id: "active-users", name: "Active Users", value: 1247, unit: ", change: 12.4, changeType: "increase", target: 1000, status: "excellent", icon: Users, description: "Concurrent users currently online" } ]); const [selectedMetric, setSelectedMetric] = useState<string | null>(null); const [timeRange, setTimeRange] = useState<"1h" | "6h" | "24h" | "7d">("1h"); useEffect(: unknown { if (!autoRefresh) return; const interval = setInterval(: unknown { setMetrics(prevMetrics => prevMetrics.map(metric => ({ ...metric, value: metric.value + (Math.random() - 0.5) * metric.value * 0.1, change: metric.change + (Math.random() - 0.5) * 2 })) ); }, 5000); return : unknown clearInterval(interval); }, [autoRefresh]); const getStatusColor = (status: string) => { switch (status) { case "excellent": return "text-green-500 bg-green-100"; case "good": return "text-blue-500 bg-blue-100"; case "warning": return "text-yellow-500 bg-yellow-100"; case "critical": return "text-red-500 bg-red-100"; default: return "text-gray-500 bg-gray-100"; } }; const getChangeIcon = (changeType: string) => { return changeType === "increase" ? ArrowUpRight : ArrowDownRight; }; const getChangeColor = (changeType: string) => { return changeType === "increase" ? "text-green-600" : "text-red-600"; }; const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2}}}; const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5, " ease: "easeOut"}}}; return (" <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">" <div className="container mx-auto px-4"> <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}" className="text-center mb-16" >" <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"> {title} </h2>" <p className="text-xl text-gray-600 max-w-3xl mx-auto"> {subtitle} </p> </motion.div> {/* Time Range Selector */} <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}" className="flex justify-center mb-12" >" <div className="bg-white rounded-2xl shadow-lg p-2 border border-gray-200"> {(["1h",6h", 24h",7d"] as const).map((range) => ( <button key={range} onClick={(: unknown setTimeRange(range)} className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${ timeRange === range" ? "bg-blue-600 text-white shadow-lg" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"` }`} > {range} </button> ))} </div> </motion.div> {/* Metrics Grid */} <motion.div variants={containerVariants}" initial="hidden" whileInView="visible" viewport={{ once: true }}" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" > {metrics.map((metric) => { const IconComponent = metric.icon; const ChangeIcon = getChangeIcon(metric.changeType); return() <motion.div key={metric.id} variants={itemVariants} whileHover={{ scale: 1.02, y: -5 }}" className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={() => setSelectedMetric(selectedMetric === metric.id ? null : metric.id)} >" <div className="flex items-center justify-between mb-4">` <div className={`w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center`}>" <IconComponent className="w-6 h-6 text-blue-600" /> </div>` <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.status)}`}> {metric.status} </div> </div> " <h3 className="text-lg font-semibold text-gray-900 mb-2"> {metric.name} </h3> " <div className="flex items-end gap-2 mb-3">" <span className="text-3xl font-bold text-gray-900"> {typeof metric.value === "number" && metric.value % 1 !== 0 ? metric.value.toFixed(1) : Math.round(metric.value) } </span>" <span className="text-lg text-gray-600 mb-1"> {metric.unit} </span> </div> " <div className="flex items-center gap-2 mb-4">` <ChangeIcon className={`w-4 h-4 ${getChangeColor(metric.changeType)}`} />` <span className={`text-sm font-medium ${getChangeColor(metric.changeType)}`}> {Math.abs(metric.change).toFixed(1)}% </span>" <span className="text-sm text-gray-500">vs last period</span> </div> " <div className="text-sm text-gray-600 mb-4"> {metric.description} </div> {/* Progress Bar */}" <div className="mb-4">" <div className="flex justify-between text-sm text-gray-600 mb-1"> <span>Current</span> <span>Target: {metric.target}{metric.unit}</span> </div>" <div className="w-full bg-gray-200 rounded-full h-2"> <div ` className={`h-2 rounded-full transition-all duration-500 ${ metric.value / metric.target > 0.9 ? "bg-red-500" :" metric.value / metric.target > 0.7 ? "bg-yellow-500" : "bg-green-500"` }`}` style={{ width: `${Math.min((metric.value / metric.target) * 100, 100)}%` }} /> </div> </div> {/* Expanded View */} <AnimatePresence> {selectedMetric === metric.id && ( <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}" className="mt-4 pt-4 border-t border-gray-200" >" <div className="space-y-3">" <div className="flex justify-between text-sm">" <span className="text-gray-600">Min</span>" <span className="font-medium">{(metric.value * 0.8).toFixed(1)}</span> </div>" <div className="flex justify-between text-sm">" <span className="text-gray-600">Max</span>" <span className="font-medium">{(metric.value * 1.2).toFixed(1)}</span> </div>" <div className="flex justify-between text-sm">" <span className="text-gray-600">Trend</span>` <span className={`font-medium ${getChangeColor(metric.changeType)}`}> {metric.changeType === "increase" ? "" : ""} </span> </div> </div> </motion.div> )} </AnimatePresence> </motion.div> ); })} </motion.div> {/* Summary Stats */} <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}" className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center" >" <h3 className="text-2xl font-bold mb-4"> Performance Summary </h3>" <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> <div>" <div className="text-3xl font-bold mb-2"> {metrics.filter(m => m.status === "excellent").length} </div>" <div className="text-blue-100">Excellent Metrics</div> </div> <div>" <div className="text-3xl font-bold mb-2"> {metrics.filter(m => m.changeType === "decrease").length} </div>" <div className="text-blue-100">Improving</div> </div> <div>" <div className="text-3xl font-bold mb-2"> {Math.round(metrics.reduce((acc, m) => acc + m.value, 0) / metrics.length)} </div>" <div className="text-blue-100">Avg Performance</div> </div> </div> </motion.div> </div> </section> ); }; export default EnhancedPerformanceMetrics;"` "
=======
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
<<<<<<< HEAD
>>>>>>> main
  Clock,
  Zap,
  Activity,
  BarChart3,
  Database,
  Users,
  ArrowUpRight,
<<<<<<< HEAD
  ArrowDownRight
=======
  ArrowDownRight'
=======
  Clock, Zap,
  Activity, BarChart3,
  Database, Users,
  ArrowUpRight, ArrowDownRight
>>>>>>> main
>>>>>>> main
>>>>>>> main
} from 'lucide-react';

interface PerformanceMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  change: number;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
  changeType: "increase" | "decrease";
  target: number;
  status: "excellent" | "good" | "warning" | "critical";
  icon: React.ComponentType<any>;
  description: string;
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
  changeType: "increase" | "decrease";
  target: number;
  status: "excellent" | "good" | "warning" | "critical";
=======
  changeType: 'increase' | 'decrease';
  target: number;
  status: 'excellent' | 'good' | 'warning' | 'critical';
<<<<<<< HEAD
  ico,
    n: React.ComponentType<any>;
  descriptio,
    n: string;
=======
>>>>>>> main
  icon: React.ComponentType<any>;
  description: string;
>>>>>>> main
>>>>>>> main
>>>>>>> main
}

interface PerformanceMetricsProps {
  title?: string;
  subtitle?: string;
  showCharts?: boolean;
  autoRefresh?: boolean;
}

<<<<<<< HEAD
const EnhancedPerformanceMetrics: React.FC<PerformanceMetricsProps> = ({
  title = "Real-Time Performance Metrics",
  subtitle = "Monitor your system's performance with live data and intelligent insights",
=======
<<<<<<< HEAD
const EnhancedPerformanceMetrics: React.FC<PerformanceMetricsProps> = ({
  title = "Real-Time Performance Metrics",
  subtitle = "Monitor your system's performance with live data and intelligent insights",
=======
<<<<<<< HEAD
const EnhancedPerformanceMetrics: React.FC<PerformanceMetricsProps> = ({'
=======
const EnhancedPerformanceMetrics: React.FC<PerformanceMetricsProps> = ({
<<<<<<< HEAD
  title = 'Real-Time Performance Metrics', subtitle = 'Monitor your system\'s performance with live data and intelligent insights','
  showCharts = true, autoRefresh = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([
    {
      id: 'response-time', name: 'Response Time',
      value: 127, unit: 'ms',
      change: -12.5, changeType: 'decrease',
      target: 150, status: 'excellent',
      icon: Clock, description: 'Average API response time across all endpoints'
=======
<<<<<<< HEAD
  title = "Real-Time Performance Metrics",
  subtitle = "Monitor your system's performance with live data and intelligent insights",
=======
>>>>>>> main
  title = 'Real-Time Performance Metrics',
  subtitle = 'Monitor your system\'s performance with live data and intelligent insights',
>>>>>>> main
>>>>>>> main
>>>>>>> main
  showCharts = true,
  autoRefresh = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([
<<<<<<< HEAD
    {
=======
<<<<<<< HEAD
    {
=======
<<<<<<< HEAD
    {'
=======
    {
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
      id: "response-time",
      name: "Response Time",
      value: 127,
      unit: "ms",
      change: -12.5,
      changeType: "decrease",
      target: 150,
      status: "excellent",
      icon: Clock,
      description: "Average API response time across all endpoints"
    },
    {
      id: "throughput",
      name: "Throughput",
      value: 15420,
      unit: "req/s",
      change: 8.3,
      changeType: "increase",
      target: 12000,
      status: "excellent",
      icon: Zap,
      description: "Requests processed per second"
    },
    {
      id: "error-rate",
      name: "Error Rate",
      value: 0.23,
      unit: "%",
      change: -15.2,
      changeType: "decrease",
      target: 1.0,
      status: "excellent",
      icon: Activity,
      description: "Percentage of failed requests"
    },
    {
      id: "cpu-usage",
      name: "CPU Usage",
      value: 67.8,
      unit: "%",
      change: 5.1,
      changeType: "increase",
      target: 80,
      status: "good",
      icon: BarChart3,
      description: "Current CPU utilization across all cores"
    },
    {
      id: "memory-usage",
      name: "Memory Usage",
      value: 82.3,
      unit: "%",
      change: 2.8,
      changeType: "increase",
      target: 85,
      status: "warning",
      icon: Database,
      description: "RAM utilization percentage"
    },
    {
      id: "active-users",
      name: "Active Users",
      value: 1247,
      unit: "",
      change: 12.4,
      changeType: "increase",
      target: 1000,
      status: "excellent",
      icon: Users,
      description: "Concurrent users currently online"
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> main
      id: 'response-time',
      name: 'Response Time',
      value: 127,
      unit: 'ms',
      change: -12.5,
      changeType: 'decrease',
      target: 150,
      status: 'excellent',
      icon: Clock,
      description: 'Average API response time across all endpoints'
>>>>>>> main
    },
<<<<<<< HEAD
    {'
      id: 'throughput',
      name: 'Throughput',
      value: 15420,
      unit: 'req/s',
      change: 8.3,
      changeType: 'increase',
      target: 12000,
      status: 'excellent',
      icon: Zap,
      description: 'Requests processed per second'
    },
    {'
      id: 'error-rate',
      name: 'Error Rate',
      value: 0.23,
      unit: '%',
      change: -15.2,
      changeType: 'decrease',
      target: 1.0,
      status: 'excellent',
      icon: Activity,
      description: 'Percentage of failed requests'
    },
    {'
      id: 'cpu-usage',
      name: 'CPU Usage',
      value: 67.8,
      unit: '%',
      change: 5.1,
      changeType: 'increase',
      target: 80,
      status: 'good',
      icon: BarChart3,
      description: 'Current CPU utilization across all cores'
    },
    {'
      id: 'memory-usage',
      name: 'Memory Usage',
      value: 82.3,
      unit: '%',
      change: 2.8,
      changeType: 'increase',
      target: 85,
      status: 'warning',
      icon: Database,
      description: 'RAM utilization percentage'
    },
    {'
=======
    {
      id: 'throughput', name: 'Throughput',
      value: 15420, unit: 'req/s',
      change: 8.3, changeType: 'increase',
      target: 12000, status: 'excellent',
      icon: Zap, description: 'Requests processed per second'
    },
    {
      id: 'error-rate', name: 'Error Rate',
      value: 0.23, unit: '%',
      change: -15.2, changeType: 'decrease',
      target: 1.0, status: 'excellent',
      icon: Activity, description: 'Percentage of failed requests'
    },
    {
      id: 'cpu-usage', name: 'CPU Usage',
      value: 67.8, unit: '%',
      change: 5.1, changeType: 'increase',
      target: 80, status: 'good',
      icon: BarChart3, description: 'Current CPU utilization across all cores'
    },
    {
      id: 'memory-usage', name: 'Memory Usage',
      value: 82.3, unit: '%',
      change: 2.8, changeType: 'increase',
      target: 85, status: 'warning',
      icon: Database, description: 'RAM utilization percentage'
    },
    {
<<<<<<< HEAD
      id: 'active-users', name: 'Active Users',
      value: 1247, unit: '',
      change: 12.4, changeType: 'increase',
      target: 1000, status: 'excellent',
      icon: Users, description: 'Concurrent users currently online'
=======
>>>>>>> main
      id: 'active-users',
      name: 'Active Users',
      value: 1247,
      unit: '',
      change: 12.4,
      changeType: 'increase',
      target: 1000,
      status: 'excellent',
      icon: Users,
      description: 'Concurrent users currently online'
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
    }
  ]);

  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);
<<<<<<< HEAD
  const [timeRange, setTimeRange] = useState<"1h" | "6h" | "24h" | "7d">("1h");
=======
<<<<<<< HEAD
  const [timeRange, setTimeRange] = useState<"1h" | "6h" | "24h" | "7d">("1h");
=======
<<<<<<< HEAD
  const [timeRange, setTimeRange] = useState<"1h" | "6h" | "24h" | "7d">("1h");
=======
  const [timeRange, setTimeRange] = useState<'1h' | '6h' | '24h' | '7d'>('1h');
>>>>>>> main
>>>>>>> main
>>>>>>> main

  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      setMetrics(prevMetrics =>
        prevMetrics.map(metric => ({
<<<<<<< HEAD
          ...metric,
          value: metric.value + (Math.random() - 0.5) * metric.value * 0.1,
          change: metric.change + (Math.random() - 0.5) * 2
=======
<<<<<<< HEAD
          ...metric,
          value: metric.value + (Math.random() - 0.5) * metric.value * 0.1,
          change: metric.change + (Math.random() - 0.5) * 2
=======
          ...metric, value: metric.value + (Math.random() - 0.5) * metric.value * 0.1, change: metric.change + (Math.random() - 0.5) * 2
>>>>>>> main
>>>>>>> main
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [autoRefresh]);

  const getStatusColor = (status: string) => {
<<<<<<< HEAD
    switch (status) {
      case "excellent": return "text-green-500 bg-green-100";
      case "good": return "text-blue-500 bg-blue-100";
      case "warning": return "text-yellow-500 bg-yellow-100";
      case "critical": return "text-red-500 bg-red-100";
      default: return "text-gray-500 bg-gray-100";
=======
<<<<<<< HEAD
    switch (status) {
=======
<<<<<<< HEAD
    switch (status) {'
      case 'excellent':'
=======
    switch (status) {
<<<<<<< HEAD
      case 'excellent': return 'text-green-500 bg-green-100';
      case 'good': return 'text-blue-500 bg-blue-100';
      case 'warning': return 'text-yellow-500 bg-yellow-100';
      case 'critical': return 'text-red-500 bg-red-100';
      default: return 'text-gray-500 bg-gray-100';
=======
<<<<<<< HEAD
>>>>>>> main
      case "excellent":
        return "text-green-500 bg-green-100";
      case "good":
        return "text-blue-500 bg-blue-100";
      case "warning":
        return "text-yellow-500 bg-yellow-100";
      case "critical":
        return "text-red-500 bg-red-100";
      default:
        return "text-gray-500 bg-gray-100";
<<<<<<< HEAD
>>>>>>> main
    }
  };

  const getChangeIcon = (changeType: string) => {
<<<<<<< HEAD
=======
=======
=======
      case 'excellent':
>>>>>>> main
        return 'text-green-500 bg-green-100';
      case 'good':'
        return 'text-blue-500 bg-blue-100';
      case 'warning':'
        return 'text-yellow-500 bg-yellow-100';
      case 'critical':'
        return 'text-red-500 bg-red-100';
      defaul,
    t:'
        return 'text-gray-500 bg-gray-100';
>>>>>>> main
>>>>>>> main
    }
  };

<<<<<<< HEAD
  const getChangeIcon = (changeType: string) => {'
=======
  const getChangeIcon = (changeType: string) => {
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
    return changeType === "increase" ? ArrowUpRight : ArrowDownRight;
  };

  const getChangeColor = (changeType: string) => {
    return changeType === "increase" ? "text-green-600" : "text-red-600";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
<<<<<<< HEAD
=======
=======
=======
>>>>>>> main
    return changeType === 'increase' ? ArrowUpRight : ArrowDownRight;
  };

  const getChangeColor = (changeType: string) => {'
    return changeType === 'increase' ? 'text-green-600' : 'text-red-600';
>>>>>>> main
  };

  const containerVariants = {
<<<<<<< HEAD
    hidden: { opacit,
    y: 0 },
    visible: {
      opacit,
    y: 1,
      transition: {
        staggerChildre,
    n: 0.1,
        delayChildren: 0.2
=======
    hidden: { opacity: 0 }, visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, delayChildren: 0.2
>>>>>>> main
>>>>>>> main
>>>>>>> main
      }
    }
  };

  const itemVariants = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
<<<<<<< HEAD
=======
=======
    hidden: { ,
    y: 20, opacity: 0 },
    visible: {
<<<<<<< HEAD
      ,
    y: 0,
      opacity: 1,
      transition: {
        duratio,
    n: 0.5,
=======
      y: 0, opacity: 1,
      transition: {
<<<<<<< HEAD
        duration: 0.5, ease: 'easeOut'
=======
        duration: 0.5,
<<<<<<< HEAD
        ease: "easeOut"
=======
>>>>>>> main
        ease: 'easeOut'
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
      }
    }
  };

<<<<<<< HEAD
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
=======
<<<<<<< HEAD
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
=======
  return ('
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">"
>>>>>>> main
>>>>>>> main
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
<<<<<<< HEAD
=======
=======
          viewport={{ once: true }}"
          className="text-center mb-16"
        >"
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>"
>>>>>>> main
>>>>>>> main
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Time Range Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-2xl shadow-lg p-2 border border-gray-200">
            {(["1h", "6h", "24h", "7d"] as const).map((range) => (
<<<<<<< HEAD
=======
=======
          viewport={{ once: true }}"
          className="flex justify-center mb-12"
<<<<<<< HEAD
        >"
          <div className="bg-white rounded-2xl shadow-lg p-2 border border-gray-200">"
            {(['1h', '6h', '24h', '7d'] as const).map((range) => (
=======
        >
          <div className="bg-white rounded-2xl shadow-lg p-2 border border-gray-200">
<<<<<<< HEAD
            {(["1h", "6h", "24h", "7d"] as const).map((range) => (
=======
            {(['1h,6h,24h,7d'] as const).map((range) => (
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
<<<<<<< HEAD
                  timeRange === range
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
=======
<<<<<<< HEAD
                  timeRange === range
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
=======
<<<<<<< HEAD
                  timeRange === range`
                    ? 'bg-blue-600 text-white shadow-lg''
                    : 'text-gray-600 hover:text-gray-900 hove,
    r:bg-gray-100''
=======
                  timeRange === range
<<<<<<< HEAD
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
=======
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
<<<<<<< HEAD
=======
=======
          variants={containerVariants}`
          initial="hidden""
          whileInView="visible"
          viewport={{ once: true }}"
          className="grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-3 gap-8 mb-16"
>>>>>>> main
>>>>>>> main
        >
          {metrics.map((metric) => {
            const IconComponent = metric.icon;
            const ChangeIcon = getChangeIcon(metric.changeType);
<<<<<<< HEAD
            
=======

>>>>>>> main
            return (
              <motion.div
                key={metric.id}
                variants={itemVariants}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedMetric(selectedMetric === metric.id ? null : metric.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
<<<<<<< HEAD
=======
=======
                whileHover={{ scale: 1.02, y: -5 }}"
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedMetric(selectedMetric === metric.id ? null : metric.id)}
              >"
                <div className="flex items-center justify-between mb-4">"
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">"
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>"
>>>>>>> main
>>>>>>> main
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.status)}`}>
                    {metric.status}
                  </div>
                </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {metric.name}
                </h3>

                <div className="flex items-end gap-2 mb-3">
                  <span className="text-3xl font-bold text-gray-900">
                    {typeof metric.value === "number" && metric.value % 1 !== 0
                      ? metric.value.toFixed(1)
                      : Math.round(metric.value)
                    }
                  </span>
<<<<<<< HEAD
=======
=======
`
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {metric.name}
                </h3>
<<<<<<< HEAD
"
                <div className="flex items-end gap-2 mb-3">"
                  <span className="text-3xl font-bold text-gray-900">"
                    {typeof metric.value === 'number' && metric.value % 1 !== 0
                      ? metric.value.toFixed(1);
                      : Math.round(metric.value);
=======

                <div className="flex items-end gap-2 mb-3">
                  <span className="text-3xl font-bold text-gray-900">
<<<<<<< HEAD
                    {typeof metric.value === "number" && metric.value % 1 !== 0
=======
                    {typeof metric.value === 'number' && metric.value % 1 !== 0
>>>>>>> main
                      ? metric.value.toFixed(1)
                      : Math.round(metric.value)
>>>>>>> main
                    }
                  </span>'
>>>>>>> main
>>>>>>> main
                  <span className="text-lg text-gray-600 mb-1">
                    {metric.unit}
                  </span>
                </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main

                <div className="flex items-center gap-2 mb-4">
                  <ChangeIcon className={`w-4 h-4 ${getChangeColor(metric.changeType)}`} />
                  <span className={`text-sm font-medium ${getChangeColor(metric.changeType)}`}>
                    {Math.abs(metric.change).toFixed(1)}%
                  </span>
                  <span className="text-sm text-gray-500">vs last period</span>
                </div>

<<<<<<< HEAD
=======
=======
"
                <div className="flex items-center gap-2 mb-4">"
                  <ChangeIcon className={`w-4 h-4 ${getChangeColor(metric.changeType)}`} />`
                  <span className={`text-sm font-medium ${getChangeColor(metric.changeType)}`}>
                    {Math.abs(metric.change).toFixed(1)}%
                  </span>`
                  <span className="text-sm text-gray-500">vs last period</span>
                </div>
"
>>>>>>> main
>>>>>>> main
                <div className="text-sm text-gray-600 mb-4">
                  {metric.description}
                </div>

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Current</span>
                    <span>Target: {metric.target}{metric.unit}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        metric.value / metric.target > 0.9
<<<<<<< HEAD
=======
=======
                {/* Progress Bar */}"
                <div className="mb-4">"
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Current</span>
                    <span>Target: {metric.target}{metric.unit}</span>
                  </div>"
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div"
                      className={`h-2 rounded-full transition-all duration-500 ${
<<<<<<< HEAD
                        metric.value / metric.target > 0.9`
                          ? 'bg-red-500'
                          : metric.value / metric.target > 0.7'
                          ? 'bg-yellow-500''
                          : 'bg-green-500''
                      }`}`
=======
                        metric.value / metric.target > 0.9
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
                          ? "bg-red-500"
                          : metric.value / metric.target > 0.7
                          ? "bg-yellow-500"
                          : "bg-green-500"
<<<<<<< HEAD
                      }`}
=======
<<<<<<< HEAD
                      }`}
=======
=======
                          ? 'bg-red-500'
                          : metric.value / metric.target > 0.7
                          ? 'bg-yellow-500'
                          : 'bg-green-500'
>>>>>>> main
                      }`}
>>>>>>> main
>>>>>>> main
>>>>>>> main
                      style={{ width: `${Math.min((metric.value / metric.target) * 100, 100)}%` }}
                    />
                  </div>
                </div>

                {/* Expanded View */}
                <AnimatePresence>
                  {selectedMetric === metric.id && (
                    <motion.div
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-200"
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Min</span>
                          <span className="font-medium">{(metric.value * 0.8).toFixed(1)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Max</span>
                          <span className="font-medium">{(metric.value * 1.2).toFixed(1)}</span>
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
                      initial={{ opacity: 0, height: 0 }}`
=======
                      initial={{ opacity: 0, height: 0 }}
<<<<<<< HEAD
                      animate={{ opacity: 1, height: "auto" }}
=======
>>>>>>> main
                      animate={{ opacity: 1, height: 'auto' }}
>>>>>>> main
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-200"
                    >"
                      <div className="space-y-3">"
                        <div className="flex justify-between text-sm">"
                          <span className="text-gray-600">Min</span>"
                          <span className="font-medium">{(metric.value * 0.8).toFixed(1)}</span>
                        </div>"
                        <div className="flex justify-between text-sm">"
                          <span className="text-gray-600">Max</span>"
                          <span className="font-medium">{(metric.value * 1.2).toFixed(1)}</span>
<<<<<<< HEAD
                        </div>"
                        <div className="flex justify-between text-sm">"
                          <span className="text-gray-600">Trend</span>"
                          <span className={`font-medium ${getChangeColor(metric.changeType)}`}>`
=======
>>>>>>> main
>>>>>>> main
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Trend</span>
                          <span className={`font-medium ${getChangeColor(metric.changeType)}`}>
<<<<<<< HEAD
                            {metric.changeType === "increase" ? "↑" : "↓"}
=======
<<<<<<< HEAD
                            {metric.changeType === "increase" ? "↗" : "↘"}
=======
<<<<<<< HEAD
                            {metric.changeType === "increase" ? "↗" : "↘"}
=======
>>>>>>> main
                            {metric.changeType === 'increase' ? '↗' : '↘'}
>>>>>>> main
>>>>>>> main
>>>>>>> main
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center"
<<<<<<< HEAD
        >
          <h3 className="text-2xl font-bold mb-4">
            Performance Summary
          </h3>
=======
<<<<<<< HEAD
        >
          <h3 className="text-2xl font-bold mb-4">Performance Summary</h3>
>>>>>>> main
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">
                {metrics.filter(m => m.status === "excellent").length}
<<<<<<< HEAD
=======
=======
        >"
          <h3 className="text-2xl font-bold mb-4">Performance Summary</h3>"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<<<<<<< HEAD
            <div>"
              <div className="text-3xl font-bold mb-2">"
                {metrics.filter(m => m.status === 'excellent').length}
              </div>'
              <div className="text-blue-100">Excellent Metrics</div>
            </div>
            <div>"
              <div className="text-3xl font-bold mb-2">"
                {metrics.filter(m => m.changeType === 'decrease').length}
              </div>'
=======
            <div>
              <div className="text-3xl font-bold mb-2">
<<<<<<< HEAD
                {metrics.filter(m => m.status === "excellent").length}
=======
                {metrics.filter(m => m.status === 'excellent').length}
>>>>>>> main
>>>>>>> main
>>>>>>> main
              </div>
              <div className="text-blue-100">Excellent Metrics</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
                {metrics.filter(m => m.changeType === "decrease").length}
              </div>
              <div className="text-blue-100">Improving</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {Math.round(metrics.reduce((acc, m) => acc + m.value, 0) / metrics.length)}
              </div>
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
                {metrics.filter(m => m.changeType === "decrease").length}
=======
                {metrics.filter(m => m.changeType === 'decrease').length}
>>>>>>> main
              </div>
>>>>>>> main
              <div className="text-blue-100">Improving</div>
            </div>
            <div>"
              <div className="text-3xl font-bold mb-2">
                {Math.round(metrics.reduce((acc, m) => acc + m.value, 0) / metrics.length)}
              </div>"
>>>>>>> main
>>>>>>> main
              <div className="text-blue-100">Avg Performance</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default EnhancedPerformanceMetrics;
=======
<<<<<<< HEAD
export default EnhancedPerformanceMetrics;
=======
<<<<<<< HEAD
export default EnhancedPerformanceMetrics;"
=======
export default EnhancedPerformanceMetrics;
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
