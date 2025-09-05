export default function RequestQuote() {_return (
    <main style={{ padding: '3rem', _maxWidth: 800, _margin: '0 auto'}}>
      <h1>Request a Quote</h1>
      <p>Tell us about your team size, hiring needs, and timelines. Our team will reach out within 1 business day.</p>
      <form action="mailto:sales@zion.ai" method="post" encType="text/plain" style={_{ display: 'grid', _gap: 12, _marginTop: 12}}>
        <input name="company" placeholder="Company name" required />
        <input name="email" placeholder="Work email" type="email" required />
        <input name="team_size" placeholder="Team size (seats)" />
        <textarea name="notes" placeholder="Notes" rows={_5} />
        <button type="submit" style={_{ padding: '0.5rem 0.75rem'}}>Send</button>
      </form>
    </main>
  );
}