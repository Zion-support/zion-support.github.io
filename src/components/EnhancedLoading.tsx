import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Loader2, 
  CheckCircle, 
  AlertCircle, 
  Zap, 
  Sparkles,
  TrendingUp,
  Cpu,
  Database,
  Network,
  Shield
} from 'lucide-react';

interface LoadingStep {
  id: string;
  label: string;
  status: 'pending' | 'loading' | 'completed' | 'error';
  progress?: number;
  message?: string;
  icon?: React.ReactNode;
}

interface EnhancedLoadingProps {
  isLoading: boolean;
  title?: string;
  subtitle?: string;
  steps?: LoadingStep[];
  showProgress?: boolean;
  progress?: number;
  message?: string;
  type?: 'default' | 'futuristic' | 'minimal' | 'detailed';
  onComplete?: () => void;
  onError?: (error: Error) => void;
  autoComplete?: boolean;
  autoCompleteDelay?: number;
}

export const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({
  isLoading,
  title = 'Loading...',
  subtitle = 'Please wait while we prepare everything for you',
  steps = [],
  showProgress = false,
  progress = 0,
  message,
  type = 'futuristic',
  onComplete,
  onError,
  autoComplete = false,
  autoCompleteDelay = 3000
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Auto-complete functionality
  useEffect(() => {
    if (autoComplete && isLoading) {
      const timer = setTimeout(() => {
        setShowCompletion(true);
        setTimeout(() => {
          onComplete?.();
        }, 1000);
      }, autoCompleteDelay);

      return () => clearTimeout(timer);
    }
  }, [autoComplete, isLoading, autoCompleteDelay, onComplete]);

  // Progress simulation
  useEffect(() => {
    if (isLoading && showProgress) {
      const interval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [isLoading, showProgress]);

  // Step progression
  useEffect(() => {
    if (steps.length > 0 && isLoading) {
      const interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= steps.length - 1) {
            clearInterval(interval);
            return steps.length - 1;
          }
          return prev + 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [steps, isLoading]);

  // Get loading icon based on type
  const getLoadingIcon = () => {
    switch (type) {
      case 'futuristic':
        return (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="relative"
          >
            <div className="w-16 h-16 border-4 border-zion-cyan/20 rounded-full" />
            <div className="absolute top-0 left-0 w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Zap className="w-6 h-6 text-zion-cyan" />
            </div>
          </motion.div>
        );
      case 'minimal':
        return (
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-12 h-12 bg-zion-cyan rounded-full flex items-center justify-center"
          >
            <Loader2 className="w-6 h-6 text-white" />
          </motion.div>
        );
      case 'detailed':
        return (
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                className="w-3 h-3 bg-zion-cyan rounded-full"
              />
            ))}
          </div>
        );
      default:
        return (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-2 border-zion-cyan border-t-transparent rounded-full"
          />
        );
    }
  };

  // Get step icon
  const getStepIcon = (step: LoadingStep) => {
    if (step.icon) return step.icon;

    switch (step.status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'loading':
        return (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 className="w-5 h-5 text-zion-cyan" />
          </motion.div>
        );
      default:
        return <div className="w-5 h-5 border-2 border-zion-slate/30 rounded-full" />;
    }
  };

  // Get step status color
  const getStepStatusColor = (status: LoadingStep['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'error':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'loading':
        return 'text-zion-cyan bg-zion-cyan/10 border-zion-cyan/20';
      default:
        return 'text-zion-slate/60 bg-zion-slate/10 border-zion-slate/20';
    }
  };

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center p-4"
      >
        <div className="max-w-md w-full bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-red-200 p-8 text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-zion-slate-dark mb-2">Loading Error</h2>
          <p className="text-zion-slate mb-6">{error.message}</p>
          <button
            onClick={() => setError(null)}
            className="px-6 py-3 bg-zion-cyan hover:bg-zion-cyan/80 text-white font-semibold rounded-xl transition-colors"
          >
            Try Again
          </button>
        </div>
      </motion.div>
    );
  }

  if (showCompletion) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center p-4"
      >
        <div className="max-w-md w-full bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-green-200 p-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-bold text-zion-slate-dark mb-2"
          >
            All Set!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-zion-slate"
          >
            Everything is ready for you
          </motion.p>
        </div>
      </motion.div>
    );
  }

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center p-4"
    >
      <div className="max-w-2xl w-full bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-zion-cyan/20 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            {getLoadingIcon()}
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-zion-slate-dark mb-2"
          >
            {title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-zion-slate text-lg"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Progress Bar */}
        {showProgress && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-zion-slate">Progress</span>
              <span className="text-sm text-zion-cyan font-mono">
                {Math.round(loadingProgress)}%
              </span>
            </div>
            <div className="w-full bg-zion-slate/20 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full"
              />
            </div>
          </motion.div>
        )}

        {/* Loading Steps */}
        {steps.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-8"
          >
            <h3 className="text-lg font-semibold text-zion-slate-dark mb-4">Loading Steps</h3>
            <div className="space-y-3">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className={`flex items-center space-x-3 p-3 rounded-lg border ${getStepStatusColor(step.status)}`}
                >
                  {getStepIcon(step)}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{step.label}</span>
                      {step.progress !== undefined && (
                        <span className="text-sm text-zion-slate/60">
                          {Math.round(step.progress)}%
                        </span>
                      )}
                    </div>
                    {step.message && (
                      <p className="text-sm text-zion-slate/60 mt-1">{step.message}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Status Message */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-center"
          >
            <p className="text-zion-slate/80">{message}</p>
          </motion.div>
        )}

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-8"
        >
          <div className="flex space-x-2">
            {[Cpu, Database, Network, Shield].map((Icon, index) => (
              <motion.div
                key={index}
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: index * 0.2 
                }}
                className="w-8 h-8 bg-zion-cyan/10 rounded-lg flex items-center justify-center"
              >
                <Icon className="w-4 h-4 text-zion-cyan" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sparkles Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.3,
                ease: "easeOut"
              }}
              className="absolute"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`
              }}
            >
              <Sparkles className="w-4 h-4 text-zion-cyan/60" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Hook for managing loading state
export const useLoading = (initialState = false) => {
  const [isLoading, setIsLoading] = useState(initialState);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('');
  const [steps, setSteps] = useState<LoadingStep[]>([]);

  const startLoading = useCallback((title?: string, subtitle?: string) => {
    setIsLoading(true);
    setProgress(0);
    setMessage('');
    setSteps([]);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
    setProgress(100);
  }, []);

  const updateProgress = useCallback((newProgress: number) => {
    setProgress(Math.min(100, Math.max(0, newProgress)));
  }, []);

  const updateMessage = useCallback((newMessage: string) => {
    setMessage(newMessage);
  }, []);

  const addStep = useCallback((step: Omit<LoadingStep, 'id'>) => {
    const newStep: LoadingStep = {
      ...step,
      id: `step-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
    setSteps(prev => [...prev, newStep]);
  }, []);

  const updateStep = useCallback((stepId: string, updates: Partial<LoadingStep>) => {
    setSteps(prev => prev.map(step => 
      step.id === stepId ? { ...step, ...updates } : step
    ));
  }, []);

  return {
    isLoading,
    progress,
    message,
    steps,
    startLoading,
    stopLoading,
    updateProgress,
    updateMessage,
    addStep,
    updateStep
  };
};

// Predefined loading configurations
export const loadingConfigs = {
  pageLoad: {
    title: 'Loading Page',
    subtitle: 'Preparing your experience',
    type: 'futuristic' as const,
    showProgress: true
  },
  dataFetch: {
    title: 'Fetching Data',
    subtitle: 'Retrieving the latest information',
    type: 'detailed' as const,
    showProgress: false
  },
  processing: {
    title: 'Processing',
    subtitle: 'Working on your request',
    type: 'minimal' as const,
    showProgress: true
  },
  initialization: {
    title: 'Initializing',
    subtitle: 'Setting up your environment',
    type: 'futuristic' as const,
    showProgress: true
  }
};