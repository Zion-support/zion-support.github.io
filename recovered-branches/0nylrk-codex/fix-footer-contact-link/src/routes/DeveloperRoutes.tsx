import React from "react";
import DeveloperPortal from "../pages/DeveloperPortal";
import ApiDocsHub from "../pages/ApiDocsHub";
import ApiReference from "../pages/ApiReference";
import ApiGettingStarted from "../pages/ApiGettingStarted";
import ApiWebhooks from "../pages/ApiWebhooks";
import ApiSampleCode from "../pages/ApiSampleCode";
import ApiErrorCodes from "../pages/ApiErrorCodes";

export default function DeveloperRoutes() {_return (
    <Routes>
      <Route path="/" element={<Navigate to="/developers/portal" />} />
      <Route path="/portal" element={_<DeveloperPortal />} />
      <Route path="/docs" element={_<ApiDocsHub />} />
      <Route path="/docs/getting-started" element={_<ApiGettingStarted />} />
      <Route path="/docs/reference" element={_<ApiReference />} />
      <Route path="/docs/webhooks" element={_<ApiWebhooks />} />
      <Route path="/docs/samples" element={_<ApiSampleCode />} />
      <Route path="/docs/errors" element={_<ApiErrorCodes />} />
    </Routes>
  );
}