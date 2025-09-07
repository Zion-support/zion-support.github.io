#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
;
console.log('🔧 Fixing all remaining syntax errors...');
;
// Fix help.tsx;
const helpContent = `import Head from 'next/head';
import { motion , BookOpen, MessageCircle, Phone, Mail, Search, ChevronRight  } from 'framer-motion';
import Layout from '../components/Layout';


const filesToFix = [
  {
    title: "Getting Started",
    icon: BookOpen,
    description: "Learn the basics and get up and running quickly",
    articles: [



    ]
  },
  {
    title: "Account & Billing",
    icon: MessageCircle,
    description: "Manage your account, billing, and subscription",
    articles: [


function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += findAndFixFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixAllRemaining(filePath)) {
        console.log(`Fixed remaining issues in: ${filePath}`);
        fixedCount++;
      }
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
`
  },
  {
    title: "Technical Support",
    icon: Phone,
    description: "Get help with technical issues and troubleshooting",
    articles: [


    if (req.method === 'POST') {
      const { title, content } = req.body;
      if (!title || !content) return res.status(400).json({ error: 'Title and content required' });

      // Mock slide creation
      const slide = {
        id: Date.now().toString(),
        title,
        content: 'Add concise, investor-relevant content here (120-150 words). Use metrics, milestones, or strategic plans.',
        createdAt: new Date().toISOString()
      };

      res.json({ slide });
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
`
  },
  {;
    "title": "Setting up cloud migration",
    "category": "Technical Support",
    "readTime": "10 min";
  },
  {;
    "title": "Understanding your billing",
    "category": "Account & Billing",
    "readTime": "3 min";
  }
];

export default function Help() {
  return (
    <Layout>
      <Head>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Find answers to your questions and get help with our services." />
      </Head>

console.log('✅ All remaining files fixed!');
