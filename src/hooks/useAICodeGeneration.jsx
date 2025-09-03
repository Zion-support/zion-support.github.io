<<<<<<< HEAD
import { useState, useCallback, useRef, useEffect } from &apos;react&apos; import { useAnalytics } from &apos;./useAnalytics&apos;&apos;' export const useAICodeGeneration = () => {} const { trackEvent } = useAnalytics({ enableTracking: true, enableUserBehaviorTracking: true }) const [isGenerating, setIsGenerating] = useState(false) const [isAnalyzing, setIsAnalyzing] = useState(false) const;const [generatedCode, setGeneratedCode] = useState(&apos;&apos;)&apos;&apos; const [codeAnalysis, setCodeAnalysis] = useState(null) const [suggestions, setSuggestions] = useState([]) const [history, setHistory] = useState([]) const;const;const generationTimeoutRef = useRef(null);
=======
<<<<<<< HEAD
import { useState, useCallback, useRef, useEffect } from 'react' import { useAnalytics } from './useAnalytics' export const useAICodeGeneration = () => { const { trackEvent } = useAnalytics({ enableTracking: true, enableUserBehaviorTracking: true }) const [isGenerating, setIsGenerating] = useState(false) const [isAnalyzing, setIsAnalyzing] = useState(false) const [generatedCode, setGeneratedCode] = useState('') const [codeAnalysis, setCodeAnalysis] = useState(null) const [suggestions, setSuggestions] = useState([]) const [history, setHistory] = useState([]) const generationTimeoutRef = useRef(null);","
}""
=======
import { useState, useCallback, useRef, useEffect } from 'react' import { useAnalytics }  from './useAnalytics';export const useAICodeGeneration = () => { const { trackEvent } = useAnalytics({ enableTracking: true, enableUserBehaviorTracking: true }) const [isGenerating, setIsGenerating] = useState(false) const [isAnalyzing, setIsAnalyzing] = useState(false) const [generatedCode, setGeneratedCode] = useState('') const [codeAnalysis, setCodeAnalysis] = useState(null) const [suggestions, setSuggestions] = useState([]) const [history, setHistory] = useState([]) const generationTimeoutRef = useRef(null);",
}"
>>>>>>> main
>>>>>>> main
