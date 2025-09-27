#!/usr/bin/env node

import fs from 'fs';

// Fix dashboard.tsx
const dashboardContent = `import React from "react";
import Head from "next/head";
import { useState } from "react";
import SEO from "../src/components/SEO";
import { useAnalytics } from "../src/hooks/useAnalytics";

const Dashboard = React.memo(function Dashboard(): JSX.Element {
  const [activeTab, setActiveTab] = useState("overview");
  const [isRealTime, setIsRealTime] = useState(false);

  // Analytics tracking
  const { trackClick } = useAnalytics();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    trackClick(\`dashboard-tab-\${tab}\`, "navigation");
  };

  const renderDashboard = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isRealTime}
                    onChange={(e) => setIsRealTime(e.target.checked)}
                    className="mr-2"
                  />
                  Real-time Updates
                </label>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Total Users</h3>
                <p className="text-3xl font-bold text-blue-600">1,234</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Active Sessions</h3>
                <p className="text-3xl font-bold text-green-600">567</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Revenue</h3>
                <p className="text-3xl font-bold text-purple-600">$12,345</p>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Tab content not found</div>;
    }
  };

  return (
    <>
      <SEO 
        title="Dashboard - Zion Tech Group"
        description="Access your dashboard and manage your account"
        keywords="dashboard, analytics, management"
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto">
          <div className="flex border-b">
            <button
              onClick={() => handleTabChange("overview")}
              className={\`px-6 py-3 font-medium \${
                activeTab === "overview" 
                  ? "border-b-2 border-blue-500 text-blue-600" 
                  : "text-gray-500 hover:text-gray-700"
              }\`}
            >
              Overview
            </button>
          </div>
          {renderDashboard()}
        </div>
      </main>
    </>
  );
});

export default Dashboard;
`;

// Fix services.tsx
const servicesContent = `import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Services(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { trackClick } = useAnalytics();

  const serviceDetails = {
    'ai-ml': {
      title: 'AI & Machine Learning',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',
      features: [
        'Natural Language Processing (NLP)',
        'Computer Vision',
        'Predictive Analytics',
        'Automated Decision Making'
      ]
    },
    'cloud': {
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions tailored to your business needs.',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Auto-scaling Solutions',
        'Disaster Recovery'
      ]
    },
    'cybersecurity': {
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions and best practices.',
      features: [
        'Security Audits',
        'Threat Detection',
        'Data Protection',
        'Compliance Management'
      ]
    }
  };

  return (
    <>
      <SEO 
        title="Services - Zion Tech Group"
        description="Comprehensive technology services including AI, cloud infrastructure, and cybersecurity."
        keywords="services, AI, cloud, cybersecurity, technology"
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(serviceDetails).map(([key, service]) => (
              <div key={key} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  onClick={() => trackClick(\`service-\${key}\`, 'engagement')}
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
`;

// Fix 404.tsx
const notFoundContent = `import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion App</title>
        <meta name="description" content="The page you are looking for doesn't exist." />
      </Head>
      <div style={{ 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "20px"
      }}>
        <h1 style={{ fontSize: "4rem", marginBottom: "1rem", color: "#1f2937" }}>
          404
        </h1>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#374151" }}>
          Page Not Found
        </h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem", color: "#6b7280" }}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "1.1rem",
            fontWeight: "600"
          }}
        >
          Go Home
        </Link>
      </div>
    </>
  );
}
`;

// Fix AccessibilityAuditor.tsx
const accessibilityAuditorContent = `import { useEffect } from "react";

interface AccessibilityIssue {
  type: "error" | "warning" | "info";
  message: string;
  element?: HTMLElement;
  rule?: string;
}

interface AccessibilityAuditorProps {
  onIssuesFound?: (issues: AccessibilityIssue[]) => void;
}

export default function AccessibilityAuditor({ onIssuesFound }: AccessibilityAuditorProps) {
  useEffect(() => {
    const checkAccessibility = () => {
      const issues: AccessibilityIssue[] = [];
      
      // Check for missing alt attributes
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.getAttribute('alt')) {
          issues.push({
            type: 'error',
            message: 'Image missing alt attribute',
            element: img,
            rule: 'img-alt'
          });
        }
      });
      
      // Check for missing form labels
      const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
      inputs.forEach((input) => {
        const id = input.getAttribute('id');
        if (id && !document.querySelector(\`label[for="\${id}"]\`)) {
          issues.push({
            type: 'warning',
            message: 'Input missing associated label',
            element: input as HTMLElement,
            rule: 'label'
          });
        }
      });
      
      if (onIssuesFound) {
        onIssuesFound(issues);
      }
    };
    
    checkAccessibility();
  }, [onIssuesFound]);
  
  return null;
}
`;

// Fix PerformanceOptimizer.tsx
const performanceOptimizerContent = `import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";

interface PerformanceOptimizerProps {
  enableServiceWorker?: boolean;
  enableLazyLoading?: boolean;
  enableImageOptimization?: boolean;
}

export default function PerformanceOptimizer({ 
  enableServiceWorker = true,
  enableLazyLoading = true,
  enableImageOptimization = true
}: PerformanceOptimizerProps) {
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    const optimizePerformance = () => {
      // Enable lazy loading for images
      if (enableLazyLoading && typeof window !== 'undefined') {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || '';
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          });
        });
        
        images.forEach(img => imageObserver.observe(img));
      }
      
      setIsOptimized(true);
    };
    
    optimizePerformance();
  }, [enableLazyLoading]);
  
  return (
    <div className="performance-optimizer">
      {isOptimized && (
        <div className="text-sm text-green-600">
          Performance optimizations enabled
        </div>
      )}
    </div>
  );
}
`;

// Write all files
console.log('Fixing all remaining syntax errors...');

fs.writeFileSync('pages/dashboard.tsx', dashboardContent);
console.log('Fixed pages/dashboard.tsx');

fs.writeFileSync('pages/services.tsx', servicesContent);
console.log('Fixed pages/services.tsx');

fs.writeFileSync('pages/404.tsx', notFoundContent);
console.log('Fixed pages/404.tsx');

fs.writeFileSync('src/components/AccessibilityAuditor.tsx', accessibilityAuditorContent);
console.log('Fixed src/components/AccessibilityAuditor.tsx');

fs.writeFileSync('src/components/PerformanceOptimizer.tsx', performanceOptimizerContent);
console.log('Fixed src/components/PerformanceOptimizer.tsx');

console.log('All syntax fixes completed!');