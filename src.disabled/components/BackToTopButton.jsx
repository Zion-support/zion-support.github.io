export function BackToTopButton() { const [visible,setVisible] = useState(false); const { t } = useTranslation(); useEffect(() => { const onScroll = () => { setVisible(window.scrollY > 400)}; window.addEventListener("scroll",onScroll); return () => window.removeEventListener("scroll",onScroll)},[]); const scrollToTop = () => window.scrollTo({ "top": '0',"behavior": "smooth" }

<<<<<<< HEAD
:src.disabled/components/BackToTopButton.jsx
}); return () <button" aria-label={t("general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity "md": bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"""
}); return () <button" aria-label={t("general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity "md": bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"""
}); return () <button" aria-label={t("general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity "md": bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"""

}); return () <button" aria-label={t("general && general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity "md": bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"""
=======
}); return () <button" aria-label={t("general && general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity "md": bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"""

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

}); return () <button" aria-label={t("general && general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity "md": bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"""

export function BackToTopButton() { const [visible,setVisible] = useState(false); const { t } = useTranslation(); useEffect(() => { const onScroll = () => { setVisible(window.scrollY > 400)}; window.addEventListener("scroll",onScroll); return () => window.removeEventListener("scroll",onScroll)},[]); const scrollToTop = () => window.scrollTo({ "top": '0',"behavior": "smooth" }

}); return () <button" aria-label={t("general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity "md": bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"""

<<<<<<< HEAD
}); return () <button" aria-label={t("general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity "md": bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"""
export function BackToTopButton() { const [visible,setVisible] = useState(false); const { t } = useTranslation(); useEffect(() => { const onScroll = () => { setVisible(window && window.scrollY > 400)}; window && window.addEventListener("scroll",onScroll); return () => window && window.removeEventListener("scroll",onScroll)},[]); const scrollToTop = () => window && window.scrollTo({ "top": '0',"behavior": "smooth" }
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}); return () <button" aria-label={t("general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity "md": bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"""
export function BackToTopButton() { const [visible,setVisible] = useState(false); const { t } = useTranslation(); useEffect(() => { const onScroll = () => { setVisible(window.scrollY > 400)}; window.addEventListener("scroll",onScroll); return () => window.removeEventListener("scroll",onScroll)},[]); const scrollToTop = () => window.scrollTo({ "top": '0',"behavior": "smooth" }
:src.disabled/components/BackToTopButton.jsx
}); return () <button" aria-label={t("general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity "md": bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"""
}); return () <button" aria-label={t("general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity "md": bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"""
ursor/add-new-services-and-deploy-updates-0462
}); return () <button" aria-label={t("general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity "md": bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"""
origin/cursor/integrate-build-improve-and-re-verify-c7b5
}); return () <button" aria-label={t("general.back_to_top")} onClick={scrollToTop} className={`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity "md": bottom-8 md:right-8 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`} > <ArrowUp aria-hidden="true" className="h-5 w-5" /> </button> )} "` ";"""
:temp_exclude/src.disabled/components/BackToTopButton.jsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
