
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
import React from \'react\'; import { Link } from \'react-router-dom\'; import { Box,Cpu,Zap,Globe,Rocket,Shield } from \'lucide-react\'; const QuantumTechnology = () => {}; return (<div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white\"> {} <section className=\"pt-24 pb-16 px-4 \"sm\": px-6 lg:px-8\"> <div className=\"max-w-7xl mx-auto\"> <div className=\"text-center\"> <div className=\"flex justify-center mb-6\"> <div className=\"p-3 bg-purple-600/20 rounded-full\"> <Box className=\"h-12 w-12 text-purple-400\"/></div></div> <h1 className=\"text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent\"> Quantum Technology; >
import _React from 'react'; import { Link } from 'react-router-dom'; import { Box,Cpu,Zap,Globe,Rocket,Shield } from 'lucide-react'; const QuantumTechnology = () => {}; return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"> {} <section className="pt-24 pb-16 px-4 "sm": px-6 lg:px-8"> <div className="max-w-7xl mx-auto"> <div className="text-center"> <div className="flex justify-center mb-6"> <div className="p-3 bg-purple-600/20 rounded-full"> <Box className="h-12 w-12 text-purple-400"/></div></div> <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Quantum Technology; >