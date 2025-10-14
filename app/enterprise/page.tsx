import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Enterprise - Zion Tech Group</title>
        <meta name="description" content="Professional enterprise services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>Enterprise</h1>
          <p>Professional enterprise services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}