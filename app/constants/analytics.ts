export const analyticsConfig = {
  googleAnalytics: {
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
    enabled: process.env.NODE_ENV === 'production',
    pageView: 'page_view',
    click: 'click',
    scroll: 'scroll',
    formSubmit: 'form_submit',
    page: 'page',
    section: 'section',
    action: 'action',
  }
}