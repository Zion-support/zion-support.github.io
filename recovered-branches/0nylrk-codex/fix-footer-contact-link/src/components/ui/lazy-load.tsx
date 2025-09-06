  loadingComponent?: ReactNode;
  className?: string;
}
  height = "200px";
  width = "100%";
  children;
  loadingComponent;
  className}: LazyLoadProps) {;
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
          setIsVisible(true);
          observer && observer.disconnect();
        }
      }
      {
        root_margin: "200px", // Start loading when element is within 200px of viewport;
        threshold: 0.1}
    );
    }
    return () => {
      // Check condition
if ( {) {
  $2
}
        observer.unobserve (container_ref.current);
      }
    }
  }, []);
    <Skeleton
      style={{ height, width }}
      className="rounded-md bg-zion-blue-light/20"
    />;
  );
  return (
    <div
      ref={containerRef}
=======
;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      // Simulate loading delay (remove in production);
      const timer = set_timeout (() => {
        setIsLoaded (true);
      }, 500);
;
      return () => clear_timeout (timer);
    }
  }, [is_visible]);
;
  const defaultLoadingComponent = (
    <Skeleton;
      style={{ height, width }}
      className="rounded - md bg - zion - blue - light / 20";
    />);
;
  return (
    <div;
      ref={container_ref}
      className={cn ("transition - opacity duration - 500",
        is_loaded ? "opacity - 100" : "opacity - 0";
        class_name)}
    >;
      {is_visible ? (
        <>;
          {!is_loaded && (loading_component || defaultLoadingComponent)}
          {is_loaded && children}
        </>) : (
        loading_component || defaultLoadingComponent)}
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
