import { execSync } from 'child_process';

function runTypeCheck() {
  try {
    const output = execSync('pnpm run type-check 2>&1', { encoding: 'utf8' });
    return output;
  } catch (error) {
    // eslint-disable-next-line no-undef
    console.error('Error:', error);
    return error.stdout || error.stderr || '';
  }
}

function parseTypeCheckOutput(typeCheckOutput) {
  const lines = typeCheckOutput.split('\n');
  const errors = [];
  
  for (const line of lines) {
    if (line.includes('.tsx') || line.includes('.ts')) {
      const match = line.match(/(.+\.(tsx?|ts))\((\d+),(\d+)\): error (.+)/);
      if (match) {
        const [, filePath, , lineNum, colNum, errorMsg] = match;
        errors.push({
          file: filePath,
          line: parseInt(lineNum),
          column: parseInt(colNum),
          message: errorMsg
        });
      }
    }
  }
  
  return errors;
}

const createGenericPage = (serviceName, title, description) => `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, BarChart, Target, TrendingUp } from 'lucide-react';

const features = [
  {
    title: 'Advanced Technology',
    description: 'Cutting-edge technology solutions for modern businesses.',
    benefits: ['Latest innovations', 'Scalable solutions', 'High performance', 'Future-proof']
  },
  {
    title: 'Data Analytics',
    description: 'Comprehensive data analysis and insights.',
    benefits: ['Real-time analytics', 'Custom reports', 'Data visualization', 'Performance metrics']
  },
  {
    title: 'Precision Solutions',
    description: 'Targeted solutions designed for your specific needs.',
    benefits: ['Custom solutions', 'Expert consultation', 'Proven results', 'Ongoing support']
  }
];

const stats = [
  { label: 'Projects Completed', value: '100+' },
  { label: 'Success Rate', value: '98%' },
  { label: 'Client Satisfaction', value: '99%' },
  { label: 'Years Experience', value: '5+' }
];

export default function ${serviceName}Page() {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              ${title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              ${description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}`;

export { runTypeCheck, parseTypeCheckOutput, createGenericPage };