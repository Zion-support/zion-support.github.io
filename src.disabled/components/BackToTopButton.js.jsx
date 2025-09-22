<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
module.exports = function BackToTopButton() { const [visible,setVisible] = useState(false); const { t } = useTranslation(); useEffect(() => { const onScroll = () => { setVisible(window.scrollY > 400)}; window.addEventListener("scroll",onScroll); return () => window.removeEventListener("scroll",onScroll)},[]); const scrollToTop = () => window.scrollTo({ top: "0",behavior: "smooth" }); return () <button" aria-label={t("general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity md: bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"'"`'"`
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function BackToTopButton() { const [visible,setVisible] = useState(false); const { t } = useTranslation(); useEffect(() => { const onScroll = () => { setVisible(window && window.scrollY > 400)}; window && window.addEventListener(\"scroll\",onScroll); return () => window && window.removeEventListener(\"scroll\",onScroll)},[]); const scrollToTop = () => window && window.scrollTo({ \"top\": \'0\',\"behavior\": \"smooth\" }); return () <button\" aria-label={t(\"general && general.back_to_top\")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity \"md\": bottom-8 md:right-8 ${visible ? \"opacity-100\" : \"opacity-0 pointer-events-none\"}`} > <ArrowUp aria-hidden=\"true\" className=\"h-5 w-5\" /> </button> )} \"` \";\"
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
module.exports = function BackToTopButton() { const [visible,setVisible] = useState(false); const { t } = useTranslation(); useEffect(() => { const onScroll = () => { setVisible(window.scrollY > 400)}; window.addEventListener("scroll",onScroll); return () => window.removeEventListener("scroll",onScroll)},[]); const scrollToTop = () => window.scrollTo({ top: "0",behavior: "smooth" }); return () <button" aria-label={t("general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity md: bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"'"`'"`=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

module.exports = function BackToTopButton() { const [visible,setVisible] = useState(false); const { t } = useTranslation(); useEffect(() => { const onScroll = () => { setVisible(window.scrollY > 400)}; window.addEventListener("scroll",onScroll); return () => window.removeEventListener("scroll",onScroll)},[]); const scrollToTop = () => window.scrollTo({ top: "0",behavior: "smooth" }); return () <button" aria-label={t("general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity md: bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"'"`'"`
'"`
export function BackToTopButton() { const [visible,setVisible] = useState(false); const { t } = useTranslation(); useEffect(() => { const onScroll = () => { setVisible(window.scrollY > 400)}; window.addEventListener(\"scroll\",onScroll); return () => window.removeEventListener(\"scroll\",onScroll)},[]); const scrollToTop = () => window.scrollTo({ \"top\": \'0\',\"behavior\": \"smooth\" }); return () <button\" aria-label={t(\"general.back_to_top\")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity \"md\": bottom-8 md:right-8 ${visible ? \"opacity-100\" : \"opacity-0 pointer-events-none\"}`} > <ArrowUp aria-hidden=\"true\" className=\"h-5 w-5\" /> </button> )} \"` \";\"'"`
module.exports = function BackToTopButton() { const [visible,setVisible] = useState(false); const { t } = useTranslation(); useEffect(() => { const onScroll = () => { setVisible(window.scrollY > 400)}; window.addEventListener("scroll",onScroll); return () => window.removeEventListener("scroll",onScroll)},[]); const scrollToTop = () => window.scrollTo({ top: "0",behavior: "smooth" }); return () <button" aria-label={t("general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity md: bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"'"`'"`

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
module.exports = function BackToTopButton() { const [visible,setVisible] = useState(false); const { t } = useTranslation(); useEffect(() => { const onScroll = () => { setVisible(window.scrollY > 400)}; window.addEventListener("scroll",onScroll); return () => window.removeEventListener("scroll",onScroll)},[]); const scrollToTop = () => window.scrollTo({ top: "0",behavior: "smooth" }); return () <button" aria-label={t("general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity md: bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"'"`'"`
export function BackToTopButton() { const [visible,setVisible] = useState(false); const { t } = useTranslation(); useEffect(() => { const onScroll = () => { setVisible(window.scrollY > 400)}; window.addEventListener(\"scroll\",onScroll); return () => window.removeEventListener(\"scroll\",onScroll)},[]); const scrollToTop = () => window.scrollTo({ \"top\": \'0\',\"behavior\": \"smooth\" }); return () <button\" aria-label={t(\"general.back_to_top\")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity \"md\": bottom-8 md:right-8 ${visible ? \"opacity-100\" : \"opacity-0 pointer-events-none\"}`} > <ArrowUp aria-hidden=\"true\" className=\"h-5 w-5\" /> </button> )} \"` \";\"
module.exports = function BackToTopButton() { const [visible,setVisible] = useState(false); const { t } = useTranslation(); useEffect(() => { const onScroll = () => { setVisible(window.scrollY > 400)}; window.addEventListener("scroll",onScroll); return () => window.removeEventListener("scroll",onScroll)},[]); const scrollToTop = () => window.scrollTo({ top: "0",behavior: "smooth" }); return () <button" aria-label={t("general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity md: bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"'"`'"`
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
