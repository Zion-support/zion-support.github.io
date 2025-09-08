export function Sonner({ position = 'bottom-right', richColors = true, closeButton = true }) {
    return (<div className={`fixed ${position === 'top-left' ? 'top-4 left-4' :
            position === 'top-right' ? 'top-4 right-4' :
                position === 'bottom-left' ? 'bottom-4 left-4' :
                    'bottom-4 right-4'} z-50`}>
      {/* Sonner toast container */}
    </div>);
}
export const toast = {
    success: (message) => // console.log removed for production,
    error: (message) => // console.log removed for production,
    info: (message) => // console.log removed for production,
    warning: (message) => // console.log removed for production,
    loading: (message) => // console.log removed for production,
    dismiss: (toastId) => // console.log removed for production
};
