import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './src/ScrollToTop';
import Header from './src/Header';
import Footer from './src/Footer';
export default function App(): JSX.Element {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
