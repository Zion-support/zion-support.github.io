import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>AI Fintech - Zion Tech Group</title>
        <meta name="description" content="Professional ai fintech services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>AI Fintech</h1>
          <p>Professional ai fintech services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}
