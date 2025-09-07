import { useState, useCallback, useRef, useEffect } from 'react' import { useAnalytics } from './useAnalytics' export const useAICodeGeneration = () => { const { trackEvent } = useAnalytics({ "enableTracking": true, "enableUserBehaviorTracking": true,'
}) const [isGenerating, setIsGenerating] =;
  useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');'
  const [codeAnalysis, setCodeAnalysis] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [history, setHistory] = useState([]);
<<<<<<< HEAD:src/hooks/useAICodeGeneration.jsx
  const generationTimeoutRef = useRef(null)"";"
}
=======
  const generationTimeoutRef = useRef(null)\"\";
}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91:temp-disabled/src/hooks/useAICodeGeneration.jsx
