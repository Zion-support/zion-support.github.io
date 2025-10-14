import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>AI Translation Service - Zion Tech Group</title>
        <meta name="description" content="Professional ai translation service services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>AI Translation Service</h1>
          <p>Professional ai translation service services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}