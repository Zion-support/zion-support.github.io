<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Navigate, Route, Routes } from "react-router-dom",
import DeveloperPortal from "../pages/DeveloperPortal",
import ApiDocsHub from "../pages/ApiDocsHub",
import ApiReference from "../pages/ApiReference",
import ApiGettingStarted from "../pages/ApiGettingStarted",
import ApiWebhooks from "../pages/ApiWebhooks",
import ApiSampleCode from "../pages/ApiSampleCode",
import ApiErrorCodes from "../pages/ApiErrorCodes",
=======
import React from &quot;react&quot;;
import { Navigate, Route, Routes } from &quot;react-router-dom&quot;;
import DeveloperPortal from &quot;../pages/DeveloperPortal&quot;;
import ApiDocsHub from &quot;../pages/ApiDocsHub&quot;;
import ApiReference from &quot;../pages/ApiReference&quot;;
import ApiGettingStarted from &quot;../pages/ApiGettingStarted&quot;;
import ApiWebhooks from &quot;../pages/ApiWebhooks&quot;;
import ApiSampleCode from &quot;../pages/ApiSampleCode&quot;;
import ApiErrorCodes from &quot;../pages/ApiErrorCodes&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function DeveloperRoutes() {
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
    </Routes>
  )
=======
import React from "react",;
import { Navigate, Route, Routes } from "react-router-dom",;
import DeveloperPortal from "../pages/DeveloperPortal",;
import ApiDocsHub from "../pages/ApiDocsHub",;
import ApiReference from "../pages/ApiReference",;
import ApiGettingStarted from "../pages/ApiGettingStarted",;
import ApiWebhooks from "../pages/ApiWebhooks",;
import ApiSampleCode from "../pages/ApiSampleCode",;
import ApiErrorCodes from "../pages/ApiErrorCodes";
export default function DeveloperRoutes() {;
  return (;
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}