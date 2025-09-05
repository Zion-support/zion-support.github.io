 // Render the app with proper provider structure ReactDOM.createRoot (document.getElementById ('root') !) .render (<React.StrictMode> <HelmetProvider> <WhitelabelProvider> <Router> <AuthProvider> <NotificationProvider> <AnalyticsProvider> <LanguageProvider authState= {
  {
  isAuthenticated: false, user: null 
}
}> <App /> <LanguageDetectionPopup /> </LanguageProvider> </AnalyticsProvider> </NotificationProvider> </AuthProvider> </Router> </WhitelabelProvider> </HelmetProvider> </React.StrictMode>);
