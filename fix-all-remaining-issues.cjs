#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing all remaining issues...');

// Fix auth.ts
const authContent = `import type { NextApiRequest } from 'next';

export interface User {
  id: string;
  email: string;
  role: string;
}

export function getRequestUserEmail(req: NextApiRequest): string | null {
  const emailHeader = req.headers['x-user-email'];
  if (typeof emailHeader === 'string') {
    return emailHeader;
  }
  return null;
}

export function parseUserFromRequest(req: NextApiRequest): User | null {
  const email = getRequestUserEmail(req);
  if (!email) return null;
  
  return {
    id: email,
    email: email,
    role: isAdmin(email) ? 'admin' : 'user'
  };
}

export function isAdmin(email: string): boolean {
  const admins = (process.env.ADMIN_EMAILS || '').split(',').map((e) => e.trim().toLowerCase()).filter(Boolean);
  return admins.includes(email.toLowerCase());
}
`;

fs.writeFileSync('utils/auth.ts', authContent);
console.log('✅ Fixed utils/auth.ts');

// Fix fsdb.ts
const fsdbContent = `import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const mkdir = promisify(fs.mkdir);

const DATA_DIR = path.join(process.cwd(), 'data');
const UPLOADS_ROOT = path.join(process.cwd(), 'uploads');

export async function ensureDataDir(): Promise<void> {
  if (!fs.existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true });
  }
}

export async function writeData(filename: string, data: any): Promise<void> {
  await ensureDataDir();
  const filepath = path.join(DATA_DIR, filename);
  await writeFile(filepath, JSON.stringify(data, null, 2));
}

export async function readData(filename: string): Promise<any> {
  try {
    const content = await readFile(filepath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    return null;
  }
}

export async function createDispute(dispute: any): Promise<void> {
  const disputes = await readData('disputes.json') || [];
  disputes.push(dispute);
  await writeData('disputes.json', disputes);
}

export async function readAllDisputes(): Promise<any[]> {
  return await readData('disputes.json') || [];
}

export function generateCaseId(): string {
  return 'CASE-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

export function getDisputeUploadDir(caseId: string): string {
  return path.join(UPLOADS_ROOT, caseId);
}
`;

fs.writeFileSync('utils/fsdb.ts', fsdbContent);
console.log('✅ Fixed utils/fsdb.ts');

// Fix industry-solutions/finance/page.tsx
const financePageContent = `import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Finance Solutions | Zion Tech Group',
  description: 'Professional finance solutions for your business needs.',
  keywords: 'finance, solutions, business, technology'
}

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Finance Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional finance solutions for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-white mb-4">Financial Planning</h3>
            <p className="text-gray-300">
              Comprehensive financial planning and analysis solutions.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-white mb-4">Analytics</h3>
            <p className="text-gray-300">
              Advanced financial analytics and reporting tools.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-white mb-4">Security</h3>
            <p className="text-gray-300">
              Secure financial data management and compliance.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today to learn how our finance solutions can transform your business.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  )
}
`;

fs.writeFileSync('app/services/industry-solutions/finance/page.tsx', financePageContent);
console.log('✅ Fixed industry-solutions/finance/page.tsx');

// Fix whitepaper/generate.ts
const whitepaperContent = `import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const client = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!client) {
    return res.status(500).json({ error: "OpenAI client not configured" });
  }

  try {
    const { topic, industry, targetAudience } = req.body;
    
    const prompt = \`Generate a comprehensive whitepaper about \${topic} for the \${industry} industry targeting \${targetAudience}.\`;
    
    const completion = await client.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 4000,
    });

    const content = completion.choices[0]?.message?.content || "Failed to generate content";
    
    return res.status(200).json({ 
      success: true, 
      content,
      topic,
      industry,
      targetAudience
    });
  } catch (error) {
    console.error("Error generating whitepaper:", error);
    return res.status(500).json({ error: "Failed to generate whitepaper" });
  }
}
`;

fs.writeFileSync('pages/api/whitepaper/generate.ts', whitepaperContent);
console.log('✅ Fixed pages/api/whitepaper/generate.ts');

// Fix AIServices.tsx - add missing comma
const aiservicesPath = 'pages/AIServices.tsx';
if (fs.existsSync(aiservicesPath)) {
  let content = fs.readFileSync(aiservicesPath, 'utf8');
  content = content.replace(
    'targetUsers: "Enterprises, Security Teams, IT Departments"\n    features: [',
    'targetUsers: "Enterprises, Security Teams, IT Departments",\n    features: ['
  );
  fs.writeFileSync(aiservicesPath, content);
  console.log('✅ Fixed pages/AIServices.tsx');
}

console.log('🎉 All remaining issues fixed!');