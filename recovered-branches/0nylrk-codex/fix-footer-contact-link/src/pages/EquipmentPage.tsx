const EquipmentPage = () => {
const EquipmentPage = () => {;
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
    <div className="container mx-auto px-4 py-8">;
      <h1 className="text-3xl font-bold mb-6">Equipment</h1>;
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
        {/* Equipment listing placeholder */}
}
export default EquipmentPage;

},

export default EquipmentPage;
export default EquipmentPage,

;
