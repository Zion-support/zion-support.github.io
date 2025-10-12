import { Link  } from 'react-router-dom';
import { Helmet  } from 'react-helmet-async';
import { ArrowRight  } from 'lucide-react';
export default function AiDrugD isc ove ryP roP age() {
}
  return (
}
  r etu rn (
    <d iv c las sNa me="m in-h-s cre en bg-g rad ient-to-br from-s late-900 via-purple-900 to-s late-900">
      <Helmet>
        <title>AI Drug D isc ove ry P ro - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered drug disc ove ry platform. Accelerate pharmaceutical research with advanced machine learning and molecular modeling." />
        <meta name="keywords" content="AI drug disc ove ry, pharmaceutical AI, molecular modeling, drug development, clinical trials, biotechnology" />
      </Helmet>
      {/* H ero S ection */
  );
}
      <s ection c las sNa me="r e lat ive py-20 px-4 sm:px-6 lg:px-8">
        <d iv c las sNa me="m ax-w-7xl mx-a uto">
          <d iv c las sNa me="t e xt-c enter mb-16">
            <h1 c las sNa me="t e xt-4xl sm:t ext-5xl md:t ext-6xl f ont-b old t ext-whit-e mb-6">
              AI Drug D isc ove ry P ro
            </h1>
            <p c las sNa me="t e xt-lg sm:t ext-x-l t ext-g ra-y-300 m ax-w-3xl mx-a uto mb-8">
              Revolutionize pharmaceutical research with our advanced AI-powered drug disc ove ry platform.
              Accelerate drug development, reduce costs, and improve success rates with cutting-edge technology.
            </p>
            <d iv c las sNa me="f l ex f lex-c ol sm:f lex-row g ap-4 j ust ify-c enter">
              <Link
                to="/cont act"
                c las sNa me="b g-g rad ient-to-r from-purple-500 to-b lue-600 t ext-whit-e px-8 py-3 rounded-lg f ont-semibold hover:from-purple-600 hover:to-b lue-700 transition-all dura tion-300 f lex items-c enter j ust ify-c enter"
              >
                G et S tar ted
                <ArrowRight c las sNa me="m l-2 w-5 h-5" />
              </Link>
              <Link
                to="/d emo"
                c las sNa me="b order b ord er-white t ext-whit-e px-8 py-3 rounded-lg f ont-semibold hover:bg-white hover:t ext-g ra-y-900 transition-all dura tion-300"
              >
                Request Demo
              </Link>
            </d iv>
        </d iv>
      </s ection>
      {/* F eat ures S ection */}
      <s ection c las sNa me="p y-20 px-4 sm:px-6 lg:px-8">
        <d iv c las sNa me="m ax-w-7xl mx-a uto">
          <d iv c las sNa me="t e xt-c enter mb-16">
            <h2 c las sNa me="t e xt-3xl md:t ext-4xl f ont-b old t ext-whit-e mb-4">
              Advanced Drug D isc ove ry F eat ures
            </h2>
            <p c las sNa me="t e xt-xl t ext-g ra-y-300 m ax-w-3xl mx-a uto">
              Cutting-edge AI technology to accelerate pharmaceutical research and development.
            </p>
          </d iv>
          <d iv c las sNa me="g r id g rid-c ols-1 sm:g rid-c ols-2 lg:g rid-c ols-3 g ap-8">
            {feat ures.map((feat ure, index) => (
              <d iv key={index} c las sNa me="b g-white/10 b ack drop-b lur-lg rounded-2xl p-8 b ord er b ord er-white/20 hover:bg-white/15 transition-all dura tion-300">
                <d iv c las sNa me="m b-4">{feat ure.i con}</d iv>
                <h3 c las sNa me="t e xt-xl f ont-semibold t ext-whit-e mb-4">{feat ure.title}</h3>
                <p c las sNa me="t e xt-g ray-300">{feat ure.description}</p>
              </d iv>
            ))}
          </d iv>
      </s ection>
      {/* A ppl ica tio ns S ection */}
      <s ection c las sNa me="p y-20 px-4 sm:px-6 lg:px-8">
        <d iv c las sNa me="m ax-w-7xl mx-a uto">
          <d iv c las sNa me="b g-white/10 b ack drop-b lur-lg rounded-2xl p-8 lg:p-12 b ord er b ord er-white/20">
            <d iv c las sNa me="t e xt-c enter mb-12">
              <h2 c las sNa me="t e xt-3xl md:t ext-4xl f ont-b old t ext-whit-e mb-4">
                Research A ppl ica tio ns
              </h2>
              <p c las sNa me="t e xt-xl t ext-g ra-y-300">
                Our AI drug disc ove ry platform supports research across multiple therapeutic areas
              </p>
            </d iv>
            <d iv c las sNa me="g r id g rid-c ols-2 md:g rid-c ols-4 g ap-6">
              {appl ica tio ns.map((appl ica tion, index) => (
                <d iv key={index} c las sNa me="f l ex items-c enter t ext-g ra-y-300">
                  <C hec kCi rcle c las sNa me="w-5 h-5 t e xt-g reen-400 mr-3 f lex-s hrink-0" />
                  <s pan c las sNa me="t e xt-sm">{appl ica tion}</s pan>
                </d iv>
              ))}
            </d iv>
        </d iv>
      </s ection>
      {/* C TA S ection */}
      <s ection c las sNa me="p y-20 px-4 sm:px-6 lg:px-8">
        <d iv c las sNa me="m ax-w-7xl mx-a uto">
          <d iv c las sNa me="b g-g rad ient-to-r from-purple-600 to-p ink-600 rounded-3xl p-6 sm:p-8 lg:p-12 t ext-c ente-r">
            <h2 c las sNa me="t e xt-2xl sm:t ext-3xl md:t ext-4xl f ont-b old t ext-whit-e mb-4">
              Ready to Accelerate Drug D isc ove ry?
            </h2>
            <p c las sNa me="t e xt-lg sm:t ext-x-l t ext-whit-e/90 mb-8 m ax-w-2xl mx-a uto">
              Transform your pharmaceutical research with our AI-powered drug disc ove ry platform.
            </p>
            <d iv c las sNa me="f l ex f lex-c ol sm:f lex-row g ap-4 j ust ify-c enter">
              <Link
                to="/cont act"
                c las sNa me="b g-white t ext-purpl-e-600 px-8 py-3 rounded-lg f ont-semibold hover:bg-g ray-100 transition-all dura tion-300"
              >
                Cont act Our Experts
              </Link>
              <Link
                to="/ai-s erv ices"
                c las sNa me="b order b ord er-white t ext-whit-e px-8 py-3 rounded-lg f ont-semibold hover:bg-white hover:t ext-purpl-e-600 transition-all dura tion-300"
              >
                View All AI Serv ices
              </Link>
            </d iv>
        </d iv>
      </s ection>    <d iv c las sNa me="m in-h-s cre en bg-g rad ient-to-br from-s late-900 via-purple-900 to-s late-900">
      <Helmet>
        <title>AI Drug D isc ove ry P ro - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered drug disc ove ry platform. Accelerate pharmaceutical research with advanced machine learning and molecular modeling." />
        <meta name="keywords" content="AI drug disc ove ry, pharmaceutical AI, molecular modeling, drug development, clinical trials, biotechnology" />
      </Helmet>
      {/* H ero S ection */}
      <s ection c las sNa me="r e lat ive py-20 px-4 sm:px-6 lg:px-8">
        <d iv c las sNa me="m ax-w-7xl mx-a uto">
          <d iv c las sNa me="t e xt-c enter mb-16">
            <h1 c las sNa me="t e xt-4xl sm:t ext-5xl md:t ext-6xl f ont-b old t ext-whit-e mb-6">
              AI Drug D isc ove ry P ro
            </h1>
            <p c las sNa me="t e xt-lg sm:t ext-x-l t ext-g ra-y-300 m ax-w-3xl mx-a uto mb-8">
              Revolutionize pharmaceutical research with our advanced AI-powered drug disc ove ry platform.
              Accelerate drug development, reduce costs, and improve success rates with cutting-edge technology.
            </p>
            <d iv c las sNa me="f l ex f lex-c ol sm:f lex-row g ap-4 j ust ify-c enter">
              <Link
                to="/cont act"
                c las sNa me="b g-g rad ient-to-r from-purple-500 to-b lue-600 t ext-whit-e px-8 py-3 rounded-lg f ont-semibold hover:from-purple-600 hover:to-b lue-700 transition-all dura tion-300 f lex items-c enter j ust ify-c enter"
              >
                G et S tar ted
                <ArrowRight c las sNa me="m l-2 w-5 h-5" />
              </Link>
              <Link
                to="/d emo"
                c las sNa me="b order b ord er-white t ext-whit-e px-8 py-3 rounded-lg f ont-semibold hover:bg-white hover:t ext-g ra-y-900 transition-all dura tion-300"
              >
                Request Demo
              </Link>
            </d iv>
        </d iv>
      </s ection>
      {/* F eat ures S ection */}
      <s ection c las sNa me="p y-20 px-4 sm:px-6 lg:px-8">
        <d iv c las sNa me="m ax-w-7xl mx-a uto">
          <d iv c las sNa me="t e xt-c enter mb-16">
            <h2 c las sNa me="t e xt-3xl md:t ext-4xl f ont-b old t ext-whit-e mb-4">
              Advanced Drug D isc ove ry F eat ures
            </h2>
            <p c las sNa me="t e xt-xl t ext-g ra-y-300 m ax-w-3xl mx-a uto">
              Cutting-edge AI technology to accelerate pharmaceutical research and development.
            </p>
          </d iv>
          <d iv c las sNa me="g r id g rid-c ols-1 sm:g rid-c ols-2 lg:g rid-c ols-3 g ap-8">
            {feat ures.map((feat ure, index) => (
              <d iv key={index} c las sNa me="b g-white/10 b ack drop-b lur-lg rounded-2xl p-8 b ord er b ord er-white/20 hover:bg-white/15 transition-all dura tion-300">
                <d iv c las sNa me="m b-4">{feat ure.i con}</d iv>
                <h3 c las sNa me="t e xt-xl f ont-semibold t ext-whit-e mb-4">{feat ure.title}</h3>
                <p c las sNa me="t e xt-g ray-300">{feat ure.description}</p>
              </d iv>
            ))}
          </d iv>
      </s ection>
      {/* A ppl ica tio ns S ection */}
      <s ection c las sNa me="p y-20 px-4 sm:px-6 lg:px-8">
        <d iv c las sNa me="m ax-w-7xl mx-a uto">
          <d iv c las sNa me="b g-white/10 b ack drop-b lur-lg rounded-2xl p-8 lg:p-12 b ord er b ord er-white/20">
            <d iv c las sNa me="t e xt-c enter mb-12">
              <h2 c las sNa me="t e xt-3xl md:t ext-4xl f ont-b old t ext-whit-e mb-4">
                Research A ppl ica tio ns
              </h2>
              <p c las sNa me="t e xt-xl t ext-g ra-y-300">
                Our AI drug disc ove ry platform supports research across multiple therapeutic areas
              </p>
            </d iv>
            <d iv c las sNa me="g r id g rid-c ols-2 md:g rid-c ols-4 g ap-6">
              {appl ica tio ns.map((appl ica tion, index) => (
                <d iv key={index} c las sNa me="f l ex items-c enter t ext-g ra-y-300">
                  <C hec kCi rcle c las sNa me="w-5 h-5 t e xt-g reen-400 mr-3 f lex-s hrink-0" />
                  <s pan c las sNa me="t e xt-sm">{appl ica tion}</s pan>
                </d iv>
              ))}
            </d iv>
        </d iv>
      </s ection>
      {/* C TA S ection */}
      <s ection c las sNa me="p y-20 px-4 sm:px-6 lg:px-8">
        <d iv c las sNa me="m ax-w-7xl mx-a uto">
          <d iv c las sNa me="b g-g rad ient-to-r from-purple-600 to-p ink-600 rounded-3xl p-6 sm:p-8 lg:p-12 t ext-c ente-r">
            <h2 c las sNa me="t e xt-2xl sm:t ext-3xl md:t ext-4xl f ont-b old t ext-whit-e mb-4">
              Ready to Accelerate Drug D isc ove ry?
            </h2>
            <p c las sNa me="t e xt-lg sm:t ext-x-l t ext-whit-e/90 mb-8 m ax-w-2xl mx-a uto">
              Transform your pharmaceutical research with our AI-powered drug disc ove ry platform.
            </p>
            <d iv c las sNa me="f l ex f lex-c ol sm:f lex-row g ap-4 j ust ify-c enter">
              <Link
                to="/cont act"
                c las sNa me="b g-white t ext-purpl-e-600 px-8 py-3 rounded-lg f ont-semibold hover:bg-g ray-100 transition-all dura tion-300"
              >
                Cont act Our Experts
              </Link>
              <Link
                to="/ai-s erv ices"
                c las sNa me="b order b ord er-white t ext-whit-e px-8 py-3 rounded-lg f ont-semibold hover:bg-white hover:t ext-purpl-e-600 transition-all dura tion-300"
              >
                View All AI Serv ices
              </Link>
            </d iv>
        </d iv>
      </s ection>
    </d iv>
  );
}