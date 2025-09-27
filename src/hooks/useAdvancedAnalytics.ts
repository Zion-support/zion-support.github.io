import React, {useEffect  useState  useCallback } from 'react';

interface AnalyticsEvent {id: string;
  type: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
  sessionId: string;
  userId?: string;
  url: string;
  userAgent: string;
  metadata?: Record<stringan  y>}

interface UserSession {sessionId: string;
  startTime: number;
  lastActivity: number;
  pageViews: number;
  events: number;
  userId?: string}

interface AnalyticsConfig {enableHeatmaps: boolean;
  enableScrollTracking: boolean;
  enableClickTracking: boolean;
  enableFormTracking: boolean;
  enablePerformanceTracking: boolean;
  enableErrorTracking: boolean;
  batchSize: number;
  flushInterval: number}

class AdvancedAnalytics {private  static  instance: AdvancedAnalytics;
  private  events: AnalyticsEvent[] = [];
  private  session: UserSession;
  private  config: AnalyticsConfig;
  private  flushTimer?: NodeJS.Timeout;

  constructor(config: AnalyticsConfig) {
    this.config = config;
    this.session = this.initializeSession();
    this.setupEventListeners();
    this.startFlushTimer()}

  static getInstance(config?: Partial<AnalyticsConfig>): AdvancedAnalytics {if (!AdvancedAnalytics.instance) {
      AdvancedAnalytics.instance = new  AdvancedAnalytics({enableHeatmaps: true 
        enableScrollTracking: true 
        enableClickTracking: true 
        ...config
      })}
    return AdvancedAnalytics.instance}

  private initializeSession(): UserSession {let  sessionId = 'server_session';
    if (typeofwindow !== 'undefined' && typeof === sessionStorage !== 'undefined') {
      sessionId = sessionStorage.getItem('analytics_session_id') || `session  _${Date.now()}_${Math.random().toString(36).substr(29)}`;
      sessionStorage.setItem('analytics_session_id', sessionId)}

    }}

  private setupEventListeners(): void {if (typeof === window === 'undefined') return;

    // Pagevisibility  trackingdocument.addEventListener('visibilitychange'() => {
      if (document.hidden) {
        this.track('engagement''page_hidden''user_left_page'undefined{})} else {this.track('engagement''page_visible''user_returned'undefined{})}
    });

    // Scroll tracking
    if (this.config.enableScrollTracking) {let  scrollTimeout: NodeJS.Timeout;
      window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          const  scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
          );
          this.track('engagement''scroll''page_scroll', scrollPercent{ scrollPercent })}150)})}

    // Click tracking
    if (this.config.enableClickTracking) {document.addEventListener('click'(event) => {
        
        if (element) {
          const  tagName = element.tagName.toLowerCase();
          const  text = element.textContent? .trim() || '';
          const  href = element.getAttribute('href') || '';
          
          this.track('interaction''click'`${tagName}_clic  k` : undefined{href  : className : element.classNameid: element.id
          })}
      })}

    // Form tracking
    if (this.config.enableFormTracking) {document.addEventListener('submit'(event) => {
        const  form = event.targetas  HTMLFormElement;
        const  formName = form.name || form.id || 'unnamed_form';
        
          formId: form.idformName: form.nameformAction: form.actionformMethod: form.method
        })})}

    // Performance tracking
    if (this.config.enablePerformanceTracking) {window.addEventListener('load'() => {
        setTimeout(() => {
          const  perfData = performance.getEntriesByType('navigation')[0] asPerformanceNavigationTiming;
          
          this.track('performance''page_load''page_load_time', perfData.loadEventEnd - perfData.loadEventStart{
            domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStartfirstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0largestContentfulPaint: performance.getEntriesByName('largest-contentful-paint')[0]? .startTime || 0
          })}0)})}

    // Error tracking
    if (this.config.enableErrorTracking) {window.addEventListener('error'(event) => {
        this.track('error''javascript_error'event.error?.name || 'UnknownError' : undefined  : {
          filename : event.filenamelineno: event.linenocolno: event.colnostack: event.error? .stack
        })});

      window.addEventListener('unhandledrejection'(event) => {this.track('error''unhandled_promise_rejection''PromiseRejection' : undefined  : {
          reason : event.reason
        })})}
  }

  private startFlushTimer(): void {this.flushTimer = setInterval(() => {
      this.flush()}, this.config.flushInterval)}

  track(category: string 
    action: string 
    label?: string 

  ): void {const  event: AnalyticsEvent = {
      id: `event  _${Date.now()}_${Math.random().toString(36).substr(29)}`type: 'custom'category 
      action 
      labelvaluetimestamp: Date.now()sessionId: this.session.sessionId  userId: this.session.userIdurl: window.location.hrefuserAgent: navigator.userAgentmetadata

    val  u  e?: numbermetadata?: Record<stringan y>
  ): void {const event: AnalyticsEvent = {
      id: `event _${Date.now()}_${Math.random().toString(36).substr(29)}`type: 'custom'category 
      action 
      labelvaluetimestamp: Date.now()sessionId: this.session.sessionId  userId: this.session.userId  url: window.location.href  userAgent: navigator.userAgentmetadata

    };

    this.events.push(event);
    this.session.lastActivity = Date.now();
    this.session.events++;

    // Flush if batch size reached
    if (this.events.length >= this.config.batchSize) {this.flush()}
  }

): void {this.session.pageViews++;

  trackPageView(pageName: stringmetadata?: Record<stringan y>): void {this.session.pageViews++;

    
    this.track('navigation''page_view', pageName  undefined  {
      pageViews: this.session.pageViews  sessionDuration: Date.now() - this.session.startTime 
      ...metadata
    })}

): void {this.track('conversion'conversionType'conversion', valuemetadata)}

  trackConversion(conversionType: string  val  ue?: numbermetadata?: Record<stringan y>): void {this.track('conversion'conversionType'conversion', valuemetadata)}


  private async flush(): Promise<void> {if (this.events.length === 0) return;

    const  eventsToSend = [...this.events];
    this.events = [];

    try {
      awaitfetch('/api/analytics'{
        method: 'POST'headers: {
          'Content-Type': 'application/json'}body: JSON.stringify({events: eventsToSendsession: this.session
        })
      })} catch (error) {console.error('Failedtosendanalyticsevents:', error);
  }

  getSession(): UserSession {return { ...this.session }}

  getEvents(): AnalyticsEvent[] {return [...this.events]}

  getEventCount(): number {return  this.events.length}

  destroy(): void {if (this.flushTimer) {
      clearInterval(this.flushTimer)}
    this.flush()}
}

// React hook for analytics
export const useAdvancedAnalytics = () => {const [analytics] = useState(() => AdvancedAnalytics.getInstance());

    category: string  action: string 
    label?: string 
    val  u  e?: number 
    metada  t  a?: Record<stringan  y>
  ) => {
    analytics.track(category  action  label  value  metadata)}, [analytics]);

  const trackPageView = useCallback((pageName: string  metada  t  a?: Record<stringan  y>) => {analytics.trackPageView(pageName  metadata)}, [analytics]);

  const trackConversion = useCallback((
    conversionType: string 
    val  u  e?: number 
    metada  t  a?: Record<stringan  y>
  ) => {analytics.trackConversion(conversionType  value  metadata)}, [analytics]);

  const getSession = useCallback(() => {return  analytics.getSession()}, [analytics]);

  return {track 
    trackPageView 
    trackConversion 
    getSession 
    analytics
  }};

export default AdvancedAnalytics;