import React from 'react';
import { Receipt, TrendingUp, Shield, Zap, Brain, Target, CheckCircle, Star, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExpenseTrackerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Expense Tracker</h1>
        <p className="text-gray-300 mb-8">Coming Soon - AI-powered expense tracking solutions</p>
        <a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default ExpenseTrackerPage;