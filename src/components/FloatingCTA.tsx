
export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 600, // Show CTA after scrolling 600px

      if (scrollPosition > threshold && !isClosed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isClosed]);

  const handleClose = () => {
    setIsClosed(true);
    setIsVisible(false)
  };

  if (!isVisible) return null;

            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
