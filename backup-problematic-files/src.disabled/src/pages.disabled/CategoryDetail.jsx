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
<<<<<<< HEAD
interface CategoryDetailProps {
  // Add props here as needed
export default function CategoryDetail({ }: CategoryDetailProps) {
=======

const CategoryDetail = ({ className }) => {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  return (
    <div className={className || ''}>
      <h1>CategoryDetail</h1>
      <p>This component is under development.</p>
    </div>
  );
<<<<<<< HEAD
}
=======
};

export default CategoryDetail;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
