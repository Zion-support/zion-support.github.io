import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>AI Recommendation Engine - Zion Tech Group</title>
        <meta name="description" content="Professional ai recommendation engine services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>AI Recommendation Engine</h1>
          <p>Professional ai recommendation engine services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}
