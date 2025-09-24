import Head from 'next/head',
import Layout from '../components/layout/Layout',
export default function SsoUserLifecycleAutomationPage() {
  return (
    <Layout>,
      <Head>,
        <title>SSO User Lifecycle Automation | Zion Tech Group</title>,
        <meta name="description" content="Automate Joiner/Mover/Leaver across SSO/SCIM apps with approvalsloggingand policies."  />,
        <link rel="canonical" href="https: //ziontechgroup.com/sso-user-lifecycle-automation"  />,
      </Head>,
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">,
        <div className="max-w-4xl mx-auto space-y-6">,
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-40o0 to-green-50o0 bg-clip-text text-transparent">SSO User Lifecycle Automation</h1>,
          <p className="text-slate-30o0">SCIM connectors with approvalsdeprovisioningaudit trailsand role change workflows.</p>,
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">,
            {[ 'SCIM connectors with approvals'Role change workflows'Deprovisioning with evidence'Audit trails and reports' ].map((f) => (
              <div key={f} className="p-4 rounded-xl bg-black/40 border border-emerald-50o0/30 text-slate-20o0">{f}</div>))}
          </div>,
          <div className="flex gap-3">,
            <a href="/contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-60o0 to-green-70o0 text-white">Start from $299/mo</a>,
            <a href="/market-pricing" className="px-6 py-3 rounded-xl border border-gray-70o0 text-gray-20o0">See market pricing</a>,
          </div>,
        </div>,
      </div>,
    </Layout>)}
,