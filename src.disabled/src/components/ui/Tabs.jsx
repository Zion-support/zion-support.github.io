
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
import React from \'react\';\''\'; import { motion } from \'framer-motion\'; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return (); <div className=\"w-full\"> <div className=\"flex space-x-1 bg-gray-100 p-1 rounded-lg\"> {}; onClick={() => onTabChange(tab && tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} \'; \''; \''\'`; activeTab = = tab && tab.id\''\'"\'"; ? \'bg-white text-gray-900 shadow-sm\''\'"\'"\'"; : any
import _React from 'react';'''; import { motion } from 'framer-motion'; const Tabs = ({ tabs,activeTab,onTabChange }) => {} return (); <div className="w-full"> <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg"> {}; onClick={() => onTabChange(tab && tab.id)} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${} '; ''; '''`; activeTab = = tab && tab.id'''"'"; ? 'bg-white text-gray-900 shadow-sm'''"'"'"; : any