 export type ToastType = 'success' | 'error' | 'info' | 'warning';
return () => clearTimeout (timer) 
}, [toast.id, toast.duration, onRemove]);
const getIcon = () => {
  switch (toast.type) {
  case 'success': 
}
};
switch (toast.type) {
  case 'success': return 'border-green-500/20';
case 'error': return 'border-red-500/20';
case 'warning': return 'border-yellow-500/20';
case 'info': const getBackgroundColor = () => {
  switch (toast.type) {
  case 'success': return 'bg-green-500/10';
case 'error': return 'bg-red-500/10';
case 'warning': return 'bg-yellow-500/10';
case 'info': {
  toast.message 
}</p>) 
}</div> <button > <X className="w-4 h-4 text-white/60 hover:text-white" /> </button> </div> <motion.div className= {
  `h-full $ {
  toast.type === 'success' ? 'bg-green-400' : toast.type === 'error' ? 'bg-red-400' : toast.type === 'warning' ? 'bg-yellow-400' : /> </div> </motion.div>) 
};
<AnimatePresence> {
  toasts.map ( (toast) => (<ToastItem key= {
  toast.id 
}toast= {
  toast 
}onRemove= {
  onRemove 
}/>) ) 
}</AnimatePresence> </div>) 
};
// Hook for managing toasts 