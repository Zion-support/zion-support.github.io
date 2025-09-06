<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
import React from \"react\"; import { cn } from \"@/lib/utils\"; export const PageLoader = ({ text = \"Loading...\",className }) => {}; return (); <div\" className={cn( \"flex flex-col items-center justify-center min-h-screen\',className)}>; <div className=\"animate-spin rounded-full h-32 w-32 border-b-2 border-white> <div>Broken JSX</div> ></div> ); export default Component;
const React from "react"; import { cn } from "@/lib/utils"; export const PageLoader = ({ text = "Loading.",className }) => {}; return (); <div" className={cn( "flex flex-col items-center justify-center min-h-screen",className)}>; <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white> <div>Broken JSX</div> ></div> ); export default Component;"""

import _React from "react"; import { cn } from "@/lib/utils"; export const PageLoader = ({ text = "Loading...",className }) => {}; return (); <div" className={cn( "flex flex-col items-center justify-center min-h-screen',className)}>; <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white> <div>Broken JSX</div> ></div> ); export default Component;

<<<<<<< HEAD
=======
=======
import _React from "react"; import { cn } from "@/lib/utils"; export const PageLoader = ({ text = "Loading...",className }) => {}; return (); <div"; className={cn(; "flex flex-col items-center justify-center min-h-screen',className)}; >; <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white> <div>Broken JSX</div> ></div> ); export default Component;
>>>>>>> main
=======
import React from \"react\"; import { cn } from \"@/lib/utils\"; export const PageLoader = ({ text = \"Loading...\",className }) => {}; return (); <div\"; className={cn(; \"flex flex-col items-center justify-center min-h-screen\',className)}; >; <div className=\"animate-spin rounded-full h-32 w-32 border-b-2 border-white> <div>Broken JSX</div> ></div> ); export default Component;
const React from "react"; import { cn } from "@/lib/utils"; export const PageLoader = ({ text = "Loading.",className }) => {}; return (); <div"; className={cn(; "flex flex-col items-center justify-center min-h-screen",className)}; >; <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white> <div>Broken JSX</div> ></div> ); export default Component;"""
import _React from "react"; import { cn } from "@/lib/utils"; export const PageLoader = ({ text = "Loading...",className }) => {}; return (); <div"; className={cn(; "flex flex-col items-center justify-center min-h-screen',className)}; >; <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white> <div>Broken JSX</div> ></div> ); export default Component;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
