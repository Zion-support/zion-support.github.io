import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  // TODO: Implement
}
  Zap, 
  Settings, 
  Bot, 
  Workflow, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Users,
  Shield,
  Globe,
  BarChart3,
  Database;
} from 'lucide-react';
import Layout from '../components/Layout';
const automationServices = [
  {
    title: "Process Automation",""
    description: "Automate repetitive business processes to increase efficiency and reduce errors","
    icon: Workflow,
    features: ["
      "Workflow Design",""
      "Task Automation",""
      "Approval Processes",""
      "Document Processing",""
      "Email Automation",""
      "Data Entry Automation""]
    ],"
    price: "Starting at $1,500/month""
  },
  {"
    title: "RPA Solutions",""
    description: "Robotic Process Automation for complex business operations","
    icon: Bot,
      "Bot Development",""
      "Screen Scraping",""
      "Data Extraction",""
      "Form Filling",""
      "Report Generation",""
      "System Integration""]
    price: "Starting at $2,000/month""
    title: "API Integration",""
    description: "Connect disparate systems with seamless API integrations","
    icon: Settings,
      "System Integration",""
      "Data Synchronization",""
      "Real-time Updates",""
      "Error Handling",""
      "Monitoring & Alerts",""
      "Custom Connectors""]
    price: "Starting at $1,800/month""
    title: "Workflow Management",""
    description: "Streamline complex workflows with intelligent automation","
    icon: Zap,
      "Visual Workflow Designer",""
      "Conditional Logic",""
      "Parallel Processing",""
      "Exception Handling",""
      "Performance Monitoring",""
      "Scalable Architecture""]
    price: "Starting at $2,200/month""
    title: "Data Automation",""
    description: "Automate data processing, transformation, and analysis","
    icon: Database,
      "ETL Processes",""
      "Data Validation",""
      "Data Quality Checks",""
      "Scheduled Processing",""
      "Error Recovery""]
    price: "Starting at $1,600/month""
    title: "Business Intelligence Automation",""
    description: "Automate reporting and analytics for real-time insights","
    icon: BarChart3,
      "Automated Reporting",""
      "Dashboard Updates",""
      "Alert Systems",""
      "KPI Monitoring",""
      "Trend Analysis",""
      "Custom Metrics""]
    price: "Starting at $2,500/month""
];

const automationTypes = [
    title: "IT Operations",""
    description: "Server monitoring, backup automation, and system maintenance",""
    icon: "💻""
    title: "HR Processes",""
    description: "Employee onboarding, payroll processing, and performance tracking",""
    icon: "👥""
    title: "Finance & Accounting",""
    description: "Invoice processing, expense management, and financial reporting",""
    icon: "💰""
    title: "Customer Service",""
    description: "Ticket routing, response automation, and customer support workflows",""
    icon: "🎧""
    title: "Marketing",""
    description: "Campaign management, lead nurturing, and social media automation",""
    icon: "📢""
    title: "Sales",""
    description: "Lead qualification, follow-up automation, and pipeline management",""
    icon: "📈""]

const benefits = [
    title: "Increased Efficiency",""
    description: "Reduce manual work by up to 80% with intelligent automation",""
    icon: "⚡""
    title: "Cost Savings",""
    description: "Lower operational costs through reduced manual labor",""
    title: "Error Reduction",""
    description: "Minimize human errors with consistent automated processes",""
    icon: "🎯""
    title: "24/7 Operations",""
    description: "Run automated processes around the clock without interruption",""
    icon: "🕐""]

export default function AutomationPage() {
  return (
    <Layout;"
      title="Automation Solutions - Zion Tech Group"""
      description="Intelligent automation solutions including RPA, process automation, and workflow management. Streamline your business operations with cutting-edge automation technology."""
      keywords="automation, RPA, process automation, workflow management, business process automation, intelligent automation"""
      canonical="https://ziontechgroup.com/automation""
    >
"
      <section className="bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white py-20">"
</section>"
        <div className="container mx-auto px-4">"
</div>"
          <div className="text-center max-w-4xl mx-auto">"
</div>
            <motion.h1;"
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight""
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
</motion>"
              <span className="text-orange-400"> Automation Solutions</span>"
            </motion.h1>
            <motion.p;"
              className="text-xl mb-8 text-orange-100""
              transition={{ duration: 0.8, delay: 0.2 }}
</motion>
            </motion.p>
            <motion.div;"
              className="flex flex-col sm:flex-row justify-center gap-4""
              transition={{ duration: 0.8, delay: 0.4 }}
              <Link href="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">"

              <Link href="/quote" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">"

              
            </motion.div>
      <section className="py-20 bg-gray-50">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Automation Services</h2>""
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">"
              <motion.div;
                key={index}"
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow""
                transition={{ duration: 0.8, delay: index * 0.1 }}
                <div className="text-3xl mb-4">"
                  <service.icon className="w-12 h-12 text-orange-600" />"
</service>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>""
                <p className="text-gray-600 mb-4">{service.description}</p>""
                <ul className="text-sm text-gray-500 space-y-2 mb-4">"
</ul>"
                    <li key={idx} className="flex items-center">"
</li>"
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />"

                    </li>
                <div className="mt-4">"
                  <span className="text-2xl font-bold text-orange-600">{service.price}</span>"
              </motion.div>)
            ))}
      <section className="py-20 bg-white">"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Automation Across Industries</h2>""
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors""
                <div className="text-4xl mb-4">{type.icon}</div>""
                <h3 className="text-xl font-semibold mb-2">{type.title}</h3>""
                <p className="text-gray-600">{type.description}</p>"
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits of Automation</h2>""
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">"
                className="text-center""
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <span className="text-2xl">{benefit.icon}</span>"
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>""
                <p className="text-gray-600">{benefit.description}</p>"
      <section className="py-20 bg-orange-600 text-white">"
        <div className="container mx-auto px-4 text-center">"
          <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Business?</h2>""
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">"
          </p>"
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">"
            <Link href="/contact" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">"

            
          <div className="grid md:grid-cols-3 gap-8 mt-12">"
            <div className="flex items-center justify-center">"
              <Phone className="w-6 h-6 mr-2" />"

              <span>+1 302 464 0950</span>
              <Mail className="w-6 h-6 mr-2" />"

              <span>kleber@ziontechgroup.com</span>
              <MapPin className="w-6 h-6 mr-2" />"

              <span>364 E Main St STE 1008, Middletown DE 19709</span>
      </section>