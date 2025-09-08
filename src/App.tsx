import React from 'react';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div style={{ padding: 24 }}>
        <h1>Zion App</h1>
        <p>Build placeholder rendered successfully.</p>
      </div>
    </ThemeProvider>
  );
};

export default App;