

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
<<<<<<< HEAD
}
import React from "react";
=======
}import React from "react";
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { Navigate, Route, Routes } from "react-router-dom";
import DeveloperPortal from "../pages/DeveloperPortal";
import ApiDocsHub from "../pages/ApiDocsHub";
import ApiReference from "../pages/ApiReference";
import ApiGettingStarted from "../pages/ApiGettingStarted";
<<<<<<< HEAD
import ApiWebhooks from "../pages/ApiWebhooks";

import ApiSampleCode from "../pages/ApiSampleCode";
import ApiSampleCode from "../pages/ApiSampleCode";


import ApiSampleCode from "../pages/ApiSampleCode";
import ApiErrorCodes from "../pages/ApiErrorCodes";
import React from "react",
=======
import ApiWebhooks from "../pages/ApiWebhooks";import React from "react",
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { Navigate, Route, Routes } from "react-router-dom",
import DeveloperPortal from "../pages/DeveloperPortal",
import ApiDocsHub from "../pages/ApiDocsHub",
import ApiReference from "../pages/ApiReference",
import ApiGettingStarted from "../pages/ApiGettingStarted",
import ApiWebhooks from "../pages/ApiWebhooks",
import ApiSampleCode from "../pages/ApiSampleCode";
import ApiErrorCodes from "../pages/ApiErrorCodes";
import ApiSampleCode from "../pages/ApiSampleCode",
<<<<<<< HEAD
import ApiErrorCodes from "../pages/ApiErrorCodes",
export default function DeveloperRoutes() {
  return (
=======
import ApiErrorCodes from "../pages/ApiErrorCodes",  return (
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    <Routes>
      <Route path="/" element={<Navigate to="/developers/portal" />} />
      <Route path="/portal" element={<DeveloperPortal />} />
      <Route path="/docs" element={<ApiDocsHub />} />
      <Route path="/docs/getting-started" element={<ApiGettingStarted />} />
      <Route path="/docs/reference" element={<ApiReference />} />
      <Route path="/docs/webhooks" element={<ApiWebhooks />} />
      <Route path="/docs/samples" element={<ApiSampleCode />} />
      <Route path="/docs/errors" element={<ApiErrorCodes />} />
    </Routes>
<<<<<<< HEAD
  );
}
=======
  )
import React from "react",;
import { Navigate, Route, Routes } from "react-router-dom",;
import DeveloperPortal from "../pages/DeveloperPortal",;
import ApiDocsHub from "../pages/ApiDocsHub",;
import ApiReference from "../pages/ApiReference",;
import ApiGettingStarted from "../pages/ApiGettingStarted",;
import ApiWebhooks from "../pages/ApiWebhooks",;
import ApiSampleCode from "../pages/ApiSampleCode",;
import ApiSampleCode from "../pages/ApiSampleCode";
import ApiErrorCodes from "../pages/ApiErrorCodes";
export default function DeveloperRoutes() {;
  return (
    <Routes>;
      <Route path="/" element={<Navigate to="/developers/portal" />} />;
      <Route path="/portal" element={<DeveloperPortal />} />;
      <Route path="/docs" element={<ApiDocsHub />} />;
      <Route path="/docs/getting-started" element={<ApiGettingStarted />} />;
      <Route path="/docs/reference" element={<ApiReference />} />;
      <Route path="/docs/webhooks" element={<ApiWebhooks />} />;
      <Route path="/docs/samples" element={<ApiSampleCode />} />;
      <Route path="/docs/errors" element={<ApiErrorCodes />} />;
    </Routes>;
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
