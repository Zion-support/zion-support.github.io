
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

