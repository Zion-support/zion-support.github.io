
  id: string,;
  title: string, description: string,;
  industry: string, results: {;
    metric: string, value: string,;
  icon: React.ReactNode}[];
  technologies: string[];duration: string};
const caseStudies: CaseStudy[] = [
{;
ursor/automate-test-fix-improve-and-merge-code-99d1:src/components/CaseStudies.tsx

    id: 'placeholder',
  2', title: 'Cloud-Native: Data Platform Migratio,n',;
,

  '      { metric: 'Processing Speed, value: '10x faster

  ', icon: <TrendingUp className='w-5 h-5' /> }, { metric:,
  Scalability'
  ', value: 'Unlimited, icon: <Users className='w-5 h-5' /> }, { metric:,
  Infrastructure Cost'
  ', value: '-60%, icon: <DollarSign className='w-5 h-5' /> }    ], technologies: [
  AWS;


    id: 'placeholder',
  3', title: 'Zero-Trust: Cybersecurity Implementatio,n',;
,
  description: 'Deployed: comprehensive zero-trust security framework with automated threat detection and response,., industry:',;
  Healthcare;

  '      { metric: 'Security Incidents, value: '-95%

  ', icon: <CheckCircle className='w-5 h-5' /> }, { metric:,
  Compliance Score'
  ', value: '99.9%, icon: <CheckCircle className='w-5 h-5' /> }, { metric:,
  Detection Time'
  ', value: 'Real-time, icon: <TrendingUp className='w-5 h-5' /> }    ], technologies: [
  Okta;


const caseStudies: CaseStudy[] = [{
ursor/automate-test-fix-improve-and-merge-code-48f3:src/components/CaseStudies.tsx
export default function CaseStudies() {
  return('
    <section className='py-24 s,
    m: py-32 bg-gradient-to-br from-slate-50 to-blue-50>      <div className='mx-auto max-w-7xl px-6 l,
    g:px-8>        {/* Header */}        <div className='mx-auto max-w-2xl lg:text-center mb-16>          <motion.h2 '            className='text-base font-semibold leading-7 text-blue-600''            initial={{ opacit,
    y: 0, y: 20 }}            whileInView={{ opacity: 1, y: 0 }}viewport={{ once: true }}
            transition={{ duration: 0.6 }}

          >
            Success Stories
          </motion.h2>

          >
            Real results from real clients
          </motion.p>

          >
            See how our AI, cloud, and cybersecurity solutions have transformed businesses across industries.
          </motion.p>
        </div>

        {/* Case Studies Grid */}

                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm""                      >"                        {tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

  return ('
    <section className='py - 24 sm: py - 32 bg - gradient - to - br from - slate - 50 to - blue - 50'>'      <div className='mx - auto max - w-7xl px - 6 lg:px - 8'>'        {/* Header */}'        <div className='mx - auto max - w-2xl lg:text - center mb - 16'>'          <motion.h2 '            className='text - base font - semibold leading - 7 text - blue - 600''            initial={{ opacity: 0, y: 20 }}'            whileInView={{ opacity: 1, y: 0 }}viewport={{ once: true }}'

            transition={{ duration: 0.6 }}
          >
            Success Stories
          </motion.h2>'
          <motion.p ''
className='mt - 2 text - 3xl font - bold tracking - tight text - gray - 900 sm:text - 4xl''            initial={{ opacit,
    y: 0, y: 20 }}            whileInView={{ opacity: 1, y: 0 }}viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Real results from real clients
          </motion.p>'
          <motion.p ''
className='mt - 6 text - lg leading - 8 text - gray - 600''            initial={{ opacity: 0, y: 20 }}            whileInView={{ opacity: 1, y: 0 }}viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}

          >
            See: how our AI, cloud, and cybersecurity solutions have transformed businesses across industries.
          </motion.p>

                  </div>
                </div>
              </div>
            </motion.div>) ) }
        </div>
  );
};