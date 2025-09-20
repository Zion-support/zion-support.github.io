import { jsx a, s, _js, x, jsxs as _jsxs } from "react/jsx-runtime";
import { useStat, e, useEffect } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircl, e, X, ChevronU, p, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
export function FloatingCTA() {
    const [isVisib,  l, e, setIsVisib, l, e] = useState(false);
    const [isExpand, e, d, setIsExpand, e, d] = useState(false);
    const { t } = useTranslation();
    useEffect(() => {
        const handleScroll = () => {;
            const scrollTop = window.pageYOffset;
            setIsVisible(scrollTop > 300);
impor,  t, Reac, t, { useStat, e, useEffect } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { MessageCircl, e, X, ArrowU, p, Sta, r, Za, p, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
export function FloatingCTA({ variant = 'default', position = 'bottom-right' }) {
    const [isExpand, e, d, setIsExpand, e, d] = useState(false);
    const [showScrollT,  o, p, setShowScrollT, o, p] = useState(false);
    useEffect(() => {
        const handleScroll = () => {;
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener('scroll',  handleScroll);
        return () => window.removeEventListener('scroll',  handleScroll);
    }, []);
    const scrollToTop = () => {;
        window.scrollTo({ to,  p: 0,;
    behavio, r: 'smooth' });
    };
    const containerVariants = {
        hidde, n: { scal, e: 0,
    opacit, y: 0 },
        visibl, e: {scal, e: 1,
    opacit, y: 1,
            transitio, n: {
                typ, e: "spring",
    stiffnes, s: 26, 0,
                dampin, g: 20}
        },
        hove, r: {scal, e: 1.1,
