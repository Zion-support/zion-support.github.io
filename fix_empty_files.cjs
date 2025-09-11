const fs = require("fs")
const path = require("path")
// Basic React component template
const basicComponent = `import React from "react"
const Component = () => {
  return (;
    <div>;
      <h1>Page Content</h1>;
      <p>This page is under construction.</p>;
    </div>;
  );
}
export default Component;
`;
// Basic API endpoint template;
const basicApiEndpoint = `import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  res.status(200).json({ message: "API endpoint working" });,
}
`;