import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  DocumentTextIcon, 
  CheckCircleIcon, 
  ExclamationTriangleIcon, 
  InformationCircleIcon, 
  WrenchScrewdriverIcon, 
  XMarkIcon, 
  ArrowPathIcon 
} from '@heroicons/react/24/outline';

export const ContentQualityEnhancer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedElement, setSelectedElement] = useState(null);

  const analyzeContent = useCallback(async () => {
    setIsAnalyzing(true);
    try {
      // Simulate content analysis
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockAnalysis = {
        score: 85,
        suggestions: [
          {
            type: 'improvement',
            message: 'Consider adding more descriptive headings',
            element: 'h2',
            priority: 'medium'
          },
          {
            type: 'warning',
            message: 'Some images lack alt text',
            element: 'img',
            priority: 'high'
          },
          {
            type: 'info',
            message: 'Content structure looks good',
            element: 'main',
            priority: 'low'
          }
        ],
        metrics: {
          readability: 78,
          accessibility: 82,
          seo: 90
        }
      };
      
      setAnalysis(mockAnalysis);
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  }, []);

  const handleElementClick = (element) => {
    setSelectedElement(element);
    setActiveTab('details');
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high': return <ExclamationTriangleIcon className="h-4 w-4" />;
      case 'medium': return <InformationCircleIcon className="h-4 w-4" />;
      case 'low': return <CheckCircleIcon className="h-4 w-4" />;
      default: return <InformationCircleIcon className="h-4 w-4" />;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white rounded-lg shadow-xl border border-gray-200 w-96 max-h-96 overflow-hidden"
          >
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Content Quality Enhancer
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="p-4">
              {!analysis ? (
                <div className="text-center py-8">
                  <DocumentTextIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">
                    Analyze your content for quality improvements
                  </p>
                  <button
                    onClick={analyzeContent}
                    disabled={isAnalyzing}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center mx-auto"
                  >
                    {isAnalyzing ? (
                      <>
                        <ArrowPathIcon className="h-4 w-4 mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <WrenchScrewdriverIcon className="h-4 w-4 mr-2" />
                        Analyze Content
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      {analysis.score}/100
                    </div>
                    <p className="text-sm text-gray-600">Overall Quality Score</p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-gray-50 rounded-lg p-2">
                      <div className="text-sm font-medium text-gray-900">
                        {analysis.metrics.readability}
                      </div>
                      <div className="text-xs text-gray-600">Readability</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2">
                      <div className="text-sm font-medium text-gray-900">
                        {analysis.metrics.accessibility}
                      </div>
                      <div className="text-xs text-gray-600">Accessibility</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2">
                      <div className="text-sm font-medium text-gray-900">
                        {analysis.metrics.seo}
                      </div>
                      <div className="text-xs text-gray-600">SEO</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Suggestions</h4>
                    {analysis.suggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-2 p-2 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
                        onClick={() => handleElementClick(suggestion)}
                      >
                        <div className={`${getPriorityColor(suggestion.priority)} mt-0.5`}>
                          {getPriorityIcon(suggestion.priority)}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">
                            {suggestion.message}
                          </p>
                          <p className="text-xs text-gray-500">
                            {suggestion.element} • {suggestion.priority} priority
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <WrenchScrewdriverIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};