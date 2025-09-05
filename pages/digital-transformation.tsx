import Layout from './components/Layout';
import { motion } from 'framer-motion';
import { Settings, Cloud, Database, Shield, Zap, Users, ArrowRight, CheckCircle, Star, Clock, DollarSign, TrendingUp } from 'lucide-react';

const transformationServices = [
  {
    title: "Cloud Migration",
    description: "Seamlessly migrate your infrastructure to the cloud with zero downtime",
    icon: Cloud,
    features: ["AWS/Azure/GCP Migration", "Data Migration", "Application Modernization"],
    pricing: "Starting at $5,000/month",
    timeline: "8-24 weeks"
  },
  {
    title: "Process Automation",
    description: "Automate repetitive tasks and workflows to improve efficiency",
    icon: Zap,
    features: ["Workflow Automation", "RPA Implementation", "API Integration"],
    pricing: "Starting at $2,500/month",
    timeline: "4-12 weeks"
  },
  {
    title: "Data Modernization",
    description: "Transform your data infrastructure for better insights and analytics",
    icon: Database,
    features: ["Data Lake Creation", "ETL Pipelines", "Real-time Analytics"],
    pricing: "Starting at $3,500/month",
    timeline: "6-16 weeks"
  },
  {
    title: "Security Enhancement",
    description: "Strengthen your cybersecurity posture with modern security solutions",
    icon: Shield,
    features: ["Zero Trust Architecture", "Identity Management", "Threat Detection"],
    pricing: "Starting at $2,000/month",
    timeline: "4-10 weeks"
  },
  {
    title: "Legacy System Modernization",
    description: "Update and modernize outdated systems and applications",
    icon: Settings,
    features: ["System Refactoring", "API Development", "Microservices Architecture"],
    pricing: "Starting at $4,000/month",
    timeline: "12-32 weeks"
  },
  {
    title: "Digital Culture & Training",
    description: "Build digital-first culture and train your team for the future",
    icon: Users,
    features: ["Change Management", "Digital Training", "Adoption Strategies"],
    pricing: "Starting at $1,500/month",
    timeline: "2-8 weeks"
    title: "Increased Efficiency",
    description: "Streamline operations and reduce manual work by up to 60%",
    icon: TrendingUp,
    percentage: "60%"
  },
  {
    title: "Cost Reduction",
    description: "Lower operational costs through automation and optimization",
    icon: DollarSign,
    percentage: "40%"
  },
  {
    title: "Better Customer Experience",
    description: "Deliver faster, more personalized customer interactions",
    icon: Star,
    percentage: "85%"
  },
  {
    title: "Enhanced Security",
    description: "Protect your business with modern security frameworks",
    icon: Shield,
    percentage: "99.9%"
  }
];

const industries = [
  { name: "Healthcare", focus: ["Electronic Health Records", "Telemedicine", "Patient Data Analytics"] },
  { name: "Finance", focus: ["Digital Banking", "Risk Management", "Compliance Automation"] },
  { name: "Manufacturing", focus: ["IoT Integration", "Supply Chain Optimization", "Predictive Maintenance"] },
  { name: "Retail", focus: ["E-commerce Platforms", "Inventory Management", "Customer Analytics"] },
  { name: "Education", focus: ["Learning Management Systems", "Student Analytics", "Remote Learning"] },
  { name: "Government", focus: ["Citizen Services", "Digital Governance", "Data Transparency"] }
];

const process = [
  {
    step: "1",
    title: "Assessment & Strategy",
    description: "Comprehensive analysis of current state and digital transformation roadmap",
    duration: "2-4 weeks"
  },
  {
    step: "2",
    title: "Planning & Design",
    description: "Detailed implementation plan and architecture design",
    duration: "2-3 weeks"
  },
  {
    step: "3",
    title: "Implementation",
    description: "Execute transformation initiatives with agile methodology",
    duration: "8-32 weeks"
  },
  {
    step: "4",
    title: "Testing & Optimization",
    description: "Comprehensive testing and performance optimization",
    duration: "2-4 weeks"
  },
  {
    step: "5",
    title: "Deployment & Training",
    description: "Deploy solutions and train teams for successful adoption",
    duration: "1-2 weeks"
  },
  {
    step: "6",
    title: "Monitoring & Support",
    description: "Ongoing monitoring, maintenance, and continuous improvement",
    duration: "Ongoing"
  }
];

const stats = [
  { number: "200+", label: "Digital Transformations Completed" },
  { number: "60%", label: "Average Efficiency Improvement" },
  { number: "40%", label: "Average Cost Reduction" },
  { number: "95%", label: "Client Satisfaction Rate" }
];

export default function DigitalTransformationPage() {
  return (
    <Layout
      title="Digital Transformation Services - Zion Tech Group"
      description="Comprehensive digital transformation services to modernize your business. Cloud migration, process automation, data modernization, and legacy system updates."
      keywords="digital transformation, cloud migration, process automation, legacy modernization, business transformation, digital strategy"
      canonical="https://ziontechgroup.com/digital-transformation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Digital Transformation Services
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Transform your business for the digital age with our comprehensive digital transformation services. 
                Modernize your operations, enhance efficiency, and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Get Free Assessment
                </a>
                <a href="#services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                  View Our Services
                </a>
        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Digital Transformation Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide end-to-end digital transformation services to modernize your business operations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {transformationServices.map((service, index) => {
                const IconComponent = service.icon;
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="mb-4 space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">Pricing:</span>
                        <span className="font-semibold text-green-600">{service.pricing}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Timeline:</span>
                        <span className="text-sm font-medium">{service.timeline}</span>
                      </div>
                    </div>
        {/* Benefits */}
        <section className="py-20 bg-gray-100">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Benefits of Digital Transformation
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transform your business and unlock new opportunities for growth and efficiency.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-blue-600 mb-4">
                      <IconComponent className="w-12 h-12 mx-auto" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {benefit.percentage}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Transform
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our digital transformation expertise spans across various industries.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {industry.name}
                  </h3>
                  <ul className="space-y-2">
                    {industry.focus.map((focus, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <ArrowRight className="w-4 h-4 text-blue-500 mr-2" />
                        {focus}
        {/* Process */}
        <section className="py-20 bg-gray-100">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Transformation Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful digital transformation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>
                  <div className="flex items-center text-sm text-blue-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {step.duration}
        <section id="contact" className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Let's discuss how our digital transformation services can modernize your business 
              and drive growth. Get a free assessment and transformation roadmap.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Get Free Assessment
              </a>
              <a 
                href="/pricing" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
