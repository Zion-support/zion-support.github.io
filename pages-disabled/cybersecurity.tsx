
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

import React from 'react',;
import Head from 'next/head',;
import Layout from '../components/layout/Layout',;
import { Shield, CheckCircle, Lock, Activity } from 'lucide-react',;
;
import React from 'react',
import Head from 'next/head',
import Layout from '../components/layout/Layout',
import { Shield, CheckCircle, Lock, Activity } from 'lucide-react',
<<<<<<< HEAD
<<<<<<< HEAD
export default function CybersecurityPage() {
  const features = [
    'Zero Trust architectures and identity-first segmentationCloud posture hardening, secrets management, and key rotationThreat detection, incident response playbooks, and tabletop exercisesCompliance readiness: SOC 2, ISO 27001, HIPAA, GDPR'],
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
=======
export default function Cybersecurity() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  }
  const services = [
    {
      icon: Shield,
      title: 'Security Assessment & Auditing',
      description: 'Comprehensive security evaluations to identify vulnerabilities and compliance gaps.',
      features: ['Penetration testing', 'Vulnerability scanning', 'Compliance audits', 'Risk assessments']
    },
    {
      icon: Lock,
      title: 'Identity & Access Management',
      description: 'Robust IAM solutions to control user access and protect sensitive data.',
      features: ['Multi-factor authentication', 'Single sign-on', 'Role-based access', 'Privileged access management']
    },
    {
      icon: Eye,
      title: 'Security Monitoring & SIEM',
      description: '24/7 security monitoring with advanced threat detection and incident response.',
      features: ['Real-time monitoring', 'Threat intelligence', 'Incident response', 'Forensic analysis']
    },
    {
      icon: AlertTriangle,
      title: 'Threat Detection & Response',
      description: 'Advanced threat hunting and automated response to security incidents.',
      features: ['Behavioral analytics', 'AI-powered detection', 'Automated response', 'Threat hunting']
    },
    {
      icon: Users,
      title: 'Security Training & Awareness',
      description: 'Comprehensive security education programs to build a security-conscious culture.',
      features: ['Phishing simulations', 'Security workshops', 'Compliance training', 'Awareness campaigns']
    },
    {
      icon: Database,
      title: 'Data Protection & Encryption',
      description: 'End-to-end data protection with advanced encryption and backup solutions.',
      features: ['Data encryption', 'Backup solutions', 'Data loss prevention', 'Privacy compliance']
    }
  ];
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-a7a7
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


