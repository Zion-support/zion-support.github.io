 //Analytics event types export type AnalyticsEventType = | 'page view' | 'button click' | 'form submit' | 'form error' | 'search' | 'filter' | 'conversion' | 'listing view' | 'listing contact' | 'payment initiated' | 'payment completed' | 'signup' | 'login';
//Interface for analytics events const AnalyticsContext = createContext<AnalyticsContextType | undefined> (undefined);
//eslint-disable-next-line react-hooks/exhaustive-deps 
}, [location.pathname]);
//Function to track general analytics events try {
  //Store event in Supabase for persistent analytics await supabase.from ('analytics events') .insert ([ {
  
}catch (error) {
  console.error ('Error logging analytics event:', error) 
}
};
//Function to track conversion events const trackConversion = (conversionType: string, value?: number, metadata: Record<string any> = {
  
}) => {
  trackEvent ('conversion', {
  conversionType;
value;
...metadata 
}) 
};
//Clear events (for development or testing) const clearEvents = () => {
  setEvents ([]);
setLastEvent (null) 
};
{
  trackEvent, trackConversion, pageViews, lastEvent, events, clearEvents 
}
}> {
  children 
}</AnalyticsContext.Provider>) 
}//Cast is used here because the context default is undefined until provided // by `AnalyticsProvider`. The runtime check above ensures it's defined. return context as AnalyticsContextType 
};
