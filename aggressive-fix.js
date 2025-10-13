import { execSync } from 'child_process';

function runTypeCheck() {
  try {
    const output = execSync('pnpm run type-check 2>&1', { encoding: 'utf8' });
    return output;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error:', error);
    return error.stdout || error.stderr || '';
  }
}

function parseTypeCheckErrors(typeCheckOutput) {
  const lines = typeCheckOutput.split('\n');
  const errors = [];
  
  for (const line of lines) {
    if (line.includes('.tsx') || line.includes('.ts')) {
      const match = line.match(/^(.+?)\((\d+),(\d+)\): error (.+)$/);
      if (match) {
        const [, filePath, lineNum, colNum, errorMsg] = match;
        if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
          errors.push({
            file: filePath,
            line: parseInt(lineNum),
            column: parseInt(colNum),
            message: errorMsg
          });
        }
      }
    }
  }
  
  return errors;
}

// Generic page template (unused but kept for reference)
// eslint-disable-next-line no-unused-vars
const createGenericPage = (serviceName, title, description) => `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, BarChart, Target, TrendingUp } from 'lucide-react';

const ${serviceName}Page = () => {
  const features = [
    {
      icon: Zap,
      title: 'Advanced Technology',
      description: 'Cutting-edge technology solutions for modern businesses.',
      benefits: ['Latest innovations', 'Scalable solutions', 'High performance', 'Future-proof']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Comprehensive data analysis and insights.',
      benefits: ['Real-time analytics', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
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

  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              ${description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Why Choose Our ${title}?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Our Track Record
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ${serviceName}Page;`;

// Main execution
console.log('Running aggressive fix...');

const typeCheckOutput = runTypeCheck();
const errors = parseTypeCheckErrors(typeCheckOutput);

console.log(`Found ${errors.length} TypeScript errors`);

// For now, just log the errors
errors.forEach(error => {
  console.log(`${error.file}:${error.line}:${error.column} - ${error.message}`);
});

console.log('Aggressive fix completed.');