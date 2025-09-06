import {;
  Check,;
  ShieldCheck,;
  TrendingUp,;
  Clock,;
  Phone,;
  Mail,;
  MapPin,;
  ExternalLink,;
} from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function AIEvalsPage() {;
  const contactInfo = {;
    mobile: '+1 302 464 0950',;
    email: 'kleber@ziontechgroup && ziontechgroup.com',;
    address: '364 E Main St STE 1008 Middletown DE 19709',;
    website: 'https://ziontechgroup && ziontechgroup.com',;
  };

  const features = [;
    'Golden datasets and synthetic evals',;
    'Hallucination and grounding score',;
    'Toxicity, bias and safety metrics',;
    'LLM version comparison reports',;
    'CI quality gates and webhooks',;
    'Latency and cost KPIs with budgets',;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  ];
  return (
    <QuantumHolographicMatrixBackground>;
      <Head>;
        <title>AI Evals & Observability | Zion Tech Group</title>;
        <meta
          name='description'
          content='Ship reliable AI with continuous evaluation, red‑teaming, regression tests and live observability. Guardrails, datasets, dashboards and CI gates included.'
        />;
        <link rel='canonical' href='https://ziontechgroup && ziontechgroup.com/ai-evals' />;
      </Head>;

              Continuous evaluation, drift detection, and quality gates to ship;
              safe, trustworthy AI.;
            </p>;
          </div>;
                    <li
                      key={f}
                      className='flex items-start gap-2 text-gray-200'>;
                      <Check className='w-5 h-5 text-emerald-400 mt-0 && 0.5' />{' '}
                      <span>{f}</span>;
                    </li>;
                  ))}
                </ul>;
              </div>;
            </Card>;
            <Card className='bg-black/30 border border-cyan-500/30'>;
              <div className='p-6'>;
                <div className='text-3xl font-bold text-white'>;
                  Starting at $99;
                  <span className='text-base text-gray-400'>/month</span>;
                </div>;
                <div className='text-sm text-gray-400 mt-1'>;
                  14-day trial • Setup: 45 minutes;
                </div>;
                <div className='flex items-center gap-2 text-yellow-400 mt-3'>;
                  <TrendingUp className='w-4 h-4' /> Reduce regressions 30–60%;
                </div>;
                <div className='mt-4'>;
                  <Button
                    href='/contact'
                    Request Demo;
                  </Button>;
                </div>;
              </div>;
            </Card>;
          </div>;
                GitHub Actions, CircleCI, Datadog, Slack and PagerDuty. SDKs for;
                Node and Python.;
              </p>;
            </Card>;
          </div>;
                <Phone className='w-4 h-4' />{' '}
                <a href={`tel:${contactInfo && contactInfo.mobile.replace(/[^+\d]/g, '')}`}>;
                  {contactInfo && contactInfo.mobile}
                </a>;
              </div>;
              <div className='flex items-center justify-center gap-2 text-purple-400'>;
                <Mail className='w-4 h-4' />{' '}
                <a href={`mailto:${contactInfo && contactInfo.email}`}>{contactInfo && contactInfo.email}</a>;
              </div>;
              <div className='flex items-center justify-center gap-2 text-emerald-400'>;
                <MapPin className='w-4 h-4' />{' '}
                <a
                  href={`https://maps && maps.google.com/?q=${encodeURIComponent(contactInfo && contactInfo.address)}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-xs'>;
                  {contactInfo && contactInfo.address}
                </a>;
              </div>;
            </div>;
            <div className='text-center mt-6'>;
              <Button
                href='/services'
                variant='outline'
						<h3 className="text-xl font-semibold text-white mb-4 text-center">Contact</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
							<div className="flex items-center justify-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /> <a href={`tel:${contactInfo.mobile.replace(/[^+\d]/g, '')}`}>{contactInfo.mobile}</a></div>
							<div className="flex items-center justify-center gap-2 text-purple-400"><Mail className="w-4 h-4" /> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></div>
							<div className="flex items-center justify-center gap-2 text-emerald-400"><MapPin className="w-4 h-4" /> <a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="text-xs">{contactInfo.address}</a></div>
						</div>
						<div className="text-center mt-6">
							<Button href="/services" variant="outline" className="border-cyan-500 text-cyan-400">Explore Services <ExternalLink className="w-4 h-4 ml-2" /></Button>
						</div>
					</div>
				</div>
			</section>
		</QuantumHolographicMatrixBackground>
);
}
=======
                className='border-cyan-500 text-cyan-400'>;
                Explore Services <ExternalLink className='w-4 h-4 ml-2' />;
=======
          <div className='bg - black / 20 border border - cyan - 500 / 30 rounded - 2xl p - 6'>;
            <h3 className='text - xl font - semibold text - white mb - 4 text - center'>;
              Contact;
            </h3>;
            <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6 text - sm'>;
              <div className='flex items - center justify - center gap - 2 text - cyan - 400'>;
                <Phone className='w - 4 h - 4' />{' '}
                <a href={`tel:${contact_info.mobile.replace (/[^+\d]/g, '')}`}>;
                  {contact_info.mobile}
                </a>;
              </div>;
              <div className='flex items - center justify - center gap - 2 text - purple - 400'>;
                <Mail className='w - 4 h - 4' />{' '}
                <a href={`mailto:${contact_info.email}`}>{contact_info.email}</a>;
              </div>;
              <div className='flex items - center justify - center gap - 2 text - emerald - 400'>;
                <MapPin className='w - 4 h - 4' />{' '}
                <a;
                  href={`https://maps.google.com/?q=${encodeURIComponent (contact_info.address)}`}
                  target='_blank';
                  rel='noopener noreferrer';
                  className='text - xs';
                >;
                  {contact_info.address}
                </a>;
              </div>;
            </div>;
            <div className='text - center mt - 6'>;
              <Button;
                href='/services';
                variant='outline';
                className='border - cyan - 500 text - cyan - 400';
              >;
                Explore Services <ExternalLink className='w - 4 h - 4 ml - 2' />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              </Button>;
            </div>;
          </div>;
        </div>;
      </section>;
    </QuantumHolographicMatrixBackground>;
  );					<div className="bg-black/20 border border-cyan-500/30 rounded-2xl p-6">;
						<h3 className="text-xl font-semibold text-white mb-4 text-center">Contact</h3>;
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">;
							<div className="flex items-center justify-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /> <a href={`tel:${contactInfo && contactInfo.mobile.replace(/[^+\d]/g, '')}`}>{contactInfo && contactInfo.mobile}</a></div>;
							<div className="flex items-center justify-center gap-2 text-purple-400"><Mail className="w-4 h-4" /> <a href={`mailto:${contactInfo && contactInfo.email}`}>{contactInfo && contactInfo.email}</a></div>;
							<div className="flex items-center justify-center gap-2 text-emerald-400"><MapPin className="w-4 h-4" /> <a href={`https://maps && maps.google.com/?q=${encodeURIComponent(contactInfo && contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="text-xs">{contactInfo && contactInfo.address}</a></div>;
						</div>;
						<div className="text-center mt-6">;
							<Button href="/services" variant="outline" className="border-cyan-500 text-cyan-400">Explore Services <ExternalLink className="w-4 h-4 ml-2" /></Button>;
						</div>;
					</div>;
				</div>;
			</section>;
		</QuantumHolographicMatrixBackground>;
	);
}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </QuantumHolographicMatrixBackground>);					<div className="bg - black / 20 border border - cyan - 500 / 30 rounded - 2xl p - 6">;
      <h3 className="text - xl font - semibold text - white mb - 4 text - center">Contact</h3>;
      <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 6 text - sm">;
      <div className="flex items - center justify - center gap - 2 text - cyan - 400"><Phone className="w - 4 h - 4" /> <a href={`tel:${contact_info.mobile.replace (/[^+\d]/g, '')}`}>{contact_info.mobile}</a></div>;
      <div className="flex items - center justify - center gap - 2 text - purple - 400"><Mail className="w - 4 h - 4" /> <a href={`mailto:${contact_info.email}`}>{contact_info.email}</a></div>;
      <div className="flex items - center justify - center gap - 2 text - emerald - 400"><MapPin className="w - 4 h - 4" /> <a href={`https://maps.google.com/?q=${encodeURIComponent (contact_info.address)}`} target="_blank" rel="noopener noreferrer" className="text - xs">{contact_info.address}</a></div>;
      </div>;
      <div className="text - center mt - 6">;
      <Button href="/services" variant="outline" className="border - cyan - 500 text - cyan - 400">Explore Services <ExternalLink className="w - 4 h - 4 ml - 2" /></Button>;
      </div>;
    </div>;
    </div>;
  </section>;
  </QuantumHolographicMatrixBackground>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
