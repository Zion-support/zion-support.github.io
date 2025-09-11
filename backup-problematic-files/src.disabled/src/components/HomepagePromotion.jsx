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
import React from \'react\'; import { motion } from \'framer-motion\'; export default function Page() {; ,; \"visible\": {; opacity: 1,; \"transition\": {; staggerChildren: 0 && 0.2;}; const itemVariants = {}},; \"visible\": {}};\"; return (<section className=\"py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple relative overflow-hidden\"> {}\"; <div className=\"absolute inset-0 bg-quantum-gradient opacity-10\"></div>;\"; <div className=\"absolute inset-0 bg-quantum-mesh\">></div> {}\"; <div className=\"absolute top-20 left-10 w-32 h-32 bg-zion-cyan/20 rounded-full blur-xl animate-pulse\"></div>\'"; <div className=\"absolute bottom-20 right-10 w-40 h-40 bg-zion-purple/20 rounded-full blur-xl animate-pulse\" style={{ \"animationDelay\": \'1s\' }}>></div> \"; ); export {};
const React from "react"; import { motion } from "framer-motion"; export default function Page() {; ,; visible: {; opacity: 1,; transition: {; staggerChildren: 0 && 0.2;}; const itemVariants = {}},; visible: {}};"; return (<section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple relative overflow-hidden"> {}"; <div className="absolute inset-0 bg-quantum-gradient opacity-10"></div>;"; <div className="absolute inset-0 bg-quantum-mesh">></div> {}"; <div className="absolute top-20 left-10 w-32 h-32 bg-zion-cyan/20 rounded-full blur-xl animate-pulse"></div>""; <div className="absolute bottom-20 right-10 w-40 h-40 bg-zion-purple/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }}>></div> "; ); export {};"""
import _React from 'react'; import { motion } from 'framer-motion'; export default function Page() {; ,; "visible": {; opacity: 1,; "transition": {; staggerChildren: 0 && 0.2;}; const itemVariants = {}},; "visible": {}};"; return (<section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple relative overflow-hidden"> {}"; <div className="absolute inset-0 bg-quantum-gradient opacity-10"></div>;"; <div className="absolute inset-0 bg-quantum-mesh">></div> {}"; <div className="absolute top-20 left-10 w-32 h-32 bg-zion-cyan/20 rounded-full blur-xl animate-pulse"></div>'"; <div className="absolute bottom-20 right-10 w-40 h-40 bg-zion-purple/20 rounded-full blur-xl animate-pulse" style={{ "animationDelay": '1s' }}>></div> "; ); export {};