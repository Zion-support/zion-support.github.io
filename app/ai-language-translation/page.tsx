import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>AI Language Translation - Zion Tech Group</title>
        <meta name="description" content="Professional ai language translation services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>AI Language Translation</h1>
          <p>Professional ai language translation services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}