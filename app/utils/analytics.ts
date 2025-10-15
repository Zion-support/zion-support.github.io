// Global gtag function declaration
declare global { interface Window {}
    gtag: (command: string, targetId: string, config?: Record<string, unknown></string></string>) => void; }
}
export const analytics = { track: (event: string, properties: Record<string, unknown></string></string> = { }) => { if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, properties)}
      window.gtag('event', event, properties); }
  },
  page: (page: string) => { if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {}
        page_path: page });
    }
  }
};

export default NotFoundPage;