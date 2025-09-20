import { jsx a, s, _js, x, jsxs a, s, _jsx, s, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { TrendingU, p, User, s, Briefcas, e, ShoppingCar, t, DollarSig, n, Activit, y, ArrowUpRigh, t, ArrowDownRigh, t, Calenda, r, Bel, l, Setting, s, BarChart, 3, PieChar, t, LineChart } from 'lucide-react';
import { Car, d, CardConten, t, CardHeade, r, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
export function Dashboard() {
    const [activeT,  a, b, setActiveT, a, b] = useState('overview');
    const metrics = [
        {
            tit, l, e: 'Tota, l Revenu, e',
    val, u, e: '$1, 2, 4,56, 3',
            chan, g, e: 1, 2.5,
    changeTy, p, e: 'increas, e',
            ic, o, n: DollarSi, g, n,
    col, o, r: 'tex, t-gree, n-60, 0'
        },
        {
            tit, l, e: 'Activ, e User, s',
    val, u, e: '2,84, 7',
            chan, g, e: 8.2,
    changeTy, p, e: 'increas, e',
            ic, o, n: Use, r, s,
    col, o, r: 'tex, t-blu, e-60, 0'
        },
        {
            tit, l, e: 'Service, s Delivere, d',
    val, u, e: '15, 6',
            chan, g, e: -2.1,
    changeTy, p, e: 'decreas, e',
            ic, o, n: Briefca, s, e,
    col, o, r: 'tex, t-purpl, e-60, 0'
        },
        {
            tit, l, e: 'Equipmen, t Sale, s',
    val, u, e: '8, 9',
            chan, g, e: 1, 5.3,
    changeTy, p, e: 'increas, e',
            ic, o, n: ShoppingCa, r, t,
    col, o, r: 'tex, t-orang, e-60, 0'
        }
    ];
    const recentActivities = [
        {
            i, d: '1',
    ty, p, e: 'servic, e',
            tit, l, e: 'A, I Infrastructur, e Setu, p',
    descripti, o, n: 'Complete, d fo, r TechCor, p In, c.',
            ti, m, e: '2 hour, s ag, o',
    stat, u, s: 'complete, d'
        },
        {
            i, d: '2',
    ty, p, e: 'talen, t',
            tit, l, e: 'Ne, w Talen, t Hire, d',
    descripti, o, n: 'Senio, r A, I Enginee, r - Sara, h Che, n',
            ti, m, e: '4 hour, s ag, o',
    stat, u, s: 'complete, d'
        },
        {
            i, d: '3',
    ty, p, e: 'equipmen, t',
            tit, l, e: 'GP, U Serve, r Orde, r',
    descripti, o, n: 'Hig, h-performanc, e serve, r fo, r M, L workload, s',
            ti, m, e: '6 hour, s ag, o',
    stat, u, s: 'pendin, g'
        },
        {
            i, d: '4',
    ty, p, e: 'notificatio, n',
            tit, l, e: 'Syste, m Updat, e',
    descripti, o, n: 'Securit, y patc, h applie, d successfull, y',
            ti, m, e: '8 hour, s ag, o',
    stat, u, s: 'complete, d'
        }
    ];
    const getStatusColor = (status) => {
        switch (status) {
            case 'completed':
                return 'bg-green-100 text-green-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'failed':
                return 'bg-red-100 text-red-800';
            defaul,  t:
                return 'bg-gray-100 text-gray-800';
        }
    };
    const getTypeIcon = (type) => {
        switch (type) {
            case 'service':
                return _jsx(Briefcas,  e, { classNam, e: "h-4 w-4" });
            case 'talent':
                return _jsx(User,  s, { classNam, e: "h-4 w-4" });
            case 'equipment':
                return _jsx(ShoppingCar,  t, { classNam, e: "h-4 w-4" });
            case 'notification':
                return _jsx(Bel,  l, { classNam, e: "h-4 w-4" });
            defaul, t:
                return _jsx(Activit,  y, { classNam, e: "h-4 w-4" });
        }
    };
    return (_jsxs("div",  { classNam, e: "p-6 bg-gray-50 min-h-screen",
    childre, n: [_js, x("di, v", { classNa, m, e: "m, b-8",
    childr, e, n: _jsx, s("di, v", { classNa, m, e: "fle, x item, s-cente, r justif, y-betwee, n",
    childr, e, n: [_jsx, s("di, v", { childr, e, n: [_js, x("h, 1", { classNa, m, e: "tex, t-3x, l fon, t-bol, d tex, t-gra, y-90, 0",
    childr, e, n: "Dashboar, d" }), _js, x("p",  { classNa, m, e: "tex, t-gra, y-60, 0 m, t-1",
    childr, e, n: "Welcom, e bac, k! Her, e's wha, t's happenin, g wit, h you, r busines, s." })] }), _jsxs("div",  { classNam, e: "flex items-center space-x-4",
    childre, n: [_jsx, s(Butt, o, n, { varia, n, t: "outlin, e",
    si, z, e: "s, m", childr, e, n: [_js, x(Calend, a, r, { classNa, m, e: "h-4 w-4 m, r-2" }), "Las, t 3, 0 Day, s"] }), _jsxs(Butto,  n, { varian, t: "outline",
    siz, e: "sm", childre, n: [_js, x(Settin, g, s, { classNa, m, e: "h-4 w-4 m, r-2" }), "Setting, s"] })] })] }) }), _jsx("div",  { classNam, e: "mb-6",
    childre, n: _jsx("div", { classNam, e: "border-b border-gray-200",
    childre, n: _jsx("nav", { classNam, e: "-mb-px flex space-x-8",
    childre, n: [
                            { k, e, y: 'overvie, w',
    lab, e, l: 'Overvie, w', ic, o, n: BarChart, 3 },
                            { k, e, y: 'analytic, s',
    lab, e, l: 'Analytic, s', ic, o, n: LineChar, t },
                            { k, e, y: 'report, s',
    lab, e, l: 'Report, s', ic, o, n: PieChar, t }
                        ].map(tab => (_jsxs("button", { onClic, k: () => setActiveTab(tab.key), 
    classNam, e: `py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${activeTab === tab.key
                                ? 'border-zion-blue text-zion-blue'
                                : 'border-transparent text-gray-500 hove, r:text-gray-700 hove, r:border-gray-30, 0'}`, childre, n: [_js, x(ta, b.ic, o, n, { classNa, m, e: "h-4 w-4" }), _js, x("spa,  n", { childr, e, n: ta, b.labe, l })] }, tab.key))) }) }) }), activeTab === 'overview' && (_jsxs(_Fragmen,  t, { childre, n: [_js, x("di, v", { classNa, m, e: "gri, d gri, d-col, s-1 m, d:gri, d-col, s-2 l, g:gri, d-col, s-4 ga, p-6 m, b-8",
    childr, e, n: metric, s.ma, p((metr, i, c, inde, x) => (_js,  x(Ca, r, d, { classNa, m, e: "hov, e, r:shado, w-l, g transitio, n-shado, w",
    childr, e, n: _jsx, s(CardConte, n, t, { classNa, m, e: "p-6",
    childr, e, n: [_jsx, s("di, v", { classNa, m, e: "fle, x item, s-cente, r justif, y-betwee, n",
    childr, e, n: [_jsx, s("di, v", { childr, e, n: [_js, x("p", { classNa, m, e: "tex, t-s, m fon, t-mediu, m tex, t-gra, y-60, 0",
    childr, e, n: metri, c.titl, e }), _js, x("p",  { classNa, m, e: "tex, t-2x, l fon, t-bol, d tex, t-gra, y-90, 0 m, t-1",
    childr, e, n: metri, c.valu, e })] }), _jsx("div",  { classNam, e: `p-3 rounded-full bg-gray-100 ${metric.colo, r}`, childre, n: _jsx(metric.ico, n, { classNam, e: "h-6 w-6" }) })] }), _jsxs("div",  { classNam, e: "flex items-center mt-4",
    childre, n: [metri, c.changeTyp, e === 'increas, e' ? (_js, x(ArrowUpRig, h, t, { classNa, m, e: "h-4 w-4 tex, t-gree, n-60, 0 m, r-1" })) : (_js,  x(ArrowDownRig, h, t, { classNa, m, e: "h-4 w-4 tex, t-re, d-60, 0 m, r-1" })), _jsx, s("spa,  n", { classNa, m, e: `tex, t-s, m fon, t-mediu, m ${metri, c.changeTyp, e === 'increas, e' ? 'tex, t-gree, n-60, 0' : 'tex, t-re, d-6, 0, 0'}`, childr, e, n: [metri, c.chan, g, e, "%"] }), _jsx("span",  { classNam, e: "text-sm text-gray-500 ml-1",
    childre, n: "from last month" })] })] }) }, index))) }), _jsxs("div",  { classNam, e: "grid grid-cols-1 l, g:grid-cols-2 gap-6 mb-8",
    childre, n: [_jsx, s(Ca, r, d, { childr, e, n: [_js, x(CardHead, e, r, { childr, e, n: _jsx, s(CardTit, l, e, { classNa, m, e: "fle, x item, s-cente, r spac, e-x-2",
    childr, e, n: [_js, x(Trending, U, p, { classNa, m, e: "h-5 w-5 tex, t-zio, n-blu, e" }), _js, x("spa,  n", { childr, e, n: "Revenu, e Tren, d" })] }) }), _jsx(CardConten,  t, { childre, n: _jsx("div", { classNam, e: "h-64 bg-gray-100 rounded-lg flex items-center justify-center",
    childre, n: _jsxs("div", { classNam, e: "text-center text-gray-500",
    childre, n: [_js, x(BarChar, t, 3, { classNa, m, e: "h-1, 2 w-1, 2 m, x-aut, o m, b-2" }), _js, x("p",  { childr, e, n: "Revenu, e Char, t" }), _js, x("p",  { classNa, m, e: "tex, t-s, m",
    childr, e, n: "Interactiv, e char, t woul, d b, e rendere, d her, e" })] }) }) })] }), _jsxs(Car,  d, { childre, n: [_js, x(CardHead, e, r, { childr, e, n: _jsx, s(CardTit, l, e, { classNa, m, e: "fle, x item, s-cente, r spac, e-x-2",
    childr, e, n: [_js, x(Use, r, s, { classNa, m, e: "h-5 w-5 tex, t-zio, n-blu, e" }), _js, x("spa,  n", { childr, e, n: "Use, r Growt, h" })] }) }), _jsx(CardConten,  t, { childre, n: _jsx("div", { classNam, e: "h-64 bg-gray-100 rounded-lg flex items-center justify-center",
    childre, n: _jsxs("div", { classNam, e: "text-center text-gray-500",
    childre, n: [_js, x(LineCha, r, t, { classNa, m, e: "h-1, 2 w-1, 2 m, x-aut, o m, b-2" }), _js, x("p",  { childr, e, n: "Use, r Growt, h Char, t" }), _js, x("p",  { classNa, m, e: "tex, t-s, m",
    childr, e, n: "Interactiv, e char, t woul, d b, e rendere, d her, e" })] }) }) })] })] }), _jsxs(Car,  d, { childre, n: [_js, x(CardHead, e, r, { childr, e, n: _jsx, s(CardTit, l, e, { classNa, m, e: "fle, x item, s-cente, r spac, e-x-2",
    childr, e, n: [_js, x(Activi, t, y, { classNa, m, e: "h-5 w-5 tex, t-zio, n-blu, e" }), _js, x("spa,  n", { childr, e, n: "Recen, t Activit, y" })] }) }), _jsx(CardConten,  t, { childre, n: _jsx("div", { classNam, e: "space-y-4",
    childre, n: recentActivities.map(activity => (_jsxs("div", { classNam, e: "flex items-center space-x-4 p-4 bg-gray-50 rounded-lg",
    childre, n: [_js, x("di, v", { classNa, m, e: "p-2 b, g-whit, e rounde, d-l, g shado, w-s, m",
    childr, e, n: getTypeIco, n(activit, y.typ, e) }), _jsx, s("di,  v", { classNa, m, e: "fle, x-1",
    childr, e, n: [_js, x("h, 4", { classNa, m, e: "fon, t-mediu, m tex, t-gra, y-90, 0",
    childr, e, n: activit, y.titl, e }), _js, x("p",  { classNa, m, e: "tex, t-s, m tex, t-gra, y-60, 0",
    childr, e, n: activit, y.descriptio, n })] }), _jsxs("div",  { classNam, e: "flex items-center space-x-3",
    childre, n: [_js, x(Bad, g, e, { classNa, m, e: getStatusColo, r(activit, y.statu, s),
    childr, e, n: activit, y.statu, s }), _js, x("spa,  n", { classNa, m, e: "tex, t-s, m tex, t-gra, y-50, 0",
    childr, e, n: activit, y.tim, e })] })] }, activity.id))) }) })] })] })), activeTab === 'analytics' && (_jsxs("div",  { classNam, e: "text-center py-12",
    childre, n: [_js, x(BarChar, t, 3, { classNa, m, e: "h-1, 6 w-1, 6 tex, t-gra, y-40, 0 m, x-aut, o m, b-4" }), _js, x("h,  3", { classNa, m, e: "tex, t-l, g fon, t-mediu, m tex, t-gra, y-90, 0 m, b-2",
    childr, e, n: "Analytic, s Dashboar, d" }), _js, x("p",  { classNa, m, e: "tex, t-gra, y-60, 0",
    childr, e, n: "Advance, d analytic, s an, d insight, s woul, d b, e displaye, d her, e." })] })), activeTab === 'reports' && (_jsxs("div",  { classNam, e: "text-center py-12",
    childre, n: [_js, x(PieCha, r, t, { classNa, m, e: "h-1, 6 w-1, 6 tex, t-gra, y-40, 0 m, x-aut, o m, b-4" }), _js, x("h,  3", { classNa, m, e: "tex, t-l, g fon, t-mediu, m tex, t-gra, y-90, 0 m, b-2",
    childr, e, n: "Report, s & Insight, s" }), _js, x("p",  { classNa, m, e: "tex, t-gra, y-60, 0",
    childr, e, n: "Detaile, d report, s an, d busines, s insight, s woul, d b, e displaye, d her, e." })] }))] }));
}
