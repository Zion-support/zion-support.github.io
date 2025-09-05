<<<<<<< HEAD
import React, { useState } from 'react',
import Head from 'next/head',
import Card from '../components/ui/Card',
import Button from '../components/ui/Button',
import { Code, Copy, RefreshCw, CheckCircle, XCircle, ArrowRight, Download, Upload, Settings, Eye } from 'lucide-react',

export default function JSONFormatterPage() {
  const [inputJson, setInputJson] = useState(''),
  const [formattedJson, setFormattedJson] = useState(''),
  const [isValid, setIsValid] = useState(true),
  const [errorMessage, setErrorMessage] = useState(''),
  const [indentSize, setIndentSize] = useState(2),
  const [compactMode, setCompactMode] = useState(false),
  const [showLineNumbers, setShowLineNumbers] = useState(true),
=======
import React, {_useState} from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function JSONFormatterPage() {_const [inputJson, _setInputJson] = useState('');
  const [formattedJson, _setFormattedJson] = useState('');
  const [isValid, _setIsValid] = useState(true);
  const [errorMessage, _setErrorMessage] = useState('');
  const [indentSize, _setIndentSize] = useState(2);
  const [compactMode, _setCompactMode] = useState(false);
  const [showLineNumbers, _setShowLineNumbers] = useState(true);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _formatJSON = () => {
    if (!inputJson.trim()) {
<<<<<<< HEAD
      setFormattedJson(''),
      setIsValid(true),
      setErrorMessage(''),
      return
    }

    try {
      const parsed = JSON.parse(inputJson),
      const formatted = compactMode 
        ? JSON.stringify(parsed)
        : JSON.stringify(parsed, null, indentSize),
      
      setFormattedJson(formatted),
      setIsValid(true),
      setErrorMessage('')
    } catch (error) {
      setIsValid(false),
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON'),
      setFormattedJson('')
    }
  },

  const minifyJSON = () => {
    if (!inputJson.trim()) return,
    
    try {
      const parsed = JSON.parse(inputJson),
      const minified = JSON.stringify(parsed),
      setFormattedJson(minified),
      setIsValid(true),
      setErrorMessage('')
    } catch (error) {
      setIsValid(false),
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON')
    }
  },

  const validateJSON = () => {
    if (!inputJson.trim()) {
      setIsValid(true),
      setErrorMessage(''),
      return
    }

    try {
      JSON.parse(inputJson),
      setIsValid(true),
      setErrorMessage('')
    } catch (error) {
      setIsValid(false),
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON')
    }
  },

  const clearAll = () => {
    setInputJson(''),
    setFormattedJson(''),
    setIsValid(true),
    setErrorMessage('')
  },

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  },

  const downloadJSON = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'application/json' }),
    const url = URL.createObjectURL(blob),
    const a = document.createElement('a'),
    a.href = url,
    a.download = filename,
    document.body.appendChild(a),
    a.click(),
    document.body.removeChild(a),
    URL.revokeObjectURL(url)
  },

  const loadSampleJSON = () => {
    const sample = {
      &quot;name&quot;: &quot;John Doe&quot;,
      &quot;age&quot;: 30,
      &quot;email&quot;: &quot;john.doe@example.com&quot;,
      &quot;address&quot;: {
        &quot;street&quot;: &quot;123 Main St&quot;,
        &quot;city&quot;: &quot;Anytown&quot;,
        &quot;state&quot;: &quot;CA&quot;,
        &quot;zipCode&quot;: &quot;12345&quot;
      },
      &quot;phoneNumbers&quot;: [
        {
          &quot;type&quot;: &quot;home&quot;,
          &quot;number&quot;: &quot;555-123-4567&quot;
        },
        {
          &quot;type&quot;: &quot;work&quot;,
          &quot;number&quot;: &quot;555-987-6543&quot;
        }
=======
      setFormattedJson('');
      setIsValid(true);
      setErrorMessage('');
      return;}

    try {_const _parsed = JSON.parse(inputJson);
      const _formatted = compactMode 
        ? JSON.stringify(parsed)
        : JSON.stringify(parsed, _null, _indentSize);
      
      setFormattedJson(formatted);
      setIsValid(true);
      setErrorMessage('');} catch (error) {_setIsValid(false);
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON');
      setFormattedJson('');}
  };

  const _minifyJSON = () => {_if (!inputJson.trim()) return;
    
    try {
      const _parsed = JSON.parse(inputJson);
      const _minified = JSON.stringify(parsed);
      setFormattedJson(minified);
      setIsValid(true);
      setErrorMessage('');} catch (error) {_setIsValid(false);
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON');}
  };

  const _validateJSON = () => {_if (!inputJson.trim()) {
      setIsValid(true);
      setErrorMessage('');
      return;}

    try {_JSON.parse(inputJson);
      setIsValid(true);
      setErrorMessage('');} catch (error) {_setIsValid(false);
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON');}
  };

  const _clearAll = () => {_setInputJson('');
    setFormattedJson('');
    setIsValid(true);
    setErrorMessage('');};

  const _copyToClipboard = (_text: string) => {_navigator.clipboard.writeText(text);};

  const _downloadJSON = (_content: string, _filename: string) => {_const _blob = new Blob([content], _{ type: 'application/json'});
    const _url = window.URL.createObjectURL(blob);
    const _a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const _loadSampleJSON = () => {_const _sample = {
      "name": "John Doe", _"age": 30, _"email": "john.doe@example.com", _"address": {
        "street": "123 Main St", _"city": "Anytown", _"state": "CA", _"zipCode": "12345"},
      "phoneNumbers": [
        {_"type": "home", _"number": "555-123-4567"},
        {_"type": "work", _"number": "555-987-6543"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      ],
<<<<<<< HEAD
      "interests": ["programming", "reading", "hiking"],
      "active": true,
      "lastLogin": "2024-01-15T10:30:00Z"
    },
=======
      &quot;interests&quot;: [&quot;programming&quot;, &quot;reading&quot;, &quot;hiking&quot;],
      &quot;active&quot;: true,
      &quot;lastLogin&quot;: &quot;2024-01-15T10:30:00Z&quot;
    };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    setInputJson(JSON.stringify(sample, null, 2)),
    setFormattedJson(''),
    setIsValid(true),
    setErrorMessage('')
  },

<<<<<<< HEAD
  const getLineNumbers = (text: string) => {
    const lines = text.split('\n'),
    return lines.map((_, index) => index + 1).join('\n')
  },
=======
  const _getLineNumbers = (_text: string) => {_const _lines = text.split('\n');
    return lines.map(_(_, _index) => index + 1).join('\n');};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (_<>
      <Head>
        <title>JSON Formatter - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name=&quot;description&quot; content=&quot;Format, validate, and beautify JSON with our professional JSON formatter. Minify, prettify, and analyze JSON data with ease.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;JSON Formatter - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Professional JSON formatting and validation service.&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;pt-32 pb-20 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <div className=&quot;mb-8&quot;>
            <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-sm font-medium mb-6&quot;>
              <Code className=&quot;w-4 h-4 mr-2&quot; />
=======
        <meta name="description" content="Format, _validate, _and beautify JSON with our professional JSON formatter. Minify, _prettify, _and analyze JSON data with ease." />
        <meta property="og:title" content="JSON Formatter - Zion Tech Group" />
        <meta property="og:description" content="Professional JSON formatting and validation service." />
      </Head>

      {_/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-sm font-medium mb-6">
              <Code className="w-4 h-4 mr-2" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Professional JSON Tools
            </div>
          </div>
          <h1 className=&quot;text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight&quot;>
            JSON Formatter
          </h1>
<<<<<<< HEAD
          <p className=&quot;text-xl text-teal-200 max-w-4xl mx-auto leading-relaxed&quot;>
            Format, validate, and beautify JSON with our professional tools. Minify, prettify, and analyze 
=======
          <p className="text-xl text-teal-200 max-w-4xl mx-auto leading-relaxed">
            Format, _validate, _and beautify JSON with our professional tools. Minify, _prettify, _and analyze 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            JSON data with advanced features and real-time validation.
          </p>
        </div>
      </section>

<<<<<<< HEAD
      {/* JSON Formatter Tool */}
      <section className=&quot;py-20 bg-gray-900&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>
=======
      {_/* JSON Formatter Tool */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Format Your JSON Data
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Our advanced JSON formatter provides multiple formatting options and real-time validation.
            </p>
          </div>

<<<<<<< HEAD
          {/* Settings Bar */}
          <Card className=&quot;p-6 bg-gray-800 border border-gray-700 mb-8&quot;>
            <div className=&quot;flex flex-wrap items-center justify-between gap-4&quot;>
              <div className=&quot;flex items-center space-x-6&quot;>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <label className=&quot;text-sm text-gray-300&quot;>Indent:</label>
                  <select
                    value={indentSize}
                    onChange={(e) => setIndentSize(Number(e.target.value))}
                    className=&quot;px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500&quot;
=======
          {_/* Settings Bar */}
          <Card className="p-6 bg-gray-800 border border-gray-700 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <label className="text-sm text-gray-300">Indent:</label>
                  <select
                    value={_indentSize}
                    onChange={_(e) => setIndentSize(Number(e.target.value))}
                    className="px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    <option value={_2}>2 spaces</option>
                    <option value={_4}>4 spaces</option>
                    <option value={_8}>8 spaces</option>
                  </select>
                </div>
                
                <div className=&quot;flex items-center space-x-2&quot;>
                  <input
<<<<<<< HEAD
                    type=&quot;checkbox&quot;
                    id=&quot;compactMode&quot;
                    checked={compactMode}
                    onChange={(e) => setCompactMode(e.target.checked)}
                    className=&quot;w-4 h-4 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500&quot;
=======
                    type="checkbox"
                    id="compactMode"
                    checked={_compactMode}
                    onChange={_(_e) => setCompactMode(e.target.checked)}
                    className="w-4 h-4 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                  <label htmlFor=&quot;compactMode&quot; className=&quot;text-sm text-gray-300&quot;>Compact mode</label>
                </div>
                
                <div className=&quot;flex items-center space-x-2&quot;>
                  <input
<<<<<<< HEAD
                    type=&quot;checkbox&quot;
                    id=&quot;showLineNumbers&quot;
                    checked={showLineNumbers}
                    onChange={(e) => setShowLineNumbers(e.target.checked)}
                    className=&quot;w-4 h-4 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500&quot;
=======
                    type="checkbox"
                    id="showLineNumbers"
                    checked={_showLineNumbers}
                    onChange={_(_e) => setShowLineNumbers(e.target.checked)}
                    className="w-4 h-4 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                  <label htmlFor=&quot;showLineNumbers&quot; className=&quot;text-sm text-gray-300&quot;>Line numbers</label>
                </div>
              </div>

              <div className=&quot;flex items-center space-x-3&quot;>
                <Button
<<<<<<< HEAD
                  onClick={loadSampleJSON}
                  variant=&quot;outline&quot;
                  size=&quot;sm&quot;
                  className=&quot;border-gray-600 text-gray-300 hover:bg-gray-700&quot;
=======
                  onClick={_loadSampleJSON}
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <Upload className=&quot;w-4 h-4 mr-2&quot; />
                  Load Sample
                </Button>
                <Button
<<<<<<< HEAD
                  onClick={clearAll}
                  variant=&quot;outline&quot;
                  size=&quot;sm&quot;
                  className=&quot;border-gray-600 text-gray-300 hover:bg-gray-700&quot;
=======
                  onClick={_clearAll}
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Clear All
                </Button>
              </div>
            </div>
          </Card>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {/* Input Section */}
            <Card className=&quot;p-8 bg-gray-800 border border-gray-700&quot;>
              <div className=&quot;flex items-center justify-between mb-6&quot;>
                <h3 className=&quot;text-2xl font-bold text-white flex items-center&quot;>
                  <Code className=&quot;w-6 h-6 mr-3 text-teal-400&quot; />
                  Input JSON
                </h3>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    isValid ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {isValid ? 'Valid' : 'Invalid'}
=======
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {_/* Input Section */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <Code className="w-6 h-6 mr-3 text-teal-400" />
                  Input JSON
                </h3>
                <div className="flex items-center space-x-2">
                  <span className={_`px-2 py-1 rounded text-xs font-medium ${
                    isValid ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {_isValid ? 'Valid' : 'Invalid'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </span>
                </div>
              </div>

<<<<<<< HEAD
              <div className=&quot;space-y-4&quot;>
                <div className=&quot;relative&quot;>
                  {showLineNumbers && (
                    <div className=&quot;absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden&quot;>
=======
              <div className="space-y-4">
                <div className="relative">
                  {_showLineNumbers && (
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      {getLineNumbers(inputJson)}
                    </div>
                  )}
                  <textarea
<<<<<<< HEAD
                    value={inputJson}
                    onChange={(e) => setInputJson(e.target.value)}
                    placeholder=&quot;Paste your JSON data here...&quot;
                    rows={15}
                    className={`w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 font-mono text-sm resize-none ${
                      showLineNumbers ? 'pl-16' : ''
                    }`}
                  />
                </div>

                {!isValid && errorMessage && (
                  <div className=&quot;p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300&quot;>
=======
                    value={_inputJson}
                    onChange={_(_e) => setInputJson(e.target.value)}
                    placeholder="Paste your JSON data here..."
                    rows={_15}
                    className={_`w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 font-mono text-sm resize-none ${
                      showLineNumbers ? 'pl-16' : ''}`}
                  />
                </div>

                {_!isValid && errorMessage && (
                  <div className="p-3 bg-red-500/20 border border-red-500/30 rounded text-sm text-red-300">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <strong>Error:</strong> {errorMessage}
                  </div>
                )}

                <div className=&quot;flex space-x-3&quot;>
                  <Button
<<<<<<< HEAD
                    onClick={formatJSON}
                    disabled={!inputJson.trim()}
                    className=&quot;flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed&quot;
=======
                    onClick={_formatJSON}
                    disabled={_!inputJson.trim()}
                    className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    <Code className=&quot;w-5 h-5 mr-2&quot; />
                    Format JSON
                  </Button>
                  <Button
<<<<<<< HEAD
                    onClick={minifyJSON}
                    disabled={!inputJson.trim()}
                    variant=&quot;outline&quot;
                    className=&quot;border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50&quot;
=======
                    onClick={_minifyJSON}
                    disabled={_!inputJson.trim()}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    Minify
                  </Button>
                  <Button
<<<<<<< HEAD
                    onClick={validateJSON}
                    disabled={!inputJson.trim()}
                    variant=&quot;outline&quot;
                    className=&quot;border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50&quot;
=======
                    onClick={_validateJSON}
                    disabled={_!inputJson.trim()}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    Validate
                  </Button>
                </div>
              </div>
            </Card>

<<<<<<< HEAD
            {/* Output Section */}
            <Card className=&quot;p-8 bg-gray-800 border border-gray-700&quot;>
              <div className=&quot;flex items-center justify-between mb-6&quot;>
                <h3 className=&quot;text-2xl font-bold text-white flex items-center&quot;>
                  <CheckCircle className=&quot;w-6 h-6 mr-3 text-cyan-400&quot; />
                  Formatted Output
                </h3>
                {formattedJson && (
                  <div className=&quot;flex items-center space-x-2&quot;>
=======
            {_/* Output Section */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-cyan-400" />
                  Formatted Output
                </h3>
                {_formattedJson && (_<div className="flex items-center space-x-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <Button
                      onClick={() => copyToClipboard(formattedJson)}
                      variant=&quot;outline&quot;
                      size=&quot;sm&quot;
                      className=&quot;border-gray-600 text-gray-300 hover:bg-gray-700&quot;
                    >
                      <Copy className=&quot;w-4 h-4 mr-2&quot; />
                      Copy
                    </Button>
                    <Button
<<<<<<< HEAD
                      onClick={() => downloadJSON(formattedJson, 'formatted.json')}
                      variant=&quot;outline&quot;
                      size=&quot;sm&quot;
                      className=&quot;border-gray-600 text-gray-300 hover:bg-gray-700&quot;
=======
                      onClick={_() => downloadJSON(formattedJson, _'formatted.json')}
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    >
                      <Download className=&quot;w-4 h-4 mr-2&quot; />
                      Download
                    </Button>
                  </div>
                )}
              </div>

<<<<<<< HEAD
              <div className=&quot;space-y-4&quot;>
                {formattedJson ? (
                  <div className=&quot;relative&quot;>
=======
              <div className="space-y-4">
                {_formattedJson ? (
                  <div className="relative">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    {showLineNumbers && (
                      <div className=&quot;absolute left-0 top-0 bottom-0 w-12 bg-gray-700 border-r border-gray-600 text-xs text-gray-400 p-2 font-mono overflow-hidden&quot;>
                        {getLineNumbers(formattedJson)}
                      </div>
                    )}
<<<<<<< HEAD
                    <div className={`p-4 bg-gray-700 border border-gray-600 rounded-lg text-white font-mono text-sm overflow-auto max-h-96 ${
                      showLineNumbers ? 'pl-16' : ''
                    }`}>
                      <pre className=&quot;whitespace-pre-wrap&quot;>{formattedJson}</pre>
=======
                    <div className={_`p-4 bg-gray-700 border border-gray-600 rounded-lg text-white font-mono text-sm overflow-auto max-h-96 ${
                      showLineNumbers ? 'pl-16' : ''}`}>
                      <pre className="whitespace-pre-wrap">{_formattedJson}</pre>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  </div>
                ) : (
                  <div className=&quot;bg-gray-700 p-6 rounded-lg border border-gray-600 text-center&quot;>
                    <div className=&quot;text-6xl mb-4&quot;>📄</div>
                    <p className=&quot;text-gray-400&quot;>
                      Formatted JSON will appear here. Enter JSON data and click format to get started.
                    </p>
                  </div>
                )}

<<<<<<< HEAD
                {formattedJson && (
                  <div className=&quot;text-sm text-gray-400&quot;>
=======
                {_formattedJson && (
                  <div className="text-sm text-gray-400">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <p>• Characters: {formattedJson.length}</p>
                    <p>• Lines: {_formattedJson.split('\n').length}</p>
                    <p>• Size: {_(formattedJson.length * 2 / 1024).toFixed(2)} KB</p>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features */}
      <section className=&quot;py-20 bg-gray-800&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>
=======
      {_/* Features */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Professional JSON Formatting Features
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Everything you need to work with JSON data efficiently and professionally.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            <Card className=&quot;text-center p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>✨</div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Smart Formatting</h3>
              <p className=&quot;text-gray-400&quot;>
                Intelligent JSON formatting with customizable indentation and spacing options.
              </p>
            </Card>

            <Card className=&quot;text-center p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>✅</div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Real-time Validation</h3>
              <p className=&quot;text-gray-400&quot;>
                Instant JSON validation with detailed error messages and syntax highlighting.
              </p>
            </Card>

            <Card className=&quot;text-center p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>📦</div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Minification</h3>
              <p className=&quot;text-gray-400&quot;>
                Compress JSON data by removing unnecessary whitespace and formatting.
              </p>
            </Card>

            <Card className=&quot;text-center p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>🔢</div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Line Numbers</h3>
              <p className=&quot;text-gray-400&quot;>
                Optional line numbering for easier navigation and debugging of large JSON files.
              </p>
            </Card>

            <Card className=&quot;text-center p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>💾</div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Export Options</h3>
              <p className=&quot;text-gray-400&quot;>
                Download formatted JSON files or copy to clipboard with a single click.
              </p>
            </Card>

            <Card className=&quot;text-center p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>⚙️</div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Customizable</h3>
              <p className=&quot;text-gray-400&quot;>
                Adjust indentation size, toggle compact mode, and customize display options.
              </p>
            </Card>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Use Cases */}
      <section className=&quot;py-20 bg-gray-900&quot;>
        <div className=&quot;max-w-6xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>
=======
      {_/* Use Cases */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Perfect For Every JSON Need
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              From development to data analysis, our JSON formatter serves all your formatting needs.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            <Card className=&quot;p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>👨‍💻</div>
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Developers</h3>
              <p className=&quot;text-gray-400 mb-6&quot;>
                Format API responses, debug JSON data, and prepare configuration files with professional formatting.
              </p>
              <ul className=&quot;space-y-2 text-gray-300&quot;>
                <li>• API development and testing</li>
                <li>• Configuration file management</li>
                <li>• Debug and troubleshooting</li>
              </ul>
            </Card>

            <Card className=&quot;p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>📊</div>
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Data Analysts</h3>
              <p className=&quot;text-gray-400 mb-6&quot;>
                Clean and format JSON datasets for analysis, reporting, and data visualization projects.
              </p>
              <ul className=&quot;space-y-2 text-gray-300&quot;>
                <li>• Data cleaning and preparation</li>
                <li>• Report generation</li>
                <li>• Data validation</li>
              </ul>
            </Card>

            <Card className=&quot;p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>🔧</div>
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>DevOps Engineers</h3>
              <p className=&quot;text-gray-400 mb-6&quot;>
                Manage configuration files, validate deployment manifests, and format infrastructure as code.
              </p>
              <ul className=&quot;space-y-2 text-gray-300&quot;>
                <li>• Configuration management</li>
                <li>• Infrastructure validation</li>
                <li>• Deployment automation</li>
              </ul>
            </Card>

            <Card className=&quot;p-8 bg-gray-700 border border-gray-600&quot;>
              <div className=&quot;text-4xl mb-4&quot;>📝</div>
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Technical Writers</h3>
              <p className=&quot;text-gray-400 mb-6&quot;>
                Format JSON examples for documentation, tutorials, and technical specifications.
              </p>
              <ul className=&quot;space-y-2 text-gray-300&quot;>
                <li>• Documentation examples</li>
                <li>• API documentation</li>
                <li>• Technical specifications</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
<<<<<<< HEAD
=======
      {_/* CTA Section */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
=======
      <section className=&quot;py-20 bg-gradient-to-r from-teal-600 to-cyan-600&quot;>
        <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            Ready to Format Your JSON?
          </h2>
          <p className=&quot;text-xl text-teal-100 mb-8&quot;>
            Join thousands of developers and professionals who trust our JSON formatter for their data needs.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
            <Button
              href=&quot;/contact&quot;
              size=&quot;lg&quot;
              className=&quot;bg-white text-teal-600 hover:bg-gray-100&quot;
            >
              Get Started Today
              <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
            </Button>
            <Button
              href=&quot;/pricing&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-white text-white hover:bg-white hover:text-teal-600&quot;
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}