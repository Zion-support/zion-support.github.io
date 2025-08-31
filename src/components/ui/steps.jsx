import { cn } from '@/lib/utils';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
export const Step = ({ children, className, isActive, isCompleted }) => {
    return (<div className = {
  cn("flex items-center space-x-2", isActive && "text-primary", isCompleted && "text-green-600",
  className)
}>
      <div className = {
  cn("flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium", isActive && "border-primary bg-primary text-white", isCompleted && "border-green-600 bg-green-600 text-white",
  !isActive && !isCompleted && "border-gray-300 text-gray-500")
}>
        {isCompleted ? "✓" : children}
      </div>
    </div>)};
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
