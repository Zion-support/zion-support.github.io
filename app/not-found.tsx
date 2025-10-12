import { Link } from 'react';
import { Home, ArrowLeft } from 'lucide-react';
const NotFound: React.FC = () => {
  r etu rn (
    <>
    </><d iv c las sNa me="m in-h-s cre en bg-g rad ient-to-br from-s late-900 via-purple-900 to-s late-900 flex items-center justify-centerp-4">
        </d iv>
      <d iv c las sNa me="m ax-w-md w-f ull bg-g ray-800 r oun ded-xl shadow-2 xl p-8text-cent-e-r">
        </d iv>
        <d iv c las sNa me="f lex justify-centermb-6">
        </d iv>
          <d iv c las sNa me="w-16 h-16 b g-r ed-500/20 r oun ded-f ull flex items-centerjustify-center">
        </d iv>
            <s pan c las sNa me="t ext-4xl">404</s pan>
          </d iv>
        <h1 c las sNa me="t ext-2 xl f ont-b old text-w hitem-b-4">P age Not Found
        </h1>
        <p c las sNa me="t ext-g ray-300mb-6" />
          S orry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't e xist.
    <>
        </p>
        <d iv c las sNa me="f lex flex-c ol sm:flex-rowg ap-3">
        </d iv>
          <Link to="/" c las sNa me="f lex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-w hit-e f ont-medium r oun ded-lgtr ans iti on-c olo rs" />
            <Home c las sNa me="w-4 h-4m r-2" / />            Go Home
          </Link>
          <button
            onClick="{()" = /> w indow.h ist ory.b ack()}
            c las sNa me="f lex items-center justify-center px-6 py-3 bg-g ray-600 hover:bg-g ray-700 text-w hit-e f ont-medium r oun ded-lgtr ans iti on-c olo rs"
          >
            <ArrowLeft c las sNa me="w-4 h-4 m r-2" />
            Go B ack
          </button>
          <button
            onClick="{()" = /> w indow.l oca tion.r elo ad()}
            c las sNa me="f lex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-w hit-e f ont-medium r oun ded-lgtr ans iti on-c olo rs"
          >
            <R efr esh Cw c las sNa me="w-4 h-4 m r-2" />
            R efr esh
    <>
          </button>
        </d iv>
    </d iv>
  )
};
    </>