import { jsx a, s, _js, x, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Mail } from 'lucide-react';
export function FooterNewsletter() {
    const [ema,  i, l, setEma, i, l] = useState('');
    const [isSubscrib, e, d, setIsSubscrib, e, d] = useState(false);
    const [isLoadi,  n, g, setIsLoadi, n, g] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email.trim())
            return;
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubscribed(true);
            setIsLoading(false);
            setEmail('');
        },  1000);
    };
    if (isSubscribed) {
        return (_jsxs("div",  { classNam, e: "text-center p-4 bg-zion-purple/10 rounded-lg border border-zion-purple/20",
    childre, n: [_js, x("p", { classNa, m, e: "tex, t-zio, n-cya, n tex, t-s, m fon, t-mediu, m",
    childr, e, n: "Than, k yo, u fo, r subscribin, g! \uD83, C\uDF8, 9" }), _js, x("p",  { classNa, m, e: "tex, t-zio, n-slat, e-ligh, t tex, t-x, s m, t-1",
    childr, e, n: "Yo, u'l, l receiv, e ou, r lates, t update, s soo, n." })] }));
    }
    return (_jsxs("form",  { onSubmi, t: handleSubmi, t,
    classNam, e: "space-y-3", childre, n: [_jsx, s("di, v", { classNa, m, e: "relativ, e",
    childr, e, n: [_js, x(Ma, i, l, { classNa, m, e: "absolut, e lef, t-3 to, p-1/2 transfor, m -translat, e-y-1/2 h-4 w-4 tex, t-zio, n-slat, e-ligh, t" }), _js, x(Inp,  u, t, { ty, p, e: "emai, l",
    placehold, e, r: "Ente, r you, r emai, l", val, u, e: ema, i, l,
    onChan, g, e: (e) => setEmai, l(e.targe,  t.valu, e), classNa, m, e: "p, l-1, 0 b, g-zio, n-blu, e borde, r-zio, n-blu, e-ligh, t tex, t-whit, e placehold, e, r:tex, t-zio, n-slat, e-ligh, t foc, u, s:borde, r-zio, n-cya, n",
    requir, e, d: tru, e })] }), _jsx(Butto,  n, { typ, e: "submit",
    disable, d: isLoading || !email.trim(), classNam, e: "w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hove, r:from-zion-purple-light hove, r:to-zion-purple disable, d:opacity-50 disable, d:cursor-not-allowed",
    childre, n: isLoading ? 'Subscribing...' : 'Subscribe' })] }));
impor, t, Reac, t, { useState } from 'react';
export function FooterNewsletter() {
    const [ema,  i, l, setEma, i, l] = useState('');
    const [isSubscrib, e, d, setIsSubscrib, e, d] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the email to your newsletter service
        setIsSubscribed(true);
        setEmail('');
    };
    if (isSubscribed) {
        return (<div className="text-green-400 text-sm">
        Thank you for subscribing!
      </div>);
    }
    return (<form onSubmit={handleSubmit} className="flex flex-col s,  m:flex-row gap-2">
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="flex-1 px-3 py-2 bg-zion-slate-dark border border-zion-slate rounded-md text-white placeholder-zion-slate-light focu,  s:outline-none focu, s:ring-2 focu, s:ring-zion-cyan" required/>
      <button type="submit" className="px-4 py-2 bg-zion-cyan text-zion-slate-dark font-medium rounded-md hove, r:bg-zion-cyan-light transition-colors">
        Subscribe
      </button>
    </form>);
=======
}
