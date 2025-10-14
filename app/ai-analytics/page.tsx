import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional ai analytics services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>AI Analytics</h1>
          <p>Professional ai analytics services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}