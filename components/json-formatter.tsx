import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  Code,
  Copy,
  RefreshCw,
  CheckCircle,
  XCircle,
  ArrowRight,
  Download,
  Upload,
  Settings,
  Eye,;
} from 'lucide-react';

=======
import { Code, Copy, RefreshCw, CheckCircle, XCircle, ArrowRight, Download, Upload, Settings, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { Code, Copy, RefreshCw, CheckCircle, XCircle, ArrowRight, Download, Upload, Settings, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
export default function JSONFormatterPage() {
  const [inputJson, setInputJson] = useState('');
  const [formattedJson, setFormattedJson] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [indentSize, setIndentSize] = useState(2);
  const [compactMode, setCompactMode] = useState(false);
  const [showLineNumbers, setShowLineNumbers] = useState(true);

  const formatJSON = () => {
    if (!inputJson.trim()) {
      setFormattedJson('');
      setIsValid(true);
      setErrorMessage('');
<<<<<<< HEAD
<<<<<<< HEAD
      return;
=======
      return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }

    try {
      const parsed = JSON.parse(inputJson);
<<<<<<< HEAD
<<<<<<< HEAD
      const formatted = compactMode
=======
      const formatted = compactMode 
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        ? JSON.stringify(parsed)
        : JSON.stringify(parsed, null, indentSize);
      
      setFormattedJson(formatted);
      setIsValid(true);
      setErrorMessage('')
    } catch (error) {
      setIsValid(false);
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON');
<<<<<<< HEAD
      setFormattedJson('');
=======
      const formatted = compactMode 
        ? JSON.stringify(parsed)
        : JSON.stringify(parsed, null, indentSize);
      
      setFormattedJson(formatted);
      setIsValid(true);
      setErrorMessage('')
    } catch (error) {
      setIsValid(false);
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON');
      setFormattedJson('')
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      setFormattedJson('')
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  };

  const minifyJSON = () => {
    if (!inputJson.trim()) return;
<<<<<<< HEAD
<<<<<<< HEAD

=======
    
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    try {
      const parsed = JSON.parse(inputJson);
      const minified = JSON.stringify(parsed);
      setFormattedJson(minified);
      setIsValid(true);
<<<<<<< HEAD
<<<<<<< HEAD
      setErrorMessage('');
    } catch (error) {
      setIsValid(false);
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON');
=======
      setErrorMessage('')
    } catch (error) {
      setIsValid(false);
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON')
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      setErrorMessage('')
    } catch (error) {
      setIsValid(false);
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON')
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  };

  const validateJSON = () => {
    if (!inputJson.trim()) {
      setIsValid(true);
      setErrorMessage('');
<<<<<<< HEAD
<<<<<<< HEAD
      return;
=======
      return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }

    try {
      JSON.parse(inputJson);
      setIsValid(true);
<<<<<<< HEAD
<<<<<<< HEAD
      setErrorMessage('');
    } catch (error) {
      setIsValid(false);
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON');
=======
      setErrorMessage('')
    } catch (error) {
      setIsValid(false);
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON')
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      setErrorMessage('')
    } catch (error) {
      setIsValid(false);
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON')
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  };

  const clearAll = () => {
    setInputJson('');
    setFormattedJson('');
    setIsValid(true);
<<<<<<< HEAD
<<<<<<< HEAD
    setErrorMessage('');
=======
    setErrorMessage('')
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  };

  const downloadJSON = (content: string, filename: string) => {
<<<<<<< HEAD
    const blob = new Blob([content], { type: 'application/json' });
=======
    setErrorMessage('')
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  };

  const downloadJSON = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'application/json' }),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    const blob = new Blob([content], { type: 'application/json' }),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
<<<<<<< HEAD
<<<<<<< HEAD
    URL.revokeObjectURL(url);
=======
    URL.revokeObjectURL(url)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    URL.revokeObjectURL(url)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const loadSampleJSON = () => {
    const sample = {
<<<<<<< HEAD
<<<<<<< HEAD
      name: 'John Doe',
      age: 30,
      email: 'john.doe@example.com',
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zipCode: '12345',
      },
      phoneNumbers: [
=======
      "name": "John Doe";
      "age": 30;
      "email": "john.doe@example.com";
      "address": {
        "street": "123 Main St";
        "city": "Anytown";
        "state": "CA";
        "zipCode": "12345"
      };
      "phoneNumbers": [
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        {
          "type": "home";
          "number": "555-123-4567"
        };
        {
          "type": "work";
          "number": "555-987-6543"
        }
      ];
      "interests": ["programming", "reading", "hiking"];
      "active": true;
      "lastLogin": "2024-01-15T10:30:00Z"
    };
    
    setInputJson(JSON.stringify(sample, null, 2));
    setFormattedJson('');
    setIsValid(true);
<<<<<<< HEAD
    setErrorMessage('');
=======
      "name": "John Doe";
      "age": 30;
      "email": "john.doe@example.com";
      "address": {
        "street": "123 Main St";
        "city": "Anytown";
        "state": "CA";
        "zipCode": "12345"
      };
      "phoneNumbers": [
        {
          "type": "home";
          "number": "555-123-4567"
        };
        {
          "type": "work";
          "number": "555-987-6543"
        }
      ];
      "interests": ["programming", "reading", "hiking"];
      "active": true;
      "lastLogin": "2024-01-15T10:30:00Z"
    };
    
    setInputJson(JSON.stringify(sample, null, 2));
    setFormattedJson('');
    setIsValid(true);
    setErrorMessage('')
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    setErrorMessage('')
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const getLineNumbers = (text: string) => {
    const lines = text.split('\n');
<<<<<<< HEAD
<<<<<<< HEAD
    return lines.map((_, index) => index + 1).join('\n');
=======
    return lines.map((_, index) => index + 1).join('\n')
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return lines.map((_, index) => index + 1).join('\n')
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  return (
    <>
      <Head>
        <title>JSON Formatter - Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD
        <meta
          name='description'
          content='Format, validate, and beautify JSON with our professional JSON formatter. Minify, prettify, and analyze JSON data with ease.'
        />
        <meta property='og:title' content='JSON Formatter - Zion Tech Group' />
        <meta
          property='og:description'
          content='Professional JSON formatting and validation service.'
        />
=======
        <meta name="description" content="Format, validate, and beautify JSON with our professional JSON formatter. Minify, prettify, and analyze JSON data with ease." />
        <meta property="og:title" content="JSON Formatter - Zion Tech Group" />
        <meta property="og:description" content="Professional JSON formatting and validation service." />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-sm font-medium mb-6">
              <Code className="w-4 h-4 mr-2" />
              Professional JSON Tools
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            JSON Formatter
          </h1>
<<<<<<< HEAD
          <p className='text-xl text-teal-200 max-w-4xl mx-auto leading-relaxed'>
            Format, validate, and beautify JSON with our professional tools.
            Minify, prettify, and analyze JSON data with advanced features and
            real-time validation.
=======
        <meta name="description" content="Format, validate, and beautify JSON with our professional JSON formatter. Minify, prettify, and analyze JSON data with ease." />
        <meta property="og:title" content="JSON Formatter - Zion Tech Group" />
        <meta property="og:description" content="Professional JSON formatting and validation service." />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-sm font-medium mb-6">
              <Code className="w-4 h-4 mr-2" />
              Professional JSON Tools
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            JSON Formatter
          </h1>
          <p className="text-xl text-teal-200 max-w-4xl mx-auto leading-relaxed">
            Format, validate, and beautify JSON with our professional tools. Minify, prettify, and analyze 
            JSON data with advanced features and real-time validation.
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <p className="text-xl text-teal-200 max-w-4xl mx-auto leading-relaxed">
            Format, validate, and beautify JSON with our professional tools. Minify, prettify, and analyze 
            JSON data with advanced features and real-time validation.
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </p>
        </div>
      </section>

      {/* JSON Formatter Tool */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-20 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
              Format Your JSON Data
            </h2>
            <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
              Our advanced JSON formatter provides multiple formatting options
              and real-time validation.
=======
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Format Your JSON Data
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our advanced JSON formatter provides multiple formatting options and real-time validation.
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Format Your JSON Data
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our advanced JSON formatter provides multiple formatting options and real-time validation.
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </p>
          </div>

          {/* Settings Bar */}
<<<<<<< HEAD
<<<<<<< HEAD
          <Card className='p-6 bg-gray-800 border border-gray-700 mb-8'>
            <div className='flex flex-wrap items-center justify-between gap-4'>
              <div className='flex items-center space-x-6'>
                <div className='flex items-center space-x-2'>
                  <label className='text-sm text-gray-300'>Indent:</label>
                  <select
                    value={indentSize}
                    onChange={e => setIndentSize(Number(e.target.value))}
                    className='px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500'
=======
          <Card className="p-6 bg-gray-800 border border-gray-700 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <label className="text-sm text-gray-300" htmlFor="input-Indent:">Indent:</label>
                  <select
                    value={indentSize}
                    onChange={(e) => setIndentSize(Number(e.target.value))}
                    className="px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <Card className="p-6 bg-gray-800 border border-gray-700 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <label className="text-sm text-gray-300" htmlFor="input-Indent:">Indent:</label>
                  <select
                    value={indentSize}
                    onChange={(e) => setIndentSize(Number(e.target.value))}
                    className="px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  >
                    <option value={2}>2 spaces</option>
                    <option value={4}>4 spaces</option>
                    <option value={8}>8 spaces</option>
                  </select>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD

                <div className='flex items-center space-x-2'>
=======
                
                <div className="flex items-center space-x-2">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  <input
                    type="checkbox"
                    id="compactMode"
                    checked={compactMode}
                    onChange={(e) => setCompactMode(e.target.checked)}
                    className="w-4 h-4 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500"
                  />
                  <label htmlFor="compactMode" className="text-sm text-gray-300" htmlFor="input-Compact mode">Compact mode</label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="showLineNumbers"
                    checked={showLineNumbers}
                    onChange={(e) => setShowLineNumbers(e.target.checked)}
                    className="w-4 h-4 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500"
                  />
                  <label htmlFor="showLineNumbers" className="text-sm text-gray-300" htmlFor="input-Line numbers">Line numbers</label>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Button
                  onClick={loadSampleJSON}
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
<<<<<<< HEAD
                  <Upload className='w-4 h-4 mr-2' />
=======
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="compactMode"
                    checked={compactMode}
                    onChange={(e) => setCompactMode(e.target.checked)}
                    className="w-4 h-4 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500"
                  />
                  <label htmlFor="compactMode" className="text-sm text-gray-300" htmlFor="input-Compact mode">Compact mode</label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="showLineNumbers"
                    checked={showLineNumbers}
                    onChange={(e) => setShowLineNumbers(e.target.checked)}
                    className="w-4 h-4 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500"
                  />
                  <label htmlFor="showLineNumbers" className="text-sm text-gray-300" htmlFor="input-Line numbers">Line numbers</label>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Button
                  onClick={loadSampleJSON}
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  <Upload className="w-4 h-4 mr-2" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <Upload className="w-4 h-4 mr-2" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  Load Sample
                </Button>
                <Button
                  onClick={clearAll}
<<<<<<< HEAD
<<<<<<< HEAD
                  variant='outline'
                  size='sm'
                  className='border-gray-600 text-gray-300 hover:bg-gray-700'
=======
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
                  Clear All
                </Button>
              </div>
            </div>
          </Card>

<<<<<<< HEAD
<<<<<<< HEAD
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
=======
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            {/* Input Section */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <Code className="w-6 h-6 mr-3 text-teal-400" />
                  Input JSON
                </h3>
<<<<<<< HEAD
                <div className='flex items-center space-x-2'>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      isValid
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}
                  >
=======
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <Code className="w-6 h-6 mr-3 text-teal-400" />
                  Input JSON
                </h3>
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    isValid ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    {isValid ? 'Valid' : 'Invalid'}
                  </span>
                </div>
              </div>

<<<<<<< HEAD
<<<<<<< HEAD
              <div className='space-y-4'>
                <div className='relative'>
                  {showLineNumbers && (
                    <div className='absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden'>
=======
              <div className="space-y-4">
                <div className="relative">
                  {showLineNumbers && (
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <div className="space-y-4">
                <div className="relative">
                  {showLineNumbers && (
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      {getLineNumbers(inputJson)}
                    </div>
                  )}
                  <textarea
                    value={inputJson}
<<<<<<< HEAD
<<<<<<< HEAD
                    onChange={e => setInputJson(e.target.value)}
                    placeholder='Paste your JSON data here...'
=======
                    onChange={(e) => setInputJson(e.target.value)}
                    placeholder="Paste your JSON data here..."
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    onChange={(e) => setInputJson(e.target.value)}
                    placeholder="Paste your JSON data here..."
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    rows={15}
                    className={`w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 font-mono text-sm resize-none ${
                      showLineNumbers ? 'pl-16' : ''
                    }`}
                  />
                </div>

                {!isValid && errorMessage && (
<<<<<<< HEAD
<<<<<<< HEAD
                  <div className='p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300'>
=======
                  <div className="p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <div className="p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    <strong>Error:</strong> {errorMessage}
                  </div>
                )}

<<<<<<< HEAD
<<<<<<< HEAD
                <div className='flex space-x-3'>
=======
                <div className="flex space-x-3">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  <Button
                    onClick={formatJSON}
                    disabled={!inputJson.trim()}
                    className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
<<<<<<< HEAD
                    <Code className='w-5 h-5 mr-2' />
=======
                <div className="flex space-x-3">
                  <Button
                    onClick={formatJSON}
                    disabled={!inputJson.trim()}
                    className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Code className="w-5 h-5 mr-2" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <Code className="w-5 h-5 mr-2" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    Format JSON
                  </Button>
                  <Button
                    onClick={minifyJSON}
                    disabled={!inputJson.trim()}
<<<<<<< HEAD
<<<<<<< HEAD
                    variant='outline'
                    className='border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50'
=======
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  >
                    Minify
                  </Button>
                  <Button
                    onClick={validateJSON}
                    disabled={!inputJson.trim()}
<<<<<<< HEAD
<<<<<<< HEAD
                    variant='outline'
                    className='border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50'
=======
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  >
                    Validate
                  </Button>
                </div>
              </div>
            </Card>

            {/* Output Section */}
<<<<<<< HEAD
<<<<<<< HEAD
            <Card className='p-8 bg-gray-800 border border-gray-700'>
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-2xl font-bold text-white flex items-center'>
                  <CheckCircle className='w-6 h-6 mr-3 text-cyan-400' />
=======
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-cyan-400" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  Formatted Output
                </h3>
                {formattedJson && (
                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={() => copyToClipboard(formattedJson)}
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                    <Button
                      onClick={() => downloadJSON(formattedJson, 'formatted.json')}
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
<<<<<<< HEAD
                      <Download className='w-4 h-4 mr-2' />
=======
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-cyan-400" />
                  Formatted Output
                </h3>
                {formattedJson && (
                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={() => copyToClipboard(formattedJson)}
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                    <Button
                      onClick={() => downloadJSON(formattedJson, 'formatted.json')}
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <Download className="w-4 h-4 mr-2" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      <Download className="w-4 h-4 mr-2" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      Download
                    </Button>
                  </div>
                )}
              </div>

<<<<<<< HEAD
<<<<<<< HEAD
              <div className='space-y-4'>
=======
              <div className="space-y-4">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                {formattedJson ? (
                  <div className="relative">
                    {showLineNumbers && (
                      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden">
                        {getLineNumbers(formattedJson)}
                      </div>
                    )}
                    <div className={`p-4 bg-gray-700 border border-gray-600 rounded-lg text-white font-mono text-sm overflow-auto max-h-96 ${
                      showLineNumbers ? 'pl-16' : ''
                    }`}>
                      <pre className="whitespace-pre-wrap">{formattedJson}</pre>
                    </div>
                  </div>
                ) : (
<<<<<<< HEAD
                  <div className='bg-gray-700 p-6 rounded-lg border border-gray-600 text-center'>
                    <div className='text-6xl mb-4'>📄</div>
                    <p className='text-gray-400'>
                      Formatted JSON will appear here. Enter JSON data and click
                      format to get started.
=======
              <div className="space-y-4">
                {formattedJson ? (
                  <div className="relative">
                    {showLineNumbers && (
                      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden">
                        {getLineNumbers(formattedJson)}
                      </div>
                    )}
                    <div className={`p-4 bg-gray-700 border border-gray-600 rounded-lg text-white font-mono text-sm overflow-auto max-h-96 ${
                      showLineNumbers ? 'pl-16' : ''
                    }`}>
                      <pre className="whitespace-pre-wrap">{formattedJson}</pre>
                    </div>
                  </div>
                ) : (
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  <div className="bg-gray-700 p-6 rounded-lg border border-gray-600 text-center">
                    <div className="text-6xl mb-4">📄</div>
                    <p className="text-gray-400">
                      Formatted JSON will appear here. Enter JSON data and click format to get started.
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    </p>
                  </div>
                )}

                {formattedJson && (
<<<<<<< HEAD
<<<<<<< HEAD
                  <div className='text-sm text-gray-400'>
                    <p>• Characters: {formattedJson.length}</p>
                    <p>• Lines: {formattedJson.split('\n').length}</p>
                    <p>
                      • Size: {((formattedJson.length * 2) / 1024).toFixed(2)}{' '}
                      KB
                    </p>
=======
                  <div className="text-sm text-gray-400">
                    <p>• Characters: {formattedJson.length}</p>
                    <p>• Lines: {formattedJson.split('\n').length}</p>
                    <p>• Size: {(formattedJson.length * 2 / 1024).toFixed(2)} KB</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <div className="text-sm text-gray-400">
                    <p>• Characters: {formattedJson.length}</p>
                    <p>• Lines: {formattedJson.split('\n').length}</p>
                    <p>• Size: {(formattedJson.length * 2 / 1024).toFixed(2)} KB</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-20 bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
=======
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              Professional JSON Formatting Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to work with JSON data efficiently and professionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-white mb-4">Smart Formatting</h3>
              <p className="text-gray-400">
                Intelligent JSON formatting with customizable indentation and spacing options.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-white mb-4">Real-time Validation</h3>
              <p className="text-gray-400">
                Instant JSON validation with detailed error messages and syntax highlighting.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-white mb-4">Minification</h3>
              <p className="text-gray-400">
                Compress JSON data by removing unnecessary whitespace and formatting.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🔢</div>
              <h3 className="text-xl font-bold text-white mb-4">Line Numbers</h3>
              <p className="text-gray-400">
                Optional line numbering for easier navigation and debugging of large JSON files.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">💾</div>
              <h3 className="text-xl font-bold text-white mb-4">Export Options</h3>
              <p className="text-gray-400">
                Download formatted JSON files or copy to clipboard with a single click.
              </p>
            </Card>

<<<<<<< HEAD
            <Card className='text-center p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>⚙️</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                Customizable
              </h3>
              <p className='text-gray-400'>
                Adjust indentation size, toggle compact mode, and customize
                display options.
=======
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Professional JSON Formatting Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to work with JSON data efficiently and professionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-white mb-4">Smart Formatting</h3>
              <p className="text-gray-400">
                Intelligent JSON formatting with customizable indentation and spacing options.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-white mb-4">Real-time Validation</h3>
              <p className="text-gray-400">
                Instant JSON validation with detailed error messages and syntax highlighting.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-white mb-4">Minification</h3>
              <p className="text-gray-400">
                Compress JSON data by removing unnecessary whitespace and formatting.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🔢</div>
              <h3 className="text-xl font-bold text-white mb-4">Line Numbers</h3>
              <p className="text-gray-400">
                Optional line numbering for easier navigation and debugging of large JSON files.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">💾</div>
              <h3 className="text-xl font-bold text-white mb-4">Export Options</h3>
              <p className="text-gray-400">
                Download formatted JSON files or copy to clipboard with a single click.
              </p>
            </Card>

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-white mb-4">Customizable</h3>
              <p className="text-gray-400">
                Adjust indentation size, toggle compact mode, and customize display options.
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-20 bg-gray-900'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
=======
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              Perfect For Every JSON Need
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From development to data analysis, our JSON formatter serves all your formatting needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">👨‍💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">Developers</h3>
              <p className="text-gray-400 mb-6">
                Format API responses, debug JSON data, and prepare configuration files with professional formatting.
              </p>
<<<<<<< HEAD
              <ul className='space-y-2 text-gray-300'>
=======
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Perfect For Every JSON Need
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From development to data analysis, our JSON formatter serves all your formatting needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">👨‍💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">Developers</h3>
              <p className="text-gray-400 mb-6">
                Format API responses, debug JSON data, and prepare configuration files with professional formatting.
              </p>
              <ul className="space-y-2 text-gray-300">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <ul className="space-y-2 text-gray-300">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <li>• API development and testing</li>
                <li>• Configuration file management</li>
                <li>• Debug and troubleshooting</li>
              </ul>
            </Card>

<<<<<<< HEAD
<<<<<<< HEAD
            <Card className='p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>📊</div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                Data Analysts
              </h3>
              <p className='text-gray-400 mb-6'>
                Clean and format JSON datasets for analysis, reporting, and data
                visualization projects.
              </p>
              <ul className='space-y-2 text-gray-300'>
=======
            <Card className="p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Data Analysts</h3>
              <p className="text-gray-400 mb-6">
                Clean and format JSON datasets for analysis, reporting, and data visualization projects.
              </p>
              <ul className="space-y-2 text-gray-300">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <Card className="p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Data Analysts</h3>
              <p className="text-gray-400 mb-6">
                Clean and format JSON datasets for analysis, reporting, and data visualization projects.
              </p>
              <ul className="space-y-2 text-gray-300">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <li>• Data cleaning and preparation</li>
                <li>• Report generation</li>
                <li>• Data validation</li>
              </ul>
            </Card>

<<<<<<< HEAD
<<<<<<< HEAD
            <Card className='p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>🔧</div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                DevOps Engineers
              </h3>
              <p className='text-gray-400 mb-6'>
                Manage configuration files, validate deployment manifests, and
                format infrastructure as code.
              </p>
              <ul className='space-y-2 text-gray-300'>
=======
            <Card className="p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-white mb-4">DevOps Engineers</h3>
              <p className="text-gray-400 mb-6">
                Manage configuration files, validate deployment manifests, and format infrastructure as code.
              </p>
              <ul className="space-y-2 text-gray-300">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <Card className="p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-white mb-4">DevOps Engineers</h3>
              <p className="text-gray-400 mb-6">
                Manage configuration files, validate deployment manifests, and format infrastructure as code.
              </p>
              <ul className="space-y-2 text-gray-300">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <li>• Configuration management</li>
                <li>• Infrastructure validation</li>
                <li>• Deployment automation</li>
              </ul>
            </Card>

<<<<<<< HEAD
<<<<<<< HEAD
            <Card className='p-8 bg-gray-700 border border-gray-600'>
              <div className='text-4xl mb-4'>📝</div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                Technical Writers
              </h3>
              <p className='text-gray-400 mb-6'>
                Format JSON examples for documentation, tutorials, and technical
                specifications.
              </p>
              <ul className='space-y-2 text-gray-300'>
=======
            <Card className="p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-white mb-4">Technical Writers</h3>
              <p className="text-gray-400 mb-6">
                Format JSON examples for documentation, tutorials, and technical specifications.
              </p>
              <ul className="space-y-2 text-gray-300">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <Card className="p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-white mb-4">Technical Writers</h3>
              <p className="text-gray-400 mb-6">
                Format JSON examples for documentation, tutorials, and technical specifications.
              </p>
              <ul className="space-y-2 text-gray-300">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <li>• Documentation examples</li>
                <li>• API documentation</li>
                <li>• Technical specifications</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className='py-20 bg-gradient-to-r from-teal-600 to-cyan-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
=======
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            Ready to Format Your JSON?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Join thousands of developers and professionals who trust our JSON formatter for their data needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
<<<<<<< HEAD
              href='/pricing'
              variant='outline'
              size='lg'
              className='border-white text-white hover:bg-white hover:text-teal-600'
=======
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Format Your JSON?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Join thousands of developers and professionals who trust our JSON formatter for their data needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-teal-600"
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
