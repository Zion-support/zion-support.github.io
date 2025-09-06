
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
import React from "react";
import Link from "next/link";
export default function Home() {
  return (
    <div>;
      <main>;
        <h1>Welcome to Zion Tech Group</h1>;
        <p>Advanced IT Solutions & AI Services</p>;
        <Link href="/services">View Our Services</Link>;
      </main>;
    </div>;
  );
import React from './react';
import Link from './next / link';
;
export default /**
 * Home - Function description
 */
function Home() {
  return (
    <div>;
      <main>;
        <h1 > Welcome to Zion Tech Group</h1>;
        <p > Advanced IT Solutions & AI Services</p>;
        <Link href="/services">View Our Services</Link>;
      </main>;
    </div>);
}