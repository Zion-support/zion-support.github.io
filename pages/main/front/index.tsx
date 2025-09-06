
import Head from 'next/head',

export default function FrontLanding() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      <Head>
        <title>Zion — Autonomous Cloud Automations</title>
        <meta name="description" content="Futuristic, cloud-native autonomous automations that innovate, optimize, and sync changes to the repo continuously." />
      </Head>

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
          <div className="twinkle-field absolute inset-0" />
        </div>
      </div>

          </div>
        </nav>
      </header>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}

            <motion.div
              initial={{ opacity: 0, y: 10 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              Autonomous agents running continuous improvements
            </motion.div>

              ].map(([k, v]) => (                <motion.div

                  key={k}
                  initial={{ opacity: 0, coordinate_y: 6 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}

            ].map(f => (              <motion.article

                key={f.title}
                initial={{ opacity: 0, coordinate_y: 8 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}

                key={c.title}
                initial={{ opacity: 0, coordinate_y: 8 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}

            ].map(b => (              <motion.div

                key={b}
                initial={{ opacity: 0, coordinate_y: 6 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}

            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}

          >
            <h3 className="text-2xl font-bold">Ready to build with autonomous cloud agents?</h3>
            <p className="mx-auto mt-2 max-w-2xl text-white/80">Scale development with a tireless fleet of self‑improving automations.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore more</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Link href="/services/ai-seo-auditor"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">AI SEO Auditor — automate SEO improvements</span></a></Link>
            <Link href="/services/customer-support-chatbot"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Customer Support Chatbot — reduce response time</span></a></Link>
            <Link href="/services/landing-page-generator"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Landing Page Generator — launch pages instantly</span></a></Link>
            <Link href="/services/price-intelligence-service"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Price Intelligence — market‑aware pricing</span></a></Link>
            <Link href="/automation"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Automation Status — live agents & reports</span></a></Link>
            <Link href="/newsroom"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Newsroom — latest autonomous updates</span></a></Link>
            <Link href="/site-health"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Site Health — audits & insights</span></a></Link>
            <Link href="/contact"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Contact — discuss your use‑case</span></a></Link>
          </div>
        </section>
      </main>
    </div>
  )
