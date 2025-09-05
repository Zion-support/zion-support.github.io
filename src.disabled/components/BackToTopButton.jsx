' \"export\": function BackToTopButton () { const [visible,setVisible] = useState (false) const { t } = useTranslation () useEffect ( () => { \''\';\'"\";
" export: function BackToTopButton () { const [visible,setVisible] = useState (false) const { t } = useTranslation () useEffect ( () => { """;""";"""
export function BackToTopButton() { const [visible,setVisible] = useState(false); const { t } = useTranslation(); useEffect(() => { const onScroll = () => { setVisible(window.scrollY > 400)}; window.addEventListener("scroll",onScroll); return () => window.removeEventListener("scroll",onScroll)},[]); const scrollToTop = () => window.scrollTo({ "top": '0',"behavior": "smooth" }
<<<<<<< HEAD
}); return () <button" aria-label={t("general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity "md": bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"""
=======
}); return () <button" aria-label={t("general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity "md": bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"""
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
