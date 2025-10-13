// import fs from 'fs';
// import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

function runTypeCheck() {
  try {
    const output = execSync('pnpm run type-check 2>&1', { encoding: 'utf8' });
    return output;
  } catch (error) {
    // console.error('Error:', error.message);
    return error.stdout || error.stderr || '';
  }
}

function parseTypeCheckErrors(typeCheckOutput) {
  const lines = typeCheckOutput.split('\n');
  const errors = [];
  
  for (const line of lines) {
    if (line.includes('error TS') && line.includes('(')) {
      const match = line.match(/\((\d+),(\d+)\): error TS\d+: (.+)/);
      if (match) {
        const filePath = line.split('(')[0].trim();
        if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
          errors.push({
            file: filePath,
            line: parseInt(match[1]),
            column: parseInt(match[2]),
            message: match[3]
          });
        }
      }
    }
  }
  
  return errors;
}

const createGenericPage = (serviceName, title, description) => `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, BarChart, Target, TrendingUp } from 'lucide-react';

const ${serviceName}Page = () => {
  const features = [
    {
      icon: Star,
      title: 'Advanced Technology',
      description: 'Cutting-edge technology solutions for modern businesses.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">${title}</h1>
          <p className="text-xl text-gray-300 mb-12">${description}</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <feature.icon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ${serviceName}Page;
`;

export { runTypeCheck, parseTypeCheckErrors, createGenericPage };