"use client""
import React from "react""
import { Helmet} from "react-helmet-async""
"use client""
import React from "react";"
import { Helmet} from "react-helmet-async";"
"use client""
export default function Page() {return (
    <div className="min-h-screen bg-white">""
export default function Page() {
import React from "react";"
import { Helmet} from "react-helmet-async";"
import { Link} from "react-router-dom";"
import { ArrowRight, BarChart3, Brain, Star, Users, Award, Zap, Shield, Smartphone, Globe, Mail, Phone, TrendingUp, Database, Settings, Monitor, Cpu, Sparkles, Target, Calendar, FileText, Clock} from "lucide-react";"
export default function ZionAiAnalyticsPro() {
  const features = [
    {
      title: "Real-time Analytics Dashboard","
      description: "Monitor your business performance with live dashboards that update in real-time, providing instant insights into key metrics and KPIs.","
      icon: <Monitor className="w-8 h-8" />,"
      benefits: ["Live data updates", "Customizable widgets", "Mobile-responsive design", "Export capabilities"]},"
    {
      title: "Predictive Modeling & Forecasting","
      description: "Leverage advanced AI algorithms to predict future trends, forecast sales, and identify opportunities before they happen.","
      icon: <Brain className="w-8 h-8" />,"
      benefits: ["Sales forecasting", "Trend prediction", "Risk assessment", "Opportunity identification"]},"
    {
      title: "Custom Report Generation","
      description: "Create detailed, professional reports automatically with our AI-powered report generator that adapts to your business needs.","
      icon: <FileText className="w-8 h-8" />,"
      benefits: ["Automated scheduling", "Custom templates", "Multiple formats", "Brand customization"]},"
    {
      title: "API Integration & Data Connectors","
      description: "Connect seamlessly with over 100+ business applications and data sources to centralize all your business intelligence.","
      icon: <Database className="w-8 h-8" />,"
      benefits: ["100+ integrations", "Real-time sync", "Data transformation", "Secure connections"]},"
    {
      title: "Mobile App Access","
      description: "Access your analytics anywhere with our native mobile apps for iOS and Android, featuring offline capabilities.","
      icon: <Smartphone className="w-8 h-8" />,"
      benefits: ["Native mobile apps", "Offline access", "Push notifications", "Touch-optimized UI"]},"
    {
      title: "White-label Solutions","
      description: "Rebrand our analytics platform as your own with complete white-label customization options for agencies and resellers.","
      icon: <Settings className="w-8 h-8" />,"
      benefits: ["Custom branding", "Domain mapping", "API access", "Reseller tools"]"
  Zap,
  Shield,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  Sparkles,
  Award,
  Phone,
  Mail,
  MapPin,
  Database,
  Cpu,
  Globe,
  Target,
  Calendar} from "lucide-react";"
const ZionAIAnalyticsProPage = () => {
  const features = [
    {
      title: "Real-Time Analytics Dashboard","
      description: "Monitor your business performance with live data visualization and instant insights across all key metrics.","
      icon: <BarChart3 className="w-8 h-8" />,"
      color: "from-blue-500 to-cyan-500"},"
    {
      title: "AI-Powered Predictive Modeling","
      description: "Leverage machine learning algorithms to forecast trends, identify opportunities, and make data-driven decisions.","
      icon: <Brain className="w-8 h-8" />,"
      color: "from-purple-500 to-pink-500"},"
    {
      title: "Custom Dashboard Builder","
      description: "Create personalized dashboards tailored to your business needs with drag-and-drop functionality.","
      icon: <Target className="w-8 h-8" />,"
      color: "from-green-500 to-emerald-500"},"
    {
      title: "Advanced API Integration","
      description: "Seamlessly connect with 100+ business tools and platforms for comprehensive data aggregation.","
      icon: <Zap className="w-8 h-8" />,"
      color: "from-orange-500 to-yellow-500"},"
    {
      title: "Automated Insights Generation","
      description: "Get AI-generated reports and recommendations delivered automatically to your inbox.","
      icon: <Sparkles className="w-8 h-8" />,"
      color: "from-cyan-500 to-blue-500"},"
    {
      title: "Enterprise Security","
      description: "Bank-level security with end-to-end encryption, SSO, and compliance with industry standards.","
      icon: <Shield className="w-8 h-8" />,"
      color: "from-red-500 to-pink-500"}];"
  const pricingPlans = [
    {
      name: "Starter","
      price: "$299","
      period: "month","
      description: "Perfect for small businesses getting started with analytics","
      features: [
        "Up to 5 data sources","
        "Basic dashboards","
        "Standard reports","
        "Email support","
        "1 user account""
      period: "per month","
      description: "Perfect for small businesses getting started with analytics","
      features: [
        "Up to 5 data sources","
        "Basic dashboard templates","
        "Standard support","
        "Monthly reports","
        "Email notifications"],"
      popular: false},
    {
      name: "Professional","
      price: "$599","
      period: "month","
      description: "Ideal for growing businesses with advanced analytics needs","
      features: [
        "Up to 25 data sources","
        "Advanced dashboards","
        "Custom reports","
        "Priority support","
        "Up to 10 user accounts","
        "API access","
        "Mobile apps""
      period: "per month","
      description: "Ideal for growing businesses with advanced analytics needs","
      features: [
        "Up to 20 data sources","
        "Custom dashboard builder","
        "AI-powered insights","
        "Real-time alerts","
        "Priority support","
        "API access"],"
      popular: true},
    {
      name: "Enterprise","
      price: "$999","
      period: "month","
      description: "Complete solution for large organizations","
      features: [
        "Unlimited data sources","
        "Custom dashboards","
        "Advanced AI features","
        "24/7 dedicated support","
        "Unlimited user accounts","
        "White-label options","
      period: "per month","
      description: "Complete solution for large organizations","
      features: [
        "Unlimited data sources","
        "Advanced AI modeling","
        "White-label options","
        "Dedicated support","
        "Custom integrations","
        "On-premise deployment"],"
      popular: false}];
  const testimonials = [
    {
      name: "Sarah Johnson","
      company: "TechStart Inc.","
      role: "CEO","
      content: "Zion AI Analytics Pro transformed our decision-making process. We can now see trends before they happen and make data-driven decisions with confidence.","
      content: "Zion AI Analytics Pro transformed our data analysis. We"ve increased our decision-making speed by 300% and identified new revenue opportunities worth $2M annually.","
      rating: 5,
      avatar: "SJ"},"
    {
      name: "Michael Chen","
      company: "E-commerce Solutions","
      role: "CTO","
      content: "The predictive analytics feature helped us increase our sales by 40% in just 3 months. The ROI was immediate and substantial.","
      content: "The predictive modeling capabilities are incredible. We can now forecast sales with 95% accuracy and optimize our inventory accordingly.","
      rating: 5,
      avatar: "MC"},"
    {
      name: "Emily Rodriguez","
      company: "Digital Marketing Agency","
      role: "Operations Director","
      content: "The real-time dashboards give us instant visibility into campaign performance. Our team productivity increased by 60%.","
      content: "The custom dashboard builder saved us months of development time. We can now create client reports in minutes instead of hours.","
      rating: 5,
      avatar: "ER"}];"
  const stats = [
    { number: "40%", label: "Increase in Decision Speed", icon: <Zap className="w-6 h-6" />},"
    { number: "60%", label: "Reduction in Manual Reporting", icon: <FileText className="w-6 h-6" />},"
    { number: "99.9%", label: "Data Accuracy", icon: <Award className="w-6 h-6" />},"
    { number: "24/7", label: "Real-time Monitoring", icon: <Monitor className="w-6 h-6" />}];"
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
      <Helmet></Helmet></</Helmet>
        <title>Page - Zion Tech Group</title><//title></<//title>
        <meta name="description" content="Professional page services by Zion Tech Group." />""
      </Helmet><//Helmet></<//Helmet>
      <div className="container mx-auto px-4 py-16">""
        <div className="text-center">""
          <h1 className="text-4xl font-bold text-gray-900 mb-8">""
            Page;
          </h1><//h1></<//h1>
          <p className="text-xl text-gray-600 mb-8">""
            Professional page solutions tailored to your business needs.;
          </p><//p></<//p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">""
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">""
              <h3 className="text-lg font-semibold text-blue-900 mb-2">""
                Expert Solutions;
              </h3><//h3></<//h3>
              <p className="text-blue-700">""
                Our team of experts delivers cutting-edge page solutions.;
              </p></div><//div></<//div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">""
              <h3 className="text-lg font-semibold text-green-900 mb-2">""
                Custom Implementation;
              </h3><//h3></<//h3>
              <p className="text-green-700">""
                Tailored page implementations for your specific requirements.;
              </p></div><//div></<//div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">""
              <h3 className="text-lg font-semibold text-purple-900 mb-2">""
                24/7 Support;
              </h3><//h3></<//h3>
              <p className="text-purple-700">""
                Round-the-clock support for all your page needs.;
              </p></div><//div></div><//div></<//div>
          <div className="mt-12">""
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">""
              Get Started Today;
            </button></div><//div></div></div><//div></<//div>
    </div><//div></<//div>
  )
        <meta name="description" content="Professional services by Zion Tech Group." />"
        <title>Home - Zion Tech Group</title><//title></<//title>
        <meta name="description" content="Home - Zion Tech Group" />"
      </Helmet><//Helmet></<//Helmet>
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center">"
          <h1 className="text-4xl font-bold text-white mb-8">Home</h1>"
          <p className="text-gray-300 text-lg">"
            This page is under construction. Please check back later.
          </p></div><//div></div></div><//div></<//div>
  )}
            Page</h1><//h1></<//h1>
          <p className="text-xl text-gray-600 mb-8">""
            Professional page solutions tailored to your business needs.</p><//p></<//p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">""
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">""
              <h3 className="text-lg font-semibold text-blue-900 mb-2">""
                Expert Solutions</h3><//h3></<//h3>
              <p className="text-blue-700">""
                Our team of experts delivers cutting-edge page solutions.</p></div><//div></<//div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">""
              <h3 className="text-lg font-semibold text-green-900 mb-2">""
                Custom Implementation</h3><//h3></<//h3>
              <p className="text-green-700">""
                Tailored page implementations for your specific requirements.</p></div><//div></<//div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">""
              <h3 className="text-lg font-semibold text-purple-900 mb-2">""
                24/7 Support</h3><//h3></<//h3>
              <p className="text-purple-700">""
                Round-the-clock support for all your page needs.</p></div></div><//div></<//div>
          <div className="mt-12">""
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">""
              Get Started Today</button></div></div></div></div><//div></<//div>
  )
            </button></div><//div></div></div><//div></<//div>
    </div><//div></<//div>
  )}}""
            </button>;
          </div></div><//div></div></div><//div></<//div>
  )}}""
  )}
  )};
