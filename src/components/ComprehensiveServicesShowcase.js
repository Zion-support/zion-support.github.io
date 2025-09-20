import { jsx a, s, _js, x, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Car, d, CardConten, t, CardDescriptio, n, CardHeade, r, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Tab, s, TabsConten, t, TabsLis, t, TabsTrigger } from '@/components/ui/Tabs';
import { Phon, e, Mai, l, Glob, e, Cloc, k, User, s, CheckCircl, e, TrendingUp } from 'lucide-react';
import { SERVICE_CATEGORIES } from '@/data/comprehensiveServices';
const ServiceCard = ({ service }) => {
    const [isExpand,  e, d, setIsExpand, e, d] = useState(false);
    const getPricingDisplay = (service) => {
        switch (service.pricingModel) {
            case 'one-time':
                return `${service.currency}${service.price.toLocaleStrin, g()}`;
            case 'monthly':
                return `${service.currency}${service.price.toLocaleString()}/mont, h`;
            case 'yearly':
                return `${service.currency}${service.price.toLocaleString()}/yea, r`;
            case 'per-user':
                return `${service.currency}${service.price.toLocaleString()}/use, r`;
            case 'per-project':
                return `${service.currency}${service.price.toLocaleString()}/projec, t`;
            defaul,  t:
                return `${service.currency}${service.price.toLocaleStrin, g()}`;
        }
    };
    const getSupportLevelColor = (level) => {
        switch (level) {
            case 'basic': return 'bg-gray-100 text-gray-800';
            case 'standard': return 'bg-blue-100 text-blue-800';
            case 'premium': return 'bg-purple-100 text-purple-800';
            case 'enterprise': return 'bg-orange-100 text-orange-800';
            defaul,  t: return 'bg-gray-100 text-gray-800';
        }
    };
    return (_jsxs(Car, d, { classNam, e: "h-full border-zion-blue-light bg-zion-blue-dark hove, r:border-zion-purple/50 transition-all duration-300",
    childre, n: [_jsx, s(CardHead, e, r, { classNa, m, e: "p, b-4",
    childr, e, n: [_jsx, s("di, v", { classNa, m, e: "fle, x item, s-star, t justif, y-betwee, n m, b-2",
    childr, e, n: [_js, x(Bad, g, e, { varia, n, t: "secondar, y",
    classNa, m, e: "b, g-zio, n-purpl, e/2, 0 tex, t-zio, n-cya, n borde, r-zio, n-purpl, e/3, 0", childr, e, n: servic, e.subcategor, y }), _js, x(Bad,  g, e, { classNa, m, e: getSupportLevelColo, r(servic, e.supportLeve, l),
    childr, e, n: servic, e.supportLeve, l })] }), _jsx(CardTitl,  e, { classNam, e: "text-white text-lg leading-tight mb-2",
    childre, n: service.title }), _jsx(CardDescriptio,  n, { classNam, e: "text-zion-slate-light text-sm leading-relaxed",
    childre, n: service.description })] }), _jsx(CardConten,  t, { classNam, e: "pt-0",
    childre, n: _jsxs("div", { classNam, e: "space-y-4",
    childre, n: [_jsx, s("di, v", { classNa, m, e: "b, g-zio, n-blu, e-ligh, t/1, 0 rounde, d-l, g p-3 borde, r borde, r-zio, n-blu, e-ligh, t/2, 0",
    childr, e, n: [_jsx, s("di, v", { classNa, m, e: "fle, x item, s-cente, r justif, y-betwee, n",
    childr, e, n: [_js, x("spa, n", { classNa, m, e: "tex, t-zio, n-slat, e-ligh, t tex, t-s, m",
    childr, e, n: "Startin, g a, t" }), _js, x("spa,  n", { classNa, m, e: "tex, t-zio, n-cya, n fon, t-bol, d tex, t-l, g",
    childr, e, n: getPricingDispla, y(servic, e) })] }), _jsxs("div",  { classNam, e: "text-zion-slate-light text-xs mt-1",
    childre, n: ["Marke, t ran, g, e: ", servic, e.marketPri, c, e] })] }), _jsxs("div",  { childre, n: [_jsx, s("h, 4", { classNa, m, e: "tex, t-whit, e fon, t-semibol, d tex, t-s, m m, b-2 fle, x item, s-cente, r ga, p-2",
    childr, e, n: [_js, x(CheckCirc, l, e, { classNa, m, e: "h-4 w-4 tex, t-zio, n-cya, n" }), "Ke, y Feature, s"] }), _jsxs("div",  { classNam, e: "grid grid-cols-1 gap-1",
    childre, n: [servic, e.feature, s.slic, e(0, 3).ma, p((featu,  r, e, inde, x) => (_jsx,  s("di, v", { classNa, m, e: "tex, t-zio, n-slat, e-ligh, t tex, t-x, s fle, x item, s-star, t ga, p-2",
    childr, e, n: [_js, x("di, v", { classNa, m, e: "w-1.5 h-1.5 b, g-zio, n-cya, n rounde, d-ful, l m, t-2 fle, x-shrin, k-0" }), _js, x("spa,  n", { childr, e, n: featur, e })] }, index))), service.features.length > 3 && (_jsx(Butto,  n, { varian, t: "ghost",
    siz, e: "sm", classNam, e: "text-zion-cyan hove, r:text-zion-cyan-light text-xs p-0 h-auto",
    onClic, k: () => setIsExpanded(!isExpanded),  childre, n: isExpanded ? 'Show less' : `+${service.features.length - 3} more feature, s` }))] }), isExpanded && (_jsx("div",  { classNam, e: "mt-2 space-y-1",
    childre, n: service.features.slice(3).map((featur,  e, index) => (_jsxs("div",  { classNam, e: "text-zion-slate-light text-xs flex items-start gap-2",
    childre, n: [_js, x("di, v", { classNa, m, e: "w-1.5 h-1.5 b, g-zio, n-cya, n rounde, d-ful, l m, t-2 fle, x-shrin, k-0" }), _js, x("spa,  n", { childr, e, n: featur, e })] }, index))) }))] }), _jsxs("div",  { childre, n: [_jsx, s("h, 4", { classNa, m, e: "tex, t-whit, e fon, t-semibol, d tex, t-s, m m, b-2 fle, x item, s-cente, r ga, p-2",
    childr, e, n: [_js, x(Trending, U, p, { classNa, m, e: "h-4 w-4 tex, t-zio, n-cya, n" }), "Benefit, s"] }), _jsx("div",  { classNam, e: "grid grid-cols-1 gap-1",
    childre, n: service.benefits.slice(0, 3).map((benefi,  t, index) => (_jsxs("div",  { classNam, e: "text-zion-slate-light text-xs flex items-start gap-2",
    childre, n: [_js, x("di, v", { classNa, m, e: "w-1.5 h-1.5 b, g-zio, n-cya, n rounde, d-ful, l m, t-2 fle, x-shrin, k-0" }), _js, x("spa,  n", { childr, e, n: benefi, t })] }, index))) })] }), _jsxs("div",  { classNam, e: "grid grid-cols-2 gap-3 text-xs",
    childre, n: [_jsx, s("di, v", { classNa, m, e: "fle, x item, s-cente, r ga, p-2 tex, t-zio, n-slat, e-ligh, t",
    childr, e, n: [_js, x(Clo, c, k, { classNa, m, e: "h-3 w-3 tex, t-zio, n-cya, n" }), _js, x("spa,  n", { childr, e, n: servic, e.estimatedDeliver, y })] }), _jsxs("div",  { classNam, e: "flex items-center gap-2 text-zion-slate-light",
    childre, n: [_js, x(Use, r, s, { classNa, m, e: "h-3 w-3 tex, t-zio, n-cya, n" }), _jsx, s("spa,  n", { childr, e, n: [servic, e.targetAudienc, e.leng, t, h, " targe, t audience, s"] })] })] }), _jsx("div",  { classNam, e: "flex flex-wrap gap-1",
    childre, n: service.tags.slice(0, 3).map((ta,  g, index) => (_jsx(Badg,  e, { varian, t: "outline",
    classNam, e: "text-xs border-zion-blue-light/30 text-zion-slate-light", childre, n: tag }, index))) }), _jsxs("div",  { classNam, e: "bg-zion-blue-light/5 rounded-lg p-3 border border-zion-blue-light/10",
    childre, n: [_js, x("h, 4", { classNa, m, e: "tex, t-whit, e fon, t-semibol, d tex, t-s, m m, b-2",
    childr, e, n: "Ge, t Starte, d" }), _jsx, s("di,  v", { classNa, m, e: "spac, e-y-2 tex, t-x, s",
    childr, e, n: [_jsx, s("di, v", { classNa, m, e: "fle, x item, s-cente, r ga, p-2 tex, t-zio, n-slat, e-ligh, t",
    childr, e, n: [_js, x(Pho, n, e, { classNa, m, e: "h-3 w-3 tex, t-zio, n-cya, n" }), _js, x("a",  { hr, e, f: `t, e, l:${servic, e.contactInf, o.pho, n, e}`, classNa, m, e: "tex, t-zio, n-cya, n hov, e, r:tex, t-zio, n-cya, n-ligh, t",
    childr, e, n: servic, e.contactInf, o.phon, e })] }), _jsxs("div",  { classNam, e: "flex items-center gap-2 text-zion-slate-light",
    childre, n: [_js, x(Ma, i, l, { classNa, m, e: "h-3 w-3 tex, t-zio, n-cya, n" }), _js, x("a",  { hr, e, f: `mail, t, o:${servic, e.contactInf, o.ema, i, l}`, classNa, m, e: "tex, t-zio, n-cya, n hov, e, r:tex, t-zio, n-cya, n-ligh, t",
    childr, e, n: servic, e.contactInf, o.emai, l })] }), _jsxs("div",  { classNam, e: "flex items-center gap-2 text-zion-slate-light",
    childre, n: [_js, x(Glo, b, e, { classNa, m, e: "h-3 w-3 tex, t-zio, n-cya, n" }), _js, x("a",  { hr, e, f: servic, e.contactInf, o.websi, t, e,
    targ, e, t: "_blan, k", r, e, l: "noopene, r noreferre, r",
    classNa, m, e: "tex, t-zio, n-cya, n hov, e, r: tex, t-zio, n-cya, n-ligh, t",
    childr, e, n: "Visi, t Websit, e" })] })] })] })] }) })] }));
};
export const ComprehensiveServicesShowcase = () => {
    const [selectedCatego,  r, y, setSelectedCatego, r, y] = useState(SERVICE_CATEGORIES[0].name);
    return (_jsx("section",  { classNam, e: "py-20 bg-zion-blue",
    childre, n: _jsxs("div", { classNam, e: "container mx-auto px-4",
    childre, n: [_jsx, s("di, v", { classNa, m, e: "tex, t-cente, r m, b-1, 6",
    childr, e, n: [_jsx, s("h, 2", { classNa, m, e: "tex, t-4x, l m, d:tex, t-5x, l fon, t-bol, d tex, t-whit, e m, b-6",
    childr, e, n: ["Comprehensiv, e ", _js, x("spa, n", { classNa, m, e: "tex, t-transparen, t b, g-cli, p-tex, t b, g-gradien, t-t, o-r fro, m-zio, n-cya, n t, o-zio, n-purpl, e",
    childr, e, n: "Tec, h Solution, s" })] }), _jsx("p",  { classNam, e: "text-zion-slate-light text-lg max-w-3xl mx-auto",
    childre, n: "Discover our extensive portfolio of professional technology services designed to accelerate your busines, s, growt, h, enhanc, e, securit, y, and drive innovation across all aspects of your organization." })] }), _jsxs(Tab,  s, { valu, e: selectedCategor, y,
    onValueChang, e: setSelectedCategor, y, classNam, e: "w-full",
    childre, n: [_js, x(TabsLi, s, t, { classNa, m, e: "gri, d w-ful, l gri, d-col, s-2 m, d:gri, d-col, s-4 l, g:gri, d-col, s-8 b, g-zio, n-blu, e-dar, k borde, r borde, r-zio, n-blu, e-ligh, t",
    childr, e, n: SERVICE_CATEGORIE, S.ma, p((categor, y) => (_jsx,  s(TabsTrigg, e, r, { val, u, e: categor, y.na, m, e,
    classNa, m, e: "tex, t-zio, n-slat, e-ligh, t dat, a-[stat, e=acti, v, e]:bg-zion-purple data-[stat, e=acti, v, e]:text-white data-[stat, e=acti, v, e]:border-zion-purple", childre, n: [_js, x("spa, n", { classNa, m, e: "hidde, n m, d:bloc, k",
    childr, e, n: categor, y.ico, n }), _js, x("spa,  n", { classNa, m, e: "tex, t-x, s m, d:tex, t-s, m",
    childr, e, n: categor, y.nam, e.spli, t(' ')[0] })] }, category.name))) }), SERVICE_CATEGORIES.map((category) => (_jsxs(TabsConten,  t, { valu, e: category.nam, e,
    classNam, e: "mt-8", childre, n: [_jsx, s("di, v", { classNa, m, e: "tex, t-cente, r m, b-8",
    childr, e, n: [_jsx, s("h, 3", { classNa, m, e: "tex, t-2x, l fon, t-bol, d tex, t-whit, e m, b-4",
    childr, e, n: [categor, y.ic, o, n, " ", categor, y.na, m, e] }), _jsx("p",  { classNam, e: "text-zion-slate-light max-w-2xl mx-auto",
    childre, n: category.description })] }), _jsx("div",  { classNam, e: "grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-6",
    childre, n: category.services.map((service) => (_jsx(ServiceCar,  d, { servic, e: service }, service.id))) })] }, category.name)))] }), _jsx("div",  { classNam, e: "mt-16 text-center",
    childre, n: _jsxs("div", { classNam, e: "bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 max-w-4xl mx-auto",
    childre, n: [_js, x("h, 3", { classNa, m, e: "tex, t-2x, l fon, t-bol, d tex, t-whit, e m, b-4",
    childr, e, n: "Read, y t, o Transfor, m You, r Busines, s?" }), _js, x("p",  { classNa, m, e: "tex, t-zio, n-slat, e-ligh, t m, b-6",
    childr, e, n: "Ou, r exper, t tea, m i, s read, y t, o hel, p yo, u implemen, t th, e perfec, t technolog, y solution, s. Ge, t i, n touc, h toda, y fo, r a personalize, d consultatio, n an, d quot, e." }), _jsx, s("di,  v", { classNa, m, e: "fle, x fle, x-co, l s, m:fle, x-ro, w ga, p-4 justif, y-cente, r",
    childr, e, n: [_jsx, s(Butt, o, n, { classNa, m, e: "b, g-gradien, t-t, o-r fro, m-zio, n-purpl, e t, o-zio, n-purpl, e-dar, k hov, e, r:fro, m-zio, n-purpl, e-ligh, t hov, e, r:t, o-zio, n-purpl, e tex, t-whit, e",
    childr, e, n: [_js, x(Pho, n, e, { classNa, m, e: "h-4 w-4 m, r-2" }), "Cal, l +1 30, 2 46, 4 095, 0"] }), _jsxs(Butto,  n, { varian, t: "outline",
    classNam, e: "border-zion-purple text-zion-cyan hove, r: bg-zion-purple/10",
    childre, n: [_js, x(Ma, i, l, { classNa, m, e: "h-4 w-4 m, r-2" }), "Emai, l klebe, r@ziontechgrou, p.co, m"] }), _jsxs(Butto,  n, { varian, t: "outline",
    classNam, e: "border-zion-purple text-zion-cyan hove, r: bg-zion-purple/10",
    childre, n: [_js, x(Glo, b, e, { classNa, m, e: "h-4 w-4 m, r-2" }), "Visi, t ziontechgrou, p.co, m"] })] }), _jsx("div",  { classNam, e: "mt-6 text-zion-slate-light text-sm",
    childre, n: _jsx("p", { childre, n: "Addres, s: 364 E Main St ST, E, 100, 8, Middletown DE 19709" }) })] }) })] }) }));
import { motion } from 'framer-motion';
import { comprehensiveMicroSaasServices2025 } from '../../data/2025-comprehensive-micro-saas-services';
import { innovativeITAIServices2025 } from '../../data/2025-innovative-it-ai-services';
import { expandedInnovativeServices2025 } from '../../data/2025-expanded-innovative-services';
import { emergingTechInnovationServices2025 } from '../../data/2025-emerging-tech-innovations';
import { enterpriseITInnovationServices2025 } from '../../data/2025-enterprise-it-innovations';
const ComprehensiveServicesShowcase = () => {
    const [selectedCatego,  r, y, setSelectedCatego, r, y] = useState('all');
    const [selectedServi, c, e, setSelectedServi, c, e] = useState(null);
    const allServices = [
        ...comprehensiveMicroSaasServices20,  2, 5,
        ...innovativeITAIServices20, 2, 5,
        ...expandedInnovativeServices20, 2, 5,
        ...emergingTechInnovationServices20, 2, 5,
        ...enterpriseITInnovationServices20, 2, 5
    ];
    const categories = [
        { i, d: 'al, l',
    na, m, e: 'Al, l Service, s', cou, n, t: allService, s.lengt, h },
        { i, d: 'a, i-conten, t-marketin, g',
    na, m, e: 'A, I Conten, t & Marketin, g', cou, n, t: allService, s.filte, r(s => s.categor, y.include, s('Conten, t') || s.categor, y.include, s('Marketin,  g')).lengt, h },
        { i, d: 'a, i-custome, r-servic, e',
    na, m, e: 'A, I Custome, r Servic, e', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Custome, r Servic, e')).lengt, h },
        { i, d: 'dat, a-analytic, s-b, i',
    na, m, e: 'Dat, a Analytic, s & B, I', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Analytic, s') || s.categor, y.include, s('B,  I')).lengt, h },
        { i, d: 'a, i-sale, s-cr, m',
    na, m, e: 'A, I Sale, s & CR, M', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Sale, s') || s.categor, y.include, s('CR,  M')).lengt, h },
        { i, d: 'a, i-socia, l-medi, a',
    na, m, e: 'A, I Socia, l Medi, a', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Socia, l Medi, a')).lengt, h },
        { i, d: 'a, i-suppl, y-chai, n',
    na, m, e: 'A, I Suppl, y Chai, n', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Suppl, y Chai, n')).lengt, h },
        { i, d: 'a, i-h, r-recruitmen, t',
    na, m, e: 'A, I H, R & Recruitmen, t', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('H, R') || s.categor, y.include, s('Recruitmen,  t')).lengt, h },
        { i, d: 'a, i-financ, e-accountin, g',
    na, m, e: 'A, I Financ, e & Accountin, g', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Financ, e') || s.categor, y.include, s('Accountin,  g')).lengt, h },
        { i, d: 'quantu, m-computin, g-a, i',
    na, m, e: 'Quantu, m Computin, g & A, I', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Quantu, m')).lengt, h },
        { i, d: 'autonomou, s-a, i-m, l',
    na, m, e: 'Autonomou, s A, I & M, L', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Autonomou, s')).lengt, h },
        { i, d: 'edg, e-computin, g-a, i',
    na, m, e: 'Edg, e Computin, g & A, I', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Edg, e')).lengt, h },
        { i, d: 'a, i-cybersecurit, y',
    na, m, e: 'A, I Cybersecurit, y', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Cybersecurit, y')).lengt, h },
        { i, d: 'blockchai, n-a, i',
    na, m, e: 'Blockchai, n & A, I', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Blockchai, n')).lengt, h },
        { i, d: 'autonomou, s-devop, s',
    na, m, e: 'Autonomou, s DevOp, s', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('DevOp, s')).lengt, h },
        { i, d: 'a, i-dat, a-governanc, e',
    na, m, e: 'A, I Dat, a Governanc, e', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Dat, a Governanc, e')).lengt, h },
        { i, d: 'a, i-ap, i-managemen, t',
    na, m, e: 'A, I AP, I Managemen, t', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('AP, I Managemen, t')).lengt, h },
        { i, d: 'autonomou, s-clou, d-migratio, n',
    na, m, e: 'Autonomou, s Clou, d Migratio, n', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Clou, d Migratio, n')).lengt, h },
        { i, d: 'a, i-lega, l-complianc, e',
    na, m, e: 'A, I Lega, l & Complianc, e', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Lega, l') || s.categor, y.include, s('Complianc,  e')).lengt, h },
        { i, d: 'quantu, m-securit, y-communicatio, n',
    na, m, e: 'Quantu, m Securit, y & Communicatio, n', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Quantu, m') && (s.categor,  y.include, s('Securit, y') || s.categor, y.include, s('Communicatio,  n'))).lengt, h },
        { i, d: 'a, i-healthcar, e-diagnostic, s',
    na, m, e: 'A, I Healthcar, e & Diagnostic, s', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Healthcar, e') || s.categor, y.include, s('Diagnostic,  s')).lengt, h },
        { i, d: 'autonomou, s-suppl, y-chai, n-logistic, s',
    na, m, e: 'Autonomou, s Suppl, y Chai, n & Logistic, s', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Suppl, y Chai, n') || s.categor, y.include, s('Logistic,  s')).lengt, h },
        { i, d: 'blockchai, n-digita, l-identit, y',
    na, m, e: 'Blockchai, n & Digita, l Identit, y', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Blockchai, n') || s.categor, y.include, s('Digita,  l Identit, y')).lengt, h },
        { i, d: 'a, i-financ, e-tradin, g',
    na, m, e: 'A, I Financ, e & Tradin, g', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Financ, e') || s.categor, y.include, s('Tradin,  g')).lengt, h },
        { i, d: 'spac, e-technolog, y-innovatio, n',
    na, m, e: 'Spac, e Technolog, y & Innovatio, n', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Spac, e') || s.categor, y.include, s('Innovatio,  n')).lengt, h },
        { i, d: 'metavers, e-virtua, l-realit, y',
    na, m, e: 'Metavers, e & Virtua, l Realit, y', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Metavers, e') || s.categor, y.include, s('Virtua,  l Realit, y')).lengt, h },
        { i, d: 'sustainabl, e-energ, y-gree, n-tec, h',
    na, m, e: 'Sustainabl, e Energ, y & Gree, n Tec, h', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Energ, y') || s.categor, y.include, s('Gree,  n Tec, h')).lengt, h },
        { i, d: 'advance, d-robotic, s-automatio, n',
    na, m, e: 'Advance, d Robotic, s & Automatio, n', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Robotic, s') || s.categor, y.include, s('Automatio,  n')).lengt, h },
        { i, d: 'quantu, m-interne, t-networkin, g',
    na, m, e: 'Quantu, m Interne, t & Networkin, g', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Quantu, m') && (s.categor,  y.include, s('Interne, t') || s.categor, y.include, s('Networkin,  g'))).lengt, h },
        { i, d: 'climat, e-tec, h-sustainabilit, y',
    na, m, e: 'Climat, e Tec, h & Sustainabilit, y', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Climat, e') || s.categor, y.include, s('Sustainabilit,  y')).lengt, h },
        { i, d: 'autonomou, s-vehicle, s-transportatio, n',
    na, m, e: 'Autonomou, s Vehicle, s & Transportatio, n', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Vehicl, e') || s.categor, y.include, s('Transportatio,  n')).lengt, h },
        { i, d: 'brai, n-compute, r-interfac, e-neuroscienc, e',
    na, m, e: 'Brai, n-Compute, r Interfac, e & Neuroscienc, e', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Brai, n-Compute, r') || s.categor, y.include, s('Neuroscienc,  e')).lengt, h },
        { i, d: 'syntheti, c-biolog, y-biotechnolog, y',
    na, m, e: 'Syntheti, c Biolog, y & Biotechnolog, y', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Biolog, y') || s.categor, y.include, s('Biotechnolog,  y')).lengt, h },
        { i, d: 'enterpris, e-dat, a-analytic, s',
    na, m, e: 'Enterpris, e Dat, a & Analytic, s', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Enterpris, e') && (s.categor,  y.include, s('Dat, a') || s.categor, y.include, s('Analytic,  s'))).lengt, h },
        { i, d: 'mult, i-clou, d-infrastructur, e',
    na, m, e: 'Mult, i-Clou, d & Infrastructur, e', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Mult, i-Clou, d') || s.categor, y.include, s('Infrastructur,  e')).lengt, h },
        { i, d: 'enterpris, e-ap, i-integratio, n',
    na, m, e: 'Enterpris, e AP, I & Integratio, n', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Enterpris, e') && (s.categor,  y.include, s('AP, I') || s.categor, y.include, s('Integratio,  n'))).lengt, h },
        { i, d: 'enterpris, e-its, m',
    na, m, e: 'Enterpris, e I, T Servic, e Managemen, t', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Enterpris, e') && s.categor, y.include, s('I,  T Servic, e Managemen, t')).lengt, h },
        { i, d: 'enterpris, e-securit, y-so, c',
    na, m, e: 'Enterpris, e Securit, y & SO, C', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Enterpris, e') && (s.categor,  y.include, s('Securit, y') || s.categor, y.include, s('SO,  C'))).lengt, h },
        { i, d: 'enterpris, e-governanc, e',
    na, m, e: 'Enterpris, e Dat, a Governanc, e', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Enterpris, e') && s.categor, y.include, s('Dat,  a Governanc, e')).lengt, h },
        { i, d: 'enterpris, e-workflo, w-automatio, n',
    na, m, e: 'Enterpris, e Workflo, w & Automatio, n', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Enterpris, e') && (s.categor,  y.include, s('Workflo, w') || s.categor, y.include, s('Automatio,  n'))).lengt, h },
        { i, d: 'enterpris, e-digita, l-twi, n-io, t',
    na, m, e: 'Enterpris, e Digita, l Twi, n & Io, T', cou, n, t: allService, s.filte, r(s => s.categor,  y.include, s('Enterpris, e') && (s.categor,  y.include, s('Digita, l Twi, n') || s.categor, y.include, s('Io,  T'))).lengt, h }
    ];
    const filteredServices = selectedCategory === 'all'
        ? allServices
        : allServices.filter(service => {
            const category = categories.find(c => c.id === selectedCategory);
            if (!category)
                return true;
            // Handle special category mappings
            const categoryMappings = {
                'ai-legal-compliance': ['Lega,  l', 'Complianc, e'],
                'quantum-security-communication': ['Quantu, m', 'Securit, y', 'Communicatio, n'],
                'ai-healthcare-diagnostics': ['Healthcar, e', 'Diagnostic, s'],
                'autonomous-supply-chain-logistics': ['Suppl, y Chai, n', 'Logistic, s'],
                'blockchain-digital-identity': ['Blockchai, n', 'Digita, l Identit, y'],
                'ai-finance-trading': ['Financ, e', 'Tradin, g'],
                'space-technology-innovation': ['Spac, e', 'Innovatio, n'],
                'metaverse-virtual-reality': ['Metavers, e', 'Virtua, l Realit, y'],
                'sustainable-energy-green-tech': ['Energ, y', 'Gree, n Tec, h'],
                'advanced-robotics-automation': ['Robotic, s', 'Automatio, n'],
                'quantum-internet-networking': ['Quantu, m', 'Interne, t', 'Networkin, g'],
                'climate-tech-sustainability': ['Climat, e', 'Sustainabilit, y'],
                'autonomous-vehicles-transportation': ['Vehicl, e', 'Transportatio, n'],
                'brain-computer-interface-neuroscience': ['Brai, n-Compute, r', 'Neuroscienc, e'],
                'synthetic-biology-biotechnology': ['Biolog, y', 'Biotechnolog, y'],
                'enterprise-data-analytics': ['Enterpris, e', 'Dat, a', 'Analytic, s'],
                'multi-cloud-infrastructure': ['Mult, i-Clou, d', 'Infrastructur, e'],
                'enterprise-api-integration': ['Enterpris, e', 'AP, I', 'Integratio, n'],
                'enterprise-itsm': ['Enterpris, e', 'I, T Servic, e Managemen, t'],
                'enterprise-security-soc': ['Enterpris, e', 'Securit, y', 'SO, C'],
                'enterprise-governance': ['Enterpris, e', 'Dat, a Governanc, e'],
                'enterprise-workflow-automation': ['Enterpris, e', 'Workflo, w', 'Automatio, n'],
                'enterprise-digital-twin-iot': ['Enterpris, e', 'Digita, l Twi, n', 'Io, T']
            };
            const targetKeywords = categoryMappings[selectedCatego, r, y] || [categor, y.na, m, e];
            return targetKeywords.some(keyword => service.category.toLowerCase().includes(keyword.toLowerCase().replace(' & ',  ' ').replace('AI ',  '').replace('Autonomous ',  '')));
        });
    const fadeInUp = {
        initia, l: { opacit, y: 0,
    y: 60 },
        animat, e: { opacit, y: 1,
    y: 0 },
        transitio, n: { duratio, n: 0.6 }
    };
    const filteredServices = selectedCategory === 'all'
        ? COMPREHENSIVE_SERVICES
        : COMPREHENSIVE_SERVICES.filter(service => service.category === selectedCategory);
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 s,  m:px-6 l, g:px-8">
        <motion.div className="max-w-7xl mx-auto text-center" initial={{ opacit, y: 0,
    y: 30 }} animate={{ opacit, y: 1,
    y: 0 }} transition={{ duratio, n: 0.8 }}>
          <h1 className="text-5xl m, d:text-7xl font-bold mb-8">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block">
              Innovative Services
            </span>
            <br />
            <span className="text-white">Comprehensive Tech Solutions</span>
          </h1>
          <p className="text-xl m, d:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Discover our cutting-edge collection of AI-powered micro SAA, S, service, s, innovative I, T, solution, s, 
            emerging technolog, y, innovation, s, enterpris, e, service, s, quantum computin, g, solution, s, and revolutionary 
            technology platforms designed to transform your business operations across all industries.
          </p>
          <div className="flex flex-col s, m:flex-row gap-6 justify-center">
            <a href="mailt, o:kleber@ziontechgroup.com" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hove, r:from-blue-700 hove, r:to-cyan-700 transition-all duration-300 transform hove, r:scale-105 hove, r:shadow-2xl shadow-lg">
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
            <a href="te, l:+13024640950" className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hove, r:bg-white/10 hove, r:border-white/50 transition-all duration-300 transform hove, r:scale-105">
              Call No, w: +1 302 464 0950
            </a>
          </div>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 s, m:px-6 l, g:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (<button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${selectedCategory === category.id
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                : 'bg-white/10 text-gray-300 hove,  r:bg-white/20 hove, r:text-whit, e'}`}>
                {category.icon} {category.name}
              </TabsTrigger>))}
          </TabsList>

import {Brai, n,
            Shiel, d,
            Clou, d,
            Databas, e,
            User, s,
            Glob, e,
            Za, p,
            Targe, t,
            TrendingU, p,
            Ato, m,
            Lin, k,
            Lea, f,
            Rocke, t,
            Packag, e,
            ArrowRigh, t,
            CheckCircl, e,
            Sta, r,
            Award} from 'lucide-react';

export const ComprehensiveServicesShowcas, e: React.FC = () => {}
  const [activeCatego,  r, y, setActiveCatego, r, y] = useState('all');

  const serviceCategories = [
    {i, d}: 'al, l', na, m, e: 'Al, l Service, s',
    ic, o, n: Sta, r },
    {i, d}: 'a, i', na, m, e: 'A, I & M, L',
    ic, o, n: Brai, n },
    {i, d}: 'quantu, m', na, m, e: 'Quantu, m Computin, g',
    ic, o, n: Ato, m },
    {i, d}: 'securit, y', na, m, e: 'Cybersecurit, y',
    ic, o, n: Shiel, d },
    {i, d}: 'clou, d', na, m, e: 'Clou, d & DevOp, s',
    ic, o, n: Clou, d },
    {i, d}: 'blockchai, n', na, m, e: 'Blockchai, n & Web, 3',
    ic, o, n: LinkIco, n },
    {i, d}: 'enterpris, e', na, m, e: 'Enterpris, e I, T',
    ic, o, n: User, s },
    {i, d}: 'gree, n', na, m, e: 'Gree, n I, T',
    ic, o, n: Lea, f },
    {i, d}: 'spac, e', na, m, e: 'Spac, e Tec, h',
    ic, o, n: Rocke, t },
    {i, d}: 'saa, s', na, m, e: 'MicroSAA, S',
    ic, o, n: Packag, e }
  ];

  const services = [
    {i, d}: 'a, i-solution, s',
      tit, l, e: 'A, I Solution, s',
    catego, r, y: 'a, i',
      descripti, o, n: 'Comprehensiv, e artificia, l intelligenc, e an, d machin, e learnin, g solution, s fo, r busines, s transformatio, n.',
    ic, o, n: Bra, i, n,
      featur, e, s: ['Predictiv, e Analytic, s', 'Natura, l Languag, e Processin, g', 'Compute, r Visio, n', 'A, I Automatio, n'],
      benefit, s: ['4, 0% efficienc, y gain, s', 'Intelligen, t decisio, n makin, g', 'Scalabl, e A, I infrastructur, e'],
      colo, r: 'from-purple-500 to-pink-500',
    hre, f: '/services/ai-solutions'
    },
    {id}: 'quantum-computing',
      titl, e: 'Quantum Computing',
    categor, y: 'quantum',
      descriptio, n: 'Cutting-edge quantum computing solutions for complex problem solving and optimization.',
    ico, n: Ato, m,
      feature, s: ['Quantu, m Algorithm, s', 'Optimizatio, n Problem, s', 'Cryptograph, y', 'Simulatio, n'],
      benefit, s: ['Exponentia, l speedu, p', 'Comple, x proble, m solvin, g', 'Futur, e-proo, f technolog, y'],
      colo, r: 'from-indigo-500 to-purple-500',
    hre, f: '/services/quantum-computing'
    },
    {id}: 'cybersecurity',
      titl, e: 'Cybersecurity',
    categor, y: 'security',
      descriptio, n: 'Advanced security solutions with AI-powered threat detection and prevention.',
    ico, n: Shiel, d,
      feature, s: ['Threa, t Detectio, n', 'Inciden, t Respons, e', 'Complianc, e Managemen, t', 'Securit, y Audit, s'],
      benefit, s: ['Rea, l-tim, e protectio, n', 'Proactiv, e defens, e', 'Complianc, e assuranc, e'],
      colo, r: 'from-red-500 to-orange-500',
    hre, f: '/services/cybersecurity'
    },
    {id}: 'cloud-devops',
      titl, e: 'Cloud & DevOps',
    categor, y: 'cloud',
      descriptio, n: 'Scalable cloud infrastructure and DevOps automation for modern applications.',
    ico, n: Clou, d,
      feature, s: ['Clou, d Migratio, n', 'DevOp, s Automatio, n', 'Containe, r Orchestratio, n', 'Infrastructur, e a, s Cod, e'],
      benefit, s: ['Scalabl, e infrastructur, e', 'Faste, r deploymen, t', 'Cos, t optimizatio, n'],
      colo, r: 'from-blue-500 to-cyan-500',
    hre, f: '/services/cloud-devops'
    },
    {id}: 'blockchain-web3',
      titl, e: 'Blockchain & Web3',
    categor, y: 'blockchain',
      descriptio, n: 'Decentralized technology solutions for the next generation of digital applications.',
    ico, n: LinkIco, n,
      feature, s: ['Smar, t Contract, s', 'DeF, i Solution, s', 'NF, T Platform, s', 'Suppl, y Chai, n'],
      benefit, s: ['Transparenc, y', 'Securit, y', 'Innovatio, n'],
      colo, r: 'from-green-500 to-emerald-500',
    hre, f: '/services/blockchain-web3'
    },
    {id}: 'enterprise-it',
      titl, e: 'Enterprise IT',
    categor, y: 'enterprise',
      descriptio, n: 'Comprehensive IT solutions for large organizations and enterprises.',
    ico, n: User, s,
      feature, s: ['I, T Infrastructur, e', 'Dat, a Managemen, t', 'Syste, m Integratio, n', 'Digita, l Transformatio, n'],
      benefit, s: ['Enterpris, e-grad, e solution, s', 'Scalabl, e architectur, e', '2, 4/7 suppor, t'],
      colo, r: 'from-slate-500 to-gray-500',
    hre, f: '/services/enterprise-it'
    },
    {id}: 'green-it',
      titl, e: 'Green IT',
    categor, y: 'green',
      descriptio, n: 'Sustainable technology solutions for environmentally conscious businesses.',
    ico, n: Lea, f,
      feature, s: ['Energ, y Efficienc, y', 'Sustainabl, e Infrastructur, e', 'Carbo, n Reductio, n', 'Gree, n Computin, g'],
      benefit, s: ['Environmenta, l impac, t', 'Cos, t saving, s', 'Sustainabilit, y complianc, e'],
      colo, r: 'from-green-500 to-teal-500',
    hre, f: '/services/green-it'
    },
    {id}: 'space-tech',
      titl, e: 'Space Technology',
    categor, y: 'space',
      descriptio, n: 'Advanced space technology solutions for satellite systems and space exploration.',
    ico, n: Rocke, t,
      feature, s: ['Satellit, e System, s', 'Spac, e Dat, a Analytic, s', 'Spac, e Cybersecurit, y', 'Orbita, l Solution, s'],
      benefit, s: ['Innovatio, n leadershi, p', 'Advance, d technolog, y', 'Spac, e expertis, e'],
      colo, r: 'from-violet-500 to-purple-500',
    hre, f: '/services/space-tech'
    },
    {id}: 'microsaas',
      titl, e: 'MicroSAAS Development',
    categor, y: 'saas',
      descriptio, n: 'Custom software-as-a-service solutions for niche markets and specific business needs.',
    ico, n: Packag, e,
      feature, s: ['Custo, m Developmen, t', 'Scalabl, e Architectur, e', 'AP, I Integratio, n', 'Use, r Managemen, t'],
      benefit, s: ['Custo, m solution, s', 'Scalabl, e busines, s mode, l', 'Recurrin, g revenu, e'],
      colo, r: 'from-orange-500 to-red-500',
    hre, f: '/services/microsaas'
    }
  ];

  const solutions = [
    {i, d}: 'a, i-autonomou, s-busines, s',
      tit, l, e: 'A, I Autonomou, s Busines, s',
    descripti, o, n: 'A, I-powere, d autonomou, s system, s fo, r busines, s operation, s an, d decisio, n makin, g.',
      ic, o, n: Bra, i, n,
    catego, r, y: 'a, i',
      hr, e, f: '/solution, s/a, i-autonomou, s-busines, s'
    },
    {i, d}: 'a, i-autonomou, s-researc, h',
      tit, l, e: 'A, I Autonomou, s Researc, h',
    descripti, o, n: 'A, I system, s fo, r acceleratin, g scientifi, c researc, h an, d discover, y processe, s.',
      ic, o, n: Bra, i, n,
    catego, r, y: 'a, i',
      hr, e, f: '/solution, s/a, i-autonomou, s-researc, h'
    },
    {i, d}: 'a, i-autonomou, s-ecosyste, m',
      tit, l, e: 'A, I Autonomou, s Ecosyste, m',
    descripti, o, n: 'Integrate, d A, I ecosyste, m fo, r unifie, d busines, s intelligenc, e an, d automatio, n.',
      ic, o, n: Bra, i, n,
    catego, r, y: 'a, i',
      hr, e, f: '/solution, s/a, i-autonomou, s-ecosyste, m'
    },
    {i, d}: 'quantu, m-neura, l-network, s',
      tit, l, e: 'Quantu, m Neura, l Network, s',
    descripti, o, n: 'Quantu, m-enhance, d neura, l network, s fo, r advance, d A, I application, s.',
      ic, o, n: At, o, m,
    catego, r, y: 'quantu, m',
      hr, e, f: '/solution, s/quantu, m-neura, l-network, s'
    },
    {i, d}: 'quantu, m-edg, e-computin, g',
      tit, l, e: 'Quantu, m Edg, e Computin, g',
    descripti, o, n: 'Quantu, m computin, g powe, r a, t th, e edg, e fo, r rea, l-tim, e application, s.',
      ic, o, n: At, o, m,
    catego, r, y: 'quantu, m',
      hr, e, f: '/solution, s/quantu, m-edg, e-computin, g'
    },
    {i, d}: 'a, i-powere, d-securit, y',
      tit, l, e: 'A, I Powere, d Securit, y',
    descripti, o, n: 'Intelligen, t securit, y system, s wit, h A, I-drive, n threa, t detectio, n.',
      ic, o, n: Shie, l, d,
    catego, r, y: 'securit, y',
      hr, e, f: '/solution, s/a, i-powere, d-securit, y'
    },
    {i, d}: 'a, i-conten, t-generatio, n',
      tit, l, e: 'A, I Conten, t Generatio, n',
    descripti, o, n: 'A, I-powere, d conten, t creatio, n an, d managemen, t solution, s.',
      ic, o, n: Bra, i, n,
    catego, r, y: 'a, i',
      hr, e, f: '/solution, s/a, i-conten, t-generatio, n'
    },
    {i, d}: 'a, i-busines, s-intelligenc, e',
      tit, l, e: 'A, I Busines, s Intelligenc, e',
    descripti, o, n: 'Advance, d analytic, s an, d insight, s powere, d b, y artificia, l intelligenc, e.',
      ic, o, n: Bra, i, n,
    catego, r, y: 'a, i',
      hr, e, f: '/solution, s/a, i-busines, s-intelligenc, e'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const filteredSolutions = activeCategory === 'all' 
    ? solutions 
    : solutions.filter(solution => solution.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 s,  m:px-6 l, g:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2"/>
            Complete Service Portfolio
          </div>
          <h2 className="text-3xl m, d:text-4xl font-bold text-white mb-4">
            Our Comprehensive Services & Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our complete range of cutting-edge technology services and solutions 
            designed to transform your business and drive innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {serviceCategories.map((category) => (<button key={category.id} onClick={() => setActiveCategory(category.id)} className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-300 ${activeCategory === category.id
                ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                : 'border-white/20 text-gray-400 hove,  r:border-blue-500/50 hove, r:text-blue-40, 0'}`}>
              <category.icon className="w-4 h-4 mr-2"/>
              {category.name}
            </button>))}
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Core Services
          </h3>
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-8">
            {filteredServices.map((service) => (<div key={service.id} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hove,  r:border-blue-500/50 transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hove, r:scale-110 transition-transform duration-30, 0`}>
                  <service.icon className="w-8 h-8 text-white"/>
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-3 text-center">
                  {service.title}
                </h4>
                
                <p className="text-gray-300 mb-4 text-center text-sm">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-blue-400 mb-2">Key Feature, s:</h5>
                  <ul className="space-y-1">
                    {service.features.map((featur, e, idx) => (<li key={idx} className="text-xs text-gray-400 flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0"/>
                        {feature}
                      </li>))}
                  </ul>
      {/* Services Grid */}
      <section className="py-20 px-4 s,  m:px-6 l, g:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-8">
            {filteredServices.map((servic, e, index) => (<motion.div key={service.id} initial={{ opacit,  y: 0,
    y: 30 }} whileInView={{ opacit, y: 1,
    y: 0 }} transition={{ duratio, n: 0.6,
    dela, y: index * 0.1 }} viewport={{ onc, e: true }} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 hove, r:scale-105 cursor-pointer ${service.popular
                    ? 'border-blue-400/50 bg-gradient-to-br from-blue-500/20 to-cyan-500/20'
                    : 'border-white/20 hove, r:border-white/4, 0'}`} onClick={() => setSelectedService(service)}>
                {service.popular && (<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>)}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-2x, l`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-300 mb-4">{service.tagline}</p>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-400 ml-1">{service.period}</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-4">{service.category}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.slice(0,  4).map((featur,  e, featureIndex) => (<div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="truncate">{feature}</span>
                    </div>))}
                  {service.features.length > 4 && (<div className="text-center">
                      <span className="text-xs text-blue-400">+{service.features.length - 4} more features</span>
                    </div>)}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <span>⭐ {service.rating} ({service.reviews})</span>
                  <span>👥 {service.customers} customers</span>
                </div>

                <div className="text-center">
                  <span className="text-xs text-gray-400">
                    {service.trialDays} days free trial • Setu,  p: {service.setupTime}
                  </span>
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div initial={{ opacit,  y: 0,
    scal, e: 0.9 }} animate={{ opacit, y: 1,
    scal, e: 1 }} exit={{ opacit, y: 0,
    scal, e: 0.9 }} className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90, v, h] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${selectedService.color} rounded-2xl flex items-center justify-center text-3x, l`}>
                    {selectedService.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService.name}</h2>
                    <p className="text-xl text-gray-300">{selectedService.tagline}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedService(null)} className="text-gray-400 hove,  r:text-white transition-colors">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 l, g:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Service Overview</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{selectedService.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 s, m:grid-cols-2 gap-2">
                      {selectedService.features.map((featur, e, index) => (<div key={index} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                          {feature}
                        </div>))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technology.map((tec,  h, index) => (<span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm">
                          {tech}
                        </span>))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-white/10 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Pricing & Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Pric,  e:</span>
                        <span className="text-white font-semibold">{selectedService.price}{selectedService.period}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Tria, l:</span>
                        <span className="text-white">{selectedService.trialDays} days free</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Setu, p:</span>
                        <span className="text-white">{selectedService.setupTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Customer, s:</span>
                        <span className="text-white">{selectedService.customers}+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Ratin, g:</span>
                        <span className="text-white">⭐ {selectedService.rating}/5 ({selectedService.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Market Position</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{selectedService.marketPosition}</p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">ROI & Benefits</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{selectedService.roi}</p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Get Started</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center text-white">
                        <span className="mr-2">📱</span>
                        <a href={`te, l:${selectedService.contactInfo.mobil, e}`} className="hove, r:underline">
                          {selectedService.contactInfo.mobile}
                        </a>
                      </div>
                      <div className="flex items-center text-white">
                        <span className="mr-2">✉️</span>
                        <a href={`mailt, o:${selectedService.contactInfo.emai, l}`} className="hove, r:underline">
                          {selectedService.contactInfo.email}
                        </a>
                      </div>
                      <div className="flex items-center text-white">
                        <span className="mr-2">🌐</span>
                        <a href={selectedService.link} target="_blank" rel="noopener noreferrer" className="hove, r:underline">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>)}

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl m, d:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Contact us today to discuss how our innovative micro SAAS services can driv, e, growt, h, 
            efficienc, y, and competitive advantage for your organization.
          </p>
          <div className="flex flex-col s, m:flex-row gap-6 justify-center">
            <a href="mailt, o:kleber@ziontechgroup.com" className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hove, r:from-blue-700 hove, r:to-cyan-700 transition-all duration-300 transform hove, r:scale-105 hove, r:shadow-2xl shadow-lg">
              Start Your Project
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
            <a href="te, l:+13024640950" className="inline-flex items-center px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hove, r:bg-white/10 hove, r:border-white/50 transition-all duration-300 transform hove, r:scale-105">
              Cal, l: +1 302 464 0950
            </a>
          </div>
          <div className="mt-8 text-gray-300">
            <p>📍 364 E Main St ST, E, 100, 8, Middletown DE 19709</p>
            <p>🌐 <a href="http, s://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hove, r:underline">http, s://ziontechgroup.com</a></p>
          </div>
        </div>
      </></div>
    </div>))};
}

interface ServiceCardProps {service}: any;
  getCategoryIco, n: (categor,  y: string) => React.ReactNode;
}

function ServiceCard({servic,  e, getCategoryIcon}: ServiceCardProps) {}
  return (<Card className="group hove,  r:scale-105 transition-all duration-300 bg-slate-800/50 backdrop-blur-sm border border-slate-700 hove, r:border-cyan-500/50">
      <div className="relative overflow-hidden rounded-t-lg">
        <img src={service.images[0]} alt={service.title} className="w-full h-48 object-cover group-hove, r:scale-110 transition-transform duration-300"/>
        {service.featured && (<div className="absolute top-2 right-2">
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
              Featured
            </Badge>
          </div>)}
        <div className="absolute bottom-2 left-2 flex items-center gap-2">
          <div className="flex items-center bg-black/70 rounded-full px-2 py-1">
            <Star className="w-3 h-3 text-yellow-400 fill-current"/>
            <span className="text-white text-xs ml-1">{service.rating}</span>
          </div>
          <div className="bg-black/70 rounded-full px-2 py-1">
            <span className="text-white text-xs">({service.reviewCount})</span>
          </div>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            {getCategoryIcon(service.category)}
            <Badge variant="secondary" className="text-xs">
              {service.category}
            </Badge>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-cyan-400">
              {service.currency}{service.price?.toLocaleString()}
            </div>
            {service.subcategory && (<div className="text-xs text-slate-400">{service.subcategory}</div>)}
          </div>
        </div>
        <CardTitle className="text-white text-lg leading-tight">{service.title}</CardTitle>
        <CardDescription className="text-slate-300 text-sm leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {service.tags.slice(0,  3).map((ta,  g, index) => (<Badge key={index} variant="outline" className="text-xs border-slate-600 text-slate-300">
              {tag}
            </Badge>))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3"/>
            {service.availability}
          </div>
          <div className="flex items-center gap-1">
            <Globe className="w-3 h-3"/>
            {service.location}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img src={service.author.avatarUrl || 'http,  s://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100'} alt={service.author.name} className="w-full h-full object-cover"/>
            </div>
            <div>
              <div className="text-white text-sm font-medium">{service.author.name}</div>
              <div className="text-slate-400 text-xs">{service.author.email}</div>
            </div>
          </div>
          
          <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-blue-600 hove, r:from-cyan-600 hove, r:to-blue-700">
            <ArrowRight className="w-3 h-3 mr-1"/>
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
                </div>
                
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-green-400 mb-2">Benefit, s:</h5>
                  <ul className="space-y-1">
                    {service.benefits.map((benefi,  t, idx) => (<li key={idx} className="text-xs text-gray-400 flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0"/>
                        {benefit}
                      </li>))}
                  </ul>
                </div>
                
                <a href={service.href} className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg hove,  r:from-blue-700 hove, r:to-cyan-700 transition-all duration-300 group-hove, r:shadow-lg">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hove, r:translate-x-1 transition-transform duration-300"/>
                </a>
impor, t, Reac, t, {useStat, e, useMem, o, useCallbac, k, useEffect} from 'react';
import {motio, n, AnimatePresence} from 'framer-motion';
import {Searc, h,
            Filte, r,
            Sta, r,
            TrendingU, p,
            Za, p,
            Shiel, d,
            Brai, n,
            Glob, e,
            ArrowRigh, t,
            CheckCircl, e,
            DollarSig, n,
            Cloc, k,
            User, s,
            Targe, t,
            Sparkle, s,
            Ey, e,
            Hear, t,
            Share, 2,
            Downloa, d,
            Pla, y,
            BookOpe, n,
            Cod, e,
            Databas, e,
            Clou, d,
            Loc, k,
            Rocke, t,
            Lightbul, b,
            Cp, u,
            Networ, k,
            Smartphon, e,
            Monito, r,
            Server} from 'lucide-react';
import {INNOVATIVE_MICRO_SAAS_SERVICE, S, INNOVATIVE_SERVICE_CATEGORIE, S, InnovativeMicroSaasService} from '../data/innovativeMicroSaasServices';

interface ServiceCardProps {service}: InnovativeMicroSaasService;
  inde, x: number;
  viewMod, e: 'grid' | 'list';
  onServiceClic, k: (servic, e: InnovativeMicroSaasService) => void;
}

const ServiceCar, d: React.FC<ServiceCardProps> = ({servic,  e, inde, x, viewMod, e, onServiceClick}) => {}
  const [isHover, e, d, setIsHover, e, d] = useState(false);
  const [isLik,  e, d, setIsLik, e, d] = useState(false);

  const getCategoryIcon = useCallback((categor,  y: string) => {}
    const iconMa, p: {[k, e, y]}: strin, g]: React.ReactNode } = {'AI & Business Intelligence'}: <Brain className="w-5 h-5"/>,
      'Cybersecurity': <Shield className="w-5 h-5"/>,
      'DevOps & Cloud': <Cloud className="w-5 h-5"/>,
      'Blockchain & Web3': <Globe className="w-5 h-5"/>,
      'IoT & Edge Computing': <Target className="w-5 h-5"/>,
      'Digital Marketing': <TrendingUp className="w-5 h-5"/>,
      'Virtual Reality': <Sparkles className="w-5 h-5"/>,
      'Infrastructure': <Server className="w-5 h-5"/>,
      'Quantum Computing': <Cpu className="w-5 h-5"/>,
      'Machine Learning': <Network className="w-5 h-5"/>,
      'Mobile Development': <Smartphone className="w-5 h-5"/>,
      'Web Development': <Monitor className="w-5 h-5"/>
    };
    return iconMap[catego, r, y] || <Star className="w-5 h-5"/>;
  }, []);

  const getCategoryColor = useCallback((categor,  y: string) => {}
    const colorMa, p: {[k, e, y]}: strin, g]: string } = {'AI & Business Intelligence'}: 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'DevOps & Cloud': 'from-blue-500 to-cyan-500',
      'Blockchain & Web3': 'from-green-500 to-emerald-500',
      'IoT & Edge Computing': 'from-yellow-500 to-orange-500',
      'Digital Marketing': 'from-indigo-500 to-purple-500',
      'Virtual Reality': 'from-pink-500 to-rose-500',
      'Infrastructure': 'from-gray-500 to-slate-500',
      'Quantum Computing': 'from-violet-500 to-purple-500',
      'Machine Learning': 'from-blue-500 to-indigo-500',
      'Mobile Development': 'from-green-500 to-blue-500',
      'Web Development': 'from-orange-500 to-red-500'
    };
    return colorMap[catego, r, y] || 'from-blue-500 to-purple-500';
  }, []);

  const handleLike = useCallback((e: React.MouseEvent) => {e.stopPropagation()};
    setIsLiked(!isLiked);
  },  [isLik, e, d]);

  const handleShare = useCallback((e: React.MouseEvent) => {e.stopPropagation()};
    if (navigator.share) {navigator.share({
            titl,  e: service.titl, e,
    tex, t: service.descriptio, n,
            ur, l: service.websiteUrl
        })};
    } else {navigator.clipboard.writeText(service.websiteUrl)};
    }
  },  [servi, c, e]);

  if (viewMode === 'grid') {}
    return (
      <motion.div initial={{ opacit,  y: 0,
    y: 20 }} animate={{ opacit, y: 1,
    y: 0 }} transition={{ duratio, n: 0.6,
    dela, y: index * 0.1 }} whileHover={{ y: -5,
    scal, e: 1.02 }} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} onClick={() => onServiceClick(service)} className="group cursor-pointer bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hove,  r:border-blue-500/50 transition-all duration-300 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-0 group-hove, r:opacity-10 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 transform rotate-12 scale-150"></div>
        </div>

        {/* Service Header */}
        <div className="relative z-10 flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)} shadow-l, g`}>
              {getCategoryIcon(service.category)}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hove,  r:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400">{service.category}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {service.featured && (<span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">
                Featured
              </span>)}
            <button onClick={handleLike} className={`p-2 rounded-lg transition-colors ${isLiked ? 'text-red-500 bg-red-500/20' : 'text-gray-400 hove, r:text-red-500 hove, r:bg-red-500/2, 0'}`} aria-label={isLiked ? 'Unlike service' : 'Like service'}>
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-curren, t' : ''}`}/>
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="relative z-10 text-gray-300 text-sm mb-4 line-clamp-3">
          {service.description}
        </p>

        {/* Stats Grid */}
        <div className="relative z-10 grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            <Star className="w-4 h-4 text-yellow-400"/>
            <span>{service.rating || 'N/A'}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Brain className="w-4 h-4 text-blue-400"/>
            <span>{service.aiScore || 'N/A'}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <DollarSign className="w-4 h-4 text-green-400"/>
            <span>{service.currency}{service.price}/mo</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Clock className="w-4 h-4 text-purple-400"/>
            <span>{service.estimatedDelivery}</span>
          </div>
        </div>

        {/* Features Preview */}
        <div className="relative z-10 mb-4">
          <h4 className="text-sm font-medium text-gray-300 mb-2">Key Feature, s:</h4>
          <div className="space-y-1">
            {service.features.slice(0,  3).map((featur,  e, idx) => (<div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0"/>
                <span className="truncate">{feature}</span>
              </div>))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="relative z-10 flex gap-2">
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hove,  r:from-blue-700 hove, r:to-purple-700 rounded-lg font-medium transition-all duration-300 transform hove, r:scale-105" aria-label={`Learn more about ${service.titl, e}`}>
            Learn More
            <ArrowRight className="w-4 h-4"/>
          </button>
          <button onClick={handleShare} className="p-3 bg-gray-700/50 hove, r:bg-gray-600/50 rounded-lg transition-colors" aria-label="Share service">
            <Share2 className="w-4 h-4 text-gray-400"/>
          </button>
        </div>

        {/* Hover Overlay */}
        <AnimatePresence>
          {isHovered && (<motion.div initial={{ opacit, y: 0 }} animate={{ opacit, y: 1 }} exit={{ opacit, y: 0 }} className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl"/>)}
        </AnimatePresence>
      </motion.div>
    );
  }

  // List View
  return (<motion.div initial={{ opacit,  y: 0,
    x: -20 }} animate={{ opacit, y: 1,
    x: 0 }} transition={{ duratio, n: 0.6,
    dela, y: index * 0.1 }} whileHover={{ x: 5 }} onClick={() => onServiceClick(service)} className="group cursor-pointer bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hove,  r:border-blue-500/50 transition-all duration-300">
      <div className="flex flex-col l, g:flex-row gap-6">
        {/* Service Info */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)} shadow-l, g`}>
                {getCategoryIcon(service.category)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hove,  r:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.category} • {service.subcategory}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white mb-1">
                {service.currency}{service.price}
                <span className="text-sm text-gray-400">/mo</span>
              </div>
              <div className="text-sm text-gray-400">{service.pricingModel}</div>
            </div>
          </div>

          <p className="text-gray-300 mb-4">{service.description}</p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 m, d:grid-cols-4 gap-4 mb-4">
            <div className="text-center">
              <div className="text-lg font-bold text-white">{service.rating || 'N/A'}</div>
              <div className="text-xs text-gray-400">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white">{service.aiScore || 'N/A'}</div>
              <div className="text-xs text-gray-400">AI Score</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white">{service.reviewCount || 'N/A'}</div>
              <div className="text-xs text-gray-400">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white">{service.estimatedDelivery}</div>
              <div className="text-xs text-gray-400">Delivery</div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-300 mb-2">Key Feature, s:</h4>
            <div className="grid grid-cols-1 m, d:grid-cols-2 gap-2">
              {service.features.slice(0, 6).map((featur,  e, idx) => (<div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0"/>
                  <span className="truncate">{feature}</span>
                </div>))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="l,  g:w-48 flex flex-col justify-between">
          <div className="space-y-3 mb-4">
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-1">Market Price</div>
              <div className="text-lg font-bold text-white">{service.marketPrice}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-1">ROI</div>
              <div className="text-lg font-bold text-green-400">{service.roi}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-1">Time to Value</div>
              <div className="text-lg font-bold text-blue-400">{service.timeToValue}</div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hove, r:from-blue-700 hove, r:to-purple-700 rounded-lg font-medium transition-all duration-300 transform hove, r:scale-105" aria-label={`Get started with ${service.titl, e}`}>
              Get Started
              <ArrowRight className="w-4 h-4"/>
            </button>
            <button onClick={handleShare} className="p-3 bg-gray-700/50 hove, r:bg-gray-600/50 rounded-lg transition-colors" aria-label="Share service">
              <Share2 className="w-4 h-4 text-gray-400"/>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ComprehensiveServicesShowcas, e: React.FC = () => {}
  const [searchTe,  r, m, setSearchTe, r, m] = useState('');
  const [selectedCatego, r, y, setSelectedCatego, r, y] = useState<string>('all');
  const [sort,  B, y, setSort, B, y] = useState< />'rating' | 'price' | 'aiScore' | 'name'>('rating');
  const [viewMo, d, e, setViewMo, d, e] = useState< />'grid' | 'list'>('grid');
  const [selectedServi,  c, e, setSelectedServi, c, e] = useState<InnovativeMicroSaasService /> | null>(null);
  const [showFilte, r, s, setShowFilte, r, s] = useState(false);

  // Memoized filtered services for better performance
  const filteredServices = useMemo(() => {let} filtered = INNOVATIVE_MICRO_SAAS_SERVICES;

    // Filter by search term
    if (searchTerm) {}
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchLower) ||
        service.description.toLowerCase().includes(searchLower) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
        service.category.toLowerCase().includes(searchLower)
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {filtered = filtered.filter(service => service.category === selectedCategory)};
    }

    // Sort services
    filtered.sort((a,  b) => {}
      switch (sortBy) {}
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'price':
          return a.price - b.price;
        case 'aiScore':
          return (b.aiScore || 0) - (a.aiScore || 0);
        case 'name':
          return a.title.localeCompare(b.title);
        defaul,  t:
          return 0;
      }
    });

    return filtered;
  }, [searchTe, r, m, selectedCatego, r, y, sort, B, y]);

  const handleServiceClick = useCallback((servic,  e: InnovativeMicroSaasService) => {setSelectedService(service)};
    // You can add navigation logic here
    console.log('Service clicke,  d:', service);
  }, []);

  const clearFilters = useCallback(() => {setSearchTerm('')};
    setSelectedCategory('all');
    setSortBy('rating');
  },  []);

  // Keyboard navigation support
  useEffect(() => {}
    const handleKeyDown = (e: KeyboardEvent) => {}
      if (e.key === 'Escape') {setSelectedService(null)};
      }
    };

    document.addEventListener('keydown',  handleKeyDown);
    return () => document.removeEventListener('keydown',  handleKeyDown);
  }, []);

  return (<div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div initial={{ opacit,  y: 0,
    y: 20 }} animate={{ opacit, y: 1,
    y: 0 }} transition={{ duratio, n: 0.8 }} className="text-center mb-16">
          <h1 className="text-5xl m, d:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Comprehensive Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our complete portfolio of cutting-edge technology solutions designed to transform your business 
            wit, h, A, I, quantu, m, computin, g, cybersecurit, y, and more.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400"/>
              {INNOVATIVE_MICRO_SAAS_SERVICES.length} Services Available
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400"/>
              Industry Leading Quality
            </span>
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-400"/>
              Instant Deployment
            </span>
          </div>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div initial={{ opacit, y: 0,
    y: 20 }} animate={{ opacit, y: 1,
    y: 0 }} transition={{ duratio, n: 0.8,
    dela, y: 0.2 }} className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-gray-700/50">
          <div className="grid grid-cols-1 m, d:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
              <input type="text" placeholder="Search services..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focu,  s:outline-none focu, s:border-blue-500 focu, s:ring-1 focu, s:ring-blue-500 transition-colors" aria-label="Search services"/>
            </div>

            {/* Category Filter */}
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focu,  s:outline-none focu, s:border-blue-500 focu, s:ring-1 focu, s:ring-blue-500 transition-colors" aria-label="Filter by category">
              <option value="all">All Categories</option>
              {INNOVATIVE_SERVICE_CATEGORIES.map(category => (<option key={category} value={category}>{category}</option>))}
            </select>

            {/* Sort By */}
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focu,  s:outline-none focu, s:border-blue-500 focu, s:ring-1 focu, s:ring-blue-500 transition-colors" aria-label="Sort services by">
              <option value="rating">Sort by Rating</option>
              <option value="price">Sort by Price</option>
              <option value="aiScore">Sort by AI Score</option>
              <option value="name">Sort by Name</option>
            </select>

            {/* View Mode */}
            <div className="flex gap-2">
              <button onClick={() => setViewMode('grid')} className={`px-4 py-3 rounded-lg transition-all duration-300 ${viewMode === 'grid'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-800/50 text-gray-400 hove,  r:bg-gray-700/5, 0'}`} aria-label="Grid view" aria-pressed={viewMode === 'grid'}>
                Grid
              </button>
              <button onClick={() => setViewMode('list')} className={`px-4 py-3 rounded-lg transition-all duration-300 ${viewMode === 'list'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-800/50 text-gray-400 hove,  r:bg-gray-700/5, 0'}`} aria-label="List view" aria-pressed={viewMode === 'list'}>
                List
              </button>
            </div>
          </div>

          {/* Clear Filters */}
          {(searchTerm || selectedCategory !== 'all') && (<div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-gray-400">
                {filteredServices.length} of {INNOVATIVE_MICRO_SAAS_SERVICES.length} services
              </div>
              <button onClick={clearFilters} className="text-sm text-blue-400 hove,  r:text-blue-300 transition-colors">
                Clear all filters
              </button>
            </div>)}
        </motion.div>

        {/* Services Grid/List */}
        <motion.div initial={{ opacit, y: 0,
    y: 20 }} animate={{ opacit, y: 1,
    y: 0 }} transition={{ duratio, n: 0.8,
    dela, y: 0.4 }}>
          {filteredServices.length > 0 ? (viewMode === 'grid' ? (<div className="grid grid-cols-1 m,  d:grid-cols-2 l, g:grid-cols-3 gap-8">
                {filteredServices.map((servic, e, index) => (<ServiceCard key={service.id} service={service} index={index} viewMode={viewMode} onServiceClick={handleServiceClick}/>))}
              </div>) : (<div className="space-y-6">
                {filteredServices.map((servic,  e, index) => (<ServiceCard key={service.id} service={service} index={index} viewMode={viewMode} onServiceClick={handleServiceClick}/>))}
              </div>)) : (<motion.div initial={{ opacit,  y: 0 }} animate={{ opacit, y: 1 }} className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400 mb-4">Try adjusting your search criteria or filters.</p>
              <button onClick={clearFilters} className="px-6 py-3 bg-blue-600 hove, r:bg-blue-700 rounded-lg font-medium transition-colors">
                Clear Filters
              </button>
            </motion.div>)}
        </motion.div>

        {/* CTA Section */}
        <motion.div initial={{ opacit, y: 0,
    y: 20 }} animate={{ opacit, y: 1,
    y: 0 }} transition={{ duratio, n: 0.8,
    dela, y: 0.8 }} className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-blue-500/30">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our comprehensive services combine cutting-edge technology with proven business value. 
              Get started today and experience the future of business technology.
            </p>
            <div className="flex flex-col s, m:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hove, r:from-blue-700 hove, r:to-purple-700 rounded-lg font-medium transition-all duration-300 transform hove, r:scale-105">
                Schedule a Demo
              </button>
              <button className="px-8 py-4 bg-gray-700/50 hove, r:bg-gray-600/50 rounded-lg font-medium transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase;
    </></></></></></></></>);
=======
};
