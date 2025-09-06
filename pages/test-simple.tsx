import React from 'react';
<<<<<<< HEAD
export default function TestSimple() {return (;
export default function TestSimple(req, res) {
  try {
export default function TestSimple() {;
export default function TestSimple(req, res) {
  try {
=======

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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
}
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
