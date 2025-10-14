export const analyticsConfig = {googleAnalytics: {
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '&apos;,
    enabled: process.env.NODE_ENV === &apos;production&apos;,
    pageView: &apos;page_view&apos;,
    click: &apos;click&apos;,
    scroll: &apos;scroll&apos;,
    formSubmit: &apos;form_submit&apos;,
    page: &apos;page&apos;,
    section: &apos;section&apos;,;
    action: &apos;action'}
}