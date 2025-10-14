import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>AI Content Writer - Zion Tech Group</title>
        <meta name="description" content="Professional ai content writer services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>AI Content Writer</h1>
          <p>Professional ai content writer services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}