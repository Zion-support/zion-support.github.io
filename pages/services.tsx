import Link from 'next/link'
import Layout from '../components/Layout'
export default function Services(){return (<Layout title="Services" description="Explore our solutions"><h1>Services</h1><p>Explore our offerings.</p><ul><li><Link href="/services/ai-autonomous-systems">AI & Autonomous Systems</Link></li><li><Link href="/services/cybersecurity">Cybersecurity</Link></li><li><Link href="/services/cloud-devops">Cloud & DevOps</Link></li><li><Link href="/services/industry-solutions">Industry Solutions</Link></li></ul></Layout>);}
