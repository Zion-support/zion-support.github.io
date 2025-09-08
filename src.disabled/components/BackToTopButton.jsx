export function BackToTopButton() { const [visible,setVisible] = useState(false); const { t } = useTranslation(); useEffect(() => { const onScroll = () => { setVisible(window.scrollY > 400)}; window.addEventListener("scroll",onScroll); return () => window.removeEventListener("scroll",onScroll)},[]); const scrollToTop = () => window.scrollTo({ "top": '0',"behavior": "smooth" }
<<<<<<< HEAD





