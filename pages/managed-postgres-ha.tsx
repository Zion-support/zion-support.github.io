

export default function ManagedPostgresHAPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/managed-postgres-ha'))
  if (!service) return null,

export default function ManagedPostgresHAPage() {
  const service = enhancedRealMicroSaasServices.find(s => s.link.endsWith('/managed-postgres-ha'))
  if (!service) return null,
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  return (
    <Layout>
      <Head>
        <title>{service.name} - Zion Tech Group</title>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        <link rel="canonical" href="https://ziontechgroup.com/managed-postgres-ha" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent flex items-center justify-center gap-3 w-10 h-10"><Database />{service.name}</h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service.tagline}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-emerald-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">What we manage</h2>
              <p className="text-slate-300 mb-6">{service.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.slice(0, 12).map((feat, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-200 w-5 h-5 text-emerald-400 mt-0.5"><Check /><span>{feat}</span></li>

=======

                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-emerald-500/30 p-6 h-fit">
              <div className="flex items-end justify-between mb-3">
                <div>
                  <div className="text-3xl font-bold text-white text-slate-400 text-base">{service.price}<span >{service.period}</span></div>
                  <div className="text-slate-400">{service.trialDays}-day free trial • Setup: {service.setupTime}</div>
                </div>
                <div className="flex items-center text-yellow-400 w-4 h-4 mr-1"><Star />{service.rating.toFixed(1)}</div>
              </div>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
