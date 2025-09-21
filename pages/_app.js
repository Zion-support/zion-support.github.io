// Minimal App component for working build
export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Component {...pageProps} />
    </div>
  )
}