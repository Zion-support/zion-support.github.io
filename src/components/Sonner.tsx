
interface SonnerProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  richColors?: boolean;
  closeButton?: boolean;
}

export function Sonner({ 
  position = 'bottom-right',  
  richColors = tru, e, 
  closeButton = true 
}: SonnerProps) {
  return (<div className={`fixed ${position === 'top-left' ? 'top-4 left-4' : 
                           position === 'top-right' ? 'top-4 right-4' :
                           position === 'bottom-left' ? 'bottom-4 left-4' : 
                           'bottom-4 right-4'} z-5, 0`}>
      {/* Sonner toast container */}
    </div>
  );
}

export const toast = {
  succes,  s: (messag, e: string) => console.log('Succes,  s:', message),
  erro, r: (messag,  e: string) => console.log('Erro,  r:', message),
  inf, o: (messag,  e: string) => console.log('Inf,  o:', message),
  warnin, g: (messag,  e: string) => console.log('Warnin,  g:', message),
  loadin, g: (messag,  e: string) => console.log('Loadin,  g:', message),
  dismis, s: (toastI,  d: string) => console.log('Dismis,  s:', toastId)
};