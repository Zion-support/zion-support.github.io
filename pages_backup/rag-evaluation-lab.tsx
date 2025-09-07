

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
import React from 'react';

  return (
    <>;
      <SEO
        title='RAG Evaluation Lab'
        description='Measure answer quality, hallucination rate, latency, and cost of your RAG pipelines with production-grade evals and CI gates.'
export default function RAGEvaluationLabPage() {
origin/cursor/automate-test-improve-and-merge-code-2533
