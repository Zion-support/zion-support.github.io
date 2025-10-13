    const script = document.createElement('script');
    script.async = true;
    script['src'] = 'https: //www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';,
  return($3;)
  )}(window as any).dataLayer.push(args);}
    let maxScroll = 0;
    window.addEventListener('scroll', () => {const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (maxScroll % 25 === 0) { // Track at 25%, 50%, 75%, 100%;
          trackEvent('engagement', 'scroll_depth', maxScroll)}}
    const startTime = Date.now();
    window.addEventListener('beforeunload', () => {const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      trackEvent('engagement', 'time_on_page', timeOnPage)}})
// Track clicks on important elements;
    document.addEventListener('click', (event) => {const target = event.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();
if (tagName === 'a') {

        const href = (target as HTMLAnchorElement).href;
        trackEvent('engagement', 'link_click', {)
          link_url: href,
          link_text: target.textContent?.trim(),}})
      } else if (tagName === 'button') {trackEvent('engagement', 'button_click', {)
// Track form submissions;
    document.addEventListener('submit', (event) => {const form = event.target as HTMLFormElement;
      trackEvent('engagement', 'form_submit', {)
        form_id: form.id,
        form_class: form.className,
        form_action: form.action;,}})
    })
