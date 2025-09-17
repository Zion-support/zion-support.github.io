import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const Home = React.lazy(() => import('./pages/HomePage'));

const baseRoutes = [
  { path: '/', element: <Home /> },
];

export default function App(): React.JSX.Element {
  return (
    <WhitelabelProvider>
      <ThemeProvider defaultTheme="dark">
        <Header />
        <main className="min-h-screen">
          <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
            <Routes>
              {baseRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </ThemeProvider>
    </WhitelabelProvider>
  );
}