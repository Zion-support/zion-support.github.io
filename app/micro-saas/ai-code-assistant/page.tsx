'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Play, Copy, Download, RefreshCw, CheckCircle, Zap, Bug, Lightbulb, Shield, Rocket, FileText, Terminal, GitBranch, Cpu } from 'lucide-react';

const AICodeAssistantPage: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [codeInput, setCodeInput] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedTask, setSelectedTask] = useState('optimize');

  const languages = [
    { value: 'javascript', label: 'JavaScript', icon: '🟨' },
    { value: 'python', label: 'Python', icon: '🐍' },
    { value: 'typescript', label: 'TypeScript', icon: '🔷' },
    { value: 'react', label: 'React', icon: '⚛️' },
    { value: 'nodejs', label: 'Node.js', icon: '🟢' },
    { value: 'java', label: 'Java', icon: '☕' },
    { value: 'csharp', label: 'C#', icon: '🔵' },
    { value: 'go', label: 'Go', icon: '🐹' },
    { value: 'rust', label: 'Rust', icon: '🦀' },
    { value: 'php', label: 'PHP', icon: '🐘' }
  ];

  const tasks = [
    { id: 'optimize', name: 'Optimize Code', icon: Zap, description: 'Improve performance and efficiency' },
    { id: 'debug', name: 'Debug Code', icon: Bug, description: 'Find and fix bugs' },
    { id: 'explain', name: 'Explain Code', icon: Lightbulb, description: 'Add comments and documentation' },
    { id: 'refactor', name: 'Refactor Code', icon: RefreshCw, description: 'Improve code structure' },
    { id: 'generate', name: 'Generate Code', icon: Code, description: 'Create new functionality' },
    { id: 'test', name: 'Generate Tests', icon: Shield, description: 'Create unit tests' }
  ];

  const codeExamples = {
    javascript: `// Example: Array manipulation
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);`,
    python: `# Example: List comprehension
numbers = [1, 2, 3, 4, 5]
doubled = [n * 2 for n in numbers]
print(doubled)`,
    react: `// Example: React component
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
    typescript: `// Example: TypeScript interface
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function createUser(userData: Partial<User>): User {
  return {
    id: Math.random(),
    name: userData.name || '',
    email: userData.email || '',
    isActive: userData.isActive ?? true
  };
}`
  };

  const generateCode = async () => {
    if (!codeInput.trim()) return;
    
    setIsGenerating(true);
    setGeneratedCode('');
    
    // Simulate AI code generation
    setTimeout(() => {
      const sampleCode = generateSampleCode(selectedLanguage, selectedTask, codeInput);
      setGeneratedCode(sampleCode);
      setIsGenerating(false);
    }, 2000);
  };

  const generateSampleCode = (language: string, task: string, input: string) => {
    const templates = {
      optimize: {
        javascript: `// Optimized version with better performance
const numbers = [1, 2, 3, 4, 5];

// Using for loop instead of map for better performance
const doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}

// Or using reduce for functional approach
const doubledFunctional = numbers.reduce((acc, n) => {
  acc.push(n * 2);
  return acc;
}, []);

console.log('Optimized result:', doubled);`,
        python: `# Optimized version with better performance
numbers = [1, 2, 3, 4, 5]

# Using list comprehension (faster than map)
doubled = [n * 2 for n in numbers]

# Or using numpy for large datasets
import numpy as np
numbers_array = np.array(numbers)
doubled_numpy = numbers_array * 2

print(f"Optimized result: {doubled}")`,
        react: `// Optimized React component with performance improvements
import React, { useState, useCallback, memo } from 'react';

const Counter = memo(() => {
  const [count, setCount] = useState(0);
  
  // Memoized callback to prevent unnecessary re-renders
  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
});

export default Counter;`
      },
      debug: {
        javascript: `// Debugged version with error handling
const numbers = [1, 2, 3, 4, 5];

try {
  // Added null check and type validation
  if (!Array.isArray(numbers)) {
    throw new Error('Input must be an array');
  }
  
  const doubled = numbers.map(n => {
    if (typeof n !== 'number') {
      console.warn('Non-numeric value found:', n);
      return 0;
    }
    return n * 2;
  });
  
  console.log('Debugged result:', doubled);
} catch (error) {
  console.error('Error processing numbers:', error.message);
}`,
        python: `# Debugged version with error handling
numbers = [1, 2, 3, 4, 5]

try:
    # Added type checking and validation
    if not isinstance(numbers, list):
        raise TypeError("Input must be a list")
    
    doubled = []
    for i, n in enumerate(numbers):
        if not isinstance(n, (int, float)):
            print(f"Warning: Non-numeric value at index {i}: {n}")
            doubled.append(0)
        else:
            doubled.append(n * 2)
    
    print(f"Debugged result: {doubled}")
except Exception as e:
    print(f"Error processing numbers: {e}")`
      },
      explain: {
        javascript: `/**
 * Array Manipulation Example
 * 
 * This code demonstrates how to double each number in an array
 * using the map() method, which creates a new array with the results
 * of calling a function for every array element.
 */

const numbers = [1, 2, 3, 4, 5]; // Original array of numbers

// Map function creates a new array by applying a function to each element
// Arrow function syntax: (parameter) => { return expression }
const doubled = numbers.map(n => n * 2);

