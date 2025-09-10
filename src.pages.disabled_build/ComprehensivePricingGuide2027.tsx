import React from "react"
import { Link  } from "react-router-dom";
export default function ComprehensivePricingGuide2027(...args: unknown[]): unknown {
  const serviceCategories = [
    {
      name: "AI & Machine Learning Services"
      icon: Brain;
      description: "Cutting-edge AI solutions for business transformation"
      color: "from-zion-cyan to-zion-purple"
      services: [
        {
          name: "AI Workflow Orchestrator"
          description: "Transform business processes with AI-powered workflow automation"
          price: "$299"
          period: "/month"
          features: ["AI-powered process optimization", "Visual workflow designer", "Automated execution", "Performance analytics", "Up to 50 workflows", "Standard integrations"]
          popular: true;
          link: "/services/ai-workflow-orchestrator"
        }
        {
          name: "AI Data Governance Platform"
          description: "Secure, govern, and manage data with AI-powered compliance automation"
          price: "$499"
          period: "/month"
          features: ["AI-powered data discovery", "Advanced access control", "Data lineage tracking", "Compliance automation", "Up to 10TB data", "Standard compliance templates"]
          popular: false;
          link: "/services/ai-data-governance-platform"
        }
        {
          name: "AI Customer Experience Analytics"
          description: "Transform customer insights into actionable intelligence with AI-powered analytics"
          price: "$399"
          period: "/month"
          features: ["Sentiment analysis", "Customer journey mapping", "Predictive analytics", "Personalization engine", "Up to 10K interactions", "Basic reporting"]
          popular: false;
          link: "/services/ai-customer-experience-analytics"
        }
      ]
    }
    {
      name: "Cloud & DevOps Services"
      icon: Network;
      description: "Scalable cloud infrastructure and development operations"
      color: "from-zion-blue to-zion-cyan"
      services: [
        {
          name: "Cloud DevOps"
          description: "Infrastructure automation and scaling solutions"
          price: "$599"
          period: "/month"
          features: ["Infrastructure as Code", "CI/CD pipelines", "Auto-scaling", "Monitoring & alerting", "24/7 support", "Multi-cloud support"]
          popular: false;
          link: "/services/cloud-devops"
        }
        {
          name: "IT Infrastructure"
          description: "Enterprise-grade infrastructure solutions"
          price: "$799"
          period: "/month"
          features: ["Network design", "Server management", "Security implementation", "Backup & recovery", "Performance optimization", "Compliance support"]
          popular: false;
          link: "/services/it-infrastructure"
        }
      ]
    }
    {
      name: "Security & Compliance Services"
      icon: Shield;
      description: "Enterprise-grade security and compliance solutions"
      color: "from-zion-red to-zion-orange"
      services: [
        {
          name: "Zero Trust Network Access"
          description: "Modern security architecture for enterprise networks"
          price: "$899"
          period: "/month"
          features: ["Identity verification", "Access control", "Threat detection", "Compliance monitoring", "Real-time alerts", "Security analytics"]
          popular: false;
          link: "/services/zero-trust-network-access"
        }
        {
          name: "Security Headers & CSP"
          description: "Web security hardening and content security policies"
          price: "$299"
          period: "/month"
          features: ["Security headers", "Content Security Policy", "XSS protection", "HTTPS enforcement", "Security monitoring", "Compliance reporting"]
          popular: false;
          link: "/services/security-headers-csp"
        }
      ]
    }
    {
      name: "Business Process Automation"
              icon: WorkflowIcon;
      description: "Streamline operations with intelligent automation"
      color: "from-zion-purple to-zion-pink"
      services: [
        {
          name: "AI Project Management"
          description: "AI-driven project optimization and management"
          price: "$449"
          period: "/month"
          features: ["AI task prioritization", "Resource optimization", "Risk assessment", "Progress tracking", "Team collaboration", "Performance analytics"]
          popular: false;
          link: "/services/ai-project-management"
        }
        {
          name: "AI Customer Support Automation"
          description: "Intelligent customer support with AI automation"
          price: "$349"
          period: "/month"
          features: ["Chatbot integration", "Ticket routing", "Knowledge base", "Sentiment analysis", "Performance metrics", "Multi-channel support"]
          popular: false;
          link: "/services/ai-customer-support-automation"
        }
      ]
    }
  };