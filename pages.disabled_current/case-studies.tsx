import React from "react";
import Head from "next/head";
export default function CaseStudiesPage() {

  const caseStudies = [
    {
      title: "Global E-commerce Platform Automation",
      company: "TechRetail Inc.",
      industry: "E-commerce",
      challenge: "Managing 10,000+ daily orders across multiple regions with manual processes",
      solution: "Implemented autonomous order processing, inventory management, and customer service automation",
      results: [
        "99.9% order accuracy",
        "60% reduction in processing time",
        "40% cost savings",
        "24/7 automated operations"
      ],
      technologies: ["AI Order Processing", "Inventory Automation", "Customer Service Bots", "Real-time Analytics"]
    },
    {
      title: "Financial Services Compliance Automation",
      company: "SecureBank Ltd.",
      industry: "Financial Services",
      challenge: "Complex regulatory compliance requiring constant monitoring and reporting",
      solution: "Built autonomous compliance monitoring system with real-time risk assessment and automated reporting",
      results: [
        "100% compliance rate maintained",
        "90% faster regulatory reporting",
        "Real-time risk detection",
        "Automated audit trails"
      ],
      technologies: ["Compliance Monitoring", "Risk Assessment AI", "Automated Reporting", "Audit Automation"]
    },
    {
      title: "Healthcare Data Processing Automation",
      company: "MediTech Solutions",
      industry: "Healthcare",
      challenge: "Processing millions of patient records while maintaining HIPAA compliance",
      solution: "Developed secure, autonomous data processing pipeline with privacy-preserving AI",
      results: [
        "10x faster data processing",
        "Zero HIPAA violations",
        "99.99% data accuracy",
        "Automated quality checks"
      ],
      technologies: ["HIPAA-Compliant AI", "Data Pipeline Automation", "Privacy-Preserving ML", "Quality Assurance"]
    },
    {
      title: "Manufacturing Quality Control",
      company: "Precision Manufacturing Co.",
      industry: "Manufacturing",
      challenge: "Manual quality inspection causing delays and inconsistent results",
      solution: "Implemented computer vision and AI-powered quality control automation",
      results: [
        "95% defect detection rate",
        "80% faster inspection process",
        "Zero production delays",
        "Continuous quality improvement"
      ],
      technologies: ["Computer Vision AI", "Quality Control Automation", "Predictive Maintenance", "Real-time Monitoring"]