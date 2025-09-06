import React, { JSX } from 'react';
import React, { JSX } from 'react';
export default function App(): JSX.Element {
  return (
    <main>
      <h1>Hello App</h1>
    </main>
  )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
