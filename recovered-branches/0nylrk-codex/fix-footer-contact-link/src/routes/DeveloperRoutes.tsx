import React from "react",
import { Navigate, Route, Routes } from "react-router-dom",
import DeveloperPortal from "../pages/DeveloperPortal",
import ApiDocsHub from "../pages/ApiDocsHub",
import ApiReference from "../pages/ApiReference",
import ApiGettingStarted from "../pages/ApiGettingStarted",
import ApiWebhooks from "../pages/ApiWebhooks",
import ApiSampleCode from "../pages/ApiSampleCode",
import ApiErrorCodes from "../pages/ApiErrorCodes",export default function DeveloperRoutes() {
  return (
    <Routes>
      <Route path=&quot;/&quot; element={<Navigate to=&quot;/developers/portal&quot; />} />
      <Route path=&quot;/portal&quot; element={<DeveloperPortal />} />
      <Route path=&quot;/docs&quot; element={<ApiDocsHub />} />
      <Route path=&quot;/docs/getting-started&quot; element={<ApiGettingStarted />} />
      <Route path=&quot;/docs/reference&quot; element={<ApiReference />} />
      <Route path=&quot;/docs/webhooks&quot; element={<ApiWebhooks />} />
      <Route path=&quot;/docs/samples&quot; element={<ApiSampleCode />} />
      <Route path=&quot;/docs/errors&quot; element={<ApiErrorCodes />} />
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
  )
}