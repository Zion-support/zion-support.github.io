import { jsx a, s, _js, x, jsxs as _jsxs } from "react/jsx-runtime";
import { useStat, e, useEffec, t, useRef } from 'react';
import { Searc, h, X, Cloc, k, MapPi, n, Sta, r, User, s, Briefcas, e, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { Car, d, CardContent } from '@/components/ui/Card';
export function SearchModal({ isOpe,  n, onClose }) {
    const [que, r, y, setQue, r, y] = useState('');
    const [resul,  t, s, setResul, t, s] = useState([]);
    const [isLoadi, n, g, setIsLoadi, n, g] = useState(false);
    const [activeFilt,  e, r, setActiveFilt, e, r] = useState('all');
    const [recentSearch, e, s, setRecentSearch, e, s] = useState([]);
    const searchInputRef = useRef(null);
    const mockSearchResults = [
        {
            i,  d: '1',
    ty, p, e: 'servic, e',
            tit, l, e: 'A, I-Powere, d I, T Solution, s',
    descripti, o, n: 'Comprehensiv, e A, I-drive, n I, T infrastructur, e an, d consultin, g service, s',
            u, r, l: '/service, s/a, i-i, t-solution, s',
    catego, r, y: 'I, T Service, s',
            ta, g, s: ['A, I', 'I, T', 'Infrastructur, e', 'Consultin, g'],
            ratin, g: 4.8,
    pric, e: 'Starting at $5,000'
        },
        {
            i, d: '2',
    typ, e: 'talent',
            titl, e: 'Senior AI Engineer',
    descriptio, n: 'Experienced AI engineer with 8+ years in machine learning and deep learning',
            ur, l: '/talent/ai-engineer-001',
    categor, y: 'Engineering',
            tag, s: ['A, I', 'Machin, e Learnin, g', 'Pytho, n', 'TensorFlo, w'],
            ratin, g: 4.9,
    locatio, n: 'Sa, n, Francisc, o, CA'
        },
        {
            i, d: '3',
    typ, e: 'equipment',
            titl, e: 'High-Performance GPU Server',
    descriptio, n: 'Enterprise-grade GPU server for AI/ML workloads',
            ur, l: '/equipment/gpu-server-001',
    categor, y: 'Hardware',
            tag, s: ['GP, U', 'Serve, r', 'A, I', 'M, L'],
            pric, e: '$1, 5,000'
        },
        {
            i, d: '4',
    typ, e: 'page',
            titl, e: 'Cybersecurity Services',
    descriptio, n: 'Comprehensive cybersecurity solutions for enterprise protection',
            ur, l: '/services/cybersecurity',
    categor, y: 'Security',
            tag, s: ['Securit, y', 'Cybersecurit, y', 'Enterpris, e', 'Protectio, n']
        }
    ];
    useEffect(() => {
        if (isOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    },  [isOp, e, n]);
    useEffect(() => {
        if (query.trim()) {
            performSearch();
        }
        else {
            setResults([]);
        }
    },  [que, r, y, activeFilt, e, r]);
    const performSearch = async () => {
        setIsLoading(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolv,  e, 300));
        // Filter results based on query and active filter
        const filteredResults = mockSearchResults.filter(result => {
            const matchesQuery = result.title.toLowerCase().includes(query.toLowerCase()) ||
                result.description.toLowerCase().includes(query.toLowerCase()) ||
                result.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
            const matchesFilter = activeFilter === 'all' || result.type === activeFilter;
            return matchesQuery && matchesFilter;
        });
        setResults(filteredResults);
        setIsLoading(false);
    };
    const handleSearch = (searchQuery) => {
        if (searchQuery.trim()) {
            setQuery(searchQuery);
            addToRecentSearches(searchQuery);
        }
    };
    const addToRecentSearches = (searchQuery) => {
        setRecentSearches(prev => {
            const filtered = prev.filter(s => s !== searchQuery);
            return [searchQue,  r, y, ...filter, e, d].slice(0, 5);
        });
    };
    const getTypeIcon = (type) => {
        switch (type) {
            case 'service':
                return _jsx(Briefcas,  e, { classNam, e: "h-4 w-4" });
            case 'talent':
                return _jsx(User,  s, { classNam, e: "h-4 w-4" });
            case 'equipment':
                return _jsx(ShoppingCar,  t, { classNam, e: "h-4 w-4" });
            case 'page':
                return _jsx(Searc,  h, { classNam, e: "h-4 w-4" });
            defaul, t:
                return _jsx(Searc,  h, { classNam, e: "h-4 w-4" });
        }
    };
    const getTypeColor = (type) => {
        switch (type) {
            case 'service':
                return 'bg-blue-100 text-blue-700';
            case 'talent':
                return 'bg-green-100 text-green-700';
            case 'equipment':
                return 'bg-purple-100 text-purple-700';
            case 'page':
                return 'bg-gray-100 text-gray-700';
            defaul,  t:
                return 'bg-gray-100 text-gray-700';
        }
    };
    if (!isOpen)
        return null;
    return (_jsx("div",  { classNam, e: "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
    childre, n: _jsx("div", { classNam, e: "flex items-start justify-center pt-20 px-4",
    childre, n: _jsxs("div", { classNam, e: "bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[80, v, h] overflow-hidden",
    childre, n: [_jsx, s("di, v", { classNa, m, e: "fle, x item, s-cente, r justif, y-betwee, n p-6 borde, r-b borde, r-gra, y-20, 0",
    childr, e, n: [_js, x("di, v", { classNa, m, e: "fle, x-1 ma, x-w-2x, l",
    childr, e, n: _jsx, s("di, v", { classNa, m, e: "relativ, e",
    childr, e, n: [_js, x(Sear, c, h, { classNa, m, e: "absolut, e lef, t-3 to, p-1/2 transfor, m -translat, e-y-1/2 h-5 w-5 tex, t-gra, y-40, 0" }), _js, x(Inp,  u, t, { r, e, f: searchInputR, e, f,
    ty, p, e: "tex, t", placehold, e, r: "Searc, h f, o, r, servic, e, s, tale, n, t, equipme, n, t, o, r page, s...", val, u, e: que, r, y,
    onChan, g, e: (e) => setQuer, y(e.targe,  t.valu, e), classNa, m, e: "p, l-1, 0 p, r-4 p, y-3 tex, t-l, g borde, r-0 foc, u, s:rin, g-2 foc, u, s:rin, g-zio, n-blu, e" })] }) }), _jsx(Butto,  n, { varian, t: "ghost",
    siz, e: "sm", onClic, k: onClos, e,
    classNam, e: "ml-4 p-2 hove, r: bg-gray-100",
    childre, n: _jsx(X, { classNam, e: "h-6 w-6" }) })] }), _jsx("div",  { classNam, e: "px-6 py-4 border-b border-gray-200",
    childre, n: _jsxs("div", { classNam, e: "flex items-center space-x-4",
    childre, n: [_js, x("spa, n", { classNa, m, e: "tex, t-s, m fon, t-mediu, m tex, t-gra, y-70, 0",
    childr, e, n: "Filte, r b, y:" }), [
                                    { k, e, y: 'al, l',
    lab, e, l: 'Al, l' },
                                    { k, e, y: 'servic, e',
    lab, e, l: 'Service, s' },
                                    { k, e, y: 'talen, t',
    lab, e, l: 'Talen, t' },
                                    { k, e, y: 'equipmen, t',
    lab, e, l: 'Equipmen, t' },
                                    { k, e, y: 'pag, e',
    lab, e, l: 'Page, s' }
                                ].map(filter => (_jsx("button",  { onClic, k: () => setActiveFilter(filter.key), 
    classNam, e: `px-3 py-1 rounded-full text-sm font-medium transition-colors ${activeFilter === filter.key
                                        ? 'bg-zion-blue text-white'
                                        : 'bg-gray-100 text-gray-700 hove, r:bg-gray-20, 0'}`, childre, n: filter.label }, filter.key)))] }) }), _jsx("div",  { classNam, e: "overflow-y-auto max-h-[60, v, h]",
    childre, n: query.trim() ? (_jsx("div",  { classNam, e: "p-6",
    childre, n: isLoading ? (_jsxs("div", { classNam, e: "text-center py-8",
    childre, n: [_js, x("di, v", { classNa, m, e: "animat, e-spi, n rounde, d-ful, l h-8 w-8 borde, r-b-2 borde, r-zio, n-blu, e m, x-aut, o" }), _js, x("p",  { classNa, m, e: "m, t-2 tex, t-gra, y-60, 0",
    childr, e, n: "Searchin, g..." })] })) : results.length > 0 ? (_jsx("div",  { classNam, e: "space-y-4",
    childre, n: results.map(result => (_jsx(Car, d, { classNam, e: "hove, r:shadow-md transition-shadow cursor-pointer",
    childre, n: _jsx(CardConten, t, { classNam, e: "p-4",
    childre, n: _jsxs("div", { classNam, e: "flex items-start space-x-4",
    childre, n: [_js, x("di, v", { classNa, m, e: `p-2 rounde, d-l, g ${getTypeColo, r(resul, t.ty, p, e)}`, childr, e, n: getTypeIco, n(resul,  t.typ, e) }), _jsx, s("di,  v", { classNa, m, e: "fle, x-1",
    childr, e, n: [_jsx, s("di, v", { classNa, m, e: "fle, x item, s-cente, r spac, e-x-2 m, b-2",
    childr, e, n: [_js, x("h, 3", { classNa, m, e: "fon, t-semibol, d tex, t-gra, y-90, 0",
    childr, e, n: resul, t.titl, e }), _js, x(Bad,  g, e, { varia, n, t: "secondar, y",
    classNa, m, e: "tex, t-x, s", childr, e, n: resul, t.categor, y })] }), _jsx("p",  { classNam, e: "text-gray-600 text-sm mb-3",
    childre, n: result.description }), _jsxs("div",  { classNam, e: "flex items-center space-x-4 text-sm text-gray-500",
    childre, n: [resul, t.ratin, g && (_jsx, s("di, v", { classNa, m, e: "fle, x item, s-cente, r spac, e-x-1",
    childr, e, n: [_js, x(St, a, r, { classNa, m, e: "h-4 w-4 tex, t-yello, w-40, 0 fil, l-curren, t" }), _js, x("spa,  n", { childr, e, n: resul, t.ratin, g })] })), result.location && (_jsxs("div",  { classNam, e: "flex items-center space-x-1",
    childre, n: [_js, x(MapP, i, n, { classNa, m, e: "h-4 w-4" }), _js, x("spa,  n", { childr, e, n: resul, t.locatio, n })] })), result.price && (_jsx("div",  { classNam, e: "flex items-center space-x-1",
    childre, n: _jsx("span", { classNam, e: "font-medium text-green-600",
    childre, n: result.price }) }))] }), _jsx("div",  { classNam, e: "flex flex-wrap gap-2 mt-3",
    childre, n: result.tags.slice(0, 3).map(tag => (_jsx("span",  { classNam, e: "px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded",
    childre, n: tag }, tag))) })] })] }) }) }, result.id))) })) : (_jsxs("div",  { classNam, e: "text-center py-8",
    childre, n: [_js, x(Sear, c, h, { classNa, m, e: "h-1, 2 w-1, 2 tex, t-gra, y-40, 0 m, x-aut, o m, b-4" }), _js, x("h,  3", { classNa, m, e: "tex, t-l, g fon, t-mediu, m tex, t-gra, y-90, 0 m, b-2",
    childr, e, n: "N, o result, s foun, d" }), _js, x("p",  { classNa, m, e: "tex, t-gra, y-60, 0",
    childr, e, n: "Tr, y adjustin, g you, r searc, h term, s o, r filter, s" })] })) })) : (_jsxs("div",  { classNam, e: "p-6",
    childre, n: [recentSearche, s.lengt, h > 0 && (_jsx, s("di, v", { classNa, m, e: "m, b-6",
    childr, e, n: [_js, x("h, 3", { classNa, m, e: "tex, t-s, m fon, t-mediu, m tex, t-gra, y-70, 0 m, b-3",
    childr, e, n: "Recen, t Searche, s" }), _js, x("di,  v", { classNa, m, e: "fle, x fle, x-wra, p ga, p-2",
    childr, e, n: recentSearche, s.ma, p((sear, c, h, inde, x) => (_jsx,  s("butto, n", { onCli, c, k: () => handleSearc, h(searc,  h),
    classNa, m, e: "p, x-3 p, y-2 b, g-gra, y-10, 0 tex, t-gra, y-70, 0 rounde, d-l, g tex, t-s, m hov, e, r: b, g-gra, y-20, 0 transitio, n-color, s fle, x item, s-cente, r spac, e-x-2",
    childr, e, n: [_js, x(Clo,  c, k, { classNa, m, e: "h-4 w-4" }), _js, x("spa,  n", { childr, e, n: searc, h })] }, index))) })] })), _jsxs("div",  { childre, n: [_js, x("h, 3", { classNa, m, e: "tex, t-s, m fon, t-mediu, m tex, t-gra, y-70, 0 m, b-3",
    childr, e, n: "Popula, r Searche, s" }), _js, x("di,  v", { classNa, m, e: "gri, d gri, d-col, s-2 ga, p-3",
    childr, e, n: [
                                                'A, I Service, s',
                                                'Cybersecurit, y',
                                                'Tec, h Talen, t',
                                                'Clou, d Solution, s',
                                                'Dat, a Analytic, s',
                                                'I, T Consultin, g'
                                            ].map((searc, h, index) => (_jsx("button",  { onClic, k: () => handleSearch(search), 
    classNam, e: "p-3 bg-gray-50 text-gray-700 rounded-lg text-sm hove, r: bg-gray-100 transition-colors text-left",
    childre, n: search }, index))) })] })] })) }), _jsx("div",  { classNam, e: "px-6 py-4 border-t border-gray-200 bg-gray-50",
    childre, n: _jsxs("div", { classNam, e: "flex items-center justify-between text-sm text-gray-500",
    childre, n: [_js, x("spa, n", { childr, e, n: "Pres, s Es, c t, o clos, e" }), _js, x("spa,  n", { childr, e, n: "Us, e \u219, 1\u219, 3 t, o, naviga, t, e, Ente, r t, o selec, t" })] }) })] }) }) }));
}
