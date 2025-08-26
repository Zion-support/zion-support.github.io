export default function Pricing(){return (
<main style={{padding:20,fontFamily:'sans-serif',maxWidth:920,margin:'0 auto'}}>
  <h1 style={{fontSize:32,marginBottom:8}}>Pricing</h1>
  <p style={{color:'#374151',marginBottom:16}}>We price transparently based on scope and outcomes. Below are typical ranges.</p>

  <section style={{display:'grid',gap:16,gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))'}}>
    <article style={{border:'1px solid #E5E7EB',borderRadius:8,padding:16}}>
      <h2 style={{fontSize:20}}>Micro SaaS</h2>
      <p style={{marginTop:8,color:'#374151'}}>From <strong>$99–$999/mo</strong></p>
      <ul>
        <li>Includes onboarding, SSO, billing</li>
        <li>Feature requests prioritized by impact</li>
        <li>Support SLAs available</li>
      </ul>
    </article>
    <article style={{border:'1px solid #E5E7EB',borderRadius:8,padding:16}}>
      <h2 style={{fontSize:20}}>AI Services</h2>
      <p style={{marginTop:8,color:'#374151'}}>From <strong>$499–$4,999/mo</strong></p>
      <ul>
        <li>Agents, RAG, governance</li>
        <li>Managed run with guardrails</li>
        <li>Integrations with your stack</li>
      </ul>
    </article>
    <article style={{border:'1px solid #E5E7EB',borderRadius:8,padding:16}}>
      <h2 style={{fontSize:20}}>Enterprise IT</h2>
      <p style={{marginTop:8,color:'#374151'}}>From <strong>$2,000–$15,000/mo</strong></p>
      <ul>
        <li>Cloud, data, SRE, security</li>
        <li>SLIs/SLOs and on-call options</li>
        <li>Compliance and audits</li>
      </ul>
    </article>
  </section>

  <section style={{marginTop:24}}>
    <h2 style={{fontSize:22}}>Implementation projects</h2>
    <p style={{color:'#374151'}}>Typical one-time engagements range from <strong>$5,000–$50,000</strong> depending on complexity, integrations, and compliance requirements.</p>
  </section>

  <section style={{marginTop:24,background:'#F9FAFB',padding:16,borderRadius:8}}>
    <h2 style={{fontSize:20}}>Contact</h2>
    <p>Call <a href="tel:+13024640950" style={{textDecoration:'underline'}}>+1 302 464 0950</a> · Email <a href="mailto:kleber@ziontechgroup.com" style={{textDecoration:'underline'}}>kleber@ziontechgroup.com</a> · Visit <a href="https://ziontechgroup.com" style={{textDecoration:'underline'}}>ziontechgroup.com</a></p>
    <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
  </section>
</main>
)}