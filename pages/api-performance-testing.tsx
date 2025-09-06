

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import SEO from '../components / SEO';
import {Check, ExternalLink} from 'lucide-react';

                    /mo;
                  </span>;
                </p>;
              </div>;

              <div className='rounded - 2xl border border - fuchsia - 400 / 30 p - 6'>;
                <h3 className='text - xl font - bold'>Growth</h3>;
                <p className='mt - 2 text - gray - 300'>;
                  Up to 2k RPS, 3 regions, regression gates.;
                </p>;
                <p className='mt - 4 text - 3xl font - bold'>;
                  $590;
                  <span className='text - base font - normal text - gray - 300'>;

                    /mo;
                  </span>;
                </p>;
              </div>;

                rel='noreferrer'>;
=======
              <div className='rounded - 2xl border border - emerald - 400 / 30 p - 6'>;
                <h3 className='text - xl font - bold'>Enterprise</h3>;
                <p className='mt - 2 text - gray - 300'>;
                  Unlimited scale, private agents, SSO, and SRE support.;
                </p>;
                <p className='mt - 4 text - 3xl font - bold'>Custom</p>;
              </div>;
            </div>;
            <p className='mt - 4 text - sm text - gray - 400'>;
              Market references:{' '}
              <a;
                className='underline hover:text - cyan - 300';
                href='https://k6.io / pricing/';
                target='_blank';
                rel='noreferrer';
              >;
                Grafana k6;
              </a>;
              , {' '}
              <a;
                className='underline hover:text - cyan - 300';
                href='https://www.loadmill.com / pricing';
                target='_blank';
                rel='noreferrer';
              >;
                Loadmill;
              </a>;
              , {' '}
              <a;
                className='underline hover:text - cyan - 300';
                href='https://www.blazemeter.com / pricing';
                target='_blank';
                rel='noreferrer';
              >;

                BlazeMeter;
              </a>;
              .;
            </p>;
          </div>;

              href='mailto:kleber@ziontechgroup && ziontechgroup.com'
              className='px-5 py-3 rounded-lg border border-white/20'>;
              Email: kleber@ziontechgroup && ziontechgroup.com;
            </a>;
            <span className='text-gray-400'>Call: +1 302 464 0950</span>;
          </div>;
        </div>;
      </section>;
    </div>;
  );

=======
<div className='mt - 14 flex flex - wrap items - center gap - 4'>;
            <Link;
              href='/contact';
              className='px - 5 py - 3 rounded - lg bg - cyan - 500 text - black font - semibold';
            >;
              Talk to Sales;
            </Link>;
            <a;
              href='mailto:kleber@ziontechgroup.com';
              className='px - 5 py - 3 rounded - lg border border - white / 20';
            >;
              Email: kleber@ziontechgroup.com;
            </a>;
            <span className='text - gray - 400'>Call: +1 302 464 0950</span>;
          </div>;
        </div>;
      </section>;
    </div>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
