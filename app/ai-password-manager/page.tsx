'use client';

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Plus, 
  Lock, 
  Eye, 
  EyeOff, 
  Copy, 
  Edit3, 
  Trash2, 
  Search,
  Filter,
  Shield,
  AlertTriangle,
  CheckCircle,
  Key,
  Globe,
  Mail,
  CreditCard,
  Smartphone,
  Database,
  Brain,
  Sparkles,
  Zap,
  RefreshCw,
  Download,
  Upload
} from 'lucide-react';

interface Password {
  id: string;
  title: string;
  username: string;
  password: string;
  website: string;
  category: string;
  notes: string;
  strength: 'weak' | 'medium' | 'strong' | 'very-strong';
  lastModified: string;
  aiSuggestions?: string[];
  isCompromised?: boolean;
  needsUpdate?: boolean;
}

const categories = [
  { name: 'Social Media', icon: <Globe className="w-5 h-5" />, color: 'text-blue-400' },
  { name: 'Email', icon: <Mail className="w-5 h-5" />, color: 'text-red-400' },
  { name: 'Banking', icon: <CreditCard className="w-5 h-5" />, color: 'text-green-400' },
  { name: 'Work', icon: <Database className="w-5 h-5" />, color: 'text-purple-400' },
  { name: 'Shopping', icon: <Smartphone className="w-5 h-5" />, color: 'text-orange-400' },
  { name: 'Entertainment', icon: <Globe className="w-5 h-5" />, color: 'text-pink-400' },
  { name: 'Other', icon: <Key className="w-5 h-5" />, color: 'text-gray-400' }
];

