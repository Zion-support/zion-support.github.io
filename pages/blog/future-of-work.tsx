
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
import Head from 'next/head';
import Link from 'next/link';
import React from 'react',;
export default function FutureOfWork() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import Head from 'next / head';
import Link from 'next / link';
import React from 'react',
export default /**
 * FutureOfWork - Function description
 */
function FutureOfWork() {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
    <>;
      <Head>;
        <title>;
                  This collaboration model has proven to be 40% more effective;
                  than either humans or AI working alone.;
                </p>;
              </section>;
                  These roles require a unique blend of technical skills and;
                  human understanding—qualities that are becoming increasingly;
                  valuable in the modern workplace.;
                </p>;
              </section>;
                  Our workplace design principles ensure that AI systems enhance;
                  rather than disrupt human workflows.;
                </p>;
              </section>;
                  <Link
                    href='/contact'
                    className='px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300'>;
                    Get Started;
                  </Link>;
                  <Link
                    href='/services'
                    Explore Solutions;
                  </Link>;
                </div>;
              </div>;
            </article>;
          </div>;
        </main>;
      </div>;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
