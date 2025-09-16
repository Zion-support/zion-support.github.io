
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface LazyLoadProps {
  height?: string | number;
  width?: string | number;
  children: ReactNode;
  loadingComponent?: ReactNode;
  className?: string;
}

export function LazyLoad({
  height = "200px",
  width = "100%",
  children,
  loadingComponent,
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };

  useEffect(() => {
    if (isVisible) {
      // Simulate loading delay (remove in production)
      const timer = setTimeout(() => {
        setIsLoaded(true);
      className="rounded-md bg-zion-blue-light/20"
    />
  );

  return (
    <div
      ref={containerRef}
        isLoaded ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {isVisible ? (
        <>
          {!isLoaded && (loadingComponent || defaultLoadingComponent)}
          {isLoaded && children}
        </>
      ) : (
        loadingComponent || defaultLoadingComponent
      )}
    </div>
  );
}
