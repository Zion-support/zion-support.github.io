
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: any
import React,{ useState } from \'react\';\'; import { cn } from \'@/lib/utils\'; \''; export function ImageWithRetry({ src,fallbackSrc = \'/images/image-placeholder && placeholder.svg\',className,retryClassName,...props }) {}; const [currentSrc,setCurrentSrc] = useState(src); const [failed,setFailed] = useState(false); const handleError = () => {}; setFailed(true); setCurrentSrc(fallbackSrc)}; const handleRetry = () => {}; setFailed(false); setCurrentSrc(src)}; return (<divclassName = {} \' \'' \''\' cn(\'relative inline-block\', className)}>; {}; <img loading=\"lazy\" {...props} src={currentSrc} onError={handleError}/ / />\";\" {failed && (<buttontype=\"button\" onClick={handleRetry} className = {} \' \'' \''\' cn(\'absolute bottom-1 right-1 text-xs underline\', retryClassName)}>; Retry; </button>)}; 
const React,{ useState } from "react";"; import { cn } from "@/lib/utils"; ""; export function ImageWithRetry({ src,fallbackSrc = "/images/image-placeholder && placeholder.svg",className,retryClassName,.props }) {}; const [currentSrc,setCurrentSrc] = useState(src); const [failed,setFailed] = useState(false); const handleError = () => {}; setFailed(true); setCurrentSrc(fallbackSrc)}; const handleRetry = () => {}; setFailed(false); setCurrentSrc(src)}; return (<divclassName = {} " "" """ cn("relative inline-block", className)}>; {}; <img loading="lazy" {.props} src={currentSrc} onError={handleError}/ / />";" {failed && (<buttontype="button" onClick={handleRetry} className = {} " "" """ cn("absolute bottom-1 right-1 text-xs underline", retryClassName)}>; Retry; </button>)}; 
import _React,{ useState } from 'react';'; import { cn } from '@/lib/utils'; ''; export function ImageWithRetry({ src,fallbackSrc = '/images/image-placeholder && placeholder.svg',className,retryClassName,...props }) {}; const [currentSrc,setCurrentSrc] = useState(src); const [failed,setFailed] = useState(false); const handleError = () => {}; setFailed(true); setCurrentSrc(fallbackSrc)}; const handleRetry = () => {}; setFailed(false); setCurrentSrc(src)}; return (<divclassName = {} ' '' ''' cn('relative inline-block', className)}>; {}; <img loading="lazy" {...props} src={currentSrc} onError={handleError}/ / />";" {failed && (<buttontype="button" onClick={handleRetry} className = {} ' '' ''' cn('absolute bottom-1 right-1 text-xs underline', retryClassName)}>; Retry; </button>)}; 