// Log the result to console for verification
console.log(doubled); // Output: [2, 4, 6, 8, 10]`,
        python: `"""
Array Manipulation Example

This code demonstrates how to double each number in a list
using list comprehension, which is a concise way to create lists
based on existing lists.
"""

numbers = [1, 2, 3, 4, 5]  # Original list of numbers

# List comprehension: [expression for item in iterable]
# This creates a new list by applying the expression to each item
doubled = [n * 2 for n in numbers]

# Print the result for verification
print(doubled)  # Output: [2, 4, 6, 8, 10]`
      }
    };

    const taskTemplates = templates[task as keyof typeof templates];
    return taskTemplates?.[language as keyof typeof taskTemplates] || `// Generated ${task} code for ${language}\n${input}`;
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadCode = () => {
    const extension = selectedLanguage === 'javascript' ? 'js' : 
                     selectedLanguage === 'python' ? 'py' : 
                     selectedLanguage === 'typescript' ? 'ts' : 
                     selectedLanguage === 'react' ? 'jsx' : 'txt';
    
    const blob = new Blob([generatedCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-generated-code.${extension}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const loadExample = () => {
    setCodeInput(codeExamples[selectedLanguage as keyof typeof codeExamples] || '');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Code Assistant - Zion Tech Group | Intelligent Code Generation & Optimization</title>
        <meta name="description" content="Boost your coding productivity with our AI-powered code assistant. Generate, optimize, debug, and explain code in multiple programming languages." />
        <meta name="keywords" content="AI code assistant, code generation, code optimization, debugging, programming, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center">
              <Code className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI Code Assistant
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Supercharge your coding with AI-powered assistance. Generate, optimize, debug, and explain code 
            in multiple programming languages with intelligent suggestions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>10+ Languages</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Real-time Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Best Practices</span>
            </div>
          </div>
        </div>
      </section>

      {/* Code Assistant Tool */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">AI Code Assistant</h2>
            
            {/* Language Selection */}
            <div className="mb-8">
              <label className="block text-white text-lg font-medium mb-4">Select Programming Language</label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {languages.map((lang) => (
                  <button
                    key={lang.value}
                    onClick={() => setSelectedLanguage(lang.value)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedLanguage === lang.value
                        ? 'border-green-400 bg-green-400/10 text-green-400'
                        : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-2xl mb-2">{lang.icon}</div>
                    <div className="font-medium">{lang.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Task Selection */}
            <div className="mb-8">
              <label className="block text-white text-lg font-medium mb-4">What would you like to do?</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {tasks.map((task) => (
                  <button
                    key={task.id}
                    onClick={() => setSelectedTask(task.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedTask === task.id
                        ? 'border-blue-400 bg-blue-400/10 text-blue-400'
                        : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40 hover:bg-white/10'
                    }`}
                  >
                    <task.icon className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-medium">{task.name}</div>
                    <div className="text-xs opacity-75">{task.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Code Input */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <label className="text-white text-lg font-medium">
                  Your Code
                </label>
                <button
                  onClick={loadExample}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm"
                >
                  <FileText className="w-4 h-4" />
                  Load Example
                </button>
              </div>
              <textarea
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value)}
                placeholder={`Enter your ${selectedLanguage} code here...`}
                className="w-full h-48 p-4 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 resize-none font-mono text-sm"
              />
            </div>

            {/* Generate Button */}
            <div className="text-center mb-8">
              <button
                onClick={generateCode}
                disabled={!codeInput.trim() || isGenerating}
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center gap-3 mx-auto"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    Generate Code
                  </>
                )}
              </button>
            </div>

            {/* Generated Code */}
            {generatedCode && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">Generated Code</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                    >
                      {copied ? <CheckCircle className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                    <button
                      onClick={downloadCode}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
                <div className="bg-slate-800 border border-slate-600 rounded-xl p-6">
                  <pre className="text-gray-300 whitespace-pre-wrap font-mono text-sm leading-relaxed overflow-x-auto">
                    {generatedCode}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Powerful AI Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Code Generation</h3>
              <p className="text-gray-300">Generate clean, efficient code from natural language descriptions or existing code snippets.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Bug className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Smart Debugging</h3>
              <p className="text-gray-300">AI-powered bug detection and fixing suggestions to help you resolve issues faster.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Code Explanation</h3>
              <p className="text-gray-300">Get detailed explanations of complex code with comments and documentation generation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Performance Optimization</h3>
              <p className="text-gray-300">Optimize your code for better performance, memory usage, and efficiency.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Test Generation</h3>
              <p className="text-gray-300">Automatically generate comprehensive unit tests for your code with high coverage.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Code Refactoring</h3>
              <p className="text-gray-300">Improve code structure, readability, and maintainability with AI suggestions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Languages */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Supported Languages</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {languages.map((lang) => (
              <div key={lang.value} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-4">{lang.icon}</div>
                <div className="text-white font-medium">{lang.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300">Choose the plan that fits your coding needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Developer</h3>
              <div className="text-4xl font-bold text-green-400 mb-6">$39<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  100 code generations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  All programming languages
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic debugging
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105">
                Start Free Trial
              </button>
            </div>
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-green-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-green-400 mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  500 code generations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  All programming languages
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced debugging
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Code optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Test generation
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105">
                Start Free Trial
              </button>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-green-400 mb-6">$299<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited generations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  All programming languages
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced AI features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  API access
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Team collaboration
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom models
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-12 border border-green-400/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Code Smarter?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers who trust our AI to enhance their coding productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 Call us: <a href="tel:+13024640950" className="text-green-400 hover:text-green-300">+1 302 464 0950</a></p>
              <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300">kleber@ziontechgroup.com</a></p>
              <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICodeAssistantPage;