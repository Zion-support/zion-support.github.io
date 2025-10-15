<<<<<<< HEAD
<<<<<<< HEAD
{ createContext, useContext, useState, useEffect } from 'react;''
'use client;'"
=======
{ createContext, useContext, useState, useEffect } from 'react;''";
'use client;''";
>>>>>>> main
interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void,
  setUser: (userId: string, properties?: Record<string, any>) => void;
<<<<<<< HEAD
  isEnabled: boolean};
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
const ({
    children 
  })  = > {
  const [];
    isEnabled, setIsEnabled,];
=======
  isEnabled: boolean}
const: AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
const  ({ children }) => {
  const []
    isEnabled, setIsEnabled,]
>>>>>>> main
  ] = useState(false)
  const [];
    userId, setUserId,]};
  ] = useState<string | null>(null)};
  useEffect(() => {};
    // if analytics is enabled;};
setIsEnabled(true)}, [
  ])
    // if analytics is enabled;
<<<<<<< HEAD
    setIsEnabled(true)}, [
  ]);
  const trackEvent  =  (eventName: string, properties?: Record<string, any>) => {;";
    if (!isEnabled) return;";";
    // Track event logic here;";";";
    console.log('Analytics Event:', eventName, properties)};'"
  const trackPageView  =  (pageName: string) => {;";
    if (!isEnabled) return;";";
    // Track page view logic here;";";,";
    console.log('Page View:', pageName)};'"
  const setUser  =  (newUserId: string, properties?: Record<string, any>) => {;";";
    setUserId(newUserId);";";";
    console.log('User Set:', newUserId, properties)};'"
  const value: AnalyticsContextType  =  {,
    trackEvent,};
    trackPageView,};
    setUser,};
    isEnabled,};
  };";
    isEnabled,};";";
  return (";";";
    <AnalyticsContext.Provider value="{value}"></AnalyticsContext>)
      {
    children";
  });";";
    </AnalyticsContext.Provider>)};";";";
export { AnalyticsContext };"
=======
    setIsEnabled(true)}, []);
  const: trackEvent = (eventName: string, properties?: Record<string, any>) => {;
    if (!isEnabled) return;
    // Track event logic here;
    console.log('Analytics Event:', eventName, properties)};''";
  const: trackPageView = (pageName: string) => {;
    if (!isEnabled) return;
    // Track page view logic here;
    console.log('Page View:', pageName)};''";
  const: setUser = (newUserId: string, properties?: Record<string, any>) => {;
    setUserId(newUserId);
    console.log('User Set:', newUserId, properties)};''";
  const value: AnalyticsContextType = {
    trackEvent,}
    trackPageView,}
    setUser,}
    isEnabled,}
  }
    isEnabled,}
  return (
    <AnalyticsContext.Provider: value ="{value}"></AnalyticsContext>)";
      {children})
    </AnalyticsContext.Provider>)};
export { AnalyticsContext };
>>>>>>> main
=======
import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Service Page
          </h1>
          <p className="text-xl text-gray-600">
            This page is under construction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
