import React, { useState, useEffect } from 'react';
import { 
  Lock, 
  Eye, 
  EyeOff, 
  Plus, 
  Search, 
  Copy, 
  Trash2, 
  Edit3, 
  Shield, 
  Key, 
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  Download,
  Upload,
  Settings,
  Zap,
  Brain,
  Star
} from 'lucide-react';

interface PasswordEntry {
  id: string;
  title: string;
  username: string;
  password: string;
  website: string;
  category: string;
  notes: string;
  strength: 'weak' | 'medium' | 'strong' | 'very-strong';
  lastModified: Date;
  isFavorite: boolean;
}

const AIPasswordManager: React.FC = () => {
  const [passwords, setPasswords] = useState<PasswordEntry[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showPassword, setShowPassword] = useState<{ [key: string]: boolean }>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const categories = ['all', 'social', 'work', 'finance', 'shopping', 'entertainment', 'utilities'];

  const [newPassword, setNewPassword] = useState({
    title: '',
    username: '',
    password: '',
    website: '',
    category: 'work',
    notes: ''
  });

  // Sample data
  useEffect(() => {
    const samplePasswords: PasswordEntry[] = [
      {
        id: '1',
        title: 'Gmail Account',
        username: 'user@example.com',
        password: 'MySecurePassword123!',
        website: 'gmail.com',
        category: 'work',
        notes: 'Primary work email',
        strength: 'strong',
        lastModified: new Date(),
        isFavorite: true
      },
      {
        id: '2',
        title: 'Banking App',
        username: 'john.doe',
        password: 'BankPass456$',
        website: 'chase.com',
        category: 'finance',
        notes: 'Chase mobile banking',
        strength: 'very-strong',
        lastModified: new Date(),
        isFavorite: false
      },
      {
        id: '3',
        title: 'Netflix',
        username: 'john.doe@email.com',
        password: 'Netflix2024!',
        website: 'netflix.com',
        category: 'entertainment',
        notes: 'Family account',
        strength: 'medium',
        lastModified: new Date(),
        isFavorite: false
      }
    ];
    setPasswords(samplePasswords);
  }, []);

  const generatePassword = async (length: number = 16, includeSymbols: boolean = true) => {
    setIsGenerating(true);
    // Simulate AI password generation
    setTimeout(() => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
      const allChars = includeSymbols ? chars + symbols : chars;
      
      let password = '';
      for (let i = 0; i < length; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
      }
      
      setNewPassword(prev => ({ ...prev, password }));
      setIsGenerating(false);
    }, 1500);
  };

  const getPasswordStrength = (password: string): PasswordEntry['strength'] => {
    let score = 0;
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    
    if (score <= 2) return 'weak';
    if (score <= 4) return 'medium';
    if (score <= 5) return 'strong';
    return 'very-strong';
  };

  const getStrengthColor = (strength: PasswordEntry['strength']) => {
    switch (strength) {
      case 'weak': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'strong': return 'text-blue-400';
      case 'very-strong': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getStrengthText = (strength: PasswordEntry['strength']) => {
    switch (strength) {
      case 'weak': return 'Weak';
      case 'medium': return 'Medium';
      case 'strong': return 'Strong';
      case 'very-strong': return 'Very Strong';
      default: return 'Unknown';
    }
  };

  const addPassword = () => {
    if (!newPassword.title || !newPassword.password) return;

    const strength = getPasswordStrength(newPassword.password);
    const passwordEntry: PasswordEntry = {
      id: Date.now().toString(),
      ...newPassword,
      strength,
      lastModified: new Date(),
      isFavorite: false
    };

    setPasswords(prev => [...prev, passwordEntry]);
    setNewPassword({
      title: '',
      username: '',
      password: '',
      website: '',
      category: 'work',
      notes: ''
    });
    setShowAddForm(false);
  };

  const updatePassword = (id: string, updates: Partial<PasswordEntry>) => {
    setPasswords(prev => prev.map(p => 
      p.id === id 
        ? { ...p, ...updates, lastModified: new Date() }
        : p
    ));
  };

  const deletePassword = (id: string) => {
    setPasswords(prev => prev.filter(p => p.id !== id));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Show toast notification
  };

  const togglePasswordVisibility = (id: string) => {
    setShowPassword(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredPasswords = passwords.filter(password => {
    const matchesSearch = password.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         password.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         password.website.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || password.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getAISuggestions = async () => {
    setIsGenerating(true);
    setTimeout(() => {
      setAiSuggestions([
        'Consider using a passphrase instead of a password',
        'Enable two-factor authentication where possible',
        'Use different passwords for each account',
        'Consider using a password manager for better security',
        'Regularly update your passwords'
      ]);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="animated-bg"></div>
      
      {/* Header */}
      <div className="relative z-10 pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold cyber-text mb-4">
              AI Password Manager
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Secure your digital life with AI-powered password management and security insights
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="futuristic-card text-center">
              <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{passwords.length}</div>
              <div className="text-gray-400">Passwords Stored</div>
            </div>
            <div className="futuristic-card text-center">
              <Key className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">
                {passwords.filter(p => p.strength === 'strong' || p.strength === 'very-strong').length}
              </div>
              <div className="text-gray-400">Strong Passwords</div>
            </div>
            <div className="futuristic-card text-center">
              <AlertTriangle className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">
                {passwords.filter(p => p.strength === 'weak').length}
              </div>
              <div className="text-gray-400">Weak Passwords</div>
            </div>
            <div className="futuristic-card text-center">
              <Star className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">
                {passwords.filter(p => p.isFavorite).length}
              </div>
              <div className="text-gray-400">Favorites</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pb-20">
        {/* Controls */}
        <div className="futuristic-card mb-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search passwords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="capitalize">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowAddForm(true)}
                className="flex items-center px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Password
              </button>
              <button
                onClick={getAISuggestions}
                disabled={isGenerating}
                className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-colors"
              >
                <Brain className="w-4 h-4 mr-2" />
                {isGenerating ? 'Analyzing...' : 'AI Insights'}
              </button>
            </div>
          </div>
        </div>

        {/* AI Suggestions */}
        {aiSuggestions.length > 0 && (
          <div className="futuristic-card mb-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-400" />
              AI Security Recommendations
            </h3>
            <div className="space-y-2">
              {aiSuggestions.map((suggestion, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-slate-800 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300">{suggestion}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add Password Form */}
        {showAddForm && (
          <div className="futuristic-card mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Add New Password</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
                <input
                  type="text"
                  value={newPassword.title}
                  onChange={(e) => setNewPassword(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  placeholder="e.g., Gmail Account"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Username/Email</label>
                <input
                  type="text"
                  value={newPassword.username}
                  onChange={(e) => setNewPassword(prev => ({ ...prev, username: e.target.value }))}
                  className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  placeholder="username@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Website</label>
                <input
                  type="text"
                  value={newPassword.website}
                  onChange={(e) => setNewPassword(prev => ({ ...prev, website: e.target.value }))}
                  className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  placeholder="example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={newPassword.category}
                  onChange={(e) => setNewPassword(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                >
                  {categories.filter(c => c !== 'all').map(category => (
                    <option key={category} value={category} className="capitalize">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newPassword.password}
                    onChange={(e) => setNewPassword(prev => ({ ...prev, password: e.target.value }))}
                    className="flex-1 px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    placeholder="Enter password or generate one"
                  />
                  <button
                    onClick={() => generatePassword(16, true)}
                    disabled={isGenerating}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-colors flex items-center"
                  >
                    {isGenerating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
                  </button>
                </div>
                {newPassword.password && (
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="text-sm text-gray-400">Strength:</span>
                    <span className={`text-sm font-medium ${getStrengthColor(getPasswordStrength(newPassword.password))}`}>
                      {getStrengthText(getPasswordStrength(newPassword.password))}
                    </span>
                  </div>
                )}
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">Notes</label>
                <textarea
                  value={newPassword.notes}
                  onChange={(e) => setNewPassword(prev => ({ ...prev, notes: e.target.value }))}
                  className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  rows={2}
                  placeholder="Additional notes..."
                />
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={addPassword}
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white transition-colors"
              >
                Add Password
              </button>
            </div>
          </div>
        )}

        {/* Passwords List */}
        <div className="space-y-4">
          {filteredPasswords.map((password) => (
            <div key={password.id} className="futuristic-card">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-white">{password.title}</h3>
                    {password.isFavorite && <Star className="w-4 h-4 text-yellow-400 fill-current" />}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStrengthColor(password.strength)} bg-slate-800`}>
                      {getStrengthText(password.strength)}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
                    <div>
                      <span className="text-gray-400">Username:</span> {password.username}
                    </div>
                    <div>
                      <span className="text-gray-400">Website:</span> {password.website}
                    </div>
                    <div>
                      <span className="text-gray-400">Category:</span> 
                      <span className="capitalize ml-1">{password.category}</span>
                    </div>
                  </div>
                  {password.notes && (
                    <div className="mt-2 text-sm text-gray-400">
                      <span className="text-gray-500">Notes:</span> {password.notes}
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <input
                      type={showPassword[password.id] ? 'text' : 'password'}
                      value={password.password}
                      readOnly
                      className="px-3 py-1 bg-slate-800 border border-gray-600 rounded text-white text-sm font-mono"
                    />
                    <button
                      onClick={() => togglePasswordVisibility(password.id)}
                      className="p-1 text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword[password.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  <button
                    onClick={() => copyToClipboard(password.password)}
                    className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                    title="Copy password"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setEditingId(password.id)}
                    className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                    title="Edit password"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deletePassword(password.id)}
                    className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                    title="Delete password"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPasswords.length === 0 && (
          <div className="text-center py-12">
            <Lock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No passwords found</h3>
            <p className="text-gray-500">Try adjusting your search or add a new password</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIPasswordManager;