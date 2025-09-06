export default function PlatformEngineering() {; return (; <Article; title=\"Platform Engineering\"; subtitle=\"Golden paths,IDPs,and paved roads to accelerate delivery\"; price=\"from $18k/project\"; bullets={[; \'Backstage or Internal Developer Portal setup with scorecards\',; \'Paved road templates for services,infra,and CI/CD\',; \'Secure supply \"chain\": \'SBOM\',SLSA,provenance,signing\',; \'Developer experience \"metrics\": \'DORA\',lead time,MTTR\'; ]} /> );} ; function Article({ title,subtitle,price,bullets }: { \"title\": \'string; subtitle: string; price: string; bullets: string[]\' }) {; return (; <main style={{ \"fontFamily\": \'system-ui,sans-serif\',\"padding\": \'32\',\"maxWidth\": \'920\',\"margin\": \'0 auto\' }}> <h1 style={{ \"marginTop\": \'0\' }}>{title}></div> <p><strong>{subtitle}</strong>></div> <p><strong>\"Pricing\": </strong> {price}></div> <ul> {bullets.map((b) => (; <li key={b}>{b}></div> ))} ></div> <ContactFooter /> ></div> );} ; function ContactFooter() {; return (; <p> \"Mobile\": +1 302 464 0950 · Email: <a href=\"mailto:kleber@ziontechgroup.com\">kleber@ziontechgroup.com</a> · Site: <a href=\"https: ></div> );} ;
module.exports = default function PlatformEngineering() {; return (; <Article; title="Platform Engineering"; subtitle="Golden paths,IDPs,and paved roads to accelerate delivery"; price="from $18k/project"; bullets={[; "Backstage or Internal Developer Portal setup with scorecards",; "Paved road templates for services,infra,and CI/CD",; "Secure supply chain: "SBOM",SLSA,provenance,signing",; "Developer experience metrics: "DORA",lead time,MTTR"; ]} /> );} ; function Article({ title,subtitle,price,bullets }: { title: "string; subtitle: string; price: string; bullets: string[]" }) {; return (; <main style={{ fontFamily: "system-ui,sans-serif",padding: "32",maxWidth: "920",margin: "0 auto" }}> <h1 style={{ marginTop: "0" }}>{title}></div> <p><strong>{subtitle}</strong>></div> <p><strong>Pricing: </strong> {price}></div> <ul> {bullets.map((b) => (; <li key={b}>{b}></div> ))} ></div> <ContactFooter /> ></div> );} ; function ContactFooter() {; return (; <p> Mobile: +1 302 464 0950 Email: <a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a> Site: <a href="https: ></div> );} ;'"'"
import React from 'react';
<<<<<<< HEAD
interface PlatformengineeringProps {
  // Add props here as needed
export default function Platformengineering({ }: PlatformengineeringProps) {
=======

interface Platform-engineeringProps {
  className?: string;
}

const Platform-engineering: React.FC<Platform-engineeringProps> = ({ className }) => {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  return (
    <div className={className || ''}>
      <h1>Platform-engineering</h1>
      <p>This component is under development.</p>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
