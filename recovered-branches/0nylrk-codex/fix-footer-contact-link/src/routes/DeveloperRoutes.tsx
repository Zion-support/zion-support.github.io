

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import DeveloperPortal from "../pages/DeveloperPortal";
import ApiDocsHub from "../pages/ApiDocsHub";
import ApiReference from "../pages/ApiReference";
import ApiGettingStarted from "../pages/ApiGettingStarted";
import ApiWebhooks from "../pages/ApiWebhooks";

import ApiSampleCode from "../pages/ApiSampleCode";
<<<<<<< HEAD

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


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
export default function DeveloperRoutes() {
  return (
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
  )


<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import React from "react",;
import { Navigate, Route, Routes } from "react-router-dom",;
import DeveloperPortal from "../pages/DeveloperPortal",;
import ApiDocsHub from "../pages/ApiDocsHub",;
import ApiReference from "../pages/ApiReference",;
import ApiGettingStarted from "../pages/ApiGettingStarted",;
import ApiWebhooks from "../pages/ApiWebhooks",;
import ApiSampleCode from "../pages/ApiSampleCode",;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
  );
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

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
}


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
