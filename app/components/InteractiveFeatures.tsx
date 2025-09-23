'use client';

import React, { useState, useEffect, useRef } from 'react';

interface RecommendationItem {
  id: number;
  title: string;
  type: string;
  matchScore: number;
  reason: string;
}

interface ChatMessageItem {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface InteractiveFeaturesProps {
  enableROICalculator?: boolean;
  enableContentRecommendations?: boolean;
  enableLiveChat?: boolean;
  enableProgressTracking?: boolean;
}

const InteractiveFeatures: React.FC<InteractiveFeaturesProps> = ({
  enableROICalculator = true,
  enableContentRecommendations = true,
  enableLiveChat = true,
  enableProgressTracking = true
}) => {
  const [isROICalculatorOpen, setIsROICalculatorOpen] = useState(false);
  const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);
  const [recommendations, setRecommendations] = useState<RecommendationItem[]>([]);
  const [progress, setProgress] = useState(0);
  const [chatMessages, setChatMessages] = useState<ChatMessageItem[]>([]);
  const [chatInput, setChatInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const ROICalculator = () => {
    const [formData, setFormData] = useState({
      currentRevenue: 1000000,
      currentCosts: 800000,
      aiInvestment: 100000,
      expectedEfficiency: 25,
      expectedSavings: 15,
      timeFrame: 12
    });

    const calculateROI = () => {
      const currentProfit = formData.currentRevenue - formData.currentCosts;
      const efficiencyGain = (formData.currentRevenue * formData.expectedEfficiency) / 100;
      const costSavings = (formData.currentCosts * formData.expectedSavings) / 100;
      const totalGain = efficiencyGain + costSavings;
      const roi = ((totalGain - formData.aiInvestment) / formData.aiInvestment) * 100;
      const paybackPeriod = formData.aiInvestment / (totalGain / formData.timeFrame);
      return {
        roi: Math.round(roi),
        totalGain: Math.round(totalGain),
        paybackPeriod: Math.round(paybackPeriod * 10) / 10,
        monthlyGain: Math.round(totalGain / formData.timeFrame)
      };
    };

    const results = calculateROI();

    return (
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">AI ROI Calculator</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Annual Revenue ($)</label>
            <input type="number" value={formData.currentRevenue} onChange={(e) => setFormData({...formData, currentRevenue: Number(e.target.value)})} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Annual Costs ($)</label>
            <input type="number" value={formData.currentCosts} onChange={(e) => setFormData({...formData, currentCosts: Number(e.target.value)})} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">AI Investment ($)</label>
            <input type="number" value={formData.aiInvestment} onChange={(e) => setFormData({...formData, aiInvestment: Number(e.target.value)})} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Expected Efficiency Gain (%)</label>
            <input type="number" value={formData.expectedEfficiency} onChange={(e) => setFormData({...formData, expectedEfficiency: Number(e.target.value)})} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Expected Cost Savings (%)</label>
            <input type="number" value={formData.expectedSavings} onChange={(e) => setFormData({...formData, expectedSavings: Number(e.target.value)})} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
        </div>
        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <h4 className="font-semibold text-green-800 mb-2">Projected Results</h4>
          <div className="space-y-2">
            <div className="flex justify-between"><span className="text-green-700">ROI:</span><span className="font-bold text-green-800">{results.roi}%</span></div>
            <div className="flex justify-between"><span className="text-green-700">Annual Gain:</span><span className="font-bold text-green-800">${results.totalGain.toLocaleString()}</span></div>
            <div className="flex justify-between"><span className="text-green-700">Monthly Gain:</span><span className="font-bold text-green-800">${results.monthlyGain.toLocaleString()}</span></div>
            <div className="flex justify-between"><span className="text-green-700">Payback Period:</span><span className="font-bold text-green-800">{results.paybackPeriod} months</span></div>
          </div>
        </div>
      </div>
    );
  };

  const LiveChat = () => {
    const sendMessage = () => {
      if (!chatInput.trim()) return;
      const newMessage: ChatMessageItem = { id: Date.now(), text: chatInput, sender: 'user', timestamp: new Date() };
      setChatMessages(prev => [...prev, newMessage]);
      setChatInput('');
      setTimeout(() => {
        const aiResponse: ChatMessageItem = { id: Date.now() + 1, text: 'Thanks! We will get back to you with recommendations.', sender: 'ai', timestamp: new Date() };
        setChatMessages(prev => [...prev, aiResponse]);
      }, 1000);
    };
    useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [chatMessages]);
    return (
      <div className="bg-white rounded-xl shadow-lg w-80 h-96 flex flex-col">
        <div className="p-4 border-b border-gray-200"><h3 className="text-lg font-semibold text-gray-900">AI Assistant</h3></div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {chatMessages.map((m) => (
            <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs px-3 py-2 rounded-lg ${m.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'}`}>{m.text}</div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <div className="p-4 border-t border-gray-200">
          <div className="flex gap-2">
            <input type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendMessage()} placeholder="Ask about AI..." className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            <button onClick={sendMessage} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Send</button>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (enableContentRecommendations) {
      setRecommendations([
        { id: 1, title: 'AI Business Intelligence Implementation Guide', type: 'resource', matchScore: 95, reason: 'Based on your interest in BI solutions' },
        { id: 2, title: 'Fortune 500 AI Success Stories', type: 'case-study', matchScore: 88, reason: 'Similar company size and industry' }
      ]);
    }
  }, [enableContentRecommendations]);

  useEffect(() => {
    if (enableProgressTracking) {
      const interval = setInterval(() => setProgress(prev => Math.min(prev + Math.random() * 10, 100)), 2000);
      return () => clearInterval(interval);
    }
  }, [enableProgressTracking]);

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-4">
      {enableROICalculator && (
        <button onClick={() => setIsROICalculatorOpen(!isROICalculatorOpen)} className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700" title="ROI Calculator">🧮</button>
      )}
      {enableLiveChat && (
        <button onClick={() => setIsLiveChatOpen(!isLiveChatOpen)} className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700" title="Live Chat">💬</button>
      )}
      {enableProgressTracking && progress < 100 && (
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="text-sm text-gray-600 mb-2">AI Implementation Progress</div>
          <div className="w-32 bg-gray-200 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div></div>
          <div className="text-xs text-gray-500 mt-1">{Math.round(progress)}% Complete</div>
        </div>
      )}
      {enableContentRecommendations && recommendations.length > 0 && (
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs">
          <h4 className="font-semibold text-gray-900 mb-2">Recommended for You</h4>
          <div className="space-y-2">
            {recommendations.slice(0, 2).map((rec) => (
              <div key={rec.id} className="text-sm">
                <div className="font-medium text-gray-900">{rec.title}</div>
                <div className="text-gray-600">{rec.reason}</div>
                <div className="text-xs text-blue-600">{rec.matchScore}% match</div>
              </div>
            ))}
          </div>
        </div>
      )}
      {isROICalculatorOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative">
            <button onClick={() => setIsROICalculatorOpen(false)} className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100">✕</button>
            <ROICalculator />
          </div>
        </div>
      )}
      {isLiveChatOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative">
            <button onClick={() => setIsLiveChatOpen(false)} className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100">✕</button>
            <LiveChat />
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveFeatures;
