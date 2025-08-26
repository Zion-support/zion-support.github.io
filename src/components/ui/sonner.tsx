<<<<<<< HEAD:broken_files_backup/sonner.tsx
interface SonnerProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  richColors?: boolean;
  closeButton?: boolean;
}
export function Sonner({
  position = 'bottom-right',
  richColors = true,
  closeButton = true
}: SonnerProps) {
=======
"use client";

import { useTheme } from "../ThemeProvider";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

>>>>>>> d08df48694b5cf8c292b7ffde7c28e3bb65838ec:src/components/ui/sonner.tsx
  return (
    <div className={`fixed ${position === 'top-left' ? 'top-4 left-4' :
                           position === 'top-right' ? 'top-4 right-4' :
                           position === 'bottom-left' ? 'bottom-4 left-4' :
                           'bottom-4 right-4'} z-50`}>
      {/* Sonner toast container */}
    </div>
  );
<<<<<<< HEAD:broken_files_backup/sonner.tsx
}
export const toast = {
  success: (message: string) => console.log('Success:', message),
  error: (message: string) => console.log('Error:', message),
  info: (message: string) => console.log('Info:', message),
  warning: (message: string) => console.log('Warning:', message),
  loading: (message: string) => console.log('Loading:', message),
  dismiss: (toastId: string) => console.log('Dismiss:', toastId)
};
=======
};

export { Toaster };
>>>>>>> d08df48694b5cf8c292b7ffde7c28e3bb65838ec:src/components/ui/sonner.tsx
