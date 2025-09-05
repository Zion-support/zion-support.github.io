import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
  category: 'Micro SaaS' | 'AI Services' | 'IT Services'
  { title: 'Cloud Cost Guard (FinOps Assistant)', "href": '/services/micro-saas', "price": 'Typical: $299–$1,499/month', "bullets": ['Anomaly detection', 'Rightsizing', 'Forecasting'], "category"
  { "title": 'API Rate Limiter & Analytics', "href": '/services/micro-saas', "price": 'Typical: $199–$999/month', "bullets": ['Smart throttling', 'Usage analytics', 'Monetization hooks'], "category"
  { "title": 'Smart Document Processing', "href": '/services/micro-saas', "price": 'Typical: $399–$1,999/month', "bullets": ['OCR + extraction', 'Validation rules', 'Workflow automation'], "category"
  { "title": 'SEO Content Optimizer', "href": '/services/micro-saas', "price": 'Typical: $149–$699/month', "bullets": ['Keyword insights', 'Briefs', 'SERP tracking'], "category"
  { "title": 'Privacy Policy & Cookie Manager', "href": '/services/micro-saas', "price": 'Typical: $49–$299/month', "bullets": ['GDPR/CCPA banners', 'DSAR inbox', 'Geo rules'], "category"
  { "title": 'Uptime & Core Web Vitals Monitor', "href": '/services/micro-saas', "price": 'Typical: $59–$399/month', "bullets": ['SLAs', 'Synthetic checks', 'CWV alerts'], "category"
  { "title": 'Sales Engineering Demo Hub', "href": '/services/micro-saas', "price": 'Typical: $99–$599/month', "bullets": ['Live demos', 'Usage analytics', 'Lead capture'], "category"
  { "title": 'AI Customer Support Automation', "href": '/ai-services', "price": 'Setup: $2k–$8k, usage-based', "bullets": ['Chat + email triage', 'Escalations', 'Knowledge mining'], "category"
  { "title": 'Predictive Analytics & Forecasting', "href": '/ai-services', "price": 'Project: $4k–$20k', "bullets": ['Demand', 'Churn', 'Revenue'], "category"
  { "title": 'LLM Evaluation & Safety Suite', "href": '/ai-services', "price": 'Typical: $799–$3,500/month', "bullets": ['Guardrails', 'Jailbreak tests', 'Bias/toxicity'], "category"
  { "title": 'RAG Search & Knowledge Agents', "href": '/ai-services', "price": 'Project: $6k–$35k', "bullets": ['Hybrid search', 'Eval harness', 'Observability'], "category"
  { "title": 'Vision QA for Manufacturing', "href": '/ai-services', "price": 'Project: $8k–$50k', "bullets": ['Defect detect', 'Edge deploy', 'Dashboards'], "category"
  { "title": 'Cloud Platforms & SRE', "href": '/cloud-platforms', "price": 'Project: $8k–$60k', "bullets": ['Kubernetes', 'Serverless', 'IaC'], "category"
  { "title": 'Cybersecurity & Zero Trust', "href": '/cybersecurity', "price": 'Project: $6k–$40k', "bullets": ['ZTA', 'SOC2/GDPR', 'IR plan'], "category"
  { "title": 'Data Platform & MLOps', "href": '/data-analytics', "price": 'Project: $12k–$80k', "bullets": ['Data mesh', 'Feature store', 'ML pipelines'], "category"
  { "title": 'Observability & Reliability', "href": '/cloud-devops', "price": 'Project: $8k–$45k', "bullets": ['Tracing', 'SLO/SLI', 'Chaos drills'], "category"
const groups = [{ "name": 'Micro SaaS', "description": 'Lightweight, high-impact products delivered fast.', "color"
  { "name": 'AI Services', "description": 'Applied AI that moves business metrics.', "color"
  { "name": 'IT Services', "description": 'Reliable platforms, security, and operations.', "color"
export default function Services() { const title = 'Services — Zion Tech Group' const description = 'AI,Micro SaaS,and IT services with transparent pricing and clear outcomes.' return ( <> <Head> <title>{title}</title> <meta name="description" content={description} /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"> <h1 className="text-3xl md:text-4xl font-bold mb-3">Our Services</h1> <p className="text-gray-600 mb-8">Real,production-grade solutions. No mockups.</p> {groups.map((g) => ( <div key={g.name} className="mb-10"> <div className="flex items-baseline justify-between mb-3"> <h2 className={`text-2xl font-semibold ${g.color}`}>{g.name}</h2> <span className="text-sm text-gray-500">{g.description}</span> </div> <div className="grid gap-6 md:grid-cols-2"