<<<<<<< HEAD
<<<<<<< HEAD
import _React,{ useState } from 'react';'; import { cn } from '@/lib/utils'; ''; export function ImageWithRetry({ src,fallbackSrc = '/images/image-placeholder.svg',className,retryClassName,...props }) {}; const [currentSrc,setCurrentSrc] = useState(src); const [failed,setFailed] = useState(false); const handleError = () => {}; setFailed(true); setCurrentSrc(fallbackSrc)}; const handleRetry = () => {}; setFailed(false); setCurrentSrc(src)}; return(<div className = {}; '; ''; '''; cn('relative inline-block',; className)}>; {}; <img loading="lazy" {...props} src={currentSrc} onError={handleError}/ / />";" {failed && (<button type="button" onClick={handleRetry} className = {}; '; ''; '''; cn('absolute bottom-1 right-1 text-xs underline',; retryClassName)}>; Retry; </button>)}; </div>)}; export { ImageWithRetry }; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry;" export default ImageWithRetry;";" export default ImageWithRetry;'";" '"'";";
=======
<<<<<<< HEAD

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React,{ useState } from \'react\';\'; import { cn } from \'@/lib/utils\'; \''; export function ImageWithRetry({ src,fallbackSrc = \'/images/image-placeholder && placeholder.svg\',className,retryClassName,...props }) {}; const [currentSrc,setCurrentSrc] = useState(src); const [failed,setFailed] = useState(false); const handleError = () => {}; setFailed(true); setCurrentSrc(fallbackSrc)}; const handleRetry = () => {}; setFailed(false); setCurrentSrc(src)}; return (<divclassName = {} \' \'' \''\' cn(\'relative inline-block\', className)}>; {}; <img loading=\"lazy\" {...props} src={currentSrc} onError={handleError}/ / />\";\" {failed && (<buttontype=\"button\" onClick={handleRetry} className = {} \' \'' \''\' cn(\'absolute bottom-1 right-1 text-xs underline\', retryClassName)}>; Retry; </button>)}; </div>)}; export { ImageWithRetry }; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry;\" export default ImageWithRetry;\";\" export default ImageWithRetry;\'";\" \'"\'";\";
const React,{ useState } from "react";"; import { cn } from "@/lib/utils"; ""; export function ImageWithRetry({ src,fallbackSrc = "/images/image-placeholder && placeholder.svg",className,retryClassName,.props }) {}; const [currentSrc,setCurrentSrc] = useState(src); const [failed,setFailed] = useState(false); const handleError = () => {}; setFailed(true); setCurrentSrc(fallbackSrc)}; const handleRetry = () => {}; setFailed(false); setCurrentSrc(src)}; return (<divclassName = {} " "" """ cn("relative inline-block", className)}>; {}; <img loading="lazy" {.props} src={currentSrc} onError={handleError}/ / />";" {failed && (<buttontype="button" onClick={handleRetry} className = {} " "" """ cn("absolute bottom-1 right-1 text-xs underline", retryClassName)}>; Retry; </button>)}; </div>)}; export { ImageWithRetry }; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry;" export default ImageWithRetry;";" export default ImageWithRetry;"";" """";";'"'"

import _React,{ useState } from 'react';'; import { cn } from '@/lib/utils'; ''; export function ImageWithRetry({ src,fallbackSrc = '/images/image-placeholder && placeholder.svg',className,retryClassName,...props }) {}; const [currentSrc,setCurrentSrc] = useState(src); const [failed,setFailed] = useState(false); const handleError = () => {}; setFailed(true); setCurrentSrc(fallbackSrc)}; const handleRetry = () => {}; setFailed(false); setCurrentSrc(src)}; return (<divclassName = {} ' '' ''' cn('relative inline-block', className)}>; {}; <img loading="lazy" {...props} src={currentSrc} onError={handleError}/ / />";" {failed && (<buttontype="button" onClick={handleRetry} className = {} ' '' ''' cn('absolute bottom-1 right-1 text-xs underline', retryClassName)}>; Retry; </button>)}; </div>)}; export { ImageWithRetry }; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry;" export default ImageWithRetry;";" export default ImageWithRetry;'";" '"'";";

>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
import React,{ useState } from \'react\';\'; import { cn } from \'@/lib/utils\'; \''; export function ImageWithRetry({ src,fallbackSrc = \'/images/image-placeholder.svg\',className,retryClassName,...props }) {}; const [currentSrc,setCurrentSrc] = useState(src); const [failed,setFailed] = useState(false); const handleError = () => {}; setFailed(true); setCurrentSrc(fallbackSrc)}; const handleRetry = () => {}; setFailed(false); setCurrentSrc(src)}; return(<div className = {}; \'; \''; \''\'; cn(\'relative inline-block\',; className)}>; {}; <img loading=\"lazy\" {...props} src={currentSrc} onError={handleError}/ / />\";\" {failed && (<button type=\"button\" onClick={handleRetry} className = {}; \'; \''; \''\'; cn(\'absolute bottom-1 right-1 text-xs underline\',; retryClassName)}>; Retry; </button>)}; </div>)}; export { ImageWithRetry }; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry;\" export default ImageWithRetry;\";\" export default ImageWithRetry;\'";\" \'"\'";\";
const React,{ useState } from "react";"; import { cn } from "@/lib/utils"; ""; export function ImageWithRetry({ src,fallbackSrc = "/images/image-placeholder.svg",className,retryClassName,.props }) {}; const [currentSrc,setCurrentSrc] = useState(src); const [failed,setFailed] = useState(false); const handleError = () => {}; setFailed(true); setCurrentSrc(fallbackSrc)}; const handleRetry = () => {}; setFailed(false); setCurrentSrc(src)}; return(<div className = {}; "; ""; """; cn("relative inline-block",; className)}>; {}; <img loading="lazy" {.props} src={currentSrc} onError={handleError}/ / />";" {failed && (<button type="button" onClick={handleRetry} className = {}; "; ""; """; cn("absolute bottom-1 right-1 text-xs underline",; retryClassName)}>; Retry; </button>)}; </div>)}; export { ImageWithRetry }; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry;" export default ImageWithRetry;";" export default ImageWithRetry;"";" """";";'"'"
import _React,{ useState } from 'react';'; import { cn } from '@/lib/utils'; ''; export function ImageWithRetry({ src,fallbackSrc = '/images/image-placeholder.svg',className,retryClassName,...props }) {}; const [currentSrc,setCurrentSrc] = useState(src); const [failed,setFailed] = useState(false); const handleError = () => {}; setFailed(true); setCurrentSrc(fallbackSrc)}; const handleRetry = () => {}; setFailed(false); setCurrentSrc(src)}; return(<div className = {}; '; ''; '''; cn('relative inline-block',; className)}>; {}; <img loading="lazy" {...props} src={currentSrc} onError={handleError}/ / />";" {failed && (<button type="button" onClick={handleRetry} className = {}; '; ''; '''; cn('absolute bottom-1 right-1 text-xs underline',; retryClassName)}>; Retry; </button>)}; </div>)}; export { ImageWithRetry }; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry; export default ImageWithRetry;" export default ImageWithRetry;";" export default ImageWithRetry;'";" '"'";";
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
