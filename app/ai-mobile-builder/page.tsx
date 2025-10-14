import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>AI Mobile Builder - Zion Tech Group</title>
        <meta name="description" content="Professional ai mobile builder services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>AI Mobile Builder</h1>
          <p>Professional ai mobile builder services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}