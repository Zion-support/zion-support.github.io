export default function RequestQuote() {
  return (
    <main style={{ padding: '3rem', maxWidth: 800, margin: '0 auto' }}>
      <h1>Request a Quote</h1>

      </form>
    </main>
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}