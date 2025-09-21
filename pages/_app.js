// Minimal App component for build testing
export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-background">
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
    </div>
  )
}