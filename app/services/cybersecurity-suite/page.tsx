export const metadata = { 
  title: 'Cybersecurity Suite | Zion Tech Group',
  description: 'Comprehensive cybersecurity solutions including threat detection, vulnerability assessment, and 24/7 security monitoring to protect your business.'
};

export default function CybersecuritySuitePage() {
  return (
    <section>
      <h1 style={{fontSize: 26, fontWeight: 800}}>Cybersecurity Suite</h1>
      <p style={{marginTop: 8, color: '#374151'}}>Protect your business with enterprise-grade cybersecurity solutions that detect, prevent, and respond to threats in real-time.</p>

      <div style={{display: 'grid', gap: 12, marginTop: 16}}>
        <Item 
          title="Threat Detection & Response" 
          details={[
            "AI-powered threat detection with 99.9% accuracy",
            "Real-time security monitoring and alerting",
            "Automated incident response and containment",
            "Advanced persistent threat (APT) detection"
          ]} 
        />
          title="Vulnerability Management" 
            "Automated vulnerability scanning and assessment",
            "Penetration testing and security audits",
            "Patch management and security updates",
            "Compliance monitoring (SOC2, ISO27001, HIPAA)"
          title="Network Security" 
            "Next-generation firewall configuration and management",
            "Intrusion detection and prevention systems",
            "Secure remote access and VPN solutions",
            "Network segmentation and micro-segmentation"
          title="Security Operations Center (SOC)" 
            "24/7 security monitoring and analysis",
            "Security incident response and forensics",
            "Threat intelligence and threat hunting",
            "Security awareness training and phishing simulation"
      </div>

      <Pricing />

      <div style={{marginTop: 24, padding: 16, backgroundColor: '#fef2f2', borderRadius: 12, border: '1px solid #ef4444'}}>
        <h3 style={{fontWeight: 700, color: '#991b1b', marginBottom: 8}}>Security Guarantee</h3>
        <ul style={{color: '#991b1b', paddingLeft: 18}}>
          <li>• <strong>99.9% uptime</strong> security monitoring</li>
          <li>• <strong>15-minute</strong> average response time</li>
          <li>• <strong>Zero data breaches</strong> guarantee</li>
          <li>• <strong>24/7 expert</strong> security support</li>
        </ul>
    </section>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
    <div style={{border: '1px solid #e5e7eb', borderRadius: 12, padding: 16}}>
      <h3 style={{fontWeight: 700}}>{title}</h3>
      <ul style={{paddingLeft: 18, color: '#4b5563'}}>{details.map(d => (<li key={d} style={{listStyle: 'disc'}}>{d}</li>))}</ul>

function Pricing() {
    <div style={{marginTop: 20, display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
      <Plan 
        name="Essential Security" 
        price="$1,800/month" 
        features={[
          "Up to 50 endpoints", 
          "Basic threat detection", 
          "Vulnerability scanning", 
          "Email security",
          "Standard support"
        name="Advanced Security" 
        price="$4,200/month" 
          "Up to 200 endpoints", 
          "Advanced threat detection", 
          "Penetration testing", 
          "24/7 monitoring",
          "Priority support",
          "Compliance reporting"
        name="Enterprise Security" 
        price="$12,000/month" 
          "Unlimited endpoints", 
          "Full SOC services", 
          "Custom security solutions", 
          "Dedicated security team",
          "White-label options",
          "SLA guarantee"

function Plan({ name, price, features }: { name: string; price: string; features: string[] }) {
      <h4 style={{fontWeight: 700}}>{name}</h4>
      <div style={{color: '#111827', fontWeight: 800, marginTop: 4, fontSize: 18}}>{price}</div>
      <ul style={{paddingLeft: 18, color: '#4b5563', marginTop: 8}}>{features.map(f => (<li key={f} style={{listStyle: 'disc'}}>{f}</li>))}</ul>
      <a href="tel:+13024640950" style={{display: 'inline-block', marginTop: 12, padding: '8px 16px', backgroundColor: '#3b82f6', color: 'white', textDecoration: 'none', borderRadius: 6}}>Call +1 302 464 0950</a>