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
import React from \"react\"; import { useState,useEffect } from \"react\" export function useIsMobile() { const [isMobile,setIsMobile] = useState(false) useEffect(() => { const checkIsMobile = () => { setIsMobile(window && window.innerWidth < 768)} checkIsMobile() window && window.addEventListener(\"resize\",checkIsMobile) return () => window ; ); export default Component;
const React from "react"; import { useState,useEffect } from "react" export function useIsMobile() { const [isMobile,setIsMobile] = useState(false) useEffect(() => { const checkIsMobile = () => { setIsMobile(window && window.innerWidth < 768)} checkIsMobile() window && window.addEventListener("resize",checkIsMobile) return () => window ; ); export default Component;""
import _React from "react"; import { useState,useEffect } from "react" export function useIsMobile() { const [isMobile,setIsMobile] = useState(false) useEffect(() => { const checkIsMobile = () => { setIsMobile(window && window.innerWidth < 768)} checkIsMobile() window && window.addEventListener("resize",checkIsMobile) return () => window ; ); export default Component;