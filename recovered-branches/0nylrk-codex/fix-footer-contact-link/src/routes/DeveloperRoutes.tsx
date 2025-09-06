<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

import React from "react",
import { Navigate, Route, Routes } from "react-router-dom",
import DeveloperPortal from "../pages/DeveloperPortal",
import ApiDocsHub from "../pages/ApiDocsHub",
import ApiReference from "../pages/ApiReference",
import ApiGettingStarted from "../pages/ApiGettingStarted",
import ApiWebhooks from "../pages/ApiWebhooks",

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
<<<<<<< HEAD
}
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react";
=======
}import React from "react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}import React from "react";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { Navigate, Route, Routes } from "react-router-dom";
import DeveloperPortal from "../pages/DeveloperPortal";
import ApiDocsHub from "../pages/ApiDocsHub";
import ApiReference from "../pages/ApiReference";
import ApiGettingStarted from "../pages/ApiGettingStarted";
import ApiWebhooks from "../pages/ApiWebhooks";import React from "react",
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
<<<<<<< HEAD
import ApiErrorCodes from "../pages/ApiErrorCodes",
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default function DeveloperRoutes() {
  return (
=======
import ApiErrorCodes from "../pages/ApiErrorCodes",  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import ApiErrorCodes from "../pages/ApiErrorCodes",  return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  )
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

};

=======
=======
};

};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React from "react",;
import { Navigate, Route, Routes } from "react-router-dom",;
import DeveloperPortal from "../pages/DeveloperPortal",;
import ApiDocsHub from "../pages/ApiDocsHub",;
import ApiReference from "../pages/ApiReference",;
import ApiGettingStarted from "../pages/ApiGettingStarted",;
import ApiWebhooks from "../pages/ApiWebhooks",;
import ApiSampleCode from "../pages/ApiSampleCode",;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import ApiErrorCodes from "../pages/ApiErrorCodes";
export default function DeveloperRoutes() {;
  return (
=======
};
import React from "react",;
import { Navigate, Route, Routes } from "react-router-dom",;
import DeveloperPortal from "../pages/DeveloperPortal",;
import ApiDocsHub from "../pages/ApiDocsHub",;
import ApiReference from "../pages/ApiReference",;
import ApiGettingStarted from "../pages/ApiGettingStarted",;
import ApiWebhooks from "../pages/ApiWebhooks",;
import ApiSampleCode from "../pages/ApiSampleCode",;
import ApiErrorCodes from "../pages/ApiErrorCodes",;
;
export default function DeveloperRoutes() {;
  return (;
import ApiErrorCodes from "../pages/ApiErrorCodes";
export default function DeveloperRoutes() {;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import ApiSampleCode from "../pages/ApiSampleCode";
import ApiErrorCodes from "../pages/ApiErrorCodes";
export default function DeveloperRoutes() {;
  return (
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  );
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD
    </Routes>);
<<<<<<< HEAD
<<<<<<< HEAD
=======

}

  ),; export default function DeveloperRoutes () {
  return (<Routes> <Route path="/" element= {
  <Navigate to="/developers/portal" /> 
}/> <Route path="/portal" element= {
  <DeveloperPortal /> 
}/> <Route path="/docs" element= {
  <ApiDocsHub /> 
}/> <Route path="/docs/getting-started" element= {
  <ApiGettingStarted /> 
}/> <Route path="/docs/reference" element= {
  <ApiReference /> 
}/> <Route path="/docs/webhooks" element= {
  <ApiWebhooks /> 
}/> <Route path="/docs/samples" element= {
  <ApiSampleCode /> 
}/> <Route path="/docs/errors" element= {
  <ApiErrorCodes /> 
}/> 
}
  );
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
}
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
    </Routes>);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    </Routes>);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



import React from "react";"
import { Navigate, Route, Routes } from "react-router-dom";"
import DeveloperPortal from "../pages/DeveloperPortal";"
import ApiDocsHub from "../pages/ApiDocsHub";"
import ApiReference from "../pages/ApiReference";"
import ApiGettingStarted from "../pages/ApiGettingStarted";"
import ApiWebhooks from "../pages/ApiWebhooks";

"
import ApiSampleCode from "../pages/ApiSampleCode";

"
import ApiSampleCode from "../pages/ApiSampleCode";"
import ApiErrorCodes from "../pages/ApiErrorCodes";

"
import React from "react","
import { Navigate, Route, Routes } from "react-router-dom","
import DeveloperPortal from "../pages/DeveloperPortal","
import ApiDocsHub from "../pages/ApiDocsHub","
import ApiReference from "../pages/ApiReference","
import ApiGettingStarted from "../pages/ApiGettingStarted","
import ApiWebhooks from "../pages/ApiWebhooks",";
import ApiSampleCode from "../pages/ApiSampleCode";"
import ApiErrorCodes from "../pages/ApiErrorCodes";"
import ApiSampleCode from "../pages/ApiSampleCode","
import ApiErrorCodes from "../pages/ApiErrorCodes",

export default function DeveloperRoutes() {}
  return (
    <Routes>"
      <Route path="/" element={<Navigate to="/developers/portal" />} />"
      <Route path="/portal" element={<DeveloperPortal />} />"
      <Route path="/docs" element={<ApiDocsHub />} />"
      <Route path="/docs/getting-started" element={<ApiGettingStarted />} />"
      <Route path="/docs/reference" element={<ApiReference />} />"
      <Route path="/docs/webhooks" element={<ApiWebhooks />} />"
      <Route path="/docs/samples" element={<ApiSampleCode />} />"
      <Route path="/docs/errors" element={<ApiErrorCodes />} />;
    </Routes>;
  );
}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
