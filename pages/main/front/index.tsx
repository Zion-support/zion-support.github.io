
import Head from 'next/head',
import Link from 'next/link';
import { motion } from 'framer-motion';
export default function FrontLanding() {
  return (
    <div className;
              { title: 'Content & SEO', desc: 'Curates content, updates promotions, and tunes metadata for reach.' }].map((c) => (
              <motion.article

                key={c.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl'
              >
                <div className='absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-cyan-400/10 blur-2xl' />
                <h3 className='text-lg font-semibold'>{c.title}</h3>
                <p className='mt-1 text-sm text-white/75'>{c.desc}</p>              </motion.article>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className='mx-auto max-w-7xl px-6 pb-20'>
          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'>
            Benefits
          </h2>
          <div className='mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-3 md:grid-cols-2'>
            {[
              '24/7 progress without human intervention',
              'Rapid feedback loop with safe, incremental edits',
              'Continuous delivery directly to main branch',
              'Fewer regressions via layered checks and reports',
            ].map(b => (              <motion.div
                key={b}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className='flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md'
              >
                <span className='mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]' />
                <span className='text-sm text-white/80'>{b}</span>              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className='mx-auto max-w-7xl px-6 pb-24'>          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='animated-border relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20 p-8 text-center backdrop-blur-xl'
          >
            <h3 className='text-2xl font-bold'>
              Ready to build with autonomous cloud agents?
            </h3>
            <p className='mx-auto mt-2 max-w-2xl text-white/80'>
              Scale development with a tireless fleet of self‑improving
              automations.
            </p>
            <div className='mt-6 flex flex-wrap justify-center gap-3'>
              <Link href='/services'>
                <a className='rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white'>
                  Get Started
                </a>
              </Link>
              <Link href='/automation'>
                <a className='rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10'>
                  View Automations
                </a>
              </Link>            </div>
          </motion.div>
        </section>

        {/* Explore more */}
        <section className='mx-auto max-w-7xl px-6 pb-16'>
          <h2 className='text-center text-2xl font-bold tracking-wide text-white/90'>
            Explore more
          </h2>
          <div className='mt-6 grid grid-cols-1 gap-4 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <Link href='/services/ai-seo-auditor'>
              <a className='bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10'>
                <span className='text-white/90'>
                  AI SEO Auditor — automate SEO improvements
                </span>
              </a>
            </Link>
            <Link href='/services/customer-support-chatbot'>
              <a className='bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10'>
                <span className='text-white/90'>
                  Customer Support Chatbot — reduce response time
                </span>
              </a>
            </Link>
            <Link href='/services/landing-page-generator'>
              <a className='bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10'>
                <span className='text-white/90'>
                  Landing Page Generator — launch pages instantly
                </span>
              </a>
            </Link>
            <Link href='/services/price-intelligence-service'>
              <a className='bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10'>
                <span className='text-white/90'>
                  Price Intelligence — market‑aware pricing
                </span>
              </a>
            </Link>
            <Link href='/automation'>
              <a className='bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10'>
                <span className='text-white/90'>
                  Automation Status — live agents & reports
                </span>
              </a>
            </Link>
            <Link href='/newsroom'>
              <a className='bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10'>
                <span className='text-white/90'>
                  Newsroom — latest autonomous updates
                </span>
              </a>
            </Link>
            <Link href='/site-health'>
              <a className='bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10'>
                <span className='text-white/90'>
                  Site Health — audits & insights
                </span>
              </a>
            </Link>
            <Link href='/contact'>
              <a className='bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10'>
                <span className='text-white/90'>
                  Contact — discuss your use‑case
                </span>
              </a>
            </Link>          </div>
        </section>
      </main>
    </div>
  );
