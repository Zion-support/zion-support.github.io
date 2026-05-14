'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  BarChart2,
  HelpCircle,
  Trash2,
  Calendar,
  Clock,
  AlertCircle,
  X,
  FolderOpen,
  Inbox,
  Download,
  Sparkles,
} from 'lucide-react';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { ProposalLibrary } from './ProposalLibrary';
import { SavedComparisons } from './SavedComparisons';
import { QuizHistory } from './QuizHistory';
import ContactLog from './ContactLog';
import {
  getProposals,
  deleteProposal,
  getComparisons,
  deleteComparison,
  getQuizResults,
  deleteQuizResult,
  getContactLog,
  exportAllData,
  clearAllData,
} from '../lib/portal-storage';
import type { Proposal, ComparisonSet, QuizResult } from '../lib/portal-storage';

type TabId = 'proposals' | 'comparisons' | 'quiz' | 'contact';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ElementType;
}

export default function ClientPortal() {
  const [activeTab, setActiveTab] = useState<TabId>('proposals');
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [comparisons, setComparisons] = useState<ComparisonSet[]>([]);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [contactLog, setContactLog] = useState<ReturnType<typeof getContactLog>>([]);
  const [showExportModal, setShowExportModal] = useState(false);
  const [showClearModal, setShowClearModal] = useState(false);

  // Load data on mount
  useEffect(() => {
    setProposals(getProposals());
    setComparisons(getComparisons());
    setQuizResults(getQuizResults());
    setContactLog(getContactLog());
  }, []);

  const tabs: Tab[] = useMemo(
    () => [
      { id: 'proposals', label: 'Proposals', icon: FileText },
      { id: 'comparisons', label: 'Comparisons', icon: BarChart2 },
      { id: 'quiz', label: 'Quiz History', icon: HelpCircle },
      { id: 'contact', label: 'Contact Log', icon: Clock },
    ],
    []
  );

  const hasAnyData = proposals.length > 0 || comparisons.length > 0 || quizResults.length > 0;

  const handleDeleteProposal = (id: string) => {
    deleteProposal(id);
    setProposals(getProposals());
    toast.success('Proposal deleted');
  };

  const handleDeleteComparison = (id: string) => {
    deleteComparison(id);
    setComparisons(getComparisons());
    toast.success('Comparison deleted');
  };

  const handleDeleteQuiz = (id: string) => {
    deleteQuizResult(id);
    setQuizResults(getQuizResults());
    toast.success('Quiz result deleted');
  };

  const handleClearAll = () => {
    clearAllData();
    setProposals([]);
    setComparisons([]);
    setQuizResults([]);
    setContactLog([]);
    toast.success('All data cleared');
    setShowClearModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
              <FolderOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Client Portal</h1>
              <p className="text-gray-600">Your saved proposals, comparisons, and recommendations — all in one place.</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                <FileText className="w-4 h-4" /> Proposals
              </div>
              <div className="text-2xl font-bold text-gray-900">{proposals.length}</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                <BarChart2 className="w-4 h-4" /> Comparisons
              </div>
              <div className="text-2xl font-bold text-gray-900">{comparisons.length}</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                <HelpCircle className="w-4 h-4" /> Quizzes
              </div>
              <div className="text-2xl font-bold text-gray-900">{quizResults.length}</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                <Clock className="w-4 h-4" /> Contact log
              </div>
              <div className="text-2xl font-bold text-gray-900">{contactLog.length}</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex gap-6">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              const count = { proposals: proposals.length, comparisons: comparisons.length, quiz: quizResults.length, contact: contactLog.length }[tab.id];
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 pb-3 border-b-2 transition-colors relative ${
                    isActive ? 'border-indigo-600 text-indigo-600 font-medium' : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                  {count > 0 && (
                    <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs font-medium">{count}</span>
                  )}
                  {isActive && <motion.div layoutId="portal-tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'proposals' && (
            <motion.div key="proposals" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <ProposalLibrary proposals={proposals} onDelete={handleDeleteProposal} />
            </motion.div>
          )}
          {activeTab === 'comparisons' && (
            <motion.div key="comparisons" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <SavedComparisons comparisons={comparisons} onDelete={handleDeleteComparison} />
            </motion.div>
          )}
          {activeTab === 'quiz' && (
            <motion.div key="quiz" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <QuizHistory results={quizResults} onDelete={handleDeleteQuiz} />
            </motion.div>
          )}
          {activeTab === 'contact' && (
            <motion.div key="contact" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <ContactLog log={contactLog} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global Actions */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap gap-3">
          <button
            onClick={() => setShowExportModal(true)}
            disabled={!hasAnyData}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="w-4 h-4" />
            Export All Data
          </button>
          <button
            onClick={() => setShowClearModal(true)}
            disabled={!hasAnyData}
            className="inline-flex items-center gap-2 px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Trash2 className="w-4 h-4" />
            Clear All Data
          </button>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            <Sparkles className="w-4 h-4" />
            Explore Tools
          </Link>
        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {showExportModal && (
          <ExportModal onClose={() => setShowExportModal(false)} />
        )}
        {showClearModal && (
          <ClearConfirmModal
            onConfirm={handleClearAll}
            onCancel={() => setShowClearModal(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Modals ────────────────────────────────────────────────────────────────────
function ExportModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Export Your Data</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
        </div>
        <p className="text-gray-600 mb-6">
          Download a complete backup of your portal data (proposals, comparisons, quiz results) as a JSON file.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => {
              const blob = new Blob([exportAllData()], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `zion-portal-backup-${new Date().toISOString().slice(0, 10)}.json`;
              a.click();
              URL.revokeObjectURL(url);
              toast.success('Export started');
              onClose();
            }}
            className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Download JSON
          </button>
          <button onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
        </div>
      </motion.div>
    </div>
  );
}

function ClearConfirmModal({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
            <AlertCircle className="w-5 h-5 text-red-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Clear all data?</h2>
        </div>
        <p className="text-gray-600 mb-6">
          This will permanently delete all saved proposals, comparisons, quiz results, and contact logs. This action cannot be undone.
        </p>
        <div className="flex gap-3">
          <button onClick={onConfirm} className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Yes, delete everything
          </button>
          <button onClick={onCancel} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
}
