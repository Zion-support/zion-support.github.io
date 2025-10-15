
<<<<<<< HEAD
) {
    const ref = useRef<HTMLElement>(null);

  useEffect(() => {

      ...options;
  
  });
=======
export function useIntersectionObserver(
callback: IntersectionObserverCallback,;
options?: IntersectionObserverInit;
) {
const ref  = useRef<HTMLElement>(null);

useEffect(() => {
const element  = ref.current;
if (!element) return;

const observer  = new IntersectionObserver(callback, {
threshold: 0.1,'"'"
rootMargin: '50px',";"
...options;
>>>>>>> cursor/fix-errors-and-merge-to-main-e36d

});

<<<<<<< HEAD
    return () => {
      observer.unobserve(element);
    };


=======
observer.observe(element);

return () => {
observer.unobserve(element);
};
export default useIntersectionObserver'"'"
>>>>>>> cursor/fix-errors-and-merge-to-main-e36d
