import "../app/globals.css";

export default function App({ Component, pageProps }: any) {
  return (
    <div className="min-h-screen bg-background">
      <Component {...pageProps} />
    </div>
  );
}