import fs from "fs";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
// #!/usr/bin/env node

const filesToFix = [
//   "app/ai-voice-assistant/page.tsx",
//   "app/ai-expense-tracker/page.tsx",
//   "app/system-integration/page.tsx",
//   "app/ai-video-editor/page.tsx",
//   "app/ai-project-management-pro/page.tsx",
//   "app/cloud-migration-pro/page.tsx",
//   "app/ai-social-media-manager/page.tsx",
//   "app/micro-saas-services/page.tsx",
];

const basicComponent = `'use client';

export default function Page() {;
  return (
//     <>
//       <Helmet>
//         <title>Service - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="AI solutions, IT services, Zion Tech Group" />
        <meta property="og:title" content="Service - Zion Tech Group" />
        <meta property="og:description" content="Professional services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/service" />
//       </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
//               Professional services by Zion Tech Group. Expert solutions tailored to your business needs.
</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
//                 Ready to Get Started?
</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//                 Contact us to learn more about our solutions and how we can help your business.
</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
  );
}`;

for (const file of filesToFix) {
  try {
    fs.writeFileSync(file, basicComponent);
    } catch (error) {
    }
}
