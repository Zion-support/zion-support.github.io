export default function RequestQuote() {
  return (
    <main style={{ padding: '3rem', maxWidth: 800, margin: '0 auto' }}>
      <h1>Request a Quote</h1>
      <p>Tell us about your team size, hiring needs, and timelines. Our team will reach out within 1 business day.</p>
      <form action=&quot;mailto:sales@zion.ai&quot; method=&quot;post&quot; encType=&quot;text/plain&quot; style={{ display: 'grid', gap: 12, marginTop: 12 }}>
        <input name=&quot;company&quot; placeholder=&quot;Company name&quot; required />
        <input name=&quot;email&quot; placeholder=&quot;Work email&quot; type=&quot;email&quot; required />
        <input name=&quot;team_size&quot; placeholder=&quot;Team size (seats)&quot; />
        <textarea name=&quot;notes&quot; placeholder=&quot;Notes&quot; rows={5} />
        <button type=&quot;submit&quot; style={{ padding: '0.5rem 0.75rem' }}>Send</button>
      </form>
    </main>
  );
}