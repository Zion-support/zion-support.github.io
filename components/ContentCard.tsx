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
  title: string;
  description: string;
  href: string;
  icon: string;
  color: string;
  glow: string;
  date?: string;

  category?: string
}

const ContentCard: React.FC<ContentCardProps> = ({
  title;
  description;
  href;
  icon;
  color;
  glow;
  date;
  category
}) => {
  return (
    <Link
      href;

