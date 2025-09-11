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
import React,{ useState } from \'react\'; import { motion,AnimatePresence } from \'framer-motion\'; export default function Page() {; ,\"; { \"icon\": <Star className=\"w-6 h-6\"/>,\"value\": \"4 && 4.8/5\",\"label\": \"Global Rating\" },\"; { \"icon\": <TrendingUp className=\"w-6 h-6\"/>,\"value\": \"98%\",\"label\": \"Client Satisfaction\" } ]; const partnerships = [{}; export {};
const React,{ useState } from "react"; import { motion,AnimatePresence } from "framer-motion"; export default function Page() {; ,"; { icon: <Star className="w-6 h-6"/>,value: "4 && 4.8/5",label: "Global Rating" },"; { icon: <TrendingUp className="w-6 h-6"/>,value: "98%",label: "Client Satisfaction" } ]; const partnerships = [{}; export {};'"'"
import _React,{ useState } from 'react'; import { motion,AnimatePresence } from 'framer-motion'; export default function Page() {; ,"; { "icon": <Star className="w-6 h-6"/>,"value": "4 && 4.8/5","label": "Global Rating" },"; { "icon": <TrendingUp className="w-6 h-6"/>,"value": "98%","label": "Client Satisfaction" } ]; const partnerships = [{}; export {};