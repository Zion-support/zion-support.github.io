export function Sonner({ position = 'bottom-right', richColors = true, closeButton = true }) {
    return (<div className={`fixed ${position === 'top-left' ? 'top-4 left-4' :
            position === 'top-right' ? 'top-4 right-4' :
                position === 'bottom-left' ? 'bottom-4 left-4' :
                    'bottom-4 right-4'} z-50`}>
      {/* Sonner toast container */}
<<<<<<< HEAD
    </div>);

export const toast = {
<<<<<<< HEAD
    success: (message) => // // console.log('Success:', message),
    error: (message) => // // console.log('Error:', message),
    info: (message) => // // console.log('Info:', message),
    warning: (message) => // // console.log('Warning:', message),
    loading: (message) => // // console.log('Loading:', message),
    dismiss: (toastId) => // // console.log('Dismiss:', toastId)
=======
    success: (message) => // // // // // // // console.log('Success:', message),
    error: (message) => // // // // // // // console.log('Error:', message),
    info: (message) => // // // // // // // console.log('Info:', message),
    warning: (message) => // // // // // // // console.log('Warning:', message),
    loading: (message) => // // // // // // // console.log('Loading:', message),
    dismiss: (toastId) => // // // // // // // console.log('Dismiss:', toastId)
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
    </div>)}
export const toast = {
  success: (message) => console.log('Success:', message),
    error: (message) => console.log('Error:', message),
    info: (message) => console.log('Info:', message),
    warning: (message) => console.log('Warning:', message),
    loading: (message) => console.log('Loading:', message),
    dismiss: (toastId) => console.log('Dismiss:',
  toastId)







>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
};
}