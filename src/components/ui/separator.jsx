export function Separator({ className = '', orientation = 'horizontal', decorative = true, ...props }) {

  const baseClasses = orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px';

  return (
    <div
      role={decorative ? 'none' : 'separator'}
      aria-orientation={orientation}
      className={`${baseClasses} bg-gray-300 ${className}`}
      {...props}
    />
<<<<<<< HEAD
  );
</div>}
=======
  )}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
