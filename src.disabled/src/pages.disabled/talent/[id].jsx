
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
import React from \"react\"; import Link from \"next/link\"; import { ArrowRight,Phone,Mail } from \"lucide-react\"; ); export default function DynamicPage() {}; return null} )}
const React from "react"; import Link from "next/link"; import { ArrowRight,Phone,Mail } from "lucide-react"; ); export default function DynamicPage() { return; }; return null} )}""
import _React from "react"; import Link from "next/link"; import { ArrowRight,Phone,Mail } from "lucide-react"; ); export default function DynamicPage() {}; return null} )}
