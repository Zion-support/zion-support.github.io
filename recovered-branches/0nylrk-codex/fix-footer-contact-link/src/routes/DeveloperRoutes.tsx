
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
import ApiSampleCode from "../pages/ApiSampleCode";
import ApiErrorCodes from "../pages/ApiErrorCodes";
import React from "react",
import { Navigate, Route, Routes } from "react-router-dom",
import DeveloperPortal from "../pages/DeveloperPortal",
import ApiDocsHub from "../pages/ApiDocsHub",
import ApiReference from "../pages/ApiReference",
import ApiGettingStarted from "../pages/ApiGettingStarted",
import ApiWebhooks from "../pages/ApiWebhooks",
import ApiSampleCode from "../pages/ApiSampleCode";
import ApiErrorCodes from "../pages/ApiErrorCodes";
import ApiSampleCode from "../pages/ApiSampleCode",
import ApiErrorCodes from "../pages/ApiErrorCodes",
=======
=======
import ApiSampleCode from "../pages/ApiSampleCode";
=======


};
=======
=======
};

==============
  );
import React from './react';
import { Navigate, Route, Routes } from './react-router-dom';
import DeveloperPortal from "../pages / DeveloperPortal";
import ApiDocsHub from "../pages / ApiDocsHub";
import ApiReference from "../pages / ApiReference";
import ApiGettingStarted from "../pages / ApiGettingStarted";
import ApiWebhooks from "../pages / ApiWebhooks";
import ApiSampleCode from "../pages / ApiSampleCode";
import ApiErrorCodes from "../pages / ApiErrorCodes";
export default /**
 * DeveloperRoutes - Function description
 */
function DeveloperRoutes() {
  return (
    <Routes>;
      <Route path="/" element={<Navigate to="/developers / portal" />} />;
      <Route path="/portal" element={<DeveloperPortal />} />;
      <Route path="/docs" element={<ApiDocsHub />} />;
      <Route path="/docs / getting - started" element={<ApiGettingStarted />} />;
      <Route path="/docs / reference" element={<ApiReference />} />;
      <Route path="/docs / webhooks" element={<ApiWebhooks />} />;
      <Route path="/docs / samples" element={<ApiSampleCode />} />;
      <Route path="/docs / errors" element={<ApiErrorCodes />} />;
    </Routes>);
=======

}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
