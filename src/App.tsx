import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddedServicesDirectory from './pages/AddedServicesDirectory';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<AddedServicesDirectory />} />
      <Route path="/services" element={<AddedServicesDirectory />} />
      <Route path="/services/added" element={<AddedServicesDirectory />} />
      <Route path="*" element={<AddedServicesDirectory />} />
    </Routes>
  );
}

