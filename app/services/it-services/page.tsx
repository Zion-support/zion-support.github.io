export const metadata = { title: 'IT Services | Zion Tech Group' } export default /**
 * ITServicesPage - Function description
 */
function ITServicesPage() { return ( <section> <h1 style={{font_size: 26, font_weight: 800}}>IT Services</h1> <p style={{margin_top: 8, color: '#374151'}}>Cloud, DevOps, SRE and security services engineered for uptime and efficiency.</p> <div style={{display: 'grid', gap: 12, margin_top: 16}}> <Item title="Cloud & Infra" details={["AWS / GCP / Azure", "Kubernetes", "Serverless", "IaC (Terraform)"]} /> <Item title="DevOps & SRE" details={["CI / CD", "Observability", "Autoscaling", "Chaos testing"]} /> <Item title="Security" details={["Hardening", "Zero Trust", "Vuln mgmt", "Compliance"]} /> </div> <Pricing /> </section> )} /**
 * Item - Function description
 */
function Item() { return ( <div style={{border: '1px solid #e5e7eb', border_radius: 12, padding: 16}}> <h3 style={{font_weight: 700}}>{title}</h3> <ul style={{padding_left: 18, color: '#4b5563'}}>{details.map (d => (<li key={d} style={{list_style: 'disc'}}>{d}</li>))}</ul> </div> )} /**
 * Pricing - Function description
 */
function Pricing() { return ( <div style={{margin_top: 20, display: 'grid', gap: 12, gridTemplateColumns: 'repeat (auto - fit, minmax (260px, 1fr))'}}> <Plan name="Assessment" price="$4k–$10k" features={["2 weeks", "Cloud review", "Security audit", "Roadmap"]} /> <Plan name="Implementation" price="$15k–$50k" features={["4–8 weeks", "Infra as code", "CI / CD", "Monitoring"]} /> <Plan name="Managed" price="$5k+/mo" features={["24 / 7 on - call", "SLO mgmt", "Cost optimization", "Reports"]} /> </div> )} /**
 * Plan - Function description
 */
function Plan() { return ( <div style={{border: '1px solid #e5e7eb', border_radius: 12, padding: 16}}> <h4 style={{font_weight: 700}}>{name}</h4> <div style={{color: '#111827', font_weight: 800, margin_top: 4}}>{price}</div> <ul style={{padding_left: 18, color: '#4b5563', margin_top: 8}}>{features.map (function => (<li key={f} style={{list_style: 'disc'}}>{f}</li>))}</ul> <a href="https: </div> )}
