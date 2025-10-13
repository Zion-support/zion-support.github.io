import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Search, AlertTriangle } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4" content="The page you're looking for doesn't exist. Return to our homepage to explore our AI and IT solutions."text-center max-w-2 xl mx-auto"mb-8"relative"text-9 xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"absolute -top-4 -right-4"w-16 h-16 text-yellow-400 animate-bounce"text-3 xl md:text-4 xl font-bold text-white mb-4"text-xl text-gray-300 mb-8 leading-relaxed"flex flex-col sm:flex-row gap-4 justify-center mb-12"/"inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"w-5 h-5 mr-2 group-hover:scale-110 transition-transform"inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"text-xl font-semibold text-white mb-4"grid grid-cols-1 sm:grid-cols-2 gap-4"/ai-services"flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"w-5 h-5 text-cyan-400 mr-3 group-hover:scale-110 transition-transform"text-gray-300 group-hover:text-white transition-colors"/micro-saas"flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"w-5 h-5 text-cyan-400 mr-3 group-hover:scale-110 transition-transform"text-gray-300 group-hover:text-white transition-colors"/5 g-solutions"flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"w-5 h-5 text-cyan-400 mr-3 group-hover:scale-110 transition-transform"text-gray-300 group-hover:text-white transition-colors"/contact"flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"w-5 h-5 text-cyan-400 mr-3 group-hover:scale-110 transition-transform"text-gray-300 group-hover:text-white transition-colors"mt-8 text-gray-400 text-sm"/contact" className=">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
