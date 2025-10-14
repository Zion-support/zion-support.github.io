import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>AI Predictive Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional ai predictive analytics services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>AI Predictive Analytics</h1>
          <p>Professional ai predictive analytics services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}