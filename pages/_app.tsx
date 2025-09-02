import React, { useEffect } from 'react';
export default function App({ Component, pageProps }) {
<<<<<<< HEAD
  return (
    <div className="min-h-screen flex flex-col">
      <PerformanceMonitor />
      <Header />
      <main className="flex-grow pt-16">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
=======
  return <Component {...pageProps} />;
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
}
