export default function RequestQuote() {
  return (
    <main style={{ padding: '3rem', maxWidth: 800, margin: '0 auto' }}>
      <h1>Request a Quote</h1>
<<<<<<< HEAD
<<<<<<< HEAD
      <p>
        Tell us about your team size, hiring needs, and timelines. Our team will
        reach out within 1 business day.
      </p>
      <form
        action='mailto:sales@zion.ai'
        method='post'
        encType='text/plain'
        style={{ display: 'grid', gap: 12, marginTop: 12 }}
      >
        <input name='company' placeholder='Company name' required />
        <input name='email' placeholder='Work email' type='email' required />
        <input name='team_size' placeholder='Team size (seats)' />
        <textarea name='notes' placeholder='Notes' rows={5} />
        <button type='submit' style={{ padding: '0.5rem 0.75rem' }}>
          Send
        </button>
      </form>
    </main>
  );
=======
      <p>Tell us about your team size, hiring needs, and timelines. Our team will reach out within 1 business day.</p>
      <form action="mailto:sales@zion.ai" method="post" encType="text/plain" style={{ display: 'grid', gap: 12, marginTop: 12 }}>
        <input name="company" placeholder="Company name" required />
        <input name="email" placeholder="Work email" type="email" required />
        <input name="team_size" placeholder="Team size (seats)" />
        <textarea name="notes" placeholder="Notes" rows={5} />
        <button type="submit" style={{ padding: '0.5rem 0.75rem' }}>Send</button>
      </form>
    </main>
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <p>Tell us about your team size, hiring needs, and timelines. Our team will reach out within 1 business day.</p>
      <form action="mailto:sales@zion.ai" method="post" encType="text/plain" style={{ display: 'grid', gap: 12, marginTop: 12 }}>
        <input name="company" placeholder="Company name" required />
        <input name="email" placeholder="Work email" type="email" required />
        <input name="team_size" placeholder="Team size (seats)" />
        <textarea name="notes" placeholder="Notes" rows={5} />
        <button type="submit" style={{ padding: '0.5rem 0.75rem' }}>Send</button>
      </form>
    </main>
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
