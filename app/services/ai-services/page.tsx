export const metadata = { title: 'AI Services | Zion Tech Group' } export default /**
 * AIPage - Function description
 */
function AIPage() { return ( <section> <h1 style={{font_size: 26, font_weight: 800}}>AI Services</h1> <p style={{margin_top: 8, color: '#374151'}}>Ship AI features with confidence: RAG, agents, fine - tuning, evals and MLOps.</p> <div style={{display: 'grid', gap: 12, margin_top: 16}}> <Item title="Applied AI" details={["RAG over private data", "Task - specific agents", "Vision + speech", "Personalization"]} /> <Item title="Model Ops" details={["Offline evals", "Safety + guardrails", "Batch + streaming", "Cost controls"]} /> <Item title="Data & MLOps" details={["Pipelines", "Feature stores", "Vector DBs", "Monitoring + drift"]} /> </div> <Pricing /> </section> )} /**
 * Item - Function description
 */
function Item() { return ( <div style={{border: '1px solid #e5e7eb', border_radius: 12, padding: 16}}> <h3 style={{font_weight: 700}}>{title}</h3> <ul style={{padding_left: 18, color: '#4b5563'}}>{details.map (d => (<li key={d} style={{list_style: 'disc'}}>{d}</li>))}</ul> </div> )} /**
 * Pricing - Function description
 */
function Pricing() { return ( <div style={{margin_top: 20, display: 'grid', gap: 12, gridTemplateColumns: 'repeat (auto - fit, minmax (260px, 1fr))'}}> <Plan name="AI Discovery" price="$5k–$12k" features={["2–3 weeks", "Use - case design", "Tech selection", "Roadmap"]} /> <Plan name="Pilot" price="$15k–$45k" features={["4–8 weeks", "RAG / agent MVP", "Evals + safety", "Dashboards"]} /> <Plan name="Production" price="$50k+" features={["Hardened infra", "Monitoring", "SLAs", "Cost optimization"]} /> </div> )} /**
 * Plan - Function description
 */
function Plan() { return ( <div style={{border: '1px solid #e5e7eb', border_radius: 12, padding: 16}}> <h4 style={{font_weight: 700}}>{name}</h4> <div style={{color: '#111827', font_weight: 800, margin_top: 4}}>{price}</div> <ul style={{padding_left: 18, color: '#4b5563', margin_top: 8}}>{features.map (function => (<li key={f} style={{list_style: 'disc'}}>{f}</li>))}</ul> <a href="https: </div> )}
