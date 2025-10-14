import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Professional api documentation services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>API Documentation</h1>
          <p>Professional api documentation services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}