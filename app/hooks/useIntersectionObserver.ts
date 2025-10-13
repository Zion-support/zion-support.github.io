 cursor/fix-errors-and-merge-to-main-6ce7
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        setEntry(entry);
 origin/cursor/analyze-improve-and-deploy-application-1247
export default useIntersectionObserver;
