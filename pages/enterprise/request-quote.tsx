=======
export default /**
 * RequestQuote - Function description
 */
function RequestQuote() {
  return (


      <p>Tell us about your team size, hiring needs, and timelines. Our team will reach out within 1 business day.</p>
      <form action="mailto:sales@zion.ai" method="post" encType="text/plain" style={{ display: 'grid', gap: 12, marginTop: 12 }}>
        <input name="company" placeholder="Company name" required />
        <input name="email" placeholder="Work email" type="email" required />
        <input name="team_size" placeholder="Team size (seats)" />
        <textarea name="notes" placeholder="Notes" rows={5} />
        <button type="submit" style={{ padding: '0.5rem 0.75rem' }}>Send</button>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

      </form>
    </main>
  )
<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
