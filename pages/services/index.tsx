import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, DollarSign, Target, Rocket } from 'lucide-react';

const ServicesPage: NextPage = () => {
  const services = [
    {
      category: "Micro SaaS",
      items: [
        { name: "AI SEO Auditor", href: "/services/micro-saas/ai-seo-auditor", price: "from $199/mo" },
        { name: "Lead Enrichment API", href: "/services/micro-saas/lead-enrichment", price: "from $149/mo" },
        { name: "Contract AI Extractor", href: "/services/micro-saas/contract-ai", price: "from $349/mo" },
        { name: "Smart Churn Predictor", href: "/services/micro-saas/smart-churn", price: "from $299/mo" },
        { name: "AI QA Copilot", href: "/services/micro-saas/ai-qa", price: "from $99/mo" }
      ]
    },
    {
      category: "AI Solutions",
      items: [
        { name: "Revenue Ops Intelligence", href: "/services/ai/revenue-ops", price: "projects from $12k" },
        { name: "AI-Powered Analytics", href: "/services/ai/analytics", price: "from $2k/mo" },
        { name: "Natural Language Processing", href: "/services/ai/nlp", price: "from $1.5k/mo" }
      ]
    },
    {
      category: "IT Services",
      items: [
        { name: "Cloud Infrastructure", href: "/services/it/cloud", price: "from $5k/mo" },
        { name: "DevOps Automation", href: "/services/it/devops", price: "from $3k/mo" },
        { name: "Cybersecurity", href: "/services/it/security", price: "from $4k/mo" }
      ]
    }
  ];

  return (
    <div>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of Micro SaaS, AI, and IT services designed to accelerate your business growth." />
      </Head>
      
      <main style={{ fontFamily: 'system-ui, sans-serif', lineHeight: 1.5, padding: '32px', maxWidth: 1120, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 style={{ marginTop: 0, fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Our Services
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
            Productized services and platforms you can deploy now to accelerate your business growth.
          </p>

          {services.map((service, index) => (
            <motion.div
              key={service.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ marginBottom: '3rem' }}
            >
              <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1rem', color: '#333' }}>
                {service.category}
              </h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {service.items.map((item, itemIndex) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                    style={{
                      padding: '1rem',
                      marginBottom: '0.5rem',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '8px',
                      border: '1px solid #e9ecef',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#e3f2fd';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#f8f9fa';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <Link 
                      href={item.href}
                      style={{ 
                        textDecoration: 'none', 
                        color: '#1976d2',
                        fontWeight: '500',
                        fontSize: '1.1rem'
                      }}
                    >
                      {item.name}
                    </Link>
                    <span style={{ color: '#666', fontWeight: '500' }}>
                      {item.price}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              marginTop: '3rem',
              padding: '2rem',
              backgroundColor: '#f0f8ff',
              borderRadius: '12px',
              border: '1px solid #b3d9ff',
              textAlign: 'center'
            }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#1976d2' }}>
              Ready to Get Started?
            </h3>
            <p style={{ marginBottom: '1.5rem', color: '#666' }}>
              Contact us to discuss your specific needs and get a customized solution.
            </p>
            <Link 
              href="/contact"
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                backgroundColor: '#1976d2',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: '500',
                transition: 'background-color 0.3s ease'
              }}
            >
              Get Started Today
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default ServicesPage;