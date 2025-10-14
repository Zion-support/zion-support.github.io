import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>AI Data Mining Pro - Zion Tech Group</title>
        <meta name="description" content="Professional ai data mining pro services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>AI Data Mining Pro</h1>
          <p>Professional ai data mining pro services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}