import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Iot Edge Computing - Zion Tech Group</title>
        <meta name="description" content="Professional iot edge computing services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>Iot Edge Computing</h1>
          <p>Professional iot edge computing services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}