export default function CybersecurityPage() {
  const features = [
    'Zero Trust architectures and identity-first segmentationCloud posture hardening, secrets management, and key rotationThreat detection, incident response playbooks, and tabletop exercisesCompliance readiness: SOC 2, ISO 27001, HIPAA, GDPR'],
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const solutions = [
    { name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture' },
    { name: 'Domain & TLS Monitoring', href: '/domain-dns-monitor' },
    { name: 'Email Security (DMARC)', href: '/email-dmarc-analyzer' },
    { name: 'Vendor Risk Automation', href: '/vendor-risk-automation' }],
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <Layout>
      <Head>
        <title>Cybersecurity | Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Zero Trust designs, cloud posture hardening, incident response, and compliance readiness." />
        <link rel="canonical" href="https://ziontechgroup.com/cybersecurity" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
=======
<meta
          name='description'
          content='Zero Trust designs, cloud posture hardening, incident response, and compliance readiness.'
        />
        <link rel='canonical' href='https://ziontechgroup.com/cybersecurity' />
      </Head>
      <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto space-y-12'>
          <header className='text-center'>
            <div className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4'>
              <Shield className='w-8 h-8 text-white' />
            </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">Cybersecurity</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">From strategy to operations: identity, data, networks, and workloads secured by design.</p>
            <div className="mt-2 text-sm text-gray-400">New: VAPT and MDM offerings below.</div>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
            </div>
          </header>
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Key Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <span className="text-gray-200">{f}</span>
<<<<<<< HEAD

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Highlighted Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {solutions.map((s) => (
                <a key={s.name} href={s.href} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors">
                  <div className="text-gray-200 font-semibold mb-2">{s.name}</div>
                  <p className="text-gray-300 text-sm">Learn more</p>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
                </div>
=======
=======
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4'>
              Cybersecurity
            </h1>
            <p className='text-gray-300 text-lg max-w-3xl mx-auto'>
              From strategy to operations: identity, data, networks, and
              workloads secured by design.
            </p>
            <div className='mt-2 text-sm text-gray-400'>
              New: VAPT and MDM offerings below.
            </div>
            <div className='mt-6 flex flex-col sm:flex-row items-center justify-center gap-4'>
              <a href='/contact' className='px-8 py-4'>
                Security Assessment
              </a>
              <a href='/market-pricing' className='px-8 py-4'>
                See Market Pricing
              </a>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            </div>
          </header>
          <section>
<h2 className='text-3xl md:text-4xl font-bold text-white mb-6 text-center'>
              Key Capabilities
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {features.map(f => (
                <div
                  key={f}
                  className='flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60'
                >
                  <CheckCircle className='w-5 h-5 text-emerald-400 mt-0.5' />
                  <span className='text-gray-200'>{f}</span>
                </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
              <a href="/vulnerability-assessment-penetration-testing" className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover: border-cyan-500/40 transition-colors">
                <div className="text-gray-200 font-semibold mb-2">Vulnerability Assessment & Pentest (VAPT)</div>
                <p className="text-gray-300 text-sm">Learn more</p>
              </a>
              <a href="/mobile-device-management" className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors">
                <div className="text-gray-200 font-semibold mb-2">Mobile Device Management (MDM)</div>
                <p className="text-gray-300 text-sm">Learn more</p>
              </a>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
              <a href="/vulnerability-assessment-penetration-testing" className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover: border-cyan-500/40 transition-colors">
                <div className="text-gray-200 font-semibold mb-2">Vulnerability Assessment & Pentest (VAPT)</div>
                <p className="text-gray-300 text-sm">Learn more</p>
=======
              ))}
            </div>
          </section>
          <section>
<h2 className='text-3xl md:text-4xl font-bold text-white mb-6 text-center'>
              Highlighted Solutions
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
              {solutions.map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  className='p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors'
                >
                  <div className='text-gray-200 font-semibold mb-2'>
                    {s.name}
                  </div>
                  <p className='text-gray-300 text-sm'>Learn more</p>
                </a>
              ))}
              <a
                href='/vulnerability-assessment-penetration-testing'
                className='p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors'
              >
                <div className='text-gray-200 font-semibold mb-2'>
                  Vulnerability Assessment & Pentest (VAPT)
                </div>
                <p className='text-gray-300 text-sm'>Learn more</p>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
              </a>
              <a
                href='/mobile-device-management'
                className='p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors'
              >
                <div className='text-gray-200 font-semibold mb-2'>
                  Mobile Device Management (MDM)
                </div>
                <p className='text-gray-300 text-sm'>Learn more</p>
              </a>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            </div>
          </section>
        </div>
      </div>
    </Layout>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  )
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { Shield, CheckCircle, Lock, Activity } from 'lucide-react';
export default function CybersecurityPage(req, res) {
  try {

}

import React from 'react',
import Head from 'next / head',
import Layout from '../components / layout / Layout',
import { Shield, CheckCircle, Lock, Activity } from 'lucide-react',
;
export default /**
 * CybersecurityPage - Function description
 */
function CybersecurityPage() {
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const features = [;
    'Zero Trust architectures and identity - first segmentation_cloud posture hardening, secrets management, and key rotation_threat detection, incident response playbooks, and tabletop exercises_compliance readiness: SOC 2, ISO 27001, HIPAA, GDPR'],
  const solutions = [;
    { name: 'Zero Trust Architecture', href: '/zero - trust - network - architecture' },
    { name: 'Domain & TLS Monitoring', href: '/domain - dns - monitor' },
    { name: 'Email Security (DMARC)', href: '/email - dmarc - analyzer' },
    { name: 'Vendor Risk Automation', href: '/vendor - risk - automation' }],
  return (
    <Layout>;
      <Head>;
        <title > Cybersecurity | Zion Tech Group</title>;
        <meta name="description" content="Zero Trust designs, cloud posture hardening, incident response, and compliance readiness." />;
        <link rel="canonical" href="https://ziontechgroup.com / cybersecurity" />;
      </Head>;
      <div className="min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8">;
        <div className="max - w-7xl mx - auto space - y-12">;
          <header className="text - center">;
            <div className="inline - flex items - center justify - center w - 16 h - 16 rounded - 2xl bg - gradient - to - r from - cyan - 500 to - purple - 600 mb - 4">;
              <Shield className="w - 8 h - 8 text - white" />;
            </div>;
            <h1 className="text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent mb - 4">Cybersecurity</h1>;
            <p className="text - gray - 300 text - lg max - w-3xl mx - auto">From strategy to operations: identity, data, networks, and workloads secured by design.</p>;
            <div className="mt - 2 text - sm text - gray - 400">New: VAPT and MDM offerings below.</div>;
            <div className="mt - 6 flex flex - col sm:flex - row items - center justify - center gap - 4">;
              <a href="/contact" className="px - 8 py - 4">Security Assessment</a>;
              <a href="/market - pricing" className="px - 8 py - 4">See Market Pricing</a>;
            </div>;
          </header>;
          <section>;
            <h2 className="text - 3xl md:text - 4xl font - bold text - white mb - 6 text - center">Key Capabilities</h2>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
              {features.map ((f) => (
                <div key={f} className="flex items - start gap - 3 p - 4 rounded - xl bg - black / 40 border border - gray - 700 / 60">;
                  <CheckCircle className="w - 5 h - 5 text - emerald - 400 mt - 0.5" />;
                  <span className="text - gray - 200">{f}</span>;
                </div>))}
            </div>;
          </section>;
          <section>;
            <h2 className="text - 3xl md:text - 4xl font - bold text - white mb - 6 text - center">Highlighted Solutions</h2>;
            <div className="grid grid - cols - 1 md:grid - cols - 4 gap - 6">;
              {solutions.map ((s) => (
                <a key={s.name} href={s.href} className="p - 6 rounded - 2xl bg - black / 40 border border - gray - 700 / 60 hover:border - cyan - 500 / 40 transition - colors">;
                  <div className="text - gray - 200 font - semibold mb - 2">{s.name}</div>;
                  <p className="text - gray - 300 text - sm">Learn more</p>;
                </a>))}
              <a href="/vulnerability - assessment - penetration - testing" className="p - 6 rounded - 2xl bg - black / 40 border border - gray - 700 / 60 hover: border - cyan - 500 / 40 transition - colors">;
                <div className="text - gray - 200 font - semibold mb - 2">Vulnerability Assessment & Pentest (VAPT)</div>;
                <p className="text - gray - 300 text - sm">Learn more</p>;
              </a>;
              <a href="/mobile - device - management" className="p - 6 rounded - 2xl bg - black / 40 border border - gray - 700 / 60 hover:border - cyan - 500 / 40 transition - colors">;
                <div className="text - gray - 200 font - semibold mb - 2">Mobile Device Management (MDM)</div>;
                <p className="text - gray - 300 text - sm">Learn more</p>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              </a>;
            </div>;
          </section>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
      </div>;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======


=======
);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
