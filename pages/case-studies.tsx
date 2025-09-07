import React from 'react',
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
import {
  ArrowRight
  Phone
  Mail
  MapPin
  TrendingUp
  CheckCircle
  Users
  Building
  Globe
  Award
  Clock
  BarChart3
  Cloud
  Shield
} from 'lucide-react';
const caseStudies = [
  {
    id: 1
    title: "AI-Powered Customer Service Transformation"
    client: "Global E-commerce Retailer"
    industry: "E-commerce"
    challenge: "High customer service costs and inconsistent response quality"
    solution: "Implemented AI-powered chatbot and intelligent routing system"
    results: [
      "60% reduction in support costs"
      "40% faster response times"
      "95% customer satisfaction rate"
      "$2M annual savings"
    ]
    duration: "3 months"
    team: "8 experts"
    technologies: ["AI/ML", "NLP", "Cloud", "Analytics"]
    image: "/images/case-studies/ecommerce-ai.jpg"
  }
  {
    id: 2
    title: "Cloud Migration for Financial Services"
    client: "Regional Bank"
    industry: "Financial Services"
    challenge: "Legacy systems limiting scalability and innovation"
    solution: "Complete cloud migration with microservices architecture"
    results: [
      "99.9% uptime achieved"
      "50% faster application deployment"
      "30% reduction in infrastructure costs"
      "Enhanced security compliance"
    ]
    duration: "6 months"
    team: "12 experts"
    technologies: ["AWS", "Kubernetes", "Microservices", "DevOps"]
    image: "/images/case-studies/cloud-migration.jpg"
  }
  {
    id: 3
    title: "Cybersecurity Enhancement for Healthcare"
    client: "Healthcare Network"
    industry: "Healthcare"
    challenge: "Increasing cyber threats and compliance requirements"
    solution: "Comprehensive security framework and threat detection system"
    results: [
      "Zero security breaches"
      "100% compliance with HIPAA"
      "24/7 threat monitoring"
      "50% faster incident response"
    ]
    duration: "4 months"
    team: "6 experts"
    technologies: ["Cybersecurity", "SIEM", "Compliance", "Monitoring"]
    image: "/images/case-studies/healthcare-security.jpg"
  }
];
const stats = [
  { number: "500+", label: "Projects Completed" }
  { number: "50+", label: "Happy Clients" }
  { number: "99.9%", label: "Success Rate" }
  { number: "24/7", label: "Support Available" }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Page</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Content coming soon.</p>
        </div>
      </div>
    </MainLayout>
  );
}
import Link from 'next/link';
import Layout from '../components/Layout';
export default function CaseStudiesPage() {
  return (
    <Layout>
      <Head>
        <title>Case Studies | Zion Tech Group</title>
        <link rel='canonical' href='https://ziontechgroup.com/case-studies' />
        <meta
          name='description'
          content='Proven outcomes across AI, IT, and micro SaaS deployments.'
        />
      </Head>
      <section className='container mx-auto px-4 py-24'>
        <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6'>
          Case Studies
        </h1>
        <p className='text-gray-300'>
          Proven outcomes and detailed success stories. Coming soon.
        </p>
      </section>
    </Layout>
  );
 </Head> </section> </Layout>
	return (
		<Layout>
			<Head>
				<title>Case Studies | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/case-studies" />
				<meta name="description" content="Proven outcomes across AI, IT, and micro SaaS deployments." />
			</Head>
			<section className="container mx-auto px-4 py-24">
				<h1 className="text-4xl md: text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Case Studies</h1>
				<p className="text-gray-300">Proven outcomes and detailed success stories. Coming soon.</p>
			</section>
		</Layout>
	)
}