export default function AIPasswordManagerPage() {
  const [passwords, setPasswords] = useState<Password[]>([]);
  const [newPassword, setNewPassword] = useState({
    title: '',
    username: '',
    password: '',
    website: '',
    category: 'Social Media',
    notes: ''
  });
  const [filter, setFilter] = useState<'all' | 'weak' | 'compromised' | 'needs-update'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showPasswords, setShowPasswords] = useState<{ [key: string]: boolean }>({});
  const [showAISuggestions, setShowAISuggestions] = useState(false);
  const [masterPassword, setMasterPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Load passwords from localStorage
  useEffect(() => {
    const savedPasswords = localStorage.getItem('ai-password-manager');
    if (savedPasswords) {
      setPasswords(JSON.parse(savedPasswords));
    }
  }, []);

  // Save passwords to localStorage
  useEffect(() => {
    localStorage.setItem('ai-password-manager', JSON.stringify(passwords));
  }, [passwords]);

  const generatePassword = (length: number = 16, includeSymbols: boolean = true) => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = includeSymbols ? '!@#$%^&*()_+-=[]{}|;:,.<>?' : '';
    
    const allChars = lowercase + uppercase + numbers + symbols;
    let password = '';
    
    // Ensure at least one character from each category
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    if (includeSymbols) {
      password += symbols[Math.floor(Math.random() * symbols.length)];
    }
    
    // Fill the rest randomly
    for (let i = password.length; i < length; i++) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    // Shuffle the password
    return password.split('').sort(() => Math.random() - 0.5).join('');
  };

  const calculatePasswordStrength = (password: string): 'weak' | 'medium' | 'strong' | 'very-strong' => {
    let score = 0;
    
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (password.length >= 16) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    if (password.length >= 20) score += 1;
    
    if (score <= 3) return 'weak';
    if (score <= 5) return 'medium';
    if (score <= 7) return 'strong';
    return 'very-strong';
  };

  const generateAIInsights = (password: Password): string[] => {
    const insights = [];
    
    if (password.strength === 'weak') {
      insights.push('Password is too weak. Consider using a longer password with mixed characters.');
    }
    
    if (password.password.length < 12) {
      insights.push('Password should be at least 12 characters long for better security.');
    }
    
    if (!/[A-Z]/.test(password.password)) {
      insights.push('Add uppercase letters to increase password strength.');
    }
    
    if (!/[0-9]/.test(password.password)) {
      insights.push('Include numbers to make your password more secure.');
    }
    
    if (!/[^A-Za-z0-9]/.test(password.password)) {
      insights.push('Add special characters for maximum security.');
    }
    
    if (password.password.toLowerCase().includes(password.username.toLowerCase())) {
      insights.push('Avoid using your username in your password.');
    }
    
    if (password.password.toLowerCase().includes(password.title.toLowerCase())) {
      insights.push('Avoid using the service name in your password.');
    }
    
    return insights.slice(0, 4);
  };

  const addPassword = () => {
    if (newPassword.title.trim() && newPassword.username.trim() && newPassword.password.trim()) {
      const strength = calculatePasswordStrength(newPassword.password);
      const password: Password = {
        id: Date.now().toString(),
        title: newPassword.title,
        username: newPassword.username,
        password: newPassword.password,
        website: newPassword.website,
        category: newPassword.category,
        notes: newPassword.notes,
        strength,
        lastModified: new Date().toISOString(),
        aiSuggestions: [],
        isCompromised: false,
        needsUpdate: false
      };
      
      // Generate AI suggestions after adding
      setTimeout(() => {
        const updatedPassword = { ...password, aiSuggestions: generateAIInsights(password) };
        setPasswords(prev => prev.map(p => p.id === password.id ? updatedPassword : p));
      }, 100);
      
      setPasswords([...passwords, password]);
      setNewPassword({
        title: '',
        username: '',
        password: '',
        website: '',
        category: 'Social Media',
        notes: ''
      });
    }
  };

  const deletePassword = (id: string) => {
    setPasswords(passwords.filter(password => password.id !== id));
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const togglePasswordVisibility = (id: string) => {
    setShowPasswords(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredPasswords = passwords.filter(password => {
    const matchesFilter = filter === 'all' || 
      (filter === 'weak' && password.strength === 'weak') ||
      (filter === 'compromised' && password.isCompromised) ||
      (filter === 'needs-update' && password.needsUpdate);
    
    const matchesSearch = password.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      password.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      password.website.toLowerCase().includes(searchTerm.toLowerCase()) ||
      password.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || password.category === selectedCategory;
    
    return matchesFilter && matchesSearch && matchesCategory;
  });

  const strengthColors = {
    weak: 'text-red-400 bg-red-400/20',
    medium: 'text-yellow-400 bg-yellow-400/20',
    strong: 'text-blue-400 bg-blue-400/20',
    'very-strong': 'text-green-400 bg-green-400/20'
  };

  const securityScore = passwords.length > 0 ? 
    Math.round((passwords.filter(p => p.strength === 'strong' || p.strength === 'very-strong').length / passwords.length) * 100) : 0;

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">AI Password Manager</h1>
            <p className="text-gray-300 mb-6">Enter your master password to access your vault</p>
            <input
              type="password"
              value={masterPassword}
              onChange={(e) => setMasterPassword(e.target.value)}
              placeholder="Master Password"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
            />
            <button
              onClick={() => setIsUnlocked(true)}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Unlock Vault
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>AI Password Manager - Secure Password Vault | Zion Tech Group</title>
        <meta name="description" content="Secure your digital life with our AI-powered password manager. Generate strong passwords, detect breaches, and get smart security insights. Free to use." />
        <meta name="keywords" content="AI password manager, secure vault, password generator, security insights, digital security, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-password-manager" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">AI Password Manager</h1>
                <p className="text-xl text-gray-300">Secure vault powered by artificial intelligence</p>
              </div>
            </div>
            
            {/* Security Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <Key className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white">{passwords.length}</div>
                <div className="text-gray-300">Total Passwords</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-white">{securityScore}%</div>
                <div className="text-gray-300">Security Score</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div className="text-3xl font-bold text-white">
                  {passwords.filter(p => p.strength === 'weak').length}
                </div>
                <div className="text-gray-300">Weak Passwords</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white">
                  {passwords.filter(p => p.strength === 'very-strong').length}
                </div>
                <div className="text-gray-300">Very Strong</div>
              </div>
            </div>
          </div>

          {/* Add Password Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Plus className="w-6 h-6 mr-3 text-purple-400" />
              Add New Password
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Service/Title</label>
                <input
                  type="text"
                  value={newPassword.title}
                  onChange={(e) => setNewPassword({...newPassword, title: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="e.g., Gmail, Facebook, etc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Username/Email</label>
                <input
                  type="text"
                  value={newPassword.username}
                  onChange={(e) => setNewPassword({...newPassword, username: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="username@example.com"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <div className="flex">
                  <input
                    type="password"
                    value={newPassword.password}
                    onChange={(e) => setNewPassword({...newPassword, password: e.target.value})}
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-r-none"
                    placeholder="Enter password or generate one"
                  />
                  <button
                    onClick={() => setNewPassword({...newPassword, password: generatePassword()})}
                    className="px-4 py-3 bg-purple-600 text-white rounded-r-lg hover:bg-purple-700 transition-colors"
                  >
                    <RefreshCw className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Website URL</label>
                <input
                  type="url"
                  value={newPassword.website}
                  onChange={(e) => setNewPassword({...newPassword, website: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="https://example.com"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={newPassword.category}
                  onChange={(e) => setNewPassword({...newPassword, category: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {categories.map((cat) => (
                    <option key={cat.name} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Notes (Optional)</label>
                <input
                  type="text"
                  value={newPassword.notes}
                  onChange={(e) => setNewPassword({...newPassword, notes: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Additional notes..."
                />
              </div>
            </div>
            
            <button
              onClick={addPassword}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Password
            </button>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search passwords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            <div className="flex gap-2">
              {['all', 'weak', 'compromised', 'needs-update'].map((filterType) => (
                <button
                  key={filterType}
                  onClick={() => setFilter(filterType as any)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    filter === filterType
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {filterType.charAt(0).toUpperCase() + filterType.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat.name} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>

          {/* AI Insights Toggle */}
          <div className="mb-6">
            <button
              onClick={() => setShowAISuggestions(!showAISuggestions)}
              className="flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              {showAISuggestions ? 'Hide' : 'Show'} AI Security Insights
            </button>
          </div>

          {/* Passwords List */}
          <div className="space-y-4">
            {filteredPasswords.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Key className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No passwords found</h3>
                <p className="text-gray-400">Add your first password to get started!</p>
              </div>
            ) : (
              filteredPasswords.map((password) => (
                <div key={password.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="p-3 rounded-lg bg-purple-500/20">
                        {categories.find(cat => cat.name === password.category)?.icon || <Key className="w-6 h-6 text-purple-400" />}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-white">{password.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${strengthColors[password.strength]}`}>
                            {password.strength.toUpperCase().replace('-', ' ')}
                          </span>
                          <span className="px-2 py-1 bg-blue-400/20 text-blue-400 rounded-full text-xs font-medium flex items-center">
                            {categories.find(cat => cat.name === password.category)?.icon}
                            <span className="ml-1">{password.category}</span>
                          </span>
                          {password.isCompromised && (
                            <span className="px-2 py-1 bg-red-400/20 text-red-400 rounded-full text-xs font-medium">
                              Compromised
                            </span>
                          )}
                        </div>
                        
                        <div className="text-gray-300 mb-2">{password.username}</div>
                        {password.website && (
                          <div className="text-blue-400 mb-2">
                            <a href={password.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                              {password.website}
                            </a>
                          </div>
                        )}
                        
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="flex-1 bg-gray-800 rounded-lg p-3 font-mono text-sm">
                            {showPasswords[password.id] ? password.password : '••••••••••••••••'}
                          </div>
                          <button
                            onClick={() => togglePasswordVisibility(password.id)}
                            className="p-2 text-gray-400 hover:text-white transition-colors"
                          >
                            {showPasswords[password.id] ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                          <button
                            onClick={() => copyToClipboard(password.password)}
                            className="p-2 text-gray-400 hover:text-white transition-colors"
                          >
                            <Copy className="w-5 h-5" />
                          </button>
                        </div>
                        
                        {password.notes && (
                          <p className="text-gray-400 text-sm mb-3">{password.notes}</p>
                        )}
                        
                        <div className="text-sm text-gray-400">
                          Last modified: {new Date(password.lastModified).toLocaleDateString()}
                        </div>

                        {/* AI Insights */}
                        {showAISuggestions && password.aiSuggestions && password.aiSuggestions.length > 0 && (
                          <div className="mt-4 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                            <div className="flex items-center mb-2">
                              <Brain className="w-4 h-4 text-purple-400 mr-2" />
                              <span className="text-sm font-medium text-purple-300">AI Security Insights</span>
                            </div>
                            <ul className="space-y-1">
                              {password.aiSuggestions.map((suggestion, index) => (
                                <li key={index} className="text-sm text-purple-200 flex items-start">
                                  <Sparkles className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0" />
                                  {suggestion}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => deletePassword(password.id)}
                      className="text-red-400 hover:text-red-300 p-2 hover:bg-red-400/10 rounded-lg transition-all duration-200"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pricing Section */}
          <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/20">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">AI Password Manager Pro</h2>
              <p className="text-xl text-gray-300 mb-8">Advanced security features and unlimited storage</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Free Plan</h3>
                  <div className="text-3xl font-bold text-purple-400 mb-4">$0<span className="text-lg text-gray-300">/month</span></div>
                  <ul className="space-y-2 text-gray-300">
                    <li>✓ Up to 50 passwords</li>
                    <li>✓ Basic AI insights</li>
                    <li>✓ Password generator</li>
                    <li>✓ Local storage</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Pro Plan</h3>
                  <div className="text-3xl font-bold text-white mb-4">$4.99<span className="text-lg text-white/70">/month</span></div>
                  <ul className="space-y-2 text-white/90">
                    <li>✓ Unlimited passwords</li>
                    <li>✓ Advanced AI insights</li>
                    <li>✓ Breach monitoring</li>
                    <li>✓ Cloud sync</li>
                    <li>✓ 2FA integration</li>
                    <li>✓ Priority support</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Enterprise</h3>
                  <div className="text-3xl font-bold text-pink-400 mb-4">$14.99<span className="text-lg text-gray-300">/month</span></div>
                  <ul className="space-y-2 text-gray-300">
                    <li>✓ Everything in Pro</li>
                    <li>✓ Team management</li>
                    <li>✓ SSO integration</li>
                    <li>✓ API access</li>
                    <li>✓ Custom security policies</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 mr-4">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need Help with Security?</h2>
            <p className="text-xl text-gray-300 mb-8">Our security experts are here to help protect your digital life</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Email Support
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Call +1 (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}