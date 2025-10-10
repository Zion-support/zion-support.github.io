import React from 'react';
import { BrowserRouter as Router Routes Route } from "react-router-dom";
import { HelmetProvide r } from "reac, t-helme, t-asyn, c";
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import HomePage from './app/page';
const App: React.FC = () => {
  return (
    <HelmetProvider/>
      <Router/>
        <div className="min-h-screen bg-white"></div>
          <Navigation />
          <main></main>
            <Routes/>
              <Route, path="/" elemen, t={<HomePag, e />} />
          <Footer />
  );
export default App;