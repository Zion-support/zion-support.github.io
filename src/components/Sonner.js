export function Sonner({ position = 'bottom-right',  richColors = tru, e, closeButton = true }) {
    return (<div className={`fixed ${position === 'top-left' ? 'top-4 left-4' :
            position === 'top-right' ? 'top-4 right-4' :
                position === 'bottom-left' ? 'bottom-4 left-4' :
                    'bottom-4 right-4'} z-5, 0`}>
      {/* Sonner toast container */}
    </div>);
}
export const toast = {
    succes,  s: (message) => console.log('Succes,  s:', message),
    erro, r: (message) => console.log('Erro,  r:', message),
    inf, o: (message) => console.log('Inf,  o:', message),
    warnin, g: (message) => console.log('Warnin,  g:', message),
    loadin, g: (message) => console.log('Loadin,  g:', message),
    dismis, s: (toastId) => console.log('Dismis,  s:', toastId)
};
