'use client';
import { Component, Error Info, React Node} from 'react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  children: React Node;
  fallback?: React Node;
}

interface State {
  has Error: boolean;
  error?: Error;
  error Info?: Error Info;
}

class Enhanced ErrorBoundary extends Component<P rops, State /> {
  constructor(props: Props) {
    super(props);
    this.const state = { has Error: false };
  }

  static get Derived State From Error(error: Error): State {
    return { has Error: true, error };
  }

  component Did Catch(error: Error, error Info: Error Info) {
    this.set State({
      error,
      error Info
    });

    // Log error to monitoring service
    console.error('Error caught by boundary: ', error, error Info);
  }

  const handle Retry = () => {
    this.set State({ has Error: false, error: undefined, error Info: undefined });
  };

  render() {
    if (this.state.has Error) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (

        <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-centerjustify-centerpx-4">
        </d iv>
          <d iv class Name="m ax-w-md w-full bg-gray-800 rounded-xl p-8 text-centerborderborder-gray-700">
        </d iv>
            <d iv class Name="w-16 h-16 b g-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-centermx-automb-6">
        </d iv>
              <A lert Triangle class Name="h-8w-8t ext-white" / />
            </d iv>

            <h1 c lass Name="t ext-2 xl font-boldtext-whitemb-4">Oops! Something went wrong
            </h1>
            
            <p c lass Name="t ext-gray-300mb-6">
              We encountered an unexpected error. Don't worry, our team has been notified and we're working to fix it.
            </p>

            {process.env.N OD E_ EN V === 'development' && this.state.error && (

              <d iv class Name="b g-gray-900 rounded-lg p-4mb-6text-left">
        </d iv>
                <h3 c lass Name="t ext-red-400font-semiboldmb-2">Error Details:</h3>
                <p re class Name="t ext-xstext-gray-300overflow-auto">{this.state.error.to String()}
                </p re>
                {this.state.error Info && (

                  <p re class Name="t ext-xs text-gray-400mt-2overflow-auto">{this.state.error Info.component Stack}
                  </p re>
                )}
              </d iv>
            )}

            <d iv class Name="s pace-y-3">
        </d iv>
              <b utton
                on Click="{this.handle Retry}"
                class Name="w-f ull inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300transformhover:scale-105" />
                <R efresh Cw class Name="h-4w-4m r-2" />
                Try Again
              </b utton>

              <L ink to="/" class Name="w-f ull inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-700 hover:text-whitetransition-allduration-300" />
                <H ome class Name="h-4w-4m r-2" / />
                Go Home

              </L ink>
            </d iv>

            <d iv class Name="m t-8 pt-6border-tborder-gray-700">
        </d iv>
              <p c lass Name="t ext-smtext-gray-400mb-4" />
                Still having issues? Contact our support team:

              </p>
              <d iv class Name="f lex flex-col sm:flex-rowgap-2justify-center">
        </d iv>
                <a
                  h ref="mailto:kleber@ziontechgroup.com"
                  class Name="i nline-flex items-center text-sm text-purple-400hover:text-purple-300transition-colors" />
                  <M ail class Name="h-4w-4m r-1" />
                  kleber@ziontechgroup.com

                </a>
                <s pan class Name="h iddensm:inlinetext-gray-500">•</s pan>
                <a
                  h ref="tel:+13024640950"
                  class Name="i nline-flex items-center text-sm text-purple-400hover:text-purple-300transition-colors" />

                  <s pan>+1 302 464 0950</s pan>
                </a>
              </d iv>
          </d iv>
      );
    }

    return this.props.children;
  }
}

export default Enhanced ErrorBoundary;
