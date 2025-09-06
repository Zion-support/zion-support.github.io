

export default function GovernanceTrustPage() {
  return (
    <>
      <Head>
        <title>Zion Governance & Trust</title>

      </Head>
      <div className="space-y-12">
        <section className="space-y-3">
          <h1 className="text-3xl font-bold">Governance & Public Trust</h1>

            {[{
              title: 'Cayman Foundation',
              desc: 'Globally recognized for crypto-native, non-profit style public-good coordination.'
            }, {
              title: 'Swiss Verein',
              desc: 'Member association model with global neutrality and flexible local chapters.'
            }, {
              title: 'US 501(c)(6)',
              desc: 'Business league for industry coordination and standards, disclosure-focused.'
            }, {
              title: 'DAO-native Wrapper',

              desc: 'LLC/wrapper (e.g., Otoco) for on-chain governance with minimized off-chain overhead.'
            }].map((opt) => (
              <div key={opt.title} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                <div className="font-medium">{opt.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{opt.desc}</div>

              </div>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>
        </section>

                risk registers, and post-mortems.
              </div>

            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="font-medium mb-1">Delegated Voting</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Nation/community DAOs receive delegated rights proportionally to stake and contribution, with slashing/recall for inactivity or misconduct.</div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="font-medium mb-1">Quarterly Reports</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Financials, grants, impact metrics, and execution status are published within 30 days of quarter-end.</div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="font-medium mb-1">Public Archives</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Charter versions, MOUs, audits, and on-chain dashboards are publicly accessible and time-stamped.</div>
            </div>
          </div>
        </section>
