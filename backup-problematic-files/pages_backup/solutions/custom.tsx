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
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Settings, Code, Zap, Users } from 'lucide-react';
import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';
import { Settings, Code, Zap, Users, ArrowRight, CheckCircle, Clock, Target, Wrench } from 'lucide-react';
import Layout from "../../components/Layout";";

const Custom: React.FC<CustomProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Custom</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Custom;