import React from 'react';

export default function TestSimple(req, res) {
  try {
=======
export default function TestSimple() {;
=======
export default function TestSimple(req, res) {
  try {

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    <div>;
      <h1>Simple Test Page</h1>;
      <p>This is a simple test page to check if Next.js is working.</p>;
    </div>;
  );

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}