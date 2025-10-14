import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Zion Ai Inventory Manager - Zion Tech Group</title>
        <meta name="description" content="Professional zion ai inventory manager services by Zion Tech Group." />
      </Helmet>
      <div>
        <div>
          <h1>Zion Ai Inventory Manager</h1>
          <p>Professional zion ai inventory manager services by Zion Tech Group.</p>
        </div>
      </div>
    </React.Fragment>
  );
}
