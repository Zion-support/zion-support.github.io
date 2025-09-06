

          </div>
        </div>
      </div>
    </Layout>
  )
}
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
export default function GitHubComplianceBotPage(req, res) {
  try {
  return (;
    <Layout>;
      <Head>;
        <title > GitHub Compliance Bot | Zion Tech Group</title>;
        <meta name="description" content="Automated GitHub compliance checks for SOC 2, ISO 27001, secrets scanning, and repo hygiene with reports and alerts." />;
        <link rel="canonical" href="https://ziontechgroup.com / github - compliance - bot" />;
      </Head>;

      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto space-y-6">;
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">GitHub Compliance Bot</h1>;
          <p className="text-slate-300">Automated repo checks for SOC 2/ISO controls, branch protections, CODEOWNERS, secrets scanning, licenses, and drift alerts.</p>;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            {[ 'Policy-as-code checksBranch protection enforcementSecrets scanning alertsWeekly report & scorecard' ].map((f) => (;
              <div key={f} className="p-4 rounded-xl bg-black/40 border border-emerald-500/30 text-slate-200">{f}</div>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
