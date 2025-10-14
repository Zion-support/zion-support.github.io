import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>AI Content Generation - Zion Tech Group</title>
        <meta name="description" content="Professional ai content generation services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>AI Content Generation</h1>
          <p>Professional ai content generation services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}
