
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
import React from \"react\"} ); \"export default ComponentName;\"
const React from "react"} ); "export default ComponentName;"""
<<<<<<< HEAD
import _React from "react"} ); "export default ComponentName;"
=======
import _React from "react"} ); "export default ComponentName;"
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
