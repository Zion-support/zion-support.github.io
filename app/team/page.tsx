import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Team - Zion Tech Group</title>
        <meta name="description" content="Professional team services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>Team</h1>
          <p>Professional team services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}
