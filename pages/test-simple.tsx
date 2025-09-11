import React from 'react';

export default /**
 * TestSimple - Function description
 */
function TestSimple() {
  return (

    <div>;
      <h1 > Simple Test Page</h1>;
      <p > This is a simple test page to check if Next.js is working.</p>;
    </div>);
}
=======

export default function TestSimple(req, res) {
  try {
=======
export default function TestSimple() {;
=======
export default function TestSimple(req, res) {
  try {

  return (;
    <div>;
      <h1>Simple Test Page</h1>;
      <p>This is a simple test page to check if Next.js is working.</p>;
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
