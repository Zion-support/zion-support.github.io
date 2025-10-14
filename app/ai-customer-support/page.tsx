import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>AI Customer Support - Zion Tech Group</title>
        <meta name="description" content="Professional ai customer support services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>AI Customer Support</h1>
          <p>Professional ai customer support services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}