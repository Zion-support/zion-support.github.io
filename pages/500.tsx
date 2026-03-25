export default function Custom500() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 32 }}>
      <div style={{ maxWidth: 720, textAlign: 'center' }}>
        <h1 style={{ fontSize: 28, fontWeight: 600, margin: 0 }}>Server error</h1>
        <p style={{ marginTop: 12, marginBottom: 0, opacity: 0.8 }}>
          We hit an unexpected problem. Please try again in a moment.
        </p>
      </div>
    </main>
  )
}

