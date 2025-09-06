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
import React from \"react\"; );}; export default ContentRoutes; export { ContentRoutes }; export { ContentRoutes }; export { ContentRoutes }; export { ContentRoutes }; export { ContentRoutes };
const React from "react"; );}; export default ContentRoutes; export { ContentRoutes }; export { ContentRoutes }; export { ContentRoutes }; export { ContentRoutes }; export { ContentRoutes };""
<<<<<<< HEAD:backup-problematic-files/src.disabled/src/routes/ContentRoutes.jsx
import _React from "react"; );}; export default ContentRoutes; export { ContentRoutes }; export { ContentRoutes }; export { ContentRoutes }; export { ContentRoutes }; export { ContentRoutes };
=======
import _React from "react"; );}; export default ContentRoutes; export { ContentRoutes }; export { ContentRoutes }; export { ContentRoutes }; export { ContentRoutes }; export { ContentRoutes };
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:src.disabled/src/routes/ContentRoutes.jsx
