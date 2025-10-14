import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>AI Automation Suite - Zion Tech Group</title>
        <meta name="description" content="Professional ai automation suite services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>AI Automation Suite</h1>
          <p>Professional ai automation suite services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}
