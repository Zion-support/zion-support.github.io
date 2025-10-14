import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Business Intelligence - Zion Tech Group</title>
        <meta name="description" content="Professional business intelligence services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>Business Intelligence</h1>
          <p>Professional business intelligence services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}
