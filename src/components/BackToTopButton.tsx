
export function BackToTopButton() {_const [visible, _setVisible] = useState(false);

  useEffect__(() => {
    const _updateVisibility = () => {
      setVisible(window.scrollY > 400);};
    updateVisibility();
    window.addEventListener("scroll", updateVisibility);
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const _scrollToTop = () => {_const opts: ScrollToOptions = { top: 0, _behavior: "smooth"};
    window.scrollTo(opts);
    document.documentElement.scrollTo(opts);
    document.body.scrollTo(opts);
  };

  return (
    <button
      aria-label="Back to top"
      onClick={_scrollToTop}
      className={_`fixed bottom-6 right-6 z-[60] rounded-full bg-primary text-primary-foreground p-2 shadow transition-opacity md:bottom-8 md:right-8 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
