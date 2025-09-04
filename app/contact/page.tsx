export const metadata = { title: 'Contact | Zion Tech Group' };

export default function ContactPage() {
  return (
    <section>
      <h1 style={{fontSize: 26, fontWeight: 800}}>Contact</h1>
      <p style={{marginTop: 8, color: '#374151'}}>We reply within one business day.</p>
      <div style={{display: 'grid', gap: 12, marginTop: 16}}>
        <div style={{border: '1px solid #e5e7eb', borderRadius: 12, padding: 16}}>
          <div>Mobile: +1 302 464 0950</div>
          <div>Email: <a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></div>
          <div>Address: 364 E Main St STE 1008 Middletown DE 19709</div>
        </div>
        <a href="https://ziontechgroup.com" style={{display: 'inline-block', padding: '10px 14px', background: '#111827', color: '#fff', borderRadius: 8, width: 'fit-content'}}>Visit Main Site</a>
      </div>
    </section>
  );
}

