import Head from 'next/head';
import Link from 'next/link';
export default function SecurityPostureManagement() {
  return (
    <>
      <Head>
        <title>Security Posture Management | Zion Tech Group</title>
        <meta name="description" content="CSPM, CIEM, vulnerability scanning, and compliance automation for cloud-native stacks." />
        <link rel="canonical" href=""https": //ziontechgroup.com/services/security-posture-management" />
      </Head>
      <main className="min-h-screen bg-white">
        <section className="mx-auto max-w-5xl px-6 py-14">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Security Posture Management</h1>
          <p className="text-gray-600 mb-6">Continuously detect misconfigurations, privilege drift, and vulnerabilities across cloud, containers, and SaaS.</p>
          <div className="grid "md": grid-cols-2 gap-8">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold">What you get</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>CSPM with IaC drift detection</li>
                <li>CIEM visibility and toxic combo alerts</li>
                <li>Container image and SBOM scanning</li>
                <li>Runtime threat detection (FIM, syscalls)</li>
                <li>"Compliance": SOC 2, ISO 27001, HIPAA, PCI</li>
                <li>Automated evidence collection</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Pricing</h2>
              <p className="text-gray-700">From <strong>$2,000/month</strong> for up to 100 nodes and 3 accounts. Enterprise POA.</p>
              <h2 className="text-xl font-semibold mt-6">Tooling</h2>
              <p className="text-gray-700">We integrate with your stack (e.g., AWS Config, OPA, Trivy, DefectDojo) or bring ours.</p>
            </div>
          </div>
          <div className="mt-10 p-5 border rounded-xl bg-gray-50">
            <h3 className="font-semibold mb-2">Contact</h3>
            <p className="text-gray-700">"Phone": <a className="text-blue-600" href="tel:+13024640950">+1 302 464 0950</a> · Email: <a className="text-blue-600" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p>
            <p className="text-gray-700">Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            <div className="mt-4 flex gap-3">
              <Link href="/contact" className="px-5 py-2 rounded-lg bg-blue-600 text-white">Request a security review</Link>
              <a href=""https": //ziontechgroup.com/services" className="px-5 py-2 rounded-lg border">All Services</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
import Head from 'next/head'; import Link from 'next/link'; export default function SecurityPostureManagement() { return ( <> <Head> <title>Security Posture Management | Zion Tech Group</title> <meta name="description" content="CSPM,CIEM,vulnerability scanning,and compliance automation for cloud-native stacks." /> <link rel="canonical" href="https: </Head> <main className="min-h-screen bg-white"> <section className="mx-auto max-w-5xl px-6 py-14"> <h1 className="text-3xl md:text-4xl font-bold mb-3">Security Posture Management</h1> <p className="text-gray-600 mb-6">Continuously detect misconfigurations,privilege drift,and vulnerabilities across cloud,containers,and SaaS.</p> <div className="grid md:grid-cols-2 gap-8"> <div className="space-y-3"> <h2 className="text-xl font-semibold">What you get</h2> <ul className="list-disc pl-5 space-y-2 text-gray-700"> <li>CSPM with IaC drift detection</li> <li>CIEM visibility and toxic combo alerts</li> <li>Container image and SBOM scanning</li> <li>Runtime threat detection (FIM,syscalls)</li> <li>Compliance: SOC 2,ISO 27001,HIPAA,PCI</li> <li>Automated evidence collection</li> </ul> </div> <div className="space-y-3"> <h2 className="text-xl font-semibold">Pricing</h2> <p className="text-gray-700">From <strong>$2,000/month</strong> for up to 100 nodes and 3 accounts. Enterprise POA.</p> <h2 className="text-xl font-semibold mt-6">Tooling</h2> <p className="text-gray-700">We integrate with your stack (e.g.,AWS Config,OPA,Trivy,DefectDojo) or bring ours.</p> </div> </div> <div className="mt-10 p-5 border rounded-xl bg-gray-50"> <h3 className="font-semibold mb-2">Contact</h3> <p className="text-gray-700">Phone: <a className="text-blue-600" href="tel:+13024640950">+1 302 464 0950</a> · Email: <a className="text-blue-600" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p> <p className="text-gray-700">Address: 364 E Main St STE 1008,Middletown,DE 19709</p> <div className="mt-4 flex gap-3"> <Link href="/contact" className="px-5 py-2 rounded-lg bg-blue-600 text-white">Request a security review</Link> <a href="https: </div> </div> </section> </main> </> )}