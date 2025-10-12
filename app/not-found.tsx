import { Link } from 'react';
import { Home, Arrow Left} from 'lucide-react';

const Not Found: React.F C = () => {
  return (

    <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-centerp-4">
        </d iv>
      <d iv class Name="m ax-w-md w-full bg-gray-800 rounded-xl shadow-2 xl p-8text-center">
        </d iv>
        <d iv class Name="f lex justify-centermb-6">
        </d iv>
          <d iv class Name="w-16 h-16 b g-red-500/20 rounded-full flex items-centerjustify-center">
        </d iv>
            <s pan class Name="t ext-4xl">404</s pan>
          </d iv>
        <h1 c lass Name="t ext-2 xl font-bold text-whitemb-4">Page Not Found
        </h1>
        <p c lass Name="t ext-gray-300mb-6" />
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.

        </p>
        <d iv class Name="f lex flex-col sm:flex-rowgap-3">
        </d iv>
          <L ink to="/" class Name="f lex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lgtransition-colors" />
            <H ome class Name="w-4 h-4m r-2" / />
            Go Home
          </L ink>
          <b utton
            on Click="{()" = /> window.history.back()}
            class Name="f lex items-center justify-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lgtransition-colors"
          >
            <A rrow Left class Name="w-4 h-4 m r-2" />
            Go Back
          </b utton>
          <b utton
            on Click="{()" = /> window.location.reload()}
            class Name="f lex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lgtransition-colors"
          >
            <R efresh Cw class Name="w-4 h-4 m r-2" />
            Refresh

          </b utton>
        </d iv>
    </d iv>
  )
};
