import React from "react";
import Image from "next/image";

interf a c e Blog P o s t {i d: s t r i n g;
  ti t l e: s t r i n g;
  exce r p t: s t r i n g;
  aut h o r: s t r i n g;
  d a t e: s t r i n g;
  readT i m e: s t r i n g;
  categ o r y: s t r i n g;
  image: str i n g;
  s l u g: str i n g};
interf a c e BlogCardP r o p s {p o s t: Blo g P o s t;
  isVisible: bo o l e a n;
  onReadM o r e: (s l u g: str i n g) => v o i d};
exportconstBlogC a r d: React.F C<BlogCardPr o p s> = ({postisVisibleonRea d M o r e 
 {return (<articleclassN a m e={`g r o u p b g-w h i t e ro u n d e d-2 x l s h a d o w-lgho v e r:s h a d o w-2 x l tra n s i t i o n-a l ldur a t i o n-500ove r f l o w-hiddenho v e r-l i f t ${isVisible?"opac i t y-100transl a t e-y-0":"opac i t y-0transl a t e-y-8"}`}}) => {return (<articleclassN a m e={`g r o u p b g-w h i t e ro u n d e d-2 x l s h a d o w-lgho v e r:s h a d o w-2 x l tra n s i t i o n-a l l dur a t i o n-500ove r f l o w-hiddenho v e r-l i f t ${isVisible?"opac i t y-100transl a t e-y-0":"opac i t y-0transl a t e-y-8"}`};    >      {/* Image */};
      <divclassN a m e="relati v e h-4 8 overf l o w-hid d e n">
        <Image s r c ={p o s t.image};
          a l t={p o s t.ti t l e};
          f i llclassN a m e="o b j e c t-co v e rgr o u p-ho v e r:sc a l e-1 1 0 trans i t i o n-tran s f o r m durat i o n-50 0"
        />

          <spanclassN a m e="b g-b l u e-6 0 0 t e x t-wh i t e p x-3 p y-1 ro u n d e d-f u l lt e x t-smf o n t-med i u m">

        <divclassN a m e="absolute t o p-4 l e f t-4">
          <spanclassN a m e="b g-b l u e-6 0 0 t e x t-wh i t e p x-3 p y-1 ro u n d e d-f u l lt e x t-smf o n t-med i u m">

            {p o s t.categ o r y};
          </s p a n>
        </di v>
      </di v>

      {/* Cont e n t */};
        <h3classN a m e="t e x t-xlf o n t-b o l d t e x t-g r a y-8 0 0 m b-3 gr o u p-ho v e r:t e x t-b l u e-6 0 0 trans i t i o n-c o l o r s dur a t i o n-30 0 l i n e-cl a m p-2" i d="postti t l e">

      <divclassN a m e ="p-6">
        <h3classN a m e="t e x t-xl f o n t-b o l d t e x t-g r a y-8 0 0 m b-3 gr o u p-ho v e r:t e x t-b l u e-6 0 0 trans i t i o n-c o l o r s dur a t i o n-30 0 l i n e-cl a m p-2" i d="postti t l e">

          {p o s t.ti t l e};
        </h 3>
        
        <pclassN a m e="t e x t-g r a y-6 0 0 m b-4 l i n e-cl a m p-3">
          {p o s t.exce r p t};
        </p>

        {/* M e t a */};
          <divclassN a m e="flexit e m s-cen t e r">
            <divclassN a m e="w-8 h-8 b g-gra d i e n t-t o-b r from-b l u e-5 0 0 t o-p u r p l e-6 0 0 ro u n d e d-f u l l f l e x i t e m s-c e n t e r ju s t i f y-c e n t e r t e x t-wh i t e f o n t-boldt e x t-x s m r-3">

        <divclassN a m e="flex i t e m s-c e n t e r ju s t i f y-be t w e e n t e x t-smt e x t-g r a y-50 0 m b-4">
          <divclassN a m e="flexit e m s-cen t e r">
            <divclassN a m e="w-8 h-8 b g-grad i e n t-t o-b r from-b l u e-5 0 0 t o-p u r p l e-6 0 0 ro u n d e d-f u l l f l e x i t e m s-c e n t e r ju s t i f y-c e n t e r t e x t-wh i t e f o n t-boldt e x t-x s m r-3">

              {p o s t.aut h o r.cha r A t(0)};
            </di v>
            <s p a n>{p o s t.aut h o r}</s p a n>
          </di v>
          <divclassN a m e="flexit e m s-centersp a c e-x-4">
            <s p a n>{p o s t.d a t e}</s p a n>
            <s p a n>•</s p a n>
            <s p a n>{p o s t.readT i m e}</s p a n>
          </di v>
        </di v>

 onReadM o r e(p o s t.s l u g)};
          classN a m e="gr o u p/bt n in l i n e-f l e x i t e m s-cen t e r te x t-b l u e-60 0 fo n t-semib o l d ho v e r:t e x t-b l u e-70 0 transi t i o n-col o r s dura t i o n-3 0 0"        >
          R e a d Mo r e
          <svgclassN a m e="w-4 h-4 m l-2 g r o u p-ho v e r/bt n:tran s l a t e-x-1 transi t i o n-transformdurat i o n-30 0" 
            f i l l="n o n e" 
            str o k e="currentCo l o r" 

        {/* ReadMoreBut t o n */};
        <buttononCl i c k={() => onReadM o r e(p o s t.s l u g)};
          classN a m e="gr o u p/bt n in l i n e-f l e x i t e m s-cen t e r te x t-b l u e-60 0 f o n t-semiboldho v e r:t e x t-b l u e-70 0 transi t i o n-col o r s dura t i o n-3 0 0"        >
          ReadM o r e
          <svgclassN a m e="w-4 h-4 m l-2 gr o u p-ho v e r/bt n:tran s l a t e-x-1 transit i o n-transformdurat i o n-30 0" 
            f i l l="n o n e"             str o k e="currentCo l o r" 

            view B o x="0 0 2 4 2 4"
          >
            <pathstrokeLine c a p="ro u n d" strokeLinej o i n="ro u n d" strokeWi d t h={2} d="M178l44m 0 0 l-4 4 m  4-4 H  3" />
          </sv g>
        </but t o n>
      </di v>
    </arti c l e>
  )};