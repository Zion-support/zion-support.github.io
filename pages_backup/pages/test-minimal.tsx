import React from 'react';







export default function TestMinimal(req, res) {
  try {



  return (;

    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>;
      <h1>Minimal Test Page</h1>;
      <p>This is a minimal test page to check if Next.js is working.</p>;
      <p>If you can see this page, Next.js is working correctly.</p>;
    </div>;
  );

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }



}


}






