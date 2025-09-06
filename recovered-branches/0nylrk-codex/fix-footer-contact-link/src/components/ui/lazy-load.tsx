 interface LazyLoadProps {
  height?: string | number;
width?: string | number;
children: ReactNode;
loadingComponent?: ReactNode;
className?: string 
}export function LazyLoad ({
  height = "200px";
width = "100%";
children;
loadingComponent;
className 
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState (false);
const [isLoaded, setIsLoaded] = useState (false);
const containerRef = useRef<HTMLDivElement> (null);
const observer = new IntersectionObserver ( (entries) => {
  if (entries[0].isIntersecting) {
  threshold: 0.1 
});
useEffect ( () => {
  if (isVisible) {
  //Simulate loading delay (remove in production) return () => clearTimeout (timer) 
}
}, [isVisible]);
const defaultLoadingComponent = (<Skeleton />);
return (<div) 
}> {
  isVisible ? (<> {
  !isLoaded && (loadingComponent || defaultLoadingComponent) 
}{
  isLoaded && children 
}</>) : (loadingComponent || defaultLoadingComponent) 
}</div>) 
}