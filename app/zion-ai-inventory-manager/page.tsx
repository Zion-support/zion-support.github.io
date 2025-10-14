
import { Link} from "react-router-dom";"
import { BarChart3, Package, TrendingUp, AlertTriangle, Users, Clock, Shield, Zap, ArrowRight, CheckCircle, Star, Smartphone, Globe, Settings} from "lucide-react";"
import EnhancedSEO from "../components/EnhancedSEO";"
import { ArrowRight, BarChart3, Shield, Zap, Globe, Star, Users, CheckCircle, TrendingUp, Clock, Package, Target, Settings} from "lucide-react";"
import EnhancedSEO from "../components/EnhancedSEO";"
import ResponsiveContainer from "../components/ResponsiveContainer";"
import FuturisticCard from "../components/FuturisticCard";"
import FuturisticButton from "../components/FuturisticButton";"
const ZionAIInventoryManager = () => {
  const features = [
    {
      title: "AI-Powered Demand Forecasting","
      description: "Predict inventory needs with 95% accuracy using machine learning algorithms","
      icon: <TrendingUp className="w-6 h-6" />,"
      benefit: "Reduce stockouts by 60%"},"
    {
      title: "Real-Time Inventory Tracking","
      description: "Monitor stock levels across multiple locations with live updates","
      icon: <Package className="w-6 h-6" />,"
      benefit: "99.9% accuracy"},"
    {
      title: "Automated Reorder Points","
      description: "Set intelligent reorder triggers based on sales velocity and lead times","
      icon: <AlertTriangle className="w-6 h-6" />,"
      benefit: "Never run out of stock"},"
    {
      title: "Multi-Channel Integration","
      description: "Sync inventory across e-commerce, retail, and warehouse systems","
      icon: <Globe className="w-6 h-6" />,"
      benefit: "Unified inventory view"},"
    {
      title: "Advanced Analytics Dashboard","
      description: "Comprehensive reports on inventory turnover, costs, and performance","
      icon: <BarChart3 className="w-6 h-6" />,"
      benefit: "Data-driven decisions"},"
    {
      title: "Mobile App Access","
      description: "Manage inventory on-the-go with our intuitive mobile application","
      icon: <Smartphone className="w-6 h-6" />,"
      benefit: "24/7 access"}];"
  const pricingPlans = [
    {
      name: "Starter","
      price: "$99","
      period: "/month","
      description: "Perfect for small businesses","
      features: [
        "Up to 1,000 products","
        "Basic AI forecasting","
        "2 user accounts","
        "Email support","
        "Mobile app access","
        "Basic reporting"],"
      popular: false},
    {
      name: "Professional","
      price: "$299","
      period: "/month","
      description: "Ideal for growing businesses","
      features: [
        "Up to 10,000 products","
        "Advanced AI forecasting","
        "10 user accounts","
        "Priority support","
        "Multi-location support","
        "Advanced analytics","
        "API access","
        "Custom integrations"],"
      popular: true},
    {
      name: "Enterprise","
      price: "$599","
      period: "/month","
      description: "For large organizations","
      features: [
        "Unlimited products","
        "Premium AI forecasting","
        "Unlimited users","
        "24/7 phone support","
        "Multi-warehouse support","
        "Custom reporting","
        "White-label options","
        "Dedicated account manager"],"
      popular: false}];
  const testimonials = [
    {
      name: "Sarah Johnson","
      company: "TechGear Solutions","
      role: "Operations Manager","
      content: "Zion AI Inventory Manager reduced our stockouts by 70% and saved us $50,000 in the first year. The AI forecasting is incredibly accurate.","
      rating: 5,
      savings: "$50,000 saved"},"
    {
      name: "Michael Chen","
      company: "RetailMax Inc","
      role: "CEO","
      content: "The multi-channel integration is seamless. We can now track inventory across all our sales channels in real-time.","
      rating: 5,
      savings: "60% fewer stockouts"},"
    {
      name: "Emily Rodriguez","
      company: "Fashion Forward","
      role: "Inventory Director","
      content: "The mobile app is fantastic. I can check inventory levels and place orders from anywhere. Game changer for our business.","
      rating: 5,
      savings: "40% time saved"}];"
  const stats = [
    { number: "95%", label: "Forecast Accuracy", icon: <TrendingUp className="w-6 h-6" />},"
    { number: "60%", label: "Reduction in Stockouts", icon: <AlertTriangle className="w-6 h-6" />},"
    { number: "40%", label: "Time Saved", icon: <Clock className="w-6 h-6" />},"
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" />}];"
"use client""
import React from "react""
import { Helmet} from "react-helmet-async""
"use client""
import React from "react";"
import { Helmet} from "react-helmet-async";"
"use client""
export default function ZionAIInventoryManager() {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""
      <Helmet></Helmet></</Helmet>
        <title>Zion AI Inventory Manager | Zion Tech Group</title><//title></<//title>
        <meta name="description" content="Professional AI Inventory Manager services by Zion Tech Group. Advanced AI and IT solutions for your business." />""
      </Helmet><//Helmet></<//Helmet>
      <div className="container mx-auto px-4 py-16">""
        <div className="text-center mb-16">""
          <h1 className="text-5xl font-bold text-white mb-6">""
            Zion AI Inventory Manager <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>""
          </h1><//h1></<//h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""
            AI-powered inventory management solutions for modern businesses.;
          </p></div><//div></<//div>
            Zion AI Inventory Manager <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span></h1>""
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""
            AI-powered inventory management solutions for modern businesses.</p></div><//div></<//div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">""
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">""
            <h3 className="text-xl font-semibold text-white mb-4">Smart Inventory Tracking</h3>""
            <p className="text-gray-300 mb-4">""
              AI-powered inventory tracking and management capabilities.;
            </p><//p></<//p>
            <ul className="text-sm text-gray-400 space-y-2">""
              <li>• Real-time tracking</li><//li></<//li>
              <li>• Predictive analytics</li><//li></<//li>
              <li>• Automated reordering</li></ul><//ul></div><//div></<//div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">""
            <h3 className="text-xl font-semibold text-white mb-4">Demand Forecasting</h3>""
            <p className="text-gray-300 mb-4">""
              Advanced demand forecasting and optimization algorithms.;
            </p><//p></<//p>
            <ul className="text-sm text-gray-400 space-y-2">""
              <li>• ML-based predictions</li><//li></<//li>
              <li>• Seasonal adjustments</li><//li></<//li>
              <li>• Trend analysis</li></ul><//ul></div><//div></<//div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">""
            <h3 className="text-xl font-semibold text-white mb-4">Cost Optimization</h3>""
            <p className="text-gray-300 mb-4">""
              Intelligent cost optimization and waste reduction.;
            </p><//p></<//p>
            <ul className="text-sm text-gray-400 space-y-2">""
              <li>• Cost analysis</li><//li></<//li>
              <li>• Waste reduction</li><//li></<//li>
              <li>• Efficiency metrics</li></ul><//ul></div></div><//div></<//div>
              AI-powered inventory tracking and management capabilities.</p><//p></<//p>
            <ul className="text-sm text-gray-400 space-y-2">""
              <li>• Real-time tracking</li><//li></<//li>
              <li>• Predictive analytics</li><//li></<//li>
              <li>• Automated reordering</li></ul></div><//div></<//div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">""
            <h3 className="text-xl font-semibold text-white mb-4">Demand Forecasting</h3>""
            <p className="text-gray-300 mb-4">""
              Advanced demand forecasting and optimization algorithms.</p><//p></<//p>
            <ul className="text-sm text-gray-400 space-y-2">""
              <li>• ML-based predictions</li><//li></<//li>
              <li>• Seasonal adjustments</li><//li></<//li>
              <li>• Trend analysis</li></ul></div><//div></<//div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">""
            <h3 className="text-xl font-semibold text-white mb-4">Cost Optimization</h3>""
            <p className="text-gray-300 mb-4">""
              Intelligent cost optimization and waste reduction.</p><//p></<//p>
            <ul className="text-sm text-gray-400 space-y-2">""
              <li>• Cost analysis</li><//li></<//li>
              <li>• Waste reduction</li><//li></<//li>
              <li>• Efficiency metrics</li></ul></div></div><//div></<//div>
        <div className="text-center">""
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">""
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Optimize Your Inventory?</h2>""
            <p className="text-gray-300 mb-6">""
"use client""
import React from "react";""
import { Helmet} from "react-helmet-async";""
"use client";"
export default function ZionAIInventoryManager() { return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
      <Helmet></Helmet></</Helmet>
        <title>Zion AI Inventory Manager | Zion Tech Group</title><//title></<//title>
        <meta name="description" content="Professional services by Zion Tech Group." />"
export default function ZionAIInventoryManager() {
import React from "react";"
import { Helmet} from "react-helmet-async";"
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
      <Helmet></Helmet></</Helmet>
        <title>Home - Zion Tech Group</title><//title></<//title>
        <meta name="description" content="Home - Zion Tech Group" />"
      </Helmet><//Helmet></<//Helmet>
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center">"
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">"
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Optimize Your Inventory?</h2>"
            <p className="text-gray-300 mb-6">"
              Our AI inventory management experts are ready to help you streamline your operations.;
            </p><//p></<//p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">""
              Get Started Today;
            </button></div><//div></div></div><//div></<//div>
    </div><//div></<//div>
  )
  )}
              Our AI inventory management experts are ready to help you streamline your operations.</p><//p></<//p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">""
              Get Started Today</button></div></div></div></div><//div></<//div>
  )
            </button></div><//div></div></div><//div></<//div>
    </div><//div></<//div>
  )}
""
            </button>;
          </div></div><//div></div></div><//div></<//div>
  )}}
""
          <h1 className="text-4xl font-bold text-white mb-8">Home</h1>"
          <p className="text-gray-300 text-lg">"
            This page is under construction. Please check back later.
          </p></div><//div></div></div><//div></<//div>
  )}
  )};
