export const analytics Config = {
  google Analytics: {
    measurement Id: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
    enabled: process.env.NODE_ENV === 'production',
    page View: 'page_view',
    click: 'click',
    scroll: 'scroll',
    form Submit: 'form_submit',
    page: 'page',
    section: 'section',
    action: 'action';
  }
}