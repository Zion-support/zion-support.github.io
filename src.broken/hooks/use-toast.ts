 /** * Enhanced toast adapter that uses the global toast manager */ const toastAdapter = (props: ToastProps | string) => {
  if (typeof props === 'string') {
  return globalToastManager.showToast ({
  case 'success': type = ToastType.SUCCESS;
break;
default: // Enhanced useToast hook with global toast manager integration export const useToast = () => ({
  toast: toastAdapter, dismiss: (toastId?: string) => {
  if (toastId) {
  
};
// Additional methods from global toast manager showToast: globalToastManager.showToast.bind (globalToastManager);
getActiveToasts: globalToastManager.getActiveToasts.bind (globalToastManager);
getQueueLength: globalToastManager.getQueueLength.bind (globalToastManager);
dismissAll: globalToastManager.dismissAll.bind (globalToastManager);
// Convenience methods success: showToast.success;
error: showToast.error;
warning: showToast.warning;
info: showToast.info;
networkError: showToast.networkError;
authError: showToast.authError;
validationError: showToast.validationError;
criticalError: showToast.criticalError 
});
