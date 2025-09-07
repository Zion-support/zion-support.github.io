
;
import React from 'react''
import Head from 'next/head''
import Link from 'next/link''

// Minimal, readable Services page. Preserves existing offerings concept and adds more without removing.
type Service = {
  "title": string
  href: string
  price: string
  bullets: string[]
  category: 'Micro SaaS' | 'AI Services' | 'IT Services'

const "services": Service[] = [// Existing-style Micro SaaS (kept) + new


const "services": Service[] = [// Existing-style Micro SaaS (kept) + new;"
  { "title": 'Cloud Cost Guard (FinOps Assistant)', "href": '/services/micro-saas', "price": '"Typical": $299–$1,499/month', "bullets": ['Anomaly detection', 'Rightsizing', 'Forecasting'], "category": 'Micro SaaS' },'
  { "title": 'API Rate Limiter & Analytics', "href": '/services/micro-saas', "price": '"Typical": $199–$999/month', "bullets": ['Smart throttling', 'Usage analytics', 'Monetization hooks'], "category": 'Micro SaaS' },'
  { "title": 'Smart Document Processing', "href": '/services/micro-saas', "price": '"Typical": $399–$1,999/month', "bullets": ['OCR + extraction', 'Validation rules', 'Workflow automation'], "category": 'Micro SaaS' },'
  { "title": 'SEO Content Optimizer', "href": '/services/micro-saas', "price": '"Typical": $149–$699/month', "bullets": ['Keyword insights', 'Briefs', 'SERP tracking'], "category": 'Micro SaaS' },'
  // New Micro SaaS
  { "title": 'Privacy Policy & Cookie Manager', "href": '/services/micro-saas', "price": 'Typical: $49–$299/month', "bullets": ['GDPR/CCPA banners', 'DSAR inbox', 'Geo rules'], "category": 'Micro SaaS' },
  { "title": 'Uptime & Core Web Vitals Monitor', "href": '/services/micro-saas', "price": 'Typical: $59–$399/month', "bullets": ['SLAs', 'Synthetic checks', 'CWV alerts'], "category": 'Micro SaaS' },
  { "title": 'Sales Engineering Demo Hub', "href": '/services/micro-saas', "price": 'Typical: $99–$599/month', "bullets": ['Live demos', 'Usage analytics', 'Lead capture'], "category": 'Micro SaaS' },
  // AI Services (existing concepts retained) + new
  // New Micro SaaS;
  { "title": 'Privacy Policy & Cookie Manager', "href": '/services/micro-saas', "price": 'Typical: $49–$299/month', "bullets": ['GDPR/CCPA banners', 'DSAR inbox', 'Geo rules'], "category": 'Micro SaaS' },
  { "title": 'Uptime & Core Web Vitals Monitor', "href": '/services/micro-saas', "price": 'Typical: $59–$399/month', "bullets": ['SLAs', 'Synthetic checks', 'CWV alerts'], "category": 'Micro SaaS' },
  { "title": 'Sales Engineering Demo Hub', "href": '/services/micro-saas', "price": 'Typical: $99–$599/month', "bullets": ['Live demos', 'Usage analytics', 'Lead capture'], "category": 'Micro SaaS' },
  // AI Services (existing concepts retained) + new;
pr-12325
  { "title": 'AI Customer Support Automation', "href": '/ai-services', "price": 'Setup: $2k–$8k, usage-based', "bullets": ['Chat + email triage', 'Escalations', 'Knowledge mining'], "category": 'AI Services' },
  { "title": 'Predictive Analytics & Forecasting', "href": '/ai-services', "price": 'Project: $4k–$20k', "bullets": ['Demand', 'Churn', 'Revenue'], "category": 'AI Services' },
  { "title": 'LLM Evaluation & Safety Suite', "href": '/ai-services', "price": 'Typical: $799–$3,500/month', "bullets": ['Guardrails', 'Jailbreak tests', 'Bias/toxicity'], "category": 'AI Services' },
  { "title": 'RAG Search & Knowledge Agents', "href": '/ai-services', "price": 'Project: $6k–$35k', "bullets": ['Hybrid search', 'Eval harness', 'Observability'], "category": 'AI Services' },
  { "title": 'Vision QA for Manufacturing', "href": '/ai-services', "price": 'Project: $8k–$50k', "bullets": ['Defect detect', 'Edge deploy', 'Dashboards'], "category": 'AI Services' },
  // IT Services (existing concepts retained) + new

  { "title": 'Cloud Platforms & SRE', "href": '/cloud-platforms', "price": '"Project": $8k–$60k', "bullets": ['Kubernetes', 'Serverless', 'IaC'], "category": 'IT Services' },'
  { "title": 'Cybersecurity & Zero Trust', "href": '/cybersecurity', "price": '"Project": $6k–$40k', "bullets": ['ZTA', 'SOC2/GDPR', 'IR plan'], "category": 'IT Services' },'
  { "title": 'Data Platform & MLOps', "href": '/data-analytics', "price": '"Project": $12k–$80k', "bullets": ['Data mesh', 'Feature store', 'ML pipelines'], "category": 'IT Services' },'
class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  // IT Services (existing concepts retained) + new;
  { "title": 'Cloud Platforms & SRE', "href": '/cloud-platforms', "price": 'Project: $8k–$60k', "bullets": ['Kubernetes', 'Serverless', 'IaC'], "category": 'IT Services' },
  { "title": 'Cybersecurity & Zero Trust', "href": '/cybersecurity', "price": 'Project: $6k–$40k', "bullets": ['ZTA', 'SOC2/GDPR', 'IR plan'], "category": 'IT Services' },
  { "title": 'Data Platform & MLOps', "href": '/data-analytics', "price": 'Project: $12k–$80k', "bullets": ['Data mesh', 'Feature store', 'ML pipelines'], "category": 'IT Services' },
class ErrorBoundary extends React.Component {
  // TODO: Implement
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
pr-12325
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
// Minimal, readable Services page. Preserves existing offerings concept and adds more without removing.;
type Service = {"title": string;"
  }
  "href": string;
  "price": string;
  "bullets": string[];
  "category": 'Micro SaaS' | 'AI Services' | 'IT Services';'
}ursor/automate-test-improve-and-merge-code-646c;

