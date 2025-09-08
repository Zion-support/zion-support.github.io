import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const Home = () => <div style={{ padding: 24 }}>Zion App</div>;

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}