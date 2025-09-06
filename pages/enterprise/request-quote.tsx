<<<<<<< HEAD
export default /**
 * RequestQuote - Function description
 */
function RequestQuote() {
  return (
}
    <main style={{ padding: '3rem', max_width: 800, margin: '0 auto' }}>;
      <h1 > Request a Quote</h1>;
      <p > Tell us about your team size, hiring needs, and timelines. Our team will reach out within 1 business day.</p>;
      <form action=&quot;mailto:sales@zion.ai & quot; method=&quot;post & quot; enc_type=&quot;text / plain & quot; style={{ display: 'grid', gap: 12, margin_top: 12 }}>;
        <input name=&quot;company & quot; placeholder=&quot;Company name & quot; required />;
        <input name=&quot;email & quot; placeholder=&quot;Work email & quot; type=&quot;email & quot; required />;
        <input name=&quot;team_size & quot; placeholder=&quot;Team size (seats)&quot; />;
        <textarea name=&quot;notes & quot; placeholder=&quot;Notes & quot; rows={5} />;
        <button type=&quot;submit & quot; style={{ padding: '0.5rem 0.75rem' }}>Send</button>;
      </form>;
    </main>);
=======
export default function RequestQuote() {
  return (
    <main style={{ padding: '3rem', maxWidth: 800, margin: '0 auto' }}>
      <h1>Request a Quote</h1>
<<<<<<< HEAD
      <p>Tell us about your team size, hiring needs, and timelines. Our team will reach out within 1 business day.</p>;
      <form action=&quot;mailto:sales@zion.ai&quot; method=&quot;post&quot; encType=&quot;text/plain&quot; style={{ display: 'grid', gap: 12, marginTop: 12 }}>
        <input name=&quot;company&quot; placeholder=&quot;Company name&quot; required />
        <input name=&quot;email&quot; placeholder=&quot;Work email&quot; type=&quot;email&quot; required />
        <input name=&quot;team_size&quot; placeholder=&quot;Team size (seats)&quot; />
        <textarea name=&quot;notes&quot; placeholder=&quot;Notes&quot; rows={5} />
        <button type=&quot;submit&quot; style={{ padding: '0.5rem 0.75rem' }}>Send</button>
=======
      <p>Tell us about your team size, hiring needs, and timelines. Our team will reach out within 1 business day.</p>
      <form action="mailto:sales@zion.ai" method="post" encType="text/plain" style={{ display: 'grid', gap: 12, marginTop: 12 }}>
        <input name="company" placeholder="Company name" required />
        <input name="email" placeholder="Work email" type="email" required />
        <input name="team_size" placeholder="Team size (seats)" />
        <textarea name="notes" placeholder="Notes" rows={5} />
        <button type="submit" style={{ padding: '0.5rem 0.75rem' }}>Send</button>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      </form>
    </main>
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}