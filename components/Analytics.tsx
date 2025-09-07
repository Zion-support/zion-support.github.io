

interface AnalyticsProps {
  className?: string;
  children?: React.ReactNode;
}

const Analytics: React.FC<AnalyticsProps> = ({ trackingId = 'G-XXXXXXXXXX }) => {
  useEffect(() => {
    // Google Analytics 4
    if (typeof window !== undefined' && trackingId) {
      // Load gtag script

      const script = document.createElement('script);
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

  }
  // Track form submissions
  const trackFormSubmission = (formName: string) => {
    trackEvent(form_submit', {}
  // Track external link clicks
  const trackExternalLink = (url: string, linkText: string) => {
    trackEvent('external_link_click, {

  return (
    <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Performance monitoring
            if (performance' in window) {
              window.addEventListener('load, function() {
                setTimeout(function() {


=======

      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      gtag(js', new Date());
      gtag('config, trackingId, {
        page_title: document.title,
        page_location: window.location.href});

      // Track page views
      gtag(event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href});
    }
  }, [trackingId]);

  return null;
}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
