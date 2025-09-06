import React from 'react';
<<<<<<< HEAD
export default function TestSimple() {return (;
=======
export default function TestSimple(req, res) {
  try {
  return (;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}