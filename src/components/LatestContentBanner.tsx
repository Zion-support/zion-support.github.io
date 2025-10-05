<<<<<<< HEAD
import React from 'rea c t';
impo r t { Li n k } fr o m 'rea c t-rout e r-d o m';
interface LatestContentBannerProp s { 
  varia n t?: 'in f o' | 'succe s s' | 'warni n g';
  autoRota t e?: boole a n;
  rotationInterv a l?: numb e r;
  classNa m e ?  : stri n g;
 }
const LatestContentBanne r: Rea c t.FC<LatestContentBannerPro p s> = ({
  varia n t = 'in f o'
  classNa m e = ''
}) => {
  const variantStyle s = {
    in f o: 'bg-gradie n t-to-r fro m-bl u e-600 t o-indi g o-6 0 0'
    succe s s: 'bg-gradie n t-to-r fro m-gre e n-600 t o-emera l d-60 0'
    warni n g: 'bg-gradie n t-to-r fro m-yell o w-600 t o-oran g e-60 0'
  }; retu r n (
    <div classNam e = { `${variantStyl e s[vari a n t] } te x t-whit e p-4 ${classNa m e}`}>
      <div classNam e = 'container m x-auto p x-6'>
        <div classNam e='flex item s-center justif y-between fle x-wrap ga p-4'>
          <div classNam e='flex item s-center ga p-3'>
            <Sparkles classNam e='w-6 h-6 animat e-pul s e' />
            <d i v>
              <h3 classNam e='fo n t-bold tex t-lg'>
                🔥 New Toda y: Runtime Scorecard s · Edg e A/B &lt; 100 m s · Agent Guardrails v2
              </h3>
              <p classNam e='te x t-sm opacit y-90'>
                Now liv e: 3 new guides + dozens of updated insigh t s
              </p>
            </d i v>
          </d i v>
          <Link t o='/bl o g'
            classNa m e='bg-white tex t-gr a y-900 p x-6 p y-2 rounde d-lg fon t-semibold hove r:bg-opaci t y-90 transitio n-all flex items-center ga p-2 fle x-shri n k-0'
          >
            <TrendingUp classNam e='w-4 h-4' />
            Explore No w
          </Li n k>
        </d i v>
      </d i v>
    </d i v>
  );
};
export default LatestContentBanner;
=======
import React from ' react ' ; import { Li n k } from ' react - rout e r - d o m ' ; interface LatestContentBannerProps { varia n t ? : ' in f o ' | ' succe s s ' | ' warni n g ' ; autoRota t e ? : boole a n; rotationInterv a l ? : numb e r; classNa m e ? : string; } const LatestContentBanner: React.FC<LatestContentBannerProps> = ( { varia n t = ' in f o ' classNa m e = ' ' } ) = > { const variantStyles = { in f o: ' bg - gradie n t - to - r fro m - bl u e - 600 t o - indi g o - 6 0 0 ' succe s s: ' bg - gradie n t - to - r fro m - gre e n - 600 t o - emera l d - 60 0 ' warni n g: ' bg - gradie n t - to - r fro m - yell o w - 600 t o - oran g e - 60 0 ' }; retu r n ( < div classNam e = { ` $ { variantStyl e s [ vari a n t ] } te x t - whit e p - 4 $ { classNa m e } ` } > < div classNam e = ' container m x - auto p x - 6 ' > < div classNam e = ' flex item s - center justif y - between fle x - wrap ga p - 4 ' > < div classNam e = ' flex item s - center ga p - 3 ' > < Sparkles classNam e = ' w - 6 h - 6 animat e - pul s e ' / > < d i v > < h3 classNam e = ' fo n t - bold tex t - lg ' > 🔥 New Toda y: Runtime Scorecard s · Edg e A / B & lt; 100 m s · Agent Guardrails v2 < / h3 > < p classNam e = ' te x t - sm opacit y - 90 ' > Now liv e: 3 new guides + dozens of updated insigh t s < / p > < / d i v > < / d i v > < Link t o = ' / blog ' classNa m e = ' bg - white tex t - gr a y - 900 p x - 6 p y - 2 rounde d - lg fon t - semibold hove r: bg - opaci t y - 90 transitio n - all flex items - center ga p - 2 fle x - shri n k - 0 ' > < TrendingUp classNam e = ' w - 4 h - 4 ' / > Explore No w < / Li n k > < / d i v > < / d i v > < / d i v > ); }; export default LatestContentBanner; $ $ 
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c2c5
