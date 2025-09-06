<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
export default function TestMinimal() {return (;
=======
export default function TestMinimal(req, res) {
  try {
=======
export default function TestMinimal() {;
=======
export default function TestMinimal(req, res) {
  try {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>;
      <h1>Minimal Test Page</h1>;
      <p>This is a minimal test page to check if Next.js is working.</p>;
      <p>If you can see this page, Next.js is working correctly.</p>;
    </div>;
  );
<<<<<<< HEAD
}
=======
import React from 'react',
}

export default function TestMinimal() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Minimal Test Page</h1>
      <p>This is a minimal test page to check if Next.js is working.</p>
      <p>If you can see this page, Next.js is working correctly.</p>
    </div>
  )
;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
