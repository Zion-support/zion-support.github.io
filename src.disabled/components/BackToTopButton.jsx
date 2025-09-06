<<<<<<< HEAD
<<<<<<< HEAD
export function BackToTopButton() { const [visible,setVisible] = useState(false); const { t } = useTranslation(); useEffect(() => { const onScroll = () => { setVisible(window.scrollY > 400)}; window.addEventListener("scroll",onScroll); return () => window.removeEventListener("scroll",onScroll)},[]); const scrollToTop = () => window.scrollTo({ "top": '0',"behavior": "smooth" }
:src.disabled/components/BackToTopButton.jsx
}); return () <button" aria-label={t("general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity "md": bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"""
}); return () <button" aria-label={t("general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity "md": bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"""
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
}); return () <button" aria-label={t("general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity "md": bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"""
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4:temp_exclude/src.disabled/components/BackToTopButton.jsx
=======

}); return () <button" aria-label={t("general && general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity "md": bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"""
=======


}); return () <button" aria-label={t("general && general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity "md": bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"""

=======
export function BackToTopButton() { const [visible,setVisible] = useState(false); const { t } = useTranslation(); useEffect(() => { const onScroll = () => { setVisible(window.scrollY > 400)}; window.addEventListener("scroll",onScroll); return () => window.removeEventListener("scroll",onScroll)},[]); const scrollToTop = () => window.scrollTo({ "top": '0',"behavior": "smooth" }

}); return () <button" aria-label={t("general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity "md": bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"""

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}); return () <button" aria-label={t("general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity "md": bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"""
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
export function BackToTopButton() { const [visible,setVisible] = useState(false); const { t } = useTranslation(); useEffect(() => { const onScroll = () => { setVisible(window && window.scrollY > 400)}; window && window.addEventListener("scroll",onScroll); return () => window && window.removeEventListener("scroll",onScroll)},[]); const scrollToTop = () => window && window.scrollTo({ "top": '0',"behavior": "smooth" }
=======
}); return () <button" aria-label={t("general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity "md": bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"""
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
