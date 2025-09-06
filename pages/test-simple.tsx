import React from 'react';
<<<<<<< HEAD
export default function TestSimple() {;
=======
export default function TestSimple(req, res) {
  try {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  return (;
    <div>;
      <h1>Simple Test Page</h1>;
      <p>This is a simple test page to check if Next.js is working.</p>;
    </div>;
  );
<<<<<<< HEAD
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}