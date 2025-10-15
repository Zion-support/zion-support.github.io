{ useContext } from 'react';'
{ AnalyticsContext } from '../contexts/AnalyticsContext';'
export const useAnalytics = () => {
const context = useContext(AnalyticsContext);
if (!context) {
throw new Error('useAnalytics must be used within an AnalyticsProvider');
}
return context;
};ursor/fix-errors-and-merge-to-main-234b
throw new Error('useAnalytics must be used within an AnalyticsProvider')}'
return context};
